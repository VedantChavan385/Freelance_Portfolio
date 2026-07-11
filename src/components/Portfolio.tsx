import { useState } from 'react';
import { projects, projectCategories } from '../content/portfolioContent';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 bg-gray-200/80 rounded-full text-[11px] font-bold uppercase tracking-widest text-gray-600">
            Portfolio
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-[clamp(2.25rem,6vw,3.75rem)] font-bold tracking-tighter leading-[1.05] text-[#0a0a0a] max-w-2xl mx-auto mb-5">
          Curated <span className="font-serif italic font-normal text-gray-900">projects</span> you'll love.
        </h2>
        
        {/* Subtitle */}
        <p className="text-center text-gray-500 text-[clamp(0.875rem,1.4vw,1.1rem)] font-medium max-w-xl mx-auto mb-14">
          A selection of projects focused on clarity, usability, and meaningful, lasting positive impact worldwide.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-20">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-[22px] py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-sm scale-102'
                  : 'bg-white/80 hover:bg-white text-gray-600 border border-gray-200/55 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group block relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-gray-200/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                {/* Category Badge overlay */}
                <span className="absolute top-6 left-6 z-10 px-3.5 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-gray-700 uppercase tracking-widest shadow-sm">
                  {project.category}
                </span>
                
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Text metadata */}
              <div className="mt-6 pl-2">
                <h3 className="text-xl font-bold tracking-tight text-gray-950 group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-gray-500 leading-relaxed font-semibold">
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
