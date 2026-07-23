import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaInstagram, FaTelegram, FaXTwitter, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail, MdAccessTime } from 'react-icons/md'
import { useLanguage } from '../LanguageContext'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })
  const [statut, setStatut] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatut('envoi')

    emailjs.send(
      'service_rr5st6a',
      'template_qklg61h',
      {
        name: formData.nom,
        email: formData.email,
        message: formData.message
      },
      '6JQ3TIcG-g9BC5soM'
    )
      .then(() => {
        setStatut('succes')
        setFormData({ nom: '', email: '', message: '' })
      })
      .catch((error) => {
        console.log(error)
        setStatut('erreur')
      })
  }

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>{t.contact.titrePart1} <span className="contact-highlight">{t.contact.titreHighlight}</span></h1>
        <p>{t.contact.soustitre}</p>
      </div>

      <div className="contact-body">

        <div className="contact-left">
          <div className="contact-info-box">
            <h3>{t.contact.infosTitre}</h3>
            <div className="contact-info-item">
              <div className="contact-info-icon"><MdEmail /></div>
              <div>
                <p className="contact-info-label">{t.contact.email}</p>
                <a href="mailto:0xardenn@gmail.com" className="contact-info-value">0xardenn@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaLocationDot /></div>
              <div>
                <p className="contact-info-label">{t.contact.localisation}</p>
                <p className="contact-info-value">{t.contact.ville}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaPhone /></div>
              <div>
                <p className="contact-info-label">{t.contact.telephone}</p>
                <a href="tel:+22901584018 94" className="contact-info-value">+229 01 58 40 18 94</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><MdAccessTime /></div>
              <div>
                <p className="contact-info-label">{t.contact.disponibilite}</p>
                <p className="contact-info-value">{t.contact.disponibiliteValeur}</p>
              </div>
            </div>
          </div>

          <div className="contact-social-box">
            <h3>{t.contact.reseauxTitre}</h3>
            <div className="contact-social-icons">
              <a href="https://github.com/ardennxbt" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://instagram.com/ardennxbt" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://twitter.com/ardennxbt" target="_blank" rel="noopener noreferrer" className="social-icon"><FaXTwitter /></a>
              <a href="https://t.me/ardennxbt" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTelegram /></a>
              <a href="https://comeup.com/ardenn" target="_blank" rel="noopener noreferrer" className="social-icon">CU</a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h3>{t.contact.formTitre}</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>{t.contact.labelNom}</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder=""
              required
            />
            <label>{t.contact.labelEmail}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jeff@contact.com"
              required
            />
            <label>{t.contact.labelMessage}</label>
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.placeholderMessage}
              required
            ></textarea>

            {statut === 'succes' && (
              <p className="contact-succes">{t.contact.succes}</p>
            )}
            {statut === 'erreur' && (
              <p className="contact-erreur">{t.contact.erreur}</p>
            )}

            <button type="submit" className="contact-submit" disabled={statut === 'envoi'}>
              {statut === 'envoi' ? t.contact.envoiEnCours : t.contact.envoyer}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact