import { useState } from 'react';
import { projects, projectCategories } from '../content/portfolioContent';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-36 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      {/* Fix #13: Constrained container 1280px with proper padding */}
      <div className="w-[88vw] max-w-[1280px] ml-auto mr-auto px-8">

        {/* Fix #1 & #14: Centered heading lockup inside narrow max-width */}
        <div className="max-w-[900px] ml-auto mr-auto text-center">
          {/* Fix #2 & #15: Large heading, tight line-height, negative letter-spacing, heavy weight, font rendering */}
          <h2
            className="text-[clamp(64px,8vw,110px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-gray-950"
            style={{
              fontOpticalSizing: 'auto',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Curated <span className="font-serif italic font-normal">projects</span> you'll love.
          </h2>

          {/* Fix #3 & #4: Description — narrower, lighter, proper spacing */}
          <p className="max-w-[700px] ml-auto mr-auto mt-8 text-[#6f6f6f] text-[clamp(15px,1.2vw,17px)] font-medium leading-[1.5]">
            A selection of projects focused on clarity, usability, and meaningful,
            lasting positive impact worldwide.
          </p>
        </div>

        {/* Fix #4 & #5: Filter pills — generous spacing, pill shape, proper padding */}
        <div className="flex flex-wrap justify-center gap-[14px] mt-12 mb-10">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-[18px] py-2 rounded-full text-[15px] font-medium transition-all duration-200 cursor-pointer focus:outline-none select-none ${
                  isSelected
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white/80 text-gray-500 border border-gray-200/60 hover:bg-white hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Fix #6: Card grid — 32px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group block relative"
            >
              {/* Fix #7 & #8: Card — 24px radius, taller aspect ~5/4 */}
              <div className="relative rounded-3xl overflow-hidden bg-[#e8e8e8] border border-gray-200/15 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)]"
                style={{ aspectRatio: '1.2 / 1' }}
              >
                {/* Fix #10: Category badge — smaller, uppercase, tighter */}
                <span className="absolute top-5 left-5 z-10 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[11px] font-semibold text-gray-700 uppercase tracking-[0.08em] shadow-sm select-none pointer-events-none">
                  {project.category}
                </span>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Fix #9: Subtle white bottom fade overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(255,255,255,0.55), rgba(255,255,255,0.05))',
                  }}
                />
              </div>

              {/* Fix #11: Card text — larger title, grey subtitle */}
              <div className="mt-6 pl-1">
                <h3 className="text-[22px] font-bold tracking-tight text-gray-950 group-hover:text-black transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-[#666] font-medium leading-normal">
                  {project.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
