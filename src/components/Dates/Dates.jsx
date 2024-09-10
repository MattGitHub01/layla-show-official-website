import './Dates.css'

function Dates() {

    return (
        <div className="tours" aria-label="Tour dates list section">
            <div className='tour-title'>
                <h1>UPCOMING TOUR DATES</h1>
            </div>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">LOVELAND, CO</h3>
                <p className="tour-date">May 11, 2024</p>
                <p className="tour-location">Rialto Theater</p>
                <button className="tour-button-style">LEARN MORE</button>
            </div>
            <hr className='listing-line'></hr>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">RIFLE, CO</h3>
                <p className="tour-date">November 23, 2024</p>
                <p className="tour-location">Ute Theater</p>
                <button className="tour-button-style">LEARN MORE</button>
            </div>
            <hr className='listing-line'></hr>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">BRIGHTON, CO</h3>
                <p className="tour-date">January 18, 2025</p>
                <p className="tour-location">Armory Brighton</p>
                <button className="tour-button-style">LEARN MORE</button>
            </div>
            <hr className='listing-line'></hr>            
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">BROOMFIELD, CO</h3>
                <p className="tour-date">March 23, 2025</p>
                <p className="tour-location">Broomfield Auditorium</p>
                <button className="tour-button-style">LEARN MORE</button>
            </div>
            <hr className='listing-line'></hr>
        </div>
    )
}

export default Dates