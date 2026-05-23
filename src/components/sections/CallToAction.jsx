import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, AtSign, FileText } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import { ctaData } from '../../data/proposalData';

export default function CallToAction() {
  return (
    <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary/[0.06] to-surface" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary-light border border-primary/20 mb-6">
            {ctaData.label}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {ctaData.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
            {ctaData.subtitle}
          </p>
        </RevealOnScroll>

        {/* Stats summary row */}
        <RevealOnScroll delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto border border-primary/20 rounded-2xl bg-primary/[0.04] p-6">
            {ctaData.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-text-dim font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA buttons */}
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.a
              href="#billing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50"
            >
              View pricing breakdown
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#product"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 text-white text-lg font-semibold rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
            >
              <FileText size={20} />
              Review full scope
            </motion.a>
          </div>
        </RevealOnScroll>

        {/* PDF download link */}
        <RevealOnScroll delay={0.5}>
          <a
            href="/Legacy_Scale_Proposal.pdf"
            download
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-surface-lighter/80 hover:bg-surface-lighter border border-border hover:border-primary/40 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
          >
            <Download size={16} />
            Download Full Proposal (PDF)
          </a>
        </RevealOnScroll>

        {/* Contact card */}
        <RevealOnScroll delay={0.6}>
          <div className="mt-12 max-w-md mx-auto bg-surface-light/80 backdrop-blur-lg border border-border rounded-2xl p-6">
            <p className="text-text-dim text-xs uppercase tracking-wider mb-3">Prepared By</p>
            <p className="text-white text-lg font-bold mb-4">Ruel Cabaluna Jr.</p>
            <div className="space-y-2">
              <a href="mailto:rcabalunajr@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-primary-light transition-colors text-sm">
                <Mail size={15} className="text-primary-light flex-shrink-0" />
                rcabalunajr@gmail.com
              </a>
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <AtSign size={15} className="text-primary-light flex-shrink-0" />
                <span>Discord: @rcabaluna</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.7}>
          <p className="text-text-dim text-sm mt-6">
            CONFIDENTIAL — Prepared for Client Review · Proposal v1.0
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
