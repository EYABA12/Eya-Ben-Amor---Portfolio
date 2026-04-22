import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Server, 
  Layers, 
  Monitor,
  Video,
  Globe,
  Terminal,
  Shield,
  X,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ArrowRight,
  BookOpen,
  Database,
  Sparkles,
  Lock,
  Languages,
  Cloud
} from "lucide-react";

// --- Types ---
interface ProjectContent {
  title: string;
  category: string;
  summary: string;
  fullDesc?: string;
  problem?: string;
  solution?: string;
  result?: string;
  achievements?: string[];
  techDetails?: string[];
}

interface Project {
  id: string;
  period: string;
  tags: string[];
  image: string;
  techIcons: any[];
  repo?: string;
  demo?: string;
  videoDev?: string;
  videoDevOps?: string;
  article?: string;
  content: {
    en: ProjectContent;
    fr: ProjectContent;
  };
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: "restaurant",
    period: "01/2026 – 02/2026",
    tags: ["Angular", "Spring Boot", "Docker", "Python", "Git"],
    image: "https://picsum.photos/seed/restaurant-new/800/500",
    techIcons: [Database, Lock],
    repo: "https://github.com/EYABA12/Freelance-Software-Developer-Restaurant-Management-Application",
    videoDev: "https://vimeo.com/1163326267",
    content: {
      fr: {
        title: "Application de Gestion de Restaurant",
        category: "Fullstack Development",
        summary: "Développement d’une application de gestion de restaurant basée sur Angular et Spring Boot avec sécurisation des API et automatisation du déploiement.",
        achievements: [
          "Développement et maintenance d’API REST et de services métiers conformes aux spécifications fonctionnelles.",
          "Développement d’interfaces web Angular et intégration avec les API backend.",
          "Sécurisation des accès et des API via Spring Security et JWT.",
          "Application des principes SOLID et Clean Code pour garantir la qualité et la maintenabilité du code.",
          "Conteneurisation de l’application avec Docker afin de faciliter le déploiement et la portabilité.",
          "Développement d’un script Python permettant le lancement automatique de l’application au démarrage du poste client.",
          "Utilisation d’outils d’IA (GitHub Copilot, LLM, ChatGPT) pour accélérer le développement et automatiser certaines tâches."
        ],
        techDetails: [
          "Angular",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "Docker",
          "Python",
          "Git",
          "IA Tools"
        ]
      },
      en: {
        title: "Restaurant Management Application",
        category: "Fullstack Development",
        summary: "Restaurant management system developed using Angular and Spring Boot with secure REST APIs and automated deployment.",
        achievements: [
          "Development and maintenance of REST APIs and business services.",
          "Frontend development with Angular and integration with backend APIs.",
          "API security using Spring Security and JWT.",
          "Application of SOLID principles and Clean Code practices.",
          "Application containerization using Docker.",
          "Development of a Python script to automatically launch the application at system startup.",
          "Use of AI tools to accelerate development and automate repetitive tasks."
        ],
        techDetails: [
          "Angular",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "Docker",
          "Python",
          "Git",
          "AI Tools"
        ]
      }
    }
  },
  {
    id: "ecommerce",
    period: "01/2024 – 04/2024",
    tags: ["Angular", "Spring Boot", "Spring Security", "Docker", "Azure"],
    image: "https://picsum.photos/seed/azure-ecommerce/800/500",
    techIcons: [Cloud, Shield],
    videoDev: "https://player.vimeo.com/video/942130175",
    videoDevOps: "https://player.vimeo.com/video/942140919",
    content: {
      fr: {
        title: "Création et déploiement d’un site e-commerce",
        category: "Fullstack / Cloud DevOps",
        summary: "Gestion du cycle de vie complet de l’application, du développement jusqu’au déploiement sur Azure Cloud via un pipeline CI/CD.",
        achievements: [
          "Développement d’une application web e-commerce avec Angular (frontend) et Spring Boot (backend).",
          "Conception et gestion de la base de données MySQL.",
          "Conteneurisation de l’application avec Docker pour faciliter le déploiement.",
          "Mise en place d’un pipeline CI/CD avec GitHub Actions pour automatiser le build et le déploiement.",
          "Déploiement de l’application sur Azure Cloud."
        ],
        techDetails: [
          "Angular",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "MySQL",
          "Docker",
          "GitHub Actions",
          "Azure Cloud",
          "Git"
        ]
      },
      en: {
        title: "E-commerce Website Development and Deployment",
        category: "Fullstack / Cloud DevOps",
        summary: "Full application lifecycle management from development to production deployment on Azure using a CI/CD pipeline.",
        achievements: [
          "Development of an e-commerce web application using Angular (frontend) and Spring Boot (backend).",
          "Design and management of a MySQL database.",
          "Application containerization using Docker.",
          "Implementation of a CI/CD pipeline with GitHub Actions.",
          "Deployment of the application on Azure Cloud."
        ],
        techDetails: [
          "Angular",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "MySQL",
          "Docker",
          "GitHub Actions",
          "Azure Cloud",
          "Git"
        ]
      }
    }
  },
  {
    id: "kubernetes",
    period: "09/2025 – 10/2025",
    tags: ["Kubernetes", "Jenkins", "ArgoCD", "Docker"],
    image: "https://picsum.photos/seed/k8s-argo-new/800/500",
    techIcons: [Layers, Shield],
    repo: "https://github.com/EYABA12/Automated-deployment-in-a-Kubernetes-cluster-with-Jenkins-and-ArgoCD",
    article: "https://medium.com/p/39e18a98969f/edit",
    content: {
      fr: {
        title: "Déploiement automatisé dans un cluster Kubernetes",
        category: "DevOps / Cloud Automation",
        summary: "Automatisation complète du déploiement d’applications dans un cluster Kubernetes via Jenkins et ArgoCD en utilisant les principes GitOps.",
        achievements: [
          "Réduction de 70 % du cycle de mise en production grâce à l’orchestration Kubernetes et l’automatisation CI/CD.",
          "Synchronisation automatique des environnements de développement et de production via GitOps avec ArgoCD.",
          "Mise en place de sauvegardes automatiques de la base de données via des CronJobs Kubernetes.",
          "Gestion et déploiement des applications via Helm Charts."
        ],
        techDetails: [
          "Kubernetes",
          "Helm",
          "Jenkins",
          "ArgoCD",
          "Git",
          "Docker",
          "CI/CD",
          "CronJobs"
        ]
      },
      en: {
        title: "Automated Deployment in a Kubernetes Cluster",
        category: "DevOps / Cloud Automation",
        summary: "End-to-end automation of application deployment in a Kubernetes cluster using Jenkins and ArgoCD with GitOps practices.",
        achievements: [
          "Reduced release cycle by 70% using Kubernetes orchestration and CI/CD automation.",
          "Automatic synchronization between development and production environments via ArgoCD GitOps.",
          "Implementation of automated database backups using Kubernetes CronJobs.",
          "Application deployment and management using Helm Charts."
        ],
        techDetails: [
          "Kubernetes",
          "Helm",
          "Jenkins",
          "ArgoCD",
          "Git",
          "Docker",
          "CI/CD",
          "CronJobs"
        ]
      }
    }
  },
  {
    id: "x-table",
    period: "03/2026 – 04/2026",
    tags: ["React 19", "Gemini API", "AI Extraction", "Git"],
    image: "https://picsum.photos/seed/ai-extract-new/800/500",
    techIcons: [Sparkles, Shield],
    demo: "https://extracteur-tableau-client.vercel.app/",
    content: {
      en: {
        title: "X-Table: Intelligent Data Extraction Tool",
        category: "Frontend / AI Integration",
        summary: "Stop typing data manually! 🛑 Transform invoices and tables into structured Excel files instantly with AI.",
        fullDesc: "I built X-Table to save you hours of manual entry. It works perfectly on desktop and mobile.",
        achievements: [
          "Upload: PDF or Photo processing.",
          "AI Reads: Instant table extraction.",
          "Download: Export to perfect Excel files."
        ],
        techDetails: ["React 19", "Google Gemini API", "Tailwind CSS", "Framer Motion", "Git"],
        problem: "We all hate this: staring at a PDF or image invoice and typing every row into an Excel sheet. It's very slow, boring, and easy to make mistakes.",
        solution: "I built X-Table. It's a smart tool that saves you time by doing the work for you! You can even use it on your mobile phone. 1. Upload. 2. AI Reads. 3. Download perfect Excel.",
        result: "AI is smart but not perfect. Always use the side-by-side view to check your data. Processing might take a few seconds for complex tables."
      },
      fr: {
        title: "X-Table : Extraction de Données IA",
        category: "Frontend / Intégration IA",
        summary: "Arrêtez la saisie manuelle ! 🛑 Transformez factures et tableaux en Excel structurés instantanément via l'IA.",
        fullDesc: "J'ai créé X-Table pour éliminer les heures de saisie manuelle. Compatible desktop et mobile.",
        achievements: [
          "Upload : Traitement PDF ou Photo.",
          "IA Lit : Extraction instantanée des tableaux.",
          "Download : Export vers des fichiers Excel parfaits."
        ],
        techDetails: ["React 19", "Google Gemini API", "Tailwind CSS", "Framer Motion", "Git"],
        problem: "On déteste tous ça : fixer une facture PDF ou une image et taper chaque ligne dans Excel. C'est lent, ennuyeux, et source d'erreurs fréquentes.",
        solution: "J'ai créé X-Table. Un outil intelligent qui vous fait gagner du temps ! Utilisable aussi sur mobile. 1. Upload. 2. L'IA lit tout. 3. Téléchargez l'Excel.",
        result: "L'IA est intelligente mais pas parfaite. Utilisez toujours la vue côte-à-côte pour vérifier vos données."
      }
    }
  }
];

// --- Translations ---
const UI_TEXT = {
  en: {
    role: "Full Stack Software Engineer & DevOps | ISTQB® Certified",
    about: "Computer Science Engineer specialized in developing secure web applications with Java Spring Boot and Angular. I have practical experience covering the entire software development lifecycle, from design to deployment via CI/CD pipelines and containerization with Docker. Result-oriented, I apply development best practices (Clean Code, SOLID) to ensure the quality, maintainability, and security of applications. I also leverage generative AI tools to accelerate delivery, automate tasks, and improve code quality. Motivated to join an ambitious technical team where excellence, innovation, and continuous improvement are at the heart of product development.",
    connect: "Connect",
    viewDetails: "TECHNICAL CASE STUDY",
    category: "Technical Foundation",
    problem: "The Challenge",
    solution: "The Solution",
    achievements: "Key Missions & Responsibilities",
    outcome: "Result & Impact",
    techUsed: "Socle & Tools",
    live: "Live Demo",
    readme: "Documentation",
    article: "Read More",
    video: "Watch Demo",
    devops: "Automation Demo",
    certifications: "Certs",
    coreSkills: ["Java / Spring Boot", ".NET / C#", "Angular / React", "SOLID / Clean Code", "OWASP Security", "SQL Server / MySQL"]
  },
  fr: {
    role: "Ingénieure Full Stack & DevOps | Certifiée ISTQB®",
    about: "Ingénieure en informatique spécialisée dans le développement d’applications web sécurisées avec Java Spring Boot et Angular. Je possède une expérience pratique couvrant l’ensemble du cycle de développement logiciel, de la conception au déploiement via des pipelines CI/CD et la conteneurisation avec Docker. Orientée résultats, j’applique les bonnes pratiques de développement (Clean Code, SOLID) afin de garantir la qualité, la maintenabilité et la sécurité des applications. J’exploite également les outils d’IA générative pour accélérer la livraison, automatiser certaines tâches et améliorer la qualité du code. Motivée à rejoindre une équipe technique ambitieuse, où l’excellence, l’innovation et l’amélioration continue sont au cœur du développement des produits.",
    connect: "Contact",
    viewDetails: "ÉTUDE DE CAS TECHNIQUE",
    category: "Socle Technique",
    problem: "Le Challenge",
    solution: "La Solution",
    achievements: "Missions & Responsabilités Clés",
    outcome: "Résultat & Impact",
    techUsed: "Socle & Outils",
    live: "Accéder à la démo",
    readme: "Documentation",
    article: "En savoir plus",
    video: "Voir la démo",
    devops: "Démo Automation",
    certifications: "Certifs",
    coreSkills: ["Java / Spring Boot", ".NET / C#", "Angular / React", "SOLID / Clean Code", "Sécurité OWASP", "SQL Server / MySQL"]
  }
};

// --- App Component ---
export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = UI_TEXT[lang];

  return (
    <div className="min-h-screen relative font-sans leading-relaxed text-slate-200">
      {/* Background */}
      <div className="space-bg fixed inset-0 z-[-2] bg-[#0b0c1e]" />
      <div className="star-field fixed inset-0 z-[-1] opacity-30 animate-pulse pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))' }}
      />
      
      {/* Lang Switcher */}
      <div className="fixed top-8 right-8 z-[100]">
        <button 
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl hover:bg-[#f2c98a] hover:text-[#0b0c1e] transition-all font-black text-[10px] uppercase tracking-widest"
        >
          <Languages size={16} /> {lang === 'en' ? 'FRANÇAIS' : 'ENGLISH'}
        </button>
      </div>

      <main className="w-full max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-24 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">Eya Ben Amor</h1>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#f2c98a] mb-6 border-l-4 border-[#f2c98a] pl-6 block">{t.role}</h2>
            <p className="max-w-2xl text-slate-100 text-sm font-medium leading-relaxed mb-8 opacity-90">{t.about}</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {t.coreSkills.map((skill: string) => (
                <span key={skill} className="px-4 py-1.5 bg-[#f2c98a]/10 border border-[#f2c98a]/20 rounded-full text-[9px] font-black uppercase tracking-widest text-[#f2c98a]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a href="mailto:eyabenamor.work@gmail.com" className="group flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-4 rounded-2xl hover:bg-[#f2c98a] hover:text-[#0b0c1e] transition-all">
                <Mail size={16} /> <span className="text-[11px] font-black uppercase tracking-widest">{t.connect}</span>
              </a>
              <a href="tel:+21629020087" className="group flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-4 rounded-2xl hover:bg-[#f2c98a] hover:text-[#0b0c1e] transition-all">
                <Phone size={16} /> <span className="text-[11px] font-black uppercase tracking-widest">+216 29 020 087</span>
              </a>
              <a href="https://linkedin.com/in/eya-benamor" target="_blank" className="group flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-4 rounded-2xl hover:bg-[#f2c98a] hover:text-[#0b0c1e] transition-all">
                <Linkedin size={16} /> <span className="text-[11px] font-black uppercase tracking-widest">LinkedIn</span>
              </a>
              
              <div className="hidden lg:block w-[1px] h-12 bg-white/10 mx-2" />

              <div className="flex gap-3">
                 <a href="https://drive.google.com/file/d/1JK5YTRDLhAvBbOHWuMZC2mE_lWvRPGl1/view" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-4 rounded-2xl hover:border-cyan-400/50 transition-all text-white/70 hover:text-cyan-400">
                    <Shield size={14} /> <span className="text-[9px] font-black uppercase tracking-tighter">ISTQB</span>
                 </a>
                 <a href="https://drive.google.com/file/d/1IepHdISIVy9sG8TNaELfqvFVJ-bffZAX/view?pli=1" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-4 rounded-2xl hover:border-emerald-400/50 transition-all text-white/70 hover:text-emerald-400">
                    <Layers size={14} /> <span className="text-[9px] font-black uppercase tracking-tighter">SCRUM</span>
                 </a>
                 <a href="https://drive.google.com/file/d/135UF7Ue34tJNxZBqHZIbMF" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-4 rounded-2xl hover:border-blue-400/50 transition-all text-white/70 hover:text-blue-400">
                    <Cloud size={14} /> <span className="text-[9px] font-black uppercase tracking-tighter">AZURE</span>
                 </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Project Gallery Grid */}
        <section className="grid lg:grid-cols-2 gap-16">
          {PROJECTS.map((prj, idx) => {
            const content = prj.content[lang];
            return (
              <motion.div 
                key={prj.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProject(prj)}
                className="bg-[#1e1e38]/40 backdrop-blur-xl border border-white/5 rounded-[4rem] overflow-hidden group h-full flex flex-col shadow-2xl hover:border-[#f2c98a]/30 transition-all cursor-pointer relative"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-900 border-b border-white/5">
                  <img src={prj.image} alt={content.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1e] to-transparent opacity-80" />
                  
                  <div className="absolute top-10 left-10 flex flex-col gap-2">
                    <span className="px-5 py-1.5 bg-[#f2c98a] text-[#0b0c1e] text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">{content.category}</span>
                  </div>

                  <div className="absolute bottom-10 right-10 flex gap-4">
                    {prj.techIcons.map((Icon, i) => (
                       <div key={i} className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-[#f2c98a] border border-white/10 shadow-lg group-hover:scale-111 transition-transform">
                          <Icon size={22} />
                       </div>
                    ))}
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-[#f2c98a] transition-all">{content.title}</h4>
                    <p className="text-slate-100 text-[13px] mb-10 leading-relaxed font-medium bg-white/5 p-8 rounded-[2.5rem] border-l-4 border-[#f2c98a] group-hover:bg-white/10 transition-colors">
                      {content.summary}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                     <div className="flex flex-wrap gap-2">
                        {prj.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-black uppercase text-white/50 tracking-widest">{tag}</span>
                        ))}
                     </div>
                     <div className="text-[10px] font-black text-[#f2c98a] flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase">
                        {t.viewDetails} <ArrowRight size={14} />
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-full bg-[#1e1e38] rounded-[3.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <X size={24} />
              </button>

                <div className={`overflow-y-auto custom-scroll p-8 md:p-20 ${!(selectedProject.content[lang].problem || selectedProject.content[lang].solution) ? 'space-y-0' : ''}`}>
                  <div className={`flex flex-col md:flex-row gap-12 ${!(selectedProject.content[lang].problem || selectedProject.content[lang].solution) ? 'mb-8' : 'mb-16'}`}>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f2c98a] mb-4 block underline decoration-[#f2c98a]/30 underline-offset-8">CASE STUDY</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-none">{selectedProject.content[lang].title}</h2>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map(tag => <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white/80">{tag}</span>)}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col gap-4">
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" className="w-full px-8 py-5 bg-[#f2c98a] text-[#0b0c1e] font-black uppercase tracking-widest text-[11px] rounded-2xl text-center shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                        <Globe size={18} /> {t.live}
                      </a>
                    )}
                    {selectedProject.repo && (
                      <a href={selectedProject.repo} target="_blank" className="w-full px-8 py-5 bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest text-[11px] rounded-2xl text-center hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                        <Github size={18} /> {t.readme}
                      </a>
                    )}
                    {selectedProject.article && (
                      <a href={selectedProject.article} target="_blank" className="w-full px-8 py-5 bg-cyan-600/20 text-cyan-400 border border-cyan-400/20 font-black uppercase tracking-widest text-[11px] rounded-2xl text-center hover:bg-cyan-600/30 transition-all flex items-center justify-center gap-3">
                        <BookOpen size={18} /> {t.article}
                      </a>
                    )}
                     {(selectedProject.videoDev || selectedProject.videoDevOps) && (
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProject.videoDev && (
                          <a href={selectedProject.videoDev} target="_blank" className="w-full px-8 py-5 border border-white/10 text-white/80 font-black uppercase tracking-widest text-[10px] rounded-2xl text-center hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                             <Video size={18} /> {t.video}
                          </a>
                        )}
                        {selectedProject.videoDevOps && (
                          <a href={selectedProject.videoDevOps} target="_blank" className="w-full px-8 py-5 border border-white/10 text-white/80 font-black uppercase tracking-widest text-[10px] rounded-2xl text-center hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                             <Monitor size={18} /> {t.devops}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {(selectedProject.content[lang].problem || selectedProject.content[lang].solution) && (
                  <div className="grid md:grid-cols-2 gap-12 mb-16 border-t border-white/5 pt-16">
                    {selectedProject.content[lang].problem && (
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#f2c98a] mb-6 flex items-center gap-3">
                          <AlertTriangle size={16} /> {t.problem}
                        </h4>
                        <p className="text-slate-100 text-sm leading-relaxed">{selectedProject.content[lang].problem}</p>
                      </div>
                    )}
                    {selectedProject.content[lang].solution && (
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#f2c98a] mb-6 flex items-center gap-3">
                          <CheckCircle2 size={16} /> {t.solution}
                        </h4>
                        <p className="text-slate-100 text-sm leading-relaxed">{selectedProject.content[lang].solution}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className={`${(selectedProject.content[lang].problem || selectedProject.content[lang].solution) ? 'border-t border-white/5 pt-16' : ''}`}>
                  {selectedProject.content[lang].achievements && (
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#f2c98a] mb-10 flex items-center gap-3">
                        <Zap size={16} /> {t.achievements}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        {selectedProject.content[lang].achievements?.map((item, i) => (
                          <div key={i} className="flex gap-6 items-start bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:border-[#f2c98a]/20 transition-all group">
                             <div className="w-10 h-10 rounded-xl bg-[#f2c98a]/10 flex items-center justify-center text-[#f2c98a] font-black shrink-0 group-hover:bg-[#f2c98a] group-hover:text-[#0b0c1e] transition-all">
                               {i + 1}
                             </div>
                             <p className="text-slate-100 text-[13px] leading-relaxed font-medium pt-2">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full text-center py-20 border-t border-white/5 opacity-40">
         <p className="text-[10px] font-black uppercase tracking-[1em] text-slate-500 uppercase">EYA BEN AMOR — CASE STUDIES — 2026</p>
      </footer>
    </div>
  );
}
