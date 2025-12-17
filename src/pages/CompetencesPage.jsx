import { 
    Code, 
    Database, 
    Server, 
    Layers, 
    Zap,
    FileCode,
    Braces,
    Globe,
    Coffee,
    Atom,
    Network,
    Flame,
    Palette,
    Container,
    GitBranch,
    Monitor,
    Cloud,
    Calendar,
    Sheet
} from 'lucide-react';

const CompetencesPage = () => {
    const competences = {
        langages: [
            { name: "JavaScript", level: 90, icon: <Braces size={20} className="text-gray-700" /> },
            { name: "Python", level: 85, icon: <FileCode size={20} className="text-gray-700" /> },
            { name: "PHP", level: 80, icon: <Zap size={20} className="text-gray-700" /> },
            { name: "TypeScript", level: 75, icon: <Code size={20} className="text-gray-700" /> },
            { name: "Java", level: 70, icon: <Coffee size={20} className="text-gray-700" /> },
            { name: "HTML/CSS", level: 95, icon: <Globe size={20} className="text-gray-700" /> }
        ],
        frameworks: [
            { name: "React", level: 90, icon: <Atom size={20} className="text-gray-700" /> },
            { name: "Node.js", level: 85, icon: <Network size={20} className="text-gray-700" /> },
            { name: "Vue.js", level: 80, icon: <Layers size={20} className="text-gray-700" /> },
            { name: "Spring-boot", level: 80, icon: <Flame size={20} className="text-gray-700" /> },
            { name: "Laravel", level: 75, icon: <Flame size={20} className="text-gray-700" /> }
        ],
        databases: [
            { name: "Oracle", level: 80, icon: <Database size={20} className="text-gray-700" /> },
            { name: "MySQL", level: 90, icon: <Database size={20} className="text-gray-700" /> },
            { name: "PostgreSQL", level: 90, icon: <Database size={20} className="text-gray-700" /> },
            { name: "Firebase", level: 75, icon: <Flame size={20} className="text-gray-700" /> },
            { name: "Mongo DB", level: 60, icon: <Flame size={20} className="text-gray-700" /> },
            { name: "Neon", level: 90, icon: <Cloud size={20} className="text-gray-700" /> }
        ],
        outils: [
            { name: "Git/GitHub", level: 90, icon: <GitBranch size={20} className="text-gray-700" /> },
            { name: "VS Code", level: 95, icon: <Monitor size={20} className="text-gray-700" /> },
            { name: "Docker", level: 70, icon: <Container size={20} className="text-gray-700" /> },
            { name: "Insomnia", level: 85, icon: <Zap size={20} className="text-gray-700" /> },
            { name: "Figma", level: 80, icon: <Palette size={20} className="text-gray-700" /> },
            { name: "Notion", level: 85, icon: <FileCode size={20} className="text-gray-700" /> },
            { name: "n8n", level: 50, icon: <Network size={20} className="text-gray-700" /> }
        ],
        services: [
            { name: "API REST", level: 90, icon: <Code size={20} className="text-gray-700" /> },
            { name: "Dolibarr API", level: 80, icon: <Server size={20} className="text-gray-700" /> },
            { name: "ERPNext API", level: 75, icon: <Database size={20} className="text-gray-700" /> },
            { name: "Google Drive API", level: 85, icon: <Cloud size={20} className="text-gray-700" /> },
            { name: "Google Calendar API", level: 80, icon: <Calendar size={20} className="text-gray-700" /> },
            { name: "Google Sheets API", level: 80, icon: <Sheet size={20} className="text-gray-700" /> }
        ]
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Compétences Techniques</h1>
                    <p className="text-xl text-gray-600">Mes technologies et outils de développement</p>
                </div>
                
                <div className="space-y-8">
                    {/* Langages */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Code className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Langages de Programmation</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {competences.langages.map((lang, index) => (
                                <div key={index} className="space-y-2 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                                            <span className="mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                {lang.icon}
                                            </span>
                                            {lang.name}
                                        </span>
                                        <span className="text-gray-700 font-bold group-hover/item:scale-110 transition-transform duration-300">{lang.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden group-hover/item:shadow-md transition-shadow duration-300">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105 origin-left"
                                            style={{width: `${lang.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Frameworks */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Layers className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Frameworks & Libraries</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {competences.frameworks.map((framework, index) => (
                                <div key={index} className="space-y-2 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                                            <span className="mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                {framework.icon}
                                            </span>
                                            {framework.name}
                                        </span>
                                        <span className="text-gray-700 font-bold group-hover/item:scale-110 transition-transform duration-300">{framework.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden group-hover/item:shadow-md transition-shadow duration-300">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gray-700 to-gray-600 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105 origin-left"
                                            style={{width: `${framework.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Databases */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Database className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Bases de Données</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {competences.databases.map((db, index) => (
                                <div key={index} className="space-y-2 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                                            <span className="mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                {db.icon}
                                            </span>
                                            {db.name}
                                        </span>
                                        <span className="text-gray-700 font-bold group-hover/item:scale-110 transition-transform duration-300">{db.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden group-hover/item:shadow-md transition-shadow duration-300">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105 origin-left"
                                            style={{width: `${db.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Services API */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Services & API</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {competences.services.map((service, index) => (
                                <div key={index} className="space-y-2 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                                            <span className="mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                {service.icon}
                                            </span>
                                            {service.name}
                                        </span>
                                        <span className="text-gray-700 font-bold group-hover/item:scale-110 transition-transform duration-300">{service.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden group-hover/item:shadow-md transition-shadow duration-300">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105 origin-left"
                                            style={{width: `${service.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Outils */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-300 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Server className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Outils & Logiciels</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {competences.outils.map((outil, index) => (
                                <div key={index} className="space-y-2 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 flex items-center group-hover/item:translate-x-1 transition-transform duration-300">
                                            <span className="mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                                {outil.icon}
                                            </span>
                                            {outil.name}
                                        </span>
                                        <span className="text-gray-700 font-bold group-hover/item:scale-110 transition-transform duration-300">{outil.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden group-hover/item:shadow-md transition-shadow duration-300">
                                        <div 
                                            className="h-full bg-gradient-to-r from-gray-400 to-gray-300 rounded-full transition-all duration-1000 ease-out group-hover/item:scale-105 origin-left"
                                            style={{width: `${outil.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetencesPage;