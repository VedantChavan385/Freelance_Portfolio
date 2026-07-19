import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { VARIANTS } from '../../lib/animations';

export default function ProcessSteps({ steps }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="w-full select-none">
      <motion.div
        variants={VARIANTS.staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="flex flex-col gap-3 text-left bg-[#101010] hover:bg-[#141414] p-6 sm:p-8 rounded-2xl border border-zinc-900/50 hover:border-primary/25 hover:-translate-y-1.5 transition-all duration-500 ease-[0.16,1,0.3,1] relative overflow-hidden group shadow-md hover:shadow-xl"
          >
            {/* Large Watermark Number */}
            <span className="text-primary/10 font-bold text-6xl absolute -right-3 -top-3 tracking-tighter select-none font-mono group-hover:text-primary/15 group-hover:scale-105 transition-all duration-500 origin-top-right">
              {step.number}
            </span>

            <span className="text-primary font-mono text-xs uppercase tracking-wider">{step.number} / Process</span>
            <h4 className="text-[#E1E0CC] group-hover:text-primary font-semibold text-lg tracking-tight mt-1 transition-colors duration-300">
              {step.title}
            </h4>
            <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mt-1">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
