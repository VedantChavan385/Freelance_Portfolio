import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ExperienceCard from '../cards/ExperienceCard';
import { VARIANTS } from '../../lib/animations';

export default function Timeline({ items }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto pl-6 sm:pl-8 select-none">
      {/* Central timeline line */}
      <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-[1px] bg-zinc-800" />

      {/* Timeline list */}
      <motion.div
        variants={VARIANTS.staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-8 sm:gap-10 w-full"
      >
        {items.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-start w-full">
            {/* Timeline checkpoint dot */}
            <div className="absolute -left-[27px] sm:-left-[31px] top-7 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary border-4 border-black box-content z-10 shadow" />
            
            <ExperienceCard item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
