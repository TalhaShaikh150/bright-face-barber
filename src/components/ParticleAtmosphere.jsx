"use client";
import { useEffect, useRef } from 'react';

export default function ParticleAtmosphere({ count = 35, speed = 0.4, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Palette: Subtle British Racing Green & Emerald Glow with Champagne Motes
    const colors = [
      'rgba(16, 185, 129, ',  // Emerald Green
      'rgba(52, 211, 153, ',  // Light Emerald
      'rgba(5, 150, 105, ',   // Deep Emerald
      'rgba(245, 158, 11, ',  // Warm Amber / Gold
    ];

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      baseAlpha: Math.random() * 0.4 + 0.15,
      alphaSpeed: (Math.random() * 0.01 + 0.005),
      alphaOffset: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * speed * 0.5,
      vy: -(Math.random() * speed + 0.15),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around seamlessly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Gentle breathing pulse
        const currentAlpha = p.baseAlpha + Math.sin(frame * p.alphaSpeed + p.alphaOffset) * 0.12;
        const safeAlpha = Math.max(0.04, Math.min(0.6, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${safeAlpha})`;
        ctx.shadowBlur = p.radius > 1.8 ? 12 : 6;
        ctx.shadowColor = `${p.color}0.4)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
