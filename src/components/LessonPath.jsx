import React, { useState } from 'react';
import { Check, Lock, Star, BookOpen, Trophy, X, Play } from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function LessonPath({
  selectedLanguage,
  completedLessons = {},
  onStartLesson,
  onClaimChest,
  onOpenGuidebook,
  equippedOutfit = 'default'
}) {
  // Active selected node popover state: { lesson, unit }
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (lesson, unit) => {
    sounds.playPop();
    if (selectedNode?.lesson.id === lesson.id) {
      setSelectedNode(null);
    } else {
      setSelectedNode({ lesson, unit });
    }
  };

  return (
    <div className="space-y-12 pb-24 max-w-xl mx-auto select-none relative">
      {/* Click outside popover backdrop */}
      {selectedNode && (
        <div 
          className="fixed inset-0 z-30 bg-transparent"
          onClick={() => setSelectedNode(null)}
        />
      )}

      {selectedLanguage.units.map((unit, unitIdx) => {
        const unitLessons = unit.lessons || [];
        const completedCount = unitLessons.filter(l => completedLessons[l.id]).length;
        const isUnitCompleted = completedCount === unitLessons.length && unitLessons.length > 0;

        // Distinct IndianLingo Unit Gradient Banners
        const bannerStyles = [
          'bg-gradient-to-r from-emerald-600 to-teal-700 border-emerald-800', // Royal Emerald / Peacock
          'bg-gradient-to-r from-amber-500 to-orange-600 border-amber-700',   // Royal Saffron / Marigold
          'bg-gradient-to-r from-blue-600 to-indigo-700 border-blue-800',     // Royal Azure / Indigo
          'bg-gradient-to-r from-purple-600 to-violet-800 border-purple-800', // Royal Amethyst / Jamun
          'bg-gradient-to-r from-rose-600 to-red-700 border-rose-800'        // Royal Crimson / Gulal
        ][unitIdx % 5];

        return (
          <div key={unit.id} className="relative">
            {/* Unit Header Card */}
            <div className={`rounded-3xl p-6 text-white border-b-6 shadow-md relative overflow-hidden transition-all ${bannerStyles}`}>
              
              {/* Subtle background mandala pattern */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border-8 border-white/10 pointer-events-none flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border-4 border-white/15" />
              </div>

              <div className="flex items-start justify-between relative z-10 gap-4">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider bg-black/20 px-3 py-0.5 rounded-full backdrop-blur-sm">
                      {unit.title.split(':')[0]}
                    </span>
                    {isUnitCompleted && (
                      <span className="text-xs font-black bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Trophy className="w-3 h-3" /> Mastered
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black mt-1 leading-tight">
                    {unit.title.includes(':') ? unit.title.split(':')[1].trim() : unit.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1.5 leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                {/* Duolingo Guidebook Notebook Button */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => {
                      sounds.playPop();
                      onOpenGuidebook(unit);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur font-black text-xs uppercase tracking-wider transition-all border border-white/30 cursor-pointer active:translate-y-0.5"
                    title="Open Unit Guidebook"
                  >
                    <BookOpen className="w-4 h-4 text-white" />
                    <span className="hidden sm:inline">GUIDEBOOK</span>
                  </button>

                  <span className="text-xs font-extrabold text-white/90">
                    {completedCount}/{unitLessons.length} Done
                  </span>
                </div>
              </div>
            </div>

            {/* Stepping Stones Path */}
            <div className="py-12 relative flex flex-col items-center gap-9">
              {unitLessons.map((lesson, lessonIdx) => {
                const isCompleted = !!completedLessons[lesson.id];
                const isPrevCompleted = lessonIdx === 0 
                  ? (unitIdx === 0 || !!completedLessons[selectedLanguage.units[unitIdx - 1]?.lessons?.slice(-1)[0]?.id])
                  : !!completedLessons[unitLessons[lessonIdx - 1]?.id];
                
                const isCurrent = !isCompleted && isPrevCompleted;
                const isLocked = !isCompleted && !isPrevCompleted;

                // Sine wave offset pattern: 0, -48px, 0, 48px
                const offsets = ['translate-x-0', '-translate-x-12 sm:-translate-x-16', 'translate-x-0', 'translate-x-12 sm:translate-x-16'];
                const offsetClass = offsets[lessonIdx % 4];

                const isPopoverOpen = selectedNode?.lesson.id === lesson.id;

                return (
                  <div 
                    key={lesson.id} 
                    className={`relative flex items-center justify-center transition-transform ${offsetClass}`}
                  >
                    {/* Mascot hovering beside current active node */}
                    {isCurrent && (
                      <div className="absolute -left-28 sm:-left-36 -top-6 z-20 pointer-events-none hidden sm:block animate-bounce-subtle">
                        <Mascot mood="cheering" size={85} outfit={equippedOutfit} message="Start here! चलो!" />
                      </div>
                    )}

                    {/* Milestone 3D Node Button */}
                    <div className="relative flex items-center justify-center">
                      {/* Duolingo Circular Progress Ring */}
                      {isCurrent && (
                        <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none -rotate-90 z-10" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke="#e5e5e5"
                            strokeWidth="6"
                            className="opacity-30 dark:opacity-20"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="6"
                            strokeDasharray="276"
                            strokeDashoffset="90"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}

                      <button
                        onClick={() => {
                          if (!isLocked) {
                            handleNodeClick(lesson, unit);
                          }
                        }}
                        disabled={isLocked}
                        className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full flex flex-col items-center justify-center font-black transition-all cursor-pointer relative z-20 ${
                          isCompleted
                            ? 'bg-[#f59e0b] border-4 border-[#d97706] text-[#78350f] shadow-[0_8px_0_#b45309] hover:bg-[#fbbf24] active:translate-y-1 active:shadow-[0_4px_0_#b45309]'
                            : isCurrent
                            ? 'bg-[#059669] border-4 border-[#047857] text-white shadow-[0_8px_0_#065f46] hover:bg-[#10b981] active:translate-y-1 active:shadow-[0_4px_0_#065f46] pulse-node'
                            : 'bg-slate-200 dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed shadow-[0_6px_0_#cbd5e1] dark:shadow-[0_6px_0_#0f172a]'
                        }`}
                        title={lesson.title}
                      >
                        {isCompleted ? (
                          <Check className="w-9 h-9 stroke-[4] drop-shadow-sm" />
                        ) : isCurrent ? (
                          <Star className="w-9 h-9 fill-white stroke-[2.5] drop-shadow-sm" />
                        ) : (
                          <Lock className="w-7 h-7 stroke-[2.5]" />
                        )}
                        <span className="text-[10px] font-black tracking-tight mt-0.5">
                          {lesson.xp} XP
                        </span>
                      </button>

                      {/* Duolingo Floating Start Popover */}
                      {isPopoverOpen && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-40 w-72 sm:w-80 animate-in zoom-in-95 duration-150">
                          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border-2 border-slate-200 dark:border-slate-700 shadow-2xl text-slate-800 dark:text-slate-100 relative">
                            
                            {/* Close button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedNode(null);
                              }}
                              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            <div className="space-y-1 pr-6">
                              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                {isCompleted ? '✓ Review Lesson' : `Lesson ${lessonIdx + 1} of ${unitLessons.length}`}
                              </span>
                              <h3 className="text-base font-black leading-tight">
                                {lesson.title}
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                                {isCompleted ? 'Practice to strengthen your recall' : 'Master new vocabulary & phrases'}
                              </p>
                            </div>

                            {/* Big 3D Duolingo Action Button */}
                            <button
                              onClick={() => {
                                setSelectedNode(null);
                                onStartLesson(lesson, unit);
                              }}
                              className="w-full mt-4 py-3 rounded-2xl font-black text-sm uppercase tracking-wider btn-duo-green text-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
                            >
                              <Play className="w-4 h-4 fill-white" />
                              <span>{isCompleted ? 'PRACTICE +10 XP' : `START +${lesson.xp} XP`}</span>
                            </button>

                            {/* Guidebook link inside popover */}
                            <button
                              onClick={() => {
                                setSelectedNode(null);
                                onOpenGuidebook(unit);
                              }}
                              className="w-full mt-2 py-1 text-center text-xs font-bold text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
                            >
                              📖 View Unit Guidebook
                            </button>
                          </div>

                          {/* Popover Arrow */}
                          <div className="w-4 h-4 bg-white dark:bg-slate-900 border-b-2 border-r-2 border-slate-200 dark:border-slate-700 rotate-45 mx-auto -mt-2 shadow-sm" />
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

              {/* End-of-Unit Treasure Chest */}
              <div className="relative mt-3">
                <button
                  onClick={() => {
                    if (isUnitCompleted) {
                      sounds.playFanfare();
                      onClaimChest(unit.id);
                    }
                  }}
                  disabled={!isUnitCompleted}
                  className={`p-4 rounded-3xl border-2 flex items-center gap-3.5 transition-all ${
                    isUnitCompleted
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 hover:scale-105 cursor-pointer shadow-lg'
                      : 'bg-slate-100/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${
                    isUnitCompleted ? 'bg-amber-400 text-white animate-bounce' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                  }`}>
                    🎁
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-wider">
                      {isUnitCompleted ? 'Unit Mastered! Claim Reward' : 'Unit Reward Chest'}
                    </p>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                      +50 Chai Points 🫖
                    </p>
                  </div>
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
