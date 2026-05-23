import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { techStack } from '../../data/proposalData';

export default function TechStack() {
  return (
    <section id="stack" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology"
          title="Production-grade stack."
          subtitle="Every tool chosen for long-term maintainability, developer velocity, and scalability. No experiments."
        />

        <RevealOnScroll>
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {techStack.map((item, i) => (
              <motion.div
                key={item.layer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-light border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <span className="text-text-dim text-xs font-medium uppercase tracking-wider">
                  {item.layer}
                </span>
                <p className="text-white text-sm font-medium mt-1">{item.tech}</p>
                <p className="text-text-muted text-xs mt-2">{item.reason}</p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
