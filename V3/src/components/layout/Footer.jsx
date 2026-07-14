import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="w-full bg-[#101010] py-12 px-4 md:py-16 md:px-6 mt-auto border-t border-zinc-900/30 select-none text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        {/* Left Side: Brand/Logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link to="/" className="text-xl font-medium tracking-tight text-[#E1E0CC] hover:opacity-85 transition-opacity">
            Prisma<span className="text-primary">*</span>
          </Link>
          <span className="text-gray-500 text-xs sm:text-sm font-light">
            © {new Date().getFullYear()} Prisma. All rights reserved.
          </span>
        </div>

        {/* Middle/Right: Nav links and social links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
          {/* Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-gray-400 hover:text-primary transition-colors duration-300 uppercase tracking-wider font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-wider">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-500 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
