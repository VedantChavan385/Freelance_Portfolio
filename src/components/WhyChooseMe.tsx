import { differentiators, stats } from '../content/portfolioContent';

export default function WhyChooseMe() {
  return (
    <section id="why" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-2.5 py-0.5 bg-gray-200/60 rounded text-[11px] font-semibold text-gray-600 tracking-tight select-none">
            Why choose me
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-[clamp(2rem,5.5vw,3.25rem)] font-semibold tracking-tight leading-[1.1] text-gray-950 max-w-2xl mx-auto mb-16">
          Why clients choose to work with <span className="font-serif italic font-normal text-gray-950">me.</span>
        </h2>

        {/* 2x2 Grid of differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {differentiators.map((diff, idx) => (
            <div 
              key={idx}
              className="bg-white/80 border border-gray-200/20 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] flex gap-6 items-start group"
            >
              {/* Emoji Badge circular container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-100 border border-gray-200/10 flex items-center justify-center text-xl shadow-sm">
                {diff.emoji}
              </div>

              {/* Text content details */}
              <div className="pt-1">
                <h3 className="text-lg font-bold tracking-tight text-gray-950">
                  {diff.title}
                </h3>
                <p className="mt-3 text-[13px] text-gray-400 font-semibold leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Stats Row */}
        <div className="bg-white/80 border border-gray-200/20 rounded-2xl p-10 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.015)] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center divide-y md:divide-y-0 md:divide-x divide-gray-200/60 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className={`flex flex-col items-center justify-center ${idx >= 2 ? 'pt-6 md:pt-0' : ''} ${idx === 1 ? 'pt-0' : ''}`}
            >
              <span className="block text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
                {stat.value}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
