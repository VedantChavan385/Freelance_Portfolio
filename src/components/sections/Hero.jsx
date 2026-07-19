import { motion } from 'framer-motion';
import WordsPullUp from '../animations/WordsPullUp';
import Button from '../ui/Button';

export default function Hero() {
  const customEase = [0.16, 1, 0.3, 1];

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

        {/* Hero Content (bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 z-10 flex flex-col justify-end">
          <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 items-end w-full">
            
            {/* Left 8 columns - Giant Heading */}
            <div className="col-span-12 md:col-span-8 flex items-end">
              <WordsPullUp
                text="Vedant"
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
                I help startups, founders, and businesses transform ideas into fast, scalable, and user-centric digital products. Specializing in full-stack engineering and intelligent AI solutions.
              </motion.p>

              {/* CTA Button Wrapper */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
              >
                <Button to="/contact">Let's build</Button>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
