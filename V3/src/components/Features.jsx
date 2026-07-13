import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

export default function Features() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const line1Segments = [
    { text: "Studio-grade workflows for visionary creators.", className: "text-primary font-normal" }
  ];
  
  const line2Segments = [
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 font-normal" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const features = [
    {
      type: "video",
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
      label: "Your creative canvas."
    },
    {
      type: "text",
      number: "01",
      title: "Project Storyboard.",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
      items: [
        "Visual timeline mapping",
        "Interactive moodboards",
        "Frame-by-frame pacing",
        "Real-time collaboration"
      ]
    },
    {
      type: "text",
      number: "02",
      title: "Smart Critiques.",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
      items: [
        "AI composition analysis",
        "Automated tone & contrast notes",
        "Seamless editing tool integrations"
      ]
    },
    {
      type: "text",
      number: "03",
      title: "Immersion Capsule.",
      icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
      items: [
        "Distraction-free notification silencing",
        "Procedural ambient soundscapes",
        "Automated focus schedule syncing"
      ]
    }
  ];

  return (
    <section id="features" className="min-h-screen bg-black relative py-16 px-4 md:py-24 md:px-6 flex flex-col justify-between select-none">
      {/* Background noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      {/* Header section */}
      <div className="max-w-6xl mx-auto w-full text-center flex flex-col gap-2 md:gap-3 mb-12 sm:mb-16 md:mb-20">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle segments={line1Segments} className="block w-full" />
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle segments={line2Segments} className="block w-full" />
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex items-center">
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] w-full"
        >
          {features.map((card, idx) => {
            if (card.type === "video") {
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] lg:h-full bg-zinc-900 border border-zinc-800/20 group"
                >
                  <video
                    src={card.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 z-10">
                    <p className="text-[#E1E0CC] text-sm sm:text-base font-medium tracking-wide">
                      {card.label}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[380px] sm:h-[420px] lg:h-full border border-zinc-800/10 hover:border-zinc-700/30 transition-colors duration-300"
              >
                {/* Top Section */}
                <div className="flex flex-col items-start w-full">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                  <div className="flex justify-between items-baseline mt-4 sm:mt-6 w-full">
                    <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">
                      {card.title}
                    </h3>
                    <span className="text-gray-500 font-mono text-sm">
                      {card.number}
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="flex flex-col gap-2.5 sm:gap-3.5 mt-5 sm:mt-6 w-full">
                    {card.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <Check className="text-primary w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-6 sm:mt-0">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium group/link transition-colors duration-300 hover:text-white mt-auto self-start"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
