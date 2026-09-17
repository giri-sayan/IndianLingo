import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function AksharaTrainer({ selectedLanguage, onAddGems, theme = 'light' }) {
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('all'); // 'all' | 'vowel' | 'consonant'
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' | 'wrong'

  const alphabet = React.useMemo(() => selectedLanguage?.alphabet || [], [selectedLanguage]);
  const filteredLetters = alphabet.filter(l => filter === 'all' || l.type === filter);

  // Play letter pronunciation
  const handlePlayLetter = (letter) => {
    sounds.playPop();
    sounds.speak(letter.char, selectedLanguage.code);
  };

  // Start Quick Quiz
  const startQuiz = () => {
    sounds.playPop();
    setQuizMode(true);
    setCurrentQuizIdx(0);
    setQuizScore(0);
    setQuizFeedback(null);
  };

  const handleQuizAnswer = (chosenChar) => {
    const target = alphabet[currentQuizIdx % alphabet.length];
    if (chosenChar === target.char) {
      sounds.playCorrect();
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 1);
      onAddGems?.(5);
    } else {
      sounds.playWrong();
      setQuizFeedback('wrong');
    }

    setTimeout(() => {
      setQuizFeedback(null);
      if (currentQuizIdx + 1 < Math.min(8, alphabet.length)) {
        setCurrentQuizIdx(prev => prev + 1);
      } else {
        sounds.playFanfare();
      }
    }, 900);
  };

  const currentQuizTarget = alphabet[currentQuizIdx % alphabet.length];

  // Deterministic stable 4 choices per quiz question based on index
  const quizOptions = React.useMemo(() => {
    if (!currentQuizTarget || alphabet.length === 0) return [];
    const len = alphabet.length;
    const others = [
      alphabet[(currentQuizIdx + 1) % len],
      alphabet[(currentQuizIdx + 3) % len],
      alphabet[(currentQuizIdx + 5) % len]
    ].filter(Boolean);
    const list = others.filter(o => o.char !== currentQuizTarget.char);
    list.splice(currentQuizIdx % 4, 0, currentQuizTarget);
    return list;
  }, [currentQuizIdx, currentQuizTarget, alphabet]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 select-none">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
              Script Studio • {selectedLanguage.name}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Learn the Akshara (अक्षर)
            </h1>
            <p className="text-sm text-white/90 font-semibold mt-1 max-w-xl">
              Indian scripts are phonetic and scientific. Master the sounds, vowels, and consonants of {selectedLanguage.nativeName}.
            </p>
          </div>

          <button
            onClick={quizMode ? () => setQuizMode(false) : startQuiz}
            className="px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider btn-duo-yellow cursor-pointer shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {quizMode ? 'Back to Letters' : 'Test Memory (+5 🫖)'}
          </button>
        </div>
      </div>

      {/* QUIZ MODE */}
      {quizMode ? (
        <div className={`rounded-3xl p-6 sm:p-10 border-2 shadow-sm max-w-xl mx-auto text-center space-y-6 transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Question {currentQuizIdx + 1} of {Math.min(8, alphabet.length)}
            </span>
            <span className="text-xs font-black text-amber-600 dark:text-amber-400 flex items-center gap-1">
              Score: {quizScore} 🫖 (+5 pts each)
            </span>
          </div>

          <div className="py-4 space-y-3">
            <p className="text-xs font-black text-slate-400 uppercase tracking-wider">
              Select the matching character for this sound:
            </p>
            <h2 className="text-4xl font-black text-emerald-500">
              "{currentQuizTarget?.roman}"
            </h2>
            <p className="text-sm text-slate-400 font-semibold">
              {currentQuizTarget?.sound}
            </p>

            <button
              onClick={() => handlePlayLetter(currentQuizTarget)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer border ${
                isDark ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Volume2 className="w-4 h-4 text-emerald-500" /> Listen Sound 🔊
            </button>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-2 gap-3.5">
            {quizOptions.map((opt, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => !quizFeedback && handleQuizAnswer(opt.char)}
                  disabled={!!quizFeedback}
                  className={`p-6 rounded-3xl border-2 border-b-4 font-black text-3xl transition-all cursor-pointer ${
                    quizFeedback === 'correct' && opt.char === currentQuizTarget.char
                      ? 'bg-emerald-500 text-white border-emerald-600'
                      : quizFeedback === 'wrong' && opt.char === currentQuizTarget.char
                      ? 'bg-emerald-200 dark:bg-emerald-950 border-emerald-400 text-emerald-900 dark:text-emerald-200'
                      : isDark
                      ? 'bg-slate-800 border-slate-700 border-b-slate-600 text-white hover:border-emerald-500'
                      : 'bg-white border-slate-200 border-b-slate-300 text-slate-800 hover:border-emerald-400'
                  }`}
                >
                  {opt.char}
                </button>
              );
            })}
          </div>

          {quizFeedback && (
            <div className={`p-4 rounded-2xl font-black text-sm border-2 animate-in fade-in ${
              quizFeedback === 'correct' 
                ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800' 
                : 'bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800'
            }`}>
              {quizFeedback === 'correct' ? 'Correct! शाबाश! (+5 🫖)' : `The correct letter is: ${currentQuizTarget.char} (${currentQuizTarget.roman})`}
            </div>
          )}
        </div>
      ) : (
        /* ALPHABET GRID MODE */
        <div className="space-y-6">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => { sounds.playPop(); setFilter('all'); }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                filter === 'all'
                  ? 'btn-duo-green text-white shadow-sm'
                  : isDark
                  ? 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Letters ({alphabet.length})
            </button>
            <button
              onClick={() => { sounds.playPop(); setFilter('vowel'); }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                filter === 'vowel'
                  ? 'btn-duo-green text-white shadow-sm'
                  : isDark
                  ? 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Vowels (स्वर)
            </button>
            <button
              onClick={() => { sounds.playPop(); setFilter('consonant'); }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                filter === 'consonant'
                  ? 'btn-duo-green text-white shadow-sm'
                  : isDark
                  ? 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Consonants (व्यंजन)
            </button>
          </div>

          {/* Letter Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredLetters.map((letter, idx) => (
              <div
                key={idx}
                onClick={() => handlePlayLetter(letter)}
                className={`rounded-2xl p-4 border-2 border-b-4 transition-all flex flex-col items-center justify-between group cursor-pointer text-center relative ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 border-b-slate-700 hover:border-emerald-500'
                    : 'bg-white border-slate-200 border-b-slate-300 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  {letter.type}
                </span>

                <div className="my-2">
                  <span className="text-4xl font-black text-slate-800 dark:text-slate-100 group-hover:text-emerald-500 transition-colors">
                    {letter.char}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                    /{letter.roman}/
                  </p>
                  <p className="text-[11px] text-slate-400 font-semibold line-clamp-1 mt-0.5">
                    {letter.sound}
                  </p>
                </div>

                <button 
                  className={`mt-3 p-2 rounded-xl transition ${
                    isDark ? 'bg-slate-800 text-slate-400 group-hover:text-emerald-400' : 'bg-slate-100 text-slate-400 group-hover:text-emerald-600'
                  }`}
                  title="Play pronunciation"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
