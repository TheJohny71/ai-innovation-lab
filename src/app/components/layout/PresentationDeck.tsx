'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Lightbulb, CircleCheck, Command, Database, Search } from 'lucide-react';

// Keep your existing apps data
const apps = [
  {
    id: 'ai-analysis',
    title: 'AI Analysis',
    subtitle: 'Enhanced Legal Research',
    description: 'Advanced AI-powered legal document analysis and research assistance.',
    icon: Command,
    color: 'from-purple-500 to-indigo-500',
    features: ['Natural Language Processing', 'Citation Checking', 'Key Fact Extraction'],
    metrics: { timeReduction: '40%', accuracyRate: '85%' }
  },
  // ... rest of your apps data
];

// Particle Canvas Component
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.5;
        this.opacity = Math.random() * 0.2 + 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const particles = Array.from({ length: 50 }, () => new Particle());

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (frameCountRef.current % 2 === 0) {
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        particles.forEach((p1, i) => {
          particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 * (1 - distance / 100)})`;
              ctx.stroke();
            }
          });
        });
      }
      
      frameCountRef.current++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
};

// Main Component
const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  // Preserve your existing slides array structure
  const slides = [
    {
      id: 'welcome',
      title: 'Welcome',
      component: () => (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center relative z-10">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              AI Innovation Lab
            </h1>
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leading innovation through human-led, AI-driven mindset
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { title: 'Enhanced Client Service', icon: Shield },
                { title: 'Accelerated Workflows', icon: Zap },
                { title: 'Practice Innovation', icon: Lightbulb }
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700 
                    flex flex-col items-center text-center transition-all duration-300 
                    hover:border-emerald-500/50 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  <div className="w-10 h-10 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center 
                    group-hover:bg-emerald-500/20 transition-colors">
                    <card.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-medium">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // ... Keep your other existing slides
  ];

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      <ParticleCanvas />
      
      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500/30 -top-48 -left-48" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-500/30 -bottom-48 -right-48" />
      </div>

      <div className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        {slides[currentSlide].component()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8">
        <button
          onClick={() => setCurrentSlide(prev => prev - 1)}
          disabled={currentSlide === 0}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronLeft className={`w-5 h-5 ${
            currentSlide === 0
              ? 'text-gray-600' 
              : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>

        <div className="flex items-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {currentSlide !== index && (
                <div className="w-2 h-2 rounded-full bg-gray-600 mr-2" />
              )}
              {slide.title}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide(prev => prev + 1)}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronRight className={`w-5 h-5 ${
            currentSlide === slides.length - 1
              ? 'text-gray-600' 
              : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>
      </nav>
    </div>
  );
};

export default PresentationDeck;
