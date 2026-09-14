import React from 'react';
import { ShieldCheck, HardDrive, Scale, Globe, CheckCircle2, Key } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const SecurityCompliance: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    HardDrive,
    Scale,
    Globe,
    Key
  };

  return (
    <section id="security" className="py-24 bg-[#07090e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            {siteConfig.compliance.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {siteConfig.compliance.sectionTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {siteConfig.compliance.sectionDesc}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {siteConfig.compliance.cards.map((card, idx) => {
            const IconComponent = iconMap[card.iconName] || ShieldCheck;
            return (
              <div key={idx} className={`glass-panel p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-${card.accentColor}-500/30 transition-all`}>
                <div className={`w-12 h-12 rounded-2xl bg-${card.accentColor}-500/10 border border-${card.accentColor}-500/20 flex items-center justify-center text-${card.accentColor}-400`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{card.desc}</p>
                <div className={`pt-2 flex items-center gap-2 text-xs text-${card.accentColor}-400 font-mono`}>
                  <CheckCircle2 className="w-4 h-4" />
                  {card.badge}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
