import { useState } from 'react'
import HBNavOverlay from '../HamburgerNav/HBNavOverlay.jsx';
import '../Header/Header.css'
import './HamburgerNav.css'

function HamburgerNav() {
    const [isOpen, setIsOpen] = useState(false);

    const closeOverlay = () => {
        setIsOpen(false);
        return
    }

    return (
        <>
            <div 
                className="hamburger-nav" 
                onClick={() => setIsOpen(true)} 
                aria-label="Navigation menu, click to open menu options"
            >
                <hr className="hb-top-ln"></hr>
                <hr className="hb-middle-ln"></hr>
                <hr className="hb-bottom-ln"></hr>
                <text className="hb-text">MENU</text>
            </div>
            <div className="overlay-wrapper">
                {isOpen && <HBNavOverlay closeOverlay={closeOverlay}/>}
            </div>
        </>
    )
}

export default HamburgerNav