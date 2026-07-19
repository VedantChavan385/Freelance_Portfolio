import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import useSEO from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: '404 - Page Not Found',
    description: 'The requested page path does not exist on this portfolio site.'
  });

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col justify-center bg-black">
        <Container className="text-center flex flex-col items-center gap-6">
          <SectionHeading 
            badge="404 Error"
            title="Page Not Found"
            subtitle="The path you requested does not exist or has been moved."
            alignment="center"
          />
          
          <Button to="/" className="mt-6">
            Back to Home
          </Button>
        </Container>
      </div>
    </PageWrapper>
  );
}
