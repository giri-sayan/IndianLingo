import React from 'react';
import { Flame, Heart, Sparkles, Volume2, VolumeX, Globe, Sun, Moon, Settings } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Header({
  selectedLanguage,
  onOpenLanguageSelector,
  streak = 3,
  gems = 240,
  hearts = 5,
  soundMuted,
  onToggleSound,
  showTransliteration,
  onToggleTransliteration,
  activeTab,
  onSelectTab,
  theme = 'light',
  onToggleTheme,
  onOpenSettings
}) {
  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-30 backdrop-blur border-b px-4 py-2.5 sm:px-8 transition-colors ${
      isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo & Language Switcher */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => onSelectTab('learn')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-amber-500 to-orange-500 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[14px] flex items-center justify-center font-black text-xl text-emerald-500 ${
                isDark ? 'bg-slate-900' : 'bg-white'
              }`}>
                भ
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                  BhashaLingo
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  Desi
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-semibold hidden sm:block">
                Duolingo for Indian Languages
              </p>
            </div>
          </div>

          {/* Current Language Pill */}
          <button
            onClick={onOpenLanguageSelector}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border-2 transition-all ml-2 group cursor-pointer ${
              isDark 
                ? 'border-slate-700 bg-slate-800/80 hover:border-emerald-500 text-slate-200' 
                : 'border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 text-slate-700'
            }`}
            title="Switch Language"
          >
            <span className="text-lg">{selectedLanguage.flagEmoji}</span>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-none group-hover:text-emerald-500">
                {selectedLanguage.name}
              </p>
              <p className="text-[10px] text-slate-400 font-medium leading-none mt-0.5">
                {selectedLanguage.nativeName}
              </p>
            </div>
            <Globe className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500" />
          </button>
        </div>

        {/* Center: Desktop Navigation Tabs */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-2xl ${
          isDark ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100'
        }`}>
          <button
            onClick={() => onSelectTab('learn')}
            className={`px-4 py-1.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'learn'
                ? isDark ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'bg-white text-emerald-600 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Learn
          </button>
          <button
            onClick={() => onSelectTab('akshara')}
            className={`px-4 py-1.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'akshara'
                ? isDark ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'bg-white text-emerald-600 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Akshara (Letters)
          </button>
          <button
            onClick={() => onSelectTab('stories')}
            className={`px-4 py-1.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'stories'
                ? isDark ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'bg-white text-emerald-600 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Chai Break ☕
          </button>
          <button
            onClick={() => onSelectTab('leaderboard')}
            className={`px-4 py-1.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'leaderboard'
                ? isDark ? 'bg-slate-700 text-emerald-400 shadow-sm' : 'bg-white text-emerald-600 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Leagues
          </button>
        </nav>

        {/* Right: Gamified Stats, Theme Toggle & Settings */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Script Transliteration Toggle */}
          <button
            onClick={onToggleTransliteration}
            className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              showTransliteration
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800'
                : 'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
            }`}
            title="Toggle English transliteration aids"
          >
            <span>Aa / {selectedLanguage.alphabet[0]?.char}</span>
            <span className="text-[10px] px-1 py-0.2 rounded bg-emerald-200/60 dark:bg-emerald-800/60 text-emerald-800 dark:text-emerald-200">
              {showTransliteration ? 'Phonetic: ON' : 'Native'}
            </span>
          </button>

          {/* Streak */}
          <div 
            className="flex items-center gap-1.5 font-extrabold text-orange-500 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 rounded-xl border border-orange-200 dark:border-orange-800 cursor-default"
            title={`${streak} Day Streak!`}
          >
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-bounce-subtle" />
            <span className="text-xs sm:text-sm">{streak}</span>
          </div>

          {/* Chai Points / Gems */}
          <div 
            className="flex items-center gap-1.5 font-extrabold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-xl border border-amber-200 dark:border-amber-800 cursor-default"
            title={`${gems} Chai Points`}
          >
            <span className="text-sm sm:text-base">🫖</span>
            <span className="text-xs sm:text-sm">{gems}</span>
          </div>

          {/* Hearts */}
          <div 
            className="flex items-center gap-1.5 font-extrabold text-rose-500 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-xl border border-rose-200 dark:border-rose-800 cursor-default"
            title={`${hearts} Hearts`}
          >
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span className="text-xs sm:text-sm">{hearts}</span>
          </div>

          {/* QUICK THEME CHANGE BUTTON (Home Page Toggle) */}
          <button
            onClick={() => {
              sounds.playPop();
              onToggleTheme();
            }}
            className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
              isDark
                ? 'border-slate-700 bg-slate-800 text-amber-300 hover:bg-slate-700 hover:border-amber-400 shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-sm'
            }`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Theme`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-4 h-4 animate-in spin-in-180 duration-300" />
            )}
          </button>

          {/* SETTINGS GEAR BUTTON */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenSettings();
            }}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              isDark
                ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Settings (Preferences & Themes)"
          >
            <Settings className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Mobile sub-bar navigation */}
      <div className="flex md:hidden items-center justify-around pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-bold">
        <button
          onClick={() => onSelectTab('learn')}
          className={`px-3 py-1 rounded-lg ${activeTab === 'learn' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}
        >
          Learn
        </button>
        <button
          onClick={() => onSelectTab('akshara')}
          className={`px-3 py-1 rounded-lg ${activeTab === 'akshara' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}
        >
          Letters
        </button>
        <button
          onClick={() => onSelectTab('stories')}
          className={`px-3 py-1 rounded-lg ${activeTab === 'stories' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}
        >
          Chai Break ☕
        </button>
        <button
          onClick={() => onSelectTab('leaderboard')}
          className={`px-3 py-1 rounded-lg ${activeTab === 'leaderboard' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}
        >
          Leagues
        </button>
      </div>
    </header>
  );
}
