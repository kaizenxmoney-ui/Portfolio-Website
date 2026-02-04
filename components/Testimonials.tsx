
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "YouTube Creator (1.2M Subs)",
    content: "The retention on our Shorts increased by 40% in the first month. Alvin doesn't just edit; he understands the math behind the views. A high-level strategist disguised as an editor.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Sarah Jenkins",
    role: "Content Director @ ScaleMedia",
    content: "Alvin completely transformed our production speed. We went from struggling with 5 videos a month to a streamlined 30-video system without losing quality. His workflow builds are elite.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Ross",
    role: "Founder, GrowthOps",
    content: "A true operator. Most editors need hand-holding. Alvin takes full ownership, suggests critical strategy shifts, and delivers systems that actually work for the bottom line.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Client Feedback.</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            What partners say about the impact of retention-driven systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-10 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Quote className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-blue-500 fill-blue-500" />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-300 leading-relaxed text-lg italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-900 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
