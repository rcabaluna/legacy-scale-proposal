import { motion } from 'framer-motion';
import { ArrowDown, Clock, DollarSign, Calendar, Download } from 'lucide-react';
import { heroData } from '../../data/proposalData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary-light border border-primary/20">
            Prepared for {heroData.client} · by Ruel Cabaluna Jr.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">Build the </span>
          <span className="bg-gradient-to-r from-primary-light via-accent to-primary bg-clip-text text-transparent">
            AI-Powered
          </span>
          <br />
          <span className="text-white">Platform of Tomorrow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-4"
        >
          {heroData.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-text-dim mb-12"
        >
          <span>Inspired by</span>
          {heroData.inspirations.map((name, i) => (
            <span key={name}>
              <span className="text-text-muted font-medium">{name}</span>
              {i < heroData.inspirations.length - 1 && <span className="mx-1 text-text-dim">·</span>}
            </span>
          ))}
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className="bg-surface-light/60 backdrop-blur-lg border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
            <DollarSign className="w-5 h-5 text-primary-light mb-3 mx-auto" />
            <p className="text-2xl font-bold text-white">{heroData.rate}</p>
            <p className="text-sm text-text-muted mt-1">Hourly Rate</p>
          </div>
          <div className="bg-surface-light/60 backdrop-blur-lg border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
            <Clock className="w-5 h-5 text-primary-light mb-3 mx-auto" />
            <p className="text-2xl font-bold text-white">{heroData.investment}</p>
            <p className="text-sm text-text-muted mt-1">Total Investment</p>
          </div>
          <div className="bg-surface-light/60 backdrop-blur-lg border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
            <Calendar className="w-5 h-5 text-primary-light mb-3 mx-auto" />
            <p className="text-2xl font-bold text-white">{heroData.timeline}</p>
            <p className="text-sm text-text-muted mt-1">To Production Launch</p>
          </div>
        </motion.div>

        {/* Download proposal button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 mb-16"
        >
          <a
            href="/Legacy_Scale_Proposal.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-lighter/80 hover:bg-surface-lighter border border-border hover:border-primary/40 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
          >
            <Download size={16} />
            Download Full Proposal (PDF)
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
      </div>
    </section>
  );
}
