import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { title, slug, description, thumbnail, tags } = project;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className="bg-[#212121] rounded-2xl overflow-hidden border border-zinc-800/10 hover:border-zinc-700/30 transition-all duration-300 flex flex-col group h-full select-none"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-zinc-800/20">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
        <div className="flex flex-col gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-primary/70 text-[9px] sm:text-[10px] uppercase tracking-wider bg-black/30 border border-zinc-800 px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight mt-1">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* View Project Link */}
        <div className="mt-6">
          <Link
            to={`/work/${slug}`}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium group/link transition-colors duration-300 hover:text-white"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
