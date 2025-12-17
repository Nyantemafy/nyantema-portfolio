import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TopNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Pour savoir sur quelle route on est
    
    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/apropos' },
        { name: 'Projets', path: '/projets' },
        { name: 'Compétences', path: '/competences' },
        { name: 'Soft Skills', path: '/softskills' },
        { name: 'Contact', path: '/contact' },
    ];
    
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-gray-200">
                            <span className="text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">NA</span>
                        </div>
                        <div className="flex flex-col group-hover:translate-x-1 transition-transform duration-300">
                            <span className="text-xl font-bold text-gray-900 tracking-tight">Ny Antema</span>
                            <span className="text-xs text-gray-500 font-medium">Ny Antema</span>
                        </div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
                                    location.pathname === item.path
                                        ? 'text-gray-900 font-semibold'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <span className="group-hover:translate-y-[-1px] transition-transform duration-300 block">
                                    {item.name}
                                </span>
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                                    location.pathname === item.path 
                                        ? 'scale-100' 
                                        : 'scale-0 group-hover:scale-100 group-hover:bg-gray-400'
                                }`}></span>
                            </Link>
                        ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="hidden md:flex items-center bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                    >
                        Discutons
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? 
                            <X size={20} className="transform rotate-90 transition-transform duration-300" /> : 
                            <Menu size={20} className="hover:rotate-180 transition-transform duration-300" />
                        }
                    </button>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-lg animate-fadeIn">
                        <div className="space-y-2">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                                        location.pathname === item.path
                                            ? 'bg-gray-900 text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md'
                                    }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link 
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-left py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg mt-4"
                            >
                                Discutons
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default TopNavbar;
