import React from 'react';

interface SkillTagProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SkillTag({ label, className = '', style }: SkillTagProps) {
  return (
    <span
      style={style}
      className={`absolute inline-flex items-center rounded-full bg-white/95 backdrop-blur-[2px]
        px-[clamp(0.875rem,1.5vw,1.25rem)] py-[clamp(0.45rem,0.8vw,0.625rem)]
        text-[clamp(0.75rem,1vw,0.875rem)] font-medium text-gray-600
        shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60 select-none
        hover:scale-[1.03] hover:text-gray-900 transition-premium duration-300 ease-out ${className}`}
    >
      {label}
    </span>
  );
}
