

import { useLanguage } from '../LanguageContext'
import { MdWeb, MdDns, MdPhoneAndroid, MdStorage, MdApi, MdBuild } from 'react-icons/md'
import './Competences.css'

const icones = [MdWeb, MdDns, MdPhoneAndroid, MdStorage, MdApi, MdBuild]

function Competences() {
  const { t } = useLanguage()

  return (
    <div className="competences-page">
      <h1 className="competences-title">{t.competences.titre}</h1>
      <p className="competences-subtitle">
        {t.competences.soustitre}
      </p>

      <div className="competences-grid">
        {t.competences.categories.map((categorie, index) => {
          const Icone = icones[index]
          return (
            <div className="competence-card" key={index}>
              <div className="competence-card-header">
                <div className="competence-icon">
                  <Icone />
                </div>
                <h2 className="competence-card-titre">{categorie.titre}</h2>
              </div>
              <div className="competence-tags">
                {categorie.skills.map((skill, i) => (
                  <span className="competence-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Competences