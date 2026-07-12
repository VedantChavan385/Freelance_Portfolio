interface SpeechBubbleProps {
  text: string;
  position: 'left' | 'right';
  className?: string;
}

export default function SpeechBubble({ text, position, className = '' }: SpeechBubbleProps) {
  return (
    <div className={`absolute select-none ${className}`}>
      <div className="relative">
        {/* Bubble body */}
        <span className="speech-bubble-body whitespace-nowrap">
          {text}
        </span>

        {/* Tail / pointer (pointing towards the central face) */}
        <svg
          className={`absolute -bottom-[6px] ${position === 'left' ? 'right-[24px]' : 'left-[24px]'} h-[8px] w-[12px] text-white/90`}
          style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.03))' }}
          viewBox="0 0 16 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 0 L8 12 L16 0 Z" />
        </svg>
      </div>
    </div>
  );
}
