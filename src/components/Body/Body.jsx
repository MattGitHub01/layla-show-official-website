import VidIntro from '../VidIntro/VidIntro.jsx'
import Dates from '../Dates/Dates.jsx'
import About from '../About/About.jsx'
import Cast from '../Cast/Cast.jsx'
import Faq from '../Faq/Faq.jsx'

function Body() {
// PLACE THE STORE COMPONENT IN THIS COMPONENT BENEATH FAQ LATER WHEN IT'S DEVELOPED
    return (
        <>
            <VidIntro />
            <Dates />
            <About />
            <Cast />
            <Faq />
        </>
    )
}

export default Body