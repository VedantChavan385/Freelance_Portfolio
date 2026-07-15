import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkGrid({ projects }) {
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const isGrid1InView = useInView(grid1Ref, { once: true, margin: "-100px" });
  const isGrid2InView = useInView(grid2Ref, { once: true, margin: "-100px" });

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

  // Custom highlights checklist for each project to match Features card design
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

  const row1Projects = projects.slice(0, 3);
  const row2Projects = projects.slice(3, 6);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full">
      {/* Grid Row 1 */}
      <motion.div
        ref={grid1Ref}
        variants={containerVariants}
        initial="hidden"
        animate={isGrid1InView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] w-full"
      >
        {/* Video Card Row 1 */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] lg:h-full bg-zinc-900 border border-zinc-800/20 group"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-[#E1E0CC] text-sm sm:text-base font-medium tracking-wide">
              Engineered for speed.
            </p>
          </div>
        </motion.div>

        {/* Project Cards Row 1 */}
        {row1Projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[380px] sm:h-[420px] lg:h-full border border-zinc-800/10 hover:border-zinc-700/30 transition-colors duration-300"
          >
            <div className="flex flex-col items-start w-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
              />
              <div className="flex justify-between items-baseline mt-4 sm:mt-6 w-full">
                <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">
                  {project.title}
                </h3>
                <span className="text-gray-500 font-mono text-sm">
                  {`0${idx + 1}`}
                </span>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 sm:gap-3 mt-5 sm:mt-6 w-full">
                {(projectChecklists[project.slug] || project.tags).map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className="text-primary w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <Link
                to={`/work/${project.slug}`}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium group/link transition-colors duration-300 hover:text-white"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Grid Row 2 */}
      <motion.div
        ref={grid2Ref}
        variants={containerVariants}
        initial="hidden"
        animate={isGrid2InView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] w-full"
      >
        {/* Video Card Row 2 */}
        <motion.div
          variants={cardVariants}
          className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] lg:h-full bg-zinc-900 border border-zinc-800/20 group"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-[#E1E0CC] text-sm sm:text-base font-medium tracking-wide">
              Designed for impact.
            </p>
          </div>
        </motion.div>

        {/* Project Cards Row 2 */}
        {row2Projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-[380px] sm:h-[420px] lg:h-full border border-zinc-800/10 hover:border-zinc-700/30 transition-colors duration-300"
          >
            <div className="flex flex-col items-start w-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
              />
              <div className="flex justify-between items-baseline mt-4 sm:mt-6 w-full">
                <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">
                  {project.title}
                </h3>
                <span className="text-gray-500 font-mono text-sm">
                  {`0${idx + 4}`}
                </span>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 sm:gap-3 mt-5 sm:mt-6 w-full">
                {(projectChecklists[project.slug] || project.tags).map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className="text-primary w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <Link
                to={`/work/${project.slug}`}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium group/link transition-colors duration-300 hover:text-white"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
