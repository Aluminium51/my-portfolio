'use client';

import React, { useEffect, useState } from 'react';
import {
    Code, Shield, CheckCircle, Zap, Database, Globe,
    Smartphone, Server, GitBranch, Palette, Monitor,
    BookOpen, Trophy, Star, ArrowLeft, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { FaPython, FaReact, FaNodeJs, FaJava, FaGit, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma,
    SiMysql, SiMongodb, SiFirebase, SiVercel, SiGithubpages, SiPostman, SiVisualstudiocode,
    SiCplusplus
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

const allSkills = [
    {
        category: 'Programming Languages',
        icon: <Code className="w-6 h-6" />,
        color: 'from-indigo-500 to-purple-600',
        items: [
            { name: 'Python', level: 'Advanced', experience: '1+ years', description: 'Web Scraping, Computer Programing, OpenCV', icon: <FaPython className="w-10 h-full text-yellow-400" /> },
            { name: 'JavaScript', level: 'Advanced', experience: '2+ years', description: 'ES6+, DOM manipulation, Async programming', icon: <SiJavascript className="w-10 h-full text-yellow-500" /> },
            { name: 'TypeScript', level: 'Beginner', experience: 'Learning..', description: 'Comming Soon...', icon: <SiTypescript className="w-10 h-full text-blue-500" /> },
            { name: 'Java', level: 'Intermediate', experience: '6 months', description: 'OOP, Spring Framework basics', icon: <FaJava className="w-10 h-full text-red-500" /> },
            { name: 'C++', level: 'Beginner', experience: 'Learning..', description: 'Data structures, Algorithms', icon: <SiCplusplus className="w-10 h-full text-blue-600" /> },
            { name: 'C#', level: 'Beginner', experience: 'Learning..', description: 'Game Development', icon: <TbBrandCSharp className="w-10 h-full text-purple-600" /> }
        ]
    },
    {
        category: 'Frameworks',
        icon: <Shield className="w-6 h-6" />,
        color: 'from-green-500 to-teal-600',
        items: [
            { name: 'React', level: 'Intermediate', experience: '6+ months', description: 'Hooks, Context API, State management', icon: <FaReact className="w-10 h-full text-blue-400" /> },
            { name: 'Next.js', level: 'Intermediate', experience: '1+ years', description: 'SSR, SSG, API routes', icon: <SiNextdotjs className="w-10 h-full text-white" /> },
            { name: 'Tailwind CSS', level: 'Intermediate', experience: '2+ years', description: 'Utility-first CSS framework', icon: <SiTailwindcss className="w-10 h-full text-cyan-400" /> },
            // { name: 'Figma', level: 'Beginner', experience: '1+ years', description: 'UI/UX design, Prototyping', icon: <SiFigma className="w-10 h-full text-red-500" /> }
        ]
    },
    {
        category: 'Backend & Database',
        icon: <Database className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-600',
        items: [
            { name: 'Node.js', level: 'Beginner', experience: '1+ years', description: 'Express.js, REST APIs', icon: <FaNodeJs className="w-10 h-full text-green-500" /> },
            { name: 'MySQL', level: 'Beginner', experience: '1+ years', description: 'Database design, Queries', icon: <SiMysql className="w-10 h-full text-blue-400" /> },
            // { name: 'MongoDB', level: 'Beginner', experience: '6 months', description: 'NoSQL database basics', icon: <SiMongodb className="w-10 h-full text-green-600" /> },
            { name: 'Firebase', level: 'Beginner', experience: '1 year', description: 'Authentication, Firestore', icon: <SiFirebase className="w-10 h-full text-yellow-500" /> }
        ]
    },
    {
        category: 'Development Tools',
        icon: <Zap className="w-6 h-6" />,
        color: 'from-orange-500 to-red-600',
        items: [
            { name: 'Git', level: 'Advanced', experience: '3+ years', description: 'Version control, Branching strategies', icon: <FaGitAlt className="w-10 h-full text-red-500" /> },
            { name: 'VS Code', level: 'Advanced', experience: '3+ years', description: 'Extensions, Debugging, Shortcuts', icon: <BiLogoVisualStudio className="w-10 h-full text-blue-400" /> },
            { name: 'Postman', level: 'Beginner', experience: '1+ years', description: 'API testing and documentation', icon: <SiPostman className="w-10 h-full text-orange-500" /> },
            // { name: 'Docker', level: 'Beginner', experience: '6 months', description: 'Containerization basics', icon: <FaDocker className="w-10 h-full text-blue-500" /> },
        ]
    },
    {
        category: 'Cloud & Deployment',
        icon: <Globe className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-600',
        items: [
            { name: 'Vercel', level: 'Intermediate', experience: '1+ years', description: 'Next.js deployment, Serverless', icon: <SiVercel className="w-10 h-full text-white" /> },
            { name: 'GitHub Pages', level: 'Beginner', experience: '2+ years', description: 'Static hosting', icon: <SiGithubpages className="w-10 h-full text-purple-400" /> },
            // { name: 'AWS', level: 'Beginner', experience: '3 months', description: 'EC2, S3 basics', icon: <FaAws className="w-10 h-full text-orange-400" /> }
        ]
    }
];

const SkillCard = ({ skill, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    const getLevelColor = (level) => {
        switch (level) {
            case 'Advanced': return 'text-green-400 bg-green-500/20';
            case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
            case 'Beginner': return 'text-blue-400 bg-blue-500/20';
            default: return 'text-gray-400 bg-gray-500/20';
        }
    };

    const getLevelIcon = (level) => {
        switch (level) {
            case 'Advanced': return <Trophy className="w-4 h-4" />;
            case 'Intermediate': return <Star className="w-4 h-4" />;
            case 'Beginner': return <BookOpen className="w-4 h-4" />;
            default: return null;
        }
    };

    return (
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.category}
                    </h3>
                </div>

                <div className="space-y-4">
                    {skill.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border border-slate-700/30 rounded-lg p-4 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300">
                            <div className='flex flex-row space-x-5'>
                                <div>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(item.level)}`}>
                                            {getLevelIcon(item.level)}
                                            {item.level}
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-2">{item.description}</p>
                                    {/* <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="px-2 py-1 bg-slate-800 rounded-full">{item.experience}</span>
                                </div> */}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkillsPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

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
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)
        `,
    };

    return (
        <div className="min-h-screen" style={backgroundStyle}>
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
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
                        <div className="w-1 h-1 bg-indigo-400 rounded-full opacity-30"></div>
                    </div>
                ))}
            </div>

            {/* Floating geometric shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-indigo-500/10 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-lg animate-bounce-slow"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <header className="pt-8 pb-16">
                    <div className="container mx-auto px-6">
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>

                            <div className="text-center max-w-4xl mx-auto">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] filter">
                                        Complete Skills
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                        & Technologies
                                    </span>
                                </h1>

                                <p className="text-xl text-slate-400 mb-8 font-light">
                                    A comprehensive overview of my technical skills and expertise
                                </p>

                                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-indigo-500/30 backdrop-blur-sm inline-flex">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-slate-200">Continuously Learning & Growing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Skills Grid */}
                <main className="pb-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {allSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer CTA */}
                <footer className="pb-20">
                    <div className="container mx-auto px-6 text-center">
                        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Interested in working together?
                            </h3>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                I'm always open to discussing new opportunities and interesting projects.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/#contact">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
                                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get In Touch
                                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </Link>

                                <Link href="/#projects">
                                    <button className="group relative px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-slate-900/30">
                                        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                            View My Projects
                                            <GitBranch className="w-5 h-5" />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default SkillsPage;