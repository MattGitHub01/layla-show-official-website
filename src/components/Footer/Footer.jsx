import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import './Footer.css'

function Footer() {

    return (
        <footer>
            <hr className='orange-line-footer'></hr>  
            <div className="social-links" aria-label="Social media links">
                <a className="facebook"
                    href="https://www.facebook.com/people/LAYLA-and-other-assorted-Eric-Clapton-songs-Musical-Showcase/61562647367534/"
                    target='_blank'
                >
                    <img 
                        className="link"
                        src={facebook}
                        alt="Production group facebook profile link"
                    />
                </a>
                <a className="instagram" 
                    href="" 
                    target='_blank'
                >
                    <img 
                        className="link"
                        src={instagram}
                        alt="Production group instagram profile link"
                    />
                </a>
                <a className="link" 
                    href="https://www.youtube.com/channel/UCV9foKeW3pNIOOCOqq6_8Yg"
                    target='_blank'
                    >
                    <img 
                    className="icon"
                    src={youtube}
                    alt="Production group youtube profile link"
                    />
                </a>
            </div>
            <p className="copyright-txt">&copy; 2024 Website by <a href="https://github.com/MattGitHub01">Tucker Crandall</a></p>
        </footer>
    )
}

export default Footer