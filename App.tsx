
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
    // Scroll handling for active navigation state
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'edits', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    };

    window.addEventListener('scroll', handleScroll);

    // Refined IntersectionObserver for staggered animations
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px" 
    };

    let staggerCount = 0;
    let lastToggleTime = 0;

    const observer = new IntersectionObserver((entries) => {
      const now = Date.now();
      
      if (now - lastToggleTime > 500) {
        staggerCount = 0;
      }
      lastToggleTime = now;

      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
          const element = entry.target as HTMLElement;
          
          element.style.transitionDelay = `${staggerCount * 150}ms`;
          element.classList.add('is-visible');
          
          staggerCount++;
        }
      });
    }, observerOptions);

    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach((h2) => {
      h2.classList.add('reveal-h2');
      observer.observe(h2);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Header activeSection={activeSection} />
      <main>
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
