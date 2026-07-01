

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ardenn KPEHOUN. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/tonpseudo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tonpseudo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer