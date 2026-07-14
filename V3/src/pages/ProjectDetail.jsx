import { useParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <PageWrapper>
      <div className="pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <Container>
          <SectionHeading 
            badge="Case Study"
            title={`Project: ${slug}`}
            subtitle="Details, workflow metrics, research, and results."
            alignment="left"
          />
          <div className="mt-12 text-gray-400 font-light max-w-2xl leading-relaxed">
            <p>
              This is a placeholder case study for the project: <strong>{slug}</strong>. In Phase 4, we will build out the generic project details layout displaying problems, solutions, tech stack, and results metrics.
            </p>
          </div>
        </Container>
      </div>
      <CTA />
    </PageWrapper>
  );
}
