import React from 'react'
import { Mail } from 'lucide-react';
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import FadeInSection from '../FadeInSection';

const Contact = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: <FaInstagram className="w-5 h-5" />,
            gradient: 'from-purple-500 via-pink-500 to-yellow-500',
            username: '@_rew_ntnd',
            url: 'https://www.instagram.com/_rew_ntnd/'
        },
        {
            name: 'Facebook',
            icon: <FaFacebook className="w-5 h-5" />,
            gradient: 'from-blue-600 to-blue-800',
            username: 'Noptanadon Pongpila',
            url: 'https://www.facebook.com/noptanadon.pongpila'
        },
        {
            name: 'LinkIn',
            icon: <FaLinkedin className="w-5 h-5" />,
            gradient: 'from-blue-700 to-blue-900',
            username: 'Noptanadon Pongpila',
            url: 'https://www.linkedin.com/in/noptanadon-pongpila-49a7491a6'
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="w-5 h-5" />,
            gradient: 'from-gray-800 to-gray-900',
            username: '@Aluminium51',
            url: 'https://github.com/Aluminium51'
        }
    ];

    return (
        <section id="contact" className="py-12 md:py-20 bg-slate-900 ">
            <FadeInSection>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header - More compact */}
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Let's Connect</h2>
                            <p className="text-base md:text-xl text-slate-300">
                                Open to new opportunities and collaborations
                            </p>
                        </div>

                        {/* Social Links - Compact grid for mobile */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target='_blank'
                                    className="groupr bg-slate-800/50 border border-slate-700 hover:border-indigo-500 p-3 md:p-6 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                                >
                                    <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${social.gradient} rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform text-white`}>
                                        {social.icon}
                                    </div>
                                    <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2 text-center">{social.name}</h3>
                                    <p className="text-slate-400 text-xs md:text-sm truncate text-center">{social.username}</p>
                                </a>
                            ))}
                        </div>

                        {/* CTA Section - More compact */}
                        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-700 rounded-xl p-6 md:p-8 backdrop-blur-sm">
                            <div className="text-center">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Ready to work together?</h3>
                                <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-6">
                                    Available for freelance projects and full-time opportunities.
                                </p>

                                {/* Email CTA Button */}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=noptanadon.p@gmail.com"
                                    className="inline-flex items-center bg-indigo-600 hover:bg-indigo-500 px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 text-sm md:text-base"
                                    target="_blank"
                                    rel="noopener noreferrer" // เพิ่ม rel="noopener noreferrer" เพื่อความปลอดภัย
                                >
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    Send me an email
                                </a>
                            </div>
                        </div>

                        {/* Quick Contact Info - Mobile optimized */}
                        <div className="mt-6 md:mt-8 text-center">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-slate-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>Available for work</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>Usually responds within 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

        </section>
    )
}

export default Contact