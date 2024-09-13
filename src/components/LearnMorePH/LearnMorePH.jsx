import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import './LearnMorePH.css'

function LearnMorePH() {
    return(
        <div className="learn-more-ph">
            <Header />
            <div className="ph-content">
                <h1 className="ph-header">Venue Page Coming Soon!</h1>
                <p className="ph-text">The venue hosting event has not yet posted information about this show. <br></br><br></br>Come back soon for updates!</p>
            </div>
            <Footer />
        </div>
    )
}

export default LearnMorePH