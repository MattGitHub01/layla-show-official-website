import { useState } from 'react'
import '../Faq/Faq.css'

const FaqAccordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>{title}</button>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">{content}</div>}
                <hr className="faq-line"></hr>
            </div>
    )
}

export default FaqAccordion