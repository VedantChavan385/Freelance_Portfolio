import { useState } from 'react';
import { heroContent } from '../content/heroContent';
import SkillTag from './SkillTag';
import SpeechBubble from './SpeechBubble';

export default function Hero() {
  const { skillTags, speechBubbles, name, watermarkText, portraitSrc } = heroContent;

  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>(
    portraitSrc ? 'loading' : 'error'
  );

  // Greeting bubble text
  const greetingText = speechBubbles.find(b => b.position === 'left')?.text || 'Hey there, I am';
  // CTA button text
  const ctaText = speechBubbles.find(b => b.position === 'right')?.text || "Let's create something amazing!";

  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* ── DESKTOP & TABLET VIEWPORT (md and up) ─────────────────── */}
      <div className="hidden md:flex relative w-full ml-auto mr-auto max-w-[1440px] min-h-screen flex-col items-center justify-end px-4 md:px-12 pb-0">
        {/* Watermark "DESIGNER" — solid filled light gray like reference */}
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-[8%]
            text-7xl md:text-[11rem] lg:text-[15rem] xl:text-[17rem] font-black leading-none tracking-wider
            text-[#e0e0e0] select-none pointer-events-none z-0 whitespace-nowrap uppercase"
          aria-hidden="true"
        >
          {watermarkText}
        </span>

        {/* Relative Wrapper for Portrait, Tags & Bubbles */}
        <div className="relative z-10 w-[320px] md:w-[420px] lg:w-[480px] xl:w-[520px] flex-shrink-0 mt-6 md:mt-10">
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

          {/* Skill Tags — Left column */}
          <div className="hidden md:block">
            {skillTags.left.map((label, i) => (
              <SkillTag
                key={label}
                label={label}
                className={
                  i === 0
                    ? 'top-[18%] left-0 -translate-x-[105%] lg:-translate-x-[115%]'
                    : i === 1
                      ? 'top-[35%] left-0 -translate-x-[115%] lg:-translate-x-[130%]'
                      : 'top-[52%] left-0 -translate-x-[108%] lg:-translate-x-[120%]'
                }
              />
            ))}
          </div>

          {/* Skill Tags — Right column */}
          <div className="hidden md:block">
            {skillTags.right.map((label, i) => (
              <SkillTag
                key={label}
                label={label}
                className={
                  i === 0
                    ? 'top-[18%] right-0 translate-x-[105%] lg:translate-x-[115%]'
                    : i === 1
                      ? 'top-[35%] right-0 translate-x-[115%] lg:translate-x-[130%]'
                      : 'top-[52%] right-0 translate-x-[108%] lg:translate-x-[120%]'
                }
              />
            ))}
          </div>

          {/* Speech Bubbles */}
          <div className="hidden md:block">
            {speechBubbles.map((bubble) => (
              <SpeechBubble
                key={bubble.text}
                text={bubble.text}
                position={bubble.position}
                className={
                  bubble.position === 'left'
                    ? 'bottom-[2%] left-0 -translate-x-[15%] lg:-translate-x-[22%] z-20'
                    : 'bottom-[4%] right-0 translate-x-[15%] lg:translate-x-[22%] z-20'
                }
              />
            ))}
          </div>
        </div>

        {/* Name with gradient fade — bleeds off bottom like reference */}
        <h1
          className="relative z-10 w-full text-center font-black leading-[0.82] tracking-[-0.05em]
            text-[#0a0a0a]
            text-5xl md:text-[7rem] lg:text-[10rem] xl:text-[12rem]
            -mt-4 md:-mt-6 lg:-mt-10
            select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
            paddingBottom: '0.15em',
          }}
        >
          {name}
        </h1>
      </div>

      {/* ── MOBILE VIEWPORT (smaller than 768px) ──────────────────── */}
      <div className="flex md:hidden relative w-full flex-col items-center px-6 pt-8 pb-12 z-10 text-center">
        {/* Mobile Watermark "DESIGNER" (Low opacity background helper) */}
        <span
          className="absolute left-1/2 -translate-x-1/2 top-[10%]
            text-[14vw] font-black leading-none tracking-widest
            text-gray-900/5 select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          {watermarkText}
        </span>

        {/* 1. Portrait (Primary Focus, Moved significantly upward) */}
        <div className="relative z-10 w-[min(82vw,320px)] aspect-[4/5] flex-shrink-0 mt-4">
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
        <div className="relative z-20 mt-6 select-none flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-900 shrink-0 animate-ping" />
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-800 shadow-sm border border-gray-200/80">
            {greetingText}
          </span>
        </div>

        {/* 3. Heading (Centered, wrapping onto two lines naturally, proper spacing above/below, clamp size, tight leading) */}
        <h1
          className="relative z-20 w-full font-black leading-[0.9] tracking-[-0.04em] text-[#0a0a0a] text-[clamp(2.5rem,10.5vw,4.25rem)] mt-3 mb-6 select-none"
          style={{
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
        <div className="relative z-20 flex flex-wrap justify-center gap-2 max-w-[90vw] mx-auto mb-8">
          {[...skillTags.left, ...skillTags.right].map((label) => (
            <span
              key={label}
              className="rounded-full bg-[#e6e6e6] text-gray-700 select-none"
              style={{ padding: '8px 20px', fontSize: '13px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* 5. Primary CTA Button (View Projects / Let's Work Together) */}
        <div className="relative z-20 mt-2">
          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white
              hover:bg-black hover:scale-[1.03] active:scale-95 transition-all duration-200 min-h-[44px] inline-flex items-center justify-center shadow-md cursor-pointer"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
