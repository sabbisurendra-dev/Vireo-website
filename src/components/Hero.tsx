import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Activity, Cpu, Wallet, Play } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Hero: React.FC = () => {
  const [activePrompt, setActivePrompt] = useState(0);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const handlePromptClick = (index: number) => {
    setIsSynthesizing(true);
    setActivePrompt(index);
    setTimeout(() => setIsSynthesizing(false), 400);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090e]">
      {/* Dynamic Background Glow Spheres */}
      <div className="glow-orb-green top-10 left-1/4 -translate-x-1/2 opacity-30"></div>
      <div className="glow-orb-blue top-32 right-10 opacity-30"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner text-xs font-semibold text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono">{siteConfig.hero.badge}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              {siteConfig.hero.securityNotice}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            The Self-Improving <br />
            <span className="text-gradient-tri">{siteConfig.hero.mainHeadline}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            {siteConfig.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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

          {/* Interactive AI Prompt Simulator Widget */}
          <div className="pt-10 max-w-3xl mx-auto text-left">
            <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-slate-800/80 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">{siteConfig.hero.assistantModeTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {siteConfig.hero.assistantStatus}
                </div>
              </div>

              {/* Sample Prompt Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {siteConfig.hero.prompts.map((item, idx) => {
                  const IconComponent = idx === 0 ? Activity : idx === 1 ? Cpu : Wallet;
                  const isActive = activePrompt === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handlePromptClick(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 font-medium ${
                        isActive
                          ? 'bg-blue-500/10 border-blue-500/50 text-blue-300 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      {item.title}
                    </button>
                  );
                })}
              </div>

              {/* Simulated Output Container */}
              <div className="bg-[#0b0f19] rounded-xl p-4 border border-slate-800/90 font-sans space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                    YOU
                  </div>
                  <div className="text-sm text-slate-200 pt-1 font-medium">
                    "{siteConfig.hero.prompts[activePrompt].prompt}"
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-800/60 pt-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 via-blue-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-sm text-slate-300 pt-0.5 leading-relaxed">
                    {isSynthesizing ? (
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono py-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                        Processing offline context & habit correlation framework...
                      </div>
                    ) : (
                      <span>{siteConfig.hero.prompts[activePrompt].response}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
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
