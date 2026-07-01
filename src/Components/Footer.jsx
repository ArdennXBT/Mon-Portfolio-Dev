

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ardenn KPEHOUN. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/ArdennXBT" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://wa.me/2290158401894" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  )
}

export default Footer