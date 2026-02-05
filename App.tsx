import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { VideoShowcase } from './components/VideoShowcase';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Throttled scroll handler for active section tracking
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'work', 'edits', 'services', 'process', 'contact'];
          const scrollPosition = window.scrollY + 120;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                setActiveSection(section);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Premium Reveal Observer - Only active on Desktop
    if (window.innerWidth >= 768) {
      const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    } else {
      // Mobile: Immediately show all revealed elements
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => el.classList.add('is-visible'));
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <Header activeSection={activeSection} />
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <VideoShowcase />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;