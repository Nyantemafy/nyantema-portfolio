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
            link: "https://player.cloudinary.com/embed/?cloud_name=dl280pugt&public_id=clideo_editor_b1a07f2d418e4920922c990e48c5549b_d1ep2e&profile=cld-default",
            link2: "https://nyantemafy.github.io/frontend-ecommerce",
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
            link: "https://player.cloudinary.com/embed/?cloud_name=dl280pugt&public_id=clideo_editor_a86a8ffabd454de1847a60b7719ff39c_takrva&profile=cld-default",
            features: [
                "Gestion des inscriptions étudiants",
                "Suivi des notes et bulletins",
                "Calendrier des cours et examens",
                "Génération de rapports automatiques",
                "Interface différenciée par rôle (admin, prof, étudiant)"
            ],
            challenges: "Conception d'une base de données complexe avec relations multiples et implémentation d'un système de permissions granulaires pour différents types d'utilisateurs."
        },
        {
            id: 3,
            title: "Gestion Panneau",
            description: "Plateforme de gestion de panneaux, controle, agent et admin panneau",
            objective: "Développer une application mobile et web complète de gestion de panneaux, offrant une solution moderne pour la visualisation et la gestion des données géographiques et des actifs.",
            technologies: ["React Native", "Expo", "React Navigation", "React Native Web", "Electron (pour la version desktop)", "React Leaflet (cartes interactives)", "Expo File System (gestion des fichiers)", "Expo Secure Store (stockage sécurisé)", "Node.js", "Postgres"],
            icon: "💼",
            color: "from-gray-600 to-gray-500",
            link: "https://player.cloudinary.com/embed/?cloud_name=dl280pugt&public_id=democua_ugmzek&profile=cld-default",
            features: [
                "Interface multiplateforme (mobile, web, desktop)",
                "Capture et gestion des photos",
                "Gestion des données géographiques avec cartes interactives",
                "Gestion des fichiers et documents",
                "Sélecteur de dates et heures intégré",
                "Génération de codes QR"
            ],
            challenges: [
                "Assurer la compatibilité multiplateforme (iOS, Android, Web, Desktop)",
                "Gérer efficacement les données géographiques en temps réel",
                "Maintenir des performances optimales sur tous les appareils",
                "Assurer la synchronisation des données entre les différentes plateformes",
                "Gérer les permissions d'accès aux fonctionnalités natives comme la caméra et la géolocalisation"                
            ]
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