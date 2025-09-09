import React, { useEffect, useRef, useState } from 'react';

interface InteractiveStar {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  brightness: number;
  twinklePhase: number;
  twinkleSpeed: number;
  color: string;
  layer: number;
}

const InteractiveStarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<InteractiveStar[]>([]);
  const animationRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

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
      const stars: InteractiveStar[] = [];
      const starColors = [
        '#ffffff', '#fff8dc', '#ffe4b5', '#ffd700', '#ffb347',
        '#87ceeb', '#b0e0e6', '#e6e6fa', '#f0f8ff', '#fffacd',
        '#ff6b9d', '#c77dff', '#7209b7', '#560bad'
      ];

      for (let i = 0; i < 600; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const layer = Math.floor(Math.random() * 5) + 1;
        
        stars.push({
          x,
          y,
          originalX: x,
          originalY: y,
          size: Math.random() * (layer * 0.8) + 0.5,
          brightness: Math.random() * 0.8 + 0.2,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          layer
        });
      }
      starsRef.current = stars;
    };

    const drawStar = (star: InteractiveStar, time: number) => {
      // Update twinkle
      star.twinklePhase += star.twinkleSpeed;
      const twinkle = 0.4 + 0.6 * Math.sin(star.twinklePhase);
      const finalBrightness = star.brightness * twinkle;
      const finalSize = star.size * (0.8 + 0.4 * twinkle);

      // Mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(mousePos.x - star.x, 2) + Math.pow(mousePos.y - star.y, 2)
      );
      
      const interactionRadius = 150;
      let interactionStrength = 0;
      
      if (mouseDistance < interactionRadius && isMouseMoving) {
        interactionStrength = (interactionRadius - mouseDistance) / interactionRadius;
        
        // Move star away from mouse
        const angle = Math.atan2(star.y - mousePos.y, star.x - mousePos.x);
        const pushDistance = interactionStrength * 30;
        
        star.x = star.originalX + Math.cos(angle) * pushDistance;
        star.y = star.originalY + Math.sin(angle) * pushDistance;
        
        // Enhance brightness when interacting
        const enhancedBrightness = finalBrightness + interactionStrength * 0.5;
        const enhancedSize = finalSize + interactionStrength * 2;
        
        // Draw enhanced star
        ctx.beginPath();
        ctx.arc(star.x, star.y, enhancedSize, 0, Math.PI * 2);
        const alpha = Math.floor(enhancedBrightness * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${star.color}${alpha}`;
        ctx.fill();
        
        // Enhanced glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, enhancedSize * 4, 0, Math.PI * 2);
        const glowAlpha = Math.floor(enhancedBrightness * 0.3 * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${star.color}${glowAlpha}`;
        ctx.fill();
        
        // Connection lines to nearby stars
        starsRef.current.forEach(otherStar => {
          if (otherStar !== star) {
            const distance = Math.sqrt(
              Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
            );
            
            if (distance < 100 && Math.random() < 0.1) {
              ctx.strokeStyle = `${star.color}${Math.floor(interactionStrength * 0.3 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(otherStar.x, otherStar.y);
              ctx.stroke();
            }
          }
        });
        
      } else {
        // Return to original position
        star.x += (star.originalX - star.x) * 0.05;
        star.y += (star.originalY - star.y) * 0.05;
        
        // Draw normal star
        ctx.beginPath();
        ctx.arc(star.x, star.y, finalSize, 0, Math.PI * 2);
        const alpha = Math.floor(finalBrightness * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${star.color}${alpha}`;
        ctx.fill();
        
        // Normal glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, finalSize * 2.5, 0, Math.PI * 2);
          const glowAlpha = Math.floor(finalBrightness * 0.2 * 255).toString(16).padStart(2, '0');
          ctx.fillStyle = `${star.color}${glowAlpha}`;
          ctx.fill();
        }
      }

      // Parallax movement based on scroll
      const scrollY = window.pageYOffset;
      const parallaxFactor = star.layer * 0.1;
      star.originalY = (star.originalY - scrollY * parallaxFactor) % (canvas.height + 100);
      if (star.originalY < -100) star.originalY = canvas.height + 100;
    };

    const animate = () => {
      const time = Date.now();
      
      // Clear with slight trail effect
      ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw all stars
      starsRef.current.forEach(star => {
        drawStar(star, time);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      // Reset mouse moving flag after a delay
      setTimeout(() => setIsMouseMoving(false), 100);
    };

    const handleMouseLeave = () => {
      setIsMouseMoving(false);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos.x, mousePos.y, isMouseMoving]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #1a0a2e 30%, #16213e 60%, #0f0f23 100%)',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default InteractiveStarField;