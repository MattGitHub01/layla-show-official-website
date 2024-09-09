import Nav from '../Nav/Nav.jsx'
import NavImg from '../../assets/nav-title.png'
import './Header.css'

function Header() {

    return (
        <header>
            <div className="header-nav">
                <img className="header-img" src={NavImg} />
                <Nav />
            </div>
            
        </header>
    )
}

export default Header