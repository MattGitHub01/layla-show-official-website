import { useRef, useState } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import emailjs from '@emailjs/browser'
import './Form.css'

function Form() {
    const [isSubmit, setIsSubmit] = useState(false);

    // function onChange(captcha) {
    //     if (
    //         captcha === undefined ||
    //         captcha === '' ||
    //         captcha === null
    //     ) {
    //         console.log('Client: Inside submit: Unsuccessful!');
    //     }
    //     else {
    //         console.log('Client: Inside submit: Successful!:', captcha);
    //         fetch('index.js', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json, text/plain */*',
    //                 'Content-type': "application/json"
    //             },
    //             body: JSON.stringify({captcha: captcha})
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {console.log(data)})
    //     }
    // }

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
            <form className="contact-form" ref={form} onSubmit={sendEmail} aria-label="Contact the band using this form">
                <label className="form-label" htmlFor="name">Your Name (required)</label>
                <input className="form-input" type="text" id="name" name="name" required></input>
                <label className="form-label" htmlFor="email">Your Email (required)</label>
                <input className="form-input" type="email" id="email" name="email" required></input>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" type="text" id="subject" name="subject"></input>
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea className="form-msg" id="message" name="message" cols={5} rows={10}></textarea>
                <div>
                    {/* <ReCAPTCHA 
                        render="explicit"
                        sitekey="6LeBmkgqAAAAAMvhSQhjmbYFziydhv26BI1liarT"
                        onChange={onChange}
                    /> */}
                </div>
                <button aria-label="Click this button to send email message through this contact form" className="form-submit" type="submit">{isSubmit ? 'Delivered!' : 'Send'}</button>
            </form>
            <Footer />
        </>

            
    )
}

export default Form