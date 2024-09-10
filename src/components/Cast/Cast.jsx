import castPlaceholderImg from '../../assets/cast-ph-img.jpg'
import './Cast.css'

function Cast() {

    return (
        <div className="cast" aria-label="cast members section">
            <h1>Cast</h1>
            <div className="cast-card" aria-label="list of cast members and descriptions">
                <img src={castPlaceholderImg}/>
            </div>
        </div>
    )
}

export default Cast