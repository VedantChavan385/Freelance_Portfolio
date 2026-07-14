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
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="flex flex-col gap-3 text-left bg-[#101010] p-6 sm:p-8 rounded-2xl border border-zinc-900/40 relative overflow-hidden group"
          >
            {/* Number watermark */}
            <span className="text-primary/10 font-bold text-5xl absolute -right-2 -top-2 tracking-tighter select-none font-mono group-hover:text-primary/15 transition-colors duration-300">
              {step.number}
            </span>

            <span className="text-primary font-mono text-xs uppercase tracking-wider">{step.number} / Process</span>
            <h4 className="text-[#E1E0CC] font-semibold text-lg tracking-tight mt-1">{step.title}</h4>
            <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mt-1">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
