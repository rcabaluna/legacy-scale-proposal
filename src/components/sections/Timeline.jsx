import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { timelinePhases } from '../../data/proposalData';

const totalWeeks = 22;

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 lg:py-32 relative bg-primary/[0.03] border-y border-border/50">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Project timeline"
          title="22 weeks. Every feature. Nothing missing."
          subtitle="Seven phases. Working software at the end of every phase — not just at launch."
        />

        <div className="space-y-0">
          {timelinePhases.map((phase, i) => {
            const pct = (phase.duration / totalWeeks) * 100;

            return (
              <RevealOnScroll key={phase.phase} delay={i * 0.06}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 ${
                    i < timelinePhases.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  {/* Left column */}
                  <div className="sm:w-[200px] flex-shrink-0 space-y-2">
                    <p className="font-mono text-sm text-primary-light tracking-wide">
                      Week {phase.weeks}
                    </p>
                    <p className="text-white font-bold text-lg leading-tight">
                      {phase.name}
                    </p>

                    {/* Progress bar */}
                    <div className="space-y-1">
                      <div className="h-1.5 w-full rounded-full bg-border/40 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: phase.color }}
                        />
                      </div>
                      <p className="text-text-dim text-xs">
                        {phase.duration} {phase.duration === 1 ? 'week' : 'weeks'}
                      </p>
                    </div>
                  </div>

                  {/* Right column — feature pills */}
                  <div className="flex-1 flex flex-wrap gap-2 items-start content-start">
                    {phase.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block text-sm text-text-muted border border-border/60 rounded-lg px-3 py-1 bg-surface-light/50 whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
