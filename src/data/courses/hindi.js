export const HINDI_COURSE = {
  "id": "hindi",
  "name": "Hindi",
  "nativeName": "हिन्दी",
  "code": "hi-IN",
  "family": "Indo-Aryan",
  "region": "North & Central India",
  "speakers": "600M+",
  "greeting": "नमस्ते (Namaste)",
  "color": "from-amber-500 to-orange-600",
  "accentColor": "#f97316",
  "flagEmoji": "🇮🇳",
  "mascotQuote": "चल भाई, आज कठिन स्तर (Hard Level) तक हिन्दी सीखते हैं!",
  "alphabet": [
    {
      "char": "अ",
      "roman": "a",
      "sound": "uh (as in cup)",
      "type": "vowel"
    },
    {
      "char": "आ",
      "roman": "aa",
      "sound": "aah (as in father)",
      "type": "vowel"
    },
    {
      "char": "इ",
      "roman": "i",
      "sound": "ih (as in sit)",
      "type": "vowel"
    },
    {
      "char": "ई",
      "roman": "ee",
      "sound": "ee (as in feel)",
      "type": "vowel"
    },
    {
      "char": "उ",
      "roman": "u",
      "sound": "u (as in put)",
      "type": "vowel"
    },
    {
      "char": "ऊ",
      "roman": "oo",
      "sound": "oo (as in boot)",
      "type": "vowel"
    },
    {
      "char": "क",
      "roman": "ka",
      "sound": "k (as in kite)",
      "type": "consonant"
    },
    {
      "char": "ख",
      "roman": "kha",
      "sound": "kh (aspirated k)",
      "type": "consonant"
    },
    {
      "char": "ग",
      "roman": "ga",
      "sound": "g (as in goat)",
      "type": "consonant"
    },
    {
      "char": "घ",
      "roman": "gha",
      "sound": "gh (deep aspirated g)",
      "type": "consonant"
    },
    {
      "char": "च",
      "roman": "cha",
      "sound": "ch (as in chair)",
      "type": "consonant"
    },
    {
      "char": "ज",
      "roman": "ja",
      "sound": "j (as in jam)",
      "type": "consonant"
    },
    {
      "char": "त",
      "roman": "ta",
      "sound": "soft t (dental)",
      "type": "consonant"
    },
    {
      "char": "प",
      "roman": "pa",
      "sound": "p (as in pen)",
      "type": "consonant"
    },
    {
      "char": "म",
      "roman": "ma",
      "sound": "m (as in mango)",
      "type": "consonant"
    },
    {
      "char": "य",
      "roman": "ya",
      "sound": "y (as in yes)",
      "type": "consonant"
    },
    {
      "char": "र",
      "roman": "ra",
      "sound": "r (light roll)",
      "type": "consonant"
    },
    {
      "char": "ल",
      "roman": "la",
      "sound": "l (as in light)",
      "type": "consonant"
    }
  ],
  "units": [
    {
      "id": "hi-unit-1",
      "title": "Unit 1: Namaste & First Words",
      "level": "Beginner",
      "difficulty": "easy",
      "description": "Master polite greetings, introducing yourself, and essentials.",
      "icon": "Sparkles",
      "color": "bg-emerald-500",
      "lessons": [
        {
          "id": "hi-1-1",
          "title": "Namaste & Polite Basics",
          "difficulty": "easy",
          "xp": 20,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "How do you say \"Hello\" or \"Greetings\" in Hindi?",
              "audioText": "नमस्ते",
              "options": [
                {
                  "text": "नमस्ते (Namaste)",
                  "correct": true
                },
                {
                  "text": "धन्यवाद (Dhanyavaad)",
                  "correct": false
                },
                {
                  "text": "अलविदा (Alvida)",
                  "correct": false
                },
                {
                  "text": "हाँ (Haan)",
                  "correct": false
                }
              ],
              "explanation": "\"Namaste\" is the universal respectful greeting across India."
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build the sentence: \"Thank you very much\"",
              "audioText": "बहुत बहुत धन्यवाद",
              "targetSentence": "बहुत बहुत धन्यवाद",
              "targetRoman": "Bahut bahut dhanyavaad",
              "wordBank": [
                "बहुत",
                "धन्यवाद",
                "नमस्ते",
                "अलविदा",
                "हाँ",
                "बहुत"
              ],
              "correctSequence": [
                "बहुत",
                "बहुत",
                "धन्यवाद"
              ],
              "explanation": "\"Bahut\" means \"very/much\" and \"Dhanyavaad\" means \"thank you\"."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match the Hindi words to their English meanings:",
              "pairs": [
                {
                  "left": "हाँ (Haan)",
                  "right": "Yes"
                },
                {
                  "left": "नहीं (Nahin)",
                  "right": "No"
                },
                {
                  "left": "कृपया (Kripya)",
                  "right": "Please"
                },
                {
                  "left": "अलविदा (Alvida)",
                  "right": "Goodbye"
                }
              ]
            },
            {
              "id": "q4",
              "type": "listening",
              "prompt": "Listen to the audio and select what you hear:",
              "audioText": "आप कैसे हैं?",
              "options": [
                {
                  "text": "आप कैसे हैं? (Aap kaise hain? - How are you?)",
                  "correct": true
                },
                {
                  "text": "मैं ठीक हूँ (Main theek hoon - I am fine)",
                  "correct": false
                },
                {
                  "text": "आपका नाम क्या है? (Aapka naam kya hai?)",
                  "correct": false
                }
              ],
              "explanation": "\"Aap kaise hain?\" is the polite formal way to ask \"How are you?\""
            }
          ]
        },
        {
          "id": "hi-1-2",
          "title": "Names & Introductions",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Translate to Hindi: \"My name is Amit\"",
              "audioText": "मेरा नाम अमित है",
              "targetSentence": "मेरा नाम अमित है",
              "targetRoman": "Mera naam Amit hai",
              "wordBank": [
                "मेरा",
                "नाम",
                "अमित",
                "है",
                "आपका",
                "क्या"
              ],
              "correctSequence": [
                "मेरा",
                "नाम",
                "अमित",
                "है"
              ],
              "explanation": "Word order: Mera (My) + Naam (Name) + Amit + Hai (is)."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does \"आप कहाँ से हैं?\" mean?",
              "audioText": "आप कहाँ से हैं?",
              "options": [
                {
                  "text": "Where are you from?",
                  "correct": true
                },
                {
                  "text": "What is your name?",
                  "correct": false
                },
                {
                  "text": "Where are you going?",
                  "correct": false
                }
              ],
              "explanation": "\"Kahan\" = where, \"se\" = from."
            },
            {
              "id": "q3",
              "type": "sentence-builder",
              "prompt": "Build: \"I am fine, thank you\"",
              "audioText": "मैं ठीक हूँ धन्यवाद",
              "targetSentence": "मैं ठीक हूँ धन्यवाद",
              "targetRoman": "Main theek hoon dhanyavaad",
              "wordBank": [
                "मैं",
                "ठीक",
                "हूँ",
                "धन्यवाद",
                "नमस्ते",
                "आप"
              ],
              "correctSequence": [
                "मैं",
                "ठीक",
                "हूँ",
                "धन्यवाद"
              ],
              "explanation": "\"Main theek hoon\" means \"I am fine\"."
            }
          ]
        },
        {
          "id": "hi-1-3",
          "title": "Daily Courtesy & Essential Numbers",
          "difficulty": "easy",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match numbers in Hindi:",
              "pairs": [
                {
                  "left": "एक (Ek)",
                  "right": "1 (One)"
                },
                {
                  "left": "दो (Do)",
                  "right": "2 (Two)"
                },
                {
                  "left": "तीन (Teen)",
                  "right": "3 (Three)"
                },
                {
                  "left": "चार (Chaar)",
                  "right": "4 (Four)"
                }
              ]
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you politely say \"Excuse me / Forgive me\" in Hindi?",
              "audioText": "माफ़ कीजिए",
              "options": [
                {
                  "text": "माफ़ कीजिए (Maaf kijiye)",
                  "correct": true
                },
                {
                  "text": "नमस्ते (Namaste)",
                  "correct": false
                },
                {
                  "text": "शुक्रिया (Shukriya)",
                  "correct": false
                }
              ],
              "explanation": "\"Maaf kijiye\" is the polite Hindi expression for \"Excuse me\" or \"I am sorry\"."
            },
            {
              "id": "q3",
              "type": "sentence-builder",
              "prompt": "Build: \"See you again tomorrow\"",
              "audioText": "कल फिर मिलेंगे",
              "targetSentence": "कल फिर मिलेंगे",
              "targetRoman": "Kal phir milenge",
              "wordBank": [
                "कल",
                "फिर",
                "मिलेंगे",
                "आज",
                "अलविदा",
                "नमस्ते"
              ],
              "correctSequence": [
                "कल",
                "फिर",
                "मिलेंगे"
              ],
              "explanation": "\"Kal\" = tomorrow, \"phir\" = again, \"milenge\" = we will meet."
            }
          ]
        }
      ]
    },
    {
      "id": "hi-unit-2",
      "title": "Unit 2: Chai, Street Food & Bazaar",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Order piping hot cutting chai, samosas, and bargain at the market.",
      "icon": "Coffee",
      "color": "bg-amber-500",
      "lessons": [
        {
          "id": "hi-2-1",
          "title": "Ordering Cutting Chai & Snacks",
          "difficulty": "medium",
          "xp": 25,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Give one cup of tea, please\"",
              "audioText": "एक कप चाय दीजिए",
              "targetSentence": "एक कप चाय दीजिए",
              "targetRoman": "Ek cup chai deejiye",
              "wordBank": [
                "एक",
                "कप",
                "चाय",
                "दीजिए",
                "दो",
                "समोसा"
              ],
              "correctSequence": [
                "एक",
                "कप",
                "चाय",
                "दीजिए"
              ],
              "explanation": "\"Deejiye\" is polite imperative for \"give\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you ask \"How much does this cost?\"",
              "audioText": "यह कितने का है?",
              "options": [
                {
                  "text": "यह कितने का है? (Yeh kitne ka hai?)",
                  "correct": true
                },
                {
                  "text": "यह क्या है? (Yeh kya hai?)",
                  "correct": false
                },
                {
                  "text": "मुझे नहीं पता (Mujhe nahin pata)",
                  "correct": false
                }
              ],
              "explanation": "Essential bargaining phrase!"
            }
          ]
        },
        {
          "id": "hi-2-2",
          "title": "Bargaining at the Market",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Reduce the price a bit please\"",
              "audioText": "थोड़ा कम कीजिए",
              "targetSentence": "थोड़ा कम कीजिए",
              "targetRoman": "Thoda kam kijiye",
              "wordBank": [
                "थोड़ा",
                "कम",
                "कीजिए",
                "ज़्यादा",
                "दुकान"
              ],
              "correctSequence": [
                "थोड़ा",
                "कम",
                "कीजिए"
              ],
              "explanation": "The classic Indian bazaar negotiation line!"
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "How do you say \"This is too expensive!\" in Hindi?",
              "audioText": "यह बहुत महँगा है!",
              "options": [
                {
                  "text": "यह बहुत महँगा है! (Yeh bahut mehenga hai!)",
                  "correct": true
                },
                {
                  "text": "यह बहुत सस्ता है! (Yeh bahut sasta hai!)",
                  "correct": false
                },
                {
                  "text": "मुझे दो दे दो (Mujhe do de do)",
                  "correct": false
                }
              ],
              "explanation": "\"Mehenga\" = expensive, \"Sasta\" = cheap."
            }
          ]
        },
        {
          "id": "hi-2-3",
          "title": "Flavors & Street Food Favorites",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match Hindi tastes and flavors:",
              "pairs": [
                {
                  "left": "मीठा (Meetha)",
                  "right": "Sweet"
                },
                {
                  "left": "तीखा (Teekha)",
                  "right": "Spicy / Hot"
                },
                {
                  "left": "खट्टा (Khatta)",
                  "right": "Sour"
                },
                {
                  "left": "स्वादिष्ट (Swadisht)",
                  "right": "Delicious"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"This samosa is very tasty\"",
              "audioText": "यह समोसा बहुत स्वादिष्ट है",
              "targetSentence": "यह समोसा बहुत स्वादिष्ट है",
              "targetRoman": "Yeh samosa bahut swadisht hai",
              "wordBank": [
                "यह",
                "समोसा",
                "बहुत",
                "स्वादिष्ट",
                "है",
                "पानी"
              ],
              "correctSequence": [
                "यह",
                "समोसा",
                "बहुत",
                "स्वादिष्ट",
                "है"
              ],
              "explanation": "\"Swadisht\" means tasty or delicious."
            },
            {
              "id": "q3",
              "type": "listening",
              "prompt": "Listen and select what the tea vendor is asking:",
              "audioText": "चीनी कितनी चाहिए?",
              "options": [
                {
                  "text": "How much sugar do you want? (Cheeni kitni chahiye?)",
                  "correct": true
                },
                {
                  "text": "Do you want biscuits? (Biscuit chahiye?)",
                  "correct": false
                },
                {
                  "text": "Where are you going? (Kahan ja rahe ho?)",
                  "correct": false
                }
              ],
              "explanation": "\"Cheeni\" = sugar, \"kitni\" = how much, \"chahiye\" = wanted/needed."
            }
          ]
        }
      ]
    },
    {
      "id": "hi-unit-3",
      "title": "Unit 3: Auto Rickshaws & Directions",
      "level": "Intermediate",
      "difficulty": "medium",
      "description": "Navigate auto-rickshaws, metro routes, and asking street directions.",
      "icon": "Compass",
      "color": "bg-blue-500",
      "lessons": [
        {
          "id": "hi-3-1",
          "title": "Taking an Auto Rickshaw",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Please stop right here\"",
              "audioText": "यहाँ रोक दीजिए",
              "targetSentence": "यहाँ रोक दीजिए",
              "targetRoman": "Yahan rok deejiye",
              "wordBank": [
                "यहाँ",
                "रोक",
                "दीजिए",
                "वहाँ",
                "चलो",
                "सीधे"
              ],
              "correctSequence": [
                "यहाँ",
                "रोक",
                "दीजिए"
              ],
              "explanation": "\"Yahan\" = here, \"Rok deejiye\" = please stop."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match street directions:",
              "pairs": [
                {
                  "left": "सीधे (Seedhe)",
                  "right": "Straight"
                },
                {
                  "left": "बाएँ (Baayein)",
                  "right": "Left"
                },
                {
                  "left": "दाएँ (Daayein)",
                  "right": "Right"
                },
                {
                  "left": "नज़दीक (Nazdeek)",
                  "right": "Near"
                }
              ]
            }
          ]
        },
        {
          "id": "hi-3-2",
          "title": "Navigating Delhi Metro & Transit",
          "difficulty": "medium",
          "xp": 30,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "How do you say \"Please turn on the meter\" to an auto driver?",
              "audioText": "मीटर चालू कीजिए",
              "options": [
                {
                  "text": "मीटर चालू कीजिए (Meter chaaloo kijiye)",
                  "correct": true
                },
                {
                  "text": "गाड़ी रोकिए (Gaadi rokiye)",
                  "correct": false
                },
                {
                  "text": "पैसे दीजिए (Paise deejiye)",
                  "correct": false
                }
              ],
              "explanation": "Crucial phrase when taking an auto rickshaw anywhere in North India!"
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Go straight and turn left\"",
              "audioText": "सीधे जाइए और बाएँ मुड़िए",
              "targetSentence": "सीधे जाइए और बाएँ मुड़िए",
              "targetRoman": "Seedhe jaaiye aur baayein mudiye",
              "wordBank": [
                "सीधे",
                "जाइए",
                "और",
                "बाएँ",
                "मुड़िए",
                "दाएँ"
              ],
              "correctSequence": [
                "सीधे",
                "जाइए",
                "और",
                "बाएँ",
                "मुड़िए"
              ],
              "explanation": "\"Seedhe\" = straight, \"aur\" = and, \"baayein mudiye\" = turn left."
            },
            {
              "id": "q3",
              "type": "multiple-choice",
              "prompt": "What does \"कनॉट प्लेस के लिए कौन सा प्लेटफार्म है?\" mean?",
              "audioText": "कनॉट प्लेस के लिए कौन सा प्लेटफार्म है?",
              "options": [
                {
                  "text": "Which platform is for Connaught Place?",
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
              "explanation": "\"Kaun sa platform\" = which platform, \"ke liye\" = for."
            }
          ]
        },
        {
          "id": "hi-3-3",
          "title": "Finding Places & Asking for Help",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"Where is the railway station?\"",
              "audioText": "रेलवे स्टेशन कहाँ है?",
              "targetSentence": "रेलवे स्टेशन कहाँ है?",
              "targetRoman": "Railway station kahan hai?",
              "wordBank": [
                "रेलवे",
                "स्टेशन",
                "कहाँ",
                "है",
                "यहाँ",
                "क्या"
              ],
              "correctSequence": [
                "रेलवे",
                "स्टेशन",
                "कहाँ",
                "है"
              ],
              "explanation": "\"Kahan hai\" means \"Where is\"."
            },
            {
              "id": "q2",
              "type": "listening",
              "prompt": "Listen and identify the distance:",
              "audioText": "यहाँ से केवल पाँच मिनट दूर है",
              "options": [
                {
                  "text": "It is only 5 minutes away from here (Yahan se keval 5 minute door hai)",
                  "correct": true
                },
                {
                  "text": "It is closed right now",
                  "correct": false
                },
                {
                  "text": "Take a ticket first",
                  "correct": false
                }
              ],
              "explanation": "\"Keval paanch minute door\" = only five minutes away."
            }
          ]
        }
      ]
    },
    {
      "id": "hi-unit-4",
      "title": "Unit 4: Desi Slang & Soulful Expressions",
      "level": "Upper-Intermediate",
      "difficulty": "medium",
      "description": "Master iconic Indian colloquialisms: Jugaad, Arre Yaar, and Shabash!",
      "icon": "Flame",
      "color": "bg-purple-500",
      "lessons": [
        {
          "id": "hi-4-1",
          "title": "Iconic Expressions & Slang",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "What does \"जुगाड़\" (Jugaad) mean?",
              "audioText": "जुगाड़",
              "options": [
                {
                  "text": "A clever, frugal hack / creative innovative solution",
                  "correct": true
                },
                {
                  "text": "A traditional dance",
                  "correct": false
                },
                {
                  "text": "A spicy snack",
                  "correct": false
                }
              ],
              "explanation": "Jugaad is India’s beloved philosophy of finding ingenious workarounds."
            },
            {
              "id": "q2",
              "type": "match-pairs",
              "prompt": "Match colloquial expressions:",
              "pairs": [
                {
                  "left": "अरे यार! (Arre yaar!)",
                  "right": "Oh man! / Dude!"
                },
                {
                  "left": "बिंदास (Bindaas)",
                  "right": "Carefree / Cool"
                },
                {
                  "left": "मस्त (Mast)",
                  "right": "Awesome"
                },
                {
                  "left": "शाबाश (Shabaash)",
                  "right": "Well done!"
                }
              ]
            }
          ]
        },
        {
          "id": "hi-4-2",
          "title": "Bollywood Catchphrases & Banter",
          "difficulty": "medium",
          "xp": 35,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build: \"No problem at all! (Don't worry)\"",
              "audioText": "कोई बात नहीं चिंता मत करो",
              "targetSentence": "कोई बात नहीं चिंता मत करो",
              "targetRoman": "Koi baat nahin chinta mat karo",
              "wordBank": [
                "कोई",
                "बात",
                "नहीं",
                "चिंता",
                "मत",
                "करो",
                "हाँ"
              ],
              "correctSequence": [
                "कोई",
                "बात",
                "नहीं",
                "चिंता",
                "मत",
                "करो"
              ],
              "explanation": "\"Koi baat nahin\" is the soothing Indian phrase for \"No worries at all\"."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the exclamation \"क्या बात है!\" (Kya baat hai!) convey?",
              "audioText": "क्या बात है!",
              "options": [
                {
                  "text": "How marvelous! / Incredible praise & delight!",
                  "correct": true
                },
                {
                  "text": "What is the problem?",
                  "correct": false
                },
                {
                  "text": "Go away immediately",
                  "correct": false
                }
              ],
              "explanation": "\"Kya baat hai!\" is used to praise supreme talent, art, music, or delicious food!"
            }
          ]
        },
        {
          "id": "hi-4-3",
          "title": "Tapri Chai Banter & Daily Adda",
          "difficulty": "medium",
          "xp": 40,
          "questions": [
            {
              "id": "q1",
              "type": "match-pairs",
              "prompt": "Match daily street expressions:",
              "pairs": [
                {
                  "left": "चल भाई (Chal bhai)",
                  "right": "Come on bro / Let’s go"
                },
                {
                  "left": "एक नंबर (Ek number)",
                  "right": "Top class / Perfection"
                },
                {
                  "left": "टाइम पास (Time pass)",
                  "right": "Leisurely passing time"
                },
                {
                  "left": "झकास (Jhakaas)",
                  "right": "Super fantastic!"
                }
              ]
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build: \"Let’s go drink tea together\"",
              "audioText": "चलो साथ में चाय पीते हैं",
              "targetSentence": "चलो साथ में चाय पीते हैं",
              "targetRoman": "Chalo saath mein chai peete hain",
              "wordBank": [
                "चलो",
                "साथ",
                "में",
                "चाय",
                "पीते",
                "हैं",
                "कॉफी"
              ],
              "correctSequence": [
                "चलो",
                "साथ",
                "में",
                "चाय",
                "पीते",
                "हैं"
              ],
              "explanation": "\"Saath mein\" = together, \"chai peete hain\" = let's drink tea."
            }
          ]
        }
      ]
    },
    {
      "id": "hi-unit-5",
      "title": "Unit 5: HARD LEVEL • Boss Challenge & Muhavare",
      "level": "Hard Level",
      "difficulty": "hard",
      "description": "Master complex proverbs (मुहावरे), advanced compound verbs, and rapid native debates.",
      "icon": "Award",
      "color": "bg-rose-600",
      "lessons": [
        {
          "id": "hi-5-1",
          "title": "Legendary Hindi Proverbs (मुहावरे)",
          "difficulty": "hard",
          "xp": 50,
          "questions": [
            {
              "id": "q1",
              "type": "multiple-choice",
              "prompt": "What does the famous idiom \"ऊँट के मुँह में जीरा\" (Oont ke munh mein jeera) mean?",
              "audioText": "ऊँट के मुँह में जीरा",
              "options": [
                {
                  "text": "A drop in the ocean / Too meager for a huge appetite",
                  "correct": true
                },
                {
                  "text": "Feeding a camel with respect",
                  "correct": false
                },
                {
                  "text": "Making a big feast for guests",
                  "correct": false
                },
                {
                  "text": "Cooking a spicy dish",
                  "correct": false
                }
              ],
              "explanation": "Literal: \"A cumin seed in a camel’s mouth\" — represents an utterly insufficient quantity!"
            },
            {
              "id": "q2",
              "type": "sentence-builder",
              "prompt": "Build the proverb: \"नाच न जाने आँगन टेढ़ा\" (A bad workman blames his tools)",
              "audioText": "नाच न जाने आँगन टेढ़ा",
              "targetSentence": "नाच न जाने आँगन टेढ़ा",
              "targetRoman": "Naach na jaane aangan tedha",
              "wordBank": [
                "नाच",
                "न",
                "जाने",
                "आँगन",
                "टेढ़ा",
                "सीधा",
                "घर"
              ],
              "correctSequence": [
                "नाच",
                "न",
                "जाने",
                "आँगन",
                "टेढ़ा"
              ],
              "explanation": "Literal: \"One who does not know how to dance says the courtyard is crooked\"."
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match advanced Hindi idioms to their figurative meanings:",
              "pairs": [
                {
                  "left": "दाल में काला (Daal mein kaala)",
                  "right": "Something fishy / suspicious"
                },
                {
                  "left": "ईद का चाँद (Eid ka chaand)",
                  "right": "Rarely seen person"
                },
                {
                  "left": "नौ दो ग्यारह (Nau do gyarah)",
                  "right": "To flee / run away fast"
                },
                {
                  "left": "हवा से बातें करना (Hawa se baatein)",
                  "right": "To run/travel at lightning speed"
                }
              ]
            },
            {
              "id": "q4",
              "type": "listening",
              "prompt": "Listen to the advanced rapid dialogue and pick the correct meaning:",
              "audioText": "जब तक साँस, तब तक आस",
              "options": [
                {
                  "text": "While there is life, there is hope (Never surrender)",
                  "correct": true
                },
                {
                  "text": "Take a deep breath and sleep",
                  "correct": false
                },
                {
                  "text": "The storm has finally passed",
                  "correct": false
                }
              ],
              "explanation": "\"Jab tak saans, tab tak aas\" is an empowering Indian proverb about resilience!"
            }
          ]
        },
        {
          "id": "hi-5-2",
          "title": "Boss Challenge: Fluent Conversation & Grammar",
          "difficulty": "hard",
          "xp": 60,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build the complex compound sentence: \"यद्यपि वह थका हुआ था, फिर भी उसने काम पूरा किया\"",
              "audioText": "यद्यपि वह थका हुआ था फिर भी उसने काम पूरा किया",
              "targetSentence": "यद्यपि वह थका हुआ था फिर भी उसने काम पूरा किया",
              "targetRoman": "Yadyapi vah thaka hua tha phir bhi usne kaam poora kiya",
              "wordBank": [
                "यद्यपि",
                "वह",
                "थका",
                "हुआ",
                "था",
                "फिर",
                "भी",
                "उसने",
                "काम",
                "पूरा",
                "किया"
              ],
              "correctSequence": [
                "यद्यपि",
                "वह",
                "थका",
                "हुआ",
                "था",
                "फिर",
                "भी",
                "उसने",
                "काम",
                "पूरा",
                "किया"
              ],
              "explanation": "Mastering \"Yadyapi ... phir bhi\" (Although ... yet) is the hallmark of advanced Hindi syntax."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the philosophical expression \"वसुधैव कुटुम्बकम्\" (Vasudhaiva Kutumbakam) mean?",
              "audioText": "वसुधैव कुटुम्बकम्",
              "options": [
                {
                  "text": "The world is one family",
                  "correct": true
                },
                {
                  "text": "Knowledge is power",
                  "correct": false
                },
                {
                  "text": "Truth alone triumphs",
                  "correct": false
                }
              ],
              "explanation": "An ancient Indian philosophical principle etched into Indian cultural heritage."
            }
          ]
        },
        {
          "id": "hi-5-3",
          "title": "Grand Fluency Master Trophy Challenge",
          "difficulty": "hard",
          "xp": 75,
          "questions": [
            {
              "id": "q1",
              "type": "sentence-builder",
              "prompt": "Build the timeless proverb: \"जहाँ चाह, वहाँ राह\" (Where there is a will, there is a way)",
              "audioText": "जहाँ चाह वहाँ राह",
              "targetSentence": "जहाँ चाह वहाँ राह",
              "targetRoman": "Jahan chaah wahan raah",
              "wordBank": [
                "जहाँ",
                "चाह",
                "वहाँ",
                "राह",
                "मंज़िल",
                "रास्ता"
              ],
              "correctSequence": [
                "जहाँ",
                "चाह",
                "वहाँ",
                "राह"
              ],
              "explanation": "\"Jahan chaah wahan raah\" is India’s beloved proverb inspiring perseverance."
            },
            {
              "id": "q2",
              "type": "multiple-choice",
              "prompt": "What does the idiom \"गागर में सागर भरना\" (Gagar mein saagar bharna) describe?",
              "audioText": "गागर में सागर भरना",
              "options": [
                {
                  "text": "Expressing profound, immense wisdom in very few concise words",
                  "correct": true
                },
                {
                  "text": "Filling an earthen pot with salt water",
                  "correct": false
                },
                {
                  "text": "Swimming across the stormy ocean",
                  "correct": false
                }
              ],
              "explanation": "Literal: \"To pour the entire ocean into a small pitcher\" — master concise eloquence!"
            },
            {
              "id": "q3",
              "type": "match-pairs",
              "prompt": "Match advanced master proverbs:",
              "pairs": [
                {
                  "left": "अधजल गगरी छलकत जाए",
                  "right": "Empty vessels make the most noise"
                },
                {
                  "left": "जैसी करनी वैसी भरनी",
                  "right": "As you sow, so shall you reap"
                },
                {
                  "left": "दूर के ढोल सुहावने",
                  "right": "The grass is greener on the other side"
                },
                {
                  "left": "एक और एक ग्यारह",
                  "right": "Unity is invincible strength"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
