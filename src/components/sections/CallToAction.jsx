import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageSquare, FileCheck, Download, AtSign } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const steps = [
  { icon: FileCheck, title: 'Review & Approve', description: 'Review this proposal, ask questions, request adjustments.' },
  { icon: MessageSquare, title: 'Kickoff Call', description: 'Align on scope, timeline, and communication cadence.' },
  { icon: Mail, title: 'Development Begins', description: 'Phase 0 starts. First deliverable within 3 weeks.' },
];

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
            Ready to Build?
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-white">Let's Build </span>
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Something Extraordinary
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
            This platform ships complete — all 11 modules, multi-tenant architecture, Claude AI toolkit, and production deployment in 26 weeks.
          </p>
        </RevealOnScroll>

        {/* Next steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.title} delay={0.3 + i * 0.1}>
              <div className="bg-surface-light/80 backdrop-blur-lg border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary-light" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xs text-text-dim font-medium">Step {i + 1}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.6}>
          <motion.a
            href="mailto:rcabalunajr@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50"
          >
            Let's Get Started
            <ArrowRight size={20} />
          </motion.a>
        </RevealOnScroll>

        <RevealOnScroll delay={0.65}>
          <a
            href="/Legacy_Scale_Proposal.pdf"
            download
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-surface-lighter/80 hover:bg-surface-lighter border border-border hover:border-primary/40 text-text-muted hover:text-white rounded-xl text-sm font-medium transition-all duration-300"
          >
            <Download size={16} />
            Download Full Proposal (PDF)
          </a>
        </RevealOnScroll>

        {/* Contact card */}
        <RevealOnScroll delay={0.7}>
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

        <RevealOnScroll delay={0.8}>
          <p className="text-text-dim text-sm mt-6">
            CONFIDENTIAL — Prepared for Client Review · Proposal v1.0
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
