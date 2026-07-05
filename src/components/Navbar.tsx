import { heroContent } from '../content/heroContent';

export default function Navbar() {
  const { brand, navLinks, contactLabel } = heroContent;

  return (
    <nav className="relative w-full flex items-center justify-between px-6 py-5 md:px-10 lg:px-14 bg-[#e9e9e9] z-50">
      {/* Wordmark */}
      <a
        href="/"
        className="text-xl font-bold tracking-tight text-gray-900 hover:text-black transition-colors"
      >
        {brand}
      </a>

      {/* Center nav links — hidden on mobile */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[15px] font-medium text-gray-500 hover:text-gray-900
                transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right section: Contact button + decorative dot */}
      <div className="flex items-center gap-5">
        <a
          href="#contact"
          className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white
            hover:bg-black hover:scale-[1.03] active:scale-100 transition-all duration-200"
        >
          {contactLabel}
        </a>

        {/* Decorative dot — far right */}
        <span
          className="hidden md:block h-3.5 w-3.5 rounded-full bg-gray-900 flex-shrink-0"
          aria-hidden="true"
        />
      </div>
    </nav>
  );
}
