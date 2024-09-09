import './Dates.css'

function Dates() {

    return (
        <div className="tours">
            <div className='tour-title'>
                <h1>UPCOMING TOUR DATES</h1>
            </div>
            <div className="tour-listing">
                <h3 className="tour-city">LOVELAND, CO</h3>
                <p className="tour-date">May 11, 2024</p>
                <p className="tour-location">Rialto Theater</p>
                <button className="tour-button-style">LEARN MORE</button>
            </div>
            <hr className='listing-line'></hr>
        </div>
    )
}

export default Dates