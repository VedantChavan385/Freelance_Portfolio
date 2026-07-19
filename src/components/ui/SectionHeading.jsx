import Badge from './Badge';
import WordsPullUpMultiStyle from '../animations/WordsPullUpMultiStyle';
import WordsPullUp from '../animations/WordsPullUp';

export default function SectionHeading({ 
  badge, 
  title, 
  titleSegments,
  subtitle, 
  alignment = 'center',
  className = ''
}) {
  const isCenter = alignment === 'center';
  const alignClass = isCenter ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 sm:gap-4 max-w-4xl ${alignClass} ${className}`}>
      {badge && <Badge>{badge}</Badge>}
      
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95] md:leading-[0.9] tracking-tight">
        {titleSegments ? (
          <WordsPullUpMultiStyle segments={titleSegments} />
        ) : (
          title && <WordsPullUp text={title} />
        )}
      </div>

      {subtitle && (
        <p className="text-gray-400 font-light text-xs sm:text-sm md:text-base max-w-2xl mt-1 select-none">
          {subtitle}
        </p>
      )}
    </div>
  );
}
