export const translations = {
  fr: {
    nav: {
      accueil: 'Accueil',
      projets: 'Projets',
      competences: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      tagPro: "Professionnel",
      tagCreatif: "Créatif",
      badge: "Je transforme les idées en projets concrets",
      titre: "Bonjour, je suis",
      metier: "Développeur Web & Mobile",
      bio: "Développeur passionné, je transforme les idées en expériences web et mobile modernes. Design soigné, code solide, résultats concrets. C'est ma façon de créer des solutions qui comptent vraiment.",
      btnProjets: "Voir mes projets",
      btnContact: "Me contacter",
    },
    features: {
      titre: "Ce que j'apporte",
      code: {
        titre: "Code propre",
        desc: "Un code structuré, lisible et maintenable sur le long terme.",
      },
      design: {
        titre: "Design moderne",
        desc: "Des interfaces soignées, pensées pour l'expérience utilisateur.",
      },
      reactivite: {
        titre: "Réactivité",
        desc: "Des sites rapides et parfaitement adaptés à tous les écrans.",
      },
    },

    techstack: {
      titre: "Technologies & Outils",
      soustitre:"Un ensemble d'outils que je maîtrise et que j'enrichis constamment, projet après projet.",
      btnCompetences: "Voir mes compétences",
    },

    services: {
      badge: "Mes services",
      titre: "Je transforme vos idées en produits numériques qui marchent",
      description: "Que vous ayez besoin d'une landing page percutante, d'une application web sur mesure, d'un SaaS complet ou d'un simple site vitrine pour exister en ligne, je conçois des solutions pensées pour votre activité, de la première idée jusqu'à la mise en ligne.",
      tags: ["Landing Page", "Application Web", "SaaS", "Site Vitrine", "Mini-site", "Site e-commerce"],
      btn: "Voir mes réalisations",
    },

    faq: {
      titre: "Questions fréquentes",
      items: [
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
      ],
    },
    footer: {
      droits: "Tous droits réservés.",
    },
    
competences: {
      titre: "Mes Compétences",
      soustitre: "Les technologies que je maîtrise et que j'améliore chaque jour.",
      categories: [
        {
          titre: "Développement Front-end",
          skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design / UI adaptative"]
        },
        {
          titre: "Développement Back-end",
          skills: ["Node.js", "Express.js", "PHP", "Laravel", "Symfony", "Python", "Création et gestion d'API REST"]
        },
        {
          titre: "Développement Mobile",
          skills: ["React Native", "Flutter", "Dart", "Applications multiplateformes"]
        },
        {
          titre: "Bases de données",
          skills: ["MySQL", "MongoDB", "PostgreSQL", "Modélisation & conception de bases de données"]
        },
        {
          titre: "APIs & Architecture",
          skills: ["REST API", "Architecture client-serveur", "Authentification JWT"]
        },
        {
          titre: "Outils & Déploiement",
          skills: ["Git", "GitHub", "Vite", "Vercel", "Render", "Postman", "Méthodes Agiles"]
        }
      ],
    },

    projets: {
      titre: "Mes Projets",
      soustitre: "Une sélection de mes réalisations récentes.",
      voirProjet: "Voir le projet →",
      liste: [
        {
          id: 1,
          titre: "Orbizo",
          description: "Conçu pour les commerçants qui géraient encore leurs ventes sur un cahier. Orbizo automatise le suivi des ventes, des commandes, des produits, des clients et des marges dans un tableau de bord en temps réel.",
          technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
          lien: "https://orbizo.xyz",
          image: "/projets/orbizo.png",
        },
        {
          id: 2,
          titre: "Velvet Nails",
          image: "/projets/velvetnails.png",
          description: "Site vitrine développé pour une prothésiste ongulaire, permettant à ses clientes de découvrir ses prestations, consulter sa galerie et réserver un créneau en ligne.",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
          lien: "https://velvetnails.vercel.app"
        },
        {
          // Français
        id: 3,
        titre: "LoomScan",
        image: "/projets/loomscan.png",
        description: "Scanner de memecoins pour Robinhood Chain : chaque jeton est analysé pour détecter les risques de rug pull, avec des données onchain en temps réel et des graphiques clairs.",
        technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "ethers.js"],
        lien: "https://loomscan.vercel.app"
        },

        {
          id: 4,
          titre: "Deal Room — Projet de classe EIG",
          image: "/projets/dealroom.png",
          description: "Plateforme de collaboration connectant créateurs de contenu et marques. Les marques peuvent découvrir, filtrer et collaborer avec des créateurs selon leur niche et leur audience, avec un système d'essai gratuit avant de s'engager.",
          technologies: ["React", "Node.js"],
          lien: "https://creator-ruby.vercel.app"
        },


        {
          id: 5,
          titre: "Simulateur — Projet de classe EIG",
          image: "/projets/simulateur.png",
          description: "Application permettant de comparer le coût réel de possession de plusieurs véhicules sur la durée, en tenant compte du prix d'achat, du kilométrage annuel et du type de motorisation.",
          technologies: ["React", "Node.js", "API REST"],
          lien: "https://ferrari-sto.vercel.app"
        }

      ],
    },
    contact: {
      titrePart1: "Parlons de votre",
      titreHighlight: "projet",
      soustitre: "Vous avez une idée en tête ? Un projet à réaliser ? N'hésitez pas à me contacter pour discuter de vos besoins.",
      infosTitre: "Informations de contact",
      email: "Email",
      localisation: "Localisation",
      ville: "Cotonou, Bénin",
      telephone: "Téléphone",
      disponibilite: "Disponibilité",
      disponibiliteValeur: "Disponible à temps plein",
      reseauxTitre: "Réseaux sociaux",
      formTitre: "Envoyez un message",
      labelNom: "Nom complet",
      labelEmail: "Adresse email",
      labelMessage: "Message",
      placeholderMessage: "Décrivez votre projet ou votre demande...",
      succes: "✅ Message envoyé avec succès !",
      erreur: "❌ Une erreur s'est produite. Réessayez.",
      envoiEnCours: "⏳ Envoi en cours...",
      envoyer: "✉️ Envoyer le message",
    },
  },
  en: {
    nav: {
      accueil: 'Home',
      projets: 'Projects',
      competences: 'Skills',
      contact: 'Contact',
    },
    hero: {
      tagPro: "Professional", 
      tagCreatif: "Creative",
      badge: "I turn ideas into real projects",
      titre: "Hello, I'm",
      metier: "Web & Mobile Developer",
      bio: "Passionate developer, I turn ideas into modern web and mobile experiences. Clean design, solid code, real results. That's how I build solutions that truly matter.",
      btnProjets: "View my projects",
      btnContact: "Contact me",
    },
    features: {
      titre: "What I bring",
      code: {
        titre: "Clean code",
        desc: "Structured, readable code built to last over time.",
      },
      design: {
        titre: "Modern design",
        desc: "Polished interfaces designed with user experience in mind.",
      },
      reactivite: {
        titre: "Responsiveness",
        desc: "Fast sites that adapt perfectly to every screen.",
      },
    },

    techstack: {
      titre: "Technologies & Tools",
      soustitre: "A set of tools I've mastered and keep expanding, project after project.",
      btnCompetences: "See my skills",
    },

    services: {
      badge: "My services",
      titre: "I turn your ideas into digital products that work",
      description: "Whether you need a high-converting landing page, a custom web application, a full SaaS product, or a simple showcase site to establish your online presence, I design solutions built around your business, from the first idea to launch.",
      tags: ["Landing Page", "Web Application", "SaaS", "Showcase Site", "Mini-site", "E-commerce Site"],
      btn: "See my work",
    },
    

    faq: {
      titre: "Frequently Asked Questions",
      items: [
        {
          question: "What kind of projects do you work on?",
          reponse: "Showcase websites, landing pages, and full web applications. Every project is custom-built, from design to launch, to deliver a smooth and professional user experience."
        },
        {
          question: "How long does a project take?",
          reponse: "It depends on the project. A showcase site or landing page: 1 to 2 weeks. A web app or online store: 3 to 6 weeks. I take the time needed to deliver quality work."
        },
        {
          question: "Do you work freelance?",
          reponse: "Yes, I'm available freelance for individuals and companies. I'm also open to company opportunities (fixed-term, permanent, internship). My goal: putting my skills to work for your ideas."
        },
        {
          question: "What technologies do you use?",
          reponse: "React, JavaScript, and CSS for the frontend. Node.js and MongoDB for the backend. I keep learning to stay current with the latest web developments."
        },
        {
          question: "How does a collaboration work?",
          reponse: "We start with a conversation to understand your project. I propose a solution, we agree on it together, I build it, and I deliver. I stay available even after delivery. To me, that's the start of a relationship built on trust."
        }
      ],
    },
    footer: {
      droits: "All rights reserved.",
    },
    
competences: {
      titre: "My Skills",
      soustitre: "The technologies I master and keep improving every day.",
      categories: [
        {
          titre: "Front-end Development",
          skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design / Adaptive UI"]
        },
        {
          titre: "Back-end Development",
          skills: ["Node.js", "Express.js", "PHP", "Laravel", "Symfony", "Python", "Building and managing REST APIs"]
        },
        {
          titre: "Mobile Development",
          skills: ["React Native", "Flutter", "Dart", "Cross-platform apps"]
        },
        {
          titre: "Databases",
          skills: ["MySQL", "MongoDB", "PostgreSQL", "Database design & modeling"]
        },
        {
          titre: "APIs & Architecture",
          skills: ["REST API", "Client-server architecture", "JWT Authentication"]
        },
        {
          titre: "Tools & Deployment",
          skills: ["Git", "GitHub", "Vite", "Vercel", "Render", "Postman", "Agile Methods"]
        }
      ],
    },


    projets: {
      titre: "My Projects",
      soustitre: "A selection of my recent work.",
      voirProjet: "View project →",
      liste: [
        {
          id: 1,
          title: "Orbizo",
          description: "Built for shop owners who were still tracking their sales in a notebook. Orbizo automates sales, order, product, customer, and margin tracking in a real-time dashboard.",
          technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
          link: "https://orbizo.xyz",
          image: "/projets/orbizo.png",
        },
        {
          id: 2,
          title: "Velvet Nails",
          image: "/projets/velvetnails.png",
          description: "Showcase website built for a nail technician, letting her clients discover her services, browse her gallery, and book an appointment online.",
          technologies: ["React", "Node.js", "Express", "MongoDB"],
          link: "https://velvetnails.vercel.app"
        },
        {
          // English
          id: 3,
          titre: "LoomScan",
          image: "/projets/loomscan.png",
          description: "Memecoin scanner for Robinhood Chain: every token is analyzed for rug-pull risks, with real-time onchain data and clear charts.",
          technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "ethers.js"],
          lien: "https://loomscan.vercel.app"
        },

        {
          id: 4,
          titre: "Deal Room — EIG Class Project",
          image: "/projets/dealroom.png",
          description: "Collaboration platform connecting content creators and brands. Brands can discover, filter, and collaborate with creators based on their niche and audience, with a free trial system before engaging.",
          technologies: ["React", "Node.js"],
          lien: "https://creator-ruby.vercel.app"
        },


        {
          id: 5,
          titre: "Simulator — EIG Class Project",
          image: "/projets/simulateur.png",
          description: "Application that lets users compare the real cost of owning several vehicles over time, factoring in purchase price, annual mileage, and fuel type.",
          technologies: ["React", "Node.js", "API REST"],
          lien: "https://ferrari-sto.vercel.app"
        }

      ],
    },
    contact: {
      titrePart1: "Let's talk about your",
      titreHighlight: "project",
      soustitre: "Have an idea in mind? A project to bring to life? Feel free to reach out and discuss your needs.",
      infosTitre: "Contact information",
      email: "Email",
      localisation: "Location",
      ville: "Cotonou, Benin",
      telephone: "Phone",
      disponibilite: "Availability",
      disponibiliteValeur: "Available full-time",
      reseauxTitre: "Social media",
      formTitre: "Send a message",
      labelNom: "Full name",
      labelEmail: "Email address",
      labelMessage: "Message",
      placeholderMessage: "Describe your project or request...",
      succes: "✅ Message sent successfully!",
      erreur: "❌ Something went wrong. Please try again.",
      envoiEnCours: "⏳ Sending...",
      envoyer: "✉️ Send message",
    },
  },
}