import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} PhishShield Platform. Advanced Web Security Threat Documentation Project.
        </p>
      </div>
    </footer>
  );
}