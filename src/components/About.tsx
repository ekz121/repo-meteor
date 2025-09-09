import React from 'react';
import { Code2, Database, Server, Smartphone, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code2, name: 'Frontend Development', description: 'React, Vue, HTML/CSS, JavaScript', color: 'from-cyan-500 to-blue-600' },
    { icon: Database, name: 'Database Management', description: 'MySQL, PostgreSQL, MongoDB', color: 'from-purple-500 to-pink-600' },
    { icon: Server, name: 'Backend Development', description: 'Node.js, PHP, Python', color: 'from-green-500 to-cyan-600' },
    { icon: Smartphone, name: 'Mobile Development', description: 'React Native, Flutter', color: 'from-orange-500 to-red-600' },
    { icon: Globe, name: 'Web Technologies', description: 'RESTful API, GraphQL', color: 'from-indigo-500 to-purple-600' },
    { icon: Shield, name: 'Cybersecurity', description: 'Network Security, Ethical Hacking', color: 'from-red-500 to-pink-600' }
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate <span className="text-cyan-400">Space-Age Developer</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a D3 Information Technology student, I'm on a mission to explore the infinite possibilities of technology. 
                Like navigating through the cosmos, I'm constantly discovering new programming languages, frameworks, and innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey spans across web development, mobile applications, and emerging technologies. I believe in creating 
                digital experiences that are as boundless and inspiring as the universe itself.
              </p>
            </div>
          </div>

          {/* Holographic avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full border-4 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-cyan-500/20">
                <div className="w-60 h-60 bg-gradient-to-br from-blue-600/30 to-purple-700/30 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30">
                  <Code2 className="w-24 h-24 text-cyan-400 animate-pulse" />
                </div>
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 border-2 border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border-2 border-dashed border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{skill.name}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;