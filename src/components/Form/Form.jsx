import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import './Form.css'

function Form() {

    return(
        <div className="form-page">
            <Header />
            <form className="contact-form" action="POST" aria-label="Contact the band using this form">
                <label className="form-label" htmlFor="name">Your Name &rpar;required&lpar;</label>
                <input className="form-input" type="text" id="name" name="name" required></input>
                <label className="form-label" htmlFor="email">Your Email &rpar;required&lpar;</label>
                <input className="form-input" type="email" id="email" name="email" required></input>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" type="text" id="subject" name="subject"></input>
                <label className="form-label" htmlFor="message">Subject</label>
                <textarea className="form-msg" id="message" name="message" cols={35} rows={20}></textarea>
                <input className="form-submit" type="submit" value="Submit"></input>
            </form>
            <Footer />
        </div>
    )
}

export default Form