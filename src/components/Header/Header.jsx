import Nav from '../Nav/Nav.jsx'
import navImg from '../../assets/nav-title.png'
import navImgHover from '../../assets/nav-title-hover.png'
import HamburgerNav from '../HamburgerNav/HamburgerNav.jsx'
import './Header.css'

function Header() {

    return (
        <>
            <header>
                <div className="header-nav">
                    <HamburgerNav />
                    <div className="img-div">
                        <a href="/" aria-label="Move to the of the homepage link">
                            <img className="header-img"
                                src={navImg}
                                // the bottom two mouse events trigger the icon to change colors on hover
                                onMouseEnter={e => e.currentTarget.src = navImgHover}
                                onMouseOut={e => e.currentTarget.src = navImg}
                            />
                        </a>
                    </div>
                    <Nav />
                </div>
            </header>
        </>
    )
}

export default Header