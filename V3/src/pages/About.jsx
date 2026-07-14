import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <Container>
          <SectionHeading 
            badge="About Us"
            title="Our Journey"
            subtitle="Discover our story, path, and creative principles."
            alignment="left"
          />
          <div className="mt-12 text-gray-400 font-light max-w-2xl leading-relaxed">
            <p>
              This is a placeholder for the About page. In Phase 3, we will fully populate this page with interactive timelines, journey details, and skill grids.
            </p>
          </div>
        </Container>
      </div>
      <CTA />
    </PageWrapper>
  );
}
