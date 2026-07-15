import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WorkShowcase from '../components/sections/WorkShowcase';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';
import useSEO from '../hooks/useSEO';
import { PROJECTS } from '../lib/data/projects';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'I help startups, businesses, and founders transform ideas into fast, scalable, and user-centric digital products specializing in full-stack web development and AI solutions.'
  });

  return (
    <PageWrapper>
      <Hero />
      <About />
      
      {/* Interactive Work Showcase Section */}
      <section id="work-section" className="min-h-screen bg-black relative py-16 px-4 md:py-24 md:px-6 flex flex-col justify-center select-none border-t border-zinc-900/40">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
          {/* Header section */}
          <div className="w-full text-center flex flex-col gap-2 md:gap-3">
            <SectionHeading 
              badge="Portfolio"
              title="Selected Work"
              subtitle="A curated selection of web applications, AI integrations, and full-stack solutions."
              alignment="center"
            />
          </div>

          {/* Interactive Work Showcase Container */}
          <div className="w-full">
            <WorkShowcase projects={PROJECTS} />
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  );
}
