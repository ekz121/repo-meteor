import React, { useEffect, useRef } from 'react';

interface ParallaxStar {
  x: number;
  y: number;
  z: number;
  prevZ: number;
  size: number;
  color: string;
  brightness: number;
}

const EnhancedParallaxStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<ParallaxStar[]>([]);
  const animationRef = useRef<number>();
  const speedRef = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const stars: ParallaxStar[] = [];
      const starColors = ['#ffffff', '#fff8dc', '#87ceeb', '#ffd700', '#ffb6c1'];
      
      for (let i = 0; i < 1000; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * 1000,
          prevZ: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          brightness: Math.random() * 0.8 + 0.2
        });
      }
      starsRef.current = stars;
    };

    const updateStars = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      starsRef.current.forEach(star => {
        star.prevZ = star.z;
        star.z -= speedRef.current;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * 2000;
          star.y = (Math.random() - 0.5) * 2000;
          star.z = 1000;
          star.prevZ = 1000;
        }

        const x = (star.x / star.z) * centerX + centerX;
        const y = (star.y / star.z) * centerY + centerY;
        const prevX = (star.x / star.prevZ) * centerX + centerX;
        const prevY = (star.y / star.prevZ) * centerY + centerY;

        const size = (1 - star.z / 1000) * star.size;
        const opacity = (1 - star.z / 1000) * star.brightness;

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          // Draw star trail
          ctx.strokeStyle = `${star.color}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = size;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();

          // Draw star
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();

          // Add glow for brighter stars
          if (size > 1.5) {
            ctx.beginPath();
            ctx.arc(x, y, size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `${star.color}${Math.floor(opacity * 0.2 * 255).toString(16).padStart(2, '0')}`;
            ctx.fill();
          }
        }
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      updateStars();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / canvas.width - 0.5) * 2;
      const mouseY = (e.clientY / canvas.height - 0.5) * 2;
      speedRef.current = 0.5 + Math.sqrt(mouseX * mouseX + mouseY * mouseY) * 2;
    };

    const handleScroll = () => {
      const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
      speedRef.current = 0.5 + scrollPercent * 3;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #1a0a2e 50%, #0f0f23 100%)',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default EnhancedParallaxStars;