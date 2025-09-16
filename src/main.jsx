import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Qr from './components/Qr.jsx'

const router = createHashRouter([
  {
  path: "/",
  element: <App/>
  },
  {
    path: "/qr",
    element: <Qr/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
