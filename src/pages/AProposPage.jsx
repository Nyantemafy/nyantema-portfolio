const AProposPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">À propos de moi</h1>
                    <p className="text-xl text-gray-600">Mon parcours académique et professionnel</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Formation */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl text-white">🎓</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Formation Académique</h2>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:translate-x-1 group/item">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:translate-x-1 transition-transform duration-300">Licence Informatique</h3>
                                <p className="text-sm text-gray-600">En cours - Formation universitaire</p>
                            </div>
                            
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:translate-x-1 group/item">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:translate-x-1 transition-transform duration-300">BAC Série D</h3>
                                <p className="text-sm text-gray-600">Mention Assez Bien </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Certifications */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl text-white">📜</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:translate-x-1 group/item">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:translate-x-1 transition-transform duration-300">DELF B1</h3>
                                <p className="text-sm text-gray-600">Diplôme d'Études en Langue Française - Niveau indépendant</p>
                            </div>
                            
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:translate-x-1 group/item">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:translate-x-1 transition-transform duration-300">DELF A2</h3>
                                <p className="text-sm text-gray-600">Niveau élémentaire</p>
                            </div>
                            
                            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-600 hover:border-gray-400 transition-all duration-300 transform hover:translate-x-1 group/item">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover/item:translate-x-1 transition-transform duration-300">DELF A1</h3>
                                <p className="text-sm text-gray-600">Niveau introductif</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Langues */}
                <div className="bg-white p-8 rounded-2xl shadow-sm mb-12 border border-gray-100 group hover:shadow-lg transition-all duration-500">
                    <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl text-white">🌍</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Compétences Linguistiques</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { flag: "🇫🇷", language: "Français", level: "85%", description: "Niveau B1 - Indépendant", color: "from-gray-800 to-gray-700" },
                            { flag: "🇬🇧", language: "Anglais", level: "60%", description: "Niveau Intermédiaire", color: "from-gray-700 to-gray-600" },
                            { flag: "🇲🇬", language: "Malgache", level: "100%", description: "Langue Maternelle", color: "from-gray-900 to-gray-800" }
                        ].map((lang, index) => (
                            <div 
                                key={index}
                                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 group/item border border-gray-200"
                            >
                                <div className="text-4xl mb-3 group-hover/item:scale-110 transition-transform duration-300">{lang.flag}</div>
                                <h3 className="font-semibold text-gray-900 mb-2 group-hover/item:translate-y-[-2px] transition-transform duration-300">{lang.language}</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                    <div 
                                        className={`bg-gradient-to-r ${lang.color} h-2 rounded-full transition-all duration-1000 group-hover/item:scale-105 origin-left`}
                                        style={{width: lang.level}}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">{lang.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Expérience */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg text-white group hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center mb-6 group-hover:translate-x-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl text-gray-800">💼</span>
                        </div>
                        <h2 className="text-2xl font-bold">Expérience Professionnelle</h2>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:translate-y-[-4px] group/exp">
                        <div className="flex items-start justify-between mb-4">
                            <div className="group-hover/exp:translate-x-1 transition-transform duration-300">
                                <h3 className="text-xl font-semibold mb-2">Développeuse Full Stack</h3>
                                <p className="text-gray-200">Projet réel en entreprise</p>
                            </div>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors duration-300 transform hover:scale-105">
                                2 mois
                            </span>
                        </div>
                        <p className="text-gray-100 leading-relaxed group-hover/exp:translate-x-1 transition-transform duration-300">
                            Participation active à un projet web réel : conception, développement et déploiement d'une application complète. 
                            Réalisé de manière autonome en tant que prestataire.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AProposPage;