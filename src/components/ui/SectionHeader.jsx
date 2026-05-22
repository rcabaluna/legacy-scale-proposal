import RevealOnScroll from './RevealOnScroll';
import Badge from './Badge';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-16 ${alignment}`}>
      {badge && (
        <RevealOnScroll>
          <Badge variant="primary" className="mb-4">{badge}</Badge>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-text-muted leading-relaxed">{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  );
}
