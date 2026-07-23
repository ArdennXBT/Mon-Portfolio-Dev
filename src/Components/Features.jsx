

import './Features.css'

function Features() {
  return (
    <section className="features">
      <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
        <h3>Code propre</h3>
        <p>Un code structuré, lisible et maintenable sur le long terme.</p>
      </div>
      <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
        <h3>Design moderne</h3>
        <p>Des interfaces soignées, pensées pour l'expérience utilisateur.</p>
      </div>
      <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
        <h3>Réactivité</h3>
        <p>Des sites rapides et parfaitement adaptés à tous les écrans.</p>
      </div>
    </section>
  )
}

export default Features