import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../ui/Button';

export default function WorkShowcase({ projects }) {
  const [showAll, setShowAll] = useState(false);

  // Specific project features list matching the clean card highlights design
  const projectChecklists = {
    "inventory-crm": [
      "Real-time WebSockets Sync",
      "PostgreSQL Query Optimization",
      "Automated Transit Alerts",
      "Local-First Cache Model"
    ],
    "codebase-doc": [
      "AST Code Analysis Graph",
      "MDX Documentation Pipeline",
      "LangChain Agent Orchestration",
      "GitHub Workflow Integration"
    ],
    "digital-mentor": [
      "P2P WebRTC Video Streams",
      "Collaborative Whiteboard Room",
      "Real-Time Workspace Sync",
      "Firebase DB Integration"
    ],
    "edfinlo": [
      "Financial Debt Forecast Engine",
      "Plaid Banking API Connection",
      "Scraped Grant Classifications",
      "Responsive Tailwind Panels"
    ],
    "murph": [
      "Terminal CLI Emulator Box",
      "Hardware Monitor Dashboards",
      "Framer Motion Transitions",
      "Sandboxed Shell Integrations"
    ],
    "word-blog": [
      "Next.js Statically Served Pages",
      "MDX Markdown Parsing Layouts",
      "Zero-CLS Syntax Highlighter",
      "Lighthouse metrics (100/100)"
    ]
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="w-full flex flex-col gap-20 sm:gap-24 md:gap-32 select-none">
      
      {/* 1. STACKED VERTICAL LIST */}
      <div className="flex flex-col gap-20 sm:gap-24 md:gap-32 w-full">
        {displayedProjects.map((project, idx) => {
          const isEven = idx % 2 === 1;
          
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center w-full"
            >
              {/* Details Column (5 cols) - Alternates orders on desktop */}
              <div className={`lg:col-span-5 flex flex-col gap-5 sm:gap-6 text-left items-start ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idxTag) => (
                    <span
                      key={idxTag}
                      className="text-primary text-[9px] sm:text-[10px] uppercase tracking-wider bg-[#212121] border border-zinc-800/40 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#E1E0CC] font-bold text-2xl sm:text-3xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Checklist */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full border-t border-zinc-900/60 pt-5">
                  {(projectChecklists[project.slug] || project.tags).map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 sm:gap-3">
                      <Check className="text-primary w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Case Study Trigger */}
                <div className="mt-2">
                  <Button to={`/work/${project.slug}`}>
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Visual Thumbnail Column (7 cols) - Alternates orders on desktop */}
              <div className={`lg:col-span-7 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-zinc-900 border border-zinc-800/20 shadow-xl group">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* 2. VIEW MORE TOGGLE ACTION */}
      {projects.length > 3 && (
        <div className="flex justify-center w-full border-t border-zinc-900/60 pt-10 mt-4">
          <button
            onClick={() => {
              setShowAll(!showAll);
              // If expanding, don't scroll. If collapsing, scroll smoothly to the work section.
              if (showAll) {
                document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 text-primary hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wider cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View More Projects"}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
            ) : (
              <ChevronDown className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
            )}
          </button>
        </div>
      )}

    </div>
  );
}
