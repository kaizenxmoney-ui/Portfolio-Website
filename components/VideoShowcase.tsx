
import React from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const videoSamples = [
  {
    id: '1',
    title: 'Hook & Pacing Mastery',
    description: 'Dynamic captions and high-retention structure.',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    title: 'Visual Storytelling',
    description: 'Advanced sound design and motion graphics.',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    title: 'Retention-First Edit',
    description: 'Optimized for watch-time and non-stop movement.',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    title: 'Content Funnel Edit',
    description: 'Designed to convert viewers into subscribers.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400',
  }
];

export const VideoShowcase: React.FC = () => {
  return (
    <section id="edits" className="py-16 md:py-24 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-4">
              Creative Execution. <Sparkles className="w-8 h-8 text-blue-500" />
            </h2>
            <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed">
              A selection of high-retention video edits focusing on pacing, hooks, and retention-driven systems.
            </p>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/1xACuCah5-Yme7vX_J4csnfDw5uoTy8fH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold hover:bg-zinc-800 transition-all group"
          >
            View Full Portfolio <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videoSamples.map((sample) => (
            <div key={sample.id} className="group relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <img 
                src={sample.thumbnail} 
                alt={sample.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 space-y-1">
                <h3 className="text-sm md:text-lg font-bold text-white leading-tight">{sample.title}</h3>
                <p className="text-[10px] md:text-xs text-zinc-400 line-clamp-2">{sample.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
