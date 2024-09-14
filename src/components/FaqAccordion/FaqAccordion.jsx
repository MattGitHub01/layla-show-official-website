import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import '../Faq/Faq.css'

const FaqAccordion = (/*{ title, content }*/) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="acc-item">
            <div
                className="acc-title"
                onClick={() => setIsActive(!isActive)}
            >
                <button>What is the story behind Layla and Other Assorted Eric Clapton Songs?</button>
                <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
            </div>
                {isActive && <div className="acc-content">Through dialogue, a multimedia presentation, and select songs spanning Eric Clapton’s decades-long career, Layla and Other Assorted Eric Clapton Songs offers the audience a deeper understanding of the man behind the music, his life, and the inspiration behind some of his most beloved hits that, for many, have been the soundtrack of their lives. The show takes its name from the iconic Derek and the Dominos album Layla and Other Assorted Love Songs, which features the legendary rock anthem &apos;Layla.&apos; Just as the album captured Eric Clapton&apos;s raw emotion and musical brilliance, the stage production draws from Clapton&apos;s rich history to offer audiences a deeper connection to his life and music.</div>}
            <hr className="faq-line"></hr>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>Where can I see the show?</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">Layla and Other Assorted Eric Clapton Songs is shown exclusively in theaters, auditoriums and performing art centers that are well-suited for musical productions. New dates and locations are added to the <HashLink to="/#dates">tour schedule</HashLink> throughout the year. We invite you to <HashLink to="/#about">contact us</HashLink> to recommend a suitable venue in your area for consideration.</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
            <div className="acc-item">
                <div 
                    className="acc-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <button>//QUESTION HERE//</button>
                    <div className="acc-active-symbol">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="acc-content">//CONTENT HERE//</div>}
                <hr className="faq-line"></hr>
            </div>
        </div>
    )
}

export default FaqAccordion