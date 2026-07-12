import { caseStudies } from '../content/portfolioContent';

export default function CaseStudy() {
  return (
    <section id="cases" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Iterating Case Studies */}
        <div className="flex flex-col gap-32 mt-4">
          {caseStudies.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Left-aligned Case Study Tag */}
                  <div className="mb-4">
                    <span className="px-2.5 py-0.5 bg-gray-200/60 rounded text-[11px] font-semibold text-gray-600 tracking-tight select-none">
                      {study.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.1] text-gray-950 mb-4">
                    {study.title}
                    <span className="font-serif italic font-normal text-gray-950"> {study.highlightedWord}</span>
                    {study.titleSuffix}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[14px] leading-relaxed font-semibold mb-6 max-w-lg">
                    {study.description}
                  </p>

                  {/* Metrics Stats */}
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {study.metrics.map((metric, metricIdx) => (
                      <div 
                        key={metricIdx}
                        className="bg-white/80 border border-gray-200/20 rounded-xl px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)] flex flex-col justify-center min-h-[92px]"
                      >
                        <span className="block text-3xl font-extrabold tracking-tight text-gray-950">
                          {metric.value}
                        </span>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unified Card Column (Image at top, Quote details at bottom) */}
                <div className={`lg:col-span-7 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-white border border-gray-200/20 rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.015)] flex flex-col w-full">
                    {/* Integrated Image Header */}
                    <div className="relative h-[220px] md:h-[280px] overflow-hidden bg-gray-50">
                      <img 
                        src={study.image} 
                        alt={study.titleSuffix}
                        className="w-full h-full object-cover grayscale"
                        style={{
                          WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                          maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)'
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Testimonial Quote details */}
                    <div className="p-7 md:p-8 flex flex-col gap-3 relative">
                      {/* Serif quotation mark */}
                      <span className="text-[56px] font-serif italic text-gray-300 leading-none h-6 block mb-1 select-none pointer-events-none">
                        “
                      </span>

                      {/* Quote Text */}
                      <p className="text-gray-700 text-[14px] md:text-[15px] font-semibold leading-relaxed relative z-10 mb-2">
                        {study.testimonial.quote}
                      </p>

                      {/* Author Meta */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100/80">
                        <img 
                          src={study.testimonial.avatar} 
                          alt={study.testimonial.author}
                          className="w-9 h-9 rounded-full object-cover grayscale border border-gray-200"
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-900 leading-tight">
                            {study.testimonial.author}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-400 mt-0.5">
                            {study.testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
