export default function Section({ children, id, className = '', background = 'bg-black' }) {
  return (
    <section id={id} className={`w-full ${background} ${className}`}>
      {children}
    </section>
  );
}
