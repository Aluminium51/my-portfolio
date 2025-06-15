import React, { useEffect, useState } from 'react';
import FadeInSection from '../FadeInSection';

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const backgroundStyle = {
        background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)
        `,
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-300"
            style={backgroundStyle}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    >
                        <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-20"></div>
                    </div>
                ))}
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-indigo-500/20 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg animate-bounce-slow"></div>
            </div>

            <FadeInSection>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Greeting with typing effect */}
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-lg md:text-xl text-indigo-400 mb-4 font-mono">
                                {'<'}<span className="text-purple-400">Hello World!</span>{' />'}
                            </p>
                        </div>

                        {/* Main heading with enhanced gradient */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                                Hi, I'm{' '}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                                        Noptanadon
                                    </span>
                                    <span className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></span>
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                    Pongpila
                                </span>
                            </h1>
                        </div>

                        {/* Role with icon */}
                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-indigo-500/30 backdrop-blur-sm">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-xl md:text-2xl text-slate-200 font-semibold">Front-End Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Education info */}
                        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-lg md:text-xl text-slate-400 mb-8 font-light">
                                Computer Engineering Student at{' '}
                                <span className="text-pink-400 font-medium hover:text-pink-300 transition-colors cursor-default">
                                    Chulalongkorn University
                                </span>
                            </p>
                        </div>

                        {/* Action buttons with enhanced styling */}
                        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        View My Work
                                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                </button>

                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="group relative px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-slate-900/30"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        Get In Touch
                                        <span className="transform group-hover:scale-110 transition-transform duration-300">✨</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <div className={`mt-30 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="animate-bounce">
                                <div className="w-6 h-10 border-2 border-slate-400 rounded-full mx-auto">
                                    <div className="w-1 h-3 bg-slate-400 rounded-full mx-auto mt-2 animate-pulse"></div>
                                </div>
                                <p className="text-slate-500 text-sm mt-2">Scroll to explore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                .animate-gradient-x {
                    animation: gradient-x 4s ease infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;