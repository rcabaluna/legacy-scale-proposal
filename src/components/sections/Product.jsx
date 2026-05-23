import { motion } from 'framer-motion';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { productData } from '../../data/proposalData';

const colorMap = {
  violet: 'bg-violet-500/15 text-violet-400',
  indigo: 'bg-primary/15 text-primary-light',
  green: 'bg-emerald-500/15 text-emerald-400',
  claude: 'bg-sky-500/15 text-sky-400',
  amber: 'bg-amber-500/15 text-amber-300',
  red: 'bg-red-500/15 text-red-300',
};

export default function Product() {
  return (
    <section id="product" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={productData.label}
          title={productData.title}
          subtitle={productData.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productData.features.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 0.1} variant="fadeUp">
              <motion.div
                className="bg-surface-light border border-border rounded-xl p-6 hover:border-primary/30 transition-colors h-full"
                whileHover={{ y: -2 }}
              >
                <div className={`w-12 h-12 rounded-xl ${colorMap[feature.color]} flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
