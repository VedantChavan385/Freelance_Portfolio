import { services, servicesMarquee } from '../content/portfolioContent';

export default function Services() {
  // Custom SVG icon renderer based on iconName
  const renderIcon = (name: string) => {
    const baseClass = "w-5.5 h-5.5 text-white";
    switch (name) {
      case 'web':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
        );
      case 'app':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h9" />
          </svg>
        );
      case 'branding':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h.008v.008h-.008v-.008ZM12 18.75h.008v.008H12v-.008ZM7.5 18.75h.008v.008H7.5v-.008Zm9-3h.008v.008h-.008v-.008ZM12 15.75h.008v.008H12v-.008Zm-4.5 0h.008v.008H7.5v-.008Zm9-3h.008v.008h-.008v-.008ZM12 12.75h.008v.008H12v-.008Zm-4.5 0h.008v.008H7.5v-.008Zm9-3h.008v.008h-.008v-.008ZM12 9.75h.008v.008H12V9.75Zm-4.5 0h.008v.008H7.5V9.75Zm9-3h.008v.008h-.008v-.008ZM12 6.75h.008v.008H12V6.75Zm-4.5 0h.008v.008H7.5V6.75ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        );
      case 'illustration':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a1 1 0 111.414 1.414l-9.37 9.37a1 1 0 01-.707.293H8.5v-.707a1 1 0 01.293-.707l.737-.737Zm0 0L8.5 17.5h1l.03-.03a1 1 0 01-.707-.293l-.737-.737v-.707a1 1 0 01.293-.707l.737-.737Zm0 0L17.5 5.5l1 1-9 9m-1-1v-1l-1 1 1 1Zm-5.5 8H3.5a1.5 1.5 0 0 1-1.5-1.5V17.5a1.5 1.5 0 0 1 1.5-1.5H5.5a1.5 1.5 0 0 1 1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5Z" />
          </svg>
        );
      case 'motion':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9" />
          </svg>
        );
      case 'logo':
        return (
          <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m0 0A9 9 0 0 0 3 12c0 1.29.271 2.518.757 3.633m0 0a8.997 8.997 0 0 0 7.843 4.582M19.5 15.633A8.997 8.997 0 0 0 12 21m0-18a8.997 8.997 0 0 1 7.5 3.633" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-28 bg-[#efefef] text-gray-900 border-t border-gray-200/50">
      <div className="max-w-[1200px] w-[88vw] ml-auto mr-auto px-4">
        {/* Section Heading Tag */}
        <div className="mb-4">
          <span className="px-2.5 py-0.5 bg-gray-200/60 rounded-full text-[11px] font-semibold text-gray-600 tracking-tight select-none">
            Services
          </span>
        </div>

        {/* Section Intro Area (Two column-like align-end layout) */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <h2 className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold tracking-tight leading-[1.1] text-gray-950 max-w-xl">
            How I can help bring ideas to <span className="font-serif italic font-normal text-gray-950">life.</span>
          </h2>
          <p className="text-gray-500 font-semibold text-[clamp(0.85rem,1.3vw,1rem)] leading-relaxed lg:max-w-[340px] lg:mb-1">
            Focused solutions to design better products and meaningful user experiences.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-white/80 border border-gray-200/20 rounded-2xl p-8 pb-9 relative transition-all duration-300 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] group"
            >
              {/* Icon top-right (overlapping borders) */}
              <div className="absolute -top-4 -right-4 w-9 h-9 bg-gray-950 text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-black group-hover:scale-105 z-10">
                {renderIcon(service.iconName)}
              </div>

              {/* Card Meta details */}
              <div className="pt-2">
                <h3 className="text-[17px] font-bold tracking-tight text-gray-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-semibold leading-relaxed max-w-[90%]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scrolling Marquee Strip - Borderless Capsule Badges */}
        <div className="relative w-full overflow-hidden py-8 mt-16 select-none">
          <div className="flex w-max gap-4 whitespace-nowrap animate-marquee">
            {/* Seamless double loop for scrolling alignment */}
            {servicesMarquee.concat(servicesMarquee).map((item, idx) => (
              <span 
                key={idx} 
                className="px-4.5 py-1.5 bg-gray-200/45 text-gray-500 rounded-full text-[11px] font-semibold tracking-tight shadow-sm select-none pointer-events-none"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
