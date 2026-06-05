import React from 'react';
import { ShieldAlert, Users, Terminal, Activity, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  
  // Static Mock Data for the Admin Metrics Log View
  const globalScans = [
    { id: "SCN-9021", user: "user_alex@domain.com", type: "URL Link", target: "http://secure-paypal-login-free.com", risk: "HIGH", date: "Just Now" },
    { id: "SCN-9020", user: "dev_mika@domain.com", type: "Email Body", target: "Urgent account suspension warning message request", risk: "MEDIUM", date: "12 mins ago" },
    { id: "SCN-9019", user: "hr_team@company.com", type: "URL Link", target: "https://github.com/official-updates", risk: "SAFE", date: "45 mins ago" },
    { id: "SCN-9018", user: "guest_77@domain.com", type: "Message Text", target: "Congratulations! You won a $500 Amazon voucher code link", risk: "HIGH", date: "1 hour ago" },
  ];

  return (
    <main className="flex-1 bg-slate-950 p-6 md:p-10">
      
      {/* Page Title Header */}
      <div className="mb-8 text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <Terminal className="text-red-500" size={28} />
          Central Security Oversight Terminal
        </h1>
        <p className="text-sm text-slate-400 mt-1">Global administrative management monitor and real-time network transaction logs.</p>
      </div>

      {/* Grid Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* Card 1: Total Scans */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">System-Wide Scans</span>
            <span className="text-2xl font-black text-white mt-1 block">14,289</span>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
            <Activity size={20} />
          </div>
        </div>

        {/* Card 2: Active Users */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Registered Analysts</span>
            <span className="text-2xl font-black text-white mt-1 block">1,842</span>
          </div>
          <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
            <Users size={20} />
          </div>
        </div>

        {/* Card 3: High Risks Flagged */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Threats Isolated</span>
            <span className="text-2xl font-black text-red-500 mt-1 block">612</span>
          </div>
          <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
            <ShieldAlert size={20} />
          </div>
        </div>

        {/* Card 4: Platform Integrity */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Node Integrity Status</span>
            <span className="text-2xl font-black text-emerald-500 mt-1 block">99.8%</span>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
            <CheckCircle size={20} />
          </div>
        </div>

      </div>

      {/* System Transaction Logs Table Area */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Live Global Inspection Feed</h3>
          <span className="px-2.5 py-1 bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold rounded-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Live Monitoring Stream
          </span>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/40 text-xs font-bold text-slate-400 uppercase">
                <th className="p-4">Scan Identifier</th>
                <th className="p-4">User Account</th>
                <th className="p-4">Type</th>
                <th className="p-4">Target Payload Content</th>
                <th className="p-4 text-center">Threat Level Evaluation</th>
                <th className="p-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {globalScans.map((scan) => (
                <tr key={scan.id} className="hover:bg-slate-850/20 transition-colors">
                  <td className="p-4 font-mono text-slate-400 text-xs">{scan.id}</td>
                  <td className="p-4 text-slate-300 font-medium">{scan.user}</td>
                  <td className="p-4 text-xs text-slate-400 font-semibold">{scan.type}</td>
                  <td className="p-4 text-slate-300 max-w-xs truncate font-mono text-xs">{scan.target}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-md ${
                      scan.risk === 'HIGH' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      scan.risk === 'MEDIUM' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {scan.risk}
                    </span>
                  </td>
                  <td className="p-4 text-right text-xs text-slate-500">{scan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </main>
  );
}