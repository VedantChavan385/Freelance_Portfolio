import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'I help startups, businesses, and founders transform ideas into fast, scalable, and user-centric digital products specializing in full-stack web development and AI solutions.'
  });

  return (
    <PageWrapper>
      <Hero />
      <About />
      <Features />
      <CTA />
    </PageWrapper>
  );
}
