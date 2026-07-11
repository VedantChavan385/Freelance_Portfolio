import { useState } from 'react';
import { faqs } from '../content/portfolioContent';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open the first one

  const toggleFAQ = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-gray-200/80 rounded-full text-[11px] font-bold uppercase tracking-widest text-gray-600">
            FAQ
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-[clamp(2.25rem,6vw,3.75rem)] font-bold tracking-tighter leading-[1.05] text-[#0a0a0a] max-w-2xl mx-auto mb-4">
          All you need to <span className="font-serif italic font-normal text-gray-900">know.</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-gray-500 text-[clamp(0.875rem,1.4vw,1.1rem)] font-medium max-w-xl mx-auto mb-16">
          A quick overview of the process, and working together.
        </p>

        {/* FAQ Accordion container */}
        <div className="max-w-[800px] ml-auto mr-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`transition-all duration-300 border rounded-3xl overflow-hidden ${
                  isOpen 
                    ? 'bg-white/90 border-gray-200/50 shadow-[0_4px_25px_rgba(0,0,0,0.02)]' 
                    : 'bg-white/50 hover:bg-white/70 border-gray-200/20'
                }`}
              >
                {/* Accordion Trigger header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-[17px] font-bold tracking-tight text-gray-950">
                    {faq.question}
                  </span>
                  
                  {/* Icon toggle */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 transition-transform duration-300 shadow-sm border border-gray-200/10">
                    {isOpen ? (
                      /* Close / Cross Icon */
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      /* Plus Icon */
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Collapsible Answer area */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{ 
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="px-8 pb-7 text-sm md:text-[15px] font-semibold text-gray-500 leading-relaxed max-w-[90%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
