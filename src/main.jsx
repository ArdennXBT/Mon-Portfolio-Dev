

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

AOS.init({
  duration: 800,
  once: true
})

emailjs.init('6JQ3TlcG-g9BC5soM')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)