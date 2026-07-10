import { useState, useEffect } from 'react';
import { heroContent } from '../content/heroContent';
import SkillTag from './SkillTag';
import SpeechBubble from './SpeechBubble';

export default function Hero() {
  const { skillTags, speechBubbles, name, watermarkText, portraitSrc } = heroContent;

  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>(
    portraitSrc ? 'loading' : 'error'
  );

  // Mouse Parallax coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disable parallax on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Greeting bubble text
  const greetingText = speechBubbles.find(b => b.position === 'left')?.text || 'Hello, my name is';
  // CTA button text
  const ctaText = speechBubbles.find(b => b.position === 'right')?.text || "Let's work together!";

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* ── DESKTOP & TABLET VIEWPORT (md and up) ─────────────────── */}
      <div className="hidden md:flex relative w-full mx-auto max-w-[1440px] min-h-[clamp(85vh,90vh,92vh)] flex-col items-center justify-end px-[clamp(16px,4vw,80px)] pb-[clamp(1rem,3vh,2rem)]">
        
        {/* Watermark "DESIGNER" (Awwwards-style printed backdrop) */}
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-[clamp(1.5%,2vw,4%)]
            text-[clamp(4.5rem,20vw,17.5rem)] font-black leading-none tracking-[0.14em]
            text-[#dadada]/35 select-none pointer-events-none z-0 whitespace-nowrap animate-entrance"
          style={{ 
            animationDelay: '100ms',
            transform: `translate(calc(-50% + ${mousePos.x * 6}px), ${mousePos.y * 6}px)` 
          }}
          aria-hidden="true"
        >
          {watermarkText}
        </span>

        {/* Relative Wrapper for Portrait, Tags & Bubbles (Upscaled & Translated Upwards) */}
        <div 
          className="relative z-10 w-[clamp(270px,32vw+11.5rem,540px)] flex-shrink-0 mt-[clamp(1rem,2vw,1.5rem)] -translate-y-6 transition-premium duration-500 animate-entrance"
          style={{ 
            animationDelay: '250ms',
            transform: `translate(${mousePos.x * 12}px, calc(-24px + ${mousePos.y * 12}px))` 
          }}
        >
          {imgStatus !== 'error' ? (
            <>
              <img
                src={portraitSrc}
                alt={`Portrait of ${name}`}
                onLoad={() => setImgStatus('loaded')}
                onError={() => setImgStatus('error')}
                className="relative w-full h-auto object-cover object-top grayscale transition-opacity duration-500"
                style={{
                  opacity: imgStatus === 'loaded' ? 1 : 0,
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 98%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 98%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                }}
                draggable={false}
              />
              {imgStatus === 'loading' && (
                <div className="absolute inset-0 bg-[#d5d5d5] animate-pulse rounded-lg" />
              )}
            </>
          ) : (
            <div className="w-full aspect-[4/5] bg-[#d5d5d5] rounded-lg" />
          )}

          {/* Skill Tags — Left column (Asymmetric placement, tiny rotations, independent parallax) */}
          <div className="hidden md:block">
            {skillTags.left.map((label, i) => {
              const rotation = i === 0 ? -2 : i === 1 ? 1.5 : -1;
              const hoverTranslate = i === 0 ? -14 : i === 1 ? 16 : -10;
              return (
                <SkillTag
                  key={label}
                  label={label}
                  style={{
                    transform: `translate(${mousePos.x * hoverTranslate}px, ${mousePos.y * hoverTranslate}px) rotate(${rotation}deg)`
                  }}
                  className={
                    i === 0
                      ? 'top-[16%] left-0 -translate-x-[110%]'
                      : i === 1
                        ? 'top-[35%] left-[8px] -translate-x-[125%]'
                        : 'top-[54%] left-[-4px] -translate-x-[118%]'
                  }
                />
              );
            })}
          </div>

          {/* Skill Tags — Right column (Asymmetric placement, tiny rotations, independent parallax) */}
          <div className="hidden md:block">
            {skillTags.right.map((label, i) => {
              const rotation = i === 0 ? 2.5 : i === 1 ? -1.5 : 1;
              const hoverTranslate = i === 0 ? 18 : i === 1 ? -12 : 14;
              return (
                <SkillTag
                  key={label}
                  label={label}
                  style={{
                    transform: `translate(${mousePos.x * hoverTranslate}px, ${mousePos.y * hoverTranslate}px) rotate(${rotation}deg)`
                  }}
                  className={
                    i === 0
                      ? 'top-[18%] right-[-6px] translate-x-[112%]'
                      : i === 1
                        ? 'top-[33%] right-[10px] translate-x-[128%]'
                        : 'top-[50%] right-[-2px] translate-x-[116%]'
                  }
                />
              );
            })}
          </div>

          {/* Speech Bubbles (Visual offsets, independent parallax) */}
          <div className="hidden md:block">
            {speechBubbles.map((bubble, i) => {
              const hoverTranslate = i === 0 ? 8 : -14;
              return (
                <SpeechBubble
                  key={bubble.text}
                  text={bubble.text}
                  position={bubble.position}
                  style={{
                    transform: `translate(${mousePos.x * hoverTranslate}px, ${mousePos.y * hoverTranslate}px)`
                  }}
                  className={
                    bubble.position === 'left'
                      ? 'bottom-[2%] left-0 -translate-x-[15%] lg:-translate-x-[22%] z-20 animate-entrance'
                      : 'bottom-[4%] right-0 translate-x-[15%] lg:translate-x-[22%] z-20 animate-entrance'
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Name with gradient fade (Polished line-height, spacing, and letter tracking) */}
        <h1
          className="relative z-10 w-full text-center font-black leading-[0.82] tracking-[-0.07em]
            text-[#0a0a0a]
            text-[clamp(2.5rem,11.5vw,11rem)]
            -mt-[clamp(1rem,2.8vw,1.75rem)] pb-2
            select-none animate-entrance"
          style={{
            animationDelay: '550ms',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        >
          {name}
        </h1>
      </div>

      {/* ── MOBILE VIEWPORT (smaller than 768px) ──────────────────── */}
      <div className="flex md:hidden relative w-full flex-col items-center px-6 pt-8 pb-12 z-10 text-center animate-entrance" style={{ animationDelay: '250ms' }}>
        {/* Mobile Watermark "DESIGNER" (Low opacity backdrop, animate load) */}
        <span
          className="absolute left-1/2 -translate-x-1/2 top-[10%]
            text-[14vw] font-black leading-none tracking-widest
            text-gray-900/5 select-none pointer-events-none z-0 animate-entrance"
          style={{ animationDelay: '100ms' }}
          aria-hidden="true"
        >
          {watermarkText}
        </span>

        {/* 1. Portrait (Primary Focus, Moved significantly upward) */}
        <div className="relative z-10 w-[min(82vw,320px)] aspect-[4/5] flex-shrink-0 mt-4 animate-entrance" style={{ animationDelay: '250ms' }}>
          {imgStatus !== 'error' ? (
            <>
              <img
                src={portraitSrc}
                alt={`Portrait of ${name}`}
                onLoad={() => setImgStatus('loaded')}
                onError={() => setImgStatus('error')}
                className="relative w-full h-auto object-cover object-top grayscale transition-opacity duration-500"
                style={{
                  opacity: imgStatus === 'loaded' ? 1 : 0,
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 98%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 98%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                }}
                draggable={false}
              />
              {imgStatus === 'loading' && (
                <div className="absolute inset-0 bg-[#d5d5d5] animate-pulse rounded-lg" />
              )}
            </>
          ) : (
            <div className="w-full h-full bg-[#d5d5d5] rounded-lg" />
          )}
        </div>

        {/* 2. Greeting Badge */}
        <div className="relative z-20 mt-6 select-none flex items-center justify-center gap-2 animate-entrance" style={{ animationDelay: '400ms' }}>
          <span className="h-2 w-2 rounded-full bg-gray-900 shrink-0 animate-ping" />
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60">
            {greetingText}
          </span>
        </div>

        {/* 3. Heading (Centered, wrapping onto two lines naturally, proper spacing, leading) */}
        <h1
          className="relative z-20 w-full font-black leading-[0.9] tracking-[-0.04em] text-[#0a0a0a] text-[clamp(2.5rem,10.5vw,4.25rem)] mt-3 mb-6 select-none animate-entrance"
          style={{
            animationDelay: '550ms',
            maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
          }}
        >
          {name.split(' ').map((word, index) => (
            <span key={word} className={index > 0 ? "block" : ""}>
              {word}
            </span>
          ))}
        </h1>

        {/* 4. Skill Tags (Flex wrap, gap, equal padding, never overflow, center align) */}
        <div className="relative z-20 flex flex-wrap justify-center gap-2 max-w-[90vw] mx-auto mb-8 animate-entrance" style={{ animationDelay: '700ms' }}>
          {[...skillTags.left, ...skillTags.right].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full bg-white px-4 py-2
                text-xs font-semibold text-gray-600 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60 select-none"
            >
              {label}
            </span>
          ))}
        </div>

        {/* 5. Primary CTA Button (View Projects / Let's Work Together) */}
        <div className="relative z-20 mt-2 animate-entrance" style={{ animationDelay: '850ms' }}>
          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white
              hover:bg-black hover:scale-[1.04] active:scale-95 transition-premium duration-300 min-h-[44px] inline-flex items-center justify-center shadow-md cursor-pointer"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
