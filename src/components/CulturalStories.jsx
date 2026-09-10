import React, { useState } from 'react';
import { Coffee, Sparkles, BookOpen, Volume2, CheckCircle2 } from 'lucide-react';
import { CULTURAL_STORIES } from '../data/languages';
import { sounds } from '../utils/audio';

export default function CulturalStories({ onEarnChaiPoints }) {
  const [selectedStory, setSelectedStory] = useState(CULTURAL_STORIES[0]);
  const [readStories, setReadStories] = useState({});

  const handleFinishStory = (storyId) => {
    sounds.playCorrect();
    setReadStories(prev => ({ ...prev, [storyId]: true }));
    onEarnChaiPoints?.(15);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Chai Break Stories ☕
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2">
              Desi Culture, Idioms & Etiquette
            </h1>
            <p className="text-sm text-white/85 font-medium mt-1 max-w-xl">
              Languages in India are deeply rooted in daily rituals, street warmth, food culture, and affectionate gestures.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Story Selector List */}
        <div className="space-y-3">
          {CULTURAL_STORIES.map((story) => {
            const isSelected = selectedStory.id === story.id;
            const isRead = !!readStories[story.id];

            return (
              <button
                key={story.id}
                onClick={() => {
                  sounds.playPop();
                  setSelectedStory(story);
                }}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50/80 shadow-sm ring-2 ring-amber-400/20'
                    : 'border-slate-200 bg-white hover:border-amber-300'
                }`}
              >
                <div className="text-3xl p-2 rounded-xl bg-amber-100/60 shrink-0">
                  {story.imageEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 uppercase">
                      {story.lang}
                    </span>
                    {isRead && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-800 mt-0.5">
                    {story.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {story.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Story Reader View */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                {selectedStory.lang}
              </span>
              <h2 className="text-2xl font-black text-slate-800 mt-1">
                {selectedStory.title}
              </h2>
            </div>
            <span className="text-4xl">{selectedStory.imageEmoji}</span>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
            {selectedStory.story.map((para, idx) => (
              <p key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {para}
              </p>
            ))}
          </div>

          {/* Desi Vocabulary Callout */}
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-amber-800 uppercase">Key Phrase to Remember:</p>
              <p className="text-base font-black text-amber-950 mt-0.5">{selectedStory.desiWord}</p>
            </div>
            <button
              onClick={() => sounds.speak(selectedStory.desiWord.split('(')[0].trim(), 'hi-IN')}
              className="p-2.5 rounded-xl bg-amber-500 text-white hover:bg-amber-600 transition cursor-pointer"
              title="Listen pronunciation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Completion Button */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => handleFinishStory(selectedStory.id)}
              disabled={readStories[selectedStory.id]}
              className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                readStories[selectedStory.id]
                  ? 'bg-emerald-100 text-emerald-800 cursor-default'
                  : 'btn-3d-green text-white'
              }`}
            >
              {readStories[selectedStory.id] ? 'Completed (+15 🫖 Claimed)' : 'Finish Story & Claim 15 🫖'}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
