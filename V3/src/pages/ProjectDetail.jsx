import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Check } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CTA from '../components/sections/CTA';
import { PROJECTS } from '../lib/data/projects';
import { VARIANTS } from '../lib/animations';
import useSEO from '../hooks/useSEO';

// Custom GitHub Icon matching the standard Lucide/Feather path
function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.title} - Project` : 'Project',
    description: project ? project.description : 'Read through the development case study.'
  });

  if (!project) {
    return (
      <PageWrapper>
        <div className="min-h-[70vh] flex flex-col justify-center bg-black text-center select-none pt-32">
          <Container>
            <SectionHeading
              badge="Error"
              title="Project Not Found"
              subtitle="The project case study you requested could not be found."
              alignment="center"
            />
            <div className="mt-8">
              <Button to="/work" className="mx-auto">
                Back to Portfolio
              </Button>
            </div>
          </Container>
        </div>
        <CTA />
      </PageWrapper>
    );
  }

  const {
    title,
    tags,
    overview,
    problem,
    solution,
    development,
    challenges,
    techStack,
    gallery,
    results,
    lessonsLearned,
    github,
    liveDemo,
    nextProject: nextSlug,
  } = project;

  const nextProject = PROJECTS.find((p) => p.slug === nextSlug);

  return (
    <PageWrapper>
      <div className="bg-black relative select-none pt-32 pb-16 min-h-screen">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-12 sm:gap-16 md:gap-24">
          {/* Back button */}
          <div className="self-start">
            <Link
              to="/work"
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors duration-300 font-medium uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col gap-6 md:gap-8">
            <SectionHeading
              badge="Case Study"
              title={title}
              alignment="left"
            />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-primary text-[10px] sm:text-xs uppercase tracking-wider bg-[#212121] border border-zinc-800/40 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Showcase Image */}
            <motion.div
              variants={VARIANTS.fadeIn}
              initial="hidden"
              animate="visible"
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800/20 shadow-xl"
            >
              <img
                src={project.thumbnail}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content Grid: 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-zinc-900/60 pt-10">
            {/* Sidebar info (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Roles & Tech</span>
                <div className="flex flex-col gap-1.5 mt-1">
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-light">
                      <Check className="text-primary w-3.5 h-3.5" />
                      <span>{tech.name} <span className="text-gray-600 text-[10px]">({tech.category})</span></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                {liveDemo && (
                  <Button href={liveDemo} className="w-full justify-center">
                    <span className="flex items-center gap-2">
                      <span>Visit Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </Button>
                )}
                {github && (
                  <Button href={github} variant="secondary" className="w-full justify-center">
                    <span className="flex items-center gap-2 justify-center">
                      <GithubIcon className="w-4 h-4 text-primary" />
                      <span>View Repository</span>
                    </span>
                  </Button>
                )}
              </div>
            </div>

            {/* Main Narrative Case study details (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10 sm:gap-12 md:gap-16">
              {/* Overview */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl md:text-2xl tracking-tight">Overview</h3>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">{overview}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900/60 pt-8 sm:pt-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">The Challenge</h3>
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">{problem}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">The Approach</h3>
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">{solution}</p>
                </div>
              </div>

              {/* Process & Challenges */}
              <div className="flex flex-col gap-8 border-t border-zinc-900/60 pt-8 sm:pt-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Development</h3>
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">{development}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Obstacles Faced</h3>
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">{challenges}</p>
                </div>
              </div>

              {/* Results metrics */}
              {results && results.length > 0 && (
                <div className="flex flex-col gap-6 border-t border-zinc-900/60 pt-8 sm:pt-10">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Outcomes & Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {results.map((res, idx) => (
                      <div key={idx} className="bg-[#101010] border border-zinc-900/40 rounded-xl p-5 flex flex-col gap-1.5 text-center">
                        <span className="text-primary font-bold text-lg sm:text-xl md:text-2xl">{res.value}</span>
                        <span className="text-[#E1E0CC] text-xs font-semibold">{res.metric}</span>
                        <span className="text-gray-500 text-[10px] sm:text-xs font-light">{res.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Grid */}
              {gallery && gallery.length > 0 && (
                <div className="flex flex-col gap-6 border-t border-zinc-900/60 pt-8 sm:pt-10">
                  <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gallery.map((img, idx) => (
                      <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/10">
                        <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Lessons Learned */}
              <div className="bg-[#101010] border border-zinc-900/40 rounded-xl p-6 sm:p-8 flex flex-col gap-3">
                <h4 className="text-primary text-[10px] sm:text-xs uppercase tracking-wider font-semibold">Key Takeaway</h4>
                <p className="text-[#E1E0CC] font-light text-xs sm:text-sm leading-relaxed italic">
                  "{lessonsLearned}"
                </p>
              </div>
            </div>
          </div>

          {/* Next Project Navigation */}
          {nextProject && (
            <div className="border-t border-zinc-900/60 pt-12 md:pt-16 mt-6 flex flex-col items-center gap-4 text-center">
              <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider font-medium">Up Next</span>
              <Link 
                to={`/work/${nextProject.slug}`}
                className="group flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#E1E0CC] group-hover:text-primary transition-colors duration-300">
                  {nextProject.title}
                </span>
                <span className="flex items-center gap-1 text-xs text-primary font-medium mt-1">
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          )}
        </Container>
      </div>

      <CTA />
    </PageWrapper>
  );
}
