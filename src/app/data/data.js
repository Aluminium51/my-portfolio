import { Code, Shield, CheckCircle, Zap } from 'lucide-react';

export const skills = [
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