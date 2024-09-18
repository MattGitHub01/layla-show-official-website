import { useRef } from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import emailjs from '@emailjs/browser'
import './Form.css'

function Form() {

    const form = useRef();
    const publicKey = 'L4dHAxyg89sXaxRUJ';
    const serviceID = 'service_u9j03qc';
    const templateID = 'template_2t3islo';

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('Message Sent');
                },
                (error) => {
                    console.log('Send Failed...', error.text);
                },
            );
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
                <input className="form-submit" type="submit" value="Submit"></input>
            </form>
            <Footer />
        </>

            
    )
}

export default Form