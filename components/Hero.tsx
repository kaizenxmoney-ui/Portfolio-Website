
import React from 'react';
import { ArrowRight, Play, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl text-center space-y-6 md:space-y-10">
        {/* Personal Intro Section */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://drive.google.com/uc?export=view&id=1utUDcXonsoo59L-WO1YUzec0tCaMx8jk" 
              alt="Alvin Profile" 
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-zinc-800 bg-zinc-900 object-cover shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alvin";
              }}
            />
          </div>
          <div className="space-y-2">
            <span className="text-lg md:text-2xl font-medium text-zinc-300">Hi, I'm Alvin —</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Available
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1] text-gradient">
          Short-Form Video Editor & Content Strategist
        </h1>
        
        <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2">
          I build high-retention content systems that scale. 
          Generated <span className="text-white font-semibold">300M+ views</span> across personal and client projects.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 sm:px-0">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12 opacity-40 grayscale filter px-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="font-bold text-sm md:text-xl tracking-tight">300M+ Total Views</span>
        </div>
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 fill-current" />
          <span className="font-bold text-sm md:text-xl tracking-tight">250K+ Subs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm md:text-xl tracking-tight uppercase">Retention Focused</span>
        </div>
      </div>
    </section>
  );
};
