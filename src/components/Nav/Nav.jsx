import '../Header/Header.css'
function Nav() {
    const urlTour = () => {
        const baseUrl = '#' + urlHash.split('#')[0];
        location.assign(baseUrl + '#tour-dates');
    };
    const setUrlTour = (e) => {
        urlTour();
        e.preventDefault();
    }

    const urlAbt = () => {
        const baseUrl = '#' + urlHash.split('#')[0];
        location.assign(baseUrl + '#about');
    };
    const setUrlAbt = (e) => {
        urlAbt();
        e.preventDefault();
    }

    const urlCast = () => {
        const baseUrl = '#' + urlHash.split('#')[0];
        location.assign(baseUrl + '#cast');
    };
    const setUrlCast = (e) => {
        urlCast();
        e.preventDefault();
    }
    
    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <a className="nav-link" href="/#tour-dates" onClick={setUrlTour}>tour dates</a>
                <a className="nav-link" href="/#about" onClick={setUrlAbt}>about</a>
                <a className="nav-link" href="/#cast" onClick={setUrlCast}>cast</a>
                
                    {/* <Link 
                        className="nav-link" 
                        to={{
                            pathname: `/`,
                            hash: `#about`,
                        }}
                        
                    >
                        tour dates
                    </Link>
                    <Link 
                        className="nav-link" 
                        to={{
                            pathname: `/`,
                            hash: `#about`,
                        }}
                        
                    >
                        about
                    </Link>
                    <Link 
                        className="nav-link" 
                        to={{
                            pathname: `/`,
                            hash: `#cast`,
                        }}
                        
                    >
                        cast
                    </Link> */}
                <a className="nav-link" href="/faq">FAQ</a>
            </nav>
            <div className="tour-btn-div">
                <a className="tour-btn" href="/#tour-dates" onClick={setUrlTour}>TOUR DATES</a>
                {/* <Link 
                    className="tour-btn" 
                    to={{
                        pathname: `/`,
                        hash: `#tour-dates`,
                    }}
                    
                >
                    TOUR DATES
                </Link>  */}
            </div>
        </>
    )
}

export default Nav