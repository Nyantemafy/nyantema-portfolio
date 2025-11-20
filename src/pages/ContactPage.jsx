import { Phone, Mail } from 'lucide-react';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Github from 'lucide-react/dist/esm/icons/github';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
                    <p className="text-xl text-gray-600">N'hésitez pas à me contacter pour toute opportunité ou collaboration</p>
                </div>
                
                {/* Section Contact Info Centrée */}
                <div className="max-w-2xl mx-auto space-y-8 mb-12">
                    {/* Email et Téléphone côte à côte */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="text-white" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">Email</h3>
                                    <a href="mailto:nyantema@example.com" className="text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300 text-lg">
                                        nyantema.fy@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="text-white" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">Téléphone</h3>
                                    <a href="tel:+261385827875" className="text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-300 text-lg">
                                        +261 38 58 278 75
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Réseaux Sociaux */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg text-white group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-8 text-center group-hover:translate-y-[-2px] transition-transform duration-300">Réseaux Sociaux</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    platform: "Facebook",
                                    icon: <Facebook className="text-blue-600" size={28} />,
                                    href: "https://www.facebook.com/antema.andriams.7",
                                    description: "Suivez-moi"
                                },
                                {
                                    platform: "LinkedIn",
                                    icon: <Linkedin className="text-blue-700" size={28} />,
                                    href: "https://www.linkedin.com/in/ny-antema-fiderana-andriambelomanana-872414349/",
                                    description: "Connectons-nous"
                                },
                                {
                                    platform: "WhatsApp",
                                    icon: <Phone className="text-green-600" size={28} />,
                                    href: "https://wa.me/261385827875",
                                    description: "Discutons"
                                },
                                {
                                    platform: "GitHub",
                                    icon: <Github className="text-gray-900" size={28} />,
                                    href: "https://github.com/Nyantemafy",
                                    description: "Mes projets"
                                }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group/item space-y-3"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                        {social.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-lg">{social.platform}</div>
                                        <div className="text-sm text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                                            {social.description}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Disponibilité */}
                <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl text-center border-2 border-gray-300 group hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:translate-y-[-2px] transition-transform duration-300">Disponibilité</h3>
                    <p className="text-lg text-gray-700 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                        ✅ Actuellement <span className="text-green-600 font-semibold group-hover:scale-110 transition-transform duration-300 inline-block">disponible</span> pour de nouvelles opportunités
                    </p>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        Je suis ouverte aux propositions de stage, freelance et CDI dans le domaine du développement web
                    </p>
                </div>

                {/* Call to Action supplémentaire */}
                <div className="max-w-2xl mx-auto mt-8 text-center">
                    <p className="text-gray-600 text-lg">
                        📧 <span className="font-semibold text-gray-800">N'hésitez pas à m'envoyer un email</span> - Je réponds généralement dans les 24 heures
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;