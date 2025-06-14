import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
                <div className="w-50 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-6">
                    <img src='/Mypicture.jpg' className='w-full h-full object-cover rounded-xl'></img>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Your Name</h3>
                  <p className="text-slate-400 font-mono">Front-End Developer</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm passionate about creating beautiful, functional, and user-centered digital experiences.
                Currently pursuing my degree in Computer Engineering at Chulalongkorn University, I'm constantly
                exploring the intersection of design and technology.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in front-end development is driven by a love for clean code, innovative solutions,
                and the endless possibilities of web technologies. I believe great user interfaces should be
                both visually appealing and intuitively functional.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400">Currently available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;