import React from 'react';
import { Check, Lock, Star, Sparkles, BookOpen, Gift, Trophy, ArrowRight } from 'lucide-react';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function LessonPath({
  selectedLanguage,
  completedLessons = {},
  onStartLesson,
  onClaimChest
}) {
  return (
    <div className="space-y-12 pb-16 max-w-xl mx-auto">
      {selectedLanguage.units.map((unit, unitIdx) => {
        // Calculate unit completion
        const unitLessons = unit.lessons || [];
        const completedCount = unitLessons.filter(l => completedLessons[l.id]).length;
        const isUnitCompleted = completedCount === unitLessons.length && unitLessons.length > 0;

        return (
          <div key={unit.id} className="relative">
            {/* Unit Header Card */}
            <div className={`rounded-3xl p-6 text-white shadow-lg relative overflow-hidden ${
              unitIdx === 0 ? 'bg-gradient-to-r from-emerald-600 to-teal-700' :
              unitIdx === 1 ? 'bg-gradient-to-r from-amber-500 to-orange-600' :
              unitIdx === 2 ? 'bg-gradient-to-r from-blue-600 to-indigo-700' :
              'bg-gradient-to-r from-purple-600 to-fuchsia-700'
            }`}>
              {/* Decorative Indian Mandala/Pattern watermark */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border-8 border-white/10 pointer-events-none flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border-4 border-white/15" />
              </div>

              <div className="flex items-start justify-between relative z-10">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {unit.title.split(':')[0]}
                    </span>
                    {isUnitCompleted && (
                      <span className="text-xs font-black bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> Mastered
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black mt-1">
                    {unit.title.includes(':') ? unit.title.split(':')[1].trim() : unit.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/85 font-medium mt-1.5 leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-2xl font-black">{completedCount}/{unitLessons.length}</span>
                  <span className="text-[11px] text-white/80 font-semibold uppercase">Lessons</span>
                </div>
              </div>
            </div>

            {/* Stepping Stones Path */}
            <div className="py-10 relative flex flex-col items-center gap-7">
              {unitLessons.map((lesson, lessonIdx) => {
                const isCompleted = !!completedLessons[lesson.id];
                // First lesson of unit 1 is unlocked by default, or if previous lesson completed
                const isPrevCompleted = lessonIdx === 0 
                  ? (unitIdx === 0 || !!completedLessons[selectedLanguage.units[unitIdx - 1]?.lessons?.slice(-1)[0]?.id])
                  : !!completedLessons[unitLessons[lessonIdx - 1]?.id];
                
                const isCurrent = !isCompleted && isPrevCompleted;
                const isLocked = !isCompleted && !isPrevCompleted;

                // Subtle sine wave offset (left, center, right, center)
                const offsetClass = lessonIdx % 4 === 0 
                  ? 'translate-x-0' 
                  : lessonIdx % 4 === 1 
                  ? '-translate-x-12 sm:-translate-x-16' 
                  : lessonIdx % 4 === 2 
                  ? 'translate-x-0' 
                  : 'translate-x-12 sm:translate-x-16';

                return (
                  <div 
                    key={lesson.id} 
                    className={`relative flex items-center justify-center transition-transform ${offsetClass}`}
                  >
                    {/* Mascot hovering near current active node */}
                    {isCurrent && (
                      <div className="absolute -left-28 sm:-left-36 -top-6 z-20 pointer-events-none hidden sm:block animate-bounce-subtle">
                        <Mascot mood="cheering" size={85} message="Start here! चलो!" />
                      </div>
                    )}

                    {/* Milestone Node */}
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (!isLocked) {
                            sounds.playPop();
                            onStartLesson(lesson, unit);
                          }
                        }}
                        disabled={isLocked}
                        className={`w-20 h-20 rounded-full flex flex-col items-center justify-center font-black transition-all transform cursor-pointer ${
                          isCompleted
                            ? 'bg-amber-400 border-4 border-amber-500 text-white shadow-[0_6px_0_#d97706] hover:bg-amber-300 active:translate-y-1'
                            : isCurrent
                            ? 'bg-emerald-500 border-4 border-emerald-600 text-white shadow-[0_6px_0_#059669] hover:bg-emerald-400 active:translate-y-1 pulse-node'
                            : 'bg-slate-200 border-4 border-slate-300 text-slate-400 cursor-not-allowed shadow-[0_5px_0_#cbd5e1]'
                        }`}
                        title={lesson.title}
                      >
                        {isCompleted ? (
                          <Check className="w-8 h-8 stroke-[3.5] drop-shadow" />
                        ) : isCurrent ? (
                          <Star className="w-8 h-8 fill-white stroke-[2] drop-shadow animate-spin-slow" />
                        ) : (
                          <Lock className="w-6 h-6 stroke-[2.5]" />
                        )}
                        <span className="text-[10px] font-black tracking-tight mt-0.5">
                          {lesson.xp} XP
                        </span>
                      </button>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:flex flex-col items-center pointer-events-none z-30 min-w-[180px]">
                        <div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl text-center">
                          <p className="font-extrabold">{lesson.title}</p>
                          <p className="text-[10px] text-emerald-400 mt-0.5">
                            {isCompleted ? '✓ Completed (Review)' : isCurrent ? '▶ Current Lesson' : '🔒 Complete previous to unlock'}
                          </p>
                        </div>
                        <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1" />
                      </div>
                    </div>

                  </div>
                );
              })}

              {/* End-of-Unit Treasure Chest */}
              <div className="relative mt-2">
                <button
                  onClick={() => {
                    if (isUnitCompleted) {
                      sounds.playFanfare();
                      onClaimChest(unit.id);
                    }
                  }}
                  className={`p-4 rounded-3xl border-2 flex items-center gap-3 transition-all ${
                    isUnitCompleted
                      ? 'bg-amber-50 border-amber-300 text-amber-900 hover:scale-105 cursor-pointer shadow-md'
                      : 'bg-slate-100/70 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                    isUnitCompleted ? 'bg-amber-400 text-white animate-bounce' : 'bg-slate-200 text-slate-400'
                  }`}>
                    🎁
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-wider">
                      {isUnitCompleted ? 'Claim Unit Reward!' : 'Unit Reward Chest'}
                    </p>
                    <p className="text-xs font-bold text-amber-600">
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
