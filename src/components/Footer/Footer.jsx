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
                    aria-label="Facebook profile link"
                >
                    <img 
                        className="icon"
                        width="2rem"
                        height="2rem"
                        src={facebook}
                        onMouseEnter={e => e.currentTarget.src = facebookHov}
                        onMouseOut={e => e.currentTarget.src = facebook}
                    />
                </a>
                <a className="link" 
                    href="https://www.youtube.com/channel/UCV9foKeW3pNIOOCOqq6_8Yg"
                    target='_blank'
                    aria-label="Youtube profile link"
                >
                    <img 
                        className="icon"
                        width="2rem"
                        height="2rem"
                        src={youtube}
                        onMouseEnter={e => e.currentTarget.src = youtubeHov}
                        onMouseOut={e => e.currentTarget.src = youtube}
                    />
                </a>
                <a className="link" 
                    href="" 
                    target='_blank'
                    aria-label="Instagram profile link"
                >
                    <img 
                        className="icon ig-hov"
                        width="2rem"
                        height="2rem"
                        src={instagram}
                        onMouseEnter={e => e.currentTarget.src = instagramHov}
                        onMouseOut={e => e.currentTarget.src = instagram}
                    />
                </a>
            </div>
            <p className="copyright-txt"><a className="privacy-policy" target="_blank" href="./privacy-policy.html"> Privacy Policy </a> &copy; 2024 Website by <a className="github-link" target='_blank' href="https://github.com/MattGitHub01">Tucker Crandall </a></p>
        </footer>
    )
}

export default Footer