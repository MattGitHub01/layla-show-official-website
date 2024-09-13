import davidImg from '../../assets/david-cast.jpg'
import henryImg from '../../assets/henry-cast.jpg'
import jeffImg from '../../assets/jeff-cast.jpg'
import jerryImg from '../../assets/jerry-cast.jpg'
import jrImg from '../../assets/jr-cast.jpg'
import lillyImg from '../../assets/lilly-cast.jpg'
import robImg from '../../assets/rob-cast.jpg'
import tudiImg from '../../assets/tudi-cast.jpg'
import castBottomImg from '../../assets/cast-bottom.png'
import './Cast.css'

// Need new bottom of page image

function Cast() {

    return (
        <div
            id="cast" 
            className="cast" 
            aria-label="cast members section"
        >
        <div className="cast-title">
            <h1>CAST</h1>
        </div>
            <div 
                className="cast-card-area" 
                aria-label='List of cast members'
            >
                <div 
                    className="cast-card"
                    aria-label="Jerry Skaw Vocals and Guitars"
                >
                    <img 
                        className="cast-img" 
                        src={jerryImg} 
                        alt="Photo of Jerry Skaw" 
                />
                    <h3><a>Jerry Skaw<br></br>Vocals & Guitar</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="Jeff Banach Vocals and Guitars"
                >
                    <img 
                        className="cast-img" 
                        src={jeffImg} 
                        alt="Photo of Jeff Banach" 
                    />
                    <h3><a>Jeff Banach<br></br>Vocals & Guitar</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="Lilly Bjorklund Vocals, Guitar and Mandolin"
                >
                    <img 
                        className="cast-img" 
                        src={lillyImg} 
                        alt="Image of Lilly Bjorklund" 
                    />
                    <h3><a>Lilly Bjorklund<br></br>Vocals, Guitar & Mandolin</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="David Bergner Vocals and Bass Guitar"
                >
                    <img 
                        className="cast-img" 
                        src={davidImg} 
                    />
                    <h3><a>David Bergner<br></br>Vocals & Bass Guitar</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="Rob Smith Keyboards"
                >
                    <img 
                        className="cast-img" 
                        src={robImg} 
                    />
                    <h3><a>Rob Smith<br></br>Keyboard</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="Henry Lokay Vocals and Drums"
                >
                    <img 
                        className="cast-img" 
                        src={henryImg} 
                    />
                    <h3><a>Henry Lokay<br></br>Vocals & Drums</a></h3>
                </div>
                <div 
                    className="cast-card"
                    aria-label="Jeffrey Ranck AKA Junior Drums"
                >
                    <img 
                        className="cast-img" 
                        src={jrImg} 
                    />
                    <h3><a>Jeffrey &quot;JR&quot; Ranck<br></br>Drums</a></h3>
                </div>                                
                <div 
                    className="cast-card"
                    aria-label="Tudie Calderon Percussion">
                    <img className="cast-img" src={tudiImg} 
                />
                    <h3><a>Tudie Calderon<br></br>Percussion</a></h3>
                </div>
            </div>
            <img 
                className="cast-bottom-img"
                src={castBottomImg}
                alt="Image of live performance"
            />  
        </div>
    )
}

export default Cast