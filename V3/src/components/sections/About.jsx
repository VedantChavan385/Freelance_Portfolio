import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedLetter from '../animations/AnimatedLetter';

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
        
        {/* Heading */}
        <SectionHeading 
          badge="Visual arts"
          titleSegments={headingSegments}
          alignment="center"
        />

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
