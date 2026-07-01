import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

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
        <li><Link to="/" onClick={fermerMenu}>Accueil</Link></li>
        <li><Link to="/projets" onClick={fermerMenu}>Projets</Link></li>
        <li><Link to="/competences" onClick={fermerMenu}>Competences</Link></li>
        <li><Link to="/contact" onClick={fermerMenu}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar