import { motion } from 'framer-motion';
import { DollarSign, Server, ExternalLink, FileText, Shield } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { investmentData } from '../../data/proposalData';

export default function Investment() {
  return (
    <section id="investment" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Investment"
          title="Transparent Pricing"
          subtitle="Hourly billing with weekly invoices and not-to-exceed caps per phase. No surprises."
        />

        {/* Main pricing card */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-lg" />
              <div className="relative bg-surface-light border border-primary/30 rounded-3xl p-8 md:p-12 text-center">
                <Badge variant="primary" className="mb-4">Billing Model</Badge>
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-extrabold text-white mb-2">$16<span className="text-2xl font-normal text-text-muted">/hr</span></p>
                  <p className="text-text-muted">USD · Invoiced weekly with itemized timesheet</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-surface/60 rounded-xl p-4">
                    <p className="text-text-dim text-xs uppercase tracking-wider mb-1">Total Investment</p>
                    <p className="text-xl font-bold text-white">{investmentData.estimatedRange}</p>
                  </div>
                  <div className="bg-surface/60 rounded-xl p-4">
                    <p className="text-text-dim text-xs uppercase tracking-wider mb-1">Timeline</p>
                    <p className="text-xl font-bold text-white">{investmentData.timeline}</p>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield size={16} className="text-primary-light" />
                    <p className="text-primary-light font-semibold text-sm">NTE Hour Cap Protection</p>
                  </div>
                  <p className="text-text-muted text-sm">{investmentData.nteCap}</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* AWS Costs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <RevealOnScroll>
            <div className="bg-surface-light border border-border rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Server size={20} className="text-primary-light" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AWS Infrastructure</h3>
                  <p className="text-text-dim text-xs">Monthly operating costs</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {investmentData.awsCosts.items.map((item) => (
                  <div key={item.service} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-text-muted text-sm">{item.service}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-white text-sm font-medium w-16 text-right">{item.mvp}</span>
                      <span className="text-text-dim text-sm w-16 text-right">{item.growth}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-white font-semibold">Total AWS</span>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-primary-light font-bold">{investmentData.awsCosts.mvp}</p>
                    <p className="text-text-dim text-[10px]">MVP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted font-bold">{investmentData.awsCosts.growth}</p>
                    <p className="text-text-dim text-[10px]">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="bg-surface-light border border-border rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ExternalLink size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Third-Party Services</h3>
                  <p className="text-text-dim text-xs">Client-owned operating costs</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {investmentData.thirdParty.map((item) => (
                  <div key={item.service} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="text-text-muted text-sm">{item.service}</span>
                    <span className="text-white text-sm font-medium">{item.cost}</span>
                  </div>
                ))}
              </div>

              <div className="bg-surface/60 rounded-xl p-4 mt-4">
                <p className="text-text-dim text-xs italic">
                  These are platform operating costs paid directly by the client to third-party providers. They are not part of development billing.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
