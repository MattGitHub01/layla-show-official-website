import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VidIntro from '../VidIntro/VidIntro.jsx';
import Dates from '../Dates/Dates.jsx';
import About from '../About/About.jsx';
import Cast from '../Cast/Cast.jsx';
import './Body.css';

function Body() {
    const location = useLocation();

    const getFixedHeaderHeight = () => {
        const header = document.querySelector('header');
        return header.offsetHeight;
    };

    const scrollToTargetElement = (hash) => {
        const scrollTarget = document.querySelector(hash);
        if (scrollTarget) {
            const fixedHeaderHeight = getFixedHeaderHeight();
            const targetPosition = scrollTarget.getBoundingClientRect().top + window.scrollY - fixedHeaderHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const hash = location.hash; // Get the hash from the URL
        if (hash) {
            if (document.readyState === 'complete') {
                scrollToTargetElement(hash); // Scroll to the target if the page is fully loaded
            } else {
                window.addEventListener('load', () => scrollToTargetElement(hash)); // Wait for the page to load if it hasn't yet
                return () => window.removeEventListener('load', () => scrollToTargetElement(hash));
            }
        }
    }, [location]); // Trigger useEffect on page load

    return (
        <>
            <VidIntro />
            <About />
            <Dates />
            <Cast />
        </>
    );
}

export default Body;
