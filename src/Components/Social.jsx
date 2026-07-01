import './Social.css'

const reseaux = [
  { nom: "Instagram", lien: "https://instagram.com/ArdennXBT", icone: "" },
  { nom: "Twitter / X", lien: "https://twitter.com/ArdennXBT", icone: "" },
  { nom: "GitHub", lien: "https://github.com/ArdennXBT", icone: "" },
  { nom: "Comeup", lien: "https://comeup.com/ardenn", icone: "" },
  { nom: "Telegram", lien: "https://t.me/ArdennXBT", icone: "" }
]

function Social() {
  return (
    <section className="social">
      <h2 className="social-title">Retrouvez-moi sur ces plateformes</h2>
      <p className="social-subtitle">
        Suivez mon actualité, mes projets et n'hésitez pas à m'écrire directement.
      </p>
      <div className="social-grid">
        {reseaux.map((reseau, index) => (
          <a href={reseau.lien} target="_blank" rel="noopener noreferrer" className="social-card" key={index}>
            <span className="social-icone">{reseau.icone}</span>
            <span className="social-nom">{reseau.nom}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Social