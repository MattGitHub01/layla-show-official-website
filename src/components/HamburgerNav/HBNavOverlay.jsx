import { HashLink } from 'react-router-hash-link'
import facebook from '../../assets/facebook.svg'
import facebookHov from '../../assets/facebook-hover.svg'
import instagram from '../../assets/instagram.svg'
import instagramHov from '../../assets/instagram-hover.svg'
import youtube from '../../assets/youtube.svg'
import youtubeHov from '../../assets/youtube-hover.svg'
import './HBNavOverlay.css'

function HBNavOverlay() {
    return (
        <nav className="hb-overlay">
            <div className="hb-flexbox">
                <HashLink className="hb-nav-link" to="/#tour-dates">tour dates</HashLink>
                <HashLink className="hb-nav-link" to="/#about">about</HashLink>
                <HashLink className="hb-nav-link" to="/#cast">cast</HashLink>
                <a className="hb-nav-link" href="/faq">FAQ</a>

                <div className="hb-social-links" aria-label="Social media links">
                    <a 
                        className="hb-link"
                        href="https://www.facebook.com/people/LAYLA-and-other-assorted-Eric-Clapton-songs-Musical-Showcase/61562647367534/"
                        target='_blank'
                    >
                        <img 
                            className="hb-icon"
                            src={facebook}
                            onMouseEnter={e => e.currentTarget.src = facebookHov}
                            onMouseOut={e => e.currentTarget.src = facebook}
                            alt="Production group facebook profile link"
                        />
                    </a>
                    <a 
                        className="hb-link" 
                        href="https://www.youtube.com/channel/UCV9foKeW3pNIOOCOqq6_8Yg"
                        target='_blank'
                    >
                        <img 
                            className="hb-icon"
                            src={youtube}
                            onMouseEnter={e => e.currentTarget.src = youtubeHov}
                            onMouseOut={e => e.currentTarget.src = youtube}
                            alt="Production group youtube profile link"
                        />
                    </a>
                    <a 
                        className="hb-link" 
                        href="" 
                        target='_blank'
                    >
                        <img 
                            className="hb-icon"
                            src={instagram}
                            onMouseEnter={e => e.currentTarget.src = instagramHov}
                            onMouseOut={e => e.currentTarget.src = instagram}
                            alt="Production group instagram profile link"
                        />
                    </a>
                </div>
                <HashLink className="hb-tour-btn" to="/#dates">TOUR DATES</HashLink>
            </div>
        </nav>
    )
}

export default HBNavOverlay