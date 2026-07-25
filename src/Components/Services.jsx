import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import codeIllustration from '../assets/code-editor-illustration.svg'
import './Services.css'

function Services() {
  const { t } = useLanguage()

  return (
    <section className="services">
      <div className="services-content" data-aos="fade-right">
        <h3 className="services-label">{t.services.badge}</h3>
        <p className="services-desc">{t.services.description}</p>

        <div className="services-visual" data-aos="fade-up">
          <img
            src={codeIllustration}
            alt="Code editor illustration"
            className="services-image"
          />
          <span className="services-float services-float-1">{'</>'}</span>
          <span className="services-float services-float-2">⚡</span>
          <span className="services-float services-float-3">🚀</span>
        </div>

        <div className="services-tags">
          {t.services.tags.map((tag, index) => (
            <span className="services-tag" key={index}>{tag}</span>
          ))}
        </div>

        <Link to="/projets" className="btn-primary">{t.services.btn}</Link>
      </div>
    </section>
  )
}

export default Services