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

// function GetData() {
//   const formInfo = {
//     name: 'matt',
//     passwrd: 'mattpwr'
//   }

//   useEffect(() => {
//     fetch('/', {
//       methon: "POST",
//       headers: {
//         'Content-type': "application/json"
//       },
//       body: JSON.stringify(formInfo)
//     })
//     .then(res => res.json())
//     .then(data => setData(data))
//   }, [])
// }

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
