import { Helmet } from 'react-helmet'
import { StrictMode, /*useState*/ } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Faq from './components/Faq/Faq.jsx'
import PlaceHolder from './components/LearnMorePH/LearnMorePH.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Form from './components/Form/Form.jsx'
import PrivacyPolicy from './components/Footer/PrivacyPolicy.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'

const clientRouter = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/faq',
    element: <Faq />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/coming-soon',
    element: <PlaceHolder />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact-form',
    element: <Form />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Helmet>
    <meta name="description" content="Layla and Other Assorted Eric Clapton Songs is a musical experience and homage to one of the most influential guitarists and songwriters of our time, Eric Clapton, and journey through the sonic landscapes of a legend who truly changed the face of music" />
    <meta name="keywords" content="live music, concerts, tour dates, rock band, performance, Eric Clapton, Eric, Clapton, eric clapton, eric, clapton theater, act, two-act performance, acoustic, electric, guitar, sound, music, 1960s music, 1970s music, 1960, 60s, 1970, 70s, sound, cool. good, concert, tour, cover band, cover, band, eric clapton cover band, clapton cover band, eric cover band, eric band, clapton band, eric clapton band," />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Layla and Other Assorted Eric Clapton Songs" />
    <meta property="og:description" content="Get ready for an electrifying live performance with My Band!" />
    <meta property="og:url" content="https://laylashow.com/" />
    </Helmet>
    <RouterProvider router={clientRouter} />
  </StrictMode>,
)
