import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

export default function Contact() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <Container>
          <SectionHeading 
            badge="Contact"
            title="Get In Touch"
            subtitle="Let's build something remarkable together."
            alignment="left"
          />
          <div className="mt-12 text-gray-400 font-light max-w-2xl leading-relaxed">
            <p>
              This is a placeholder for the Contact page. In Phase 6, we will build out a fully functional form, email/social links, availability statuses, and FAQs.
            </p>
          </div>
        </Container>
      </div>
      <CTA />
    </PageWrapper>
  );
}
