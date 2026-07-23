import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './Faq.css'

function Faq() {
  const { t } = useLanguage()
  const [ouvert, setOuvert] = useState(null)

  const toggle = (index) => {
    setOuvert(ouvert === index ? null : index)
  }

  return (
    <section className="faq">
      <h2 className="faq-title">{t.faq.titre}</h2>
      <div className="faq-list">
        {t.faq.items.map((item, index) => (
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