import { useState } from 'react';
import ProjectModal from '../modal/ProjectModal';
import { ExternalLink } from 'lucide-react';

const ProjetsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    
    const projects = [
        {
            id: 1,
            title: "Application E-Commerce",
            description: "Plateforme de vente en ligne complète avec système de paiement intégré",
            objective: "Créer une solution e-commerce moderne permettant aux utilisateurs de parcourir des produits, gérer leur panier et effectuer des achats sécurisés en ligne.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            icon: "🛍️",
            color: "from-gray-800 to-gray-700",
            link: "https://nyantemafy.github.io/frontend-ecommerce",
            features: [
                "Catalogue de produits avec filtres avancés",
                "Panier d'achat dynamique",
                "Système d'authentification sécurisé",
                "Intégration de paiement Stripe",
                "Tableau de bord administrateur",
                "Gestion des commandes et inventaire"
            ],
            challenges: "Mise en place d'une architecture scalable pour gérer un grand volume de transactions simultanées et optimisation des performances pour le chargement rapide des images produits."
        },
        {
            id: 2,
            title: "Système de Gestion Scolaire",
            description: "Application de gestion complète pour établissements scolaires",
            objective: "Développer un système centralisé pour gérer les étudiants, professeurs, cours, notes et communications dans un environnement scolaire.",
            technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Redis"],
            icon: "📚",
            color: "from-gray-700 to-gray-600",
            link: "https://exemple-school.com",
            features: [
                "Gestion des inscriptions étudiants",
                "Suivi des notes et bulletins",
                "Calendrier des cours et examens",
                "Messagerie interne école-parents",
                "Génération de rapports automatiques",
                "Interface différenciée par rôle (admin, prof, étudiant)"
            ],
            challenges: "Conception d'une base de données complexe avec relations multiples et implémentation d'un système de permissions granulaires pour différents types d'utilisateurs."
        },
        {
            id: 3,
            title: "Portfolio Interactif",
            description: "Site portfolio moderne avec animations et design responsive",
            objective: "Créer un portfolio personnel attrayant et professionnel pour présenter mes compétences, projets et parcours de manière interactive.",
            technologies: ["React", "Framer Motion", "Tailwind CSS", "Three.js"],
            icon: "💼",
            color: "from-gray-600 to-gray-500",
            link: "https://exemple-portfolio.com",
            features: [
                "Design moderne et épuré",
                "Animations fluides et interactives",
                "Section projets avec filtres",
                "Formulaire de contact fonctionnel",
                "Mode sombre/clair",
                "Optimisé SEO et performances"
            ],
            challenges: "Créer des animations performantes sans impacter la vitesse de chargement et assurer une excellente expérience utilisateur sur tous les appareils."
        }
    ];
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Mes Projets</h1>
                    <p className="text-xl text-gray-600">Découvrez mes réalisations et expériences</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                            onClick={() => setSelectedProject(project)}
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden group-hover:shadow-inner transition-shadow duration-300`}>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                <span className="text-8xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">{project.icon}</span>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 group-hover:translate-x-1">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-gray-200 transition-colors duration-300 transform group-hover:scale-105">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full group-hover:bg-gray-100 transition-colors duration-300">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                                    <span className="text-gray-700 font-medium group-hover:underline group-hover:translate-x-1 transition-all duration-300">Voir les détails →</span>
                                    <ExternalLink className="text-gray-400 group-hover:text-gray-700 group-hover:scale-110 transition-all duration-300" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
};

export default ProjetsPage;