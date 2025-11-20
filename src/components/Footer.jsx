import { Phone, Mail } from 'lucide-react';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Github from 'lucide-react/dist/esm/icons/github';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Section principale */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Brand Section avec animations */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-gray-900 font-bold text-xl group-hover:scale-105 transition-transform">NA</span>
                            </div>
                            <div className="group-hover:translate-x-1 transition-transform duration-300">
                                <h2 className="text-2xl font-bold">Ny Antema</h2>
                                <p className="text-gray-400 text-sm">Ny Antema</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md hover:text-gray-200 transition-colors duration-300">
                            Développeuse Full Stack passionnée par la création de solutions web innovantes et performantes.
                        </p>
                    </div>
                    
                    {/* Navigation Links avec effets */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6 text-white">Navigation Rapide</h3>
                        <div className="space-y-3">
                            {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
                                <p 
                                    key={item}
                                    className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 text-base hover:translate-x-2 hover:font-medium group"
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">• </span>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    {/* Contact & Social avec animations 3D */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6 text-white">Restons connectés</h3>
                        
                        {/* Social Links avec effets améliorés */}
                        <div className="flex space-x-3 mb-6">
                            {[
                                { icon: <Facebook size={20} />, href: "https://facebook.com" },
                                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                                { icon: <Github size={20} />, href: "https://github.com" }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/20 hover:border-white/40 group"
                                >
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                        
                        {/* Contact Info avec animations */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">+261 38 58 278 75</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">contact@navyantenna.com</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mt-4 hover:text-gray-300 transition-colors duration-300 cursor-default">
                            Disponible pour des opportunités professionnelles
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Bottom Bar avec effet subtil */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 group">
                        <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 cursor-default">
                            © 2025 Ny Antema. Tous droits réservés.
                        </p>
                        <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 cursor-default flex items-center space-x-1">
                            <span className="group-hover:scale-110 transition-transform duration-300">❤️</span>
                            <span>Fait avec amour à Madagascar</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;