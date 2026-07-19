export default function Input({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  error,
  className = '' 
}) {
  return (
    <div className={`flex flex-col gap-2 w-full text-left select-none ${className}`}>
      {label && (
        <label htmlFor={id} className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-[#101010] text-[#E1E0CC] border rounded-lg px-4 py-3 text-sm sm:text-base font-light placeholder-zinc-600 focus:outline-none transition-colors duration-300 ${
          error ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-primary/50'
        }`}
      />
      {error && <span className="text-red-500 text-xs mt-0.5">{error}</span>}
    </div>
  );
}
