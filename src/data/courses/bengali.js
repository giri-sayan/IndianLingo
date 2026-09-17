export const BENGALI_COURSE = {
  "id": "bengali",
  "name": "Bengali",
  "nativeName": "বাংলা",
  "code": "bn-IN",
  "family": "Indo-Aryan (Eastern)",
  "region": "West Bengal & Tripura",
  "speakers": "300M+ (Global)",
  "greeting": "নমস্কার (Nomoshkar)",
  "color": "from-cyan-500 to-blue-600",
  "accentColor": "#0ea5e9",
  "flagEmoji": "🐯",
  "mascotQuote": "আসুন, কঠিন স্তর (Hard Level) পর্যন্ত সুন্দর বাংলা শিখি!",
  "alphabet": [
    {
      "char": "অ",
      "roman": "o",
      "sound": "aw",
      "type": "vowel"
    },
    {
      "char": "আ",
      "roman": "aa",
      "sound": "aah",
      "type": "vowel"
    },
    {
      "char": "ই",
      "roman": "i",
      "sound": "ih",
      "type": "vowel"
    },
    {
      "char": "ঈ",
      "roman": "ee",
      "sound": "ee",
      "type": "vowel"
    },
    {
      "char": "উ",
      "roman": "u",
      "sound": "oo",
      "type": "vowel"
    },
    {
      "char": "ক",
      "roman": "ko",
      "sound": "k",
      "type": "consonant"
    },
    {
      "char": "খ",
      "roman": "kho",
      "sound": "kh",
      "type": "consonant"
    },
    {
      "char": "গ",
      "roman": "go",
      "sound": "g",
      "type": "consonant"
    },
    {
      "char": "ঘ",
      "roman": "gho",
      "sound": "gh",
      "type": "consonant"
    },
    {
      "char": "চ",
      "roman": "cho",
      "sound": "ch",
      "type": "consonant"
    },
    {
      "char": "ছ",
      "roman": "chho",
      "sound": "chh",
      "type": "consonant"
    },
    {
      "char": "জ",
      "roman": "jo",
      "sound": "j",
      "type": "consonant"
    },
    {
      "char": "ত",
      "roman": "to",
      "sound": "dental t",
      "type": "consonant"
    },
    {
      "char": "দ",
      "roman": "do",
      "sound": "dental d",
      "type": "consonant"
    },
    {
      "char": "ন",
      "roman": "no",
      "sound": "n",
      "type": "consonant"
    },
    {
      "char": "প",
      "roman": "po",
      "sound": "p",
      "type": "consonant"
    },
    {
      "char": "ম",
      "roman": "mo",
      "sound": "m",
      "type": "consonant"
    },
    {
      "char": "র",
      "roman": "ro",
      "sound": "r",
      "type": "consonant"
    },
    {
      "char": "ল",
      "roman": "lo",
      "sound": "l",
      "type": "consonant"
    }
  ],
  "units": [
    {
      "id": "bn-unit-1",
      "title": "Unit 1: Nomoshkar & Sweet Beginnings",
      "level": "Beginner",
      "difficulty": "easy",
      "description": "Gentle Bengali greetings, introductions, and everyday politeness.",
      "icon": "Sparkles",
      "color": "bg-emerald-500",
      "lessons": [
        {
          "id": "bn-1-1",
          "title": "Greetings & Well Being",
          "difficulty": "easy",
          "xp": 20,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "How do you say \"Hello\" in Bengali?",
              "audioText": "নমস্কার",
              "options": [
                {
                  "text": "নমস্কার (Nomoshkar)",
                  "correct": true
                },
                {
                  "text": "ধন্যবাদ (Dhonnobaad)",
                  "correct": false
                },
                {
                  "text": "হ্যাঁ (Hyan)",
                  "correct": false
                }
              ],
              "explanation": "\"Nomoshkar\" is the sweet, respectful greeting."
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Thank you very much\" in Bengali",
              "audioText": "অনেক অনেক ধন্যবাদ",
              "targetSentence": "অনেক অনেক ধন্যবাদ",
              "targetRoman": "Onek onek dhonnobaad",
              "wordBank": [
                "অনেক",
                "ধন্যবাদ",
                "নমস্কার",
                "আসুন",
                "অনেক"
              ],
              "correctSequence": [
                "অনেক",
                "অনেক",
                "ধন্যবাদ"
              ],
              "explanation": "\"Onek\" = much / many, \"Dhonnobaad\" = thank you."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match Bengali basics:",
              "pairs": [
                {
                  "left": "হ্যাঁ (Hyan)",
                  "right": "Yes"
                },
                {
                  "left": "না (Na)",
                  "right": "No"
                },
                {
                  "left": "দয়া করে (Doya kore)",
                  "right": "Please"
                },
                {
                  "left": "ঠিক আছে (Thik aache)",
                  "right": "Alright / Okay"
                }
              ]
            }
          ]
        },
        {
          "id": "bn-1-2",
          "title": "Names & Where You Are From",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"What is your name?\" in polite Bengali",
              "audioText": "আপনার নাম কি?",
              "targetSentence": "আপনার নাম কি?",
              "targetRoman": "Aapnar naam ki?",
              "wordBank": [
                "আপনার",
                "নাম",
                "কি?",
                "আমার",
                "কোথায়"
              ],
              "correctSequence": [
                "আপনার",
                "নাম",
                "কি?"
              ],
              "explanation": "\"Aapnar\" = your (polite), \"naam\" = name, \"ki?\" = what."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you reply \"My name is Sourav\"?",
              "audioText": "আমার নাম সৌরভ",
              "options": [
                {
                  "text": "আমার নাম সৌরভ (Aamar naam Sourav)",
                  "correct": true
                },
                {
                  "text": "আপনার নাম সৌরভ (Aapnar naam Sourav)",
                  "correct": false
                },
                {
                  "text": "আমি সৌরভ নই (Aami Sourav noi)",
                  "correct": false
                }
              ],
              "explanation": "\"Aamar naam\" means \"My name\"."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and select what you hear:",
              "audioText": "আপনি কেমন আছেন?",
              "options": [
                {
                  "text": "আপনি কেমন আছেন? (Aapni kemon aachen? - How are you?)",
                  "correct": true
                },
                {
                  "text": "আমি ভালো আছি (Aami bhaalo aachi - I am fine)",
                  "correct": false
                },
                {
                  "text": "কোথায় যাচ্ছেন? (Kothay jaachhen?)",
                  "correct": false
                }
              ],
              "explanation": "\"Aapni kemon aachen?\" is the formal respectful greeting."
            }
          ]
        },
        {
          "id": "bn-1-3",
          "title": "Polite Courtesy & Daily Numbers",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Bengali numbers:",
              "pairs": [
                {
                  "left": "এক (Ek)",
                  "right": "1 (One)"
                },
                {
                  "left": "দুই (Dui)",
                  "right": "2 (Two)"
                },
                {
                  "left": "তিন (Tin)",
                  "right": "3 (Three)"
                },
                {
                  "left": "চার (Chaar)",
                  "right": "4 (Four)"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"I am fine, thank you\"",
              "audioText": "আমি ভালো আছি ধন্যবাদ",
              "targetSentence": "আমি ভালো আছি ধন্যবাদ",
              "targetRoman": "Aami bhaalo aachi dhonnobaad",
              "wordBank": [
                "আমি",
                "ভালো",
                "আছি",
                "ধন্যবাদ",
                "আপনি",
                "হ্যাঁ"
              ],
              "correctSequence": [
                "আমি",
                "ভালো",
                "আছি",
                "ধন্যবাদ"
              ],
              "explanation": "\"Aami bhaalo aachi\" = I am doing fine."
            },
            {
              "id": "q3",
              "type": "multiple-choice",
              "prompt": "How do you say goodbye in Bengali (\"See you again\")?",
              "audioText": "আবার দেখা হবে",
              "options": [
                {
                  "text": "আবার দেখা হবে (Aabaar dekha hobe)",
                  "correct": true
                },
                {
                  "text": "চলে যাও (Chole jaao)",
                  "correct": false
                },
                {
                  "text": "না (Na)",
                  "correct": false
                }
              ],
              "explanation": "\"Aabaar dekha hobe\" literally means \"We will see each other again\"."
            }
          ]
        }
      ]
    },
    {
      "id": "bn-unit-2",
      "title": "Unit 2: Adda, Cha & Kolkata Bazaars",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Order earthen cup tea (Bharer Cha), legendary sweets, and master lively Adda conversations.",
      "icon": "Coffee",
      "color": "bg-amber-500",
      "lessons": [
        {
          "id": "bn-2-1",
          "title": "Ordering Sweets & Earthen Cup Tea",
          "difficulty": "medium",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Give one cup of clay pot tea, please\"",
              "audioText": "এক ভাঁড় চা দিন",
              "targetSentence": "এক ভাঁড় চা দিন",
              "targetRoman": "Ek bnaar chaa din",
              "wordBank": [
                "এক",
                "ভাঁড়",
                "চা",
                "দিন",
                "মিষ্টি",
                "দুই"
              ],
              "correctSequence": [
                "এক",
                "ভাঁড়",
                "চা",
                "দিন"
              ],
              "explanation": "\"Bharer Cha\" is Kolkata’s iconic tea served in earthen clay cups."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"Give two pieces of hot Roshogolla\"?",
              "audioText": "দুটো গরম রসগোল্লা দিন",
              "options": [
                {
                  "text": "দুটো গরম রসগোল্লা দিন (Duto gorom roshogolla din)",
                  "correct": true
                },
                {
                  "text": "চা ঠান্ডা হয়ে গেছে (Chaa thanda hoye geche)",
                  "correct": false
                },
                {
                  "text": "বিল কত হয়েছে? (Bill koto hoyeche?)",
                  "correct": false
                }
              ],
              "explanation": "Roshogolla is Bengal's iconic syrup-filled cottage cheese delicacy!"
            }
          ]
        },
        {
          "id": "bn-2-2",
          "title": "Flavors, Roshogolla & Fish Bazaars",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Bengali taste terms:",
              "pairs": [
                {
                  "left": "মিষ্টি (Mishti)",
                  "right": "Sweet"
                },
                {
                  "left": "ঝাল (Jhaal)",
                  "right": "Spicy"
                },
                {
                  "left": "টক (Tok)",
                  "right": "Sour"
                },
                {
                  "left": "সুস্বাদু (Shushwadu)",
                  "right": "Delicious"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"This sweet is extraordinarily tasty\"",
              "audioText": "এই মিষ্টি দারুন সুস্বাদু",
              "targetSentence": "এই মিষ্টি দারুন সুস্বাদু",
              "targetRoman": "Ei mishti darun shushwadu",
              "wordBank": [
                "এই",
                "মিষ্টি",
                "দারুন",
                "সুস্বাদু",
                "চা"
              ],
              "correctSequence": [
                "এই",
                "মিষ্টি",
                "দারুন",
                "সুস্বাদু"
              ],
              "explanation": "\"Darun shushwadu\" = wonderfully delicious!"
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and identify the fish being discussed:",
              "audioText": "তাজা ইলিশ মাছ আছে কি?",
              "options": [
                {
                  "text": "Do you have fresh Hilsa (Ilish) fish? (Taaja Ilish maach aache ki?)",
                  "correct": true
                },
                {
                  "text": "Give sweet doi",
                  "correct": false
                },
                {
                  "text": "Where is the tea stall?",
                  "correct": false
                }
              ],
              "explanation": "Ilish (Hilsa) is celebrated as the queen of fish in Bengal!"
            }
          ]
        },
        {
          "id": "bn-2-3",
          "title": "Bargaining at New Market Kolkata",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How much does this cost?\" in Bengali",
              "audioText": "এটার দাম কত?",
              "targetSentence": "এটার দাম কত?",
              "targetRoman": "Etaar daam koto?",
              "wordBank": [
                "এটার",
                "দাম",
                "কত?",
                "দিন",
                "অনেক"
              ],
              "correctSequence": [
                "এটার",
                "দাম",
                "কত?"
              ],
              "explanation": "\"Daam\" = price, \"koto?\" = how much?"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"Please reduce the price a little bit\"?",
              "audioText": "একটু কম করুন দাদা",
              "options": [
                {
                  "text": "একটু কম করুন দাদা (Ektu kom korun dada)",
                  "correct": true
                },
                {
                  "text": "বেশি দিন (Beshi din)",
                  "correct": false
                },
                {
                  "text": "আমার চাই না (Aamar chaai na)",
                  "correct": false
                }
              ],
              "explanation": "Addressing the shopkeeper warmly as \"Dada\" (elder brother) helps in friendly bargaining!"
            }
          ]
        }
      ]
    },
    {
      "id": "bn-unit-3",
      "title": "Unit 3: Trams, Yellow Taxis & Directions",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Navigate iconic yellow Ambassador cabs, vintage Kolkata trams, and street routes.",
      "icon": "Compass",
      "color": "bg-blue-500",
      "lessons": [
        {
          "id": "bn-3-1",
          "title": "Taxis & Street Directions",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Go straight and turn left\"",
              "audioText": "সোজা যান এবং বাঁদিকে ঘুরুন",
              "targetSentence": "সোজা যান এবং বাঁদিকে ঘুরুন",
              "targetRoman": "Shoja jaan ebong baan dike ghurun",
              "wordBank": [
                "সোজা",
                "যান",
                "এবং",
                "বাঁদিকে",
                "ঘুরুন",
                "ডানদিকে"
              ],
              "correctSequence": [
                "সোজা",
                "যান",
                "এবং",
                "বাঁদিকে",
                "ঘুরুন"
              ],
              "explanation": "\"Shoja\" = straight, \"Baan dike\" = to the left."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match street navigation terms:",
              "pairs": [
                {
                  "left": "সোজা (Shoja)",
                  "right": "Straight"
                },
                {
                  "left": "বাঁদিক (Baan dik)",
                  "right": "Left side"
                },
                {
                  "left": "ডানদিক (Daan dik)",
                  "right": "Right side"
                },
                {
                  "left": "কাছে (Kaache)",
                  "right": "Nearby"
                }
              ]
            }
          ]
        },
        {
          "id": "bn-3-2",
          "title": "Kolkata Trams, Metros & Directions",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please stop right here\"",
              "audioText": "এখানে একটু থামুন",
              "targetSentence": "এখানে একটু থামুন",
              "targetRoman": "Ekhane ektu thaamun",
              "wordBank": [
                "এখানে",
                "একটু",
                "থামুন",
                "যান",
                "সোজা"
              ],
              "correctSequence": [
                "এখানে",
                "একটু",
                "থামুন"
              ],
              "explanation": "\"Ekhane\" = here, \"thaamun\" = please stop."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does \"হাওড়া স্টেশন কোন দিকে?\" mean?",
              "audioText": "হাওড়া স্টেশন কোন দিকে?",
              "options": [
                {
                  "text": "Which way is Howrah Station?",
                  "correct": true
                },
                {
                  "text": "When does the train arrive?",
                  "correct": false
                },
                {
                  "text": "Where can I buy a ticket?",
                  "correct": false
                }
              ],
              "explanation": "\"Kon dike?\" = in which direction?"
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and identify the turn direction:",
              "audioText": "ডানদিকে যান",
              "options": [
                {
                  "text": "Go to the right side (Daan dike jaan)",
                  "correct": true
                },
                {
                  "text": "Go to the left side",
                  "correct": false
                },
                {
                  "text": "Stop here",
                  "correct": false
                }
              ],
              "explanation": "\"Daan dike\" means to the right side."
            }
          ]
        },
        {
          "id": "bn-3-3",
          "title": "Howrah Bridge & Asking for Help",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"How long will it take to reach?\"",
              "audioText": "পৌঁছাতে কত সময় লাগবে?",
              "targetSentence": "পৌঁছাতে কত সময় লাগবে?",
              "targetRoman": "Pounchhaate koto shomoy laagbe?",
              "wordBank": [
                "পৌঁছাতে",
                "কত",
                "সময়",
                "লাগবে?",
                "এখানে",
                "দাম"
              ],
              "correctSequence": [
                "পৌঁছাতে",
                "কত",
                "সময়",
                "লাগবে?"
              ],
              "explanation": "\"Shomoy laagbe?\" = will it take time?"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"Can you please help me?\" in Bengali?",
              "audioText": "দয়া করে আমাকে একটু সাহায্য করবেন?",
              "options": [
                {
                  "text": "দয়া করে আমাকে একটু সাহায্য করবেন? (Doya kore aamake ektu saahajjo korben?)",
                  "correct": true
                },
                {
                  "text": "আমি চিনি না (Aami chini na)",
                  "correct": false
                },
                {
                  "text": "তাড়াতাড়ি যান (Taadataadi jaan)",
                  "correct": false
                }
              ],
              "explanation": "\"Saahajjo korben?\" means will you kindly help?"
            }
          ]
        }
      ]
    },
    {
      "id": "bn-unit-4",
      "title": "Unit 4: HARD LEVEL • Probaad & Bengali Fluency",
      "level": "Hard Level",
      "difficulty": "hard",
      "description": "Master iconic Bengali proverbs (প্রবাদ), Tagore's literary elegance, and passionate Adda wit.",
      "icon": "Award",
      "color": "bg-purple-600",
      "lessons": [
        {
          "id": "bn-4-1",
          "title": "Iconic Bengali Proverbs (প্রবাদ)",
          "difficulty": "hard",
          "xp": 50,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "What does the famous Bengali proverb \"গাছে কাঁঠাল গোঁফে তেল\" (Gaache knaathaal gnomfe tel) mean?",
              "audioText": "গাছে কাঁঠাল গোঁফে তেল",
              "options": [
                {
                  "text": "Counting your chickens before they hatch / Celebrating before obtaining the prize",
                  "correct": true
                },
                {
                  "text": "Jackfruit leaves make great oil",
                  "correct": false
                },
                {
                  "text": "A farmer who grooms his mustache",
                  "correct": false
                }
              ],
              "explanation": "Literal: \"Oiling one's mustache while the jackfruit is still hanging high on the tree\"!"
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build the proverb: \"নাই মামার চেয়ে কানা মামা ভালো\"",
              "audioText": "নাই মামার চেয়ে কানা মামা ভালো",
              "targetSentence": "নাই মামার চেয়ে কানা মামা ভালো",
              "targetRoman": "Nai maamar cheye kaana maama bhaalo",
              "wordBank": [
                "নাই",
                "মামার",
                "চেয়ে",
                "কানা",
                "মামা",
                "ভালো",
                "মানুষ"
              ],
              "correctSequence": [
                "নাই",
                "মামার",
                "চেয়ে",
                "কানা",
                "মামা",
                "ভালো"
              ],
              "explanation": "Meaning: \"Something is better than nothing\" (A blind uncle is better than having no uncle at all)."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match Bengali idioms and colloquial gems:",
              "pairs": [
                {
                  "left": "ফাটাফাটি (Fatafati)",
                  "right": "Mindblowing / Spectacular"
                },
                {
                  "left": "আড্ডা (Adda)",
                  "right": "Endless soulful conversation"
                },
                {
                  "left": "ধুর ছাই (Dhur chai)",
                  "right": "Oh rubbish! / Annoyance"
                },
                {
                  "left": "জলে কুমির ডাঙায় বাঘ",
                  "right": "Between the devil and deep sea"
                }
              ]
            }
          ]
        },
        {
          "id": "bn-4-2",
          "title": "Boss Challenge: Literary Mastery",
          "difficulty": "hard",
          "xp": 60,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build Rabindranath Tagore's universal line: \"চিত্ত যেথা ভয়শূন্য উচ্চ যেথা শির\"",
              "audioText": "চিত্ত যেথা ভয়শূন্য উচ্চ যেথা শির",
              "targetSentence": "চিত্ত যেথা ভয়শূন্য উচ্চ যেথা শির",
              "targetRoman": "Chitto jetha bhoyshunno uccho jetha shir",
              "wordBank": [
                "চিত্ত",
                "যেথা",
                "ভয়শূন্য",
                "উচ্চ",
                "যেথা",
                "শির",
                "দেশ"
              ],
              "correctSequence": [
                "চিত্ত",
                "যেথা",
                "ভয়শূন্য",
                "উচ্চ",
                "যেথা",
                "শির"
              ],
              "explanation": "From Gitanjali: \"Where the mind is without fear and the head is held high\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the Bengali word \"আড্ডা\" (Adda) represent in Kolkata culture?",
              "audioText": "বাঙালির আড্ডা",
              "options": [
                {
                  "text": "An intellectual, informal gathering discussing art, politics, literature and life",
                  "correct": true
                },
                {
                  "text": "A spicy evening snack",
                  "correct": false
                },
                {
                  "text": "A formal legal court",
                  "correct": false
                }
              ],
              "explanation": "Adda is officially recognized as an intangible cultural heritage of Kolkata intellectual life."
            }
          ]
        },
        {
          "id": "bn-4-3",
          "title": "Grand Bengali Fluency Trophy Challenge",
          "difficulty": "hard",
          "xp": 75,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"কষ্ট না করলে কেষ্ট মেলে না\"",
              "audioText": "কষ্ট না করলে কেষ্ট মেলে না",
              "targetSentence": "কষ্ট না করলে কেষ্ট মেলে না",
              "targetRoman": "Koshto na korle Keshto mele na",
              "wordBank": [
                "কষ্ট",
                "না",
                "করলে",
                "কেষ্ট",
                "মেলে",
                "না",
                "মানুষ"
              ],
              "correctSequence": [
                "কষ্ট",
                "না",
                "করলে",
                "কেষ্ট",
                "মেলে",
                "না"
              ],
              "explanation": "Bengali wisdom: \"Without hard effort (koshto), one cannot attain Lord Krishna (keshto)\" — No pain, no gain!"
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match modern Bengali street slang:",
              "pairs": [
                {
                  "left": "চরম (Chorom)",
                  "right": "Extreme / Superb"
                },
                {
                  "left": "ব্যাপক (Byapok)",
                  "right": "Massive / Epic"
                },
                {
                  "left": "ঝক্কি (Jhokki)",
                  "right": "Unnecessary hassle"
                },
                {
                  "left": "মস্ত (Mosto)",
                  "right": "Huge / Grand"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
