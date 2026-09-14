import React, { useState } from 'react';
import { Wallet, Lock, Unlock } from 'lucide-react';

export const WalletTab: React.FC = () => {
  const [walletIsOpen, setWalletIsOpen] = useState(true);
  const [unlockedAssets, setUnlockedAssets] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string>("Aadhaar");

  const cardsData: Record<string, { title: string; image: string }> = {
    "Aadhaar": { title: "Government Aadhaar Card", image: "./generated/aadhaar-card.png" },
    "PAN Card": { title: "PAN Card", image: "./generated/pan-card.png" },
    "Driving License": { title: "Driving License & Permit", image: "./generated/driving-licence-card.png" },
    "Corporate Employee ID": { title: "Corporate Employee ID Card", image: "./generated/company-id-card.png" }
  };

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
        <div className="bg-[#0b0f19] p-6 rounded-2xl border border-amber-900/40 space-y-5 shadow-xl">
          <div className="text-xs font-mono text-amber-300 font-semibold border-b border-amber-900/40 pb-2">
            👝 Digital Wallet • Select Document Card Below
          </div>

          {/* Document Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.keys(cardsData).map((cardKey) => (
              <button
                key={cardKey}
                onClick={() => setSelectedCard(cardKey)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedCard === cardKey
                    ? 'bg-amber-950/70 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold">{cardKey}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">Status: Verified Scan</div>
              </button>
            ))}
          </div>

          {/* Selected Document Card Image View */}
          {selectedCard && cardsData[selectedCard] && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 border-b border-slate-800 pb-2">
                <span>📄 {cardsData[selectedCard].title}</span>
                <span className="text-emerald-400 text-[10px] font-mono">Verified Scan</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-lg mx-auto bg-slate-900">
                <img
                  src={cardsData[selectedCard].image}
                  alt={cardsData[selectedCard].title}
                  className="w-full h-auto object-contain max-h-72"
                />
              </div>
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
