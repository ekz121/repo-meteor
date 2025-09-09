import React from 'react';
import { ChevronDown, Code, Database, Server, Rocket, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            John Doe
          </h1>
          
          <div className="space-y-3 mb-8">
            <div className="inline-flex items-center space-x-3 bg-blue-600/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/40">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-lg">D3 Teknologi Informasi</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Universitas Teknologi Digital
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Exploring Technology Beyond Limits</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <div className="p-4 bg-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <Database className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-4 bg-green-500/20 rounded-full border border-green-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <Server className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Passionate about creating innovative solutions that bridge the gap between imagination and reality through cutting-edge technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 text-cyan-300 text-sm">
              Full Stack Developer
            </div>
            <div className="px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-300 text-sm">
              UI/UX Enthusiast
            </div>
            <div className="px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/20 text-green-300 text-sm">
              Tech Explorer
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;