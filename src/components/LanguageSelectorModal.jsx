import React from 'react';
import { X, Check, Users, MapPin } from 'lucide-react';
import { INDIAN_LANGUAGES } from '../data/languages';
import { sounds } from '../utils/audio';

export default function LanguageSelectorModal({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent">
          <div>
            <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <span>🇮🇳</span> Select an Indian Language to Learn
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">
              Explore 9 rich classical & modern linguistic traditions of India
            </p>
          </div>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Grid */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {INDIAN_LANGUAGES.map((lang) => {
              const isSelected = lang.id === selectedLanguage.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => {
                    sounds.playPop();
                    sounds.speak(lang.greeting.split(' ')[0], lang.code);
                    onSelectLanguage(lang);
                    onClose();
                  }}
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-400/20'
                      : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{lang.flagEmoji}</span>
                      {isSelected && (
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <p className="font-extrabold text-base text-slate-800 group-hover:text-emerald-700">
                      {lang.name}
                    </p>
                    <p className="font-bold text-lg text-emerald-600 mt-0.5">
                      {lang.nativeName}
                    </p>
                    <p className="text-xs text-slate-500 italic mt-1 line-clamp-1">
                      {lang.greeting}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      {lang.speakers}
                    </span>
                    <span className="flex items-center gap-1 max-w-[110px] truncate text-right">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      {lang.region.split('&')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>💡 You can switch languages anytime without losing your XP!</span>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="font-bold text-emerald-600 hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
