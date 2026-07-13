import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

export default function Hero() {
  const customEase = [0.16, 1, 0.3, 1];

  const navbarLinks = [
    { name: "Our story", href: "#about" },
    { name: "Collective", href: "#features" },
    { name: "Workshops", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Inquiries", href: "#" }
  ];

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black relative select-none">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-950">
        
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 whitespace-nowrap">
            {navbarLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
                style={{
                  color: 'rgba(225, 224, 204, 0.8)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E1E0CC'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content (bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 z-10 flex flex-col justify-end">
          <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 items-end w-full">
            
            {/* Left 8 columns - Giant Heading */}
            <div className="col-span-12 md:col-span-8 flex items-end">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] select-none"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            {/* Right 4 columns - Description & Button */}
            <div className="col-span-12 md:col-span-4 flex flex-col items-start gap-5 sm:gap-6 md:pl-4">
              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] font-light max-w-sm"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
                className="group bg-primary text-black rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 transition-all duration-300 hover:gap-3 sm:hover:gap-4 font-medium text-sm sm:text-base border border-transparent"
              >
                <span>Join the lab</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#E1E0CC] w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
