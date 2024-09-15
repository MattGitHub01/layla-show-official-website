import Nav from '../Nav/Nav.jsx'
import navImg from '../../assets/nav-title.png'
import navImgHover from '../../assets/nav-title-hover.png'
import HamburgerNav from '../HamburgerNav/HamburgerNav.jsx'
import HBNavOverlay from '../HamburgerNav/HBNavOverlay.jsx'
import './Header.css'

function Header() {

    return (
        <>
            <header>
                <div className="header-nav">
                    <HamburgerNav />
                    <a href="/" aria-label="Move to the of the homepage link">
                        <img className="header-img"
                            src={navImg}
                            onMouseEnter={e => e.currentTarget.src = navImgHover}
                            onMouseOut={e => e.currentTarget.src = navImg}
                        />
                    </a>
                    <Nav />
                </div>
            </header>
            <HBNavOverlay />
        </>
    )
}

export default Header