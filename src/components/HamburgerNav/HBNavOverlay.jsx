import { useState } from 'react'
import facebook from '../../assets/facebook.svg'
import facebookHov from '../../assets/facebook-hover.svg'
import instagram from '../../assets/instagram.svg'
import instagramHov from '../../assets/instagram-hover.svg'
import youtube from '../../assets/youtube.svg'
import youtubeHov from '../../assets/youtube-hover.svg'
import './HBNavOverlay.css'
import './HamburgerNav.css'

function HBNavOverlay(props) { 
    const [isEffect, setIsEffect] = useState(true);
    const clsProp = props.closeOverlay;
    // clsProp closes the nav menu with a prop from the HamburgerNav button to open it there and close it here. setIsEffect controls the close scroll up visual effect
    function closeOverlay() {
        setIsEffect(false);
        clsProp();
    }

    return (
        <nav className={isEffect ? "hb-overlay" : "hb-overlay is-open"}>
            <div
                className="hb-close-nav" 
                onClick={closeOverlay}
                aria-label="Navigation menu, click to open menu options"
            >
                <hr className="hb-cl-top"></hr>
                <hr className="hb-cl-bottom"></hr>
                <text className="hb-cl-text">CLOSE</text>
            </div>
            <div className="hb-flexbox">
                <a className="hb-nav-link" href="/#tour-dates" onClick={closeOverlay}>tour dates</a>
                <a className="hb-nav-link" href="/#about" onClick={closeOverlay}>about</a>
                <a className="hb-nav-link" href="/#cast" onClick={closeOverlay}>cast</a>
                <a className="hb-nav-link" href="/faq">FAQ</a>
                <a className="hb-nav-link" href="/contact-form">contact</a>

                <div className="hb-social-links" aria-label="Social media links">
                    <a 
                        className="hb-link"
                        href="https://www.facebook.com/people/LAYLA-and-other-assorted-Eric-Clapton-songs-Musical-Showcase/61562647367534/"
                        target='_blank'
                    >
                        <img 
                            className="hb-icon grow-icon"
                            src={facebook}
                            // the bottom two mouse events trigger the icon to change colors on hover
                            onMouseEnter={e => e.currentTarget.src = facebookHov}
                            onMouseOut={e => e.currentTarget.src = facebook}
                            alt="Layla show facebook profile link"
                        />
                    </a>
                    <a 
                        className="hb-link" 
                        href="https://www.youtube.com/channel/UCV9foKeW3pNIOOCOqq6_8Yg"
                        target='_blank'
                    >
                        <img 
                            className="hb-icon grow-icon"
                            src={youtube}
                            onMouseEnter={e => e.currentTarget.src = youtubeHov}
                            onMouseOut={e => e.currentTarget.src = youtube}
                            alt="Layla show youtube profile link"
                        />
                    </a>
                    <a 
                        className="hb-link" 
                        href="https://www.instagram.com/laylashowmusic" 
                        target='_blank'
                    >
                        <img 
                            className="hb-icon"
                            src={instagram}
                            onMouseEnter={e => e.currentTarget.src = instagramHov}
                            onMouseOut={e => e.currentTarget.src = instagram}
                            alt="Layla show instagram profile link"
                        />
                    </a>
                </div>
                <a className="hb-tour-btn" href="/#tour-dates" onClick={closeOverlay}>TOUR DATES</a>
            </div>
        </nav>
    )
}

export default HBNavOverlay