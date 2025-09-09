import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  type: 'normal' | 'bright' | 'giant' | 'distant';
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  brightness: number;
  life: number;
  maxLife: number;
}

interface NebulaCloud {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  drift: number;
  phase: number;
}

const RealisticSpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const nebulaCloudsRef = useRef<NebulaCloud[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
      initializeNebulaClouds();
    };

    const initializeStars = () => {
      const stars: Star[] = [];
      const starColors = [
        '#ffffff', '#fff8dc', '#ffe4b5', '#ffd700', '#ffb347',
        '#87ceeb', '#b0e0e6', '#e6e6fa', '#f0f8ff', '#fffacd'
      ];

      // Generate different types of stars
      for (let i = 0; i < 800; i++) {
        const type = Math.random() < 0.7 ? 'normal' : 
                    Math.random() < 0.85 ? 'bright' : 
                    Math.random() < 0.95 ? 'giant' : 'distant';
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000 + 1,
          size: type === 'giant' ? Math.random() * 3 + 2 :
                type === 'bright' ? Math.random() * 2 + 1 :
                type === 'distant' ? Math.random() * 0.5 + 0.2 :
                Math.random() * 1.5 + 0.5,
          brightness: type === 'giant' ? Math.random() * 0.4 + 0.8 :
                     type === 'bright' ? Math.random() * 0.3 + 0.7 :
                     type === 'distant' ? Math.random() * 0.2 + 0.1 :
                     Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          type
        });
      }
      starsRef.current = stars;
    };

    const initializeNebulaClouds = () => {
      const clouds: NebulaCloud[] = [];
      const nebulaColors = ['#4a0e4e', '#1a0033', '#0d1b2a', '#2d1b69', '#415a77'];
      
      for (let i = 0; i < 15; i++) {
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 300 + 100,
          opacity: Math.random() * 0.15 + 0.05,
          color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
          drift: Math.random() * 0.3 + 0.1,
          phase: Math.random() * Math.PI * 2
        });
      }
      nebulaCloudsRef.current = clouds;
    };

    const createShootingStar = () => {
      if (Math.random() < 0.002) {
        const shootingStar: ShootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          vx: (Math.random() - 0.5) * 8 + 4,
          vy: Math.random() * 4 + 2,
          length: Math.random() * 100 + 50,
          brightness: 1,
          life: 1,
          maxLife: Math.random() * 60 + 40
        };
        shootingStarsRef.current.push(shootingStar);
      }
    };

    const drawStar = (star: Star, scrollY: number) => {
      const parallaxFactor = (1000 - star.z) / 1000 * 0.5;
      const adjustedY = (star.y - scrollY * parallaxFactor) % (canvas.height + 200);
      const adjustedX = star.x + Math.sin(Date.now() * 0.0001 + star.twinklePhase) * 0.5;
      
      star.twinklePhase += star.twinkleSpeed;
      const twinkle = 0.3 + 0.7 * Math.sin(star.twinklePhase);
      const finalBrightness = star.brightness * twinkle;
      const finalSize = star.size * (0.8 + 0.4 * twinkle);

      // Main star body
      ctx.beginPath();
      ctx.arc(adjustedX, adjustedY, finalSize, 0, Math.PI * 2);
      
      const alpha = Math.floor(finalBrightness * 255).toString(16).padStart(2, '0');
      ctx.fillStyle = `${star.color}${alpha}`;
      ctx.fill();

      // Glow effect for brighter stars
      if (star.type === 'bright' || star.type === 'giant') {
        ctx.beginPath();
        ctx.arc(adjustedX, adjustedY, finalSize * 3, 0, Math.PI * 2);
        const glowAlpha = Math.floor(finalBrightness * 0.3 * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${star.color}${glowAlpha}`;
        ctx.fill();
      }

      // Diffraction spikes for giant stars
      if (star.type === 'giant' && finalBrightness > 0.7) {
        ctx.strokeStyle = `${star.color}${Math.floor(finalBrightness * 0.8 * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // Horizontal spike
        ctx.moveTo(adjustedX - finalSize * 4, adjustedY);
        ctx.lineTo(adjustedX + finalSize * 4, adjustedY);
        
        // Vertical spike
        ctx.moveTo(adjustedX, adjustedY - finalSize * 4);
        ctx.lineTo(adjustedX, adjustedY + finalSize * 4);
        
        // Diagonal spikes
        ctx.moveTo(adjustedX - finalSize * 2.8, adjustedY - finalSize * 2.8);
        ctx.lineTo(adjustedX + finalSize * 2.8, adjustedY + finalSize * 2.8);
        ctx.moveTo(adjustedX - finalSize * 2.8, adjustedY + finalSize * 2.8);
        ctx.lineTo(adjustedX + finalSize * 2.8, adjustedY - finalSize * 2.8);
        
        ctx.stroke();
      }
    };

    const drawNebulaCloud = (cloud: NebulaCloud, time: number) => {
      cloud.phase += 0.003;
      const pulseOpacity = cloud.opacity * (0.7 + 0.3 * Math.sin(cloud.phase));
      
      // Create nebula gradient
      const gradient = ctx.createRadialGradient(
        cloud.x, cloud.y, 0,
        cloud.x, cloud.y, cloud.size
      );
      
      const centerAlpha = Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0');
      const edgeAlpha = Math.floor(pulseOpacity * 0.1 * 255).toString(16).padStart(2, '0');
      
      gradient.addColorStop(0, `${cloud.color}${centerAlpha}`);
      gradient.addColorStop(0.3, `${cloud.color}${Math.floor(pulseOpacity * 0.6 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.7, `${cloud.color}${Math.floor(pulseOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${cloud.color}${edgeAlpha}`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(
        cloud.x - cloud.size / 2,
        cloud.y - cloud.size / 2,
        cloud.size,
        cloud.size
      );
      
      // Drift movement
      cloud.x += Math.sin(time * 0.0001 + cloud.phase) * cloud.drift;
      cloud.y += Math.cos(time * 0.00005 + cloud.phase) * cloud.drift * 0.5;
      
      // Wrap around screen
      if (cloud.x > canvas.width + cloud.size) cloud.x = -cloud.size;
      if (cloud.x < -cloud.size) cloud.x = canvas.width + cloud.size;
      if (cloud.y > canvas.height + cloud.size) cloud.y = -cloud.size;
      if (cloud.y < -cloud.size) cloud.y = canvas.height + cloud.size;
    };

    const drawShootingStar = (shootingStar: ShootingStar) => {
      shootingStar.life--;
      shootingStar.brightness = shootingStar.life / shootingStar.maxLife;
      
      if (shootingStar.life <= 0) return false;
      
      const tailLength = shootingStar.length * shootingStar.brightness;
      
      // Create gradient for the trail
      const gradient = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.vx * tailLength / 10,
        shootingStar.y - shootingStar.vy * tailLength / 10
      );
      
      const headAlpha = Math.floor(shootingStar.brightness * 255).toString(16).padStart(2, '0');
      const tailAlpha = '00';
      
      gradient.addColorStop(0, `#ffffff${headAlpha}`);
      gradient.addColorStop(0.3, `#87ceeb${Math.floor(shootingStar.brightness * 0.8 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `#ffffff${tailAlpha}`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.vx * tailLength / 10,
        shootingStar.y - shootingStar.vy * tailLength / 10
      );
      ctx.stroke();
      
      // Head glow
      ctx.beginPath();
      ctx.arc(shootingStar.x, shootingStar.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `#ffffff${headAlpha}`;
      ctx.fill();
      
      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      
      return true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    const animate = () => {
      const time = Date.now();
      const scrollY = window.pageYOffset;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create deep space gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2 + mousePos.x * 50,
        canvas.height / 2 + mousePos.y * 50,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      
      bgGradient.addColorStop(0, '#0a0a1a');
      bgGradient.addColorStop(0.3, '#1a0a2e');
      bgGradient.addColorStop(0.6, '#16213e');
      bgGradient.addColorStop(1, '#0f0f23');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds
      nebulaCloudsRef.current.forEach(cloud => {
        drawNebulaCloud(cloud, time);
      });
      
      // Draw stars with parallax
      starsRef.current.forEach(star => {
        drawStar(star, scrollY);
      });
      
      // Create and draw shooting stars
      createShootingStar();
      shootingStarsRef.current = shootingStarsRef.current.filter(drawShootingStar);
      
      // Add subtle mouse interaction effect
      if (mousePos.x !== 0 || mousePos.y !== 0) {
        const interactionGradient = ctx.createRadialGradient(
          canvas.width / 2 + mousePos.x * 100,
          canvas.height / 2 + mousePos.y * 100,
          0,
          canvas.width / 2 + mousePos.x * 100,
          canvas.height / 2 + mousePos.y * 100,
          200
        );
        
        interactionGradient.addColorStop(0, 'rgba(135, 206, 235, 0.05)');
        interactionGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = interactionGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #0a0a1a, #1a0a2e, #16213e, #0f0f23)' }}
    />
  );
};

export default RealisticSpaceBackground;