// import video from '../../assets/layla-show-final.mp4'

//  VIDEO TEMP LINK https://youtu.be/p_KXY2cj-EM
import thumbnail from '../../assets/thumbnail.jpeg'
import vidImg from '../../assets/art-title.png'
import './VidIntro.css'

function VidIntro() {

    return (
        <div aria-label="Website video content area" className="vid-intro">
            <div className="vid-intro-div">
                <div className="vid-flex-element">
                    <div className="vid-wrapper">
                        <video
                            aria-label="Layla The Life and Music of Eric Clapton intro video" 
                            className="video" 
                            poster={thumbnail}
                            controls
                            autoPlay
                        > 
                            <source src="https://youtu.be/p_KXY2cj-EM" type="video/mp4"/>
                        </video>

                    </div> 
                </div>
                <div className="img-quot-wrapper">
                <div className="vid-quote-div">
                        <h1 className="quote-main"><span>&quot;</span> A captivating fusion of acoustic and electric in one incredible presentation. <span>&quot;</span></h1>
                        <p className="quote-text-1">Scott Malonson</p>
                        <p className="quote-text-2">Hi-Def Photography and Films</p>
                    </div>
                    <div className="vid-img-div">
                        <img 
                            className="vid-intro-img"
                            src={vidImg}
                            alt="Logo image text that says: Layla and Other Assorted Eric Clapton Songs" 
                        />
                    </div>  
                </div>
            </div>
            <hr className='orange-line'></hr>
            <hr className='blue-line'></hr>
            <hr className='yellow-line'></hr>
        </div>
    )
}

export default VidIntro