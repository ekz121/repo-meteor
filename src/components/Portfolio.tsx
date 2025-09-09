import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'Aplikasi mobile e-commerce dengan fitur lengkap menggunakan React Native',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      demo: '#',
      github: '#',
      icon: Smartphone,
      category: 'Mobile'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard analitik real-time untuk monitoring data bisnis',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Chart.js', 'Firebase'],
      demo: '#',
      github: '#',
      icon: Globe,
      category: 'Web'
    },
    {
      id: 3,
      title: 'API Management System',
      description: 'Sistem manajemen API dengan dokumentasi otomatis',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      demo: '#',
      github: '#',
      icon: Database,
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Platform pembelajaran online untuk mahasiswa',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      demo: '#',
      github: '#',
      icon: Code,
      category: 'Web'
    },
    {
      id: 5,
      title: 'IoT Monitoring Dashboard',
      description: 'Dashboard untuk monitoring perangkat IoT secara real-time',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'MQTT', 'InfluxDB'],
      demo: '#',
      github: '#',
      icon: Globe,
      category: 'IoT'
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'Sistem voting berbasis blockchain untuk transparansi',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Solidity', 'Web3.js', 'React'],
      demo: '#',
      github: '#',
      icon: Database,
      category: 'Blockchain'
    }
  ];

  return (
    <section id="portfolio" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced space elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
          <div className="absolute inset-4 border border-dashed border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        </div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="absolute inset-2 border border-dashed border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        {/* Floating asteroids */}
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-60" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50" style={{ animation: 'float 6s ease-in-out infinite reverse' }}></div>
        
        {/* Distant stars */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Koleksi proyek teknologi yang telah saya kembangkan dengan berbagai teknologi modern
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Project icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-cyan-500/80 to-purple-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  {project.category}
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demo}
                    className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white hover:scale-110 transition-transform duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-full text-xs text-cyan-300 border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;