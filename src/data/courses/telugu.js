export const TELUGU_COURSE = {
  "id": "telugu",
  "name": "Telugu",
  "nativeName": "తెలుగు",
  "code": "te-IN",
  "family": "Dravidian (Italian of the East)",
  "region": "Andhra Pradesh & Telangana",
  "speakers": "95M+",
  "greeting": "నమస్కారం (Namaskaram)",
  "color": "from-amber-600 to-yellow-600",
  "accentColor": "#d97706",
  "flagEmoji": "🌾",
  "mascotQuote": "రండి, కఠిన స్థాయి (Hard Level) వరకు తెలుగు నేర్చుకుందాం!",
  "alphabet": [
    {
      "char": "అ",
      "roman": "a",
      "sound": "uh",
      "type": "vowel"
    },
    {
      "char": "ఆ",
      "roman": "aa",
      "sound": "aah",
      "type": "vowel"
    },
    {
      "char": "ఇ",
      "roman": "i",
      "sound": "ih",
      "type": "vowel"
    },
    {
      "char": "ఈ",
      "roman": "ee",
      "sound": "ee",
      "type": "vowel"
    },
    {
      "char": "ఉ",
      "roman": "u",
      "sound": "oo",
      "type": "vowel"
    },
    {
      "char": "క",
      "roman": "ka",
      "sound": "k",
      "type": "consonant"
    },
    {
      "char": "గ",
      "roman": "ga",
      "sound": "g",
      "type": "consonant"
    },
    {
      "char": "చ",
      "roman": "cha",
      "sound": "ch",
      "type": "consonant"
    },
    {
      "char": "జ",
      "roman": "ja",
      "sound": "j",
      "type": "consonant"
    },
    {
      "char": "త",
      "roman": "ta",
      "sound": "dental t",
      "type": "consonant"
    },
    {
      "char": "ద",
      "roman": "da",
      "sound": "dental d",
      "type": "consonant"
    },
    {
      "char": "న",
      "roman": "na",
      "sound": "n",
      "type": "consonant"
    },
    {
      "char": "ప",
      "roman": "pa",
      "sound": "p",
      "type": "consonant"
    },
    {
      "char": "బ",
      "roman": "ba",
      "sound": "b",
      "type": "consonant"
    },
    {
      "char": "మ",
      "roman": "ma",
      "sound": "m",
      "type": "consonant"
    },
    {
      "char": "ర",
      "roman": "ra",
      "sound": "r",
      "type": "consonant"
    }
  ],
  "units": [
    {
      "id": "te-unit-1",
      "title": "Unit 1: Namaskaram & Essentials",
      "level": "Beginner",
      "difficulty": "easy",
      "description": "Sweet Telugu greetings, introductions, and everyday respect.",
      "icon": "Sparkles",
      "color": "bg-emerald-500",
      "lessons": [
        {
          "id": "te-1-1",
          "title": "Namaskaram & How Are You",
          "difficulty": "easy",
          "xp": 20,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "How do you greet respectfully in Telugu?",
              "audioText": "నమస్కారం",
              "options": [
                {
                  "text": "నమస్కారం (Namaskaram)",
                  "correct": true
                },
                {
                  "text": "ధన్యవాదాలు (Dhanyavaadalu)",
                  "correct": false
                },
                {
                  "text": "సరే (Sare)",
                  "correct": false
                }
              ],
              "explanation": "\"Namaskaram\" is the universal respectful greeting."
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Thank you very much\" in Telugu",
              "audioText": "చాలా ధన్యవాదాలు",
              "targetSentence": "చాలా ధన్యవాదాలు",
              "targetRoman": "Chaala dhanyavaadalu",
              "wordBank": [
                "చాలా",
                "ధన్యవాదాలు",
                "నమస్కారం",
                "రండి"
              ],
              "correctSequence": [
                "చాలా",
                "ధన్యవాదాలు"
              ],
              "explanation": "\"Chaala\" = very/much, \"Dhanyavaadalu\" = thanks."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match Telugu basics:",
              "pairs": [
                {
                  "left": "అవును (Avunu)",
                  "right": "Yes"
                },
                {
                  "left": "కాదు (Kaadu)",
                  "right": "No"
                },
                {
                  "left": "దయచేసి (Dayachesi)",
                  "right": "Please"
                },
                {
                  "left": "సరే (Sare)",
                  "right": "Okay"
                }
              ]
            }
          ]
        },
        {
          "id": "te-1-2",
          "title": "Names & Personal Introductions",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"What is your name?\" in Telugu",
              "audioText": "మీ పేరు ఏమిటి?",
              "targetSentence": "మీ పేరు ఏమిటి?",
              "targetRoman": "Mee peru emiti?",
              "wordBank": [
                "మీ",
                "పేరు",
                "ఏమిటి?",
                "నా",
                "ఎలా"
              ],
              "correctSequence": [
                "మీ",
                "పేరు",
                "ఏమిటి?"
              ],
              "explanation": "\"Mee\" = your (polite), \"peru\" = name, \"emiti?\" = what."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"My name is Priya\"?",
              "audioText": "నా పేరు ప్రియ",
              "options": [
                {
                  "text": "నా పేరు ప్రియ (Naa peru Priya)",
                  "correct": true
                },
                {
                  "text": "మీ పేరు ప్రియ (Mee peru Priya)",
                  "correct": false
                },
                {
                  "text": "నేను ప్రియ కాదు (Nenu Priya kaadu)",
                  "correct": false
                }
              ],
              "explanation": "\"Naa peru\" means \"My name\"."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and select what you hear:",
              "audioText": "మీరు ఎలా ఉన్నారు?",
              "options": [
                {
                  "text": "మీరు ఎలా ఉన్నారు? (Meeru ela unnaaru? - How are you?)",
                  "correct": true
                },
                {
                  "text": "నేను బాగున్నాను (Nenu baagunnaanu - I am fine)",
                  "correct": false
                },
                {
                  "text": "ఎక్కడికి వెళ్తున్నారు? (Ekkadiki velthunnaaru?)",
                  "correct": false
                }
              ],
              "explanation": "\"Meeru ela unnaaru?\" is the formal way to ask \"How are you?\"."
            }
          ]
        },
        {
          "id": "te-1-3",
          "title": "Daily Courtesy & Numbers",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Telugu numbers:",
              "pairs": [
                {
                  "left": "ఒకటి (Okati)",
                  "right": "1 (One)"
                },
                {
                  "left": "రెండు (Rendu)",
                  "right": "2 (Two)"
                },
                {
                  "left": "మూడు (Moodu)",
                  "right": "3 (Three)"
                },
                {
                  "left": "నాలుగు (Naalugu)",
                  "right": "4 (Four)"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"I am fine, thank you\"",
              "audioText": "నేను బాగున్నాను ధన్యవాదాలు",
              "targetSentence": "నేను బాగున్నాను ధన్యవాదాలు",
              "targetRoman": "Nenu baagunnaanu dhanyavaadalu",
              "wordBank": [
                "నేను",
                "బాగున్నాను",
                "ధన్యవాదాలు",
                "మీరు",
                "సరే"
              ],
              "correctSequence": [
                "నేను",
                "బాగున్నాను",
                "ధన్యవాదాలు"
              ],
              "explanation": "\"Nenu baagunnaanu\" means \"I am doing well\"."
            },
            {
              "id": "q3",
              "type": "multiple-choice",
              "prompt": "How do you say \"See you again\" in Telugu?",
              "audioText": "మళ్ళీ కలుద్దాం",
              "options": [
                {
                  "text": "మళ్ళీ కలుద్దాం (Mallee kaluddhaam)",
                  "correct": true
                },
                {
                  "text": "వెళ్ళిపోండి (Vellipondi)",
                  "correct": false
                },
                {
                  "text": "కాదు (Kaadu)",
                  "correct": false
                }
              ],
              "explanation": "\"Mallee\" = again, \"kaluddhaam\" = let's meet."
            }
          ]
        }
      ]
    },
    {
      "id": "te-unit-2",
      "title": "Unit 2: Irani Chai, Biryani & Hyderabad Vibe",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Order world-famous Hyderabadi biryani, Osmania biscuits, and Irani chai.",
      "icon": "Coffee",
      "color": "bg-amber-500",
      "lessons": [
        {
          "id": "te-2-1",
          "title": "Ordering Food & Chai",
          "difficulty": "medium",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please give one cup of Irani chai\"",
              "audioText": "ఒక కప్పు ఇరానీ చాయ్ ఇవ్వండి",
              "targetSentence": "ఒక కప్పు ఇరానీ చాయ్ ఇవ్వండి",
              "targetRoman": "Oka kappu Irani chai ivvandi",
              "wordBank": [
                "ఒక",
                "కప్పు",
                "ఇరానీ",
                "చాయ్",
                "ఇవ్వండి",
                "రెండు"
              ],
              "correctSequence": [
                "ఒక",
                "కప్పు",
                "ఇరానీ",
                "చాయ్",
                "ఇవ్వండి"
              ],
              "explanation": "\"Ivvandi\" is the respectful request for \"please give\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does \"భోజనం చేశారా?\" (Bhojanam chesaara?) express?",
              "audioText": "భోజనం చేశారా?",
              "options": [
                {
                  "text": "Did you have your meal? (Caring Telugu greeting)",
                  "correct": true
                },
                {
                  "text": "Where is the restaurant?",
                  "correct": false
                },
                {
                  "text": "Can I have the bill?",
                  "correct": false
                }
              ],
              "explanation": "Asking if you have eaten is the heart of Telugu hospitality!"
            }
          ]
        },
        {
          "id": "te-2-2",
          "title": "Flavors, Mirchi Bajji & Biryani",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Telugu taste terms:",
              "pairs": [
                {
                  "left": "తీపి (Theepi)",
                  "right": "Sweet"
                },
                {
                  "left": "కారం (Kaaram)",
                  "right": "Spicy / Hot"
                },
                {
                  "left": "పులుపు (Pulupu)",
                  "right": "Sour"
                },
                {
                  "left": "రుచి (Ruchi)",
                  "right": "Taste / Flavor"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"This biryani is very tasty\"",
              "audioText": "ఈ బిర్యానీ చాలా రుచిగా ఉంది",
              "targetSentence": "ఈ బిర్యానీ చాలా రుచిగా ఉంది",
              "targetRoman": "Ee biryani chaala ruchiga undi",
              "wordBank": [
                "ఈ",
                "బిర్యానీ",
                "చాలా",
                "రుచిగా",
                "ఉంది",
                "చాయ్"
              ],
              "correctSequence": [
                "ఈ",
                "బిర్యానీ",
                "చాలా",
                "రుచిగా",
                "ఉంది"
              ],
              "explanation": "\"Chaala ruchiga undi\" means \"it is very delicious\"."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and identify the snack:",
              "audioText": "రెండు వేడి వేడి మిర్చి బజ్జీలు ఇవ్వండి",
              "options": [
                {
                  "text": "Give two piping hot Mirchi Bajjis (Rendu vedi vedi mirchi bajjilu)",
                  "correct": true
                },
                {
                  "text": "Give cold water",
                  "correct": false
                },
                {
                  "text": "Give sweet payasam",
                  "correct": false
                }
              ],
              "explanation": "Mirchi Bajji is Andhra's iconic street delight!"
            }
          ]
        },
        {
          "id": "te-2-3",
          "title": "Laad Bazaar & Price Bargaining",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How much does this cost?\"",
              "audioText": "దీని ధర ఎంత?",
              "targetSentence": "దీని ధర ఎంత?",
              "targetRoman": "Deeni dhara entha?",
              "wordBank": [
                "దీని",
                "ధర",
                "ఎంత?",
                "చాలా",
                "ఇవ్వండి"
              ],
              "correctSequence": [
                "దీని",
                "ధర",
                "ఎంత?"
              ],
              "explanation": "\"Dhara\" = price, \"entha?\" = how much?"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you ask to reduce the price a bit?",
              "audioText": "కొంచెం తగ్గించండి",
              "options": [
                {
                  "text": "కొంచెం తగ్గించండి (Konchem tagginchandi)",
                  "correct": true
                },
                {
                  "text": "ఇంకా పెంచండి (Inka penchandi)",
                  "correct": false
                },
                {
                  "text": "నాకు వద్దు (Naaku vaddu)",
                  "correct": false
                }
              ],
              "explanation": "\"Konchem tagginchandi\" means \"Please reduce a little bit\"."
            }
          ]
        }
      ]
    },
    {
      "id": "te-unit-3",
      "title": "Unit 3: Finding Your Way & Travel",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Navigate auto-rickshaws, Charminar streets, and travel across Telugu lands.",
      "icon": "Compass",
      "color": "bg-blue-500",
      "lessons": [
        {
          "id": "te-3-1",
          "title": "Taking an Auto & Directions",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Go straight and turn left\"",
              "audioText": "తిన్నగా వెళ్ళండి మరియు ఎడమవైపు తిరగండి",
              "targetSentence": "తిన్నగా వెళ్ళండి మరియు ఎడమవైపు తిరగండి",
              "targetRoman": "Thinnaga vellandi mariyu edamavaipu thiragandi",
              "wordBank": [
                "తిన్నగా",
                "వెళ్ళండి",
                "మరియు",
                "ఎడమవైపు",
                "తిరగండి",
                "కుడివైపు"
              ],
              "correctSequence": [
                "తిన్నగా",
                "వెళ్ళండి",
                "మరియు",
                "ఎడమవైపు",
                "తిరగండి"
              ],
              "explanation": "\"Thinnaga\" = straight, \"edamavaipu\" = left side."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match Telugu navigation terms:",
              "pairs": [
                {
                  "left": "తిన్నగా (Thinnaga)",
                  "right": "Straight"
                },
                {
                  "left": "ఎడమ (Edama)",
                  "right": "Left"
                },
                {
                  "left": "కుడి (Kudi)",
                  "right": "Right"
                },
                {
                  "left": "దగ్గర (Daggara)",
                  "right": "Near"
                }
              ]
            }
          ]
        },
        {
          "id": "te-3-2",
          "title": "Auto Meter & Hyderabad Street Navigation",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please stop right here\"",
              "audioText": "ఇక్కడ ఆపండి",
              "targetSentence": "ఇక్కడ ఆపండి",
              "targetRoman": "Ikkada aapandi",
              "wordBank": [
                "ఇక్కడ",
                "ఆపండి",
                "అక్కడ",
                "వెళ్ళండి"
              ],
              "correctSequence": [
                "ఇక్కడ",
                "ఆపండి"
              ],
              "explanation": "\"Ikkada\" = here, \"aapandi\" = please stop."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you ask \"Where is Secunderabad station?\"",
              "audioText": "సికింద్రాబాద్ స్టేషన్ ఎక్కడ ఉంది?",
              "options": [
                {
                  "text": "సికింద్రాబాద్ స్టేషన్ ఎక్కడ ఉంది? (Secunderabad station ekkada undi?)",
                  "correct": true
                },
                {
                  "text": "స్టేషన్ ఎంత దూరం? (Station entha dooram?)",
                  "correct": false
                },
                {
                  "text": "ఇది ఏ ఊరు? (Idi ye ooru?)",
                  "correct": false
                }
              ],
              "explanation": "\"Ekkada undi?\" = where is it?"
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and choose the travel direction:",
              "audioText": "కుడి వైపు వెళ్ళండి",
              "options": [
                {
                  "text": "Go towards the right side (Kudi vaipu vellandi)",
                  "correct": true
                },
                {
                  "text": "Go towards the left side",
                  "correct": false
                },
                {
                  "text": "Stop here",
                  "correct": false
                }
              ],
              "explanation": "\"Kudi vaipu\" means the right side."
            }
          ]
        },
        {
          "id": "te-3-3",
          "title": "Travel Inquiries & Charminar Routes",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How much time will it take?\"",
              "audioText": "ఎంత సమయం పడుతుంది?",
              "targetSentence": "ఎంత సమయం పడుతుంది?",
              "targetRoman": "Entha samayam paduthundi?",
              "wordBank": [
                "ఎంత",
                "సమయం",
                "పడుతుంది?",
                "ఇక్కడ",
                "ధర"
              ],
              "correctSequence": [
                "ఎంత",
                "సమయం",
                "పడుతుంది?"
              ],
              "explanation": "\"Samayam\" = time, \"entha paduthundi?\" = how much will it take?"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does \"దయచేసి నాకు సహాయం చేయండి\" mean?",
              "audioText": "దయచేసి నాకు సహాయం చేయండి",
              "options": [
                {
                  "text": "Please help me (Dayachesi naaku sahaayam cheyandi)",
                  "correct": true
                },
                {
                  "text": "I don't know this place",
                  "correct": false
                },
                {
                  "text": "Call a taxi",
                  "correct": false
                }
              ],
              "explanation": "\"Sahaayam\" means help."
            }
          ]
        }
      ]
    },
    {
      "id": "te-unit-4",
      "title": "Unit 4: HARD LEVEL • Samethalu & Fluent Telugu",
      "level": "Hard Level",
      "difficulty": "hard",
      "description": "Master time-honored Telugu proverbs (సామెతలు), poetic sweetness, and high-energy expressions.",
      "icon": "Award",
      "color": "bg-rose-600",
      "lessons": [
        {
          "id": "te-4-1",
          "title": "Legendary Telugu Proverbs (సామెతలు)",
          "difficulty": "hard",
          "xp": 50,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "What does the famous Telugu proverb \"చేతులు కాలాక ఆకులు పట్టుకున్నట్లు\" mean?",
              "audioText": "చేతులు కాలాక ఆకులు పట్టుకున్నట్లు",
              "options": [
                {
                  "text": "Locking the stable door after the horse has bolted / Too late to act after damage is done",
                  "correct": true
                },
                {
                  "text": "Cooking food with bare hands",
                  "correct": false
                },
                {
                  "text": "Walking in the autumn forest",
                  "correct": false
                }
              ],
              "explanation": "Literal: \"Trying to hold leaves to protect oneself after the hands have already burned\"!"
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build the classic proverb: \"తీపి మాటలు చేదు నిజాలు\"",
              "audioText": "తీపి మాటలు చేదు నిజాలు",
              "targetSentence": "తీపి మాటలు చేదు నిజాలు",
              "targetRoman": "Theepi maatalu chedu nijaalu",
              "wordBank": [
                "తీపి",
                "మాటలు",
                "చేదు",
                "నిజాలు",
                "మనిషి",
                "లోకం"
              ],
              "correctSequence": [
                "తీపి",
                "మాటలు",
                "చేదు",
                "నిజాలు"
              ],
              "explanation": "Meaning: \"Sweet words may flatter, but bitter truths enlighten\"."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match Telugu idioms and expressions:",
              "pairs": [
                {
                  "left": "రచ్చ (Raccha)",
                  "right": "Rocking / High energy excitement"
                },
                {
                  "left": "అదుర్స్ (Adurs)",
                  "right": "Fantastic / Top notch"
                },
                {
                  "left": "బిందాస్ (Bindaas)",
                  "right": "Carefree and cheerful"
                },
                {
                  "left": "గోరుచుట్టుపై రోకటి పోటు",
                  "right": "Misfortunes never come singly"
                }
              ]
            }
          ]
        },
        {
          "id": "te-4-2",
          "title": "Boss Challenge: Telugu Fluency Mastery",
          "difficulty": "hard",
          "xp": 60,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build the immortal Vemana line: \"ఉప్పు కప్పురంబు నొక్క పోలిక నుండు\"",
              "audioText": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు",
              "targetSentence": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు",
              "targetRoman": "Uppu kappurambu nokka polika nundu",
              "wordBank": [
                "ఉప్పు",
                "కప్పురంబు",
                "నొక్క",
                "పోలిక",
                "నుండు",
                "చూడు",
                "మనిషి"
              ],
              "correctSequence": [
                "ఉప్పు",
                "కప్పురంబు",
                "నొక్క",
                "పోలిక",
                "నుండు"
              ],
              "explanation": "Vemana’s wisdom: \"Salt and camphor look identically white, but look closer and their natures are entirely distinct\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "Why was Telugu celebrated as \"The Italian of the East\" by European travelers?",
              "audioText": "తెలుగు భాష తీయదనం",
              "options": [
                {
                  "text": "Because every native Telugu word ends melodiously in a vowel sound",
                  "correct": true
                },
                {
                  "text": "Because of Roman trade connections",
                  "correct": false
                },
                {
                  "text": "Because of similar culinary terms",
                  "correct": false
                }
              ],
              "explanation": "Niccolò de' Conti named Telugu \"Italian of the East\" because of its ajanta-bhasha nature where words conclude in soft vocalic sounds."
            }
          ]
        },
        {
          "id": "te-4-3",
          "title": "Grand Telugu Fluency Trophy Challenge",
          "difficulty": "hard",
          "xp": 75,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"చిత్తశుద్ధి లేని శివపూజలేల\" (Vemana on genuine devotion)",
              "audioText": "చిత్తశుద్ధి లేని శివపూజలేల",
              "targetSentence": "చిత్తశుద్ధి లేని శివపూజలేల",
              "targetRoman": "Chitthasuddhi leni sivapoojalela",
              "wordBank": [
                "చిత్తశుద్ధి",
                "లేని",
                "శివపూజలేల",
                "మనిషి",
                "భక్తి"
              ],
              "correctSequence": [
                "చిత్తశుద్ధి",
                "లేని",
                "శివపూజలేల"
              ],
              "explanation": "Vemana: \"Of what use is ritual worship without purity of heart and mind?\"."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match modern colloquial Telugu terms:",
              "pairs": [
                {
                  "left": "మామూలుగా లేదు (Maamoolga ledu)",
                  "right": "Not ordinary / Sensational!"
                },
                {
                  "left": "తోపు (Thopu)",
                  "right": "Genius / Champ"
                },
                {
                  "left": "ఖతర్నాక్ (Khatarnaak)",
                  "right": "Dangerous / Mindblowing"
                },
                {
                  "left": "చూసుకుందాం (Choosukundaam)",
                  "right": "We shall see / Challenge accepted"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
