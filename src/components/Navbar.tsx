"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo Layout */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
            <ShieldAlert className="text-red-500" size={22} />
          </div>
          <span className="text-white font-bold tracking-tight text-lg">
            Phish<span className="text-red-500">Shield</span>
          </span>
        </Link>

        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-lg shadow-blue-600/20"
          >
            Get Started
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </nav>
  );
}