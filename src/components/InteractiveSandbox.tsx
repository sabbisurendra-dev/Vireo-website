import React, { useState } from 'react';
import { Terminal, Activity, Cpu, Wallet, Check, ExternalLink, Lock, Unlock, Sparkles, AlertTriangle, CloudSun, FileText } from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'health' | 'development' | 'wallet'>('health');
  
  // Health Tab State
  const [healthTasks, setHealthTasks] = useState([
    { id: 1, text: "Hydrate 500ml upon waking", completed: true, priority: "High" },
    { id: 2, text: "20 min sunlight & morning walk", completed: true, priority: "Medium" },
    { id: 3, text: "Perform 45-min resistance training", completed: false, priority: "High" },
    { id: 4, text: "Review evening wind-down routine", completed: false, priority: "Low" }
  ]);
  const [weatherAlertOpen, setWeatherAlertOpen] = useState(false);

  // Development & PRD Tab State
  const [prdTopic, setPrdTopic] = useState("Autonomous AI Marketing Agent");
  const [generatedPrd, setGeneratedPrd] = useState<string | null>(null);
  const [isGeneratingPrd, setIsGeneratingPrd] = useState(false);

  // Wallet Tab State
  const [walletIsOpen, setWalletIsOpen] = useState(true);
  const [unlockedAssets, setUnlockedAssets] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>("Aadhaar & PAN");

  const toggleTask = (id: number) => {
    setHealthTasks(healthTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleGeneratePrd = () => {
    if (!prdTopic.trim()) return;
    setIsGeneratingPrd(true);
    setTimeout(() => {
      setGeneratedPrd(`
# PRD: ${prdTopic}
**Author**: Wisdom OS Assistant
**Status**: Draft • High Priority
**Objective**: Build a self-improving micro-service with zero-trust local storage and real-time execution bounds.

## Key Modules
1. **Core Logic**: Express 5 + Drizzle ORM PostgreSQL backend
2. **Frontend UI**: React 19 + Tailwind CSS + Lucide Icons
3. **Data Protection**: Local-first encrypted browser state
      `.trim());
      setIsGeneratingPrd(false);
    }, 600);
  };

  return (
    <section id="sandbox" className="py-24 bg-[#05070b] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 font-mono">
            <Terminal className="w-3.5 h-3.5" />
            Live Interactive Product Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Test Drive Wisdom OS Right Now
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with the core features below to experience the real-time responsiveness and executive UX of Vireo AI.
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
                Goal 1: Health Cockpit
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
                Goal 2: PRD & Skills
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
                Goal 3: Digital Leather Wallet
              </button>
            </div>

            <a
              href="https://sabbisurendra-dev.github.io/vireo_ai/"
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
            
            {/* TAB 1: HEALTH COCKPIT DEMO */}
            {activeTab === 'health' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      Daily Health Cockpit & Priority Actionables
                    </h4>
                    <p className="text-xs text-slate-400">Click checkboxes below to update your live habit completion trajectory.</p>
                  </div>

                  {/* Weather Emergency Button */}
                  <button
                    onClick={() => setWeatherAlertOpen(!weatherAlertOpen)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-2 self-start sm:self-auto font-mono"
                  >
                    <CloudSun className="w-4 h-4 text-amber-400" />
                    Weather Radar: 26°C Clear
                  </button>
                </div>

                {weatherAlertOpen && (
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      Weather Snapshot & UV Index Alert
                    </div>
                    <div>UV Index: 6 (Moderate). High air quality index (AQI 42). Recommended time for outdoor exercise: 6:30 AM - 9:00 AM.</div>
                  </div>
                )}

                {/* Habit Task Items */}
                <div className="space-y-2.5">
                  {healthTasks.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        task.completed
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                          : 'bg-slate-900/80 border-slate-800 text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            task.completed
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                              : 'border-slate-600 bg-slate-800'
                          }`}
                        >
                          {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : ''}`}>
                          {task.text}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        task.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {task.priority} Priority
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Trajectory Status */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Habit Completion Progress:</span>
                  <span className="text-emerald-400 font-bold">
                    {Math.round((healthTasks.filter(t => t.completed).length / healthTasks.length) * 100)}% Completed
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: PRD & SKILLS DEMO */}
            {activeTab === 'development' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    AI Voice-to-PRD Synthesizer
                  </h4>
                  <p className="text-xs text-slate-400">Enter a project idea below and test the automated PRD generator.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={prdTopic}
                    onChange={(e) => setPrdTopic(e.target.value)}
                    placeholder="Enter PRD Title (e.g. AI Financial Ledger)..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleGeneratePrd}
                    disabled={isGeneratingPrd}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all font-mono"
                  >
                    {isGeneratingPrd ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        Synthesize PRD
                      </>
                    )}
                  </button>
                </div>

                {generatedPrd ? (
                  <div className="p-4 rounded-xl bg-[#0b0f19] border border-blue-500/30 text-xs font-mono text-slate-300 space-y-2 whitespace-pre-wrap">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-2">
                      <FileText className="w-4 h-4" />
                      Generated PRD Specification Document
                    </div>
                    <div>{generatedPrd}</div>
                  </div>
                ) : (
                  <div className="p-8 text-center border border-dashed border-slate-800 rounded-2xl text-slate-400 text-xs font-mono">
                    Click "Synthesize PRD" above to test the AI document builder.
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: LEATHER WALLET DEMO */}
            {activeTab === 'wallet' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-amber-400" />
                      Digital Leather Wallet & ID Vault
                    </h4>
                    <p className="text-xs text-slate-400">Tactile leather wallet experience with verified credentials.</p>
                  </div>

                  <button
                    onClick={() => setWalletIsOpen(!walletIsOpen)}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5"
                  >
                    {walletIsOpen ? "Fold Wallet Close" : "Open Leather Wallet"}
                  </button>
                </div>

                {walletIsOpen ? (
                  <div className="leather-texture p-6 rounded-2xl border border-amber-900/40 space-y-4">
                    <div className="text-xs font-mono text-amber-300 font-semibold border-b border-amber-900/40 pb-2">
                      👝 Men's Leather Wallet • Inside View
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Aadhaar & PAN", "Driving License", "Corporate Employee ID"].map((card) => (
                        <div
                          key={card}
                          onClick={() => setSelectedCard(card)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            selectedCard === card
                              ? 'bg-amber-950/60 border-amber-500 text-amber-200 shadow-md'
                              : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-bold">{card}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-1">Status: Verified Scan</div>
                        </div>
                      ))}
                    </div>

                    {/* Selected Document Details */}
                    {selectedCard && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
                        <div className="text-emerald-400 font-bold">📄 Scanned Document View: {selectedCard}</div>
                        <div>Document ID Hash: 0x9f82a...4b12</div>
                        <div>DPDP Compliance: Zero-Knowledge Hash Stored Locally in Browser Storage.</div>
                      </div>
                    )}

                    {/* Assets Section Toggle */}
                    <div className="pt-2 border-t border-amber-900/30 flex items-center justify-between">
                      <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                        {unlockedAssets ? <Unlock className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3.5 h-3.5 text-amber-400" />}
                        Private Assets & Liabilities Section
                      </div>
                      <button
                        onClick={() => setUnlockedAssets(!unlockedAssets)}
                        className="text-xs text-amber-400 hover:text-amber-300 underline font-mono"
                      >
                        {unlockedAssets ? "Hide Net Worth Data" : "Unlock Net Worth Ledger"}
                      </button>
                    </div>

                    {unlockedAssets && (
                      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs font-mono space-y-2">
                        <div className="flex justify-between text-slate-200">
                          <span>Total Liquid Assets:</span>
                          <span className="text-emerald-400 font-bold">₹14,50,000</span>
                        </div>
                        <div className="flex justify-between text-slate-200">
                          <span>Mutual Funds & Equity:</span>
                          <span className="text-emerald-400 font-bold">₹32,80,000</span>
                        </div>
                        <div className="flex justify-between text-slate-400 text-[10px]">
                          <span>Real Estate & Physical Gold:</span>
                          <span>Scanned Registry Copies Attached</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="leather-texture p-12 rounded-2xl border border-amber-900/40 text-center space-y-3">
                    <Wallet className="w-10 h-10 text-amber-400 mx-auto" />
                    <div className="text-base font-bold text-amber-200">Leather Wallet Closed & Folded</div>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Click "Open Leather Wallet" to unfold your digital documents and IDs.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
