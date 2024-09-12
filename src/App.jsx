import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useRef } from 'react'
import './App.css'

function App() {
   let url = window.location.href;
   let pathNm = url.split('#')[1];

    const scroll = () => {
        if (pathNm !== null) {
            window.scrollTo({pathNm, behavior: 'smooth'})
        }
        document.querySelector('.cast').scrollIntoView(true);
    };

   //  window.addEventListener('load', what);
    return (
        <>
            <Header />
            <Body scoll={scroll} />
            <Footer />
        </>
    )
}

export default App