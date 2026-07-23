

export const translations = {
  fr: {
    nav: {
      accueil: 'Accueil',
      projets: 'Projets',
      competences: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      badge: "Je transforme les idées en projets concrets",
      titre: "Bonjour, je suis",
      metier: "Développeur Web & Mobile",
      bio: "Développeur passionné, je transforme les idées en expériences web et mobile modernes. Design soigné, code solide, résultats concrets — c'est ma façon de créer des solutions qui comptent vraiment.",
      btnProjets: "Voir mes projets",
      btnContact: "Me contacter",
    },
    features: {
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
      blocs: [
        {
          numero: "01",
          titre: "Développement Web",
          description: "Conception et développement d'applications web modernes et performantes.",
          categories: [
            {
              nom: "FRONTEND",
              skills: [
                { nom: "HTML / CSS", niveau: 50 },
                { nom: "JavaScript", niveau: 50 },
                { nom: "React", niveau: 65 },
              ]
            },
            {
              nom: "BACKEND",
              skills: [
                { nom: "Node.js", niveau: 50 },
                { nom: "MongoDB", niveau: 50 },
              ]
            }
          ]
        },
        {
          numero: "02",
          titre: "Développement Mobile",
          description: "Création d'applications mobiles fluides et intuitives.",
          categories: [
            {
              nom: "MOBILE",
              skills: [
                { nom: "React Native", niveau: 50 },
              ]
            }
          ]
        }
      ],
    },
    projets: {
      titre: "Mes Projets",
      soustitre: "Une sélection de mes réalisations récentes. A venir...",
      voirProjet: "Voir le projet →",
      liste: [
        {
          id: 1,
          titre: "Nom du projet 1",
          description: "Courte description du projet et de son objectif.",
          technologies: ["React", "Node.js", "MongoDB"],
          lien: "https://github.com/tonpseudo/projet1"
        },
        {
          id: 2,
          titre: "Nom du projet 2",
          description: "Courte description du projet et de son objectif.",
          technologies: ["JavaScript", "CSS", "API"],
          lien: "https://github.com/tonpseudo/projet2"
        },
        {
          id: 3,
          titre: "Nom du projet 3",
          description: "Courte description du projet et de son objectif.",
          technologies: ["React", "Tailwind"],
          lien: "https://github.com/tonpseudo/projet3"
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
      badge: "I turn ideas into real projects",
      titre: "Hello, I'm",
      metier: "Web & Mobile Developer",
      bio: "Passionate developer, I turn ideas into modern web and mobile experiences. Clean design, solid code, real results. That's how I build solutions that truly matter.",
      btnProjets: "View my projects",
      btnContact: "Contact me",
    },
    features: {
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
      blocs: [
        {
          numero: "01",
          titre: "Web Development",
          description: "Designing and building modern, high-performance web applications.",
          categories: [
            {
              nom: "FRONTEND",
              skills: [
                { nom: "HTML / CSS", niveau: 50 },
                { nom: "JavaScript", niveau: 50 },
                { nom: "React", niveau: 65 },
              ]
            },
            {
              nom: "BACKEND",
              skills: [
                { nom: "Node.js", niveau: 50 },
                { nom: "MongoDB", niveau: 50 },
              ]
            }
          ]
        },
        {
          numero: "02",
          titre: "Mobile Development",
          description: "Building smooth and intuitive mobile applications.",
          categories: [
            {
              nom: "MOBILE",
              skills: [
                { nom: "React Native", niveau: 50 },
              ]
            }
          ]
        }
      ],
    },
    projets: {
      titre: "My Projects",
      soustitre: "A selection of my recent work. Coming soon...",
      voirProjet: "View project →",
      liste: [
        {
          id: 1,
          titre: "Project name 1",
          description: "Short description of the project and its goal.",
          technologies: ["React", "Node.js", "MongoDB"],
          lien: "https://github.com/tonpseudo/projet1"
        },
        {
          id: 2,
          titre: "Project name 2",
          description: "Short description of the project and its goal.",
          technologies: ["JavaScript", "CSS", "API"],
          lien: "https://github.com/tonpseudo/projet2"
        },
        {
          id: 3,
          titre: "Project name 3",
          description: "Short description of the project and its goal.",
          technologies: ["React", "Tailwind"],
          lien: "https://github.com/tonpseudo/projet3"
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