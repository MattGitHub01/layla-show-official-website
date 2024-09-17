import '../Header/Header.css'
function Nav() {
    
    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <a className="nav-link" href="/#tour-dates">tour dates</a>
                <a className="nav-link" href="/#about">about</a>
                <a className="nav-link" href="/#cast">cast</a>
                <a className="nav-link" href="/faq">FAQ</a>
                <a className="nav-link" href="/contact">contact</a>
            </nav>
            <div className="tour-btn-div">
                <a className="tour-btn" href="/#tour-dates">TOUR DATES</a>
            </div>
        </>
    )
}

export default Nav