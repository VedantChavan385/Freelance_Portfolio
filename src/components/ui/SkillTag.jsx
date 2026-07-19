export default function SkillTag({ name }) {
  return (
    <span className="text-primary text-[10px] sm:text-xs uppercase tracking-wider bg-[#212121] border border-zinc-850 px-3.5 py-1.5 rounded-full font-medium select-none hover:border-primary/20 transition-colors duration-300">
      {name}
    </span>
  );
}
