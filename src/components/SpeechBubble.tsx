interface SpeechBubbleProps {
  text: string;
  position: 'left' | 'right';
  className?: string;
}

export default function SpeechBubble({ text, position, className = '' }: SpeechBubbleProps) {
  return (
    <div className={`absolute flex items-center gap-[clamp(0.35rem,0.6vw,0.5rem)] select-none ${className}`}>
      {/* Decorative dot — only on the left bubble */}
      {position === 'left' && (
        <span className="h-[clamp(0.5rem,0.7vw,0.625rem)] w-[clamp(0.5rem,0.7vw,0.625rem)] rounded-full bg-gray-900 shrink-0" />
      )}

      <div className="relative">
        {/* Bubble body */}
        <span
          className="inline-block rounded-full bg-white
            px-[clamp(0.875rem,1.5vw,1.25rem)] py-[clamp(0.35rem,0.6vw,0.5rem)]
            text-[clamp(0.7rem,0.9vw,0.8125rem)] font-medium text-gray-800
            shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/80
            whitespace-nowrap"
        >
          {text}
        </span>

        {/* Tail / pointer */}
        <svg
          className={`absolute -bottom-[clamp(0.3rem,0.5vw,0.375rem)] ${
            position === 'left' ? 'right-[clamp(1.5rem,3vw,2rem)]' : 'left-[clamp(1.5rem,3vw,2rem)]'
          } h-[clamp(0.5rem,0.8vw,0.75rem)] w-[clamp(0.7rem,1.1vw,1rem)] text-white filter drop-shadow-[0_2px_1px_rgba(0,0,0,0.03)]`}
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
