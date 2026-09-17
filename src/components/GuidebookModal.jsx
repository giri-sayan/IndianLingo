import React from 'react';
import { X, BookOpen, Volume2, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function GuidebookModal({
  isOpen,
  onClose,
  unit,
  selectedLanguage,
  theme = 'light'
}) {
  if (!isOpen || !unit) return null;
  const isDark = theme === 'dark';

  // Extract key vocabulary from unit lessons
  const keyPhrases = [];
  unit.lessons?.forEach(l => {
    l.questions?.forEach(q => {
      if (q.audioText && !keyPhrases.some(p => p.audioText === q.audioText)) {
        keyPhrases.push({
          audioText: q.audioText,
          prompt: q.prompt,
          roman: q.targetRoman || '',
          meaning: q.options?.find(o => o.correct)?.text || q.explanation || ''
        });
      }
      if (q.pairs) {
        q.pairs.forEach(pair => {
          const rawText = pair.left.split('(')[0].trim();
          if (!keyPhrases.some(p => p.audioText === rawText)) {
            keyPhrases.push({
              audioText: rawText,
              prompt: 'Vocabulary item',
              roman: pair.left.includes('(') ? pair.left.split('(')[1].replace(')', '').trim() : '',
              meaning: pair.right
            });
          }
        });
      }
    });
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className={`rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border transition-colors ${
        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className={`px-6 py-5 border-b flex items-center justify-between ${
          isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-emerald-500 text-white border-emerald-600'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider opacity-90">
                Unit Guidebook • {selectedLanguage.name}
              </span>
              <h2 className="text-xl font-black">
                {unit.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guidebook Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Unit Overview */}
          <div className={`p-4 rounded-2xl border ${
            isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="font-extrabold text-sm text-emerald-500 uppercase tracking-wider mb-1">
              Unit Objective
            </h3>
            <p className="text-sm font-semibold leading-relaxed">
              {unit.description}
            </p>
          </div>

          {/* Key Phrases Section */}
          <div className="space-y-3">
            <h3 className="font-black text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Key Phrases & Pronunciation</span>
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {keyPhrases.slice(0, 6).map((phrase, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between transition ${
                    isDark ? 'bg-slate-800/40 border-slate-700/80 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => sounds.speak(phrase.audioText, selectedLanguage.code)}
                      className="p-2.5 rounded-xl btn-duo-blue text-white cursor-pointer shrink-0"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <p className="text-base font-black text-slate-900 dark:text-slate-100">
                        {phrase.audioText}
                      </p>
                      {phrase.roman && (
                        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          /{phrase.roman}/
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-[200px] text-right truncate">
                    {phrase.meaning.replace(/ *\([^)]*\) */g, "").trim() || phrase.prompt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar & Cultural Tips */}
          <div className={`p-4 rounded-2xl border space-y-2 ${
            isDark ? 'bg-amber-950/20 border-amber-900/40 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}>
            <h4 className="font-black text-xs uppercase tracking-wider flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
              <span>💡</span> Guru Sheru's Tip:
            </h4>
            <p className="text-xs font-semibold leading-relaxed">
              In Indian languages, respect is embedded deeply in pronouns and verb endings! Always use respectful plurals (like "आप" or "நீங்கள்") when speaking to elders, teachers, or shopkeepers.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t flex items-center justify-end ${
          isDark ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-50 border-slate-100'
        }`}>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider btn-duo-green text-white cursor-pointer"
          >
            Got it!
          </button>
        </div>

      </div>
    </div>
  );
}
