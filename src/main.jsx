import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'
import { googleMapAPIKEY } from './map-api.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider apiKey={googleMapAPIKEY}>
      <App />
    </APIProvider>
  </StrictMode>,
)
