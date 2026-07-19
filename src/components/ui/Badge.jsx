export default function Badge({ children, className = '' }) {
  return (
    <span className={`text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium select-none ${className}`}>
      {children}
    </span>
  );
}
