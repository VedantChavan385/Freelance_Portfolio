import { caseStudies } from '../content/portfolioContent';

export default function CaseStudy() {
  return (
    <section id="cases" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Heading Label */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-gray-200/80 rounded-full text-[11px] font-bold uppercase tracking-widest text-gray-600">
            Case Studies
          </span>
        </div>

        {/* Iterating Case Studies */}
        <div className="flex flex-col gap-28 mt-12">
          {caseStudies.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Small tag */}
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-4 inline-block">
                    {study.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-tighter leading-[1.05] text-[#0a0a0a] mb-6">
                    {study.title}
                    <span className="font-serif italic font-normal text-gray-900">{study.highlightedWord}</span>
                    {study.titleSuffix}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[15px] leading-relaxed font-semibold mb-8">
                    {study.description}
                  </p>

                  {/* Metrics Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.metrics.map((metric, metricIdx) => (
                      <div 
                        key={metricIdx}
                        className="bg-white/60 backdrop-blur-sm border border-gray-200/40 rounded-2xl px-6 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                      >
                        <span className="block text-3xl font-extrabold tracking-tight text-gray-950">
                          {metric.value}
                        </span>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image & Testimonial Column */}
                <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Case Study Image Wrapper */}
                  <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-200/30">
                    <img 
                      src={study.image} 
                      alt={study.titleSuffix}
                      className="w-full h-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>

                  {/* Testimonial Quote Card */}
                  <div className="bg-white/80 border border-gray-200/40 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-5 relative overflow-hidden">
                    {/* Background visual quote icon */}
                    <span className="text-[120px] font-serif italic text-gray-900/5 leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                      “
                    </span>

                    {/* Quote Text */}
                    <p className="text-gray-700 text-sm md:text-base font-semibold leading-relaxed relative z-10">
                      "{study.testimonial.quote}"
                    </p>

                    {/* Author Meta */}
                    <div className="flex items-center gap-3.5 relative z-10 pt-2 border-t border-gray-100">
                      <img 
                        src={study.testimonial.avatar} 
                        alt={study.testimonial.author}
                        className="w-10 h-10 rounded-full object-cover grayscale border border-gray-200"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
