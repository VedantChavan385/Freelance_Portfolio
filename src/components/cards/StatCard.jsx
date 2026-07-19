import { motion } from 'framer-motion';

export default function StatCard({ item }) {
  const { number, label } = item;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      className="bg-[#101010] border border-zinc-900/40 rounded-xl p-6 flex flex-col gap-1 text-center justify-center select-none"
    >
      <span className="text-primary font-bold text-3xl sm:text-4xl md:text-5xl">{number}</span>
      <span className="text-gray-400 text-xs sm:text-sm font-light mt-1">{label}</span>
    </motion.div>
  );
}
