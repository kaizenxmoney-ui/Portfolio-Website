
import React from 'react';
import { Scissors, Zap, Layers, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Short-Form Video Editing",
      description: "High-paced, vertical-first editing designed for TikTok, Instagram Reels, and YouTube Shorts.",
      icon: <Scissors className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Retention Optimization",
      description: "Analyzing drop-off points and re-structuring narratives to maximize watch time.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Workflow Systems",
      description: "Building content pipelines that allow teams to scale from 3 to 30 videos per month.",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Content Operations & Automation",
      description: "Designing low-touch content systems using clipping workflows, automation, and AI-assisted processes. Built for personal brands that need minimal input and faceless brands that require full automation.",
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Execution meets Strategy.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I don't just deliver MP4s. I deliver performance improvements and operational clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
