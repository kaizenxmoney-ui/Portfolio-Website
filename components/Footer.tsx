import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-between reveal">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <span className="text-black font-black text-base">A</span>
            </div>
            <span className="font-black text-zinc-100 tracking-tighter text-xl">ALVIN</span>
          </div>
          <p className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center md:text-left">
            Built for retention. Focused on growth.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-8 md:gap-10">
            <a 
              href="#" 
              className="text-zinc-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest active:scale-90"
            >
              Twitter
            </a>
            <a 
              href="https://www.instagram.com/ceoxalvin?igsh=dXIxbGlhenowN2pu&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest active:scale-90"
            >
              Instagram
            </a>
            <a 
              href="https://t.me/ceoxalvin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-all text-xs font-bold uppercase tracking-widest active:scale-90"
            >
              Telegram
            </a>
          </div>
          <p className="text-zinc-700 text-[10px] font-medium tracking-tight">
            © {new Date().getFullYear()} Alvin • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};