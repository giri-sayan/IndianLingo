import React from 'react';
import { 
  Home, 
  Languages, 
  Shield, 
  Target, 
  Store, 
  Coffee, 
  Settings, 
  User
} from 'lucide-react';
import TigerLogo from './TigerLogo';
import { sounds } from '../utils/audio';

export default function Sidebar({
  activeTab,
  onSelectTab,
  onOpenSettings,
  theme = 'light'
}) {
  const isDark = theme === 'dark';

  const navItems = [
    { id: 'learn', label: 'LEARN', icon: Home, color: 'text-emerald-500' },
    { id: 'akshara', label: 'LETTERS', icon: Languages, color: 'text-blue-500' },
    { id: 'leaderboard', label: 'LEADERBOARDS', icon: Shield, color: 'text-amber-500' },
    { id: 'quests', label: 'QUESTS', icon: Target, color: 'text-rose-500' },
    { id: 'shop', label: 'SHOP', icon: Store, color: 'text-purple-500' },
    { id: 'stories', label: 'CHAI STORIES', icon: Coffee, color: 'text-amber-600' },
    { id: 'profile', label: 'PROFILE', icon: User, color: 'text-teal-500' },
  ];

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className={`hidden lg:flex flex-col justify-between w-64 xl:w-68 shrink-0 h-screen sticky top-0 px-4 py-6 border-r transition-colors z-40 select-none ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="space-y-6">
          {/* Duolingo-style Brand Logo */}
          <div 
            onClick={() => {
              sounds.playPop();
              onSelectTab('learn');
            }}
            className="flex items-center gap-3 px-3 py-1 cursor-pointer group"
          >
            <TigerLogo size={42} className="group-hover:scale-105 transition-transform" />
            <div>
              <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                IndianLingo
              </span>
            </div>
          </div>

          {/* Nav Items List */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playPop();
                    onSelectTab(item.id);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-black text-sm tracking-wider uppercase transition-all text-left cursor-pointer border-2 ${
                    isActive
                      ? isDark
                        ? 'border-emerald-500/80 bg-emerald-950/30 text-emerald-400'
                        : 'border-emerald-400 bg-emerald-50/80 text-emerald-700'
                      : isDark
                      ? 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? (isDark ? 'text-emerald-400' : 'text-emerald-600') : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Settings Item */}
            <button
              onClick={() => {
                sounds.playPop();
                onOpenSettings();
              }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-black text-sm tracking-wider uppercase transition-all text-left cursor-pointer border-2 ${
                isDark
                  ? 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  : 'border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Settings className="w-6 h-6 text-slate-400" />
              <span>SETTINGS</span>
            </button>
          </nav>
        </div>

      </aside>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t flex items-center justify-around py-2 px-1 transition-colors ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-200 backdrop-blur' : 'bg-white/95 border-slate-200 text-slate-800 backdrop-blur'
      }`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playPop();
                onSelectTab(item.id);
              }}
              className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? isDark
                    ? 'bg-slate-800 text-emerald-400'
                    : 'bg-emerald-50 text-emerald-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
