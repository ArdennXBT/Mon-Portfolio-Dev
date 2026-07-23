import { useLanguage } from '../LanguageContext'
import './Projets.css'

function Projets() {
  const { t } = useLanguage()

  return (
    <div className="projets-page">
      <h1 className="projets-title">{t.projets.titre}</h1>
      <p className="projets-subtitle">
        {t.projets.soustitre}
      </p>

      <div className="projets-grid">
        {t.projets.liste.map((projet) => (
          <div className="projet-card" key={projet.id}>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="projet-tags">
              {projet.technologies.map((tech, index) => (
                <span className="tag" key={index}>{tech}</span>
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