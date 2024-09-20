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
    <RouterProvider router={clientRouter} />
  </StrictMode>,
)
