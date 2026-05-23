"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex-1 bg-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
        
        {/* Header Header Identity */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-blue-500/10 rounded-xl mb-3 text-blue-500">
            <ShieldAlert size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-slate-400 text-sm mt-1">Identify vulnerabilities via your security profile.</p>
        </div>

        {/* Form Group Element */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          
          {/* Input Email Box */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <Mail size={18} />
              </span>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-slate-950 border border-slate-850 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Input Password Box */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Security Key (Password)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <Lock size={18} />
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-850 rounded-xl pl-11 pr-11 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500 hover:text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Interface Button Activation */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/10 mt-2"
          >
            Authenticate Credentials
          </button>
        </form>

        {/* Toggle Footer Path */}
        <p className="text-center text-xs text-slate-500 mt-6">
          New analyst terminal?{" "}
          <Link href="/register" className="text-blue-500 hover:underline font-medium">
            Create an Account
          </Link>
        </p>

      </div>
    </main>
  );
}