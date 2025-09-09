import React, { useState } from 'react';
import { Award, Briefcase, Calendar, GraduationCap, Trophy, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      id: 1,
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'TechCorp Indonesia',
      period: 'Jun 2024 - Aug 2024',
      description: 'Mengembangkan aplikasi web menggunakan React dan Tailwind CSS. Berkolaborasi dengan tim untuk menciptakan user interface yang responsive dan user-friendly.',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      type: 'organization',
      title: 'Ketua Divisi IT',
      company: 'Himpunan Mahasiswa TI',
      period: 'Jan 2024 - Dec 2024',
      description: 'Memimpin tim pengembangan sistem informasi mahasiswa dan mengelola infrastruktur IT organisasi.',
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      type: 'competition',
      title: 'Juara 2 Hackathon',
      company: 'National Tech Challenge 2024',
      period: 'Mar 2024',
      description: 'Mengembangkan solusi IoT untuk smart city bersama tim. Berhasil menciptakan prototype yang inovatif dan applicable.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      type: 'internship',
      title: 'Web Developer',
      company: 'StartupHub',
      period: 'Jan 2024 - Mar 2024',
      description: 'Membangun dan maintain website company profile dan e-commerce menggunakan JavaScript dan PHP.',
      icon: Briefcase,
      color: 'from-green-500 to-blue-600'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Sertifikasi dasar cloud computing dengan AWS',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 2,
      title: 'Google IT Support Professional',
      issuer: 'Google Career Certificates',
      date: '2024',
      description: 'Program sertifikasi komprehensif IT support',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      description: 'Sertifikasi pengembangan aplikasi React',
      icon: Award,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      issuer: 'Cisco',
      date: '2023',
      description: 'Sertifikasi dasar keamanan siber',
      icon: Award,
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Enhanced space beams */}
        <div className="absolute top-20 left-1/4 w-2 h-96 bg-gradient-to-b from-cyan-500/20 to-transparent transform -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-96 bg-gradient-to-t from-purple-500/20 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Cosmic dust */}
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
        
        {/* Orbital paths */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dashed border-gray-600/20 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-gray-600/10 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Journey & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Perjalanan dan pencapaian dalam dunia teknologi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-700/50">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-5 h-5 inline-block mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Award className="w-5 h-5 inline-block mr-2" />
              Certificates
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'experience' ? (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-gray-600 to-gray-800"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center border-4 border-gray-900`}>
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-3">{cert.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;