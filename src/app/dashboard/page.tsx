"use client";

import React, { useState } from 'react';
import { ShieldCheck, Search, AlertCircle, RefreshCw, Globe } from 'lucide-react';

export default function Dashboard() {
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleMockScan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    setShowResult(false);
    
    // Simulate a 2-second visual loading delay
    setTimeout(() => {
      setIsScanning(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <main className="flex-1 bg-slate-950 p-6 md:p-12 max-w-5xl mx-auto w-full">
      
      {/* Title Header */}
      <div className="mb-10 text-left">
        <h1 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2.5">
          <ShieldCheck className="text-blue-500" size={28} />
          Threat Analysis Terminal
        </h1>
        <p className="text-sm text-slate-400 mt-1">Paste web resource indicators below to inspect system parameters dynamically.</p>
      </div>

      {/* Input Core Scanner Layout */}
      <div className="bg-slate-900 border border-slate-850 p-6 rounded-2xl shadow-xl mb-8">
        <form onSubmit={handleMockScan} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target URL or Email Header String</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                <Globe size={18} />
              </span>
              <input 
                type="text"
                required
                placeholder="https://example-secure-verify.com/login"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isScanning}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {isScanning ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                Running Predictive Cross-Referencing Logs...
              </>
            ) : (
              <>
                <Search size={16} />
                Execute System Scan
              </>
            )}
          </button>
        </form>
      </div>

      {/* Visual Mock Result Output Card */}
      {showResult && (
        <div className="bg-slate-900/50 border border-red-500/30 p-6 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-500 mt-0.5">
              <AlertCircle size={24} />
            </div>
            <div className="text-left flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-white">Suspicious Indicator Match (Flagged)</h3>
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-0.5 rounded text-xs font-bold">CRITICAL MATCH</span>
              </div>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                The targeted system payload structure matches characteristics commonly tied to deceptive banking redirect parameters. Live status flags show unverified certificates.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border-t border-slate-800/60 pt-4 text-xs font-mono">
                <div className="text-slate-500">Domain Entropy Score: <span className="text-red-400 font-bold">87.4% (High Risk)</span></div>
                <div className="text-slate-500">MX Server Profile: <span className="text-amber-400 font-bold">Unverified Source Node</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}