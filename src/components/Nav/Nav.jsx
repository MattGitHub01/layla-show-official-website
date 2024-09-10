import '../Header/Header.css'

function Nav() {

    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <a href="">tour dates</a>
                <a href="">about</a>
                <a href="">cast</a>
                <a href="">FAQ</a>
            </nav>
            <div className="tour-btn-div">
                <button className="tour-btn">TOUR DATES</button>
            </div>
        </>
    )
}

export default Nav