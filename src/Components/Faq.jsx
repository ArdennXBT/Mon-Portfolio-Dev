

import { useState } from 'react'
import './Faq.css'

const faqs = [
  {
    question: "Quels types de projets réalises-tu ?",
    reponse: "Sites vitrines, landing pages et applications web complètes. Chaque projet est conçu sur mesure, du design à la mise en ligne, pour offrir une expérience utilisateur fluide et professionnelle."
  },
  {
    question: "Combien de temps prend un projet ?",
    reponse: "Cela dépend du projet. Un site vitrine ou landing page : 1 à 2 semaines. Une application web ou boutique en ligne : 3 à 6 semaines. Je prends le temps nécessaire pour livrer un travail de qualité."
  },
  {
    question: "Travailles-tu en freelance ?",
    reponse: "Oui, je suis disponible en freelance pour particuliers et entreprises. Je suis également ouvert à des opportunités en entreprise (CDD, CDI, stage). Mon objectif : mettre mes compétences au service de vos idées."
  },
  {
    question: "Quelles technologies utilises-tu ?",
    reponse: "React, JavaScript et CSS pour le frontend. Node.js et MongoDB pour le backend. Je me forme en continu pour rester à jour avec les dernières évolutions du web."
  },
  {
    question: "Comment se déroule une collaboration ?",
    reponse: "On commence par un échange pour comprendre votre projet. Je propose une solution, on valide ensemble, je développe et je livre. Je reste disponible même après la livraison. Pour moi, c'est le début d'une relation de confiance."
  }
]

function Faq() {
  const [ouvert, setOuvert] = useState(null)

  const toggle = (index) => {
    setOuvert(ouvert === index ? null : index)
  }

  return (
    <section className="faq">
      <h2 className="faq-title">Questions fréquentes</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${ouvert === index ? 'faq-item--ouvert' : ''}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <h4>{item.question}</h4>
              <span className="faq-icone">{ouvert === index ? '−' : '+'}</span>
            </div>
            {ouvert === index && (
              <p className="faq-reponse">{item.reponse}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq