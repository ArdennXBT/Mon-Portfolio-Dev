

import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Services from '../Components/Services'
import TechStack from '../Components/TechStack'
import CTA from '../Components/CTA'
import Faq from '../Components/Faq'

function Acceuil() {
  return (
    <div>
      <Hero />
      <CTA />
      <Features />
      <Services />
      <TechStack />
      <Faq />
      <CTA />
    </div>
  )
}

export default Acceuil