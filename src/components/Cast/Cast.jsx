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
                        <h2 className="cast-text-1">Jerry Skaw</h2><h3 className="cast-text-2">Vocals & Guitar</h3>
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
                        <h2 className="cast-text-1">Jeff Banach</h2><h3 className="cast-text-2">Vocals & Guitar</h3>
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
                        <h2 className="cast-text-1">Lily Bjorklund</h2><h3 className="cast-text-2">Vocals, Guitar & Mandolin</h3>
                    </div>
                    <div 
                        className="cast-card"
                        aria-label="David Bergner Vocals and Bass Guitar"
                    >
                        <img 
                            className="cast-img" 
                            src={davidImg} 
                        />
                        <h2 className="cast-text-1">David Bergner</h2><h3 className="cast-text-2">Vocals & Bass Guitar</h3>
                    </div>
                    <div 
                        className="cast-card"
                        aria-label="Rob Smith Keyboards"
                    >
                        <img 
                            className="cast-img" 
                            src={robImg} 
                        />
                        <h2 className="cast-text-1">Rob Smith</h2><h3 className="cast-text-2">Keyboard</h3>
                    </div>
                    <div 
                        className="cast-card"
                        aria-label="Henry Lokay Vocals and Drums"
                    >
                        <img 
                            className="cast-img" 
                            src={henryImg} 
                        />
                        <h2 className="cast-text-1">Henry Lokay</h2><h3 className="cast-text-2">Vocals & Drums</h3>
                    </div>
                    <div 
                        className="cast-card"
                        aria-label="Jeffrey Ranck AKA Junior Drums"
                    >
                        <img 
                            className="cast-img" 
                            src={jrImg} 
                        />
                        <h2 className="cast-text-1">Jeffrey &quot;JR&quot; Ranck</h2><h3 className="cast-text-2">Drums</h3>
                    </div>                                
                    <div 
                        className="cast-card"
                        aria-label="Tudie Calderon Percussion">
                        <img 
                            className="cast-img" 
                            src={tudiImg} 
                        />
                        <h2 className="cast-text-1">Tudie Calderon</h2><h3 className="cast-text-2">Percussion</h3>
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