import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Layers } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { modules } from '../../data/proposalData';

const complexityVariant = {
  'Medium': 'success',
  'High': 'warning',
  'Very High': 'danger',
};

function ModuleCard({ module, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <RevealOnScroll delay={index * 0.05}>
      <motion.div
        layout
        className="bg-surface-light border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-light font-bold text-sm">{String(module.id).padStart(2, '0')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-lg mb-1">{module.name}</h3>
                <p className="text-text-muted text-sm line-clamp-2">{module.purpose}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant={complexityVariant[module.complexity] || 'default'}>{module.complexity}</Badge>
                  <div className="flex items-center gap-1 text-text-dim text-xs">
                    <Clock size={12} />
                    <span>{module.hours}</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-text-dim flex-shrink-0 mt-1"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface/60 rounded-xl p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-dim mb-2">Frontend Scope</p>
                  <p className="text-text-muted text-sm leading-relaxed">{module.frontend}</p>
                </div>
                <div className="bg-surface/60 rounded-xl p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-dim mb-2">Backend Scope</p>
                  <p className="text-text-muted text-sm leading-relaxed">{module.backend}</p>
                </div>
                <div className="bg-surface/60 rounded-xl p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-dim mb-2">Database Tables</p>
                  <p className="text-text-muted text-sm font-mono">{module.database}</p>
                </div>
                <div className="bg-surface/60 rounded-xl p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-dim mb-2">External APIs</p>
                  <p className="text-text-muted text-sm">{module.apis}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </RevealOnScroll>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Scope of Work"
          title="11 Production Modules"
          subtitle="Click any module to explore its full scope — frontend, backend, database, and external integrations."
        />

        <div className="space-y-4">
          {modules.map((module, i) => (
            <ModuleCard key={module.id} module={module} index={i} />
          ))}
        </div>

        {/* Total hours summary */}
        <RevealOnScroll>
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-text-muted text-sm mb-2">Total Estimated Development</p>
            <p className="text-3xl font-bold text-white">660 – 898 hours</p>
            <p className="text-text-dim text-sm mt-2">Across all 11 modules · Billed hourly at $16/hr</p>
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="text-text-muted text-sm leading-relaxed">
                Hours are estimates — with our friendly neighborhood <span className="text-primary-light font-medium">Claude</span> accelerating development,
                actual delivery will likely come in faster. AI-assisted coding, schema generation, prompt engineering,
                and test scaffolding significantly compress timelines across every module.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
