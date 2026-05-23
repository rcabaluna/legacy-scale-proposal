import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { architectureData } from '../../data/proposalData';

const layerColors = {
  CLIENTS: { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30' },
  'CDN + DNS': { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/30' },
  'LOAD BALANCER': { bg: 'from-indigo-500/20 to-indigo-600/20', border: 'border-indigo-500/30' },
  COMPUTE: { bg: 'from-primary/20 to-accent/20', border: 'border-primary/30' },
  DATA: { bg: 'from-emerald-500/20 to-emerald-600/20', border: 'border-emerald-500/30' },
  'EXTERNAL SERVICES': { bg: 'from-amber-500/20 to-amber-600/20', border: 'border-amber-500/30' },
};

export default function Architecture() {
  const { layers } = architectureData;

  return (
    <section id="architecture" className="py-24 lg:py-32 bg-primary/[0.03] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={architectureData.label}
          title={architectureData.title}
          subtitle={architectureData.subtitle}
        />

        <RevealOnScroll>
          <div className="max-w-4xl mx-auto space-y-3">
            {layers.map((layer, i) => {
              const colors = layerColors[layer.label] || { bg: 'from-slate-500/20 to-slate-600/20', border: 'border-slate-500/30' };
              const colClass =
                layer.items.length === 1
                  ? 'grid-cols-1'
                  : layer.items.length <= 3
                    ? `grid-cols-1 sm:grid-cols-${layer.items.length}`
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

              return (
                <div key={layer.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-xl p-4`}>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim bg-surface/50 px-2 py-0.5 rounded">
                          {layer.label}
                        </span>
                      </div>
                      <div className={`grid gap-2 ${colClass}`}>
                        {layer.items.map((item) => (
                          <div key={item.name} className="bg-surface/60 backdrop-blur-sm rounded-lg p-3 text-center">
                            <p className="text-white text-sm font-semibold">{item.name}</p>
                            {item.detail && (
                              <p className="text-text-dim text-xs mt-1">{item.detail}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown size={14} className="text-text-dim" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
