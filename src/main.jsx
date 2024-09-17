import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Faq from './components/Faq/Faq.jsx'
import PlaceHolder from './components/LearnMorePH/LearnMorePH.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter ([
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
