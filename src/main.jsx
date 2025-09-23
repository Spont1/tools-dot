import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Qr from './components/Qr.jsx'
import ColorPicker from './components/ColorPicker.jsx'
import PasswordGenerator from './components/PasswordGenerator.jsx'

const router = createHashRouter([
  {
  path: "/",
  element: <App/>
  },
  {
    path: "/qr",
    element: <Qr/>
  },
  {
    path: "/colorPicker",
    element: <ColorPicker/>
  },
  {
    path: "/passwordGenerator",
    element: <PasswordGenerator/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
