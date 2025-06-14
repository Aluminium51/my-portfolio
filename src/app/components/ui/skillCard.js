import React from 'react';

const SkillCard = ({ skill, index }) => {
  return (
    <div
      className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3 text-white`}>
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold">{skill.category}</h3>
      </div>
      <div className="space-y-3">
        {skill.items.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-center justify-between">
            <span className="font-mono text-sm">{item.name}</span>
            <span className="text-indigo-400">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;