import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 select-none">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={idx}
            className="bg-[#101010] rounded-xl border border-zinc-900/40 overflow-hidden transition-colors duration-300"
          >
            {/* Header Trigger */}
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between p-5 text-left text-[#E1E0CC] font-semibold text-sm sm:text-base tracking-tight hover:text-primary transition-colors duration-300 gap-4"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`text-gray-500 w-4 h-4 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 pb-5 pt-1 text-gray-400 font-light text-xs sm:text-sm leading-relaxed border-t border-zinc-900/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
