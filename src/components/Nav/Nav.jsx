import '../Header/Header.css'

function Nav() {

    return (
        <>
            <div className="nav">
                <a>tour dates</a>
                <a>about</a>
                <a>cast</a>
                <a>FAQ</a>
            </div>
            <div className="tour-btn-div">
                <button className="tour-btn">TOUR DATES</button>
            </div>
        </>
    )
}

export default Nav