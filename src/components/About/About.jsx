import aboutTopImg from '../../assets/about-top.png'
import aboutTextImg from '../../assets/about-page-header.png'
import aboutBottomImg from '../../assets/about-bottom.png'
import './About.css'

function About() {
    // Images need to be updated once client provides the desired images,
    // these are a placeholder
    return (
        <div 
            id="about"
            className="about" 
            aria-label="About the production section"
        >
            <img
                className="about-top-img"
                src={aboutTopImg}
                alt="Guitarists and drummer preforming live" 
            />
            <img
                className="about-header-img"
                src={aboutTextImg}
                alt="Image text reads: a celebration of a musical icon"
            />
            <p className="about-text"><span className="gray-text">LAYLA and other assorted Eric Clapton songs </span> is a musical homage to one of the most influential guitarists and songwriters of our time, Eric Clapton. The show is presented in two acts–one acoustic and one electric–paying tribute to his life and musical career through story, multimedia and set to the beat of his popular and beloved hits including “Layla,” “Tears In Heaven,” “Change the World,” “Cocaine” and so many more.</p>
            <img className="about-bottom-img" src={aboutBottomImg} />
        </div>
    )
}

export default About