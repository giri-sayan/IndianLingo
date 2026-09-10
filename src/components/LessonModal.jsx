import React, { useState, useEffect } from 'react';
import { X, Heart, Volume2, CheckCircle2, XCircle, ArrowRight, RotateCcw, Turtle } from 'lucide-react';
import confetti from 'canvas-confetti';
import Mascot from './Mascot';
import { sounds } from '../utils/audio';

export default function LessonModal({
  isOpen,
  lesson,
  unit,
  selectedLanguage,
  hearts,
  onDeductHeart,
  onCompleteLesson,
  onClose,
  showTransliteration
}) {
  if (!isOpen || !lesson) return null;

  const questions = lesson.questions || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // Interaction states
  const [selectedOption, setSelectedOption] = useState(null); // for multiple-choice & fill-blank & listening
  const [selectedSentenceWords, setSelectedSentenceWords] = useState([]); // for sentence-builder
  const [matchedPairs, setMatchedPairs] = useState([]); // for match-pairs: list of matched left keys
  const [selectedPairLeft, setSelectedPairLeft] = useState(null);
  const [selectedPairRight, setSelectedPairRight] = useState(null);
  const [pairError, setPairError] = useState(false);

  // Status & Feedback
  const [status, setStatus] = useState('idle'); // 'idle' | 'correct' | 'wrong' | 'completed' | 'failed'
  const [correctCount, setCorrectCount] = useState(0);

  const currentQ = questions[currentIdx];
  const progressPercent = questions.length > 0 ? ((currentIdx) / questions.length) * 100 : 0;

  // Speak prompt on change if audio exists
  useEffect(() => {
    if (currentQ?.audioText) {
      sounds.speak(currentQ.audioText, selectedLanguage.code);
    }
  }, [currentIdx, currentQ]);

  // Clean state when moving to next question
  const resetQuestionState = () => {
    setSelectedOption(null);
    setSelectedSentenceWords([]);
    setMatchedPairs([]);
    setSelectedPairLeft(null);
    setSelectedPairRight(null);
    setPairError(false);
    setStatus('idle');
  };

  // Check answers
  const handleCheckAnswer = () => {
    if (!currentQ) return;
    let isCorrect = false;

    if (currentQ.type === 'multiple-choice' || currentQ.type === 'listening' || currentQ.type === 'fill-blank') {
      if (selectedOption?.correct) {
        isCorrect = true;
      }
    } else if (currentQ.type === 'sentence-builder') {
      const built = selectedSentenceWords.join(' ').trim();
      const target = currentQ.correctSequence.join(' ').trim();
      if (built === target) {
        isCorrect = true;
      }
    } else if (currentQ.type === 'match-pairs') {
      if (matchedPairs.length === currentQ.pairs.length) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      sounds.playCorrect();
      setStatus('correct');
      setCorrectCount(prev => prev + 1);
    } else {
      sounds.playWrong();
      setStatus('wrong');
      onDeductHeart();
      if (hearts <= 1) {
        // Will run out of hearts on this wrong answer
        setStatus('failed');
      }
    }
  };

  // Handle Match Pairs tap
  const handlePairClick = (side, item) => {
    sounds.playPop();
    if (side === 'left') {
      if (matchedPairs.includes(item.left)) return;
      setSelectedPairLeft(item);
      if (selectedPairRight) {
        verifyPairMatch(item, selectedPairRight);
      }
    } else {
      const alreadyMatched = matchedPairs.some(
        key => currentQ.pairs.find(p => p.left === key)?.right === item.right
      );
      if (alreadyMatched) return;
      setSelectedPairRight(item);
      if (selectedPairLeft) {
        verifyPairMatch(selectedPairLeft, item);
      }
    }
  };

  const verifyPairMatch = (leftItem, rightItem) => {
    const isMatching = currentQ.pairs.some(
      p => p.left === leftItem.left && p.right === rightItem.right
    );

    if (isMatching) {
      const nextMatched = [...matchedPairs, leftItem.left];
      setMatchedPairs(nextMatched);
      setSelectedPairLeft(null);
      setSelectedPairRight(null);
      sounds.playPop();

      if (nextMatched.length === currentQ.pairs.length) {
        sounds.playCorrect();
        setStatus('correct');
        setCorrectCount(prev => prev + 1);
      }
    } else {
      setPairError(true);
      setTimeout(() => {
        setSelectedPairLeft(null);
        setSelectedPairRight(null);
        setPairError(false);
      }, 500);
    }
  };

  // Move to next question or complete lesson
  const handleContinue = () => {
    sounds.playPop();
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      resetQuestionState();
    } else {
      // Completed lesson!
      sounds.playFanfare();
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      setStatus('completed');
      onCompleteLesson(lesson.id, lesson.xp || 20);
    }
  };

  // Check if answer button should be disabled
  const isCheckDisabled = () => {
    if (status !== 'idle') return true;
    if (currentQ?.type === 'multiple-choice' || currentQ?.type === 'listening' || currentQ?.type === 'fill-blank') {
      return !selectedOption;
    }
    if (currentQ?.type === 'sentence-builder') {
      return selectedSentenceWords.length === 0;
    }
    if (currentQ?.type === 'match-pairs') {
      return matchedPairs.length !== currentQ.pairs.length;
    }
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-8 py-4 flex items-center justify-between gap-4 border-b border-slate-100">
        <button
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition cursor-pointer"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 bg-slate-200 h-4 rounded-full overflow-hidden p-0.5 relative">
          <div
            className="bg-emerald-500 h-full rounded-full transition-all duration-300 relative"
            style={{ width: `${status === 'completed' ? 100 : progressPercent}%` }}
          >
            <div className="absolute top-0.5 right-1 left-1 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1.5 font-black text-rose-500 bg-rose-50 px-3 py-1.5 rounded-2xl border border-rose-200">
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
          <span className="text-sm">{hearts}</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-8 py-6 flex flex-col justify-center">

        {/* COMPLETED SUCCESS SCREEN */}
        {status === 'completed' && (
          <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-center">
              <Mascot mood="cheering" size={130} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                शाबाश! / Excellent Work!
              </span>
              <h2 className="text-3xl font-black text-slate-800 mt-3">
                Lesson Completed!
              </h2>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                You’re mastering {selectedLanguage.name} step by step.
              </p>
            </div>

            {/* Stats Summary Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-amber-700 uppercase">Total XP</p>
                <p className="text-2xl font-black text-amber-600 mt-1">+{lesson.xp}</p>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-emerald-700 uppercase">Accuracy</p>
                <p className="text-2xl font-black text-emerald-600 mt-1">
                  {Math.round((correctCount / questions.length) * 100)}%
                </p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-orange-700 uppercase">Streak</p>
                <p className="text-2xl font-black text-orange-500 mt-1 flex items-center justify-center gap-1">
                  <span>🔥</span> +1
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-md py-4 rounded-2xl font-black text-base text-white btn-3d-green tracking-wide cursor-pointer"
            >
              CONTINUE TO LEARNING PATH
            </button>
          </div>
        )}

        {/* FAILED / OUT OF HEARTS SCREEN */}
        {status === 'failed' && (
          <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-center">
              <Mascot mood="sad" size={130} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                Out of Hearts!
              </span>
              <h2 className="text-3xl font-black text-slate-800 mt-3">
                Don't Give Up! कोई बात नहीं!
              </h2>
              <p className="text-sm font-semibold text-slate-500 mt-1">
                Language learning takes practice. You can refill hearts with your Chai points in the sidebar!
              </p>
            </div>

            <div className="flex gap-3 max-w-md mx-auto">
              <button
                onClick={() => {
                  resetQuestionState();
                  setCurrentIdx(0);
                }}
                className="flex-1 py-3.5 rounded-2xl font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Retry Lesson
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-2xl font-black text-white btn-3d-blue cursor-pointer"
              >
                Back to Path
              </button>
            </div>
          </div>
        )}

        {/* ACTIVE QUESTION CONTAINER */}
        {status !== 'completed' && status !== 'failed' && currentQ && (
          <div className="space-y-6">
            
            {/* Question Title & Audio Header */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Question {currentIdx + 1} of {questions.length}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
                  {currentQ.type.replace('-', ' ')}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 mt-1 leading-snug">
                {currentQ.prompt}
              </h3>
            </div>

            {/* Audio Pronunciation Button Bar */}
            {currentQ.audioText && (
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <button
                  onClick={() => sounds.speak(currentQ.audioText, selectedLanguage.code)}
                  className="p-3 rounded-xl btn-3d-blue text-white cursor-pointer"
                  title="Listen"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.speechSynthesis) {
                      const u = new SpeechSynthesisUtterance(currentQ.audioText);
                      u.lang = selectedLanguage.code;
                      u.rate = 0.6; // Turtle slow
                      window.speechSynthesis.speak(u);
                    }
                  }}
                  className="p-3 rounded-xl border-2 border-slate-200 hover:bg-slate-100 text-slate-600 cursor-pointer"
                  title="Listen Slower"
                >
                  <Turtle className="w-6 h-6 text-emerald-600" />
                </button>
                <div className="ml-2">
                  <p className="font-extrabold text-base text-slate-800">
                    {currentQ.audioText}
                  </p>
                  {currentQ.targetRoman && showTransliteration && (
                    <p className="text-xs font-semibold text-slate-400">
                      {currentQ.targetRoman}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* 1. MULTIPLE CHOICE / LISTENING / FILL-BLANK */}
            {(currentQ.type === 'multiple-choice' || currentQ.type === 'listening' || currentQ.type === 'fill-blank') && (
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isChosen = selectedOption === opt;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (status === 'idle') {
                          sounds.playPop();
                          setSelectedOption(opt);
                        }
                      }}
                      disabled={status !== 'idle'}
                      className={`w-full p-4 rounded-2xl border-2 text-left font-bold text-base transition-all flex items-center justify-between group cursor-pointer btn-3d-card ${
                        isChosen
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900 border-b-emerald-600 ring-2 ring-emerald-400/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 border-b-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black border ${
                          isChosen
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-slate-200'
                        }`}>
                          {idx + 1}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* 2. SENTENCE BUILDER */}
            {currentQ.type === 'sentence-builder' && (
              <div className="space-y-6 pt-2">
                {/* Target Sentence Area / Slot */}
                <div className="min-h-[70px] p-4 bg-slate-50 border-b-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-2 items-center">
                  {selectedSentenceWords.length === 0 ? (
                    <span className="text-sm font-semibold text-slate-400 italic">
                      Tap words below to form the sentence...
                    </span>
                  ) : (
                    selectedSentenceWords.map((word, wIdx) => (
                      <button
                        key={wIdx}
                        onClick={() => {
                          if (status === 'idle') {
                            sounds.playPop();
                            setSelectedSentenceWords(prev => prev.filter((_, i) => i !== wIdx));
                          }
                        }}
                        className="px-3.5 py-2 rounded-xl bg-white border-2 border-slate-300 border-b-4 border-b-slate-400 text-slate-800 font-extrabold text-sm shadow-sm hover:border-rose-400 hover:text-rose-600 transition cursor-pointer"
                        title="Click to remove"
                      >
                        {word}
                      </button>
                    ))
                  )}
                </div>

                {/* Word Bank */}
                <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                  {currentQ.wordBank.map((word, bIdx) => {
                    const timesInSentence = selectedSentenceWords.filter(w => w === word).length;
                    const timesInBank = currentQ.wordBank.filter(w => w === word).length;
                    const isExhausted = timesInSentence >= timesInBank;

                    return (
                      <button
                        key={bIdx}
                        onClick={() => {
                          if (status === 'idle' && !isExhausted) {
                            sounds.playPop();
                            setSelectedSentenceWords(prev => [...prev, word]);
                          }
                        }}
                        disabled={isExhausted || status !== 'idle'}
                        className={`px-4 py-2.5 rounded-2xl font-black text-base transition-all border-2 border-b-4 cursor-pointer ${
                          isExhausted
                            ? 'bg-slate-100 border-slate-200 border-b-slate-200 text-transparent pointer-events-none'
                            : 'bg-white border-slate-200 border-b-slate-300 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 active:translate-y-1'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. MATCH PAIRS */}
            {currentQ.type === 'match-pairs' && (
              <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-slate-500 text-center">
                  Matched {matchedPairs.length} of {currentQ.pairs.length} pairs
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="space-y-2.5">
                    {currentQ.pairs.map((p, idx) => {
                      const isMatched = matchedPairs.includes(p.left);
                      const isSelected = selectedPairLeft?.left === p.left;

                      return (
                        <button
                          key={idx}
                          onClick={() => handlePairClick('left', p)}
                          disabled={isMatched || status !== 'idle'}
                          className={`w-full p-3.5 rounded-2xl border-2 border-b-4 text-center font-black text-sm transition-all cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-100 border-emerald-300 border-b-emerald-400 text-emerald-800 opacity-60 cursor-default'
                              : isSelected
                              ? 'bg-amber-100 border-amber-400 border-b-amber-500 text-amber-900 ring-2 ring-amber-300'
                              : 'bg-white border-slate-200 border-b-slate-300 hover:border-emerald-300 text-slate-700'
                          } ${pairError && isSelected ? 'animate-shake bg-rose-100 border-rose-400' : ''}`}
                        >
                          {p.left}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2.5">
                    {/* Shuffle or stable map */}
                    {currentQ.pairs.slice().reverse().map((p, idx) => {
                      const isMatched = matchedPairs.some(
                        key => currentQ.pairs.find(item => item.left === key)?.right === p.right
                      );
                      const isSelected = selectedPairRight?.right === p.right;

                      return (
                        <button
                          key={idx}
                          onClick={() => handlePairClick('right', p)}
                          disabled={isMatched || status !== 'idle'}
                          className={`w-full p-3.5 rounded-2xl border-2 border-b-4 text-center font-black text-sm transition-all cursor-pointer ${
                            isMatched
                              ? 'bg-emerald-100 border-emerald-300 border-b-emerald-400 text-emerald-800 opacity-60 cursor-default'
                              : isSelected
                              ? 'bg-amber-100 border-amber-400 border-b-amber-500 text-amber-900 ring-2 ring-amber-300'
                              : 'bg-white border-slate-200 border-b-slate-300 hover:border-emerald-300 text-slate-700'
                          } ${pairError && isSelected ? 'animate-shake bg-rose-100 border-rose-400' : ''}`}
                        >
                          {p.right}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Bottom Feedback Drawer */}
      {status !== 'completed' && status !== 'failed' && (
        <div className={`border-t-2 px-4 sm:px-8 py-5 transition-colors ${
          status === 'correct' ? 'bg-emerald-100 border-emerald-300' :
          status === 'wrong' ? 'bg-rose-100 border-rose-300' :
          'bg-white border-slate-100'
        }`}>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Feedback message */}
            {status === 'idle' ? (
              <div className="text-xs font-semibold text-slate-400 hidden sm:block">
                Take your time. Listen and select the right response!
              </div>
            ) : status === 'correct' ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-base text-emerald-900">
                    Excellent! शाबाश!
                  </h4>
                  {currentQ?.explanation && (
                    <p className="text-xs text-emerald-700 font-medium max-w-md">
                      {currentQ.explanation}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-base text-rose-900">
                    Not quite!
                  </h4>
                  <p className="text-xs text-rose-700 font-semibold">
                    {currentQ?.explanation || 'Review the correct phrasing and try again next time.'}
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div>
              {status === 'idle' ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={isCheckDisabled()}
                  className={`px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    isCheckDisabled()
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'btn-3d-green text-white'
                  }`}
                >
                  Check
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className={`px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider text-white transition-all cursor-pointer ${
                    status === 'correct' ? 'btn-3d-green' : 'btn-3d-saffron'
                  }`}
                >
                  Continue <ArrowRight className="w-4 h-4 inline ml-1" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
