import { Link } from 'react-router-dom'
import maPhoto from '../assets/photo.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-badge" data-aos="fade-down">
        <span className="hero-badge-icon">✨</span>
        <span>Je transforme les idées en projets concrets</span>
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
            Bonjour, je suis <span className="hero-highlight">Ardenn KPEHOUN</span>
          </h1>
          <p className="hero-role">Développeur Web & Mobile</p>
          <p className="hero-bio">
            Développeur passionné, je transforme les idées en expériences web et mobile modernes. 
            Design soigné, code solide, résultats concrets. C'est ma façon de créer des solutions 
            qui comptent vraiment.
          </p>
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
            <Link to="/projets" className="btn-primary">Voir mes projets</Link>
            <Link to="/contact" className="btn-secondary">Me contacter</Link>
          </div>
        </div>
      </div>

      <div className="hero-apports" data-aos="fade-up" data-aos-delay="200">
        <h2 className="hero-apports-title">Ce que j'apporte</h2>
        <div className="hero-apports-grid">
          <div className="apport-card" data-aos="fade-up" data-aos-delay="100">
            <h3> Design moderne</h3>
            <p>Des interfaces propres, intuitives et adaptées à tous les écrans.</p>
          </div>
          <div className="apport-card" data-aos="fade-up" data-aos-delay="200">
            <h3> Performance</h3>
            <p>Des applications rapides, optimisées et agréables à utiliser.</p>
          </div>
          <div className="apport-card" data-aos="fade-up" data-aos-delay="300">
            <h3> Code propre</h3>
            <p>Un code structuré, maintenable et évolutif sur le long terme.</p>
          </div>
          <div className="apport-card" data-aos="fade-up" data-aos-delay="400">
            <h3> Mobile first</h3>
            <p>Des projets pensés pour mobile dès le départ, sur web et natif.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero