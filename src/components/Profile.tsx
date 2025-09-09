import React, { useState } from 'react';
import { User, MapPin, Calendar, GraduationCap, Award, Code2, Heart, Coffee, Gamepad2, Music, Camera, Book } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const personalInfo = {
    name: 'John Doe',
    age: 20,
    location: 'Jakarta, Indonesia',
    university: 'Universitas Teknologi Digital',
    major: 'D3 Teknologi Informasi',
    semester: '5th Semester',
    gpa: '3.85/4.00',
    status: 'Active Student'
  };

  const interests = [
    { icon: Code2, name: 'Programming', color: 'from-blue-500 to-cyan-600' },
    { icon: Gamepad2, name: 'Gaming', color: 'from-purple-500 to-pink-600' },
    { icon: Music, name: 'Music', color: 'from-green-500 to-blue-600' },
    { icon: Camera, name: 'Photography', color: 'from-yellow-500 to-orange-600' },
    { icon: Book, name: 'Reading', color: 'from-indigo-500 to-purple-600' },
    { icon: Coffee, name: 'Coffee', color: 'from-amber-600 to-orange-700' }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Achieved GPA above 3.5 for 3 consecutive semesters',
      date: '2023-2024',
      icon: Award,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Best Final Project',
      description: 'Outstanding final project in Web Development course',
      date: '2024',
      icon: Code2,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Programming Competition',
      description: '2nd Place in National Programming Contest',
      date: '2024',
      icon: Award,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="profile" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-4 h-4 border-2 border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Profile
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about me, my journey, and what drives my passion for technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 sticky top-24">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full border-4 border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                  <User className="w-16 h-16 text-cyan-400" />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-1/2 transform translate-x-6 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
                {/* Orbital ring */}
                <div className="absolute inset-0 border-2 border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                <p className="text-cyan-400 font-medium mb-1">{personalInfo.major}</p>
                <p className="text-gray-400 text-sm">{personalInfo.university}</p>
              </div>

              {/* Quick stats */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300 text-sm">{personalInfo.semester}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">GPA: {personalInfo.gpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab navigation */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setActiveTab('personal')}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === 'personal'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <User className="w-5 h-5 inline-block mr-2" />
                  Personal
                </button>
                <button
                  onClick={() => setActiveTab('interests')}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === 'interests'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart className="w-5 h-5 inline-block mr-2" />
                  Interests
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === 'achievements'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Award className="w-5 h-5 inline-block mr-2" />
                  Achievements
                </button>
              </div>
            </div>

            {/* Tab content */}
            {activeTab === 'personal' && (
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <User className="w-6 h-6 text-cyan-400 mr-3" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Full Name</label>
                      <p className="text-white font-medium">{personalInfo.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Age</label>
                      <p className="text-white font-medium">{personalInfo.age} years old</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Location</label>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Status</label>
                      <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        {personalInfo.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">University</label>
                      <p className="text-white font-medium">{personalInfo.university}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Major</label>
                      <p className="text-white font-medium">{personalInfo.major}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Current Semester</label>
                      <p className="text-white font-medium">{personalInfo.semester}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">GPA</label>
                      <p className="text-white font-medium">{personalInfo.gpa}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">About Me</h4>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate D3 Information Technology student with a deep love for coding and technology innovation. 
                    My journey in tech started with curiosity about how things work, and it has evolved into a commitment to 
                    creating meaningful digital solutions. I enjoy exploring new technologies, participating in coding competitions, 
                    and collaborating on projects that challenge my skills and creativity.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Heart className="w-6 h-6 text-purple-400 mr-3" />
                  Interests & Hobbies
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={interest.name}
                      className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <interest.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{interest.name}</h4>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${interest.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: `${Math.random() * 40 + 60}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">What Drives Me</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond coding, I find inspiration in various creative outlets. Gaming helps me understand user experience 
                    and interactive design, while photography teaches me about composition and visual storytelling. Music fuels 
                    my creativity during long coding sessions, and reading keeps me updated with the latest tech trends and innovations.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-3" />
                  Achievements & Recognition
                </h3>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.title}
                      className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/50 hover:border-yellow-500/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-white">{achievement.title}</h4>
                          <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">Goals & Aspirations</h4>
                  <p className="text-gray-300 leading-relaxed">
                    I'm constantly striving to push the boundaries of what's possible with technology. My goal is to become 
                    a full-stack developer who can create innovative solutions that make a real difference in people's lives. 
                    I'm particularly interested in AI, machine learning, and sustainable technology solutions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;