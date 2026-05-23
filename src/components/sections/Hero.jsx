import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroData } from '../../data/proposalData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-8 pt-28 pb-16">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.18)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs font-medium text-primary-light tracking-[0.1em] uppercase border border-primary/40 rounded-full px-4 py-1.5 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
        Project Proposal — {heroData.client}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 font-[family-name:var(--font-heading)] text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6"
      >
        {heroData.headline}<br />
        <span className="text-primary-light">{heroData.headlineLine2}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-[clamp(1rem,2vw,1.2rem)] text-white/55 max-w-[600px] mx-auto mb-10 font-light"
      >
        {heroData.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 flex flex-col sm:flex-row border border-primary/30 rounded-xl overflow-hidden mb-10"
      >
        <div className="px-8 py-4 border-b sm:border-b-0 sm:border-r border-primary/30 text-center">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white block">{heroData.rate}</span>
          <span className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium">Per hour</span>
        </div>
        <div className="px-8 py-4 border-b sm:border-b-0 sm:border-r border-primary/30 text-center">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white block">{heroData.timeline}</span>
          <span className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium">Standard timeline</span>
        </div>
        <div className="px-8 py-4 border-b sm:border-b-0 sm:border-r border-primary/30 text-center">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-white block">{heroData.totalNTE}</span>
          <span className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium">Total NTE</span>
        </div>
        <div className="px-8 py-4 text-center">
          <span className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-emerald-400 block">{heroData.savings}</span>
          <span className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium">vs US dev rates</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 flex gap-4 justify-center"
      >
        <a href="#billing" className="px-8 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 hover:-translate-y-px transition-all">
          See pricing breakdown
        </a>
        <a href="#timeline" className="px-8 py-3 border border-white/20 text-white/70 rounded-lg text-sm font-medium hover:border-white/50 hover:text-white transition-all">
          View timeline
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mt-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-dim"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
