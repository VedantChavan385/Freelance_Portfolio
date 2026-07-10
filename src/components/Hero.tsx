import { useState } from 'react';
import { heroContent } from '../content/heroContent';
import SkillTag from './SkillTag';
import SpeechBubble from './SpeechBubble';

export default function Hero() {
  const { skillTags, speechBubbles, name, watermarkText, portraitSrc } = heroContent;

  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>(
    portraitSrc ? 'loading' : 'error'
  );

  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      {/* ── Container ─────────────────────────────────────── */}
      <div className="relative w-full mx-auto max-w-[1440px] min-h-[85vh] md:min-h-[92vh] flex flex-col items-center justify-end px-[clamp(16px,4vw,80px)] pb-4 md:pb-0">

        {/* ── Watermark "DESIGNER" ──────────────────────── */}
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-[8%] md:bottom-[2%]
            text-[clamp(4.5rem,20vw,17.5rem)] font-black leading-none tracking-tighter
            text-[#dadada] select-none pointer-events-none z-0 whitespace-nowrap"
          aria-hidden="true"
        >
          {watermarkText}
        </span>

        {/* ── Relative Wrapper for Portrait, Tags & Bubbles ── */}
        <div className="relative z-10 w-[260px] sm:w-[320px] md:w-[400px] lg:w-[440px] xl:w-[480px] flex-shrink-0 mt-8 md:mt-6">
          {/* Portrait Image */}
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
              {/* Loading placeholder */}
              {imgStatus === 'loading' && (
                <div className="absolute inset-0 bg-[#d5d5d5] animate-pulse rounded-lg" />
              )}
            </>
          ) : (
            <div className="w-full aspect-[4/5] bg-[#d5d5d5] rounded-lg" />
          )}

          {/* ── Skill Tags — Left column ─────────────────── */}
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

          {/* ── Skill Tags — Right column ────────────────── */}
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

          {/* ── Speech Bubbles ─────────────────────────────── */}
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

        {/* ── Name with gradient fade ────────────────────── */}
        <h1
          className="relative z-10 w-full text-center font-black leading-[0.85] tracking-[-0.06em]
            text-[#0a0a0a]
            text-[clamp(2.5rem,11.5vw,11rem)]
            -mt-[4vw] md:-mt-[3vw] lg:-mt-6 pb-2
            select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          }}
        >
          {name}
        </h1>

        {/* ── Mobile skill tags (stacked cleanly below name on small viewports) ────── */}
        <div className="flex md:hidden flex-wrap justify-center gap-2 mt-4 pb-6 px-4 z-20">
          {[...skillTags.left, ...skillTags.right].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full bg-white px-4 py-2
                text-xs font-medium text-gray-700 shadow-sm border border-gray-200/80"
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
