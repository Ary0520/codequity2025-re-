'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for hero text
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      y: 100,
      opacity: 0.8,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3');

    // Create floating particles
    if (particlesRef.current) {
      const particles = [];
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-neon-green rounded-full opacity-20';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesRef.current.appendChild(particle);
        particles.push(particle);
      }

      // Animate particles
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -100,
          x: Math.random() * 200 - 100,
          duration: 4 + Math.random() * 4,
          repeat: -1,
          delay: Math.random() * 2,
          ease: 'power1.inOut'
        });
      });
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Animated background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-black/20 to-tech-black/80" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="hero-title font-space-grotesk font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
            <span className="text-white">Code</span>
            <span className="text-neon-green">quity</span>{' '}
            <span className="text-neon-green">2025</span>
            <br />
            <span className="text-gray-100 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
              Build What Deserves to Exist
            </span>
          </h1>

          {/* Subtitle */}
          {/* <p className="hero-subtitle text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 font-inter font-light max-w-3xl mx-auto">
            Not your average hackathon. This is your{' '}
            <span className="text-electric-purple font-medium">launchpad</span>.
          </p> */}

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection('#register')}
              size="lg"
              className="bg-neon-green text-tech-black hover:bg-neon-green/90 font-semibold px-8 py-4 text-lg glow-effect group transition-all duration-300 hover:scale-105"
            >
              Register Now
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('#overview')}
              variant="outline"
              size="lg"
              className="border-2 border-gray-500 text-gray-200 hover:text-white hover:border-electric-purple bg-transparent px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          {/* Scroll indicator */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;