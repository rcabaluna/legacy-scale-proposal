import { motion } from 'framer-motion';

export default function Card({ children, hover = true, className = '', onClick }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`bg-surface-light border border-border rounded-2xl p-6 transition-colors duration-300 hover:border-primary/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}
