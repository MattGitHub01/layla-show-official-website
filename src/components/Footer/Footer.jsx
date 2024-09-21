import facebook from '../../assets/facebook.svg'
import facebookHov from '../../assets/facebook-hover.svg'
import instagram from '../../assets/instagram.svg'
import instagramHov from '../../assets/instagram-hover.svg'
import youtube from '../../assets/youtube.svg'
import youtubeHov from '../../assets/youtube-hover.svg'
import './Footer.css'

function Footer() {

    return (
        <footer>
            <hr className="orange-line-footer"></hr>  
            <div className="social-links" aria-label="Social media links">
                <a className="link"
                    href="https://www.facebook.com/people/LAYLA-and-other-assorted-Eric-Clapton-songs-Musical-Showcase/61562647367534/"
                    target="_blank" 
                    aria-label="Layla Show facebook link"
                >
                    <img 
                        className="icon grow-fb"
                        width="2rem"
                        height="2rem"
                        src={facebook}
                        // the bottom two mouse events trigger the icon to change colors on hover
                        onMouseEnter={e => e.currentTarget.src = facebookHov}
                        onMouseOut={e => e.currentTarget.src = facebook}
                    />
                </a>
                <a className="link" 
                    href="https://www.youtube.com/channel/UCV9foKeW3pNIOOCOqq6_8Yg"
                    target='_blank'
                    aria-label="Layla Show youtube link"
                >
                    <img 
                        className="icon grow-yt"
                        width="2rem"
                        height="2rem"
                        src={youtube}
                        onMouseEnter={e => e.currentTarget.src = youtubeHov}
                        onMouseOut={e => e.currentTarget.src = youtube}
                    />
                </a>
                <a className="link" 
                    href="https://www.instagram.com/laylashowmusic/" 
                    target='_blank'
                    aria-label="Layla Show instagram link"
                >
                    <img 
                        className="icon"
                        width="2rem"
                        height="2rem"
                        src={instagram}
                        onMouseEnter={e => e.currentTarget.src = instagramHov}
                        onMouseOut={e => e.currentTarget.src = instagram}
                    />
                </a>
            </div>
            <p className="copyright-txt">&copy; 2024 Website by <a className="website-developer-link" target='_blank' href="https://linkedin.com/in/tcr90">Tucker Crandall</a>. <a className="privacy-policy" target="_blank" href="/privacy-policy"> Privacy Policy</a></p>
        </footer>
    )
}

export default Footer