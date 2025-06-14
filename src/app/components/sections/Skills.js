import React from 'react';

import { Code, Shield, CheckCircle, Zap } from 'lucide-react'; // Import icons here
import SkillCard from '../ui/skillCard';


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
            { name: 'Figma', level: 'Intermediate' }
        ]
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;