import { motion } from 'framer-motion';
import { claudeCodeData } from '../../data/proposalData';
import SectionHeader from '../ui/SectionHeader';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function ClaudeCode() {
  return (
    <section
      id="claude-code"
      className="relative py-24 md:py-32 bg-gradient-to-br from-sky-500/[0.04] to-transparent border-t border-sky-500/15"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge={claudeCodeData.label}
          title={claudeCodeData.title}
          subtitle={claudeCodeData.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column — Phase Savings */}
          <div className="flex flex-col gap-4">
            {claudeCodeData.phases.map((phase, i) => (
              <RevealOnScroll key={phase.name} delay={i * 0.05}>
                <div className="bg-sky-500/[0.06] border border-sky-500/15 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="font-medium text-text-primary flex-1 text-sm">
                    {phase.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="bg-surface-lighter text-text-dim line-through text-xs px-2.5 py-1 rounded-md">
                      {phase.before}
                    </span>
                    <span className="bg-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-md font-medium">
                      {phase.after}
                    </span>
                    <span className="text-emerald-400 text-xs font-semibold min-w-[52px] text-right">
                      {phase.saved}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right Column — Impact Card */}
          <RevealOnScroll delay={0.15} variant="slideRight">
            <div className="bg-surface-light border border-sky-500/20 rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                How Claude Code accelerates delivery
              </h3>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-sky-500/[0.08] border border-sky-500/15 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-sky-400">
                    {claudeCodeData.stats.weeksSaved}
                  </div>
                  <div className="text-xs text-text-muted mt-1">Weeks saved</div>
                </div>
                <div className="bg-sky-500/[0.08] border border-sky-500/15 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-sky-400">
                    {claudeCodeData.stats.hoursSaved}
                  </div>
                  <div className="text-xs text-text-muted mt-1">Hours saved</div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 flex-1">
                {claudeCodeData.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-2 text-sm text-text-muted"
                  >
                    <span className="shrink-0 mt-0.5">⚡</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
