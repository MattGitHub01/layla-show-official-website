// Remove Comment Later: import video from '../../assets/layla-show-final.mp4'
import ReactPlayer from 'react-player'
import thumbnail from '../../assets/thumbnail.jpeg'
import vidImg from '../../assets/art-title.png'
import './VidIntro.css'
// Thumbnail cast-top is a placeholder image and probably needs to be changed

function VidIntro() {

    return (
        <div aria-label="Video Body Segment" className="vid-intro">
            <div className="vid-intro-div">
                <div className="vid-wrapper">
                    <ReactPlayer
                        aria-label="Layla The Life and Music of Eric Clapton intro video" 
                        className="video" 
                        url="https://youtu.be/p_KXY2cj-EM"
                        /* The URL is a placeholder, GitHub won't accept large files && I don't
                        want to risk corrupting the file. The video will be removed for github
                        upload then added for the published active website*/
                        controls="true" 
                        loop="true"
                        light={thumbnail}
                    />
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