import { useEffect } from 'react';
import '../Header/Header.css'

function Nav() {
    useEffect(() => {
        const urlHash = window.location.href;
        if (urlHash.includes('/#')) {
            urlHash.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    
    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                <a className="nav-link" href="/#tour-dates">tour dates</a>
                <a className="nav-link" href="/#about">about</a>
                <a className="nav-link" href="/#cast">cast</a>
                
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
                <a className="tour-btn" href="/#tour-dates">TOUR DATES</a>
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