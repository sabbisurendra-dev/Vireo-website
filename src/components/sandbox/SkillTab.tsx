import React, { useState } from 'react';
import { Cpu, Sparkles, FileText } from 'lucide-react';

export const SkillTab: React.FC = () => {
  const [specTopic, setSpecTopic] = useState("Autonomous AI Personal Agent");
  const [generatedSpec, setGeneratedSpec] = useState<string | null>(null);
  const [isGeneratingSpec, setIsGeneratingSpec] = useState(false);

  const handleGenerateSpec = () => {
    if (!specTopic.trim()) return;
    setIsGeneratingSpec(true);
    setTimeout(() => {
      setGeneratedSpec(`
# Specification: ${specTopic}
**Author**: Vireo Assistant
**Status**: Active Spec • High Priority
**Objective**: Build a self-improving personal agent framework with zero-trust local storage and real-time execution bounds.

## Key Modules
1. **Personal Intelligence**: Proactive habit correlation & health vitals tracking
2. **Skill Acceleration**: Modular learning feeds & specification drafting
3. **Data Protection**: Local-first encrypted browser state (localStorage & IndexedDB)
      `.trim());
      setIsGeneratingSpec(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-400" />
          AI Voice & Document Builder
        </h4>
        <p className="text-xs text-slate-400">Enter a project or learning topic below and test the automated document generator.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={specTopic}
          onChange={(e) => setSpecTopic(e.target.value)}
          placeholder="Enter Spec Title (e.g. AI Financial Ledger)..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleGenerateSpec}
          disabled={isGeneratingSpec}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
        >
          {isGeneratingSpec ? (
            <span className="animate-spin">⏳</span>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              Generate Spec
            </>
          )}
        </button>
      </div>

      {generatedSpec ? (
        <div className="p-4 rounded-xl bg-[#0b0f19] border border-blue-500/30 text-xs font-mono text-slate-300 space-y-2 whitespace-pre-wrap">
          <div className="text-emerald-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-2">
            <FileText className="w-4 h-4" />
            Generated Specification Document
          </div>
          <div>{generatedSpec}</div>
        </div>
      ) : (
        <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-400 text-xs font-mono">
          Click "Generate Spec" above to test the document builder.
        </div>
      )}
    </div>
  );
};
