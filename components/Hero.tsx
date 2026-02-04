
import React from 'react';
import { ArrowRight, Play, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12">
        {/* Personal Intro Section */}
        <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
              <img 
                src="https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/alvinlogo.png?raw=true 
                alt="Alvin Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-xl md:text-3xl font-medium text-zinc-300 block">Hi, I'm Alvin —</span>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-400 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for new projects
            </div>
          </div>
        </div>
        
        {/* Header container with extra padding to prevent gradient clipping */}
        <div className="relative py-4 md:py-8">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] md:leading-[0.95] text-gradient">
            Short-Form Video Editor & Content Strategist
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
          I build high-retention content systems that scale. 
          Generated <span className="text-white font-semibold">300M+ views</span> across personal and client projects.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 px-4">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group text-lg"
          >
            View Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 glass-effect text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="mt-20 md:mt-32 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-6">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-extrabold text-lg md:text-2xl tracking-tighter">300M+ VIEWS</span>
        </div>
        <div className="flex items-center gap-3">
          <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          <span className="font-extrabold text-lg md:text-2xl tracking-tighter">250K+ SUBS</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="font-extrabold text-lg md:text-2xl tracking-tighter uppercase">RETENTION SYSTEMS</span>
        </div>
      </div>
    </section>
  );
};
