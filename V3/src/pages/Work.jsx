import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

export default function Work() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <Container>
          <SectionHeading 
            badge="Portfolio"
            title="Selected Work"
            subtitle="Explore our visual stories, cinematic work, and brand experiences."
            alignment="left"
          />
          <div className="mt-12 text-gray-400 font-light max-w-2xl leading-relaxed">
            <p>
              This is a placeholder for the Work page. In Phase 4, we will fully populate this page with projects, details, galleries, and client case study pages.
            </p>
          </div>
        </Container>
      </div>
      <CTA />
    </PageWrapper>
  );
}
