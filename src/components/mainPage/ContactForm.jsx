import React, { useState } from 'react';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const wrapperStyle = {};
    const contactFormDivStyle = {
        width: '100%',
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
        backgroundColor: 'var(--tummanvihrea)',
        cursor: 'pointer',
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!email && !phone) {
            console.log(email, phone)
            console.error('Please provide either email or phone number.');
            return;
          }
      
          const response = await fetch(`https://tyovuorolista-site.vercel.app/api/handleForm`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, phone }),
          });
      
          if (!response.ok) {
            throw new Error(response.statusText);
          }
      
          const jsonResponse = await response.json();
      
          console.log(jsonResponse);
    };

    return (
        <div style={wrapperStyle}>
            <div style={contactFormDivStyle}>
                <h2 style={h2Style}>Haluan kysyä lisää!</h2>
                <p>Jätä sähköpostisi tai puhelinnumerosi, niin olen sinuun yhteydessä pikaisesti!</p>
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
                    <span>tai</span>
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
                    <button onClick={handleSubmit} style={buttonStyle}>Lähetä</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
