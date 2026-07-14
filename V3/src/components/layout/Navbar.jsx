import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../lib/constants';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 whitespace-nowrap border-b border-x border-zinc-900/10">
        {NAV_LINKS.map((link) => {
          const isAnchor = link.href.startsWith('#');
          const isHome = location.pathname === '/';
          
          return (
            <Link
              key={link.name}
              to={isAnchor && !isHome ? `/${link.href}` : link.href}
              className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              style={{
                color: 'rgba(225, 224, 204, 0.8)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E1E0CC'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
