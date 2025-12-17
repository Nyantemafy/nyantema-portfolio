const AccueilPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {/* Badge avec effet 3D subtil */}
                            <div className="inline-block transform hover:rotate-1 transition-transform duration-300">
                                <span className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                                    👋 Bienvenue sur mon portfolio
                                </span>
                            </div>
                            
                            {/* Titres avec effet de profondeur */}
                            <div className="space-y-4 transition-transform duration-500 hover:-translate-y-1">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight drop-shadow-sm">
                                    ANDRIAMBELOMANANA<br />
                                    <span className="text-gray-700 bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent">
                                        Ny Antema Fiderana
                                    </span>
                                </h1>
                            </div>
                            
                            <p className="text-2xl text-gray-700 font-medium transition-transform duration-300 hover:translate-x-2">
                                Développeuse Full Stack 💻
                            </p>
                            
                            {/* Citation avec effet de carte */}
                            <div className="transition-all duration-500 hover:shadow-md">
                                <p className="text-lg text-gray-600 leading-relaxed p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300">
                                    "Transformer des idées en solutions digitales innovantes, 
                                    une ligne de code à la fois. Passionnée par le développement web 
                                    et mobile, je crée des expériences utilisateur exceptionnelles."
                                </p>
                            </div>
                            
                            {/* Boutons avec effet 3D */}
                            <div className="flex gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                                    Voir mes projets
                                </button>
                                <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                                    Me contacter
                                </button>
                            </div>
                            
                            {/* Stats avec effet de cartes 3D */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                {[
                                    { number: "3+", label: "Projets" },
                                    { number: "4", label: "Mois d'expérience" },
                                    { number: "10+", label: "Technologies" }
                                ].map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 hover:rotate-1 group cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="text-3xl font-bold text-gray-800 mb-1 transition-transform duration-300 group-hover:scale-110">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                                            {stat.label}
                                        </div>
                                        {/* Effet de brillance au survol */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Visual avec effets 3D avancés */}
                        <div className="flex justify-center">
                            <div className="relative group">
                                {/* Effet d'ombre portée 3D */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30 animate-pulse-slow"></div>
                                
                                {/* Cercle principal avec transformation 3D */}
                                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:rotate-3">
                                    {/* Votre photo de profil */}
                                    <img 
                                        // src="https://res.cloudinary.com/dl280pugt/image/upload/v1759346308/Untitled_design-removebg-preview_etzith.png" 
                                        src=""
                                        alt="Andriambelomanana - Développeuse Full Stack"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    
                                    {/* Reflets dynamiques */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                </div>
                                
                                {/* Éléments flottants autour */}
                                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gray-300 rounded-full opacity-60 transition-opacity duration-300 group-hover:opacity-80 animate-float-slow"></div>
                                <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-gray-400 rounded-full opacity-40 transition-opacity duration-300 group-hover:opacity-60 animate-float-slower"></div>
                                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-gray-500 rounded-full opacity-30 transition-opacity duration-300 group-hover:opacity-50 animate-float-slow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccueilPage;