import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Features from '../components/sections/Features';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Features />
    </PageWrapper>
  );
}
