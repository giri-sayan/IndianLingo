import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LessonPath from './components/LessonPath';
import RightSidebar from './components/RightSidebar';
import LessonModal from './components/LessonModal';
import GuidebookModal from './components/GuidebookModal';
import LanguageSelectorModal from './components/LanguageSelectorModal';
import AksharaTrainer from './components/AksharaTrainer';
import CulturalStories from './components/CulturalStories';
import Leaderboard from './components/Leaderboard';
import QuestsView from './components/QuestsView';
import ShopView from './components/ShopView';
import ProfileView from './components/ProfileView';
import SettingsModal from './components/SettingsModal';
import { INDIAN_LANGUAGES } from './data/languages';
import { sounds } from './utils/audio';

export default function App() {
  // Theme state: 'light' | 'dark' | 'saffron'
  const [theme, setTheme] = useState(() => localStorage.getItem('bhasha_theme') || 'light');

  // Selected Indian language (defaults to Hindi)
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const saved = localStorage.getItem('bhasha_lang');
    if (saved) {
      const found = INDIAN_LANGUAGES.find(l => l.id === saved);
      if (found) return found;
    }
    return INDIAN_LANGUAGES[0];
  });

  // Navigation tab: 'learn' | 'akshara' | 'leaderboard' | 'quests' | 'shop' | 'stories'
  const [activeTab, setActiveTab] = useState('learn');

  // Gamification states
  const [streak, setStreak] = useState(() => Number(localStorage.getItem('bhasha_streak') || 3));
  const [gems, setGems] = useState(() => Number(localStorage.getItem('bhasha_gems') || 280));
  const [hearts, setHearts] = useState(() => Number(localStorage.getItem('bhasha_hearts') || 5));
  const [dailyGoalXP, setDailyGoalXP] = useState(() => Number(localStorage.getItem('bhasha_daily_goal') || 20));
  const [equippedOutfit, setEquippedOutfit] = useState(() => localStorage.getItem('bhasha_outfit') || 'default');
  const [unlockedOutfits, setUnlockedOutfits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_outfits') || '["default"]');
    } catch {
      return ['default'];
    }
  });

  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bhasha_completed') || '{}');
    } catch {
      return {};
    }
  });

  // Settings & Toggles
  const [soundMuted, setSoundMuted] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(true);

  // Modals
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [guidebookUnit, setGuidebookUnit] = useState(null);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'theme-saffron');
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'saffron') {
      root.classList.add('theme-saffron');
    }
    localStorage.setItem('bhasha_theme', theme);
  }, [theme]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('bhasha_lang', selectedLanguage.id);
  }, [selectedLanguage]);

  useEffect(() => {
    localStorage.setItem('bhasha_streak', streak);
    localStorage.setItem('bhasha_gems', gems);
    localStorage.setItem('bhasha_hearts', hearts);
    localStorage.setItem('bhasha_daily_goal', dailyGoalXP);
    localStorage.setItem('bhasha_outfit', equippedOutfit);
    localStorage.setItem('bhasha_outfits', JSON.stringify(unlockedOutfits));
    localStorage.setItem('bhasha_completed', JSON.stringify(completedLessons));
  }, [streak, gems, hearts, dailyGoalXP, equippedOutfit, unlockedOutfits, completedLessons]);

  // Toggle Theme
  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleSound = () => {
    sounds.muted = !soundMuted;
    setSoundMuted(!soundMuted);
    sounds.playPop();
  };

  const handleToggleTransliteration = () => {
    sounds.playPop();
    setShowTransliteration(prev => !prev);
  };

  // Start a lesson
  const handleStartLesson = (lesson, unit) => {
    if (hearts <= 0) {
      alert('Out of hearts! Refill hearts with Chai points in the Shop to keep learning.');
      setActiveTab('shop');
      return;
    }
    setActiveLesson(lesson);
    setActiveUnit(unit);
  };

  // Complete a lesson
  const handleCompleteLesson = (lessonId, _xp) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
    setGems(prev => prev + 25);
    setStreak(prev => prev + 1);
  };

  // Deduct heart on mistake
  const handleDeductHeart = () => {
    setHearts(prev => Math.max(0, prev - 1));
  };

  // Refill hearts with Chai points (20 gems)
  const handleRefillHearts = () => {
    if (gems >= 20 && hearts < 5) {
      sounds.playCorrect();
      setGems(prev => prev - 20);
      setHearts(5);
    }
  };

  // Spend gems for shop items
  const handleSpendGems = (amount, outfitId) => {
    if (gems >= amount) {
      setGems(prev => prev - amount);
      if (outfitId) {
        setUnlockedOutfits(prev => [...new Set([...prev, outfitId])]);
        setEquippedOutfit(outfitId);
      }
    }
  };

  // Claim unit chest reward
  const handleClaimChest = (unitId) => {
    const key = `chest_${unitId}`;
    if (!completedLessons[key]) {
      setCompletedLessons(prev => ({ ...prev, [key]: true }));
      setGems(prev => prev + 50);
      sounds.playFanfare();
      alert('🎉 +50 Chai Points added to your balance!');
    }
  };

  // Reset Progress
  const handleResetProgress = () => {
    setCompletedLessons({});
    setStreak(1);
    setGems(100);
    setHearts(5);
    setEquippedOutfit('default');
    setUnlockedOutfits(['default']);
    localStorage.removeItem('bhasha_completed');
    sounds.playPop();
  };

  const completedLessonsCount = Object.keys(completedLessons).filter(k => !k.startsWith('chest_')).length;

  return (
    <div className={`min-h-screen flex flex-row font-sans transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#131f24] text-white' : 'bg-white text-slate-800'
    }`}>
      
      {/* Duolingo Left Fixed Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
        theme={theme}
      />

      {/* Main Column (Header + Content Area) */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <Header
          selectedLanguage={selectedLanguage}
          onOpenLanguageSelector={() => setIsLangModalOpen(true)}
          streak={streak}
          gems={gems}
          hearts={hearts}
          soundMuted={soundMuted}
          onToggleSound={handleToggleSound}
          showTransliteration={showTransliteration}
          onToggleTransliteration={handleToggleTransliteration}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* Dynamic Main View */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12">
          
          {activeTab === 'learn' && (
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              {/* Central Duolingo Snake Path */}
              <div className="flex-1 w-full max-w-xl">
                <LessonPath
                  selectedLanguage={selectedLanguage}
                  completedLessons={completedLessons}
                  onStartLesson={handleStartLesson}
                  onClaimChest={handleClaimChest}
                  onOpenGuidebook={(unit) => setGuidebookUnit(unit)}
                  equippedOutfit={equippedOutfit}
                />
              </div>

              {/* Right Gamification Sidebar */}
              <RightSidebar
                selectedLanguage={selectedLanguage}
                streak={streak}
                hearts={hearts}
                gems={gems}
                onRefillHearts={handleRefillHearts}
                onOpenLeagues={() => setActiveTab('leaderboard')}
                onOpenQuests={() => setActiveTab('quests')}
                onOpenShop={() => setActiveTab('shop')}
                equippedOutfit={equippedOutfit}
                completedLessonsCount={completedLessonsCount}
              />
            </div>
          )}

          {activeTab === 'akshara' && (
            <AksharaTrainer
              selectedLanguage={selectedLanguage}
              onAddGems={(amount) => setGems(prev => prev + amount)}
              theme={theme}
            />
          )}

          {activeTab === 'leaderboard' && (
            <Leaderboard
              userXP={350 + completedLessonsCount * 50}
              completedLessonsCount={completedLessonsCount}
              equippedOutfit={equippedOutfit}
              theme={theme}
            />
          )}

          {activeTab === 'quests' && (
            <QuestsView
              completedLessonsCount={completedLessonsCount}
              onAddGems={(amount) => setGems(prev => prev + amount)}
              theme={theme}
            />
          )}

          {activeTab === 'shop' && (
            <ShopView
              gems={gems}
              hearts={hearts}
              onRefillHearts={handleRefillHearts}
              onSpendGems={handleSpendGems}
              equippedOutfit={equippedOutfit}
              onEquipOutfit={(id) => setEquippedOutfit(id)}
              unlockedOutfits={unlockedOutfits}
              theme={theme}
            />
          )}

          {activeTab === 'stories' && (
            <CulturalStories
              onEarnChaiPoints={(amount) => setGems(prev => prev + amount)}
              theme={theme}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileView
              streak={streak}
              _gems={gems}
              _hearts={hearts}
              completedLessonsCount={completedLessonsCount}
              selectedLanguage={selectedLanguage}
              equippedOutfit={equippedOutfit}
              theme={theme}
            />
          )}

        </main>
      </div>

      {/* Interactive Lesson Modal */}
      {activeLesson && (
        <LessonModal
          key={activeLesson.id}
          isOpen={!!activeLesson}
          lesson={activeLesson}
          unit={activeUnit}
          selectedLanguage={selectedLanguage}
          hearts={hearts}
          onDeductHeart={handleDeductHeart}
          onCompleteLesson={handleCompleteLesson}
          onClose={() => setActiveLesson(null)}
          showTransliteration={showTransliteration}
          equippedOutfit={equippedOutfit}
          theme={theme}
        />
      )}

      {/* Unit Guidebook Modal */}
      {guidebookUnit && (
        <GuidebookModal
          isOpen={!!guidebookUnit}
          onClose={() => setGuidebookUnit(null)}
          unit={guidebookUnit}
          selectedLanguage={selectedLanguage}
          theme={theme}
        />
      )}

      {/* Language Course Selector Modal */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={(lang) => {
          setSelectedLanguage(lang);
        }}
        theme={theme}
      />

      {/* Settings & Preferences Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        onSelectTheme={setTheme}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        showTransliteration={showTransliteration}
        onToggleTransliteration={handleToggleTransliteration}
        dailyGoalXP={dailyGoalXP}
        onChangeDailyGoal={setDailyGoalXP}
        onResetProgress={handleResetProgress}
      />

    </div>
  );
}
