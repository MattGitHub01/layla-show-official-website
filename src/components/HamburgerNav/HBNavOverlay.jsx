import { HashLink } from 'react-router-hash-link'
import './HBNavOverlay.css'

function HBNavOverlay() {
    return (
        <nav className="hb-overlay">
            <div className="hb-flexbox">
                <HashLink className="hb-nav-link" to="/#tour-dates">tour dates</HashLink>
                <HashLink className="hb-nav-link" to="/#about">about</HashLink>
                <HashLink className="hb-nav-link" to="/#cast">cast</HashLink>
                <a className="hb-nav-link" href="/faq">FAQ</a>
                <HashLink className="tour-btn" to="/#dates">TOUR DATES</HashLink>
            </div>
        </nav>
    )
}

export default HBNavOverlay