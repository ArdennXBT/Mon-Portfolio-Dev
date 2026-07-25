

import { useLanguage } from '../LanguageContext'
import './Projets.css'

function Projets() {
  const { t } = useLanguage()

  return (
    <div className="projets-page">
      <h1 className="projets-title" data-aos="fade-down">{t.projets.titre}</h1>
      <p className="projets-subtitle" data-aos="fade-down" data-aos-delay="100">
        {t.projets.soustitre}
      </p>

      <div className="projets-grid">
        {t.projets.liste.map((projet, index) => (
          <div
            className="projet-card"
            key={projet.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="projet-tags">
              {projet.technologies.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="projet-link">
              {t.projets.voirProjet}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets