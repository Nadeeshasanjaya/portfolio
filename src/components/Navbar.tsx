import React, { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-slate-100">
              H.G.N. Sanjaya
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-emerald-500 text-slate-950 rounded-md hover:bg-emerald-400 transition-colors">
              
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
            
                {link.name}
              </a>
          )}
          </div>
        </div>
      }
    </header>);

}