import castPlaceholderImg from '../../assets/cast-ph-img.jpg'
import castBottomImg from '../../assets/cast-bottom.png'
import './Cast.css'

// Need new bottom of page image

function Cast() {

    return (
        <div className="cast" aria-label="cast members section">
        <div className="cast-title">
            <h1>CAST</h1>
        </div>
            <div className="cast-card-area">
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>                <div className="cast-card"
                    aria-label="list of cast members and descriptions">
                    <img className="cast-img" src={castPlaceholderImg}/>
                    <h3><a>Person Name</a></h3>
                </div>
            </div>
            <img 
                className="cast-bottom-img"
                src={castBottomImg}
                alt="Image of live performance"
            />
            <hr className='orange-line-cast'></hr>    
        </div>
    )
}

export default Cast