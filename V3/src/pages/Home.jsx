import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Features />
      <CTA />
    </PageWrapper>
  );
}
