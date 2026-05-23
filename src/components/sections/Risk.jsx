import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { riskData } from '../../data/proposalData';

const levelStyles = {
  high: {
    border: 'border-l-red-500',
    badge: 'bg-red-500/15 text-red-300',
  },
  med: {
    border: 'border-l-amber-500',
    badge: 'bg-amber-500/15 text-amber-300',
  },
  low: {
    border: 'border-l-emerald-500',
    badge: 'bg-emerald-500/15 text-emerald-400',
  },
};

const labelMap = { high: 'High', med: 'Med', low: 'Low' };

export default function Risk() {
  return (
    <section id="risk" className="py-24 lg:py-32 bg-primary/[0.03] border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={riskData.label}
          title={riskData.title}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {riskData.risks.map((risk, i) => {
            const style = levelStyles[risk.level];
            return (
              <RevealOnScroll key={risk.name} delay={i * 0.08}>
                <motion.div
                  className={`bg-surface-light rounded-xl p-5 border-l-4 ${style.border} h-full`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-white font-bold text-sm">{risk.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${style.badge}`}>
                      {labelMap[risk.level]}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {risk.mitigation}
                  </p>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
