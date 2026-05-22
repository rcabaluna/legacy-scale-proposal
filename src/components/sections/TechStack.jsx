import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Brain, Cloud } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { techStack } from '../../data/proposalData';

const tabs = [
  { key: 'frontend', label: 'Frontend', icon: Monitor },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'ai', label: 'AI Stack', icon: Brain },
  { key: 'infrastructure', label: 'Infrastructure', icon: Cloud },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  const renderTable = () => {
    const data = techStack[activeTab];
    if (!data) return null;

    if (activeTab === 'ai') {
      return (
        <div className="grid gap-4">
          {data.map((item, i) => (
            <motion.div
              key={item.component}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-text-dim text-sm font-medium min-w-[120px]">{item.component}</span>
                <span className="text-white font-semibold flex-1">{item.choice}</span>
                <span className="text-text-muted text-sm">{item.notes}</span>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === 'infrastructure') {
      return (
        <div className="grid gap-4">
          {data.map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-text-dim text-sm font-medium min-w-[120px]">{item.service}</span>
                <span className="text-white font-semibold flex-1">{item.component}</span>
                <span className="text-text-muted text-sm">{item.purpose}</span>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid gap-4">
        {data.map((item, i) => (
          <motion.div
            key={item.layer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="text-text-dim text-sm font-medium min-w-[120px]">{item.layer}</span>
              <span className="text-white font-semibold flex-1">{item.tech}</span>
              <span className="text-text-muted text-sm">{item.reason}</span>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="tech-stack" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology"
          title="Production-Proven Stack"
          subtitle="Every technology is production-proven, well-documented, and selected for scalability, developer velocity, and long-term maintainability."
        />

        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-surface-light text-text-muted hover:text-white border border-border hover:border-primary/30'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTable()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
