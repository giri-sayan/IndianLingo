import React from 'react';
import Mascot from './Mascot';

const ProfileView = ({ streak, _gems, _hearts, completedLessonsCount, selectedLanguage, equippedOutfit, theme }) => {
  const isDark = theme === 'dark';
  
  const totalXp = completedLessonsCount * 50 + 350;
  
  const achievements = [
    { id: 'wildfire', title: 'Wildfire', description: 'Reach a 3 day streak', icon: '🔥', current: streak, max: 3, levels: [3, 7, 14, 30, 50, 100, 365] },
    { id: 'chai', title: 'Chai Connoisseur', description: 'Earn 100 XP', icon: '🫖', current: totalXp, max: 100, levels: [100, 500, 1000, 5000] },
    { id: 'words', title: 'Word Collector', description: 'Complete 1 lesson', icon: '📚', current: completedLessonsCount, max: 1, levels: [1, 5, 10, 25, 50] },
    { id: 'flawless', title: 'Flawless Finisher', description: 'Complete a lesson with no mistakes', icon: '✨', current: 0, max: 1, levels: [1, 5, 10] },
    { id: 'early', title: 'Early Bird', description: 'Complete a lesson before 9am', icon: '🌅', current: 0, max: 1, levels: [1, 5] },
    { id: 'night', title: 'Night Owl', description: 'Complete a lesson after 10pm', icon: '🦉', current: 0, max: 1, levels: [1, 5] },
    { id: 'weekend', title: 'Weekend Warrior', description: 'Complete a lesson on the weekend', icon: '⚔️', current: 0, max: 1, levels: [1, 5] },
    { id: 'polyglot', title: 'Polyglot Explorer', description: 'Start 2 language courses', icon: '🌍', current: 1, max: 2, levels: [2, 3] },
  ];

  return (
    <div className={`max-w-4xl mx-auto p-4 md:p-8 ${isDark ? 'text-white' : 'text-slate-700'}`}>
      <div className={`relative mb-8 rounded-2xl overflow-hidden border-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="h-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>
        <div className="px-6 pb-6 pt-16 relative flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="absolute -top-16 left-6 w-32 h-32 rounded-full border-4 border-white bg-slate-100 dark:border-slate-800 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
            <Mascot status="idle" className="w-24 h-24" equippedOutfit={equippedOutfit} />
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Learner</h1>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Joined September 2026</p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-xl">{streak}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Streak</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-xl">{totalXp}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Total XP</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">💎</span>
            <span className="font-bold text-xl">Amethyst</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current League</span>
          </div>
          <div className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
            <span className="text-2xl">📅</span>
            <span className="font-bold text-xl">{streak + 2}</span>
            <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Days Active</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Courses</h2>
        <div className={`p-4 rounded-2xl border-2 flex items-center justify-between ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center gap-4">
            <span className="text-3xl">{selectedLanguage?.flag || '🇮🇳'}</span>
            <div>
              <h3 className="font-bold">{selectedLanguage?.name || 'Hindi'}</h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Active Course</p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{totalXp} XP</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = ach.current > 0;
            const progress = Math.min(100, Math.max(0, (ach.current / ach.max) * 100));
            const currentLevelIndex = ach.levels.findIndex(l => l > ach.current);
            const level = currentLevelIndex === -1 ? ach.levels.length : currentLevelIndex;
            
            return (
              <div key={ach.id} className={`p-4 rounded-2xl border-2 flex items-center gap-4 ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} ${!isUnlocked ? 'opacity-60' : ''}`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-slate-100 dark:bg-slate-700 border-2 ${isUnlocked ? 'border-amber-400' : 'border-transparent'}`}>
                  {ach.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold text-sm md:text-base">{ach.title}</h3>
                    <span className={`text-xs font-black px-2 py-0.5 rounded-full ${isUnlocked ? 'bg-amber-400 text-amber-950' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                      Level {level}
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{ach.description}</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className={`text-xs mt-1 text-right font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {ach.current} / {ach.max}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
