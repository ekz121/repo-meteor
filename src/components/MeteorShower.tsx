import React from 'react';

const MeteorShower: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Simple meteor effect */}
      <div className="absolute top-10 left-10 w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 left-1/3 w-1 h-12 bg-gradient-to-b from-purple-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default MeteorShower;