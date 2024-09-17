import { useState } from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import func from './formData.js'
import './Form.css'

function Form() { // Input IDs: name, email, subject, message
    const [formData, setFormData] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        let dataObjCons = new FormData(e.target);
        let formDataObj = Object.fromEntries(dataObjCons.entries());
        setFormData(formDataObj);
        func(formData);
    }


    return(
        <> 
            <Header />
            <form className="contact-form" onSubmit={onSubmit} action="#" aria-label="Contact the band using this form">
                <label className="form-label" htmlFor="name">Your Name (required)</label>
                <input className="form-input" type="text" id="name" name="name" required></input>
                <label className="form-label" htmlFor="email">Your Email (required)</label>
                <input className="form-input" type="email" id="email" name="email" required></input>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" type="text" id="subject" name="subject"></input>
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea className="form-msg" id="message" name="message" cols={5} rows={10}></textarea>
                <input className="form-submit" type="submit" value="Submit" id="submit-btn"></input>
            </form>
            <Footer />
        </>

            
    )
}

export default Form