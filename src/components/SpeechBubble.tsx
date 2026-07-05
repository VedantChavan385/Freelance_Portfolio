interface SpeechBubbleProps {
  text: string;
  position: 'left' | 'right';
  className?: string;
}

export default function SpeechBubble({ text, position, className = '' }: SpeechBubbleProps) {
  return (
    <div className={`absolute flex items-center gap-2 select-none ${className}`}>
      {/* Decorative dot — only on the left bubble */}
      {position === 'left' && (
        <span className="h-2.5 w-2.5 rounded-full bg-gray-900 shrink-0" />
      )}

      <div className="relative">
        {/* Bubble body */}
        <span
          className="inline-block rounded-full bg-white px-5 py-2
            text-[13px] font-medium text-gray-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-200/80
            whitespace-nowrap"
        >
          {text}
        </span>

        {/* Tail / pointer */}
        <svg
          className={`absolute -bottom-1.5 ${
            position === 'left' ? 'right-8' : 'left-8'
          } h-3 w-4 text-white filter drop-shadow-[0_2px_1px_rgba(0,0,0,0.03)]`}
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
