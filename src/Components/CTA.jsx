import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './CTA.css'

function CTA() {
  const { t } = useLanguage()

  return (
    <div className="cta">
      <Link
        to="/projets"
        className="btn-primary"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {t.hero.btnProjets}
      </Link>
      <Link
        to="/contact"
        className="btn-secondary"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {t.hero.btnContact}
      </Link>
    </div>
  )
}

export default CTA