import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Play } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with 3-Goal Tri-Color Mix */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/60 shadow-lg group-hover:border-blue-500/50 transition-all">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-500 via-blue-500 to-slate-500 opacity-20 group-hover:opacity-40 transition-opacity blur-xs"></div>
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 -ml-1"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 -ml-1"></span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all">
                {siteConfig.brand.name}
              </span>
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30 font-mono tracking-wider">
                AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-emerald-400 after:to-blue-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#sandbox"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-800/60 transition-all flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              Try Sandbox
            </a>

            <a
              href={siteConfig.brand.liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white rounded-lg bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600 hover:from-emerald-400 hover:via-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 flex items-center gap-1.5"
            >
              Launch App Prototype
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d16] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white py-1.5 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={siteConfig.brand.liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-bold text-white rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center gap-2"
            >
              Launch App Prototype
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
