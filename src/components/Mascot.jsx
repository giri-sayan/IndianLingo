import React from 'react';

/**
 * Mitthu (मिठ्ठू) - The friendly Indian Parakeet Mascot!
 * Known for being India's beloved talking bird.
 */
export default function Mascot({ mood = 'happy', message = '', size = 120, className = '' }) {
  return (
    <div className={`relative flex items-end gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 drop-shadow-md"
      >
        {/* Parakeet Tail Feathers */}
        <path
          d="M 65 150 C 40 180, 20 195, 10 195 C 30 185, 55 165, 75 140 Z"
          fill="#059669"
        />
        <path
          d="M 75 145 C 50 185, 35 200, 25 198 C 45 185, 70 160, 85 140 Z"
          fill="#10B981"
        />

        {/* Body (Emerald Green Parakeet) */}
        <ellipse cx="100" cy="115" rx="55" ry="60" fill="#10B981" />
        {/* Belly (Lighter Lime Green) */}
        <ellipse cx="112" cy="122" rx="36" ry="42" fill="#34D399" />

        {/* Left Wing */}
        {mood === 'cheering' || mood === 'proud' ? (
          <path
            d="M 55 100 C 35 70, 20 80, 30 110 C 40 130, 60 130, 65 120 Z"
            fill="#059669"
            className="animate-pulse"
          />
        ) : (
          <path
            d="M 60 95 C 45 110, 48 140, 70 145 C 62 130, 60 115, 65 100 Z"
            fill="#059669"
          />
        )}

        {/* Right Wing */}
        {mood === 'cheering' ? (
          <path
            d="M 145 100 C 165 70, 180 80, 170 110 C 160 130, 140 130, 135 120 Z"
            fill="#059669"
            className="animate-pulse"
          />
        ) : (
          <path
            d="M 140 95 C 155 110, 152 140, 130 145 C 138 130, 140 115, 135 100 Z"
            fill="#059669"
          />
        )}

        {/* Head */}
        <circle cx="108" cy="70" r="42" fill="#10B981" />

        {/* Rose-ring Neck Collar (Iconic Indian Ringneck feature) */}
        <path
          d="M 75 78 C 88 95, 128 95, 142 78"
          stroke="#EF4444"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 77 82 C 90 98, 126 98, 140 82"
          stroke="#1F2937"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Traditional Saffron Cap / Turban or Tilak */}
        <ellipse cx="108" cy="35" rx="28" ry="12" fill="#FF9933" />
        <circle cx="108" cy="28" r="6" fill="#F59E0B" />
        {/* Tilak / Bindu on forehead */}
        <ellipse cx="112" cy="52" rx="3" ry="5" fill="#DC2626" />

        {/* Eyes */}
        {mood === 'sad' ? (
          <>
            <ellipse cx="98" cy="65" rx="7" ry="5" fill="#1F2937" />
            <ellipse cx="130" cy="65" rx="7" ry="5" fill="#1F2937" />
            <circle cx="96" cy="63" r="2" fill="white" />
            <circle cx="128" cy="63" r="2" fill="white" />
          </>
        ) : mood === 'cheering' || mood === 'proud' ? (
          <>
            {/* Happy squinting arched eyes */}
            <path
              d="M 90 66 Q 98 56 106 66"
              stroke="#111827"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 122 66 Q 130 56 138 66"
              stroke="#111827"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Rosy Cheeks */}
            <circle cx="88" cy="74" r="6" fill="#F87171" opacity="0.6" />
            <circle cx="140" cy="74" r="6" fill="#F87171" opacity="0.6" />
          </>
        ) : (
          <>
            {/* Big friendly owl/parakeet eyes */}
            <circle cx="98" cy="64" r="10" fill="white" />
            <circle cx="100" cy="64" r="6" fill="#1F2937" />
            <circle cx="102" cy="62" r="2.5" fill="white" />

            <circle cx="130" cy="64" r="10" fill="white" />
            <circle cx="132" cy="64" r="6" fill="#1F2937" />
            <circle cx="134" cy="62" r="2.5" fill="white" />
            {/* Rosy Cheeks */}
            <circle cx="88" cy="74" r="5" fill="#F87171" opacity="0.4" />
            <circle cx="140" cy="74" r="5" fill="#F87171" opacity="0.4" />
          </>
        )}

        {/* Parrot Beak (Iconic Curved Red Beak) */}
        <path
          d="M 112 68 Q 128 72 120 90 Q 112 88 108 78 Z"
          fill="#DC2626"
        />
        <path
          d="M 111 76 Q 116 80 110 83 Z"
          fill="#991B1B"
        />

        {/* Cute Feet (Orange Perch Feet) */}
        <path d="M 85 170 L 80 185 M 88 170 L 88 186 M 92 170 L 96 184" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <path d="M 125 170 L 120 185 M 128 170 L 128 186 M 132 170 L 136 184" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />

        {/* Optional Chai Cup if mood is 'chai' */}
        {mood === 'chai' && (
          <g transform="translate(130, 110)">
            {/* Cutting Chai Glass */}
            <polygon points="0,0 20,0 16,30 4,30" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <polygon points="2,8 18,8 15,28 5,28" fill="#B45309" opacity="0.9" />
            {/* Steam */}
            <path d="M 6,-4 Q 10,-12 8,-18" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
            <path d="M 14,-3 Q 18,-10 16,-16" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" fill="none" className="animate-pulse" />
          </g>
        )}
      </svg>

      {/* Speech Bubble */}
      {message && (
        <div className="relative bg-white border-2 border-slate-200 rounded-2xl px-4 py-2.5 shadow-sm text-sm font-bold text-slate-800 max-w-xs animate-in fade-in slide-in-from-left-2 duration-300">
          <p>{message}</p>
          {/* Arrow */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white drop-shadow-[-2px_0_0_#e2e8f0]" />
        </div>
      )}
    </div>
  );
}
