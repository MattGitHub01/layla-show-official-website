import FaqAccordion from '../FaqAccordion/FaqAccordion.jsx'
import Footer from '../Footer/Footer.jsx'
import './Faq.css'

function Faq() {
    const faqData = [
        {
            title: 'What is the story behind Layla and Other Assorted Eric Clapton Songs?',
            content: "Through dialogue, a multimedia presentation, and select songs spanning Eric Clapton's decades-long career, Layla and Other Assorted Eric Clapton Songs offers the audience a deeper understanding of the man behind the music, his life, and the inspiration behind some of his most beloved hits that, for many, have been the soundtrack of their lives. The show takes its name from the iconic Derek and the Dominos album Layla and Other Assorted Love Songs, which features the legendary rock anthem 'Layla' Just as the album captured Eric Clapton's raw emotion and musical brilliance, the stage production draws from Clapton's rich history to offer audiences a deeper connection to his life and music."
        },
        {
            title: 'Where can I see the show?',
            content: "Layla and Other Assorted Eric Clapton Songs is shown exclusively in theaters, auditoriums and performing art centers that are well-suited for musical productions. New dates and locations are added to the tour schedule throughout the year. We invite you to contact us to recommend a suitable venue in your area for consideration."
        },
        {
            title: 'What is the running time of the show?',
            content: 'Layla and Other Assorted Eric Clapton Songs features a 60-minute opening acoustic act followed by a 90-minute electric act with a 15-minute intermission in between for a total event time of 2.5 hours.'
        },
        {
            title: 'Is the show appropriate for minors?',
            content: "Layla and Other Assorted Eric Clapton Songs is an all-ages show. No inappropriate language or imagery is used during the event with the only possible exception being the Clapton hit song,'Cocaine' Other than the word 'Cocaine,' itself, the song lyrics are otherwise vague." 
        },
        {
            title: 'Are photographs and video permitted during the show?',
            content: 'We kindly ask that you refrain from taking photographs and video during the performance.'
        },
        {
           title: 'Is there a cast album available for purchase?',
           content: "There is no substitute for the real thing. If you don't already own an Eric Clapton album or don't own many, we highly recommend Complete Clapton which features 36 of Clapton's best known songs, including those that are performed in Layla and Other Assorted Eric Clapton Songs."
        },
        {
            title: 'Can I purchase merchandise at the show?',
            content: 'We don’t currently offer merchandise. We encourage you to visit the Shop on the Eric Clapton web site for Clapton-branded shirts, caps and other goods.'
        },
        {
            title: 'What is the best source of additional information about Eric Clapton?',
            content: "While there are many online/offline sources of information about Eric Clapton, there is no substitute for the 'horse's mouth.' With striking intimacy and candor, Eric Clapton tells the story of his eventful and inspiring life in his poignant and honest autobiography, Clapton: The Autobiography. The book is available in print and audio. Additionally, the documentary Eric Clapton: Life in 12 Bars takes a look at the life and work of Eric Clapton, told by those who have known him best—including BB King, Jimi Hendrix, and George Harrison and Patty Boyd—and includes narration from Eric Clapton himself. The film can be watched online through Amazon Prime."
        }
    ];

    return (
        <div className="faq">
            <img className="faq-img" src="" alt="Photo of Layla Show performance" />
            <h1>Frequently Asked Questions</h1>
            <div className="faq-accordion">
                {faqData.map(({ title, content }) => (
                    <FaqAccordion title={title} content={content} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Faq