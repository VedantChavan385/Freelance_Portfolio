import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/cards/ServiceCard';
import ProcessSteps from '../components/sections/ProcessSteps';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import SkillTag from '../components/ui/SkillTag';
import { SERVICES, PROCESS_STEPS, GENERAL_FAQ } from '../lib/data/services';
import { ABOUT_DATA } from '../lib/data/about';
import { VARIANTS } from '../lib/animations';
import useSEO from '../hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Services',
    description: 'Explore full-stack web engineering, custom AI integrations, SaaS architectures, UI/UX designs, and page speed audits.'
  });

  const serviceGridRef = useRef(null);
  const techStackRef = useRef(null);

  const isServicesInView = useInView(serviceGridRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techStackRef, { once: true, margin: "-100px" });

  return (
    <PageWrapper>
      <div className="pt-32 pb-20 bg-black relative select-none min-h-screen">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-16 sm:gap-20 md:gap-28">
          
          {/* Header */}
          <SectionHeading 
            badge="Services"
            title="Services & Expertise"
            subtitle="I engineer scalable backends, performant frontend visuals, and automated AI solutions."
            alignment="left"
          />

          {/* Services Grid */}
          <motion.div
            ref={serviceGridRef}
            variants={VARIANTS.staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full border-t border-zinc-900/60 pt-10 lg:pt-16"
          >
            {SERVICES.map((service, idx) => (
              <motion.div key={idx} variants={VARIANTS.cardEntrance} className="h-full">
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Development Process (ProcessSteps) */}
          <div className="flex flex-col gap-12 sm:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16 w-full">
            <SectionHeading 
              badge="Workflow"
              title="Development Process"
              subtitle="A structured delivery process connecting milestones directly to production."
              alignment="left"
            />
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>

          {/* Technologies Stack */}
          <div ref={techStackRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16">
            <div className="lg:col-span-4">
              <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold block mb-4">Stack</span>
              <SectionHeading 
                title="Integrations & Stack"
                subtitle="Technologies implemented to provide fast load times."
                alignment="left"
              />
            </div>
            <motion.div 
              variants={VARIANTS.staggerContainer}
              initial="hidden"
              animate={isTechInView ? "visible" : "hidden"}
              className="lg:col-span-8 flex flex-wrap gap-2.5 items-center justify-start content-start"
            >
              {Object.values(ABOUT_DATA.skills).flat().map((skill, idx) => (
                <motion.div key={idx} variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                }}>
                  <SkillTag name={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-12 sm:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16 w-full">
            <SectionHeading 
              badge="Q&A"
              title="Frequently Asked Questions"
              subtitle="Answers to common queries regarding workflow, contracts, and timelines."
              alignment="center"
            />
            <FAQ items={GENERAL_FAQ} />
          </div>

        </Container>
      </div>

      <CTA />
    </PageWrapper>
  );
}
