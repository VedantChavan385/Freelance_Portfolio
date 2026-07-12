interface SkillTagProps {
  label: string;
  className?: string;
}

export default function SkillTag({ label, className = '' }: SkillTagProps) {
  return (
    <span className={`absolute skill-tag select-none ${className}`}>
      {label}
    </span>
  );
}
