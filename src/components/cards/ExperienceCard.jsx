export default function ExperienceCard({ item }) {
  const { year, title, company, description } = item;

  return (
    <div className="bg-[#212121] rounded-xl p-6 border border-zinc-800/10 hover:border-zinc-700/20 transition-colors duration-300 flex flex-col gap-2.5 text-left w-full select-none">
      <span className="text-primary font-mono text-xs sm:text-sm">{year}</span>
      <div className="flex flex-col gap-0.5">
        <h4 className="text-[#E1E0CC] font-semibold text-base sm:text-lg tracking-tight">{title}</h4>
        <span className="text-gray-500 text-xs sm:text-sm font-medium">{company}</span>
      </div>
      <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
}
