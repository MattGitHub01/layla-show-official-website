import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VidIntro from '../VidIntro/VidIntro.jsx'
import Dates from '../Dates/Dates.jsx'
import About from '../About/About.jsx'
import Cast from '../Cast/Cast.jsx'
import './Body.css'

function Body() {
    const location = useLocation();

    useEffect(() => {
        const scrollToHash = () => {
            const hash = location.hash;
            if (hash) {
                const scrollTarg = document.querySelector(hash);
                if (scrollTarg) {
                    // Timer added to allow page to fully render before scroll
                    setTimeout(() => {
                        scrollTarg.scrollIntoView({ behavior: 'smooth'});
                    }, 100);
                }
            }
        }
        // Check if page has completely loaded
        if (document.readyState === 'complete') {
            scrollToHash();
        } else {
            // If page is loading, wait and then scroll
            window.addEventListener('load', scrollToHash);
            return () => window.removeEventListener('load', scrollToHash);
        }
    }, [location]);

    return (
        <>
            <VidIntro />
            <About />
            <Dates />
            <Cast />
        </>
    )
}

export default Body