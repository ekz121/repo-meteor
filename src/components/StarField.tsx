import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced star system with multiple layers
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
      layer: number;
      color: string;
    }> = [];

    // Shooting stars
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
    }> = [];

    // Nebula particles
    const nebulaParticles: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      color: string;
      drift: number;
      phase: number;
    }> = [];

    // Generate enhanced stars with different colors and layers
    const starColors = ['#ffffff', '#00d4ff', '#8b5cf6', '#06ffa5', '#ff6b9d', '#ffd700'];
    for (let i = 0; i < 400; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speed: Math.random() * 0.8 + 0.1,
        opacity: Math.random() * 0.9 + 0.1,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 4) + 1,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }

    // Generate nebula particles
    for (let i = 0; i < 50; i++) {
      nebulaParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.1 + 0.02,
        color: ['#8b5cf6', '#00d4ff', '#06ffa5'][Math.floor(Math.random() * 3)],
        drift: Math.random() * 0.5 + 0.1,
        phase: Math.random() * Math.PI * 2
      });
    }

    let animationId: number;
    let scrollY = 0;
    let time = 0;

    const updateScrollY = () => {
      scrollY = window.pageYOffset;
    };

    window.addEventListener('scroll', updateScrollY);

    // Create shooting star
    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 8 + 4,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4,
          opacity: 1,
          life: 1
        });
      }
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create space gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#0a0a1a');
      gradient.addColorStop(0.3, '#1a0a2e');
      gradient.addColorStop(0.6, '#16213e');
      gradient.addColorStop(1, '#0f0f23');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula particles with enhanced effects
      nebulaParticles.forEach((particle, index) => {
        const parallaxFactor = 0.1;
        const adjustedY = (particle.y - scrollY * parallaxFactor) % (canvas.height + 200);
        
        particle.phase += 0.005;
        const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(particle.phase));
        
        // Create nebula glow effect
        const nebulaGradient = ctx.createRadialGradient(
          particle.x, adjustedY, 0,
          particle.x, adjustedY, particle.size
        );
        nebulaGradient.addColorStop(0, `${particle.color}${Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0')}`);
        nebulaGradient.addColorStop(0.5, `${particle.color}${Math.floor(pulseOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`);
        nebulaGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(
          particle.x - particle.size / 2,
          adjustedY - particle.size / 2,
          particle.size,
          particle.size
        );
        
        // Drift movement
        particle.x += Math.sin(time + index) * particle.drift;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.x < -100) particle.x = canvas.width + 100;
      });

      // Draw enhanced stars with parallax and colors
      stars.forEach((star, index) => {
        const parallaxFactor = star.layer * 0.15;
        const adjustedY = (star.y - scrollY * parallaxFactor) % (canvas.height + 100);
        
        star.twinklePhase += star.twinkleSpeed;
        const twinkleOpacity = star.opacity * (0.3 + 0.7 * Math.sin(star.twinklePhase));

        // Main star
        ctx.beginPath();
        ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.floor(twinkleOpacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Enhanced glow effect for larger stars
        if (star.size > 2) {
          ctx.beginPath();
          ctx.arc(star.x, adjustedY, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${star.color}${Math.floor(twinkleOpacity * 0.2 * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
          
          // Cross sparkle effect
          ctx.strokeStyle = `${star.color}${Math.floor(twinkleOpacity * 0.8 * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, adjustedY);
          ctx.lineTo(star.x + star.size * 2, adjustedY);
          ctx.moveTo(star.x, adjustedY - star.size * 2);
          ctx.lineTo(star.x, adjustedY + star.size * 2);
          ctx.stroke();
        }

        // Slow drift for stars
        star.x += Math.sin(time * 0.1 + index) * 0.1;
        if (star.x > canvas.width + 50) star.x = -50;
        if (star.x < -50) star.x = canvas.width + 50;
      });

      // Create and animate shooting stars
      createShootingStar();
      shootingStars.forEach((shootingStar, index) => {
        shootingStar.life -= 0.02;
        shootingStar.opacity = shootingStar.life;
        
        if (shootingStar.life <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        const dx = Math.cos(shootingStar.angle) * shootingStar.speed;
        const dy = Math.sin(shootingStar.angle) * shootingStar.speed;
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          shootingStar.x - dx * shootingStar.length / shootingStar.speed,
          shootingStar.y - dy * shootingStar.length / shootingStar.speed
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 212, 255, ${shootingStar.opacity * 0.8})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - dx * shootingStar.length / shootingStar.speed,
          shootingStar.y - dy * shootingStar.length / shootingStar.speed
        );
        ctx.stroke();
        
        shootingStar.x += dx;
        shootingStar.y += dy;
      });

      // Add distant galaxies
      if (Math.sin(time * 0.1) > 0.8) {
        ctx.save();
        ctx.globalAlpha = 0.1;
        const galaxyGradient = ctx.createRadialGradient(
          canvas.width * 0.8, canvas.height * 0.3, 0,
          canvas.width * 0.8, canvas.height * 0.3, 200
        );
        galaxyGradient.addColorStop(0, '#8b5cf6');
        galaxyGradient.addColorStop(0.5, '#00d4ff');
        galaxyGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = galaxyGradient;
        ctx.fillRect(canvas.width * 0.7, canvas.height * 0.2, 200, 200);
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateScrollY);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default StarField;