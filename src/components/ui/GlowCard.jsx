import { motion } from 'framer-motion';

export default function GlowCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`relative group ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
      <div className="relative bg-surface-light border border-border rounded-2xl p-6 transition-colors duration-300 group-hover:border-primary/40">
        {children}
      </div>
    </motion.div>
  );
}
