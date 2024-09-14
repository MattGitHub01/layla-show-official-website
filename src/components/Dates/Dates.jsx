import './Dates.css'

function Dates() {

    return (
        <div 
            className="tours" 
            aria-label="Tour dates list section"
        >
            <a id="dates"></a>
            <div className='tour-title'>
                <h1>TOUR DATES</h1>
            </div>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">LOVELAND, CO</h3>
                <p className="tour-date">May 11, 2024</p>
                <p className="tour-location">Rialto Theater</p>
                <a 
                    className="tour-button-style" 
                    href="/coming-soon"
                >
                    <button className="tour-button">LEARN MORE</button>
                </a>
            </div>
            <hr className='listing-line'></hr>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">RIFLE, CO</h3>
                <p className="tour-date">November 23, 2024</p>
                <p className="tour-location">Ute Theater</p>
                <a 
                    className="tour-button-style" 
                    href="https://utetheater.com/event/forever-man-layla-other-assorted-eric-clapton-songs/"
                >
                    <button className="tour-button">LEARN MORE</button>
                </a>
            </div>
            <hr className='listing-line'></hr>
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">BRIGHTON, CO</h3>
                <p className="tour-date">January 18, 2025</p>
                <p className="tour-location">Armory Brighton</p>
                <a 
                    className="tour-button-style" 
                    href="/coming-soon"
                >
                    <button className="tour-button">LEARN MORE</button>
                </a>
            </div>
            <hr className='listing-line'></hr>            
            <div className="tour-listing" aria-label="individual tour date listing">
                <h3 className="tour-city">BROOMFIELD, CO</h3>
                <p className="tour-date">March 23, 2025</p>
                <p className="tour-location">Broomfield Auditorium</p>
                <a 
                    className="tour-button-style" 
                    href="/coming-soon"
                >
                    <button className="tour-button">LEARN MORE</button>
                </a>
            </div>
            <hr className='listing-line'></hr>
        </div>
    )
}

export default Dates