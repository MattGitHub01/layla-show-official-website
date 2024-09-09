import aboutTopImg from '../../assets/cast-top.png'
import aboutHeaderImg from '../../assets/about-page-header.png'
import aboutBottomImg from '../../assets/cast-bottom.png'
import './About.css'

function About() {
    // Images need to be updated once client provides the desired images,
    // these are a placeholder
    return (
        <div className="about"> 
            <img className="about-top-img" src={aboutTopImg} />
            <img className="about-header-img" src={aboutHeaderImg} />
            <p className="about-text"><span className="gray-text">LAYLA and other assorted Eric Clapton songs </span> is a musical homage to one of the most influential guitarists and songwriters of our time, Eric Clapton. The show is presented in two acts–one acoustic and one electric–paying tribute to his life and musical career through story, multimedia and set to the beat of his popular and beloved hits including “Layla,” “Tears In Heaven,” “Change the World,” “Cocaine” and so many more.</p>
            <img className="about-bottom-img" src={aboutBottomImg} />
        </div>
    )
}

export default About