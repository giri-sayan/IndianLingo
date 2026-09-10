import React from 'react';
import { Trophy, Award, Shield, Flame, Star, Sparkles, Clock } from 'lucide-react';
import { LEADERBOARD_USERS } from '../data/languages';
import Mascot from './Mascot';

export default function Leaderboard({ userXP = 240, completedLessonsCount = 1 }) {
  const allUsers = [
    ...LEADERBOARD_USERS,
    { rank: 8, name: 'You (Desi Learner)', avatar: '🎯', xp: userXP, league: 'Amethyst', country: 'India', isUser: true }
  ].sort((a, b) => b.xp - a.xp).map((u, i) => ({ ...u, rank: i + 1 }));

  const badges = [
    {
      title: 'Chai Connoisseur ☕',
      desc: 'Ordered cutting chai and mastered street food terms',
      unlocked: completedLessonsCount >= 2,
      icon: '🫖'
    },
    {
      title: 'Desi Polyglot 🇮🇳',
      desc: 'Explored multiple Indian language paths',
      unlocked: true,
      icon: '🌍'
    },
    {
      title: 'Akshara Scholar 📜',
      desc: 'Mastered the vowels & consonants in Script Studio',
      unlocked: true,
      icon: '✍️'
    },
    {
      title: 'Rickshaw Navigator 🛺',
      desc: 'Navigated meter rides and Indian street directions',
      unlocked: completedLessonsCount >= 4,
      icon: '🛺'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* League Header */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                Tier: Amethyst League 💎
              </span>
              <span className="text-xs font-semibold text-purple-200 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 3 days left
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              All-India Polyglot Leaderboard
            </h1>
            <p className="text-sm text-purple-200 font-medium mt-1 max-w-xl">
              Top 10 learners advance to the Diamond League on Sunday midnight!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center">
            <p className="text-[11px] font-bold text-purple-200 uppercase">Your Ranking</p>
            <p className="text-2xl font-black text-amber-300">
              #{allUsers.find(u => u.isUser)?.rank || 4}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Rankings Table */}
        <div className="md:col-span-2 bg-white rounded-3xl border-2 border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Weekly Rankings</span>
            </h3>
            <span className="text-xs font-bold text-slate-400">Sorted by XP</span>
          </div>

          <div className="divide-y divide-slate-100">
            {allUsers.map((learner) => (
              <div
                key={learner.rank}
                className={`flex items-center justify-between p-4 transition ${
                  learner.isUser
                    ? 'bg-emerald-50/80 font-black border-l-4 border-l-emerald-500'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 text-center font-black text-sm ${
                    learner.rank === 1 ? 'text-amber-500 text-lg' :
                    learner.rank === 2 ? 'text-slate-400 text-base' :
                    learner.rank === 3 ? 'text-amber-700 text-base' :
                    'text-slate-400'
                  }`}>
                    {learner.rank === 1 ? '🥇' : learner.rank === 2 ? '🥈' : learner.rank === 3 ? '🥉' : `#${learner.rank}`}
                  </span>
                  
                  <span className="text-2xl">{learner.avatar}</span>
                  <div>
                    <p className={`text-sm ${learner.isUser ? 'font-black text-emerald-800' : 'font-extrabold text-slate-800'}`}>
                      {learner.name}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {learner.country} • {learner.league}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-black text-sm text-slate-700">
                    {learner.xp}
                  </span>
                  <span className="text-xs font-bold text-amber-600 ml-1">XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges / Desi Achievements */}
        <div className="bg-white rounded-3xl p-5 border-2 border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-1.5">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Desi Badges</span>
            </h3>
            <span className="text-xs font-bold text-emerald-600">
              {badges.filter(b => b.unlocked).length}/{badges.length} Unlocked
            </span>
          </div>

          <div className="space-y-3">
            {badges.map((b, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl border flex items-start gap-3 transition ${
                  b.unlocked
                    ? 'bg-amber-50/50 border-amber-200 text-slate-800'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="text-2xl p-2 rounded-xl bg-white shadow-xs shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xs">
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <Mascot mood="proud" size={70} message="Keep collecting XP! Shabaash!" className="justify-center" />
          </div>
        </div>

      </div>

    </div>
  );
}
