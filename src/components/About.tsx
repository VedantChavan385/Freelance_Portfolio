export default function About() {
  const techStack = [
    'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion', 
    'Figma', 'UI/UX Design', 'SEO Optimization', 'Responsive Design'
  ];

  return (
    <section id="about" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Text Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/80 border border-gray-200/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600 mb-8 shadow-sm select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance contracts
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold tracking-tight leading-[1.1] text-gray-955 mb-5">
              Crafting digital experiences that speak for <span className="font-serif italic font-normal text-gray-955">themselves.</span>
            </h2>

            {/* Paragraph Bio */}
            <p className="text-gray-500 text-[14px] leading-relaxed font-semibold mb-5 max-w-xl">
              I am a freelance UI/UX designer and frontend developer specializing in building premium, responsive, and highly interactive websites. By bridging the gap between functional design and structured React development, I create websites that don't just look stunning, but perform exceptionally.
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed font-semibold mb-8 max-w-xl">
              I collaborate with creative startups, brands, and digital agencies to deliver custom portfolio pages, SaaS landing pages, and interactive brand templates. I focus on clean structure, pixel-perfect responsiveness, and smooth fluid animations.
            </p>

            {/* Tech Stack List */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
                Core Tech Stack & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 bg-white/80 border border-gray-200/20 rounded-lg text-[11px] font-semibold text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.005)] select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-gray-200/30 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                alt="Portrait of Elian Moreau" 
                className="w-full h-full object-cover grayscale object-top"
                loading="lazy"
              />
            </div>
            
            {/* Float badge overlay */}
            <div className="absolute -bottom-6 -right-4 bg-gray-950 border border-gray-800/80 text-white rounded-xl px-5 py-3.5 shadow-md hidden sm:block select-none">
              <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Location
              </span>
              <span className="block text-[11px] font-bold mt-1 text-white">
                Available Worldwide (Async)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
