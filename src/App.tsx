import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Languages, Code2, GraduationCap, Briefcase, Award, ChevronRight, User, Lightbulb, Layout, Server, Settings, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const content = {
  fr: {
    welcome: "Bienvenue sur mon portfolio",
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      languages: "Langues",
      certificates: "Certificats",
      education: "Éducation",
      contact: "Contact"
    },
    hero: {
      greeting: "Salut, je suis",
      name: "Eya Ben Amor",
      role: "Ingénieure Full Stack & DevOps",
      description: `Ingénieure Full Stack & DevOps diplômée de l'ENET'Com Sfax (rang 11/74). Je développe des applications web sécurisées et évolutives, de la conception jusqu’au déploiement, en utilisant la conteneurisation et des pipelines CI/CD.
J’ai acquis une expérience pratique à travers plusieurs stages (KPIT Technologies, Piximind, Finlogik) ainsi que des projets freelance. Certifiée ISTQB® et Microsoft Azure, je m’intéresse également aux outils d’IA pour apprendre plus rapidement et améliorer l’efficacité du développement.
Je souhaite rejoindre une équipe technique ambitieuse afin de contribuer à des projets à fort impact tout en continuant à progresser.`
    },
    languages: {
      title: "Mes",
      subtitle: "Langues",
      items: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "B2" },
        { name: "Anglais", level: "B2" }
      ]
    },
    journey: {
      title: "Mon",
      subtitle: "Parcours",
      educationTab: "Éducation",
      experienceTab: "Expérience",
      eduItems: [
        {
          period: "09/2022 — 06/2025",
          title: "Diplôme d’Ingénieur en Informatique",
          place: "ENET'Com Sfax, Tunisie",
          desc: "École Nationale d'Électronique et des Télécommunications de Sfax. Rang: 11 sur 74."
        },
        {
          period: "09/2020 — 06/2022",
          title: "Classes Préparatoires aux Études d’Ingénieurs",
          place: "IPEIS Sfax, Tunisie",
          desc: "Institut Préparatoire aux Études d'Ingénieurs de Sfax. Cycle intensif Math-Physique."
        }
      ],
      expItems: [
        {
          period: "01/2025 — 06/2025",
          title: "Stagiaire Ingénieure Full-Stack & DevOps",
          place: "KPIT Technologies (Sfax, Tunisie)",
          desc: "Développement d’une plateforme web pour l’exécution et la supervision de tests automobiles à distance, réduisant le temps de test de 40 % et les coûts matériels via l'automatisation CI/CD.",
          skills: "Angular, Spring Boot, MySQL, CI/CD, Jenkins, Docker, Jira API, Git, Scrum",
          link: "https://github.com/EYABA12/End--of-Study-Internship"
        },
        {
          period: "06/2024 — 08/2024",
          title: "Stagiaire Ingénieure DevOps & Cloud",
          place: "Piximind (Sfax, Tunisie)",
          desc: `Automatisation du déploiement et de l’infrastructure cloud, réduisant les erreurs de 40 % et améliorant l’efficacité de livraison.`,
          skills: "Docker, Terraform, Ansible, Azure, Jenkins, Nexus, Git, Scrum",
          link: "https://github.com/EYABA12/Automate-the-deployment-of-the-application-and-the-management-of-the-cloud-infrastructure.git"
        },
        {
          period: "07/2023 — 09/2023",
          title: "Stagiaire Ingénieure en Développement Web",
          place: "Finlogik (Sfax, Tunisie)",
          desc: "Développement d'une plateforme de gestion d'intégration pour les nouveaux employés (ASP.NET, Angular).",
          skills: "Html, CSS, Angular, C#, ASP.NET, Bootstrap, UML, MySQL, Git, Agile (Scrum)",
          link: "https://github.com/EYABA12/First-Year-Internship-Management-plateform-for-new-recruits"
        }
      ]
    },
    projects: {
      title: "Mes",
      subtitle: "Projets",
      code: "Code",
      demo: "Démo",
      viewMore: "Voir Détails"
    },
    skills: {
      title: "Mes",
      subtitle: "Compétences",
      categories: [
        { title: "Développement Web", items: ["Angular", "Spring Boot", "TypeScript", "Java", "Bootstrap", "SQL Server", "MySQL", "REST APIs", "HTML5", "CSS3", "C# (.NET)"], icon: "Layout" },
        { title: "DevOps & Cloud", items: ["CI/CD (Jenkins, GitHub Actions, Argo CD)", "Docker", "Kubernetes", "Terraform", "Ansible", "Azure (certifiée)"], icon: "Settings" },
        { title: "Sécurité & Qualité", items: ["Spring Security", "JWT", "Clean Code", "SOLID", "ISTQB"], icon: "Award" },
        { title: "Versioning & Agile", items: ["Git", "Jira", "Trello", "Méthodes Scrum/Kanban"], icon: "CheckCircle2" },
      ]
    },
    certificates: {
       title: "Mes",
       subtitle: "Certifications",
       list: [
         {
           name: "Gestion de projet Agile & fondamentaux Scrum",
           date: "4 avril 2026",
           link: "https://drive.google.com/file/d/1IepHdISIVy9sG8TNaELfqvFVJ-bffZAX/view?pli=1",
           image: "https://lh3.googleusercontent.com/d/1IepHdISIVy9sG8TNaELfqvFVJ-bffZAX"
         },
         {
           name: "Certification ISTQB® Fondation",
           place: "ESPS Training Center (30h)",
           date: "4 octobre 2025",
           link: "https://drive.google.com/file/d/1JK5YTRDLhAvBbOHWuMZC2mE_lWvRPGl1/view",
           image: "https://lh3.googleusercontent.com/d/1JK5YTRDLhAvBbOHWuMZC2mE_lWvRPGl1"
         },
         {
           name: "Certification Microsoft Azure",
           date: "15 novembre 2023",
           link: "https://drive.google.com/file/d/135UF7Ue34tJNxZBqHZIbMFSf1zy89JJk/view",
           image: "https://lh3.googleusercontent.com/d/135UF7Ue34tJNxZBqHZIbMFSf1zy89JJk"
         }
       ]
    },
    contact: {
      title: "Me",
      subtitle: "Contacter",
      send: "Envoyer Message"
    },
    footer: "© 2026 — Eya Ben Amor",
    workflowTitle: "Flux de Travail",
    impactTitle: "Impact & Résultats",
    projectsData: [
 
      {
        title: "AI Invoice Data Extractor",
        date: "03/2026 – 04/2026",
        category: "Full Stack Development | Automation",
        stack: ["Gemini API", "IA générative", "GitHub Copilot", "React", "Prompt Engineering"],
        summary: "La saisie manuelle des données de factures depuis des fichiers PDF ou des images vers Excel est un processus lent",
        steps: [
          "Conception d’une application web responsive convertissant automatiquement des factures en Excel structuré en quelques secondes",
          "Réduction estimée de 80–90 % du temps de saisie manuelle",
          "Intégration de Gemini API et techniques de Prompt Engineering pour améliorer la précision d’extraction des données"
        ],
        results: ["Jusqu’à 90% de gain de productivité"],
        demo: "https://vimeo.com/1186769883"
      },
      {
        title: "Application de Gestion de Restaurant",
        date: "01/2026 – 02/2026",
        category: "Full Stack Development",
        stack: ["Angular", "Spring Boot", "Spring Security", "JWT", "Docker", "REST API"],
        summary: "Développement d'une application web de gestion de restaurant, de la conception à la mise en production.",
        steps: [
          "Sécurisation des APIs REST avec Spring Security & JWT pour garantir l’authentification et l’autorisation",
          "Conteneurisation avec Docker pour faciliter le déploiement et réduire les erreurs liées à l’environnement d’environ 50 %",
          "Utilisation d’outils d’IA pour accélérer le développement et réduire d’environ 30% le temps consacré aux tâches répétitives"
        ],
        results: ["Déploiement simplifié", "Sécurité renforcée"],
        demo: "https://vimeo.com/1163326267"
      },
      {
        title: "Plateforme de gestion de nouveaux employés",
        company: "Finlogik",
        date: "07/2023 – 09/2023",
        category: "Full Stack Development",
        stack: ["Angular", "C#", "ASP.NET", "MySQL", "UML"],
        summary: "Développement d’une plateforme pour automatiser l’intégration des nouveaux collaborateurs.",
        steps: [
          "Conception de la base de données relationnelle MySQL",
          "Développement du backend avec C# et ASP.NET",
          "Interface utilisateur dynamique avec Angular et Bootstrap",
          "Modélisation du système via diagrammes UML"
        ],
        results: ["Processus d'intégration simplifié", "Centralisation des données"],
        demo: "https://vimeo.com/937024450"
      },
      {
        title: "Automatisation et Gestion Cloud",
        company: "Piximind",
        date: "06/2024 – 08/2024",
        category: "DevOps | Cloud | Infrastructure as Code",
        stack: ["Docker", "Terraform", "Ansible", "Azure", "Jenkins"],
        summary: "Automatisation du déploiement et de la gestion de l'infrastructure cloud via des outils IaC.",
        steps: [
          "Provisionnement de ressources sur Azure avec Terraform",
          "Configuration automatisée des serveurs via Ansible",
          "Mise en place de pipelines CI/CD Jenkins",
          "Gestion des conteneurs via Docker"
        ],
        results: ["Réduction des erreurs de config de 40%", "Efficacité accrue"],
        architecture: "https://raw.githubusercontent.com/EYABA12/Second-Year-Internship-Automate-Application-Deployment-and-Cloud-Management/master/architecture.png",
        repo: "https://github.com/EYABA12/Automate-the-deployment-of-the-application-and-the-management-of-the-cloud-infrastructure.git"
      },
      {
        title: "Déploiement automatisé Kubernetes avec Jenkins & ArgoCD",
        date: "09/2025 – 10/2025",
        category: "DevOps | Cloud",
        stack: ["Kubernetes", "Helm", "Jenkins", "ArgoCD", "Git", "Docker", "CI/CD", "CronJobs"],
        summary: "Automatisation complète du déploiement d’applications dans un cluster Kubernetes avec approche GitOps.",
        steps: [
          "Réduction de 70 % du cycle de mise en production grâce à Kubernetes et l'automatisation CI/CD",
          "Synchronisation automatique des environnements de développement et de production via GitOps (ArgoCD)",
          "Mise en place de sauvegardes automatiques pour garantir la sécurité et la haute disponibilité des données"
        ],
        results: ["Déploiements 70% plus rapides"],
        demo: "https://vimeo.com/1026327529",
        repo: "https://github.com/EYABA12/Automated-deployment-in-a-Kubernetes-cluster-with-Jenkins-and-ArgoCD"
      },
      {
        title: "Création et déploiement d’un site e-commerce",
        date: "01/2024 – 04/2024",
        category: "Full Stack | Devops |Cloud  ",
        stack: ["Java", "Angular", "Spring Boot", "MySQL", "Docker", "GitHub Actions", "Azure", "CI/CD"],
        summary: "Développement et déploiement d’une application e-commerce avec automatisation CI/CD sur Azure Cloud.",
        steps: [
          "Développement Full Stack avec Angular et Spring Boot",
          "Conteneurisation avec Docker pour garantir la portabilité",
          "Mise en place d’un pipeline CI/CD avec GitHub Actions",
          "Déploiement automatisé sur Azure Cloud"
        ],
        results: [
          "Déploiement ~70% plus rapide",
          "Mises à jour automatiques après chaque push",
          "Réduction des erreurs de configuration"
        ],
        demos: [
          "https://player.vimeo.com/video/942130175",
          "https://player.vimeo.com/video/942140919"
        ]
      },
      {
        title: "Plateforme de Tests Automobiles à distance",
        company: "KPIT Technologies",
        date: "01/2025 – 06/2025",
        category: "Full Stack | DevOps | Automotive",
        stack: ["Angular", "Spring Boot", "MySQL", "Jenkins", "Docker", "Jira API"],
        summary: "Conception et développement d’une plateforme web pour l’exécution et la supervision de tests automobiles à distance.",
        steps: [
          "Intégration de systèmes tiers via API REST (Jira API, Git API)",
          "Sécurisation des accès via Spring Security et JWT.",
          "Intégration de Jira API pour le bug tracking et la collaboration QA–Dev",
          "Automatisation des workflows test & déploiement via des pipelines CI/CD Jenkins"
        ],
        results: ["Réduction du temps de test de 40 %", "Optimisation des coûts matériels"],
        demo: "https://vimeo.com/1165653912"
      }
    ]
  },
  en: {
    welcome: "Welcome to my portfolio",
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      languages: "Languages",
      certificates: "Certificates",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Eya Ben Amor",
      role: "Full Stack & DevOps Engineer ",
      description: `Full Stack & DevOps Engineer graduated from ENET'Com Sfax (ranked 11th/74). I develop secure and scalable web applications, from design up to deployment, using containerization and CI/CD pipelines.
I have gained practical experience through several internships (KPIT Technologies, Piximind, Finlogik) as well as freelance projects. Certified ISTQB® and Microsoft Azure, I am also interested in AI tools to learn faster and improve development efficiency.
I want to join an ambitious technical team where I can contribute to high-impact projects while continuing to progress.`
    },
    languages: {
      title: "My",
      subtitle: "Languages",
      items: [
        { name: "Arabic", level: "Native language" },
        { name: "French", level: "B2" },
        { name: "English", level: "B2" }
      ]
    },
    journey: {
      title: "My",
      subtitle: "Journey",
      educationTab: "Education",
      experienceTab: "Experience",
      eduItems: [
        {
          period: "09/2022 — 06/2025",
          title: "Computer Science Engineering Degree",
          place: "ENET'Com Sfax, Tunisia",
          desc: "National School of Electronics and Telecommunications. Ranked 11th out of 74."
        },
        {
          period: "09/2020 — 06/2022",
          title: "Preparatory Classes for Engineering Studies",
          place: "IPEIS Sfax, Tunisia",
          desc: "Preparatory Institute for Engineering Studies of Sfax. Intensive Math-Physics cycle."
        }
      ],
      expItems: [
        {
          period: "01/2025 — 06/2025",
          title: "Full-Stack & DevOps Engineering Intern",
          place: "KPIT Technologies (Sfax, Tunisia)",
          desc: "Developed an automated testing platform for automotive systems, improving testing efficiency and reducing manual effort by 70% through robust CI/​CD integration.",
          skills: "Angular, Spring Boot, MySQL, CI/CD, Jenkins, Docker, Jira API, Git, Scrum",
          link: "https://www.kpit.com/"
        },
        {
          period: "06/2024 — 08/2024",
          title: "DevOps & Cloud Engineering Intern",
          place: "Piximind (Sfax, Tunisia)",
          desc: `Automation of deployment and cloud infrastructure, reducing errors by 40% and improving delivery efficiency.`,
          skills: "Docker, Terraform, Ansible, Azure, Jenkins, Nexus, Git, Scrum",
          link: "https://github.com/EYABA12/Automate-the-deployment-of-the-application-and-the-management-of-the-cloud-infrastructure.git"
        },
        {
          period: "07/2023 — 09/2023",
          title: "Web Development Intern",
          place: "Finlogik (Sfax, Tunisia)",
          desc: "Development of an integration management platform for new employees (ASP.NET, Angular).",
          skills: "Html, CSS, Angular, C#, ASP.NET, Bootstrap, UML, MySQL, Git, Agile (Scrum)",
          link: "https://finlogik.com/"
        }
      ]
    },
    projects: {
      title: "My",
      subtitle: "Projects",
      code: "Code",
      demo: "Demo",
      viewMore: "View Details"
    },
    skills: {
      title: "My",
      subtitle: "Skills",
      categories: [
        { title: "Web Development", items: ["Angular", "Spring Boot", "TypeScript", "Java", "Bootstrap", "SQL Server", "MySQL", "REST APIs", "HTML5", "CSS3", "C# (.NET)"], icon: "Layout" },
        { title: "DevOps & Cloud", items: ["CI/CD (Jenkins, GitHub Actions, Argo CD)", "Docker", "Kubernetes", "Terraform", "Ansible", "Azure (certified)"], icon: "Settings" },
        { title: "Security & Quality", items: ["Spring Security", "JWT", "Clean Code", "SOLID", "ISTQB"], icon: "Award" },
        { title: "Versioning & Agile", items: ["Git", "Jira", "Trello", "Scrum/Kanban Methods"], icon: "CheckCircle2" },
      ]
    },
    certificates: {
       title: "My",
       subtitle: "Certifications",
       list: [
         {
           name: "Agile Project Management & Scrum Fundamentals",
           date: "April 4, 2026",
           link: "https://drive.google.com/file/d/1IepHdISIVy9sG8TNaELfqvFVJ-bffZAX/view?pli=1",
           image: "https://lh3.googleusercontent.com/d/1IepHdISIVy9sG8TNaELfqvFVJ-bffZAX"
         },
         {
           name: "ISTQB® Foundation Certification",
           place: "ESPS Training Center (30h)",
           date: "October 4, 2025",
           link: "https://drive.google.com/file/d/1JK5YTRDLhAvBbOHWuMZC2mE_lWvRPGl1/view",
           image: "https://lh3.googleusercontent.com/d/1JK5YTRDLhAvBbOHWuMZC2mE_lWvRPGl1"
         },
         {
           name: "Microsoft Azure Certification",
           date: "November 15, 2023",
           link: "https://drive.google.com/file/d/135UF7Ue34tJNxZBqHZIbMFSf1zy89JJk/view",
           image: "https://lh3.googleusercontent.com/d/135UF7Ue34tJNxZBqHZIbMFSf1zy89JJk"
         }
       ]
    },
    contact: {
      title: "Contact",
      subtitle: "Me",
      send: "Send Message"
    },
    footer: "© 2026 — Eya Ben Amor",
    workflowTitle: "Project Workflow",
    impactTitle: "Impact & Results",
    projectsData: [

      {
        title: "AI Invoice Data Extractor",
        date: "03/2026 – 04/2026",
        category: "Full Stack Development | Automation",
        stack: ["Gemini API", "Generative AI", "GitHub Copilot", "React", "Prompt Engineering"],
        summary: "Manual entry of invoice data from PDF files or images to Excel is a slow, repetitive, and error-prone process.",
        steps: [
          "Design of a responsive web app that automatically converts invoices to structured Excel in seconds",
          "Estimated 80–90% reduction in manual entry time",
          "Integration of Gemini API and Prompt Engineering techniques to improve data extraction accuracy"
        ],
        results: ["Up to 90% productivity gain"],
        demo: "https://vimeo.com/1186769883"
      },
      {
        title: "Restaurant Management App",
        date: "01/2026 – 02/2026",
        category: "Full Stack Development",
        stack: ["Angular", "Spring Boot", "Spring Security", "JWT", "Docker", "REST API"],
        summary: "Development of a restaurant management web application, from design to production.",
        steps: [
          "Securing REST APIs with Spring Security & JWT to guarantee authentication and authorization",
          "Containerization with Docker to facilitate deployment and reduce environment errors by ~50%",
          "Using AI tools to accelerate development and reduce time spent on repetitive tasks by about 30%"
        ],
        results: ["Simplified deployment", "Enhanced security"],
        demo: "https://vimeo.com/1163326267"
      },
      {
        title: "New Employee Onboarding Platform",
        company: "Finlogik",
        date: "07/2023 – 09/2023",
        category: "Full Stack Development",
        stack: ["Angular", "C#", "ASP.NET", "MySQL", "UML"],
        summary: "Development of a platform to automate the onboarding of new employees.",
        steps: [
          "Design of the MySQL relational database",
          "Backend development with C# and ASP.NET",
          "Dynamic user interface with Angular and Bootstrap",
          "System modeling via UML diagrams"
        ],
        results: ["Simplified onboarding process", "Data centralization"],
        demo: "https://vimeo.com/937024450"
      },
      {
        title: "Automation and Cloud Management",
        company: "Piximind",
        date: "06/2024 – 08/2024",
        category: "DevOps | Cloud | Infrastructure as Code",
        stack: ["Docker", "Terraform", "Ansible", "Azure", "Jenkins"],
        summary: "Automation of deployment and management of cloud infrastructure via IaC tools.",
        steps: [
          "Azure resource provisioning with Terraform",
          "Automated server configuration via Ansible",
          "Setup of Jenkins CI/CD pipelines",
          "Docker container management"
        ],
        results: ["40% reduction in config errors", "Increased efficiency"],
        architecture: "https://raw.githubusercontent.com/EYABA12/Second-Year-Internship-Automate-Application-Deployment-and-Cloud-Management/master/architecture.png",
        repo: "https://github.com/EYABA12/Automate-the-deployment-of-the-application-and-the-management-of-the-cloud-infrastructure.git"
      },
      {
        title: "Automated Kubernetes Deployment with Jenkins & ArgoCD",
        date: "09/2025 – 10/2025",
        category: "DevOps | Cloud",
        stack: ["Kubernetes", "Helm", "Jenkins", "ArgoCD", "Git", "Docker", "CI/CD", "CronJobs"],
        summary: "Complete automation of application deployment in a Kubernetes cluster with a GitOps approach.",
        steps: [
          "70% reduction in production cycle time thanks to Kubernetes and CI/CD automation",
          "Automatic synchronization of development and production environments via GitOps (ArgoCD)",
          "Implementation of automatic backups to ensure data security and high availability"
        ],
        results: ["Deployments 70% faster"],
        demo: "https://vimeo.com/1026327529",
        repo: "https://github.com/EYABA12/Automated-deployment-in-a-Kubernetes-cluster-with-Jenkins-and-ArgoCD"
      },
      {
        title: "E-commerce Site Creation and Deployment",
        date: "01/2024 – 04/2024",
        category: "Full Stack | Devops | Cloud",
        stack: ["Java", "Angular", "Spring Boot", "MySQL", "Docker", "GitHub Actions", "Azure", "CI/CD"],
        summary: "Development and deployment of an e-commerce application with CI/CD automation on Azure Cloud.",
        steps: [
          "Full Stack development with Angular and Spring Boot",
          "Containerization with Docker to guarantee portability",
          "Setup of a CI/CD pipeline with GitHub Actions",
          "Automated deployment on Azure Cloud"
        ],
        results: [
          "Deployment ~70% faster",
          "Automatic updates after each push",
          "Reduced configuration errors"
        ],
        demos: [
          "https://player.vimeo.com/video/942130175",
          "https://player.vimeo.com/video/942140919"
        ]
      },
      {
        title: "Remote Automotive Testing Platform",
        company: "KPIT Technologies",
        date: "01/2025 – 06/2025",
        category: "Full Stack | DevOps | Automotive",
        stack: ["Angular", "Spring Boot", "MySQL", "Jenkins", "Docker", "Jira API"],
        summary: "Design and development of a web platform for remote automotive tests execution and supervision.",
        steps: [
          "Integration of third-party systems via REST API (Jira API, Git API)",
          "Securing access via Spring Security and JWT",
          "Jira API integration for bug tracking and QA-Dev collaboration",
          "Automation of test & deployment workflows via Jenkins CI/CD pipelines"
        ],
        results: ["40% reduction in test time", "Optimization of hardware costs"],
        demo: "https://vimeo.com/1165653912"
      }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState("fr");
  const [activeTab, setActiveTab] = useState("exp");
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => setLoading(false), 3500);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const t = content[lang];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[1000] bg-[#020617] flex items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl px-6">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 md:order-1 text-center md:text-left"
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white/90 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  {t.welcome}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-1 md:order-2 group"
              >
                <div className="relative z-10 bg-slate-900 border-x-4 border-cyan-400/50 p-12 md:p-20 rounded shadow-[0_0_80px_rgba(34,211,238,0.15)] flex flex-col items-center">
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 1, 0.4, 0.8, 1],
                        scale: [1, 1.05, 1, 1.02, 1] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Lightbulb size={80} className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]" />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                    Po<span className="italic font-serif text-cyan-400">R</span>T<span className="text-cyan-400">folio</span>
                  </h1>
                </div>
                <div className="absolute inset-0 bg-cyan-400/10 blur-3xl -z-10" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        
        {/* NAVBAR */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#020617]/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">
              Eya<span className="text-cyan-400">.</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">{label}</a>
              ))}
              <button 
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all"
              >
                <Languages size={14} className="text-cyan-400" />
                <span className="text-xs uppercase font-bold text-white">{lang === "fr" ? "EN" : "FR"}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-cyan-400 font-mono tracking-widest text-sm uppercase">{t.hero.greeting}</p>
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                {t.hero.name.split(" ")[0]} <br />
                <span className="text-cyan-400">{t.hero.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-slate-400">{t.hero.role}</p>
              <p className="text-slate-400 leading-relaxed max-w-lg">
                {t.hero.description}
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/EYABA12" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all hover:border-cyan-400 shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/20">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/eya-benamor" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all hover:border-cyan-400 shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/20">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:eyabenamor.work@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all hover:border-cyan-400 shadow-lg shadow-cyan-400/0 hover:shadow-cyan-400/20">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative justify-self-center md:justify-self-end">
              <div className="w-72 h-80 md:w-96 md:h-[450px] bg-slate-900 rounded-[2.5rem] border-4 border-cyan-400/30 relative z-10 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] group">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Wy5eXo_6D2kuOTfmQfnPb8gG8yWIL7ti" 
                  alt="Eya Ben Amor"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 border-4 border-cyan-400 rounded-[2rem] m-2 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_#22d3ee]"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* MY PROJECTS */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              {t.projects.title} <span className="text-cyan-400">{t.projects.subtitle}</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.projectsData.map((project, i) => (
                <div key={i} className="group bg-[#0f172a] rounded-3xl p-8 border border-white/5 hover:border-cyan-400/50 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Github size={24} className="text-cyan-400" />
                  </div>
                  
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                    {project.category.includes("AI") ? <Lightbulb size={24} className="text-cyan-400" /> : <Code2 size={24} className="text-cyan-400" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-cyan-400 text-xs font-mono mb-4 uppercase tracking-wider">{project.category}</p>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((item, idx) => (
                      <span key={idx} className="text-[10px] font-bold px-2 py-1 rounded bg-[#1e293b] text-cyan-400 border border-cyan-400/20">{item}</span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full text-center py-3 bg-white/5 rounded-2xl text-xs font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    {t.projects.viewMore}
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 bg-slate-900/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              {t.skills.title} <span className="text-cyan-400">{t.skills.subtitle}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.skills.categories.map((category, idx) => {
                const IconComponent = { Layout, Settings, Award, CheckCircle2, Lightbulb }[category.icon] || Code2;
                return (
                  <div key={idx} className="bg-[#0f172a] rounded-[2rem] p-10 border border-white/5 relative group">
                    <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-400/20 group-hover:scale-110 transition-transform">
                      <IconComponent size={32} className="text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 text-slate-300 text-sm font-medium border border-white/5 hover:border-cyan-400/30 hover:text-cyan-400 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LANGUAGES SECTION */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div id="languages" className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center">
                {t.languages.title} <span className="text-cyan-400">{t.languages.subtitle}</span>
              </h2>
              <div className="space-y-6">
                {t.languages.items.map((lang, i) => (
                  <div key={i} className="bg-[#0f172a] p-6 rounded-2xl border border-white/5 group hover:border-cyan-400/30 transition-all">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-lg">{lang.name}</span>
                      <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">{lang.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.level.includes('maternelle') || lang.level.includes('Native') ? '100%' : lang.level.includes('B2') ? '80%' : '70%' }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certificates" className="py-20 border-b border-white/5">
           <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-4xl md:text-5xl font-black mb-16">
               {t.certificates.title} <span className="text-cyan-400">{t.certificates.subtitle}</span>
             </h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {(t.certificates.list as any[]).map((cert, i) => (
                   <div key={i} className="relative group h-full">
                    {cert.link ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex flex-col bg-[#0f172a] rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all h-full group/card overflow-hidden"
                      >
                        {cert.image && (
                          <div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative">
                            <img 
                              src={cert.image} 
                              alt={cert.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                          </div>
                        )}
                        <div className="p-8 pt-6 flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="w-10 h-10 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover/card:bg-cyan-400 group-hover/card:text-slate-950 transition-all shrink-0">
                              <Award size={20} />
                            </div>
                            <ExternalLink size={16} className="text-slate-600 group-hover/card:text-cyan-400 transition-colors mt-2" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-200 group-hover/card:text-white transition-colors leading-tight mb-3">{cert.name}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-slate-500">
                              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-cyan-400" /> {cert.date}</span>
                              {cert.place && <span className="opacity-70">| {cert.place}</span>}
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-4 p-8 bg-[#0f172a] rounded-3xl border border-white/5 text-left h-full">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500">
                            <Award size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-400 leading-tight">{cert.name}</h3>
                            <div className="flex items-center gap-x-4 mt-2 text-xs font-mono text-slate-600">
                              <span>{cert.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* MY JOURNEY */}
        <section id="education" className="py-20 bg-slate-900/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              {t.journey.title} <span className="text-cyan-400">{t.journey.subtitle}</span>
            </h2>
            
            <div className="flex items-center justify-center mb-12">
              <div className="bg-[#0f172a] p-1 rounded-2xl flex border border-white/5">
                <button 
                  onClick={() => setActiveTab("exp")} 
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "exp" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-white"}`}
                >
                  {t.journey.experienceTab}
                </button>
                <button 
                  onClick={() => setActiveTab("edu")} 
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "edu" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-white"}`}
                >
                  {t.journey.educationTab}
                </button>
              </div>
            </div>

            <div className="space-y-12 relative before:absolute before:left-6 md:before:left-1/2 before:h-full before:w-px before:bg-cyan-400/20">
              {(activeTab === "exp" ? t.journey.expItems : t.journey.eduItems).map((item, i) => (
                <div key={i} className={`relative flex items-center justify-between md:justify-normal ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#020617] shadow-[0_0_15px_#22d3ee]"></div>
                  <div className="ml-16 md:ml-0 md:w-[45%]">
                    <div className="bg-[#0f172a] p-8 rounded-3xl border border-white/5 hover:border-cyan-400/30 transition-all group">
                      <span className="text-cyan-400 font-mono text-xs font-bold mb-2 block">{item.period}</span>
                      <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                         {activeTab === "exp" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                         {item.place}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      {item.skills && (
                        <div className="mb-4">
                          <p className="text-[10px] font-bold text-cyan-400/70 uppercase tracking-widest mb-1.5">{lang === 'fr' ? 'Mots-clés' : 'Keywords'}</p>
                          <p className="text-xs text-slate-500 italic">{item.skills}</p>
                        </div>
                      )}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 border border-cyan-400/30 px-3 py-1.5 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition-all">
                          <Github size={14} /> {lang === 'fr' ? 'Voir Repository' : 'View Repository'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-20 border-t border-white/5 text-center">
          <div className="max-w-2xl mx-auto px-6">
             <h2 className="text-4xl md:text-5xl font-black mb-4">
               {t.contact.title} <span className="text-cyan-400">{t.contact.subtitle}</span>
             </h2>
             <p className="text-slate-400 mb-10">eyabenamor.work@gmail.com</p>
             <div className="flex justify-center gap-6 mb-16">
                <a href="https://github.com/EYABA12" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-[#0f172a] flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/eya-benamor" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-[#0f172a] flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition-all">
                  <Linkedin size={20} />
                </a>
             </div>
             <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">{t.footer}</p>
          </div>
        </footer>

        {/* PROJECT MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
            <div className="bg-[#0f172a] max-w-2xl w-full rounded-[2.5rem] p-10 relative z-10 border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button className="absolute top-8 right-8 text-slate-400 hover:text-white" onClick={() => setSelectedProject(null)}>✕</button>
              <h2 className="text-3xl font-black text-white mb-2">{selectedProject.title}</h2>
              <p className="text-cyan-400 mb-6 font-mono text-sm uppercase">{selectedProject.category}</p>
              <p className="text-slate-400 leading-relaxed mb-6">{selectedProject.summary}</p>
              
              {selectedProject.demo && selectedProject.demo.includes('vimeo.com') && (
                <div className="mb-8 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <iframe 
                    src={selectedProject.demo.includes('player.vimeo.com') ? selectedProject.demo : `https://player.vimeo.com/video/${selectedProject.demo.split('/').pop()}`} 
                    className="w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              )}

              {selectedProject.demos && selectedProject.demos.length > 0 && (
                <div className="space-y-6 mb-8">
                  {selectedProject.demos.map((dLink, dIdx) => (
                    <div key={dIdx} className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                      <iframe 
                        src={dLink.includes('player.vimeo.com') ? dLink : `https://player.vimeo.com/video/${dLink.split('/').pop()}`} 
                        className="w-full h-full" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              )}

              {selectedProject.architecture && (
                <div className="mb-8 p-4 bg-slate-900/50 rounded-2xl border border-white/10">
                  <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-3">Architecture Diagram</p>
                  <img src={selectedProject.architecture} alt="Architecture" className="w-full rounded-lg" />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {selectedProject.steps && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                      <Award size={18} className="text-cyan-400" /> {t.workflowTitle}
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.steps.map((s, i) => (
                        <li key={i} className="text-sm text-slate-400 flex gap-3">
                          <span className="text-cyan-400 font-bold">{i+1}.</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                    <Award size={18} className="text-cyan-400" /> {t.impactTitle}
                  </h3>
                   <ul className="space-y-3">
                      {selectedProject.results.map((r, i) => (
                        <li key={i} className="text-sm text-slate-400 flex gap-3">
                          <span className="text-cyan-400 font-bold">✔</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                {selectedProject.repo && (
                  <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="flex-1 bg-white/5 border border-white/10 py-3 rounded-2xl text-center font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Github size={16} /> {t.projects.code}
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex-1 bg-cyan-400 text-slate-950 py-3 rounded-2xl text-center font-bold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> {t.projects.demo}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
