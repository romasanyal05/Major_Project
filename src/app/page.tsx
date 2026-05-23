import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Search, Database, Lock, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1 bg-slate-950 flex flex-col items-center justify-center px-4 py-16 text-center">
      
      {/* 1. Upper Little Security Badge Banner */}
      <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
        <Lock size={12} />
        Real-Time Cybersecurity Data Verification
      </div>

      {/* 2. Headline Core Typography */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-tight mb-4">
        Stop Phishing Threats <br />
        <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-red-500 bg-clip-text text-transparent">
          Before They Strike.
        </span>
      </h1>

      {/* 3. Description Subheading */}
      <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
        Verify suspicious links, analyze email urgency structures, and track scanning data indicators instantly through advanced global cross-referencing.
      </p>

      {/* 4. Prominent Action Flow Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-20">
        <Link 
          href="/login" 
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/10"
        >
          Access Threat Dashboard
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 5. Core Feature Grid Grid Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full text-left border-t border-slate-900 pt-16">
        
        {/* Card 1: URL Scanner */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
            <Search className="text-blue-500" size={20} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Dynamic URL Inspection</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Pastes raw website endpoints to check structure domains and live blacklists through coordinated service nodes.
          </p>
        </div>

        {/* Card 2: Email Analysis */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
            <ShieldCheck className="text-red-500" size={20} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Urgency Evaluation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Filters text bodies for structural alert triggers, tracking fake warning statements or high-risk banking credential requests.
          </p>
        </div>

        {/* Card 3: Metrics Dashboard */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
          <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
            <Database className="text-indigo-500" size={20} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Relational Log Tracking</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Saves structural scan history outputs inside secure database configurations to maintain analytical status indicators over time.
          </p>
        </div>

      </div>

    </main>
  );
}
