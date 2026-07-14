import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

export default function Services() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <Container>
          <SectionHeading 
            badge="Services"
            title="Studio Capabilities"
            subtitle="Creative and workflow solutions built for pure vision."
            alignment="left"
          />
          <div className="mt-12 text-gray-400 font-light max-w-2xl leading-relaxed">
            <p>
              This is a placeholder for the Services page. In Phase 5, we will build out grids for our development process, tech stack integrations, and FAQs.
            </p>
          </div>
        </Container>
      </div>
      <CTA />
    </PageWrapper>
  );
}
