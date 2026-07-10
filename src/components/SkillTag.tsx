interface SkillTagProps {
  label: string;
  className?: string;
}

export default function SkillTag({ label, className = '' }: SkillTagProps) {
  return (
    <span
      className={`absolute inline-flex items-center rounded-full bg-white
        px-[clamp(0.875rem,1.5vw,1.25rem)] py-[clamp(0.45rem,0.8vw,0.625rem)]
        text-[clamp(0.75rem,1vw,0.875rem)] font-medium text-gray-600
        shadow-[0_1px_4px_rgba(0,0,0,0.08)] border border-gray-200/80 select-none ${className}`}
    >
      {label}
    </span>
  );
}
