export type PlatformStats = {
	activeCompanies: number
	shiftsPerWeek: number
	workersManaged: number
	totalShifts: number
	updatedAt: string | null
}

const FALLBACK_STATS: PlatformStats = {
	activeCompanies: 65,
	shiftsPerWeek: 1500,
	workersManaged: 1600,
	totalShifts: 80000,
	updatedAt: null
}

type SupabaseStatsRow = {
	active_companies: number
	shifts_per_week: number
	workers_managed: number
	total_shifts: number
	updated_at: string
}

export async function getPlatformStats(): Promise<PlatformStats> {
	const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
	const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

	if (!supabaseUrl || !supabaseAnonKey) {
		return FALLBACK_STATS
	}

	try {
		const response = await fetch(
			`${supabaseUrl}/rest/v1/marketing_platform_stats?id=eq.public&select=active_companies,shifts_per_week,workers_managed,total_shifts,updated_at`,
			{
				headers: {
					apikey: supabaseAnonKey,
					Authorization: `Bearer ${supabaseAnonKey}`
				}
			}
		)

		if (!response.ok) {
			return FALLBACK_STATS
		}

		const rows = (await response.json()) as SupabaseStatsRow[]
		const row = rows[0]

		if (!row) {
			return FALLBACK_STATS
		}

		return {
			activeCompanies: row.active_companies,
			shiftsPerWeek: row.shifts_per_week,
			workersManaged: row.workers_managed,
			totalShifts: row.total_shifts,
			updatedAt: row.updated_at
		}
	} catch {
		return FALLBACK_STATS
	}
}

export function formatStatNumber(value: number, locale: string): string {
	return new Intl.NumberFormat(locale).format(value)
}

export function formatStatWithPlus(value: number, locale: string): string {
	return `${formatStatNumber(value, locale)}+`
}
