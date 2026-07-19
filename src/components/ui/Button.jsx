import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  children, 
  href, 
  to, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  icon: Icon = ArrowRight
}) {
  const isPrimary = variant === 'primary';
  
  const baseStyle = isPrimary
    ? `group bg-primary text-black rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 transition-all duration-300 hover:gap-3 sm:hover:gap-4 font-medium text-sm sm:text-base border border-transparent select-none cursor-pointer ${className}`
    : `text-[#E1E0CC] bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 transition-colors duration-300 font-medium text-sm sm:text-base select-none cursor-pointer ${className}`;

  const renderContent = () => (
    <>
      <span>{children}</span>
      {isPrimary && (
        <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
          <Icon className="text-[#E1E0CC] w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </div>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyle} onClick={onClick}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyle} onClick={onClick}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button type={type} className={baseStyle} onClick={onClick}>
      {renderContent()}
    </button>
  );
}
