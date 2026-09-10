import React from 'react';
import { Award, Zap, Heart, Shield, Flame, ChevronRight } from 'lucide-react';
import Mascot from './Mascot';
import { DAILY_QUESTS, LEADERBOARD_USERS } from '../data/languages';
import { sounds } from '../utils/audio';

export default function RightSidebar({
  selectedLanguage,
  streak,
  hearts,
  gems,
  onRefillHearts,
  onOpenLeagues,
  completedLessonsCount = 1
}) {
  return (
    <aside className="w-full lg:w-80 space-y-5 select-none">
      
      {/* Mascot Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 dark:bg-emerald-900/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <div className="flex items-center gap-3">
          <Mascot mood="happy" size={75} />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm text-slate-800 dark:text-slate-100">Mitthu (मिठ्ठू)</span>
              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold px-1.5 py-0.5 rounded-full">
                Guru
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium italic">
              "{selectedLanguage.mascotQuote}"
            </p>
          </div>
        </div>
      </div>

      {/* Chai Power-ups & Hearts Store */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
        <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm mb-3 flex items-center justify-between">
          <span>Desi Bazaar & Refills</span>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <span>🫖</span> {gems} Chai Points
          </span>
        </h3>

        <div className="space-y-2.5">
          {/* Refill Hearts */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Refill Hearts</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Currently: {hearts}/5 hearts</p>
              </div>
            </div>
            <button
              onClick={onRefillHearts}
              disabled={hearts >= 5 || gems < 20}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                hearts >= 5
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                  : 'btn-3d-green text-white cursor-pointer'
              }`}
            >
              {hearts >= 5 ? 'Full' : '20 🫖'}
            </button>
          </div>

          {/* Cutting Chai Streak Freeze */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Chai Streak Freeze</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Protects your {streak}-day streak</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/40 px-2 py-1 rounded-lg">
              Active ✨
            </span>
          </div>
        </div>
      </div>

      {/* Daily Quests */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Daily Desi Quests</span>
          </h3>
          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Resets in 6h</span>
        </div>

        <div className="space-y-3">
          {DAILY_QUESTS.slice(0, 3).map((quest, idx) => {
            const currentProgress = idx === 0 ? Math.min(50, completedLessonsCount * 25) : idx === 1 ? completedLessonsCount : 4;
            const progressPercent = Math.min(100, Math.round((currentProgress / quest.target) * 100));

            return (
              <div key={quest.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-200">{quest.text}</span>
                  <span className="font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
                    <span>+</span>{quest.reward} 🫖
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500">
                  <span>{currentProgress} / {quest.target}</span>
                  {progressPercent >= 100 && <span className="text-emerald-600 dark:text-emerald-400">Completed! 🎉</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard Snapshot */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-1.5">
            <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Amethyst League</span>
          </h3>
          <button
            onClick={onOpenLeagues}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center cursor-pointer"
          >
            View All <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2">
          {LEADERBOARD_USERS.slice(0, 3).map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              <div className="flex items-center gap-2.5">
                <span className={`w-5 font-black text-xs text-center ${
                  user.rank === 1 ? 'text-amber-500' : user.rank === 2 ? 'text-slate-400' : 'text-amber-700'
                }`}>
                  #{user.rank}
                </span>
                <span className="text-lg">{user.avatar}</span>
                <div>
                  <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200 leading-none">{user.name}</p>
                  <p className="text-[10px] text-slate-400 font-semibold">{user.country}</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-slate-600 dark:text-slate-300">{user.xp} XP</span>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
