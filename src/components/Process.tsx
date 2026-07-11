import { useState } from 'react';
import { processSteps, processQuote } from '../content/portfolioContent';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Custom SVG icon renderer for steps
  const renderStepIcon = (name: string) => {
    const baseClass = "w-5 h-5";
    switch (name) {
      case 'discover':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m0 0A9 9 0 0 0 3 12c0 1.29.271 2.518.757 3.633m0 0a8.997 8.997 0 0 0 7.843 4.582M19.5 15.633A8.997 8.997 0 0 0 12 21m0-18a8.997 8.997 0 0 1 7.5 3.633" />
          </svg>
        );
      case 'define':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25V4.5m0 15v2.25m-9.75-9.75h2.25m15 0h2.25m-3.257-6.007L16.2 7.743m-8.4 8.4l-1.743 1.743m0-11.886l1.743 1.743m8.4 8.4l1.743 1.743" />
          </svg>
        );
      case 'design':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a1 1 0 111.414 1.414l-9.37 9.37a1 1 0 01-.707.293H8.5v-.707a1 1 0 01.293-.707l.737-.737Zm0 0L8.5 17.5h1l.03-.03a1 1 0 01-.707-.293l-.737-.737v-.707a1 1 0 01.293-.707l.737-.737Zm0 0L17.5 5.5l1 1-9 9m-1-1v-1l-1 1 1 1Zm-5.5 8H3.5a1.5 1.5 0 0 1-1.5-1.5V17.5a1.5 1.5 0 0 1 1.5-1.5H5.5a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5Z" />
          </svg>
        );
      case 'refine':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        );
      case 'deliver':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.64 8.38a14.962 14.962 0 0 0-1.41 14.12l3.83-3.83m-1.45-1.44a5.99 5.99 0 0 1-1.925-3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-gray-200/80 rounded-full text-[11px] font-bold uppercase tracking-widest text-gray-600">
            How I work
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-[clamp(2.25rem,6vw,3.75rem)] font-bold tracking-tighter leading-[1.05] text-[#0a0a0a] max-w-2xl mx-auto mb-4">
          See how I get things <span className="font-serif italic font-normal text-gray-900">done.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-gray-500 text-[clamp(0.875rem,1.4vw,1.1rem)] font-medium max-w-xl mx-auto mb-20">
          A structured approach to delivering clear and effective design solutions every time.
        </p>

        {/* Interactive Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Steps List with Vertical Line connector */}
          <div className="lg:col-span-6 relative flex flex-col pl-6">
            {/* The vertical timeline bar */}
            <div className="absolute left-[34px] top-4 bottom-4 w-[2px] bg-gray-200/80 z-0">
              <div 
                className="w-full bg-gray-950 transition-all duration-500 ease-out"
                style={{ 
                  height: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                  transformOrigin: 'top' 
                }}
              />
            </div>

            {processSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex gap-6 items-start py-6 cursor-pointer relative z-10 select-none group transition-all duration-300 ${
                    isSelected ? 'opacity-100 scale-101' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  {/* Outer circle for line intersection */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gray-950 border-gray-950 text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-500 group-hover:border-gray-400 group-hover:text-gray-800'
                    }`}>
                      {renderStepIcon(step.iconName)}
                    </div>
                  </div>

                  {/* Text meta of the step */}
                  <div className="flex-grow pt-1.5 pr-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-950 mt-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 font-semibold max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Image & Testimonial quote card */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 flex flex-col gap-6">
            {/* Visual Frame */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-gray-200/30 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <img 
                src={processQuote.image} 
                alt="Process flower representation" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out"
                loading="lazy"
              />
            </div>

            {/* Testimonial Quote frame */}
            <div className="bg-white/80 border border-gray-200/40 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-4 relative overflow-hidden">
              <span className="text-[100px] font-serif italic text-gray-900/5 leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                “
              </span>
              <p className="text-gray-700 text-sm md:text-[15px] font-semibold leading-relaxed relative z-10 italic">
                "{processQuote.text}"
              </p>
              <div className="flex items-center gap-2.5 relative z-10 pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-900">
                  — {processQuote.author}
                </span>
                <span className="text-[10px] font-semibold text-gray-400">
                  Lead Designer & Developer
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
