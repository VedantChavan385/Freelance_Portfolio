import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import WordsPullUp from '../animations/WordsPullUp';

export default function CTA({ 
  title = "Join the lab", 
  description = "Prisma is a worldwide network of visual artists bound by passion and hunger to unlock potential through our unique perspectives.",
  buttonText = "Join the lab",
  buttonHref,
  buttonTo = "/contact"
}) {
  return (
    <Section background="bg-black" className="py-16 md:py-24 border-t border-zinc-900/30 relative select-none">
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

      <Container className="text-center flex flex-col items-center gap-6 relative z-10">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#E1E0CC]">
          <WordsPullUp text={title} />
        </div>
        
        <p className="text-gray-400 font-light text-sm sm:text-base max-w-lg leading-relaxed select-none">
          {description}
        </p>

        <Button to={buttonTo} href={buttonHref} className="mt-4">
          {buttonText}
        </Button>
      </Container>
    </Section>
  );
}
