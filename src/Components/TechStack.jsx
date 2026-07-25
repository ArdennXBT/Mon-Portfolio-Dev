

import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import {
  SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiPhp, SiLaravel, SiSymfony, SiPython, SiMysql,
  SiPostgresql, SiMongodb, SiDart, SiFlutter, SiGit, SiBootstrap
} from 'react-icons/si'
import './TechStack.css'

const technos = [
  { nom: 'HTML5', Icon: SiHtml5, couleur: '#e34f26' },
  { nom: 'CSS3', Icon: SiCss, couleur: '#1572b6' },
  { nom: 'Tailwind', Icon: SiTailwindcss, couleur: '#38bdf8' },
  { nom: 'JavaScript', Icon: SiJavascript, couleur: '#f0db4f' },
  { nom: 'React.js', Icon: SiReact, couleur: '#61dafb' },
  { nom: 'Node.js', Icon: SiNodedotjs, couleur: '#3c873a' },
  { nom: 'Express', Icon: SiExpress, couleur: '#000000' },
  { nom: 'PHP', Icon: SiPhp, couleur: '#777bb4' },
  { nom: 'Laravel', Icon: SiLaravel, couleur: '#ff2d20' },
  { nom: 'Symfony', Icon: SiSymfony, couleur: '#000000' },
  { nom: 'Python', Icon: SiPython, couleur: '#3776ab' },
  { nom: 'MySQL', Icon: SiMysql, couleur: '#4479a1' },
  { nom: 'PostgreSQL', Icon: SiPostgresql, couleur: '#4169e1' },
  { nom: 'MongoDB', Icon: SiMongodb, couleur: '#47a248' },
  { nom: 'Dart', Icon: SiDart, couleur: '#0175c2' },
  { nom: 'Flutter', Icon: SiFlutter, couleur: '#02569b' },
  { nom: 'Git', Icon: SiGit, couleur: '#f05032' },
  { nom: 'Bootstrap', Icon: SiBootstrap, couleur: '#7952b3' },
]

function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="techstack" data-aos="fade-up">
      <h2 className="techstack-title">{t.techstack.titre}</h2>
      <p className="techstack-subtitle">{t.techstack.soustitre}</p>

      <div className="techstack-grid">
        {technos.map((tech, index) => (
          <div className="techstack-item" key={index}>
            <div className="techstack-icon" style={{ color: tech.couleur }}>
              <tech.Icon />
            </div>
            <span className="techstack-nom">{tech.nom}</span>
          </div>
        ))}
      </div>

      <div className="techstack-cta">
        <Link to="/competences" className="btn-primary">
          {t.techstack.btnCompetences}
        </Link>
      </div>
    </section>
  )
}

export default TechStack