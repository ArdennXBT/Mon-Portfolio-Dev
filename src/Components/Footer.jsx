

import { FaGithub, FaInstagram, FaTelegram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { useLanguage } from '../LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ardenn KPEHOUN. {t.footer.droits}</p>
      <div className="footer-links">
        <a href="https://wa.me/2290158401894" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        <a href="https://github.com/ArdennXBT" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://twitter.com/ArdennXBT" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
        <a href="https://instagram.com/ArdennXBT" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://t.me/ArdennXBT" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegram /></a>
      </div>
    </footer>
  )
}

export default Footer