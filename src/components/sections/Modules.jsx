import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { modules } from '../../data/proposalData';

const complexityVariant = {
  'Very High': 'violet',
  'High': 'success',
  'Medium': 'warning',
};

export default function Modules() {
  return (
    <section id="modules" className="py-24 lg:py-32 bg-primary/[0.03] border-t border-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Scope"
          title="Every module. All in scope."
          subtitle="10 modules. All features delivered. Nothing deferred."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {modules.map((module, i) => (
            <RevealOnScroll key={module.id} delay={i * 0.05}>
              <div className="bg-surface-light border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-base">{module.name}</h3>
                  <Badge variant={complexityVariant[module.complexity] || 'default'}>
                    {module.complexity}
                  </Badge>
                </div>

                <ul className="flex-1 space-y-1.5 mb-4">
                  {module.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-text-muted text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-dim flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="text-primary-light font-mono text-sm">{module.hours}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
