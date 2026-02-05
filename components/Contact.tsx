import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:contactalvinforwork@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-zinc-900 relative overflow-hidden bg-black/40 reveal">
          {/* Decorative background element - Optimized for mobile */}
          <div className="absolute top-0 right-0 w-24 md:w-64 h-24 md:h-64 bg-blue-500/5 blur-3xl rounded-full -mr-5 -mt-5" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8 text-center md:text-left reveal" style={{ transitionDelay: '100ms' }}>
              <div className="space-y-3 md:space-y-5">
                <h2 className="text-[2.2rem] leading-[1.1] md:text-5xl font-black tracking-tighter">Let's build something big.</h2>
                <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed">
                  Whether you're a creator looking to scale or a team needing operational refinement, I'm ready to plug in.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start pt-2">
                <a href="mailto:contactalvinforwork@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs md:text-base tracking-tight truncate max-w-[200px] sm:max-w-none">contactalvinforwork@gmail.com</span>
                </a>
              </div>
            </div>

            <form className="space-y-3 md:space-y-4 reveal" style={{ transitionDelay: '300ms' }} onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-base md:text-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-700 font-medium"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-base md:text-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-zinc-700 font-medium"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  rows={4}
                  required
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-base md:text-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none placeholder:text-zinc-700 font-medium"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95 select-none"
              >
                Send Message <Send className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};