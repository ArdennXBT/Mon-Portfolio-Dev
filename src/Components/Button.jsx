import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './ContactButton.css'

function ContactButton() {
  const { t } = useLanguage()

  return (
    <Link to="/contact" className="contact-button">
      {t.nav.contact}
    </Link>
  )
}

export default ContactButton