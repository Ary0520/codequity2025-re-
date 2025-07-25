'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Submission from './components/Submission';
import Terms from './components/Terms';
import Register from './components/Register';
import Footer from './components/Footer';
import Nft from './components/nft';
import NftExplore from './components/NftExplore';
import { useState } from 'react';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showNftExplore, setShowNftExplore] = useState(false);

  useEffect(() => {
    // Smooth scrolling setup
    gsap.config({
      force3D: true,
    });

    // Global scroll animations
    gsap.utils.toArray('section').forEach((section) => {
      const el = section as HTMLElement;
      gsap.fromTo(el, 
        {
          opacity: 0.8,
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (showNftExplore) {
    return <NftExplore isExplorePage={true} onBackHome={() => setShowNftExplore(false)} />;
  }

  return (
    <div className="min-h-screen bg-tech-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Overview />
      <Tracks />
      <Timeline />
      <Nft onExplore={() => setShowNftExplore(true)} />
      <Submission />
      <Terms />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
