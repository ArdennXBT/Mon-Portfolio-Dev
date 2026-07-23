import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { LanguageProvider } from './LanguageContext'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Acceuil from './Pages/Acceuil'
import Projets from './Pages/Projets'
import Competences from './Pages/Competences'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    })
  }, [])

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App