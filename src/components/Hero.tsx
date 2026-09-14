import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090e]">
      {/* Dynamic Background Glow Spheres */}
      <div className="glow-orb-green top-10 left-1/4 -translate-x-1/2 opacity-30"></div>
      <div className="glow-orb-blue top-32 right-10 opacity-30"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            {siteConfig.hero.titlePrefix} <br />
            <span className="text-gradient-tri">{siteConfig.hero.titleGradient}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            {siteConfig.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.brand.liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-600 hover:from-emerald-400 hover:via-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              {siteConfig.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#sandbox"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-200 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              {siteConfig.hero.ctaSecondary}
            </a>
          </div>

          {/* Metrics Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 text-left max-w-3xl mx-auto">
            {siteConfig.hero.metrics.map((stat, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stat.value}</div>
                <div className="text-xs font-medium text-slate-400 mt-1">{stat.label}</div>
                <div className={`text-[10px] font-mono mt-0.5 text-${stat.color}-400`}>{stat.subtext}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
