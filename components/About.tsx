import React from 'react';
import { TrendingUp, Users, Cpu, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 reveal">
            <h2 className="text-[2rem] leading-tight md:text-5xl font-black tracking-tighter">The Operator Behind the Content.</h2>
            <div className="space-y-6 text-zinc-500 font-medium leading-relaxed text-sm md:text-lg">
              <p>
                With close to 4 years in video editing and content strategy, I've moved beyond just "making things look good." I focus on why content performs and how to build systems that sustain growth.
              </p>
              <p>
                In 2023 alone, I scaled a YouTube channel to <span className="text-white font-bold">250,000 subscribers</span> in three months. In total, the systems and strategies I’ve worked with have generated over <span className="text-white font-bold">300M views</span> for personal channels and clients.
              </p>
              <p>
                I now run an editing team and consult as a strategist, helping creators shift from manual grind to optimized content funnels.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div className="p-3 sm:p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 text-center sm:text-left reveal" style={{ transitionDelay: '100ms' }}>
                <div className="text-white text-base sm:text-2xl font-black tabular-nums leading-tight">300M+</div>
                <div className="text-zinc-600 text-[7px] sm:text-xs uppercase font-bold tracking-widest mt-1">Total Views</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 text-center sm:text-left reveal" style={{ transitionDelay: '200ms' }}>
                <div className="text-white text-base sm:text-2xl font-black tabular-nums leading-tight">250k+</div>
                <div className="text-zinc-600 text-[7px] sm:text-xs uppercase font-bold tracking-widest mt-1">Subscribers</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl border border-zinc-900 bg-zinc-950/40 text-center sm:text-left reveal" style={{ transitionDelay: '300ms' }}>
                <div className="text-white text-base sm:text-2xl font-black tabular-nums leading-tight">4+ Yrs</div>
                <div className="text-zinc-600 text-[7px] sm:text-xs uppercase font-bold tracking-widest mt-1">Exp.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AboutCard 
              icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
              title="Retention Driven"
              desc="Every cut and hook is measured against viewer drop-off data."
              delay="150ms"
            />
            <AboutCard 
              icon={<Cpu className="w-5 h-5 text-emerald-500" />}
              title="System Oriented"
              desc="Simplifying complex workflows to improve team efficiency."
              delay="300ms"
            />
            <AboutCard 
              icon={<Users className="w-5 h-5 text-purple-500" />}
              title="Team Leader"
              desc="Managing editors to ensure consistent, high-quality output."
              delay="450ms"
            />
            <AboutCard 
              icon={<Briefcase className="w-5 h-5 text-amber-500" />}
              title="Full Ownership"
              desc="Treating every project as my own, focusing on long-term impact."
              delay="600ms"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay?: string }> = ({ icon, title, desc, delay }) => (
  <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-3 hover:border-zinc-700 transition-colors reveal" style={{ transitionDelay: delay }}>
    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-black text-white uppercase tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);