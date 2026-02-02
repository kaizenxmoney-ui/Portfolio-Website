
import React from 'react';
import { TrendingUp, Users, Cpu, Briefcase, Eye } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">The Operator Behind the Content.</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
              <p>
                With close to 4 years in video editing and content strategy, I've moved beyond just "making things look good." I focus on why content performs and how to build systems that sustain growth.
              </p>
              <p>
                In 2023 alone, I scaled a YouTube channel to <span className="text-white font-semibold">250,000 subscribers</span> in three months. In total, my strategies and edits have generated over <span className="text-white font-semibold">300,000,000 views</span> across YouTube and Instagram for both personal channels and high-level clients.
              </p>
              <p>
                I now run an editing team and consult as a strategist, helping creators shift from manual grind to optimized content funnels.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
              <div className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
                <div className="text-white text-lg md:text-2xl font-bold">300M+</div>
                <div className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold tracking-wider">Total Views</div>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
                <div className="text-white text-lg md:text-2xl font-bold">250k+</div>
                <div className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold tracking-wider">Subscribers</div>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30">
                <div className="text-white text-lg md:text-2xl font-bold">4+ Yrs</div>
                <div className="text-zinc-500 text-[10px] md:text-xs uppercase font-bold tracking-wider">Exp.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AboutCard 
              icon={<TrendingUp className="w-5 h-5 text-blue-500" />}
              title="Retention Driven"
              desc="Every cut and hook is measured against viewer drop-off data."
            />
            <AboutCard 
              icon={<Cpu className="w-5 h-5 text-emerald-500" />}
              title="System Oriented"
              desc="Simplifying complex workflows to improve team efficiency."
            />
            <AboutCard 
              icon={<Users className="w-5 h-5 text-purple-500" />}
              title="Team Leader"
              desc="Managing editors to ensure consistent, high-quality output."
            />
            <AboutCard 
              icon={<Briefcase className="w-5 h-5 text-amber-500" />}
              title="Ownership"
              desc="Treating every project as my own, focusing on long-term impact."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 space-y-3">
    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);
