import React from 'react';
import { Layers, Database, Code2, Terminal } from 'lucide-react';

export const Architecture: React.FC = () => {
  const stackItems = [
    { name: "Frontend SPA Prototype", tech: "React 19 + Vite + Tailwind CSS", desc: "Local-first responsive dashboard with high-frequency UI updates", icon: Code2, color: "emerald" },
    { name: "Monorepo Workspaces", tech: "pnpm workspaces + TypeScript 5.9", desc: "Clean modular workspace structure with strict shared type safety", icon: Layers, color: "blue" },
    { name: "API Framework & Server", tech: "Express 5 + OpenAPI Spec", desc: "Restful API specs auto-generated via Orval codegen hooks", icon: Terminal, color: "purple" },
    { name: "Database & ORM Layer", tech: "PostgreSQL + Drizzle ORM", desc: "Type-safe relational database schema with Zod validation rules", icon: Database, color: "amber" }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#05070b] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 font-mono">
            <Layers className="w-3.5 h-3.5" />
            Engineering & Monorepo Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built with Modern Silicon Valley Tech Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Standard pnpm monorepo design ensuring instant local startup, seamless API codegen, and bulletproof type safety.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stackItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{item.name}</div>
                <div className="text-base font-bold text-white">{item.tech}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Monorepo Command Quick Reference */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 max-w-3xl mx-auto bg-[#0b0f19]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold text-slate-200">Key Workspace Commands</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">pnpm monorepo</span>
          </div>

          <div className="font-mono text-xs space-y-2 text-slate-300">
            <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-emerald-400">pnpm run build</span>
              <span className="text-slate-500">Typecheck & bundle all packages</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-blue-400">pnpm --filter @workspace/wisdom-os run dev</span>
              <span className="text-slate-500">Run Wisdom OS locally</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-purple-400">pnpm --filter @workspace/api-server run dev</span>
              <span className="text-slate-500">Run Express API server</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
