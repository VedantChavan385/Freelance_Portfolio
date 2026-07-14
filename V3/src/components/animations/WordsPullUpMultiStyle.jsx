import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WordsPullUpMultiStyle({ segments, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  // Build a list of words, retaining their specific segment's class list
  const allWords = [];
  segments.forEach((segment) => {
    // Split by spaces but preserve words
    const words = segment.text.trim().split(/\s+/);
    words.forEach((word) => {
      if (word !== "") {
        allWords.push({
          word,
          className: segment.className
        });
      }
    });
  });

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
      className={`inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.05em] ${className || ''}`}
    >
      {allWords.map((item, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block ${item.className || ''}`}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.span>
  );
}
