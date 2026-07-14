export default function Container({ children, className = '', wide = false }) {
  return (
    <div className={`w-full mx-auto px-4 md:px-6 ${wide ? 'max-w-7xl' : 'max-w-6xl'} ${className}`}>
      {children}
    </div>
  );
}
