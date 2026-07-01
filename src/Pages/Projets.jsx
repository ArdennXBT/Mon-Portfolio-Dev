import './Projets.css'

const projets = [
  {
    id: 1,
    titre: "Nom du projet 1",
    description: "Courte description du projet et de son objectif.",
    technologies: ["React", "Node.js", "MongoDB"],
    lien: "https://github.com/tonpseudo/projet1"
  },
  {
    id: 2,
    titre: "Nom du projet 2",
    description: "Courte description du projet et de son objectif.",
    technologies: ["JavaScript", "CSS", "API"],
    lien: "https://github.com/tonpseudo/projet2"
  },
  {
    id: 3,
    titre: "Nom du projet 3",
    description: "Courte description du projet et de son objectif.",
    technologies: ["React", "Tailwind"],
    lien: "https://github.com/tonpseudo/projet3"
  }
]

function Projets() {
  return (
    <div className="projets-page">
      <h1 className="projets-title">Mes Projets</h1>
      <p className="projets-subtitle">
        Une sélection de mes réalisations récentes. A venir...
      </p>

      <div className="projets-grid">
        {projets.map((projet) => (
          <div className="projet-card" key={projet.id}>
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="projet-tags">
              {projet.technologies.map((tech, index) => (
                <span className="tag" key={index}>{tech}</span>
              ))}
            </div>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="projet-link">
              Voir le projet →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets