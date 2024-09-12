import Nav from '../Nav/Nav.jsx'
import navImg from '../../assets/nav-title.png'
import navImgHover from '../../assets/nav-title-hover.png'
import './Header.css'

function Header() {

    return (
        <header>
            <div className="header-nav">
                <a href="/">
                    <img className="header-img"
                        src={navImg}
                        onMouseEnter={e => e.currentTarget.src = navImgHover}
                        onMouseOut={e => e.currentTarget.src = navImg}
                        alt="Layla and other assorted eric clapton songs"
                    />
                </a>
                <Nav />
            </div>
            
        </header>
    )
}

export default Header