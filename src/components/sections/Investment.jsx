import { motion } from 'framer-motion';
import { DollarSign, Receipt, TrendingDown } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { investmentData } from '../../data/proposalData';

export default function Investment() {
  return (
    <section id="billing" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={investmentData.label}
          title={investmentData.title}
          subtitle={investmentData.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column — Featured billing card */}
          <RevealOnScroll>
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-lg" />
              <div className="relative bg-surface-light border border-primary/30 rounded-3xl p-8 h-full flex flex-col">
                <Badge variant="primary" className="mb-6 self-start">Your rate</Badge>

                {/* Rate display */}
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                    {investmentData.rate}<span className="text-2xl font-normal text-text-muted">/hr</span>
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {investmentData.rateDescription}
                  </p>
                </div>

                {/* Phase NTE rows */}
                <div className="space-y-0 mb-6 flex-1">
                  {investmentData.phases.map((phase) => (
                    <div
                      key={phase.name}
                      className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0"
                    >
                      <span className="text-text-muted text-sm">{phase.name}</span>
                      <span className="text-white text-sm font-medium whitespace-nowrap ml-4">{phase.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Total NTE footer */}
                <div className="flex items-center justify-between pt-4 border-t border-primary/30">
                  <span className="text-white font-semibold">Total NTE</span>
                  <span className="text-2xl font-bold text-primary-light">{investmentData.totalNTE}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right column — Stacked cards */}
          <div className="flex flex-col gap-8">
            {/* Weekly billing process */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-surface-light border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Receipt size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Weekly Billing Process</h3>
                    <p className="text-text-dim text-xs">How invoicing works each week</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {investmentData.billingProcess.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary-light text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-text-muted text-sm leading-relaxed">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Cost comparison */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <TrendingDown size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Cost Comparison</h3>
                    <p className="text-text-dim text-xs">vs. US / AU developer rates</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2.5 border-b border-emerald-500/10">
                    <span className="text-text-muted text-sm">US/AU developer rate</span>
                    <span className="text-white text-sm font-medium">{investmentData.comparison.usDevRate}</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-emerald-500/10">
                    <span className="text-text-muted text-sm">This engagement</span>
                    <span className="text-white text-sm font-medium">{investmentData.comparison.thisEngagement}</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-emerald-400 text-sm font-semibold">Your savings</span>
                    <span className="text-emerald-400 text-lg font-bold">{investmentData.comparison.savings}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
