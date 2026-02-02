
import React from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const videoSamples = [
  {
    id: '1',
    title: 'Hook & Pacing Mastery',
    description: 'Dynamic captions and high-retention structure.',
    thumbnail: 'https://images.unsplash.com/photo-1542204113-e93526282502?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '2',
    title: 'Visual Storytelling',
    description: 'Advanced sound design and motion graphics.',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '3',
    title: 'Retention-First Edit',
    description: 'Optimized for watch-time and non-stop movement.',
    thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '4',
    title: 'Content Funnel Edit',
    description: 'Designed to convert viewers into subscribers.',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=600',
  }
];

export const VideoShowcase: React.FC = () => {
  return (
    <section id="edits" className="py-20 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white flex items-center gap-4">
              Portfolio. <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg md:text-xl leading-relaxed">
              A selection of high-retention video edits focusing on pacing, hooks, and retention-driven systems.
            </p>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/1xACuCah5-Yme7vX_J4csnfDw5uoTy8fH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-black uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all group shadow-2xl"
          >
            Drive <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {videoSamples.map((sample) => (
            <div key={sample.id} className="group relative aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img 
                src={sample.thumbnail} 
                alt={sample.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-base md:text-xl font-black text-white leading-tight tracking-tight uppercase">{sample.title}</h3>
                <p className="text-[10px] md:text-xs text-zinc-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{sample.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
