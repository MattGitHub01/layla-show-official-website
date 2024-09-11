import '../Header/Header.css'

function Nav() {

    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <a href="/#dates">tour dates</a>
                <a href="/#about">about</a>
                <a href="/#cast">cast</a>
                <a href="/faq">FAQ</a>
            </nav>
            <div className="tour-btn-div">
                <a className="tour-btn" href="#dates">TOUR DATES</a>
            </div>
        </>
    )
}

export default Nav