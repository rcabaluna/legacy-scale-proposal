import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Users, Palette, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import GlowCard from '../ui/GlowCard';
import { executiveData } from '../../data/proposalData';

const icons = [Zap, BarChart3, Shield, Users, Palette, CheckCircle2];

export default function ExecutiveOverview() {
  return (
    <section id="overview" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Executive Summary"
          title="What We're Building"
          subtitle={executiveData.summary}
        />

        <RevealOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6 text-center">
            <p className="text-text-muted leading-relaxed">{executiveData.differentiator}</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {executiveData.valueProps.map((prop, i) => {
            const Icon = icons[i];
            return (
              <RevealOnScroll key={prop.title} delay={i * 0.1} variant="fadeUp">
                <GlowCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{prop.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                </GlowCard>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Delivery model */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-light border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Phase-Gated Delivery</h3>
              <p className="text-text-muted leading-relaxed mb-4">{executiveData.delivery}</p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-primary-light font-semibold text-sm italic">{executiveData.allFeaturesIncluded}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
