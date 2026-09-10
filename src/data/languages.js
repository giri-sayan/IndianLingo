export const INDIAN_LANGUAGES = [
  {
    id: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    code: 'hi-IN',
    family: 'Indo-Aryan',
    region: 'North & Central India',
    speakers: '600M+',
    greeting: 'नमस्ते (Namaste)',
    color: 'from-amber-500 to-orange-600',
    accentColor: '#f97316',
    flagEmoji: '🇮🇳',
    mascotQuote: 'चल भाई, आज हिन्दी सीखते हैं! (Come on brother, let’s learn Hindi today!)',
    alphabet: [
      { char: 'अ', roman: 'a', sound: 'uh (as in cup)', type: 'vowel' },
      { char: 'आ', roman: 'aa', sound: 'aah (as in father)', type: 'vowel' },
      { char: 'इ', roman: 'i', sound: 'ih (as in sit)', type: 'vowel' },
      { char: 'ई', roman: 'ee', sound: 'ee (as in feel)', type: 'vowel' },
      { char: 'उ', roman: 'u', sound: 'u (as in put)', type: 'vowel' },
      { char: 'ऊ', roman: 'oo', sound: 'oo (as in boot)', type: 'vowel' },
      { char: 'क', roman: 'ka', sound: 'k (as in kite)', type: 'consonant' },
      { char: 'ख', roman: 'kha', sound: 'kh (aspirated k)', type: 'consonant' },
      { char: 'ग', roman: 'ga', sound: 'g (as in goat)', type: 'consonant' },
      { char: 'घ', roman: 'gha', sound: 'gh (deep aspirated g)', type: 'consonant' },
      { char: 'च', roman: 'cha', sound: 'ch (as in chair)', type: 'consonant' },
      { char: 'ज', roman: 'ja', sound: 'j (as in jam)', type: 'consonant' },
      { char: 'त', roman: 'ta', sound: 'soft t (dental)', type: 'consonant' },
      { char: 'प', roman: 'pa', sound: 'p (as in pen)', type: 'consonant' },
      { char: 'म', roman: 'ma', sound: 'm (as in mango)', type: 'consonant' },
      { char: 'य', roman: 'ya', sound: 'y (as in yes)', type: 'consonant' },
      { char: 'र', roman: 'ra', sound: 'r (light roll)', type: 'consonant' },
      { char: 'ल', roman: 'la', sound: 'l (as in light)', type: 'consonant' },
    ],
    units: [
      {
        id: 'hi-unit-1',
        title: 'Unit 1: Namaste & First Words',
        description: 'Master polite greetings, introducing yourself, and polite essentials.',
        icon: 'Sparkles',
        color: 'bg-emerald-500',
        lessons: [
          {
            id: 'hi-1-1',
            title: 'Namaste & Polite Basics',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you say "Hello" or "Greetings" in Hindi?',
                audioText: 'नमस्ते',
                options: [
                  { text: 'नमस्ते (Namaste)', correct: true },
                  { text: 'धन्यवाद (Dhanyavaad)', correct: false },
                  { text: 'अलविदा (Alvida)', correct: false },
                  { text: 'हाँ (Haan)', correct: false }
                ],
                explanation: '"Namaste" is the universal respectful greeting across India, meaning "I bow to the divine in you."'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build the sentence: "Thank you very much"',
                audioText: 'बहुत बहुत धन्यवाद',
                targetSentence: 'बहुत बहुत धन्यवाद',
                targetRoman: 'Bahut bahut dhanyavaad',
                wordBank: ['बहुत', 'धन्यवाद', 'नमस्ते', 'अलविदा', 'हाँ', 'बहुत'],
                correctSequence: ['बहुत', 'बहुत', 'धन्यवाद'],
                explanation: '"Bahut" means "very/much" and "Dhanyavaad" means "thank you".'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match the Hindi words to their English meanings:',
                pairs: [
                  { left: 'हाँ (Haan)', right: 'Yes' },
                  { left: 'नहीं (Nahin)', right: 'No' },
                  { left: 'कृपया (Kripya)', right: 'Please' },
                  { left: 'अलविदा (Alvida)', right: 'Goodbye' }
                ]
              },
              {
                id: 'q4',
                type: 'listening',
                prompt: 'Listen to the audio and select what you hear:',
                audioText: 'आप कैसे हैं?',
                options: [
                  { text: 'आप कैसे हैं? (Aap kaise hain? - How are you?)', correct: true },
                  { text: 'मैं ठीक हूँ (Main theek hoon - I am fine)', correct: false },
                  { text: 'आपका नाम क्या है? (Aapka naam kya hai?)', correct: false }
                ],
                explanation: '"Aap kaise hain?" is the polite formal way to ask "How are you?"'
              },
              {
                id: 'q5',
                type: 'fill-blank',
                prompt: 'Complete the reply: "I am fine" -> "मैं _____ हूँ" (Main _____ hoon)',
                audioText: 'मैं ठीक हूँ',
                options: [
                  { text: 'ठीक (theek)', correct: true },
                  { text: 'पानी (paani)', correct: false },
                  { text: 'चाय (chai)', correct: false }
                ],
                explanation: '"Theek" means alright or fine!'
              }
            ]
          },
          {
            id: 'hi-1-2',
            title: 'Names & Introductions',
            xp: 25,
            questions: [
              {
                id: 'q1',
                type: 'sentence-builder',
                prompt: 'Translate to Hindi: "My name is Amit"',
                audioText: 'मेरा नाम अमित है',
                targetSentence: 'मेरा नाम अमित है',
                targetRoman: 'Mera naam Amit hai',
                wordBank: ['मेरा', 'नाम', 'अमित', 'है', 'आपका', 'क्या'],
                correctSequence: ['मेरा', 'नाम', 'अमित', 'है'],
                explanation: 'Sentence order in Hindi is Subject - Object - Verb: Mera (My) + Naam (Name) + Amit + Hai (is).'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                prompt: 'What does "आप कहाँ से हैं?" (Aap kahan se hain?) mean?',
                audioText: 'आप कहाँ से हैं?',
                options: [
                  { text: 'Where are you from?', correct: true },
                  { text: 'What is your name?', correct: false },
                  { text: 'Where are you going?', correct: false },
                  { text: 'What do you do?', correct: false }
                ],
                explanation: '"Kahan" means "where" and "se" means "from".'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match pronouns in Hindi:',
                pairs: [
                  { left: 'मैं (Main)', right: 'I' },
                  { left: 'आप (Aap)', right: 'You (Polite/Respectful)' },
                  { left: 'तुम (Tum)', right: 'You (Informal/Friends)' },
                  { left: 'हम (Hum)', right: 'We' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'hi-unit-2',
        title: 'Unit 2: Chai, Street Food & Bazaar',
        description: 'Order piping hot cutting chai, samosas, and bargain like a local at the bazaar.',
        icon: 'Coffee',
        color: 'bg-amber-500',
        lessons: [
          {
            id: 'hi-2-1',
            title: 'Ordering Cutting Chai & Snacks',
            xp: 25,
            questions: [
              {
                id: 'q1',
                type: 'sentence-builder',
                prompt: 'Build: "Give one cup of tea, please"',
                audioText: 'एक कप चाय दीजिए',
                targetSentence: 'एक कप चाय दीजिए',
                targetRoman: 'Ek cup chai deejiye',
                wordBank: ['एक', 'कप', 'चाय', 'दीजिए', 'दो', 'समोसा', 'पानी'],
                correctSequence: ['एक', 'कप', 'चाय', 'दीजिए'],
                explanation: '"Deejiye" is the polite form of "give".'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                prompt: 'How do you say "Water" in Hindi?',
                audioText: 'पानी',
                options: [
                  { text: 'पानी (Paani)', correct: true },
                  { text: 'दूध (Doodh)', correct: false },
                  { text: 'चीनी (Cheeni)', correct: false },
                  { text: 'रोटी (Roti)', correct: false }
                ],
                explanation: '"Paani" is water. "Doodh" is milk, "Cheeni" is sugar.'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                prompt: 'How do you ask "How much does this cost?"',
                audioText: 'यह कितने का है?',
                options: [
                  { text: 'यह कितने का है? (Yeh kitne ka hai?)', correct: true },
                  { text: 'यह क्या है? (Yeh kya hai?)', correct: false },
                  { text: 'यह बहुत अच्छा है (Yeh bahut achha hai)', correct: false }
                ],
                explanation: '"Kitne ka hai" is the essential bargaining and shopping phrase!'
              },
              {
                id: 'q4',
                type: 'match-pairs',
                prompt: 'Match the food vocabulary:',
                pairs: [
                  { left: 'गरम (Garam)', right: 'Hot' },
                  { left: 'ठंडा (Thanda)', right: 'Cold' },
                  { left: 'मीठा (Meetha)', right: 'Sweet' },
                  { left: 'तीखा (Teekha)', right: 'Spicy' }
                ]
              }
            ]
          },
          {
            id: 'hi-2-2',
            title: 'Bargaining at the Market',
            xp: 30,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you tell the shopkeeper "This is too expensive!"?',
                audioText: 'यह बहुत महँगा है!',
                options: [
                  { text: 'यह बहुत महँगा है! (Yeh bahut mehenga hai!)', correct: true },
                  { text: 'यह बहुत सस्ता है! (Yeh bahut sasta hai!)', correct: false },
                  { text: 'मुझे नहीं चाहिए (Mujhe nahin chahiye)', correct: false }
                ],
                explanation: '"Mehenga" means expensive! Follow it up with "Thoda kam kijiye" (Make it a little cheaper).'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "Reduce the price a bit please"',
                audioText: 'थोड़ा कम कीजिए',
                targetSentence: 'थोड़ा कम कीजिए',
                targetRoman: 'Thoda kam kijiye',
                wordBank: ['थोड़ा', 'कम', 'कीजिए', 'ज़्यादा', 'दुकान'],
                correctSequence: ['थोड़ा', 'कम', 'कीजिए'],
                explanation: 'A classic Indian bazaar negotiation line!'
              }
            ]
          }
        ]
      },
      {
        id: 'hi-unit-3',
        title: 'Unit 3: Auto Rickshaws & Finding Ways',
        description: 'Navigate auto-rickshaws, metro lines, and asking for directions on Indian streets.',
        icon: 'Compass',
        color: 'bg-blue-500',
        lessons: [
          {
            id: 'hi-3-1',
            title: 'Taking an Auto Rickshaw',
            xp: 25,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you ask the driver: "Will you go by meter?"',
                audioText: 'मीटर से चलोगे?',
                options: [
                  { text: 'मीटर से चलोगे? (Meter se chaloge?)', correct: true },
                  { text: 'कहाँ जाना है? (Kahan jaana hai?)', correct: false },
                  { text: 'गाड़ी रोको (Gaadi roko)', correct: false }
                ],
                explanation: 'Essential for auto rides in Mumbai, Delhi, Bengaluru and beyond!'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "Please stop right here"',
                audioText: 'यहाँ रोक दीजिए',
                targetSentence: 'यहाँ रोक दीजिए',
                targetRoman: 'Yahan rok deejiye',
                wordBank: ['यहाँ', 'रोक', 'दीजिए', 'वहाँ', 'चलो', 'सीधे'],
                correctSequence: ['यहाँ', 'रोक', 'दीजिए'],
                explanation: '"Yahan" = here, "Rok deejiye" = please stop.'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match street directions:',
                pairs: [
                  { left: 'सीधे (Seedhe)', right: 'Straight' },
                  { left: 'बाएँ (Baayein)', right: 'Left' },
                  { left: 'दाएँ (Daayein)', right: 'Right' },
                  { left: 'नज़दीक (Nazdeek)', right: 'Near' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'hi-unit-4',
        title: 'Unit 4: Desi Slang & Soulful Expressions',
        description: 'Master iconic Indian colloquialisms: Jugaad, Arre Yaar, Bindaas, and Shabash!',
        icon: 'Flame',
        color: 'bg-purple-500',
        lessons: [
          {
            id: 'hi-4-1',
            title: 'Iconic Expressions & Slang',
            xp: 30,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What does "जुगाड़" (Jugaad) mean in Indian culture?',
                audioText: 'जुगाड़',
                options: [
                  { text: 'A clever, frugal hack / creative innovative solution', correct: true },
                  { text: 'A traditional dance', correct: false },
                  { text: 'A cup of strong masala tea', correct: false },
                  { text: 'A train ticket', correct: false }
                ],
                explanation: 'Jugaad is India’s beloved philosophy of finding ingenious workarounds with whatever resources are available!'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                prompt: 'When someone exclaims "शाबाश!" (Shabaash!), what are they expressing?',
                audioText: 'शाबाश!',
                options: [
                  { text: 'Bravo! / Well done! / Kudos!', correct: true },
                  { text: 'Oh no! What a disaster!', correct: false },
                  { text: 'Hurry up!', correct: false }
                ],
                explanation: '"Shabaash" is heartfelt praise for great work or achievement!'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match the colloquial slang:',
                pairs: [
                  { left: 'अरे यार! (Arre yaar!)', right: 'Oh man! / Dude!' },
                  { left: 'बिंदास (Bindaas)', right: 'Carefree / Cool' },
                  { left: 'मस्त (Mast)', right: 'Awesome / Delightful' },
                  { left: 'एकदम (Ekdam)', right: 'Totally / Absolutely' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tamil',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    code: 'ta-IN',
    family: 'Dravidian (Classical)',
    region: 'Tamil Nadu & Puducherry',
    speakers: '85M+',
    greeting: 'வணக்கம் (Vanakkam)',
    color: 'from-red-500 to-rose-700',
    accentColor: '#e11d48',
    flagEmoji: '🌴',
    mascotQuote: 'வாருங்கள், தமிழ் கற்போம்! (Come, let’s learn one of the world’s oldest classical languages!)',
    alphabet: [
      { char: 'அ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'ஆ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'இ', roman: 'i', sound: 'ih', type: 'vowel' },
      { char: 'ஈ', roman: 'ee', sound: 'ee', type: 'vowel' },
      { char: 'உ', roman: 'u', sound: 'oo', type: 'vowel' },
      { char: 'எ', roman: 'e', sound: 'eh', type: 'vowel' },
      { char: 'க', roman: 'ka/ga', sound: 'k/g', type: 'consonant' },
      { char: 'ங', roman: 'nga', sound: 'ng', type: 'consonant' },
      { char: 'ச', roman: 'cha/sa', sound: 'ch/s', type: 'consonant' },
      { char: 'ஞ', roman: 'nya', sound: 'ny', type: 'consonant' },
      { char: 'த', roman: 'tha', sound: 'dental th', type: 'consonant' },
      { char: 'ந', roman: 'na', sound: 'n', type: 'consonant' },
      { char: 'ப', roman: 'pa/ba', sound: 'p/b', type: 'consonant' },
      { char: 'ம', roman: 'ma', sound: 'm', type: 'consonant' },
      { char: 'ழ', roman: 'zha', sound: 'special retroflex r/l', type: 'consonant' }
    ],
    units: [
      {
        id: 'ta-unit-1',
        title: 'Unit 1: Vanakkam & Polite Phrases',
        description: 'Ancient greetings, polite respect, and daily conversation starters.',
        icon: 'Sparkles',
        color: 'bg-rose-500',
        lessons: [
          {
            id: 'ta-1-1',
            title: 'Vanakkam & Daily Greetings',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you say "Hello / Greetings" in Tamil?',
                audioText: 'வணக்கம்',
                options: [
                  { text: 'வணக்கம் (Vanakkam)', correct: true },
                  { text: 'நன்றி (Nandri)', correct: false },
                  { text: 'சரி (Sari)', correct: false },
                  { text: 'இல்லை (Illai)', correct: false }
                ],
                explanation: '"Vanakkam" is the traditional Tamil greeting with folded hands.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "Thank you very much" in Tamil',
                audioText: 'மிக்க நன்றி',
                targetSentence: 'மிக்க நன்றி',
                targetRoman: 'Mikka nandri',
                wordBank: ['மிக்க', 'நன்றி', 'வணக்கம்', 'வாருங்கள்', 'சரி'],
                correctSequence: ['மிக்க', 'நன்றி'],
                explanation: '"Mikka" = very much, "Nandri" = thank you.'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match common Tamil words:',
                pairs: [
                  { left: 'ஆம் (Aam)', right: 'Yes' },
                  { left: 'இல்லை (Illai)', right: 'No' },
                  { left: 'சரி (Sari)', right: 'Okay / Alright' },
                  { left: 'நன்றி (Nandri)', right: 'Thank you' }
                ]
              },
              {
                id: 'q4',
                type: 'multiple-choice',
                prompt: 'How do you ask "How are you?" in polite Tamil?',
                audioText: 'எப்படி இருக்கிறீர்கள்?',
                options: [
                  { text: 'எப்படி இருக்கிறீர்கள்? (Eppadi irukkireergal?)', correct: true },
                  { text: 'உங்கள் பெயர் என்ன? (Ungal peyar enna?)', correct: false },
                  { text: 'சாப்பிட்டீர்களா? (Saapitteergala?)', correct: false }
                ],
                explanation: '"Eppadi irukkireergal?" is the polite formal inquiry.'
              }
            ]
          },
          {
            id: 'ta-1-2',
            title: 'Filter Coffee & Food Culture',
            xp: 25,
            questions: [
              {
                id: 'q1',
                type: 'sentence-builder',
                prompt: 'Build: "One filter coffee please"',
                audioText: 'ஒரு காபி கொடுங்கள்',
                targetSentence: 'ஒரு காபி கொடுங்கள்',
                targetRoman: 'Oru kaapi kodungal',
                wordBank: ['ஒரு', 'காபி', 'கொடுங்கள்', 'தண்ணீர்', 'தோசை'],
                correctSequence: ['ஒரு', 'காபி', 'கொடுங்கள்'],
                explanation: 'South Indian Degree Filter Coffee is world famous!'
              },
              {
                id: 'q2',
                type: 'multiple-choice',
                prompt: 'What does the quintessential Tamil question "சாப்பிட்டீர்களா?" (Saapitteergala?) mean?',
                audioText: 'சாப்பிட்டீர்களா?',
                options: [
                  { text: 'Did you eat? (Common caring greeting)', correct: true },
                  { text: 'Where are you going?', correct: false },
                  { text: 'What is the time?', correct: false }
                ],
                explanation: 'In Tamil culture, asking "Did you eat?" is the warmest expression of care and hospitality.'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match South Indian Food & Drink:',
                pairs: [
                  { left: 'தண்ணீர் (Thanneer)', right: 'Water' },
                  { left: 'தேநீர் (Theneer)', right: 'Tea' },
                  { left: 'சுவை (Suvai)', right: 'Taste / Delicious' },
                  { left: 'சோறு (Soru)', right: 'Rice / Food' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'telugu',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    code: 'te-IN',
    family: 'Dravidian ("Italian of the East")',
    region: 'Andhra Pradesh & Telangana',
    speakers: '95M+',
    greeting: 'నమస్కారం (Namaskaram)',
    color: 'from-yellow-500 to-amber-600',
    accentColor: '#d97706',
    flagEmoji: '🌾',
    mascotQuote: 'రండి! తెలుగు నేర్చుకుందాం! (Welcome! Let’s learn the melodious Telugu language!)',
    alphabet: [
      { char: 'అ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'ఆ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'ఇ', roman: 'i', sound: 'ih', type: 'vowel' },
      { char: 'ఈ', roman: 'ee', sound: 'ee', type: 'vowel' },
      { char: 'క', roman: 'ka', sound: 'k', type: 'consonant' },
      { char: 'గ', roman: 'ga', sound: 'g', type: 'consonant' },
      { char: 'చ', roman: 'cha', sound: 'ch', type: 'consonant' },
      { char: 'త', roman: 'ta', sound: 'dental t', type: 'consonant' },
      { char: 'ద', roman: 'da', sound: 'd', type: 'consonant' },
      { char: 'న', roman: 'na', sound: 'n', type: 'consonant' },
      { char: 'ప', roman: 'pa', sound: 'p', type: 'consonant' },
      { char: 'ర', roman: 'ra', sound: 'r', type: 'consonant' }
    ],
    units: [
      {
        id: 'te-unit-1',
        title: 'Unit 1: Namaskaram & Essentials',
        description: 'First conversations in the musical language of Andhra & Telangana.',
        icon: 'Sparkles',
        color: 'bg-amber-500',
        lessons: [
          {
            id: 'te-1-1',
            title: 'Namaskaram & How Are You',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What is the standard greeting in Telugu?',
                audioText: 'నమస్కారం',
                options: [
                  { text: 'నమస్కారం (Namaskaram)', correct: true },
                  { text: 'ధన్యవాదాలు (Dhanyavadalu)', correct: false },
                  { text: 'బాగున్నారా (Bagunnara)', correct: false }
                ],
                explanation: '"Namaskaram" is the respectful Telugu greeting.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "How are you?" in Telugu',
                audioText: 'మీరు ఎలా ఉన్నారు?',
                targetSentence: 'మీరు ఎలా ఉన్నారు?',
                targetRoman: 'Meeru ela unnaru?',
                wordBank: ['మీరు', 'ఎలా', 'ఉన్నారు?', 'నేను', 'బాగున్నాను'],
                correctSequence: ['మీరు', 'ఎలా', 'ఉన్నారు?'],
                explanation: '"Meeru" = You (respectful), "ela" = how, "unnaru" = are.'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                prompt: 'How do you say "I am fine" in Telugu?',
                audioText: 'నేను బాగున్నాను',
                options: [
                  { text: 'నేను బాగున్నాను (Nenu bagunnanu)', correct: true },
                  { text: 'నా పేరు రవి (Naa peru Ravi)', correct: false },
                  { text: 'ఇది ఎంత? (Idi entha?)', correct: false }
                ],
                explanation: '"Bagunnanu" means doing well / fine!'
              },
              {
                id: 'q4',
                type: 'match-pairs',
                prompt: 'Match Telugu words with English:',
                pairs: [
                  { left: 'అవును (Avunu)', right: 'Yes' },
                  { left: 'కాదు (Kaadu)', right: 'No' },
                  { left: 'ధన్యవాదాలు (Dhanyavadalu)', right: 'Thank you' },
                  { left: 'మంచిది (Manchidi)', right: 'Good / Okay' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bengali',
    name: 'Bengali',
    nativeName: 'বাংলা',
    code: 'bn-IN',
    family: 'Indo-Aryan',
    region: 'West Bengal & Tripura',
    speakers: '300M+ (Global)',
    greeting: 'নমস্কার (Nomoshkar)',
    color: 'from-emerald-500 to-teal-700',
    accentColor: '#0d9488',
    flagEmoji: '🎨',
    mascotQuote: 'আসুন, মিষ্টি মিষ্টি বাংলা শিখি! (Come, let’s learn sweet Bengali!)',
    alphabet: [
      { char: 'অ', roman: 'o/aw', sound: 'aw (as in hot)', type: 'vowel' },
      { char: 'আ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'ই', roman: 'i', sound: 'ih', type: 'vowel' },
      { char: 'ঈ', roman: 'ee', sound: 'ee', type: 'vowel' },
      { char: 'ক', roman: 'ko', sound: 'k', type: 'consonant' },
      { char: 'খ', roman: 'kho', sound: 'kh', type: 'consonant' },
      { char: 'গ', roman: 'go', sound: 'g', type: 'consonant' },
      { char: 'চ', roman: 'cho', sound: 'ch', type: 'consonant' },
      { char: 'জ', roman: 'jo', sound: 'j', type: 'consonant' },
      { char: 'ত', roman: 'to', sound: 'dental t', type: 'consonant' },
      { char: 'প', roman: 'po', sound: 'p', type: 'consonant' },
      { char: 'র', roman: 'ro', sound: 'r', type: 'consonant' }
    ],
    units: [
      {
        id: 'bn-unit-1',
        title: 'Unit 1: Nomoshkar & Sweet Beginnings',
        description: 'Learn the poetic, lyrical Bengali language and cultural warmth.',
        icon: 'Sparkles',
        color: 'bg-teal-500',
        lessons: [
          {
            id: 'bn-1-1',
            title: 'Greetings & Well Being',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you say "Greetings / Hello" in Bengali?',
                audioText: 'নমস্কার',
                options: [
                  { text: 'নমস্কার (Nomoshkar)', correct: true },
                  { text: 'ধন্যবাদ (Dhonnobaad)', correct: false },
                  { text: 'হ্যাঁ (Hyāñ)', correct: false }
                ],
                explanation: '"Nomoshkar" is the polite greeting across Bengal.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "How are you?" in Bengali',
                audioText: 'আপনি কেমন আছেন?',
                targetSentence: 'আপনি কেমন আছেন?',
                targetRoman: 'Aapni kemon aachen?',
                wordBank: ['আপনি', 'কেমন', 'আছেন?', 'আমি', 'ভালো', 'আছি'],
                correctSequence: ['আপনি', 'কেমন', 'আছেন?'],
                explanation: '"Aapni" = You (respectful), "kemon" = how, "aachen" = are.'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                prompt: 'What does "আমি ভালো আছি" (Aami bhalo aachi) mean?',
                audioText: 'আমি ভালো আছি',
                options: [
                  { text: 'I am doing well / fine', correct: true },
                  { text: 'My name is Amit', correct: false },
                  { text: 'Give me sweets', correct: false }
                ],
                explanation: '"Bhalo" means good or well in Bengali!'
              },
              {
                id: 'q4',
                type: 'match-pairs',
                prompt: 'Match Bengali terms:',
                pairs: [
                  { left: 'মিষ্টি (Mishti)', right: 'Sweet' },
                  { left: 'জল (Jol)', right: 'Water' },
                  { left: 'চা (Chaa)', right: 'Tea' },
                  { left: 'ধন্যবাদ (Dhonnobaad)', right: 'Thank you' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kannada',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    code: 'kn-IN',
    family: 'Dravidian',
    region: 'Karnataka (Bengaluru)',
    speakers: '60M+',
    greeting: 'ನಮಸ್ಕಾರ (Namaskara)',
    color: 'from-amber-600 to-red-600',
    accentColor: '#ea580c',
    flagEmoji: '☕',
    mascotQuote: 'ಬನ್ನಿ, ಕನ್ನಡ ಕಲಿಯೋಣ! (Come, let’s learn Kannada and explore Bengaluru!)',
    alphabet: [
      { char: 'ಅ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'ಆ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'ಇ', roman: 'i', sound: 'ih', type: 'vowel' },
      { char: 'ಕ', roman: 'ka', sound: 'k', type: 'consonant' },
      { char: 'ಗ', roman: 'ga', sound: 'g', type: 'consonant' },
      { char: 'ಚ', roman: 'cha', sound: 'ch', type: 'consonant' },
      { char: 'ತ', roman: 'ta', sound: 'dental t', type: 'consonant' },
      { char: 'ನ', roman: 'na', sound: 'n', type: 'consonant' },
      { char: 'ಮ', roman: 'ma', sound: 'm', type: 'consonant' },
      { char: 'ರ', roman: 'ra', sound: 'r', type: 'consonant' }
    ],
    units: [
      {
        id: 'kn-unit-1',
        title: 'Unit 1: Namaskara & Bengaluru Basics',
        description: 'Everyday Kannada for moving around Karnataka and Namma Bengaluru.',
        icon: 'Sparkles',
        color: 'bg-orange-500',
        lessons: [
          {
            id: 'kn-1-1',
            title: 'Namaskara & Auto Essentials',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What is "Hello / Greetings" in Kannada?',
                audioText: 'ನಮಸ್ಕಾರ',
                options: [
                  { text: 'ನಮಸ್ಕಾರ (Namaskara)', correct: true },
                  { text: 'ಧನ್ಯವಾದಗಳು (Dhanyavadagalu)', correct: false },
                  { text: 'ಹೌದು (Haudu)', correct: false }
                ],
                explanation: '"Namaskara" is the respectful greeting in Karnataka.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "How are you?" in Kannada',
                audioText: 'ನೀವು ಹೇಗಿದ್ದೀರಾ?',
                targetSentence: 'ನೀವು ಹೇಗಿದ್ದೀರಾ?',
                targetRoman: 'Neevu hegiddira?',
                wordBank: ['ನೀವು', 'ಹೇಗಿದ್ದೀರಾ?', 'ನಾನು', 'ಚೆನ್ನಾಗಿದ್ದೀನಿ'],
                correctSequence: ['ನೀವು', 'ಹೇಗಿದ್ದೀರಾ?'],
                explanation: '"Neevu" = You (respectful), "hegiddira" = how are you.'
              },
              {
                id: 'q3',
                type: 'multiple-choice',
                prompt: 'The iconic Bengaluru phrase "ಗೊತ್ತಿಲ್ಲ" (Gottilla) means:',
                audioText: 'ಗೊತ್ತಿಲ್ಲ',
                options: [
                  { text: 'I don’t know', correct: true },
                  { text: 'Let’s go', correct: false },
                  { text: 'Very good', correct: false }
                ],
                explanation: '"Kannada gothilla" (I don’t know Kannada) is famous, but with this app you WILL know Kannada!'
              },
              {
                id: 'q4',
                type: 'match-pairs',
                prompt: 'Match Kannada words:',
                pairs: [
                  { left: 'ಹೌದು (Haudu)', right: 'Yes' },
                  { left: 'ಇಲ್ಲ (Illa)', right: 'No' },
                  { left: 'ನೀರು (Neeru)', right: 'Water' },
                  { left: 'ಊಟ (Oota)', right: 'Meal / Food' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    code: 'ml-IN',
    family: 'Dravidian',
    region: 'Kerala & Lakshadweep',
    speakers: '38M+',
    greeting: 'നമസ്കാരം (Namaskaram)',
    color: 'from-emerald-600 to-green-700',
    accentColor: '#16a34a',
    flagEmoji: '🥥',
    mascotQuote: 'വരൂ, നമുക്ക് മലയാളം പഠിക്കാം! (Come, let’s learn Malayalam in God’s Own Country!)',
    alphabet: [
      { char: 'അ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'ആ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'ഇ', roman: 'i', sound: 'ih', type: 'vowel' },
      { char: 'ക', roman: 'ka', sound: 'k', type: 'consonant' },
      { char: 'ഗ', roman: 'ga', sound: 'g', type: 'consonant' },
      { char: 'ച', roman: 'cha', sound: 'ch', type: 'consonant' },
      { char: 'ത', roman: 'tha', sound: 'th', type: 'consonant' },
      { char: 'ന', roman: 'na', sound: 'n', type: 'consonant' },
      { char: 'പ', roman: 'pa', sound: 'p', type: 'consonant' },
      { char: 'മ', roman: 'ma', sound: 'm', type: 'consonant' }
    ],
    units: [
      {
        id: 'ml-unit-1',
        title: 'Unit 1: Namaskaram & God’s Own Phrases',
        description: 'First Malayalam expressions and warm hospitality.',
        icon: 'Sparkles',
        color: 'bg-emerald-600',
        lessons: [
          {
            id: 'ml-1-1',
            title: 'Greetings & Politeness',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What is "Hello / Greetings" in Malayalam?',
                audioText: 'നമസ്കാരം',
                options: [
                  { text: 'നമസ്കാരം (Namaskaram)', correct: true },
                  { text: 'നന്ദി (Nandi)', correct: false },
                  { text: 'സുഖമാണോ (Sukhamaano)', correct: false }
                ],
                explanation: '"Namaskaram" is the respectful greeting in Kerala.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "How are you? / Are you well?"',
                audioText: 'സുഖമാണോ?',
                targetSentence: 'സുഖമാണോ?',
                targetRoman: 'Sukhamaano?',
                wordBank: ['സുഖമാണോ?', 'സുഖമാണ്', 'നന്ദി'],
                correctSequence: ['സുഖമാണോ?'],
                explanation: '"Sukhamaano?" is the ubiquitous, friendly Kerala question.'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match Malayalam vocabulary:',
                pairs: [
                  { left: 'അതെ (Athe)', right: 'Yes' },
                  { left: 'അല്ല (Alla)', right: 'No' },
                  { left: 'വെള്ളം (Vellam)', right: 'Water' },
                  { left: 'ചായ (Chaaya)', right: 'Tea' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'marathi',
    name: 'Marathi',
    nativeName: 'मराठी',
    code: 'mr-IN',
    family: 'Indo-Aryan',
    region: 'Maharashtra (Mumbai & Pune)',
    speakers: '99M+',
    greeting: 'नमस्कार (Namaskar)',
    color: 'from-orange-500 to-amber-700',
    accentColor: '#ea580c',
    flagEmoji: '🦁',
    mascotQuote: 'चला, मराठी शिकूया! (Come, let’s learn vibrant Marathi!)',
    alphabet: [
      { char: 'अ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'आ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'क', roman: 'ka', sound: 'k', type: 'consonant' },
      { char: 'ख', roman: 'kha', sound: 'kh', type: 'consonant' },
      { char: 'ग', roman: 'ga', sound: 'g', type: 'consonant' },
      { char: 'च', roman: 'cha', sound: 'ch', type: 'consonant' },
      { char: 'ज', roman: 'ja', sound: 'j', type: 'consonant' },
      { char: 'त', roman: 'ta', sound: 't', type: 'consonant' },
      { char: 'म', roman: 'ma', sound: 'm', type: 'consonant' },
      { char: 'ळ', roman: 'la', sound: 'retroflex l', type: 'consonant' }
    ],
    units: [
      {
        id: 'mr-unit-1',
        title: 'Unit 1: Namaskar & Mumbai Vibe',
        description: 'Vibrant Marathi phrases for everyday life in Maharashtra.',
        icon: 'Sparkles',
        color: 'bg-orange-500',
        lessons: [
          {
            id: 'mr-1-1',
            title: 'Greetings & Daily Talk',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'How do you ask "How are you?" in Marathi?',
                audioText: 'तुम्ही कसे आहात?',
                options: [
                  { text: 'तुम्ही कसे आहात? (Tumhi kase aahaat?)', correct: true },
                  { text: 'माझे नाव अमित आहे (Maajhe naav Amit aahe)', correct: false },
                  { text: 'धन्यवाद (Dhanyavaad)', correct: false }
                ],
                explanation: '"Tumhi kase aahaat?" is polite and friendly.'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "I am fine" in Marathi',
                audioText: 'मी छान आहे',
                targetSentence: 'मी छान आहे',
                targetRoman: 'Mee chhaan aahe',
                wordBank: ['मी', 'छान', 'आहे', 'तुम्ही', 'कसे'],
                correctSequence: ['मी', 'छान', 'आहे'],
                explanation: '"Chhaan" means wonderful / great / fine!'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match Marathi words:',
                pairs: [
                  { left: 'हो (Ho)', right: 'Yes' },
                  { left: 'नाही (Naahi)', right: 'No' },
                  { left: 'पाणी (Paani)', right: 'Water' },
                  { left: 'जेवण (Jevan)', right: 'Food / Meal' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    code: 'pa-IN',
    family: 'Indo-Aryan (Gurmukhi)',
    region: 'Punjab',
    speakers: '125M+ (Global)',
    greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akaal)',
    color: 'from-amber-400 to-yellow-600',
    accentColor: '#ca8a04',
    flagEmoji: '🌾',
    mascotQuote: 'ਆਓ ਜੀ, ਪੰਜਾਬੀ ਸਿੱਖੀਏ! (Welcome! Let’s learn energetic Punjabi with full joy!)',
    alphabet: [
      { char: 'ੳ', roman: 'oora', sound: 'oo', type: 'vowel' },
      { char: 'ਅ', roman: 'aira', sound: 'uh', type: 'vowel' },
      { char: 'ੲ', roman: 'eeri', sound: 'ee', type: 'vowel' },
      { char: 'ਸ', roman: 'sassa', sound: 's', type: 'consonant' },
      { char: 'ਹ', roman: 'haha', sound: 'h', type: 'consonant' },
      { char: 'ਕ', roman: 'kakka', sound: 'k', type: 'consonant' },
      { char: 'ਗ', roman: 'gagga', sound: 'g', type: 'consonant' },
      { char: 'ਜ', roman: 'jajja', sound: 'j', type: 'consonant' }
    ],
    units: [
      {
        id: 'pa-unit-1',
        title: 'Unit 1: Sat Sri Akaal & Warmth',
        description: 'Vibrant greetings and high-energy phrases from the land of five rivers.',
        icon: 'Sparkles',
        color: 'bg-yellow-500',
        lessons: [
          {
            id: 'pa-1-1',
            title: 'Sat Sri Akaal & Basics',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What is the sacred and traditional greeting in Punjabi?',
                audioText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
                options: [
                  { text: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akaal)', correct: true },
                  { text: 'ਧੰਨਵਾਦ (Dhanvaad)', correct: false },
                  { text: 'ਕੀ ਹਾਲ ਹੈ (Ki haal hai)', correct: false }
                ],
                explanation: '"Sat Sri Akaal" means "True is the Timeless Sovereign Lord".'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build: "How are you?" in Punjabi',
                audioText: 'ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?',
                targetSentence: 'ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?',
                targetRoman: 'Tuhada ki haal hai?',
                wordBank: ['ਤੁਹਾਡਾ', 'ਕੀ', 'ਹਾਲ', 'ਹੈ?', 'ਮੈਂ', 'ਠੀਕ'],
                correctSequence: ['ਤੁਹਾਡਾ', 'ਕੀ', 'ਹਾਲ', 'ਹੈ?'],
                explanation: 'A hearty Punjabi inquiry into someone’s wellbeing!'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match Punjabi vocabulary:',
                pairs: [
                  { left: 'ਹਾਂਜੀ (Haanji)', right: 'Yes (Respectful)' },
                  { left: 'ਨਹੀਂ (Nahin)', right: 'No' },
                  { left: 'ਧੰਨਵਾਦ (Dhanvaad)', right: 'Thank you' },
                  { left: 'ਲੱਸੀ (Lassi)', right: 'Yogurt drink' }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'gujarati',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    code: 'gu-IN',
    family: 'Indo-Aryan',
    region: 'Gujarat',
    speakers: '60M+',
    greeting: 'નમસ્તે / જય શ્રી કૃષ્ણ (Kem Chho)',
    color: 'from-blue-500 to-cyan-600',
    accentColor: '#0284c7',
    flagEmoji: '🪁',
    mascotQuote: 'કેમ છો! ચાલો ગુજરાતી શીખીએ! (Kem Chho! Let’s learn Gujarati together!)',
    alphabet: [
      { char: 'અ', roman: 'a', sound: 'uh', type: 'vowel' },
      { char: 'આ', roman: 'aa', sound: 'aah', type: 'vowel' },
      { char: 'ક', roman: 'ka', sound: 'k', type: 'consonant' },
      { char: 'ખ', roman: 'kha', sound: 'kh', type: 'consonant' },
      { char: 'ગ', roman: 'ga', sound: 'g', type: 'consonant' },
      { char: 'ચ', roman: 'cha', sound: 'ch', type: 'consonant' },
      { char: 'જ', roman: 'ja', sound: 'j', type: 'consonant' },
      { char: 'ત', roman: 'ta', sound: 'dental t', type: 'consonant' }
    ],
    units: [
      {
        id: 'gu-unit-1',
        title: 'Unit 1: Kem Chho & Sweet Hospitality',
        description: 'Friendly Gujarati conversations, food, and warm hospitality.',
        icon: 'Sparkles',
        color: 'bg-cyan-500',
        lessons: [
          {
            id: 'gu-1-1',
            title: 'Kem Chho & Majama',
            xp: 20,
            questions: [
              {
                id: 'q1',
                type: 'multiple-choice',
                prompt: 'What is the most famous Gujarati greeting for "How are you?"',
                audioText: 'કેમ છો?',
                options: [
                  { text: 'કેમ છો? (Kem Chho?)', correct: true },
                  { text: 'મજામાં (Majama)', correct: false },
                  { text: 'આભાર (Aabhaar)', correct: false }
                ],
                explanation: '"Kem Chho?" is known worldwide as the cheerful Gujarati greeting!'
              },
              {
                id: 'q2',
                type: 'sentence-builder',
                prompt: 'Build the reply: "I am in high spirits / doing great!"',
                audioText: 'હું મજામાં છું',
                targetSentence: 'હું મજામાં છું',
                targetRoman: 'Hun majama chhun',
                wordBank: ['હું', 'મજામાં', 'છું', 'તમે', 'કેમ'],
                correctSequence: ['હું', 'મજામાં', 'છું'],
                explanation: '"Majama" signifies happiness, joy, and peace of mind!'
              },
              {
                id: 'q3',
                type: 'match-pairs',
                prompt: 'Match Gujarati terms:',
                pairs: [
                  { left: 'હા (Haa)', right: 'Yes' },
                  { left: 'ના (Naa)', right: 'No' },
                  { left: 'આભાર (Aabhaar)', right: 'Thank you' },
                  { left: 'પાણી (Paani)', right: 'Water' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
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
  { rank: 4, name: 'Ananya Mukherjee', avatar: '🌸', xp: 1820, league: 'Gold', country: 'Kolkata' },
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
