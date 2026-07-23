import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import './Navbar.css'

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const fermerMenu = () => setMenuOuvert(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={fermerMenu}>Mon Portfolio</Link>

      <button
        className={`navbar-burger ${menuOuvert ? 'ouvert' : ''}`}
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOuvert ? 'ouvert' : ''}`}>
        <li><Link to="/" onClick={fermerMenu}>{t.nav.accueil}</Link></li>
        <li><Link to="/projets" onClick={fermerMenu}>{t.nav.projets}</Link></li>
        <li><Link to="/competences" onClick={fermerMenu}>{t.nav.competences}</Link></li>
        <li><Link to="/contact" onClick={fermerMenu}>{t.nav.contact}</Link></li>
        <li>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Changer de thème"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        <li>
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Changer de langue"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar