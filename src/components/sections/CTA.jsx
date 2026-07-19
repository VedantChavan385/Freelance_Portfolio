import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';
import WordsPullUp from '../animations/WordsPullUp';

export default function CTA({ 
  title = "Let's build together", 
  description = "I am currently available for freelance contracts and full-time remote engineering opportunities. Let's transform your ideas into scalable products.",
  buttonText = "Get in touch",
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
