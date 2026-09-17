export const TAMIL_COURSE = {
  "id": "tamil",
  "name": "Tamil",
  "nativeName": "தமிழ்",
  "code": "ta-IN",
  "family": "Dravidian (Classical)",
  "region": "Tamil Nadu & Puducherry",
  "speakers": "85M+",
  "greeting": "வணக்கம் (Vanakkam)",
  "color": "from-red-500 to-rose-700",
  "accentColor": "#e11d48",
  "flagEmoji": "🌴",
  "mascotQuote": "வாருங்கள், கடின நிலை (Hard Level) வரை தமிழ் கற்போம்!",
  "alphabet": [
    {
      "char": "அ",
      "roman": "a",
      "sound": "uh",
      "type": "vowel"
    },
    {
      "char": "ஆ",
      "roman": "aa",
      "sound": "aah",
      "type": "vowel"
    },
    {
      "char": "இ",
      "roman": "i",
      "sound": "ih",
      "type": "vowel"
    },
    {
      "char": "ஈ",
      "roman": "ee",
      "sound": "ee",
      "type": "vowel"
    },
    {
      "char": "உ",
      "roman": "u",
      "sound": "oo",
      "type": "vowel"
    },
    {
      "char": "எ",
      "roman": "e",
      "sound": "eh",
      "type": "vowel"
    },
    {
      "char": "க",
      "roman": "ka/ga",
      "sound": "k/g",
      "type": "consonant"
    },
    {
      "char": "ங",
      "roman": "nga",
      "sound": "ng",
      "type": "consonant"
    },
    {
      "char": "ச",
      "roman": "cha/sa",
      "sound": "ch/s",
      "type": "consonant"
    },
    {
      "char": "ஞ",
      "roman": "nya",
      "sound": "ny",
      "type": "consonant"
    },
    {
      "char": "த",
      "roman": "tha",
      "sound": "dental th",
      "type": "consonant"
    },
    {
      "char": "ந",
      "roman": "na",
      "sound": "n",
      "type": "consonant"
    },
    {
      "char": "ப",
      "roman": "pa/ba",
      "sound": "p/b",
      "type": "consonant"
    },
    {
      "char": "ம",
      "roman": "ma",
      "sound": "m",
      "type": "consonant"
    },
    {
      "char": "ழ",
      "roman": "zha",
      "sound": "special retroflex r/l",
      "type": "consonant"
    }
  ],
  "units": [
    {
      "id": "ta-unit-1",
      "title": "Unit 1: Vanakkam & Polite Phrases",
      "level": "Beginner",
      "difficulty": "easy",
      "description": "Ancient greetings, polite respect, and daily conversation starters.",
      "icon": "Sparkles",
      "color": "bg-rose-500",
      "lessons": [
        {
          "id": "ta-1-1",
          "title": "Vanakkam & Daily Greetings",
          "difficulty": "easy",
          "xp": 20,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "How do you say \"Hello / Greetings\" in Tamil?",
              "audioText": "வணக்கம்",
              "options": [
                {
                  "text": "வணக்கம் (Vanakkam)",
                  "correct": true
                },
                {
                  "text": "நன்றி (Nandri)",
                  "correct": false
                },
                {
                  "text": "சரி (Sari)",
                  "correct": false
                }
              ],
              "explanation": "\"Vanakkam\" is the traditional Tamil greeting with folded hands."
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Thank you very much\" in Tamil",
              "audioText": "மிக்க நன்றி",
              "targetSentence": "மிக்க நன்றி",
              "targetRoman": "Mikka nandri",
              "wordBank": [
                "மிக்க",
                "நன்றி",
                "வணக்கம்",
                "வாருங்கள்"
              ],
              "correctSequence": [
                "மிக்க",
                "நன்றி"
              ],
              "explanation": "\"Mikka\" = very much, \"Nandri\" = thank you."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match common Tamil words:",
              "pairs": [
                {
                  "left": "ஆம் (Aam)",
                  "right": "Yes"
                },
                {
                  "left": "இல்லை (Illai)",
                  "right": "No"
                },
                {
                  "left": "சரி (Sari)",
                  "right": "Okay / Alright"
                },
                {
                  "left": "நன்றி (Nandri)",
                  "right": "Thank you"
                }
              ]
            }
          ]
        },
        {
          "id": "ta-1-2",
          "title": "Names & Personal Introductions",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"What is your name?\" in polite Tamil",
              "audioText": "உங்கள் பெயர் என்ன?",
              "targetSentence": "உங்கள் பெயர் என்ன?",
              "targetRoman": "Ungal peyar enna?",
              "wordBank": [
                "உங்கள்",
                "பெயர்",
                "என்ன?",
                "என்",
                "வணக்கம்"
              ],
              "correctSequence": [
                "உங்கள்",
                "பெயர்",
                "என்ன?"
              ],
              "explanation": "\"Ungal\" is the polite formal \"your\", and \"peyar\" means name."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you reply \"My name is Kumar\"?",
              "audioText": "என் பெயர் குமார்",
              "options": [
                {
                  "text": "என் பெயர் குமார் (En peyar Kumar)",
                  "correct": true
                },
                {
                  "text": "நான் குமார் இல்லை (Naan Kumar illai)",
                  "correct": false
                },
                {
                  "text": "உங்கள் பெயர் குமார் (Ungal peyar Kumar)",
                  "correct": false
                }
              ],
              "explanation": "\"En peyar\" means \"My name\"."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and select what you hear:",
              "audioText": "எப்படி இருக்கிறீர்கள்?",
              "options": [
                {
                  "text": "எப்படி இருக்கிறீர்கள்? (Eppadi irukkireergal? - How are you?)",
                  "correct": true
                },
                {
                  "text": "நலமாக இருக்கிறேன் (Nalamaaga irukkiren)",
                  "correct": false
                },
                {
                  "text": "வாருங்கள் (Vaarungal)",
                  "correct": false
                }
              ],
              "explanation": "\"Eppadi irukkireergal?\" is the respectful way to ask someone how they are."
            }
          ]
        },
        {
          "id": "ta-1-3",
          "title": "Daily Courtesy & Essential Numbers",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match numbers in Tamil:",
              "pairs": [
                {
                  "left": "ஒன்று (Ondru)",
                  "right": "1 (One)"
                },
                {
                  "left": "இரண்டு (Irandu)",
                  "right": "2 (Two)"
                },
                {
                  "left": "மூன்று (Moondru)",
                  "right": "3 (Three)"
                },
                {
                  "left": "நான்கு (Naangu)",
                  "right": "4 (Four)"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Please come in\"",
              "audioText": "தயவுசெய்து உள்ளே வாருங்கள்",
              "targetSentence": "தயவுசெய்து உள்ளே வாருங்கள்",
              "targetRoman": "Thayavuseithu ulle vaarungal",
              "wordBank": [
                "தயவுசெய்து",
                "உள்ளே",
                "வாருங்கள்",
                "நன்றி",
                "போங்கள்"
              ],
              "correctSequence": [
                "தயவுசெய்து",
                "உள்ளே",
                "வாருங்கள்"
              ],
              "explanation": "\"Thayavuseithu\" = please, \"ulle\" = inside, \"vaarungal\" = come (respectful)."
            },
            {
              "id": "q3",
              "type": "multiple-choice",
              "prompt": "How do you say \"Goodbye / I will take leave\" in Tamil culture?",
              "audioText": "போய் வருகிறேன்",
              "options": [
                {
                  "text": "போய் வருகிறேன் (Poi varugiren - Literal: I go and return)",
                  "correct": true
                },
                {
                  "text": "போங்கள் (Pongal)",
                  "correct": false
                },
                {
                  "text": "இல்லை (Illai)",
                  "correct": false
                }
              ],
              "explanation": "Tamil culture considers saying just \"goodbye\" inauspicious, so people say \"Poi varugiren\" (I will go and return)!"
            }
          ]
        }
      ]
    },
    {
      "id": "ta-unit-2",
      "title": "Unit 2: Filter Kaapi, Tiffin & Bazaar",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Order hot filter coffee, crispy dosas, and navigate Chennai tiffin centers.",
      "icon": "Coffee",
      "color": "bg-amber-500",
      "lessons": [
        {
          "id": "ta-2-1",
          "title": "Ordering Filter Coffee & Tiffin",
          "difficulty": "medium",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"One filter coffee please\"",
              "audioText": "ஒரு காபி கொடுங்கள்",
              "targetSentence": "ஒரு காபி கொடுங்கள்",
              "targetRoman": "Oru kaapi kodungal",
              "wordBank": [
                "ஒரு",
                "காபி",
                "கொடுங்கள்",
                "தண்ணீர்",
                "தோசை"
              ],
              "correctSequence": [
                "ஒரு",
                "காபி",
                "கொடுங்கள்"
              ],
              "explanation": "Degree Filter Coffee is iconic in South India!"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the caring phrase \"சாப்பிட்டீர்களா?\" (Saapitteergala?) mean?",
              "audioText": "சாப்பிட்டீர்களா?",
              "options": [
                {
                  "text": "Did you eat? (Warm Tamil hospitality greeting)",
                  "correct": true
                },
                {
                  "text": "Where is the shop?",
                  "correct": false
                },
                {
                  "text": "Give me the bill",
                  "correct": false
                }
              ],
              "explanation": "Asking \"Did you eat?\" is the quintessential expression of warmth and caring in Tamil Nadu."
            }
          ]
        },
        {
          "id": "ta-2-2",
          "title": "Flavors, Spices & Crispy Dosas",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Tamil food and flavor words:",
              "pairs": [
                {
                  "left": "இனிப்பு (Inippu)",
                  "right": "Sweet"
                },
                {
                  "left": "காரம் (Kaaram)",
                  "right": "Spicy"
                },
                {
                  "left": "சாம்பார் (Sambar)",
                  "right": "Lentil stew"
                },
                {
                  "left": "சுவை (Suvai)",
                  "right": "Taste / Flavor"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"This dosa is very delicious\"",
              "audioText": "இந்த தோசை மிகவும் சுவையாக இருக்கிறது",
              "targetSentence": "இந்த தோசை மிகவும் சுவையாக இருக்கிறது",
              "targetRoman": "Indha dosai migavum suvaiyaaga irukkiradhu",
              "wordBank": [
                "இந்த",
                "தோசை",
                "மிகவும்",
                "சுவையாக",
                "இருக்கிறது",
                "காபி"
              ],
              "correctSequence": [
                "இந்த",
                "தோசை",
                "மிகவும்",
                "சுவையாக",
                "இருக்கிறது"
              ],
              "explanation": "\"Suvaiyaaga irukkiradhu\" means \"it is delicious\"."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and identify what is being ordered:",
              "audioText": "இரண்டு வடை மற்றும் சட்னி கொடுங்கள்",
              "options": [
                {
                  "text": "Give two vadas and chutney (Irandu vadai mattrum chutney)",
                  "correct": true
                },
                {
                  "text": "Give one coffee with sugar",
                  "correct": false
                },
                {
                  "text": "Give me the bill please",
                  "correct": false
                }
              ],
              "explanation": "\"Irandu vadai mattrum chutney\" = 2 vadas and chutney."
            }
          ]
        },
        {
          "id": "ta-2-3",
          "title": "Bargaining at T. Nagar Bazaar",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How much is this?\" in Tamil",
              "audioText": "இதன் விலை என்ன?",
              "targetSentence": "இதன் விலை என்ன?",
              "targetRoman": "Idhan vilai enna?",
              "wordBank": [
                "இதன்",
                "விலை",
                "என்ன?",
                "கொடுங்கள்",
                "எங்கே"
              ],
              "correctSequence": [
                "இதன்",
                "விலை",
                "என்ன?"
              ],
              "explanation": "\"Vilai\" means price, and \"enna?\" means what."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you ask \"Can you reduce the price a little?\"",
              "audioText": "கொஞ்சம் குறைத்துக் கொடுங்கள்",
              "options": [
                {
                  "text": "கொஞ்சம் குறைத்துக் கொடுங்கள் (Konjam kuraithu kodungal)",
                  "correct": true
                },
                {
                  "text": "அதிகமாக கொடுங்கள் (Adhigamaaga kodungal)",
                  "correct": false
                },
                {
                  "text": "வேண்டாம் (Vaendaam)",
                  "correct": false
                }
              ],
              "explanation": "\"Konjam\" = a little, \"kuraithu kodungal\" = reduce please."
            }
          ]
        }
      ]
    },
    {
      "id": "ta-unit-3",
      "title": "Unit 3: Auto Rickshaws & Chennai Streets",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Negotiate Chennai autos, navigate Marina Beach, and master street directions.",
      "icon": "Compass",
      "color": "bg-blue-500",
      "lessons": [
        {
          "id": "ta-3-1",
          "title": "Auto Rides & Directions",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please go straight and stop here\"",
              "audioText": "நேராக செல்லுங்கள் இங்கே நிறுத்துங்கள்",
              "targetSentence": "நேராக செல்லுங்கள் இங்கே நிறுத்துங்கள்",
              "targetRoman": "Neraaga sellungal inge niruthungal",
              "wordBank": [
                "நேராக",
                "செல்லுங்கள்",
                "இங்கே",
                "நிறுத்துங்கள்",
                "திரும்புங்கள்"
              ],
              "correctSequence": [
                "நேராக",
                "செல்லுங்கள்",
                "இங்கே",
                "நிறுத்துங்கள்"
              ],
              "explanation": "\"Neraaga\" = straight, \"Inge niruthungal\" = stop here."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match street navigation terms:",
              "pairs": [
                {
                  "left": "நேராக (Neraaga)",
                  "right": "Straight"
                },
                {
                  "left": "இடது (Idadhu)",
                  "right": "Left"
                },
                {
                  "left": "வலது (Valadhu)",
                  "right": "Right"
                },
                {
                  "left": "அருகில் (Arugil)",
                  "right": "Nearby"
                }
              ]
            }
          ]
        },
        {
          "id": "ta-3-2",
          "title": "Auto Meter & Metro Travel",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please turn on the meter\"",
              "audioText": "மீட்டர் போடுங்கள்",
              "targetSentence": "மீட்டர் போடுங்கள்",
              "targetRoman": "Meter podungal",
              "wordBank": [
                "மீட்டர்",
                "போடுங்கள்",
                "நில்லுங்கள்",
                "வாருங்கள்"
              ],
              "correctSequence": [
                "மீட்டர்",
                "போடுங்கள்"
              ],
              "explanation": "\"Meter podungal\" is the essential phrase for taking an auto in Chennai."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does \"ரயில் நிலையம் எங்கே இருக்கிறது?\" mean?",
              "audioText": "ரயில் நிலையம் எங்கே இருக்கிறது?",
              "options": [
                {
                  "text": "Where is the railway station?",
                  "correct": true
                },
                {
                  "text": "When does the train leave?",
                  "correct": false
                },
                {
                  "text": "Is this the bus stop?",
                  "correct": false
                }
              ],
              "explanation": "\"Rayil nilayam\" = railway station, \"enge\" = where."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and choose the correct direction:",
              "audioText": "வலது பக்கம் திரும்புங்கள்",
              "options": [
                {
                  "text": "Turn to the right side (Valadhu pakkam thirumbungal)",
                  "correct": true
                },
                {
                  "text": "Turn to the left side",
                  "correct": false
                },
                {
                  "text": "Go straight ahead",
                  "correct": false
                }
              ],
              "explanation": "\"Valadhu pakkam\" = right side, \"thirumbungal\" = turn."
            }
          ]
        },
        {
          "id": "ta-3-3",
          "title": "Marina Beach & Asking for Help",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How much to Marina Beach?\"",
              "audioText": "மெரினா கடற்கரைக்கு எவ்வளவு?",
              "targetSentence": "மெரினா கடற்கரைக்கு எவ்வளவு?",
              "targetRoman": "Marina kadarkarai-kku evvalavu?",
              "wordBank": [
                "மெரினா",
                "கடற்கரைக்கு",
                "எவ்வளவு?",
                "போகலாம்",
                "இங்கே"
              ],
              "correctSequence": [
                "மெரினா",
                "கடற்கரைக்கு",
                "எவ்வளவு?"
              ],
              "explanation": "\"Kadarkarai\" = beach, \"evvalavu?\" = how much?"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"Can you please help me?\" in polite Tamil?",
              "audioText": "எனக்கு கொஞ்சம் உதவி செய்யுங்கள்",
              "options": [
                {
                  "text": "எனக்கு கொஞ்சம் உதவி செய்யுங்கள் (Enakku konjam udhavi seiyungal)",
                  "correct": true
                },
                {
                  "text": "எனக்கு தெரியாது (Enakku theriyaadhu)",
                  "correct": false
                },
                {
                  "text": "வேகமாக போங்கள் (Vegamaaga pongal)",
                  "correct": false
                }
              ],
              "explanation": "\"Udhavi\" means help or assistance."
            }
          ]
        }
      ]
    },
    {
      "id": "ta-unit-4",
      "title": "Unit 4: HARD LEVEL • Sangam Wisdom & Pazhamozhigal",
      "level": "Hard Level",
      "difficulty": "hard",
      "description": "Master ancient Tamil proverbs (பழமொழிகள்), poetic Sangam metaphors, and rapid conversational fluency.",
      "icon": "Award",
      "color": "bg-purple-600",
      "lessons": [
        {
          "id": "ta-4-1",
          "title": "Legendary Tamil Proverbs (பழமொழிகள்)",
          "difficulty": "hard",
          "xp": 50,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "What does the famous Tamil proverb \"அஞ்சு விரலும் ஒண்ணா இருக்காது\" (Anju viralum onnaa irukkaadhu) mean?",
              "audioText": "அஞ்சு விரலும் ஒண்ணா இருக்காது",
              "options": [
                {
                  "text": "All five fingers are not equal (People have diverse talents and natures)",
                  "correct": true
                },
                {
                  "text": "Always wash your hands before eating",
                  "correct": false
                },
                {
                  "text": "Count your blessings on your fingers",
                  "correct": false
                }
              ],
              "explanation": "Literal: \"All five fingers are not identical\" — celebrates human individuality and diversity."
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build the classical proverb: \"கற்றது கைமண் அளவு\" (What you have learned is but a handful of sand)",
              "audioText": "கற்றது கைமண் அளவு",
              "targetSentence": "கற்றது கைமண் அளவு",
              "targetRoman": "Katradhu kaiman alavu",
              "wordBank": [
                "கற்றது",
                "கைமண்",
                "அளவு",
                "கடல்",
                "பெரிது"
              ],
              "correctSequence": [
                "கற்றது",
                "கைமண்",
                "அளவு"
              ],
              "explanation": "Attributed to poetess Avvaiyar: \"What we know is a handful of sand, what we do not know is the size of the world\"."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match iconic Tamil idioms to their meanings:",
              "pairs": [
                {
                  "left": "அகத்தின் அழகு முகத்தில் தெரியும்",
                  "right": "Face is the index of the mind"
                },
                {
                  "left": "யானைக்கும் அடி சறுக்கும்",
                  "right": "Even the mighty can stumble"
                },
                {
                  "left": "பொறுத்தார் பூமி ஆள்வார்",
                  "right": "The patient will rule the world"
                },
                {
                  "left": "சும்மா (Summa)",
                  "right": "Just like that / Casual"
                }
              ]
            }
          ]
        },
        {
          "id": "ta-4-2",
          "title": "Boss Challenge: Advanced Grammar & Fluency",
          "difficulty": "hard",
          "xp": 60,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build the immortal Sangam verse: \"யாதும் ஊரே யாவரும் கேளிர்\"",
              "audioText": "யாதும் ஊரே யாவரும் கேளிர்",
              "targetSentence": "யாதும் ஊரே யாவரும் கேளிர்",
              "targetRoman": "Yaadhum oore yaavarum keelir",
              "wordBank": [
                "யாதும்",
                "ஊரே",
                "யாவரும்",
                "கேளிர்",
                "மக்கள்",
                "நாடு"
              ],
              "correctSequence": [
                "யாதும்",
                "ஊரே",
                "யாவரும்",
                "கேளிர்"
              ],
              "explanation": "Written by Kaniyan Pungundranar 2,500 years ago: \"Every town is our homeland, and every person is our kin\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the popular modern colloquial word \"கெத்து\" (Gethu) mean in Tamil youth slang?",
              "audioText": "கெத்து",
              "options": [
                {
                  "text": "Swag, style, pride, and supreme confidence",
                  "correct": true
                },
                {
                  "text": "A spicy evening snack",
                  "correct": false
                },
                {
                  "text": "A heavy downpour of rain",
                  "correct": false
                }
              ],
              "explanation": "\"Gethu\" is iconic Chennai slang representing unapologetic style and pride!"
            }
          ]
        },
        {
          "id": "ta-4-3",
          "title": "Grand Sangam Fluency Trophy Challenge",
          "difficulty": "hard",
          "xp": 75,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build the proverb: \"கூடி வாழ்ந்தால் கோடி நன்மை\"",
              "audioText": "கூடி வாழ்ந்தால் கோடி நன்மை",
              "targetSentence": "கூடி வாழ்ந்தால் கோடி நன்மை",
              "targetRoman": "Koodi vaazhndhaal kodi nanmai",
              "wordBank": [
                "கூடி",
                "வாழ்ந்தால்",
                "கோடி",
                "நன்மை",
                "ஊர்",
                "மக்கள்"
              ],
              "correctSequence": [
                "கூடி",
                "வாழ்ந்தால்",
                "கோடி",
                "நன்மை"
              ],
              "explanation": "Literal: \"United living brings ten million blessings\" — unity is immense strength!"
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match Chennai street slang:",
              "pairs": [
                {
                  "left": "மாஸ் (Mass)",
                  "right": "Electrifying / Heroic"
                },
                {
                  "left": "மச்சி (Machi)",
                  "right": "Best pal / Bro"
                },
                {
                  "left": "பட்டாசு (Pattasu)",
                  "right": "Firecracker / Exciting"
                },
                {
                  "left": "செம (Sema)",
                  "right": "Awesome / Terrific"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
