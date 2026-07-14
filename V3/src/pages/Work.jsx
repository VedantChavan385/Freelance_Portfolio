import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/cards/ProjectCard';
import CTA from '../components/sections/CTA';
import { PROJECTS } from '../lib/data/projects';
import { VARIANTS } from '../lib/animations';

export default function Work() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-24 bg-black relative select-none min-h-screen">
        {/* Background Noise Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-12 sm:gap-16 md:gap-20">
          <SectionHeading 
            badge="Portfolio"
            title="Selected Work"
            subtitle="Explore our visual stories, cinematic work, and brand experiences."
            alignment="left"
          />

          {/* Projects Grid */}
          <motion.div
            variants={VARIANTS.staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </Container>
      </div>
      
      <CTA />
    </PageWrapper>
  );
}
