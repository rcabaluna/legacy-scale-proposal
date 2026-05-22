export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-surface-lighter text-text-muted border-border',
    primary: 'bg-primary/10 text-primary-light border-primary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    danger: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
