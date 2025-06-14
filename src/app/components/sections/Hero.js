import React from 'react';

const HeroSection = ({ scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                            Noptanadon Pongpila
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-4">Front-End Developer</p>
                    <p className="text-lg text-slate-400 mb-8">Computer Engineering Student at Chulalongkorn University</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;