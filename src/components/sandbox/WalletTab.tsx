import React, { useState } from 'react';
import { Wallet, Lock, Unlock } from 'lucide-react';

export const WalletTab: React.FC = () => {
  const [walletIsOpen, setWalletIsOpen] = useState(true);
  const [unlockedAssets, setUnlockedAssets] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>("Aadhaar & PAN");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Wallet className="w-5 h-5 text-amber-400" />
            Digital Wallet & ID Vault
          </h4>
          <p className="text-xs text-slate-400">Digital wallet experience with verified credentials.</p>
        </div>

        <button
          onClick={() => setWalletIsOpen(!walletIsOpen)}
          className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5"
        >
          {walletIsOpen ? "Close Digital Wallet" : "Open Digital Wallet"}
        </button>
      </div>

      {walletIsOpen ? (
        <div className="bg-[#0b0f19] p-6 rounded-2xl border border-amber-900/40 space-y-4 shadow-xl">
          <div className="text-xs font-mono text-amber-300 font-semibold border-b border-amber-900/40 pb-2">
            👝 Digital Wallet • Inside View
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
        <div className="bg-[#0b0f19] p-12 rounded-2xl border border-amber-900/40 text-center space-y-3 shadow-xl">
          <Wallet className="w-10 h-10 text-amber-400 mx-auto" />
          <div className="text-base font-bold text-amber-200">Digital Wallet Closed</div>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Click "Open Digital Wallet" to view your digital documents and IDs.
          </p>
        </div>
      )}
    </div>
  );
};
