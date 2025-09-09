import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/6281234567890',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:shadow-green-500/25'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/johndoe',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/johndoe',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:john.doe@email.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/25'
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Floating planets */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-green-500/30 to-cyan-600/30 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mari berkolaborasi untuk menciptakan solusi teknologi yang menakjubkan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Send className="w-6 h-6 text-cyan-400 mr-3" />
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="name@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl text-white font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>

          {/* Contact info and social links */}
          <div className="space-y-8">
            {/* Contact information */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">john.doe@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 bg-gradient-to-br ${social.color} rounded-xl text-white transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${social.hoverColor} flex items-center space-x-3`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;