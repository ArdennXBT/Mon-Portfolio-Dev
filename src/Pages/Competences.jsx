

import './Competences.css'

const competences = [
  {
    numero: "01",
    titre: "Développement Web",
    description: "Conception et développement d'applications web modernes et performantes.",
    categories: [
      {
        nom: "FRONTEND",
        skills: [
          { nom: "HTML / CSS", niveau: 50 },
          { nom: "JavaScript", niveau: 50 },
          { nom: "React", niveau: 65 },
        ]
      },
      {
        nom: "BACKEND",
        skills: [
          { nom: "Node.js", niveau: 50 },
          { nom: "MongoDB", niveau: 50 },
        ]
      }
    ]
  },
  {
    numero: "02",
    titre: "Développement Mobile",
    description: "Création d'applications mobiles fluides et intuitives.",
    categories: [
      {
        nom: "MOBILE",
        skills: [
          { nom: "React Native", niveau: 50 },
        ]
      }
    ]
  }
]

function Competences() {
  return (
    <div className="competences-page">
      <h1 className="competences-title">Mes Compétences</h1>
      <p className="competences-subtitle">
        Les technologies que je maîtrise et que j'améliore chaque jour.
      </p>

      <div className="competences-grid">
        {competences.map((bloc, index) => (
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