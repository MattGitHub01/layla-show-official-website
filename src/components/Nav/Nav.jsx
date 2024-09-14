import { HashLink } from 'react-router-hash-link'
import '../Header/Header.css'

function Nav() {
    
    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <HashLink className="nav-link" to="/#dates">tour dates</HashLink>
                <HashLink className="nav-link" to="/#cast">cast</HashLink>
                <HashLink className="nav-link" to="/#about">about</HashLink>
                <a className="nav-link" href="/faq">FAQ</a>
            </nav>
            <div className="tour-btn-div">
                <HashLink className="tour-btn" to="/#dates">TOUR DATES</HashLink>
            </div>
            
        </>
    )
}

export default Nav