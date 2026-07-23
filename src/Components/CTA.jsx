

import { Link } from 'react-router-dom'
import './CTA.css'

function CTA() {
  return (
    <div className="cta">
      <Link
        to="/projets"
        className="btn-primary"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        Voir mes projets
      </Link>
      <Link
        to="/contact"
        className="btn-secondary"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Me contacter
      </Link>
    </div>
  )
}

export default CTA