import { FaCode, FaMobileAlt, FaSyncAlt, FaPaintBrush } from 'react-icons/fa'
import './Services.css'

const services = [
  {
    icon: <FaCode />,
    title: 'Développement Web',
    desc: 'Sites vitrines, applications web et plateformes sur mesure, développés avec des technologies modernes.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Développement Mobile',
    desc: 'Applications mobiles pensées pour une expérience fluide, adaptées aux besoins de vos utilisateurs.',
  },
  {
    icon: <FaSyncAlt />,
    title: 'Refonte & Optimisation',
    desc: 'Modernisation de sites existants : design actualisé, performance améliorée, code plus propre.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Intégration & Design UI',
    desc: 'Transformation de maquettes en interfaces fonctionnelles, fidèles au design et optimisées.',
  },
]

function Services() {
  return (
    <section className="services">
      <h2 data-aos="fade-up">Mes Services</h2>
      <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
        Ce que je peux faire pour vous
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services