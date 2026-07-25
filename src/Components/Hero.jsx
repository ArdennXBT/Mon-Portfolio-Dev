

import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import maPhoto from '../assets/photo.jpg'
import './Hero.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa6'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">

      <div className="hero-badge" data-aos="fade-down">
        <span>{t.hero.badge}</span>
      </div>

      <div className="hero-top">
        <div className="hero-photo-wrap" data-aos="fade-right">
          <img
            src={maPhoto}
            alt="Photo de profil"
            className="hero-photo"
          />
          <span className="tech-badge tech-badge-1"><FaHtml5 /></span>
          <span className="tech-badge tech-badge-2"><FaReact /></span>
          <span className="tech-badge tech-badge-3"><FaCss3Alt /></span>
          <span className="tech-badge tech-badge-4"><FaJs /></span>
          <span className="tech-badge tech-badge-5"><FaNodeJs /></span>
          <span className="hero-tag hero-tag-pro">{t.hero.tagPro}</span>
          <span className="hero-tag hero-tag-creatif">{t.hero.tagCreatif}</span>
        </div>
        <div className="hero-text" data-aos="fade-left" data-aos-delay="200">
          <h1 className="hero-title">
            {t.hero.titre} <span className="hero-highlight">Ardenn KPEHOUN</span>
          </h1>
          <p className="hero-role">{t.hero.metier}</p>
          <p className="hero-bio">
            {t.hero.bio}
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
            <Link to="/projets" className="btn-primary">{t.hero.btnProjets}</Link>
            <Link to="/contact" className="btn-secondary">{t.hero.btnContact}</Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero