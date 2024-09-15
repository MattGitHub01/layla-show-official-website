import { Link } from 'react-router-dom'
import '../Header/Header.css'

function Nav() {

    
    return (
        <>
            <nav className="nav" aria-label="navigation menu">
                    <Link 
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
                    </Link>
                <a className="nav-link" href="/faq">FAQ</a>
            </nav>
            <div className="tour-btn-div">
                <Link 
                    className="tour-btn" 
                    to={{
                        pathname: `/`,
                        hash: `#tour-dates`,
                    }}
                    
                >
                    TOUR DATES
                </Link>
            </div>
            
        </>
    )
}

export default Nav