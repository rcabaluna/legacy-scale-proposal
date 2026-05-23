import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { databaseSchema } from '../../data/proposalData';

const columnColorMap = {
  pk: 'text-amber-300',
  fk: 'text-emerald-400',
  warning: 'text-red-400/70',
  success: 'text-emerald-400',
};

export default function Database() {
  return (
    <section id="database" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={databaseSchema.label}
          title={databaseSchema.title}
          subtitle={databaseSchema.subtitle}
        />

        {/* Relationship diagram */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto mb-16 bg-surface-light border border-border rounded-xl p-5 font-mono text-sm">
            {databaseSchema.relationships.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="leading-8"
              >
                <span className="text-primary-light">{r.from}</span>
                <span className="text-text-dim"> {r.rel} </span>
                <span className="text-emerald-400">{r.to}</span>
                {r.extra && <span className="text-text-dim"> {r.extra}</span>}
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Table cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {databaseSchema.tables.map((table, ti) => (
            <RevealOnScroll key={table.name} delay={ti * 0.03}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.04 }}
                className="bg-surface-light border border-border rounded-xl p-4 h-full"
              >
                <h3 className="font-mono font-bold text-primary-light mb-2">
                  {table.name}
                </h3>
                <ul className="space-y-0.5">
                  {table.columns.map((col, ci) => (
                    <li
                      key={ci}
                      className={`font-mono text-xs ${
                        col.type
                          ? columnColorMap[col.type] || 'text-text-dim'
                          : 'text-text-dim'
                      }`}
                    >
                      {col.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
