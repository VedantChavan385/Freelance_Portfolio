import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import AnimatedLetter from '../animations/AnimatedLetter';
import { ABOUT_DATA } from '../../lib/data/about';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const headingSegments = ABOUT_DATA.introTitleSegments;
  const bodyText = ABOUT_DATA.bioText;

  return (
    <section id="about" className="bg-black py-12 px-4 md:py-20 md:px-6 w-full select-none">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] py-16 px-6 sm:px-12 md:py-28 md:px-20 text-center flex flex-col items-center gap-8 md:gap-12 relative overflow-hidden">
        
        {/* Heading */}
        <SectionHeading 
          badge={ABOUT_DATA.introBadge}
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
