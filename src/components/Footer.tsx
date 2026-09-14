import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040609] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
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
              <span className="font-extrabold text-lg text-white">VIREO AI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Wisdom OS: The self-improving AI executive operating system for high performers.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              DPDP Act & GDPR Compliant
            </div>
          </div>

          {/* Core Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Product Offerings</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#offerings" className="hover:text-white transition-colors">Health & Habit Intelligence</a></li>
              <li><a href="#offerings" className="hover:text-white transition-colors">Skill Acceleration & PRD Builder</a></li>
              <li><a href="#offerings" className="hover:text-white transition-colors">Digital Leather Wallet & Vault</a></li>
              <li><a href="#offerings" className="hover:text-white transition-colors">100-Year Life Horizon Roadmap</a></li>
            </ul>
          </div>

          {/* Live Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Repositories & App</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sabbisurendra-dev.github.io/vireo_ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  Live Prototype App
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sabbisurendra-dev/vireo_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  Prototype GitHub Repo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sabbisurendra-dev/Vireo-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  Showcase Website GitHub Repo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#security" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Digital Data Protection Notice</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Health Data Management Terms</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Zero-Trust Security Standard</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Vireo AI (Wisdom OS). Built for executive mastery.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>Designed with Fortune 500 & Silicon Valley Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
