import '../Header/Header.css'
import './HamburgerNav.css'

function HamburgerNav() {
    return (
        <>
            <div className="hamburger-nav">
                <hr className="hb-top-ln"></hr>
                <hr className="hb-middle-ln"></hr>
                <hr className="hb-bottom-ln"></hr>
                <text className="hb-text">MENU</text>
            </div>
        </>
    )
}

export default HamburgerNav