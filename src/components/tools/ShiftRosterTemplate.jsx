import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/fi';

dayjs.extend(customParseFormat);
dayjs.locale('fi');

const DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';

const DEFAULT_ROW_COUNT = 6;
const DAY_COUNT = 21;
const WEEK_COUNT = 3;

function getMondayOnOrBefore(dateStr) {
    const d = dayjs(dateStr);
    const day = d.day();
    const daysFromMonday = day === 0 ? 6 : day - 1;
    return d.subtract(daysFromMonday, 'day');
}

function getDefaultStartDate() {
    return getMondayOnOrBefore(dayjs()).format('YYYY-MM-DD');
}

function toDisplayDate(isoDate) {
    return dayjs(isoDate).format(DISPLAY_DATE_FORMAT);
}

function parseDisplayDate(value) {
    const parsed = dayjs(value.trim(), DISPLAY_DATE_FORMAT, true);
    return parsed.isValid() ? parsed.format('YYYY-MM-DD') : null;
}

function createEmptyShifts(rowCount) {
    return Array.from({ length: rowCount }, () => Array(DAY_COUNT).fill(''));
}

function createEmptyWorkers(rowCount) {
    return Array.from({ length: rowCount }, () => '');
}

function formatDayHeader(date) {
    const weekday = date.format('ddd');
    const capitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    return `${capitalized} ${date.format('D.M.')}`;
}

function formatDateRange(startMonday) {
    const end = startMonday.add(DAY_COUNT - 1, 'day');
    return `${startMonday.format('D.M.YYYY')} – ${end.format('D.M.YYYY')}`;
}

function ShiftRosterTemplate() {
    const defaultIsoDate = getDefaultStartDate();
    const [startDateInput, setStartDateInput] = useState(defaultIsoDate);
    const [startDateDisplay, setStartDateDisplay] = useState(() => toDisplayDate(defaultIsoDate));
    const [listTitle, setListTitle] = useState('');
    const [workers, setWorkers] = useState(() => createEmptyWorkers(DEFAULT_ROW_COUNT));
    const [shifts, setShifts] = useState(() => createEmptyShifts(DEFAULT_ROW_COUNT));

    const startMonday = useMemo(
        () => getMondayOnOrBefore(startDateInput),
        [startDateInput]
    );

    const days = useMemo(
        () => Array.from({ length: DAY_COUNT }, (_, i) => startMonday.add(i, 'day')),
        [startMonday]
    );

    const weeks = useMemo(
        () =>
            Array.from({ length: WEEK_COUNT }, (_, weekIndex) =>
                days.slice(weekIndex * 7, weekIndex * 7 + 7)
            ),
        [days]
    );

    const snappedMondayLabel = startMonday.format(DISPLAY_DATE_FORMAT);

    const handleStartDateDisplayChange = (value) => {
        setStartDateDisplay(value);
        const parsed = parseDisplayDate(value);
        if (parsed) {
            setStartDateInput(parsed);
        }
    };

    const handleStartDateBlur = () => {
        const parsed = parseDisplayDate(startDateDisplay);
        if (parsed) {
            setStartDateInput(parsed);
            setStartDateDisplay(toDisplayDate(parsed));
        } else {
            setStartDateDisplay(toDisplayDate(startDateInput));
        }
    };

    const handleWorkerChange = (rowIndex, value) => {
        setWorkers((prev) => {
            const next = [...prev];
            next[rowIndex] = value;
            return next;
        });
    };

    const handleShiftChange = (rowIndex, dayIndex, value) => {
        setShifts((prev) => {
            const next = prev.map((row) => [...row]);
            next[rowIndex][dayIndex] = value;
            return next;
        });
    };

    const addWorker = () => {
        setWorkers((prev) => [...prev, '']);
        setShifts((prev) => [...prev, Array(DAY_COUNT).fill('')]);
    };

    const removeWorker = (rowIndex) => {
        if (workers.length <= 1) return;
        setWorkers((prev) => prev.filter((_, i) => i !== rowIndex));
        setShifts((prev) => prev.filter((_, i) => i !== rowIndex));
    };

    const handlePrint = () => {
        window.print();
    };

    const renderShiftCell = (rowIndex, dayIndex) => (
        <td key={dayIndex} className="shift-cell">
            <input
                type="text"
                value={shifts[rowIndex]?.[dayIndex] ?? ''}
                onChange={(e) => handleShiftChange(rowIndex, dayIndex, e.target.value)}
                aria-label={`Vuoro ${workers[rowIndex] || `rivi ${rowIndex + 1}`}, ${days[dayIndex].format('D.M.YYYY')}`}
            />
        </td>
    );

    const renderNameCell = (rowIndex, showRemove = false) => (
        <td className="name-cell">
            <div className="name-cell-inner">
                <input
                    type="text"
                    value={workers[rowIndex]}
                    onChange={(e) => handleWorkerChange(rowIndex, e.target.value)}
                    placeholder="Nimi"
                    aria-label={`Työntekijän nimi, rivi ${rowIndex + 1}`}
                />
                {showRemove && (
                    <button
                        type="button"
                        className="remove-row-btn no-print"
                        onClick={() => removeWorker(rowIndex)}
                        aria-label="Poista työntekijä"
                        title="Poista työntekijä"
                    >
                        ×
                    </button>
                )}
            </div>
        </td>
    );

    const printHeader = (
        <div className="print-header">
            {listTitle ? <h2 className="print-title">{listTitle}</h2> : <h2 className="print-title">Työvuorolista</h2>}
            <p className="print-date-range">{formatDateRange(startMonday)}</p>
        </div>
    );

    return (
        <div className="shift-roster print-area">
            <div className="shift-roster-controls no-print">
                <div className="controls-row">
                    <label className="control-field">
                        <span>Aloituspäivä (PP/KK/VVVV)</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            value={startDateDisplay}
                            onChange={(e) => handleStartDateDisplayChange(e.target.value)}
                            onBlur={handleStartDateBlur}
                            placeholder="31/05/2026"
                            aria-label="Aloituspäivä muodossa PP/KK/VVVV"
                        />
                    </label>
                    <label className="control-field">
                        <span>Listan otsikko (valinnainen)</span>
                        <input
                            type="text"
                            value={listTitle}
                            onChange={(e) => setListTitle(e.target.value)}
                            placeholder="Esim. Keittiö, Toukokuu"
                        />
                    </label>
                </div>
                <p className="snap-hint">
                    Lista alkaa viikon maanantaista: <strong>{snappedMondayLabel}</strong>
                </p>
            </div>

            <div className="screen-only">
                {printHeader}
                <div className="table-scroll">
                    <table className="roster-table roster-table--screen">
                        <thead>
                            <tr>
                                <th className="name-header">Nimi</th>
                                {days.map((day, i) => (
                                    <th key={i} className="day-header">
                                        {formatDayHeader(day)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {workers.map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {renderNameCell(rowIndex, workers.length > 1)}
                                    {days.map((_, dayIndex) => renderShiftCell(rowIndex, dayIndex))}
                                </tr>
                            ))}
                            <tr className="add-worker-row no-print">
                                <td className="name-cell">
                                    <button
                                        type="button"
                                        className="add-worker-btn"
                                        onClick={addWorker}
                                        aria-label="Lisää työntekijä"
                                        title="Lisää työntekijä"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                                            <path
                                                d="M10 4v12M4 10h12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </td>
                                {days.map((_, dayIndex) => (
                                    <td key={dayIndex} className="shift-cell shift-cell--empty" />
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="print-actions no-print">
                    <button type="button" className="btn-primary" onClick={handlePrint}>
                        Tulosta / tallenna PDF
                    </button>
                    <p className="print-hint">
                        Tallenna PDF: Tulosta → Tallenna PDF / Save as PDF
                    </p>
                </div>
            </div>

            <div className="print-only">
                {printHeader}
                {weeks.map((weekDays, weekIndex) => (
                    <div key={weekIndex} className="week-block">
                        <h3 className="week-label">Viikko {weekIndex + 1}</h3>
                        <table className="roster-table roster-table--print week-table">
                            <thead>
                                <tr>
                                    <th className="name-header">Nimi</th>
                                    {weekDays.map((day, i) => (
                                        <th key={i} className="day-header">
                                            {formatDayHeader(day)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {workers.map((_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className="name-cell name-cell--print">
                                            {workers[rowIndex] || '\u00A0'}
                                        </td>
                                        {weekDays.map((day) => {
                                            const dayIndex = days.findIndex((d) => d.isSame(day, 'day'));
                                            const value = shifts[rowIndex]?.[dayIndex] ?? '';
                                            return (
                                                <td key={dayIndex} className="shift-cell shift-cell--compact">
                                                    {value || '\u00A0'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>

            <footer className="roster-print-footer">
                <p>Työvuorolista.fi – PK-yrityksen työvuorolista nopeasti ja helposti</p>
                <p>www.tyovuorolista.fi</p>
            </footer>
        </div>
    );
}

export default ShiftRosterTemplate;
