import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040609] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/60">
                <div className="flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 -ml-1"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 -ml-1"></span>
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">{siteConfig.brand.name} AI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.footer.brandDescription}
            </p>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {siteConfig.footer.legalNotice}
            </div>
          </div>

          {/* Core Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Product Offerings</h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.footer.productLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3 text-blue-400" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.footer.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {siteConfig.footer.copyrightText}
          </div>
        </div>

      </div>
    </footer>
  );
};
