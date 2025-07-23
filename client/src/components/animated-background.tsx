import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Create animated particles
    const particleCount = 9;
    const particleElements: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle animate-particle";
      particle.style.left = `${(i + 1) * 10}%`;
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.animationDelay = `${i * 2}s`;
      particle.style.animationDuration = `${20 + (i % 3) * 5}s`;
      
      particles.appendChild(particle);
      particleElements.push(particle);
    }

    return () => {
      particleElements.forEach(particle => {
        if (particles.contains(particle)) {
          particles.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}
