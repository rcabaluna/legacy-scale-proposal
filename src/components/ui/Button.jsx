import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
    secondary: 'bg-surface-lighter hover:bg-surface-lighter/80 text-text border border-border hover:border-primary/50',
    ghost: 'text-text-muted hover:text-white hover:bg-surface-lighter',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Comp href={href} onClick={onClick} className={cls}>
        {children}
      </Comp>
    </motion.div>
  );
}
