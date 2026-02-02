
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-black text-sm">A</span>
          </div>
          <span className="font-bold text-zinc-200 tracking-tight text-lg">ALVIN</span>
        </div>
        
        <p className="text-zinc-600 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Alvin. Built for retention. Focused on growth.
        </p>

        <div className="flex items-center gap-6 md:gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">YouTube</a>
        </div>
      </div>
    </footer>
  );
};
