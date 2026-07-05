interface SkillTagProps {
  label: string;
  className?: string;
}

export default function SkillTag({ label, className = '' }: SkillTagProps) {
  return (
    <span
      className={`absolute inline-flex items-center rounded-full bg-white px-5 py-2.5
        text-sm font-medium text-gray-600 shadow-[0_1px_4px_rgba(0,0,0,0.08)]
        border border-gray-200/80 select-none ${className}`}
    >
      {label}
    </span>
  );
}
