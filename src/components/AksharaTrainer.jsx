import React, { useState } from 'react';
import { Volume2, Sparkles, Check, RefreshCw, HelpCircle, Award } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function AksharaTrainer({ selectedLanguage, onAddGems }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'vowel' | 'consonant'
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' | 'wrong'

  const alphabet = selectedLanguage.alphabet || [];
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
        // Quiz completed
        sounds.playFanfare();
      }
    }, 900);
  };

  const currentQuizTarget = alphabet[currentQuizIdx % alphabet.length];
  // Generate 4 randomized options including the correct target
  const quizOptions = React.useMemo(() => {
    if (!currentQuizTarget) return [];
    const others = alphabet.filter(a => a.char !== currentQuizTarget.char);
    const shuffled = [currentQuizTarget, ...others.sort(() => 0.5 - Math.random()).slice(0, 3)];
    return shuffled.sort(() => 0.5 - Math.random());
  }, [currentQuizIdx, alphabet, currentQuizTarget]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-green-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Script Studio • {selectedLanguage.name}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Learn the Akshara (अक्षर)
            </h1>
            <p className="text-sm text-white/85 font-medium mt-1 max-w-xl">
              Indian scripts are phonetic and scientific. Master the sounds, vowels, and consonants of {selectedLanguage.nativeName}.
            </p>
          </div>

          <button
            onClick={quizMode ? () => setQuizMode(false) : startQuiz}
            className="px-5 py-3 rounded-2xl font-black text-sm bg-amber-400 text-amber-950 hover:bg-amber-300 shadow-[0_4px_0_#b45309] active:translate-y-1 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            {quizMode ? 'Back to Letters' : 'Test Your Memory'}
          </button>
        </div>
      </div>

      {/* QUIZ MODE */}
      {quizMode ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-sm max-w-xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Question {currentQuizIdx + 1} of {Math.min(8, alphabet.length)}
            </span>
            <span className="text-xs font-extrabold text-amber-600 flex items-center gap-1">
              Score: {quizScore} 🫖 (+5 pts each)
            </span>
          </div>

          <div className="py-4 space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase">
              Select the matching character for the sound:
            </p>
            <h2 className="text-3xl font-black text-emerald-600">
              "{currentQuizTarget?.roman}"
            </h2>
            <p className="text-sm text-slate-400 italic">
              {currentQuizTarget?.sound}
            </p>

            <button
              onClick={() => handlePlayLetter(currentQuizTarget)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition"
            >
              <Volume2 className="w-4 h-4 text-emerald-600" /> Listen Sound
            </button>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-2 gap-3">
            {quizOptions.map((opt, idx) => {
              const isSelected = quizFeedback && opt.char === currentQuizTarget.char;
              return (
                <button
                  key={idx}
                  onClick={() => !quizFeedback && handleQuizAnswer(opt.char)}
                  disabled={!!quizFeedback}
                  className={`p-6 rounded-2xl border-2 font-black text-3xl transition-all cursor-pointer ${
                    quizFeedback === 'correct' && opt.char === currentQuizTarget.char
                      ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                      : quizFeedback === 'wrong' && opt.char === currentQuizTarget.char
                      ? 'bg-emerald-200 border-emerald-400 text-emerald-900'
                      : 'bg-white border-slate-200 hover:border-emerald-400 text-slate-800 hover:bg-emerald-50/50'
                  }`}
                >
                  {opt.char}
                </button>
              );
            })}
          </div>

          {quizFeedback && (
            <div className={`p-3 rounded-xl font-bold text-sm ${
              quizFeedback === 'correct' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}>
              {quizFeedback === 'correct' ? 'Correct! शाबाश!' : `The correct letter is: ${currentQuizTarget.char} (${currentQuizTarget.roman})`}
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
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Letters ({alphabet.length})
            </button>
            <button
              onClick={() => { sounds.playPop(); setFilter('vowel'); }}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                filter === 'vowel'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Vowels (स्वर)
            </button>
            <button
              onClick={() => { sounds.playPop(); setFilter('consonant'); }}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                filter === 'consonant'
                  ? 'bg-emerald-600 text-white shadow-sm'
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
                className="bg-white rounded-2xl p-4 border-2 border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col items-center justify-between group cursor-pointer text-center relative"
              >
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                  {letter.type}
                </span>

                <div className="my-2">
                  <span className="text-4xl font-black text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {letter.char}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-emerald-700">
                    /{letter.roman}/
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium line-clamp-1 mt-0.5">
                    {letter.sound}
                  </p>
                </div>

                <button 
                  className="mt-3 p-1.5 rounded-lg bg-slate-50 group-hover:bg-emerald-100 text-slate-400 group-hover:text-emerald-700 transition"
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
