import React, { useState } from 'react';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '6rem',
        textAlign: 'center',
    };
    const contactFormDivStyle = {
        width: '90%',
        backgroundColor: 'var(--hiekka)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '5px',
        padding: '1rem',
    };
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    };
    const inputFieldStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const h2Style = {
        fontSize: '3rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
        color: 'var(--tummanvihrea)',
        fontWeight: '600',
    };
    const inputStyle = {
        padding: '1rem',
        borderRadius: '2px',
        border: 'none',
    };
    const buttonStyle = {
        padding: '1.5rem',
        minWidth: '150px',
        borderRadius: '2px',
        border: 'none',
        color: 'white',
        backgroundColor: isSending ? 'var(--harmaa)' : 'var(--tummanvihrea)',
        cursor: 'pointer',
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);

        if (!email && !phone) {
            console.log('Form validation failed:', email, phone);
            console.error('Please provide either email or phone number.');
            setIsSending(false);
            return;
        }

        try {
            console.log('Submitting form with data:', { email, phone });
            
            // Detect if we're in development or production
            const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const apiUrl = isDev 
                ? '/api/handleForm'  // Use relative URL for localhost
                : 'https://www.tyovuorolista.fi/api/handleForm';  // Use absolute URL for production
            
            console.log('Using API URL:', apiUrl);
            console.log('Current hostname:', window.location.hostname);
            console.log('Current port:', window.location.port);
            console.log('Full URL being called:', window.location.origin + apiUrl);
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone }),
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            console.log('Response headers:', [...response.headers.entries()]);
            
            // Try to get response text for debugging
            const responseClone = response.clone();
            try {
                const responseText = await responseClone.text();
                console.log('Response body (text):', responseText);
            } catch (e) {
                console.log('Could not read response as text:', e);
            }

            if (!response.ok) {
                console.error('Response not ok:', response.status, response.statusText);
                setIsSending(false);
                alert('Lomakkeen lähetys epäonnistui. Yritä uudelleen.');
                return;
            }

            const jsonResponse = await response.json();
            console.log('Response data:', jsonResponse);
            
            if (jsonResponse.status === 'success') {
                console.log('Form submitted successfully');
                setIsFormSubmitted(true);
            } else {
                console.error('API returned error status:', jsonResponse);
                alert('Lomakkeen lähetys epäonnistui. Yritä uudelleen.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Lomakkeen lähetys epäonnistui. Tarkista verkkoyhteytesi ja yritä uudelleen.');
        } finally {
            setIsSending(false);
        }
    };


    return (
        <div style={wrapperStyle}>
            <div style={contactFormDivStyle}>
                {isFormSubmitted ? <h2>Kiitos! Olen sinuun yhteydessä pikaisesti!</h2> :
                    <div className='reactForm'>
                        <h2 style={h2Style}>Haluan kysyä lisää!</h2>
                        <p style={{color: 'var(--tummanvihrea)', fontSize: '1.1rem', fontWeight: '500', maxWidth: '400px', lineHeight: '1.5', marginBottom: '2rem'}}>Jätä sähköpostisi tai puhelinnumerosi, niin olen sinuun yhteydessä pikaisesti!</p>
                        <div style={formStyle}>
                            <div style={inputFieldStyle}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Sähköpostiosoitteesi"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    style={inputStyle}
                                />
                            </div>
                            <span style={{color: 'var(--tummanvihrea)', fontWeight: '500'}}>tai</span>
                            <div style={inputFieldStyle}>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="Puhelinnumerosi"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    style={inputStyle}
                                />
                            </div>
                            <button onClick={handleSubmit} disabled={isSending} style={buttonStyle}>Lähetä</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default ContactForm;
