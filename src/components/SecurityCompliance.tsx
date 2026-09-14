import React from 'react';
import { ShieldCheck, HardDrive, Scale, Globe, CheckCircle2, Key } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-[#07090e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            Security, Privacy & Public Regulations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Zero-Trust Privacy & Regulatory Compliance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built from the ground up to respect user sovereignty over personal health, identity proofs, and long-term financial roadmaps.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Local-First Zero Trust */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Local-First Storage Engine</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your active user data—including technical specs, skill progress logs, daily habit routines, and wallet choices—is kept safely inside your local browser storage (`localStorage` & IndexedDB).
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Zero telemetry data tracking or third-party sales.
            </div>
          </div>

          {/* Card 2: DPDP Act (India) Compliance */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">DPDP Act (India 2023) Compliant</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Fully compliant with India's Digital Personal Data Protection Act 2023. Explicit data fiduciary consent mechanisms, user-controlled right to erasure, and local data sovereignty.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Complete user sovereignty & data portability.
            </div>
          </div>

          {/* Card 3: GDPR & Health Governance */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">GDPR & Global Health Governance</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Adheres to strict European GDPR data protection standards and global health privacy guidelines. Personal health vitals and habits are never logged to public servers.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-purple-400 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Privacy by design at all architectural layers.
            </div>
          </div>

          {/* Card 4: Frictional Secondary Security */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Frictional Secondary Security Vault</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sensitive financial ledgers (Assets & Liabilities, property documents, mutual fund statements) are kept intentionally behind secondary authentication steps for peace of mind.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-mono">
              <CheckCircle2 className="w-4 h-4" />
              Protection against casual shoulder-surfing.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
