import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import maPhoto from '../assets/photo.jpg'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">

      <div className="hero-badge" data-aos="fade-down">
        <span className="hero-badge-icon">✨</span>
        <span>{t.hero.badge}</span>
      </div>

      <div className="hero-top">
        <img
          src={maPhoto}
          alt="Photo de profil"
          className="hero-photo"
          data-aos="fade-right"
        />
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