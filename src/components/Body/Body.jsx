import { useEffect } from 'react'
import scrollFun from './scrollFun.js'
import VidIntro from '../VidIntro/VidIntro.jsx'
import Dates from '../Dates/Dates.jsx'
import About from '../About/About.jsx'
import Cast from '../Cast/Cast.jsx'
import './Body.css'

function Body() {
    // this useEffect function creates a delay before the screen scrolls. This is a bug fix to prevent the screen from scrolling before the page was entirely loaded, causing it to scroll to the wrong part of the screen
    useEffect(() => {
        if (document.readyState === 'complete' ) {
            const urlHash = window.location.href;
            const classHash = '#' + urlHash.split('#')[1];
            const scrollTarget = document.querySelector(classHash);
            if (urlHash.includes('/#')) {
                scrollFun(scrollTarget);
            }
        }
    }, []);

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