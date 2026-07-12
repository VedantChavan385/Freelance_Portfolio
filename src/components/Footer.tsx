export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/vedant-chavan-479511291/' },
    { label: 'GitHub', url: 'https://github.com/VedantChavan385' },
    { label: 'Email', url: 'mailto:vedantchavan385@gmail.com' }
  ];

  const quickNav = [
    { label: 'Work', url: '#work' },
    { label: 'Services', url: '#services' },
    { label: 'Process', url: '#process' },
    { label: 'About', url: '#about' },
    { label: 'FAQ', url: '#faq' }
  ];

  return (
    <footer id="contact" className="py-20 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        
        {/* Call to Action Statement */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold tracking-tighter leading-none text-[#0a0a0a] max-w-3xl mb-8">
            Let's build something <span className="font-serif italic font-normal text-gray-900">scalable</span> together.
          </h2>
          
          {/* Big Premium Contact Link */}
          <a 
            href="mailto:vedantchavan385@gmail.com" 
            className="text-lg md:text-xl font-bold tracking-tight text-gray-900 hover:text-gray-500 pb-2 border-b-2 border-gray-950/80 transition-colors"
          >
            vedantchavan385@gmail.com
          </a>
        </div>

        {/* Links & Copyright Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-gray-200/60 items-start">
          
          {/* Brand Wordmark & Copyright info */}
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <span className="text-xl font-extrabold tracking-tight text-gray-955">
              Vedant
            </span>
            <span className="text-[12px] text-gray-400 font-semibold leading-normal">
              © {currentYear} Vedant Chavan. All rights reserved.<br />
              Portfolio Built with React + Tailwind v4.
            </span>
          </div>

          {/* Quick Nav Links column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {quickNav.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url}
                    className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links column */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Connect
            </h4>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.url}
                    className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
