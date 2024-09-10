import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import './Footer.css'

function Footer() {

    return (
        <footer>
            <div className="social-links" aria-label="Social media links">
                <a className="facebook" href="">
                    <img 
                    className="icon"
                    src={facebook}
                    />
                </a>
                <a className="instagram" href="">
                    <img 
                    className="icon"
                    src={instagram}
                    />
                </a>
                <a className="youtube" href="">
                    <img 
                    className="icon"
                    src={youtube}
                    />
                </a>
            </div>
            <p className="copyright-txt">&copy; 2024 Photos by PHOTOGRAPHER NAME HERE. Website by <a href="https://github.com/MattGitHub01">Tucker Crandall</a></p>
        </footer>
    )
}

export default Footer