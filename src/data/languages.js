import { HINDI_COURSE } from './courses/hindi';
import { TAMIL_COURSE } from './courses/tamil';
import { TELUGU_COURSE } from './courses/telugu';
import { BENGALI_COURSE } from './courses/bengali';
import { KANNADA_COURSE } from './courses/kannada';
import { MALAYALAM_COURSE } from './courses/malayalam';
import { MARATHI_COURSE } from './courses/marathi';
import { PUNJABI_COURSE } from './courses/punjabi';
import { GUJARATI_COURSE } from './courses/gujarati';

export const INDIAN_LANGUAGES = [
  HINDI_COURSE,
  TAMIL_COURSE,
  TELUGU_COURSE,
  BENGALI_COURSE,
  KANNADA_COURSE,
  MALAYALAM_COURSE,
  MARATHI_COURSE,
  PUNJABI_COURSE,
  GUJARATI_COURSE
];

export const CULTURAL_STORIES = [
  {
    id: 'story-1',
    title: 'The Secret of Cutting Chai',
    lang: 'Hindi / Indian Street Culture',
    imageEmoji: '☕',
    description: 'Why is it called "cutting" chai in Mumbai and across railway stations?',
    story: [
      'In India, chai is not just a drink; it is an emotion and a social catalyst.',
      'A "cutting" chai refers to half a glass of tea—strong, boiled with crushed ginger (adrak), cardamom (elaichi), milk, and sugar.',
      'Why half? Because people would meet friends multiple times a day at the tapri (roadside tea stall), and half a glass was the perfect portion to sip while chatting without getting overly full!'
    ],
    desiWord: 'अदरक वाली चाय (Adrak wali chai - Ginger tea)'
  },
  {
    id: 'story-2',
    title: 'The Mystery of South Indian Filter Coffee',
    lang: 'Tamil & South India',
    imageEmoji: '☕',
    description: 'The science of the dabara and the frothy "meter coffee" pour.',
    story: [
      'Brewed using a traditional stainless steel double-chamber drip filter with chicory-roasted coffee beans.',
      'It is served in a "dabara" (wide rim bowl) and "tumbler" (cup).',
      'The coffee is aerated by pouring it back and forth between cup and dabara from an arm’s length high (hence called "Meter Coffee"), creating a thick heavenly frothy cream without any artificial machine!'
    ],
    desiWord: 'பில்டர் காபி (Filter Kaapi)'
  },
  {
    id: 'story-3',
    title: 'The Art of Indian Head Bobble',
    lang: 'Pan-Indian Expression',
    imageEmoji: '🙂',
    description: 'What does the famous Indian head nod actually mean?',
    story: [
      'A gentle side-to-side tilt can communicate nuanced meanings depending on speed and context:',
      '1. Side to side smoothly: "Yes", "I understand", or "Sounds good!"',
      '2. Quick tilt with a smile: "Thank you" or greeting an acquaintance.',
      '3. Slight nod with eyebrows raised: "What’s up?" or "Are you ready?"',
      'It is a warm, polite non-verbal affirmation shared across every state in India!'
    ],
    desiWord: 'हाँ भाई / சரிங்க (All good!)'
  }
];

export const LEADERBOARD_USERS = [
  { rank: 1, name: 'Aarav Sharma', avatar: '🦁', xp: 2450, league: 'Amethyst', country: 'Delhi' },
  { rank: 2, name: 'Priya Sundaram', avatar: '🦚', xp: 2180, league: 'Amethyst', country: 'Chennai' },
  { rank: 3, name: 'Rohan Patel', avatar: '🐯', xp: 1940, league: 'Amethyst', country: 'Ahmedabad' },
  { rank: 4, name: 'Ananya Mukherjee', avatar: '🌸', xp: 1820, level: 'Gold', country: 'Kolkata' },
  { rank: 5, name: 'Gurpreet Singh', avatar: '🌾', xp: 1650, league: 'Gold', country: 'Amritsar' },
  { rank: 6, name: 'Deepa Hegde', avatar: '☕', xp: 1420, league: 'Silver', country: 'Bengaluru' },
  { rank: 7, name: 'Kavita Deshmukh', avatar: '✨', xp: 1200, league: 'Silver', country: 'Pune' },
];

export const DAILY_QUESTS = [
  { id: 'q1', text: 'Earn 50 XP today', target: 50, reward: 15, icon: 'Zap' },
  { id: 'q2', text: 'Complete 2 perfect lessons', target: 2, reward: 20, icon: 'Award' },
  { id: 'q3', text: 'Practice 10 Akshara (alphabet letters)', target: 10, reward: 10, icon: 'BookOpen' },
  { id: 'q4', text: 'Listen to 5 audio phrases', target: 5, reward: 10, icon: 'Volume2' },
];
