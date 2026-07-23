import { useLanguage } from '../LanguageContext'
import './Competences.css'

function Competences() {
  const { t } = useLanguage()

  return (
    <div className="competences-page">
      <h1 className="competences-title">{t.competences.titre}</h1>
      <p className="competences-subtitle">
        {t.competences.soustitre}
      </p>

      <div className="competences-grid">
        {t.competences.blocs.map((bloc, index) => (
          <div className="competence-bloc" key={index}>
            <div className="competence-bloc-header">
              <span className="competence-numero">{bloc.numero}</span>
              <div>
                <h2 className="competence-bloc-titre">{bloc.titre}</h2>
                <p className="competence-bloc-desc">{bloc.description}</p>
              </div>
            </div>

            {bloc.categories.map((categorie, i) => (
              <div className="competence-categorie" key={i}>
                <p className="competence-categorie-nom">{categorie.nom}</p>
                <div className="competence-skills">
                  {categorie.skills.map((skill, j) => (
                    <div className="skill-item" key={j}>
                      <div className="skill-info">
                        <span className="skill-nom">{skill.nom}</span>
                        <span className="skill-niveau">{skill.niveau}%</span>
                      </div>
                      <div className="skill-barre-bg">
                        <div
                          className="skill-barre-fill"
                          style={{ width: `${skill.niveau}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competences