import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import facebook from '../../assets/facebook.svg'
import facebookHov from '../../assets/facebook-hover.svg'
import instagram from '../../assets/instagram.svg'
import instagramHov from '../../assets/instagram-hover.svg'
import youtube from '../../assets/youtube.svg'
import youtubeHov from '../../assets/youtube-hover.svg'
import './HBNavOverlay.css'

function HBNavOverlay() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="hb-overlay">
            <div 
                className="hb-close-nav" 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Navigation menu, click to open menu options"
            >
                <hr className="hb-cl-top"></hr>
                <hr className="hb-cl-bottom"></hr>
                <text className="hb-cl-text">CLOSE</text>
            </div>
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