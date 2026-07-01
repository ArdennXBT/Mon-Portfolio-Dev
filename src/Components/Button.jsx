

import { Link } from 'react-router-dom'
import './ContactButton.css'
function ContactButton() {
  return (
    <Link to="/contact" className="contact-button">
      Contact
    </Link>
  )
}

export default ContactButton