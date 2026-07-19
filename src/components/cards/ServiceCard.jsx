import * as Lucide from 'lucide-react';

export default function ServiceCard({ service }) {
  const { title, description, icon, features } = service;
  const IconComponent = Lucide[icon] || Lucide.HelpCircle;

  return (
    <div className="bg-[#101010] hover:bg-[#141414] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-zinc-900/50 hover:border-primary/25 hover:-translate-y-1.5 transition-all duration-500 ease-[0.16,1,0.3,1] select-none h-full group shadow-md hover:shadow-xl">
      <div className="flex flex-col items-start w-full">
        {/* Dynamic Icon with hover scale animation */}
        <div className="bg-black/30 p-3 rounded-xl border border-zinc-900/40 group-hover:border-primary/10 transition-colors duration-500">
          <IconComponent className="text-primary w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Title */}
        <h3 className="text-[#E1E0CC] group-hover:text-primary font-semibold text-lg sm:text-xl tracking-tight mt-5 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mt-2.5">
          {description}
        </p>

        {/* Checklist */}
        <div className="flex flex-col gap-2.5 mt-6 w-full border-t border-zinc-900/40 pt-5">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <Lucide.Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
