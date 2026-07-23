import { useLanguage } from '../LanguageContext'
import './Features.css'

function Features() {
  const { t } = useLanguage()

  return (
    <section className="features">
      <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
        <h3>{t.features.code.titre}</h3>
        <p>{t.features.code.desc}</p>
      </div>
      <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
        <h3>{t.features.design.titre}</h3>
        <p>{t.features.design.desc}</p>
      </div>
      <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
        <h3>{t.features.reactivite.titre}</h3>
        <p>{t.features.reactivite.desc}</p>
      </div>
    </section>
  )
}

export default Features