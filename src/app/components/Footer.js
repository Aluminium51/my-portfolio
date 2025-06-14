import React from 'react'
import { Menu, X, Github, Mail, Instagram, Facebook, ExternalLink, Code, Shield, CheckCircle, Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 border-t border-slate-700 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-400">&copy; 2025 Your Name. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Aluminium51" target='_blank' className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="mailto:noptanadon.p.email@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer