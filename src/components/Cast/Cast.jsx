import castPlaceholderImg from '../../assets/cast-ph-img.jpg'
import './Cast.css'

function Cast() {

    return (
        <div className="cast" aria-label="cast members section">
            <h1>Cast</h1>
            <div className="cast-card"
                aria-label="list of cast members and descriptions">
                <img className="cast-img" src={castPlaceholderImg}/>
                <h3><a>Person Name</a></h3>
            </div>
        </div>
    )
}

export default Cast