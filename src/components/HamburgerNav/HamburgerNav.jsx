import { useState } from 'react'
import HBNavOverlay from '../HamburgerNav/HBNavOverlay.jsx';
import '../Header/Header.css'
import './HamburgerNav.css'

function HamburgerNav() {
    const [isOpen, setIsOpen] = useState(false);

    const closeOverlay = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000)
        return
    }

    return (
        <>
            <div 
                className="hamburger-nav" 
                onClick={() => {setIsOpen(true)}}
                aria-label="Navigation menu, click to open menu options"
            >
                <hr className="hamburger-top-ln"></hr>
                <hr className="hamburger-middle-ln"></hr>
                <hr className="hamburger-bottom-ln"></hr>
                <text className="hamburger-text">MENU</text>
            </div>
            <div className="overlay-wrapper">
                {isOpen && <HBNavOverlay closeOverlay={closeOverlay}/>}
            </div>
        </>
    )
}

export default HamburgerNav