import React from 'react';

import { Code, Shield, CheckCircle, Zap } from 'lucide-react'; // Import icons here
import SkillCard from '../ui/skillCard';
import FadeInSection from '../FadeInSection';
import Link from 'next/link';


const skills = [
    {
        category: 'Languages',
        icon: <Code className="w-6 h-6" />,
        color: 'from-indigo-500 to-purple-600',
        items: [
            { name: 'Python', level: 'Advanced' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'Java', level: 'Intermediate' }
        ]
    },
    {
        category: 'Frameworks',
        icon: <Shield className="w-6 h-6" />,
        color: 'from-green-500 to-teal-600',
        items: [
            { name: 'React', level: 'Advanced' },
            { name: 'Next.js', level: 'Intermediate' }
        ]
    },
    {
        category: 'Styling',
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-600',
        items: [
            { name: 'Tailwind CSS', level: 'Advanced' },
            { name: 'CSS3', level: 'Advanced' }
        ]
    },
    {
        category: 'Tools',
        icon: <Zap className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-600',
        items: [
            { name: 'Git', level: 'Advanced' },
            { name: 'VS Code', level: 'Advanced' },
            // { name: 'Figma', level: 'Intermediate' }
        ]
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <FadeInSection>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-8"> {/* จัดปุ่มอยู่ตรงกลาง */}
                        <Link href="/skills" passHref>
                            <button
                                className="group relative px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-slate-900/30"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"> {/* เพิ่ม justify-center */}
                                    See More Skills
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default SkillsSection;