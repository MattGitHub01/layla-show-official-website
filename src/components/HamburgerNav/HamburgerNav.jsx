import { useState } from 'react'
import HBNavOverlay from '../HamburgerNav/HBNavOverlay.jsx';
import '../Header/Header.css'
import './HamburgerNav.css'

function HamburgerNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEffect, setIsEffect] = useState(false);

    const closeOverlay = () => {
        setIsEffect(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 1000)
        return
    }

    const clickHandler = () => {
        setIsEffect(true);
        setIsOpen(true);
    }


    return (
        <>
            <div 
                className="hamburger-nav" 
                onClick={clickHandler}
                aria-label="Navigation menu, click to open menu options"
            >
                <hr className="hb-top-ln"></hr>
                <hr className="hb-middle-ln"></hr>
                <hr className="hb-bottom-ln"></hr>
                <text className="hb-text">MENU</text>
            </div>
            <div className="overlay-wrapper">
                {isOpen && 
                    <nav className={isEffect ? "hb-overlay open" : "hb-overlay close"}> 
                        <HBNavOverlay closeOverlay={closeOverlay}/>
                    </nav>
                }
            </div>
        </>
    )
}

export default HamburgerNav