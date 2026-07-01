

import { Link } from 'react-router-dom'
import './CTA.css'

function CTA() {
  return (
    <div className="cta">
      <Link to="/projets" className="btn-primary">Voir mes projets</Link>
      <Link to="/contact" className="btn-secondary">Me contacter</Link>
    </div>
  )
}

export default CTA