import Header from '../Header/Header.jsx'
import FaqImg from '../../assets/faq-bottom.png'
import FaqAccordion from '../FaqAccordion/FaqAccordion.jsx'
import Footer from '../Footer/Footer.jsx'
import './Faq.css'

function Faq() {
    
    return (
        <div className="faq-wrapper">
            <Header />
            <div className="faq">
                <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
                <FaqAccordion />
                <img className="faq-img" src={FaqImg} alt="Photo of Layla Show performance" />
                <Footer />
            </div>
        </div>
    ) 
}

export default Faq