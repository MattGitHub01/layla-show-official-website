import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import emailjs from '@emailjs/browser'
import './Form.css'

function Form() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [captchaVal, setCaptchaVal] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // This onChange arrow function is for GoogleReCAPTCHA functionality

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!captchaVal) {
            setErrorMessage('Please complete the ReCAPTCHA!');
            return
        }
        
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/verify-captcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ captcha: captchaVal }),
            });
            const data = await response.json();

            if (response.ok) {
                // Send email via Email.js if captcha response is good
                sendEmail();
            } else {
                setErrorMessage(data.message || 'ReCAPTCHA verification failed!')
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred while verifying ReCAPTCHA");
        } finally {
            setIsSubmitting(false);
        }

    } 
    // The variables and the sendEmail function below this comment pertain to Email.js
    const form = useRef();
    const emailjsPubKey = 'L4dHAxyg89sXaxRUJ';
    const serviceID = 'service_u9j03qc';
    const templateID = 'template_2t3islo';

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: emailjsPubKey,
            })
            .then(
                () => {
                    console.log('Message Sent');
                },
                (error) => {
                    console.log('Send Failed...', error.text);
                },
            );
            //Sends email to email.js API
        const nField = document.getElementById('name');
        nField.value = '';
        const eField = document.getElementById('email');
        eField.value = '';
        const sField = document.getElementById('subject');
        sField.value = '';
        const mField = document.getElementById('message');
        mField.value = '';
        // Clears form input fields
        setIsSubmit(true);
        setTimeout(() => {setIsSubmit(false)}, 3000);
        // Change send button text to confirm message sent, sets a timer then resets text to Send
    };

    return(
        <> 
            <Header />
            <form className="contact-form" ref={form} onSubmit={onSubmit} aria-label="Contact the band using this form">
                <label className="form-label" htmlFor="name">Your Name (required)</label>
                <input className="form-input" type="text" id="name" name="name" required></input>
                <label className="form-label" htmlFor="email">Your Email (required)</label>
                <input className="form-input" type="email" id="email" name="email" required></input>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" type="text" id="subject" name="subject"></input>
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea className="form-msg" id="message" name="message" cols={5} rows={10}></textarea>
                <div>
                    <ReCAPTCHA 
                        render="explicit"
                        sitekey="6LeBmkgqAAAAAMvhSQhjmbYFziydhv26BI1liarT"
                        onChange={setCaptchaVal}
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button aria-label="Click this button to send email message through this contact form" 
                disabled={!captchaVal || isSubmitting}
                className="form-submit" type="submit">{isSubmit ? 'Delivered!' : 'Send'}</button>
            </form>
            <Footer />
        </>
            
    )
}

export default Form