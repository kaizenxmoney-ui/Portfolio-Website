import React from 'react';
import { ArrowRight, Play, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background radial gradient - Optimized for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[800px] h-[280px] md:h-[800px] bg-blue-600/5 md:bg-blue-600/10 blur-[40px] md:blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-5xl w-full text-center space-y-6 md:space-y-12">
        {/* Personal Intro Section */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-10 md:opacity-20 transition duration-1000"></div>
            <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
              <img 
                src="https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/alvinlogo.png?raw=true" 
                alt="Alvin Profile" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xl md:text-3xl font-medium text-zinc-400 block tracking-tight">Hi, I'm Alvin —</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/50 text-[9px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 hidden md:block animate-pulse" />
              Open to scale your brand
            </div>
          </div>
        </div>
        
        {/* Header container with responsive scaling */}
        <div className="relative">
          <h1 className="text-[2.6rem] sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] md:leading-[0.95] text-gradient px-1">
            Short-Form Video Editor & Content Strategist
          </h1>
        </div>
        
        <p className="text-sm md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 font-medium">
          I build high-retention content systems that scale. 
          Generated <span className="text-white font-bold">300M+ views</span> across personal and client projects.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-4">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 md:py-5 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group text-base md:text-lg active:scale-95"
          >
            View Work
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 md:group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 md:py-5 bg-zinc-900/50 md:glass-effect border border-zinc-800 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-base md:text-lg active:scale-95"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="mt-12 md:mt-32 flex flex-wrap justify-center items-center gap-5 md:gap-16 opacity-40 md:grayscale md:hover:grayscale-0 transition-all duration-700 px-6">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 md:w-6 md:h-6" />
          <span className="font-extrabold text-sm md:text-2xl tracking-tighter">300M+ VIEWS</span>
        </div>
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 md:w-6 md:h-6 fill-current" />
          <span className="font-extrabold text-sm md:text-2xl tracking-tighter">250K+ SUBS</span>
        </div>
      </div>
    </section>
  );
};