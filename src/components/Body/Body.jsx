import { useEffect } from 'react'
import scrollFun from './scrollFun.js'
import VidIntro from '../VidIntro/VidIntro.jsx'
import Dates from '../Dates/Dates.jsx'
import About from '../About/About.jsx'
import Cast from '../Cast/Cast.jsx'
import './Body.css'

function Body() {
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
            <Dates />
            <About />
            <Cast />
        </>
    )
}

export default Body