import React from 'react';
import { Activity, Cpu, Wallet, HeartPulse, TrendingUp, CheckCircle2, FileText, Lock, Sparkles, CreditCard, Flame, BookOpen } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const getImagePath = (fileName: string) => {
  const base = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : import.meta.env.BASE_URL + '/';
  return `${base}generated/${fileName}`;
};

export const ProductOfferings: React.FC = () => {
  return (
    <section id="offerings" className="py-24 bg-[#07090e] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            {siteConfig.pillars.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {siteConfig.pillars.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {siteConfig.pillars.sectionDesc}
          </p>
        </div>

        {/* Pillar 1: Health & Habit Intelligence */}
        <div className="mb-20 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold font-mono border border-emerald-500/20">
                <HeartPulse className="w-4 h-4" />
                {siteConfig.pillars.items[0].badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {siteConfig.pillars.items[0].title}<span className="text-gradient-emerald">{siteConfig.pillars.items[0].highlightTitle}</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {siteConfig.pillars.items[0].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[0].features[0].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[0].features[0].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[0].features[0].desc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[0].features[1].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[0].features[1].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[0].features[1].desc}</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {siteConfig.pillars.items[0].checkText}
                </div>
              </div>
            </div>

            {/* Visual Mockup Card */}
            <div className="lg:col-span-6 bg-[#0b0f19] rounded-2xl p-5 border border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">Health Hub</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Today's Score: 94/100
                </span>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 font-mono">Immediate</div>
                  <div className="text-base font-bold text-white mt-0.5">Hydrate 500ml</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Top Priority</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 font-mono">7-Day Trend</div>
                  <div className="text-base font-bold text-white mt-0.5">7.8 hrs Sleep</div>
                  <div className="text-[10px] text-emerald-400 font-mono">+12% vs last week</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400 font-mono">1-Yr Trajectory</div>
                  <div className="text-base font-bold text-white mt-0.5">Optimal Vitals</div>
                  <div className="text-[10px] text-emerald-400 font-mono">On Track</div>
                </div>
              </div>

              {/* Habit Nudge Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 font-mono">
                  <span>💡 Habit Correlation Nudge</span>
                  <span>98% Data Confidence</span>
                </div>
                <p className="text-xs text-slate-300">
                  Data shows 20 mins of morning sunlight before 9 AM helps you fall asleep 28 mins faster tonight. Take a quick morning walk today!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Personal Growth & Skill Acceleration */}
        <div className="mb-20 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-all"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Mockup Card */}
            <div className="lg:col-span-6 lg:order-1 bg-[#0b0f19] rounded-2xl p-5 border border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-bold text-slate-200">Skill Acceleration & Learning Hub</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  3 Active Skills
                </span>
              </div>

              {/* Top 3 Skills Progress */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-200">1. Latest Tech explained</span>
                    <span className="text-blue-400 font-mono">78%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-200">2. Product PRDs and AI</span>
                    <span className="text-blue-400 font-mono">92%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-200">3. Indian Cooking Foundations</span>
                    <span className="text-blue-400 font-mono">65%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-bold font-mono border border-blue-500/20">
                <BookOpen className="w-4 h-4" />
                {siteConfig.pillars.items[1].badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {siteConfig.pillars.items[1].title}<span className="text-gradient-blue">{siteConfig.pillars.items[1].highlightTitle}</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {siteConfig.pillars.items[1].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[1].features[0].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[1].features[0].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[1].features[0].desc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[1].features[1].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[1].features[1].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[1].features[1].desc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: AI Digital Wallet & Asset Vault */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none group-hover:bg-amber-500/15 transition-all"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold font-mono border border-amber-500/20">
                <Wallet className="w-4 h-4" />
                {siteConfig.pillars.items[2].badge}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {siteConfig.pillars.items[2].title}<span className="text-gradient-amber">{siteConfig.pillars.items[2].highlightTitle}</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {siteConfig.pillars.items[2].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[2].features[0].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[2].features[0].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[2].features[0].desc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    {siteConfig.pillars.items[2].features[1].title}
                  </div>
                  <div className="text-slate-200 text-sm font-semibold">{siteConfig.pillars.items[2].features[1].subtitle}</div>
                  <div className="text-xs text-slate-400">{siteConfig.pillars.items[2].features[1].desc}</div>
                </div>
              </div>
            </div>

            {/* Visual Smart Digital Wallet Card (Crisp Responsive Image Layout) */}
            <div className="lg:col-span-6 bg-[#0b0f19] rounded-2xl p-6 border border-amber-900/40 relative shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-bold text-amber-200">Smart Digital Wallet</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  AES-256 ENCRYPTED
                </span>
              </div>

              {/* Grid of Clean High-Res Credential Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 text-center shadow-lg group hover:border-amber-500/50 transition-all flex flex-col items-center">
                  <div className="w-full h-36 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img src={getImagePath('aadhaar-card.png')} alt="Government Aadhaar Card" className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-2.5 text-xs font-bold text-slate-200">Aadhaar Card</div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 text-center shadow-lg group hover:border-amber-500/50 transition-all flex flex-col items-center">
                  <div className="w-full h-36 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img src={getImagePath('pan-card.png')} alt="PAN Card" className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-2.5 text-xs font-bold text-slate-200">PAN Card</div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 text-center shadow-lg group hover:border-amber-500/50 transition-all flex flex-col items-center">
                  <div className="w-full h-36 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img src={getImagePath('driving-licence-card.png')} alt="Driving License" className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-2.5 text-xs font-bold text-slate-200">Driving License</div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-2 text-center shadow-lg group hover:border-amber-500/50 transition-all flex flex-col items-center">
                  <div className="w-full h-36 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img src={getImagePath('company-id-card.png')} alt="Corporate Employee ID" className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-2.5 text-xs font-bold text-slate-200">Corporate ID</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
