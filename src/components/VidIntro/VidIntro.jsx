// Remove Comment Later: import video from '../../assets/layla-show-final.mp4'
import ReactPlayer from 'react-player'
import thumbnail from '../../assets/cast-bottom.png'
import vidImg from '../../assets/art-title.png'
import './VidIntro.css'
// Thumbnail cast-top is a placeholder image and probably needs to be changed

function VidIntro() {

    return (
        <div className='vid-intro'>
            <div className="vid-intro-div">
                <div className="vid-wrapper">
                    <ReactPlayer 
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
                <div className='vid-img-div'>
                    <img className='vid-intro-img' src={vidImg} />
                </div>
            </div>
            <div className='orange-line'></div>
            <hr className='blue-line'></hr>
            <hr className='yellow-line'></hr>
        </div>
    )
}

export default VidIntro