
import React from 'react';
import { TrendingUp, BarChart3, Users, Award, Instagram, Globe } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: '250K+ Subscriber Growth Proof',
    category: 'Channel Scaling',
    metrics: '0 to 250,000 in 3 Months',
    description: 'Dashboard showing the vertical growth trajectory using Shorts-only strategy in 2023.',
    thumbnail: 'https://drive.google.com/file/d/1BkWaTGO4c8Sbr13r5_vpa6vUhpGKOUdP/view?usp=sharing',
    icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
  },
  {
    id: '2',
    title: 'Instagram Virality & Reach',
    category: 'Platform Growth',
    metrics: '5.8M+ Accounts Reached',
    description: 'Proof of content systems designed to break through the algorithm and reach non-followers.',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
    icon: <Instagram className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
  },
  {
    id: '3',
    title: 'YouTube Shorts Performance',
    category: 'Viral Strategy',
    metrics: '2.5M+ Views / Video',
    description: 'Consistent high-performance benchmarks across various content pillars.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            Proof of Performance. <span className="text-blue-500 text-2xl md:text-4xl">300M+ Total Views.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-base md:text-lg leading-relaxed mx-auto md:mx-0">
            I don't just talk about growth—I show it. Below are verified analytics from channels and accounts I've scaled and managed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative glass-effect rounded-[1.5rem] md:rounded-[2rem] border border-zinc-800 overflow-hidden hover:border-zinc-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)] transition-all duration-500 ease-out"
            >
              <div className="aspect-video relative overflow-hidden bg-zinc-900">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.08] opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white">
                    {project.icon}
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-3 md:space-y-4 relative bg-zinc-950/40 backdrop-blur-sm">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-bold text-base">{project.metrics}</p>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-zinc-800 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
          </div>
          <div className="space-y-2">
            <p className="text-zinc-300 text-base md:text-xl font-medium max-w-2xl italic">
              "300M+ views generated isn't just a number—it's the result of testing thousands of hooks and perfecting retention systems."
            </p>
            <div className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] pt-2">— Content Strategy Philosophy</div>
          </div>
        </div>
      </div>
    </section>
  );
};
