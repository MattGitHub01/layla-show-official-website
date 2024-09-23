import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'
import { useState, useEffect } from 'react'

function App() {    
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const handleError = () => setHasError(true)
        window.addEventListener('error', handleError)
        return () => window.removeEventListener('error', handleError)
    }, [])

    if (hasError) {
        return (
            <div className="error-div">    
                <h1>Error: please restart page</h1>
            </div>
        )
    }

    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

export default App
