import RevealOnScroll from './RevealOnScroll';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      {badge && (
        <RevealOnScroll>
          <p className="font-[family-name:var(--font-mono)] text-xs font-medium text-primary-light tracking-[0.12em] uppercase mb-3">{badge}</p>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.1}>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={0.2}>
          <p className="text-base text-text-muted/50 font-light max-w-[560px] mx-auto">{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  );
}
