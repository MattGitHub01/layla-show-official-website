import { HashLink } from 'react-router-hash-link'
import Nav from '../Nav/Nav.jsx'
import navImg from '../../assets/nav-title.png'
import navImgHover from '../../assets/nav-title-hover.png'
import './Header.css'

function Header() {

    return (
        <header>
            <div className="header-nav">
                <div className="img-div">
                    <a href="/">
                        <img 
                            className="header-img"
                            src={navImg}
                            onMouseEnter={e => e.currentTarget.src = navImgHover}
                            onMouseOut={e => e.currentTarget.src = navImg}
                            alt="Layla and other assorted eric clapton songs"
                        />
                    </a>
                </div>
                <div className="nav-div">
                    <Nav />
                </div>
                <div className="tour-btn-div">
                    <HashLink className="tour-btn" to="/#dates">TOUR DATES</HashLink>
                </div>
            </div>
        </header>
    )
}

export default Header