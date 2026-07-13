import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const headingSegments = [
    { text: "I am Marcus Chen,", className: "font-normal text-[#E1E0CC]" },
    { text: "a self-taught director.", className: "italic font-serif text-primary" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal text-[#E1E0CC]" }
  ];

  const bodyText = "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

  return (
    <section id="about" className="bg-black py-12 px-4 md:py-20 md:px-6 w-full select-none">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] py-16 px-6 sm:px-12 md:py-28 md:px-20 text-center flex flex-col items-center gap-8 md:gap-12 relative overflow-hidden">
        
        {/* Top Label */}
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
          Visual arts
        </span>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.05] sm:leading-[0.95] md:leading-[0.9] tracking-tight">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll Reveal Body Paragraph */}
        <div ref={containerRef} className="max-w-2xl mx-auto mt-4 sm:mt-6">
          <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed text-center opacity-90 font-light tracking-wide">
            {bodyText.split('').map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                index={index}
                totalChars={bodyText.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>

      </div>
    </section>
  );
}
