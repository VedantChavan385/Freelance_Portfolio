import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WordsPullUp({ text, className, style, showAsterisk }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const words = text.split(' ');
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };
  
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className || ''}`}
      style={style}
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        
        if (isLastWord && showAsterisk) {
          // Splitting word "Prisma" to get the final "a" and attach the asterisk to it.
          const mainPart = word.slice(0, -1); // "Prism"
          const lastChar = word.slice(-1);    // "a"
          
          return (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block relative"
            >
              {mainPart}
              <span className="relative inline-block">
                {lastChar}
                <span 
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] select-none pointer-events-none"
                  style={{ fontFamily: "inherit" }}
                >
                  *
                </span>
              </span>
            </motion.span>
          );
        }
        
        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
