import { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/cards/StatCard';
import Timeline from '../components/sections/Timeline';
import SkillTag from '../components/ui/SkillTag';
import CTA from '../components/sections/CTA';
import { ABOUT_DATA } from '../lib/data/about';
import { VARIANTS } from '../lib/animations';
import AnimatedLetter from '../components/animations/AnimatedLetter';

export default function About() {
  const introScrollRef = useRef(null);
  const statsRef = useRef(null);
  const skillsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: introScrollRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  return (
    <PageWrapper>
      <div className="pt-32 pb-20 bg-black relative select-none min-h-screen">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-16 sm:gap-20 md:gap-28">
          
          {/* Header */}
          <SectionHeading 
            badge="About Me"
            title="My Background"
            subtitle="I build robust web experiences and AI integrations designed for scalable performance."
            alignment="left"
          />

          {/* Intro Section with Scroll Reveal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-zinc-900/60 pt-10 lg:pt-16">
            <div className="lg:col-span-4">
              <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold block mb-4">Introduction</span>
              <SectionHeading 
                titleSegments={ABOUT_DATA.introTitleSegments}
                alignment="left"
              />
            </div>
            <div ref={introScrollRef} className="lg:col-span-8 flex flex-col gap-6 justify-center">
              <p className="text-[#DEDBC8] text-sm sm:text-base leading-relaxed tracking-wide font-light">
                {ABOUT_DATA.bioText.split('').map((char, index) => (
                  <AnimatedLetter
                    key={index}
                    char={char}
                    index={index}
                    totalChars={ABOUT_DATA.bioText.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            ref={statsRef}
            variants={VARIANTS.staggerContainer}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full border-t border-zinc-900/60 pt-12 md:pt-16"
          >
            {ABOUT_DATA.stats.map((stat, idx) => (
              <StatCard key={idx} item={stat} />
            ))}
          </motion.div>

          {/* Timeline Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16">
            <div className="lg:col-span-4">
              <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold block mb-4">Journey</span>
              <SectionHeading 
                titleSegments={ABOUT_DATA.journeyTitleSegments}
                subtitle={ABOUT_DATA.journeyText}
                alignment="left"
              />
            </div>
            <div className="lg:col-span-8 w-full">
              <Timeline items={ABOUT_DATA.timeline} />
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16">
            <div className="lg:col-span-4">
              <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold block mb-4">Expertise</span>
              <SectionHeading 
                title="Technical Skills"
                subtitle="Categorized stack indicating tool methodologies."
                alignment="left"
              />
            </div>
            <motion.div 
              variants={VARIANTS.staggerContainer}
              initial="hidden"
              animate={isSkillsInView ? "visible" : "hidden"}
              className="lg:col-span-8 flex flex-col gap-8 w-full text-left"
            >
              {Object.entries(ABOUT_DATA.skills).map(([category, list]) => (
                <div key={category} className="flex flex-col gap-3">
                  <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">{category}</span>
                  <div className="flex flex-wrap gap-2.5">
                    {list.map((skill) => (
                      <SkillTag key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Current Focus */}
          <div className="border-t border-zinc-900/60 pt-12 md:pt-16 flex flex-col gap-4">
            <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold block">Focus</span>
            <div className="bg-[#101010] border border-zinc-900/40 rounded-xl p-6 sm:p-8">
              <h4 className="text-primary text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-3">Currently Exploring</h4>
              <p className="text-[#E1E0CC] font-light text-sm sm:text-base leading-relaxed">
                {ABOUT_DATA.currentFocus || ABOUT_DATA.currentlyExploring.join(", ") + "."}
              </p>
            </div>
          </div>

        </Container>
      </div>

      <CTA />
    </PageWrapper>
  );
}
