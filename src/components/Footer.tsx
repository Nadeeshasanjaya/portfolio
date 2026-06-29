import React from 'react';
import { Terminal } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-400" />
          <span className="font-mono font-medium text-slate-300">
            H.G.N. Sanjaya
          </span>
        </div>
        <p className="text-slate-500 text-sm text-center md:text-left">
          Designed & Built by H.G.N. Sanjaya. All rights reserved.
        </p>
        <div className="text-slate-500 text-sm font-mono">
          <span className="text-emerald-400">status:</span> online
        </div>
      </div>
    </footer>);

}