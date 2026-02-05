import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Proof' },
    { id: 'edits', label: 'Portfolio' },
    { id: 'services', label: 'Strategy' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[60] flex justify-center p-4 md:p-6 pointer-events-none">
        {/* Desktop Nav */}
        <nav className={`hidden md:flex glass-effect rounded-full px-8 py-3 items-center gap-8 pointer-events-auto transition-all duration-500 ${scrolled ? 'bg-black/80 shadow-2xl border-white/10' : 'border-white/5'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:text-white relative py-1 select-none ${
                activeSection === item.id ? 'text-white' : 'text-zinc-500'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full flex justify-between items-center pointer-events-auto px-2">
          <button 
            onClick={() => scrollTo('home')}
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center font-black text-white text-sm cursor-pointer active:scale-90 transition-transform bg-black/40 border border-white/10 select-none"
            aria-label="Go to home"
          >
            A
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white active:scale-90 transition-transform bg-black/40 border border-white/10 select-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-black/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col gap-4 text-center w-full px-12">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-3xl font-black uppercase tracking-tighter transition-all py-4 active:scale-95 select-none ${
                activeSection === item.id ? 'text-blue-500' : 'text-zinc-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-10 border-t border-zinc-900 mt-6">
             <a 
              href="mailto:contactalvinforwork@gmail.com" 
              className="px-8 py-4 bg-white text-black rounded-2xl font-black text-xs tracking-[0.2em] uppercase active:scale-95 inline-block"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </>
  );
};