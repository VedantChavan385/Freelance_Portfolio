import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WorkShowcase from '../components/sections/WorkShowcase';
import ServiceCard from '../components/cards/ServiceCard';
import ProcessSteps from '../components/sections/ProcessSteps';
import SectionHeading from '../components/ui/SectionHeading';
import Container from '../components/layout/Container';
import CTA from '../components/sections/CTA';
import useSEO from '../hooks/useSEO';

// Import data
import { PROJECTS } from '../lib/data/projects';
import { SERVICES, PROCESS_STEPS } from '../lib/data/services';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'I help startups, businesses, and founders transform ideas into fast, scalable, and user-centric digital products specializing in full-stack web development and AI solutions.'
  });

  return (
    <PageWrapper>
      {/* 1. Hero Page */}
      <Hero />
      
      {/* 2. About Section */}
      <About />
      
      {/* 3. Selected Work Section */}
      <section id="work-section" className="min-h-screen bg-black relative py-16 px-4 md:py-24 md:px-6 flex flex-col justify-center select-none border-t border-zinc-900/40">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
          {/* Header */}
          <div className="w-full text-center flex flex-col gap-2 md:gap-3">
            <SectionHeading 
              badge="Portfolio"
              title="Selected Work"
              subtitle="A curated selection of web applications, AI integrations, and full-stack solutions."
              alignment="center"
            />
          </div>

          {/* Interactive Work Showcase */}
          <div className="w-full">
            <WorkShowcase projects={PROJECTS} />
          </div>
        </div>
      </section>

      {/* 4. Services & Expertise Section */}
      <section id="services-section" className="min-h-screen bg-black relative py-16 px-4 md:py-24 md:px-6 flex flex-col justify-center select-none border-t border-zinc-900/40">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
          {/* Header */}
          <div className="w-full text-center flex flex-col gap-2 md:gap-3">
            <SectionHeading 
              badge="Services"
              title="Services & Expertise"
              subtitle="I engineer scalable backends, performant frontend visuals, and automated AI solutions."
              alignment="center"
            />
          </div>

          {/* Services Grid (5 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-10">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="h-full">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Development Process Section */}
      <section id="workflow-section" className="py-16 px-4 md:py-24 md:px-6 bg-black relative select-none border-t border-zinc-900/40">
        {/* Background noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-12 sm:gap-16">
          {/* Header */}
          <div className="w-full text-center flex flex-col gap-2 md:gap-3">
            <SectionHeading 
              badge="Workflow"
              title="Development Process"
              subtitle="A structured delivery process connecting milestones directly to production."
              alignment="center"
            />
          </div>

          {/* Process Steps List */}
          <div className="w-full pt-10">
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>
        </Container>
      </section>

      {/* 6. Original CTA Section */}
      <CTA />
    </PageWrapper>
  );
}
