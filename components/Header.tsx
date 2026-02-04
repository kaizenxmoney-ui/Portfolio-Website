
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        {/* Desktop Nav */}
        <nav className={`hidden md:flex glass-effect rounded-full px-8 py-3 items-center gap-8 pointer-events-auto transition-all duration-300 ${scrolled ? 'bg-black/60 shadow-xl border-white/10' : 'border-white/5'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[10px] uppercase tracking-widest font-bold transition-all hover:text-white relative py-1 ${
                activeSection === item.id ? 'text-white' : 'text-zinc-500'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in duration-500" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden w-full flex justify-between items-center pointer-events-auto">
          <div 
            onClick={() => scrollTo('home')}
            className="w-10 h-10 rounded-full glass-effect flex items-center justify-center font-black text-white text-xs cursor-pointer active:scale-90 transition-transform"
          >
            A
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[45] bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-3xl font-bold transition-all ${
                activeSection === item.id ? 'text-white scale-110' : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
