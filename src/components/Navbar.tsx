import { useState, useEffect } from 'react';
import { heroContent } from '../content/heroContent';

export default function Navbar() {
  const { brand, navLinks, contactLabel } = heroContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize to desktop dimensions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="relative w-full flex items-center justify-between px-6 py-6 md:px-10 lg:px-14 bg-transparent z-50 animate-entrance" style={{ animationDelay: '50ms' }}>
        {/* Wordmark */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-gray-900 hover:text-black hover:scale-[1.02] active:scale-100 transition-premium duration-300 min-h-[44px] inline-flex items-center"
        >
          {brand}
        </a>

        {/* Center nav links — desktop only */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-medium text-gray-500 hover:text-gray-900
                  transition-premium duration-300 py-2 block"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right section: Contact button + decorative dot — desktop only */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white
              hover:bg-black hover:scale-[1.04] active:scale-95 transition-premium duration-300 min-h-[44px] flex items-center justify-center shadow-sm"
          >
            {contactLabel}
          </a>

          {/* Decorative dot — far right */}
          <span
            className="h-3.5 w-3.5 rounded-full bg-gray-900 flex-shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* Hamburger toggle button — visible on mobile/tablet */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white/95 text-gray-700 hover:text-gray-900 active:scale-95 transition-premium duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 z-50 cursor-pointer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            /* Close Icon */
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Menu Icon */
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Drawer Overlay Menu for Mobile/Tablet */}
      <div
        className={`fixed inset-0 bg-[#e9e9e9]/98 backdrop-blur-md z-45 flex flex-col items-center justify-center gap-8 px-6 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 list-none m-0 p-0 text-center">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="text-2xl font-semibold text-gray-800 hover:text-gray-900 transition-colors py-2 block min-h-[44px] min-w-[200px]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact button in Mobile Drawer */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="rounded-full bg-gray-900 px-10 py-3.5 text-lg font-medium text-white
            hover:bg-black active:scale-95 transition-premium duration-300 min-h-[44px] flex items-center justify-center shadow-lg"
        >
          {contactLabel}
        </a>
      </div>
    </>
  );
}
