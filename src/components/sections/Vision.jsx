import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import GlowCard from '../ui/GlowCard';
import Badge from '../ui/Badge';
import { competitiveData, featureScope } from '../../data/proposalData';

export default function Vision() {
  return (
    <section id="vision" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Market Opportunity"
          title="Competitive Landscape"
          subtitle="Your platform synthesizes the best of four established players — and adds what none of them have."
        />

        {/* Competitive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {competitiveData.slice(0, -1).map((item, i) => (
            <RevealOnScroll key={item.platform} delay={i * 0.1}>
              <GlowCard className="h-full">
                <h3 className="text-lg font-bold text-white mb-3">{item.platform}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-text-dim uppercase tracking-wider mb-1">Core Strength</p>
                    <p className="text-sm text-text-muted">{item.strength}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-dim uppercase tracking-wider mb-1">Notable Gap</p>
                    <p className="text-sm text-red-400/80">{item.gap}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-medium text-text-dim uppercase tracking-wider mb-1">What You Take</p>
                    <p className="text-sm text-primary-light">{item.takes}</p>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>
          ))}

          {/* Your Platform - highlighted */}
          <RevealOnScroll delay={0.4}>
            <div className="relative h-full lg:col-span-3 md:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 blur-sm" />
              <div className="relative bg-surface-light border border-primary/30 rounded-2xl p-8 text-center">
                <Badge variant="primary" className="mb-3">Your Platform</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">The Synthesis</h3>
                <p className="text-text-muted max-w-xl mx-auto">
                  AI + LMS + Community + Gamification + White-Label — all in one platform with multi-tenant architecture. This is the opportunity.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Feature Scope */}
        <SectionHeader
          badge="Full Scope"
          title="Everything That Ships"
          subtitle="All features included. No capabilities deferred to post-launch."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureScope.map((feature, i) => (
            <RevealOnScroll key={feature.area} delay={i * 0.05}>
              <div className="bg-surface-light border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary-light" />
                  <h4 className="text-white font-semibold">{feature.area}</h4>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{feature.delivered}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
