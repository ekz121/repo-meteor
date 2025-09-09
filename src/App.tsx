import React, { useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import MeteorShower from './components/MeteorShower';
import CosmicAurora from './components/CosmicAurora';
import QuantumField from './components/QuantumField';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'John Doe - D3 Teknologi Informasi Portfolio';
    
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced space background */}
      <SpaceBackground />
      <QuantumField />
      <CosmicAurora />
      <MeteorShower />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <Profile />
        <About />
        <Portfolio />
        <Experience />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. Made with{' '}
            <span className="text-red-400">❤️</span>{' '}
            and modern web technologies.
          </p>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Scroll bar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }

        /* Line clamp utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth focus styles */
        *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default App;