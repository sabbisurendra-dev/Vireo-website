import React, { useState } from 'react';
import { Activity, Cpu, Wallet, ExternalLink, Play } from 'lucide-react';
import { HealthTab } from './sandbox/HealthTab';
import { SkillTab } from './sandbox/SkillTab';
import { WalletTab } from './sandbox/WalletTab';
import { siteConfig } from '../data/siteData';

export const InteractiveSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'health' | 'development' | 'wallet'>('health');

  return (
    <section id="sandbox" className="py-24 bg-[#05070b] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 font-mono">
            <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
            Live Interactive Product Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test Drive Vireo AI Right Now
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with the core features below to experience the real-time responsiveness and seamless UX of Vireo AI.
          </p>
        </div>

        {/* Sandbox Frame */}
        <div className="glass-panel rounded-3xl border border-slate-800/90 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Bar Navigation Tabs */}
          <div className="bg-[#0b0f19] border-b border-slate-800 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('health')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 font-mono ${
                  activeTab === 'health'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Goal 1: Health Hub
              </button>

              <button
                onClick={() => setActiveTab('development')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 font-mono ${
                  activeTab === 'development'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                Goal 2: Skill Acceleration
              </button>

              <button
                onClick={() => setActiveTab('wallet')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 font-mono ${
                  activeTab === 'wallet'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Wallet className="w-3.5 h-3.5" />
                Goal 3: Digital Wallet
              </button>
            </div>

            <a
              href={siteConfig.brand.liveAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 font-mono px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20"
            >
              Open Full Prototype App
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Sandbox Body Content */}
          <div className="p-6 sm:p-8 bg-[#080b13] min-h-[420px]">
            {activeTab === 'health' && <HealthTab />}
            {activeTab === 'development' && <SkillTab />}
            {activeTab === 'wallet' && <WalletTab />}
          </div>
        </div>

      </div>
    </section>
  );
};
