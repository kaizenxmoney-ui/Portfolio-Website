import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Audit & Alignment",
      description: "I start by auditing current workflows and identifying where performance is leaking. We align on specific growth KPIs."
    },
    {
      number: "02",
      title: "System Implementation",
      description: "I set up the editing pipelines and hooks libraries. This ensures we're not starting from scratch with every video."
    },
    {
      number: "03",
      title: "Rapid Iteration",
      description: "Speed is a feature. We ship quickly, analyze performance, and refine the editing style within short feedback loops to capitalize on trends."
    },
    {
      number: "04",
      title: "Scaling Operations",
      description: "Once we find a winning formula, I optimize the system for volume while maintaining creative quality."
    }
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold">Built for teams that need speed.</h2>
            <p className="text-zinc-400">
              My approach is process-oriented. I focus on clarity, speed, and consistency so you can spend more time on high-impact creative work.
            </p>
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm italic">
              "Efficiency is the silent driver of creative freedom."
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-4 relative reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="text-4xl font-black text-zinc-800 tracking-tighter">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};