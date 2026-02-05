import React from 'react';
import { BarChart3, Users, Globe, Instagram } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    title: '250K+ Subscriber Growth Proof',
    category: 'Channel Scaling',
    metrics: '0 to 250,000 in 3 Months',
    description: 'Built and scaled a YouTube channel from zero to 250,000 subscribers using a Shorts-only strategy, with a focus on hook structure, pacing, and repeatable publishing systems. The channel was later compromised through a fraudulent collaboration email and ultimately taken down, which reinforced the importance of platform security and operational safeguards.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/channel.png?raw=true',
    icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
  },
  {
    id: 'p2',
    title: 'Instagram Virality & Reach',
    category: 'Platform Growth',
    metrics: '15M+ Accounts Reached',
    description: 'Short-form content systems designed to maximize discovery and non-follower reach across platforms. Emphasis on consistency, volume, and retention-based structure.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/15M.png?raw=true',
    icon: <Instagram className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
  },
  {
    id: 'p3',
    title: 'YouTube Shorts Performance',
    category: 'Viral Strategy',
    metrics: '100M+ Shorts Views',
    description: 'Proven performance across multiple Shorts formats and niches. Edits optimized for early retention, pacing, and repeat view behavior.',
    thumbnail: 'https://github.com/kaizenxmoney-ui/Portfolio-Website/blob/main/100M.png?raw=true',
    icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-32 px-4 md:px-6 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        <div className="space-y-6 text-center md:text-left reveal">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
            Proof of Performance.
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
            Real results from short-form systems I’ve built and operated. These metrics represent scaled growth through strategic content systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col glass-effect rounded-[2rem] border border-zinc-800 overflow-hidden hover:border-zinc-700 hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.1)] transition-all duration-700 ease-out reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-zinc-900 shrink-0">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-xl">
                    {project.icon}
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-4 md:space-y-6 relative bg-zinc-950/40 backdrop-blur-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                    <p className="text-blue-400 font-black text-sm md:text-base uppercase tracking-wider">{project.metrics}</p>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-blue-600/10 via-zinc-900 to-purple-600/10 border border-zinc-800 flex flex-col items-center justify-center text-center space-y-8 overflow-hidden group reveal">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <Globe className="w-8 h-8 md:w-12 md:h-12 text-blue-400 animate-pulse" />
          </div>
          <div className="space-y-4 relative z-10">
            <p className="text-white text-xl md:text-4xl font-extrabold max-w-4xl tracking-tight leading-tight italic">
              "300M+ views generated isn't just a number—it's the result of testing thousands of hooks and perfecting retention systems."
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-[1px] w-8 md:w-12 bg-zinc-800"></div>
              <div className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em]">— STRATEGY PHILOSOPHY</div>
              <div className="h-[1px] w-8 md:w-12 bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};