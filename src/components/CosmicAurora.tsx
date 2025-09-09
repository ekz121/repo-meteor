import React from 'react';

const CosmicAurora: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 animate-pulse"></div>
    </div>
  );
};

export default CosmicAurora;