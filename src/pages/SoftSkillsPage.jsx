import { 
    Users, 
    Target, 
    Lightbulb, 
    Handshake, 
    MessageCircle, 
    TrendingUp,
    Sparkles,
    RefreshCw,
    Puzzle,
    Shield,
    HeartHandshake,
    Star
} from 'lucide-react';

const SoftSkillsPage = () => {
    const softSkills = [
        {
            name: "Leadership",
            description: "Capacité à guider et motiver une équipe vers l'atteinte d'objectifs communs",
            icon: <Users size={48} className="text-white" />,
            color: "from-gray-800 to-gray-700"
        },
        {
            name: "Sens des responsabilités",
            description: "Engagement à assumer pleinement mes tâches et respecter mes engagements",
            icon: <Shield size={48} className="text-white" />,
            color: "from-gray-700 to-gray-600"
        },
        {
            name: "Esprit d'initiative",
            description: "Proactivité et capacité à proposer des solutions innovantes",
            icon: <Lightbulb size={48} className="text-white" />,
            color: "from-gray-600 to-gray-500"
        },
        {
            name: "Travail en équipe",
            description: "Collaboration efficace et communication positive avec les membres de l'équipe",
            icon: <Handshake size={48} className="text-white" />,
            color: "from-gray-500 to-gray-400"
        },
        {
            name: "Communication",
            description: "Expression claire des idées et écoute active des autres",
            icon: <MessageCircle size={48} className="text-white" />,
            color: "from-gray-400 to-gray-300"
        },
        {
            name: "Persévérance",
            description: "Détermination à surmonter les obstacles et atteindre les objectifs fixés",
            icon: <TrendingUp size={48} className="text-white" />,
            color: "from-gray-600 to-gray-500"
        },
        {
            name: "Créativité",
            description: "Capacité à penser différemment et trouver des solutions originales",
            icon: <Sparkles size={48} className="text-white" />,
            color: "from-gray-700 to-gray-600"
        },
        {
            name: "Adaptabilité",
            description: "Facilité à m'adapter aux changements et nouvelles technologies",
            icon: <RefreshCw size={48} className="text-white" />,
            color: "from-gray-500 to-gray-400"
        },
        {
            name: "Résolution de problèmes",
            description: "Approche analytique pour identifier et résoudre les défis complexes",
            icon: <Puzzle size={48} className="text-white" />,
            color: "from-gray-800 to-gray-700"
        }
    ];
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Soft Skills</h1>
                    <p className="text-xl text-gray-600">Mes compétences comportementales et qualités personnelles</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {softSkills.map((skill, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-default"
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <div className={`h-32 bg-gradient-to-br ${skill.color} flex items-center justify-center relative overflow-hidden group-hover:shadow-inner transition-shadow duration-300`}>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {skill.icon}
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 text-center group-hover:translate-y-[-2px]">
                                    {skill.name}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-white shadow-lg group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                    <div className="text-center group-hover:translate-y-[-2px] transition-transform duration-300">
                        <h2 className="text-3xl font-bold mb-4">Pourquoi ces compétences sont importantes ?</h2>
                        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto group-hover:text-gray-100 transition-colors duration-300">
                            Dans le domaine du développement, les compétences techniques ne suffisent pas. 
                            Ces soft skills me permettent de collaborer efficacement, de m'adapter aux changements 
                            et de contribuer positivement à la culture d'équipe. Elles sont essentielles pour 
                            transformer des projets techniques en succès réels et maintenir une collaboration 
                            productive dans des environnements dynamiques.
                        </p>
                    </div>
                </div>

                {/* Section supplémentaire sur l'importance des soft skills */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Collaboration efficace",
                            description: "Travailler en harmonie avec différentes équipes et parties prenantes",
                            icon: <HeartHandshake size={40} className="text-gray-700" />
                        },
                        {
                            title: "Adaptation continue",
                            description: "Évoluer avec les nouvelles technologies et méthodologies",
                            icon: <RefreshCw size={40} className="text-gray-700" />
                        },
                        {
                            title: "Leadership technique",
                            description: "Guider les décisions techniques et inspirer l'innovation",
                            icon: <Star size={40} className="text-gray-700" />
                        }
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group cursor-default"
                        >
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-700 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkillsPage;