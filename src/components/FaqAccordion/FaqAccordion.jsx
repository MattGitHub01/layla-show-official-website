import { useState } from 'react'
import '../Faq/Faq.css'

const FaqAccordion = () => {
    const [faqOneA, setFaqOneA] = useState(false);
    const [faqTwoA, setFaqTwoA] = useState(false);
    const [faqThreeA, setFaqThreeA] = useState(false);
    const [faqFourA, setFaqFourA] = useState(false);
    const [faqFiveA, setFaqFiveA] = useState(false);
    const [faqSixA, setFaqSixA] = useState(false);
    const [faqSevenA, setFaqSevenA] = useState(false);
    const [faqEightA, setFaqEightA] = useState(false);
    const [faqNineA, setFaqNineA] = useState(false);
    // These useState variables control the opening and closing of the FAQ question items

    return (
        <div className="faq-accordion">
            <button className="acc-open-link">
                <div
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question One. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqOneA(!faqOneA)}
                >
                    <span className="acc-question">What is the story behind <span className="italic">Layla and Other Assorted Eric Clapton Songs</span>?</span>
                    <div className="acc-active-symbol">{faqOneA ? '-' : '+'}</div>
                </div>
                {faqOneA && <div className="acc-content">Through dialogue, a multimedia presentation, and select songs spanning Eric Clapton&apos;s decades-long career, <span className="italic">Layla and Other Assorted Eric Clapton Songs</span> offers the audience a deeper understanding of the man behind the music, his life, and the inspiration behind some of his most beloved hits that, for many, have been the soundtrack of their lives. The show takes its name from the iconic Derek and the Dominos album <span className="italic">Layla and other assorted love songs</span>, which features the legendary rock anthem <span className="italic">&quot;Layla.&quot; </span> Just as the album captured Eric Clapton&apos;s raw emotion and musical brilliance, the stage production draws from Clapton&apos;s rich history to offer audiences a deeper connection to his life and music.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Two. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqTwoA(!faqTwoA)}
                >
                    <span className="acc-question">Where can I see the show?</span>
                    <div className="acc-active-symbol">{faqTwoA ? '-' : '+'}</div>
                </div>
                {faqTwoA && <div className="acc-content"><span className="italic">Layla and Other Assorted Eric Clapton Songs</span> is shown exclusively in theaters, auditoriums and performing art centers that are well-suited for musical productions. New dates and locations are added to the <a href="/#tour-dates">tour schedule</a> throughout the year. We invite you to <a href="/contact-form">contact us</a> to recommend a suitable venue in your area for consideration.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Three. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqThreeA(!faqThreeA)}
                >
                    <span className="acc-question">What is the running time of the show?</span>
                    <div className="acc-active-symbol">{faqThreeA ? '-' : '+'}</div>
                </div>
                {faqThreeA && <div className="acc-content"><span className="italic">Layla and Other Assorted Eric Clapton Songs</span> features a 60-minute opening acoustic act followed by a 90-minute electric act with a 15-minute intermission in between for a total event time of 2.5 hours.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Four. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqFourA(!faqFourA)}
                >
                   <span className="acc-question">Is the show appropriate for minors?</span>
                    <div className="acc-active-symbol">{faqFourA ? '-' : '+'}</div>
                </div>
                {faqFourA && <div className="acc-content"><span className="italic">Layla and Other Assorted Eric Clapton Songs</span> is an all-ages show. No inappropriate language or imagery is used during the event with the only possible exception being the Clapton hit song, <span className="italic">&quot;Cocaine.&quot;</span> Other than the word &quot;cocaine,&quot; itself, the song lyrics are otherwise vague.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Five. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqFiveA(!faqFiveA)}
                >
                    <span className="acc-question">Are photographs and video permitted during the show?</span>
                    <div className="acc-active-symbol">{faqFiveA ? '-' : '+'}</div>
                </div>
                {faqFiveA && <div className="acc-content">We kindly ask that you refrain from taking photographs and video during the performance.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Six. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqSixA(!faqSixA)}
                >
                    <span className="acc-question">Is there a cast album available for purchase?</span>
                    <div className="acc-active-symbol">{faqSixA ? '-' : '+'}</div>
                </div>
                {faqSixA && <div className="acc-content">There is no substitute for the real thing. If you don&apos;t already own an Eric Clapton album or don&apos;t own many, we highly recommend <a target="_blank" href="https://www.amazon.com/Complete-Clapton-Eric/dp/B000UAE8CQ/ref=sr_1_1?crid=1P6V1WQE5TL5F&amp&keywords=eric+clapton+complete&amp&qid=1680108243&amp&sprefix=eric+clapton+ccomplete%2Caps%2C116&amp&sr=8-1" className="italic">Complete Clapton</a> which features 36 of Clapton&apos;s best known songs, including those that are performed in <span className="italic">Layla and Other Assorted Eric Clapton Songs</span>.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Seven. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqSevenA(!faqSevenA)}
                >
                    <span className="acc-question">Can I purchase merchandise at the show?</span>
                    <div className="acc-active-symbol">{faqSevenA ? '-' : '+'}</div>
                </div>
                {faqSevenA && <div className="acc-content">We don&apos;t currently offer merchandise. We encourage you to visit the <a target="_blank" href="https://store.ericclapton.com/">Shop</a> on the <a target="_blank" href="https://ericclapton.com/">Eric Clapton web site</a> for Clapton-branded shirts, caps and other goods.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Eight. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqEightA(!faqEightA)}
                >
                    <span className="acc-question">What is the best source of additional information about Eric Clapton?</span>
                    <div className="acc-active-symbol">{faqEightA ? '-' : '+'}</div>
                </div>
                {faqEightA && <div className="acc-content">While there are many online/offline sources of information about Eric Clapton, &quot;there is no substitute for hearing from the horse&apos;s mouth.&quot; With striking intimacy and candor, Eric Clapton tells the story of his eventful and inspiring life in his poignant and honest autobiography, <span className="italic">Clapton: The Autobiography</span>. The book is available in print and audio. <br></br>Additionally, the documentary <span className="italic">Eric Clapton: Life in 12 Bars</span> takes a look at the life and work of Eric Clapton, told by those who have known him best—including BB King, Jimi Hendrix, and George Harrison and Patty Boyd—and includes narration from Eric Clapton himself. The film can be <a target="_blank" href="https://www.amazon.com/Eric-Clapton-Life-12-Bars/dp/B07C5YY12K">watched online</a> through Amazon Prime.</div>}
                <hr className="faq-line"></hr>
            </button>
            <button className="acc-open-link">
                <div 
                    className="acc-title"
                    aria-label="Frequently Asked Questions Question Nine. Click this title once to open the answer, click again to close."
                    onClick={() => setFaqNineA(!faqNineA)}
                >
                    <span className="acc-question">Don&apos;t see your question answered here?</span>
                    <div className="acc-active-symbol">{faqNineA ? '-' : '+'}</div>
                </div>
                {faqNineA && <div className="acc-content"><a target="_blank" href="mailto:Info@LaylaShow.com">Contact us</a> with your additional questions.</div>}
                <hr className="faq-line"></hr>
            </button>
        </div>
    )
}

export default FaqAccordion