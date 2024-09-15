import { useEffect } from 'react'
import VidIntro from '../VidIntro/VidIntro.jsx'
import Dates from '../Dates/Dates.jsx'
import About from '../About/About.jsx'
import Cast from '../Cast/Cast.jsx'

function Body() {
    useEffect(() => {
        const urlHash = window.location.href;
        if (urlHash.includes('/#')) {
            urlHash.scrollIntoView({ behavior: "smooth" });
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