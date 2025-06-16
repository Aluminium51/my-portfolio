import React from 'react'
import {  Github, Mail, Phone } from 'lucide-react'; // Import Phone icon

const Footer = () => {
    const lastUpdateDate = "June 16, 2025";

    return (
        <footer className="bg-slate-800 border-t border-slate-700 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-400">&copy; 2025 Your Name. All rights reserved.</p>
                        <p className="text-slate-500 text-sm mt-1">Last Updated: {lastUpdateDate}</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
                        {/* GitHub Link */}
                        <a 
                            href="https://github.com/Aluminium51" 
                            target='_blank' 
                            rel="noopener noreferrer" // for security
                            className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub</span>
                        </a>
                        {/* Gmail Link */}
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=noptanadon.p.email@gmail.com"
                            target='_blank' 
                            rel="noopener noreferrer" // for security
                            className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Gmail</span>
                        </a>
                        {/* Phone Number Link */}
                        <a 
                            href="tel:+66822379077" 
                            className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>082-237-9077</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer