import { motion } from 'framer-motion';
import { Globe, Shield, Server, Database, Cpu, Layers, ArrowDown } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';

const architectureLayers = [
  {
    label: 'CLIENTS',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    items: [
      { name: 'Web Browser', detail: 'Subscriber / Admin' },
      { name: 'Mobile Browser', detail: 'Responsive / PWA' },
    ],
  },
  {
    label: 'CDN',
    color: 'from-cyan-500/20 to-cyan-600/20',
    borderColor: 'border-cyan-500/30',
    items: [
      { name: 'AWS CloudFront', detail: 'Global Edge Network · SSL/TLS · WAF · S3 Static Assets' },
    ],
  },
  {
    label: 'LOAD BALANCER',
    color: 'from-indigo-500/20 to-indigo-600/20',
    borderColor: 'border-indigo-500/30',
    items: [
      { name: 'Application Load Balancer', detail: 'Health Checks · SSL Termination · Path-Based Routing' },
    ],
  },
  {
    label: 'COMPUTE',
    color: 'from-primary/20 to-accent/20',
    borderColor: 'border-primary/30',
    items: [
      { name: 'Next.js Frontend', detail: 'ECS Fargate · Tailwind · ShadCN · Zustand' },
      { name: 'NestJS API Server', detail: 'ECS Fargate · REST · WebSocket · SSE · Prisma' },
      { name: 'BullMQ Workers', detail: 'ECS Fargate · AI Jobs · Email · Video · Gamification' },
    ],
  },
  {
    label: 'DATA',
    color: 'from-emerald-500/20 to-emerald-600/20',
    borderColor: 'border-emerald-500/30',
    items: [
      { name: 'RDS PostgreSQL', detail: 'Multi-AZ · Users · Courses · AI Logs · Tenants' },
      { name: 'ElastiCache Redis', detail: 'Sessions · Queues · Leaderboard · Rate Limits' },
      { name: 'AWS S3 + CloudFront', detail: 'Uploads · Thumbnails · AI Exports' },
    ],
  },
  {
    label: 'EXTERNAL SERVICES',
    color: 'from-amber-500/20 to-amber-600/20',
    borderColor: 'border-amber-500/30',
    items: [
      { name: 'Anthropic', detail: 'Claude API · AI Toolkit' },
      { name: 'Stripe', detail: 'Billing · Subscriptions' },
      { name: 'Mux', detail: 'Video · LMS Streaming' },
      { name: 'Clerk', detail: 'Auth · Identity · SSO' },
      { name: 'Resend', detail: 'Email · Transactional' },
      { name: 'Google Cal', detail: 'Calendar · Event Sync' },
      { name: 'Sentry', detail: 'Monitoring · Errors' },
    ],
  },
];

const flows = [
  {
    title: 'Multi-Tenant Request Flow',
    steps: [
      'User visits tenant1.platform.com',
      'CloudFront resolves wildcard cert (*.platform.com)',
      'NestJS TenantMiddleware extracts subdomain "tenant1"',
      'DB lookup: SELECT * FROM tenants WHERE subdomain = \'tenant1\'',
      'Tenant context injected into request: tenantId, theme, plan, features',
      'All downstream queries scoped: WHERE tenant_id = tenantId',
      'Response rendered with tenant branding (logo, colors, custom domain)',
    ],
  },
  {
    title: 'AI Request Lifecycle',
    steps: [
      'User submits: product description, target audience, platform',
      'POST /api/ai/ad-copy — Zod schema validation',
      'Rate limit check (Redis): user daily limit + tenant monthly cap',
      'Subscription check: does this user\'s plan include this tool?',
      'Prompt loaded from tenant-specific template (or platform default)',
      'Streaming request to Anthropic Claude API',
      'SSE streams tokens to browser in real time',
      'On complete: log usage (tokens, cost, user, tenant) to DB',
    ],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="System Design"
          title="Architecture Overview"
          subtitle="A layered, cloud-native architecture built for multi-tenancy, real-time AI streaming, and horizontal scaling."
        />

        {/* Layered architecture diagram */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto mb-24 space-y-3">
            {architectureLayers.map((layer, i) => (
              <div key={layer.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`bg-gradient-to-r ${layer.color} border ${layer.borderColor} rounded-xl p-4`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim bg-surface/50 px-2 py-0.5 rounded">{layer.label}</span>
                    </div>
                    <div className={`grid gap-2 ${layer.items.length === 1 ? 'grid-cols-1' : layer.items.length <= 3 ? `grid-cols-1 sm:grid-cols-${layer.items.length}` : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}`}>
                      {layer.items.map((item) => (
                        <div key={item.name} className="bg-surface/60 backdrop-blur-sm rounded-lg p-3 text-center">
                          <p className="text-white text-sm font-semibold">{item.name}</p>
                          <p className="text-text-dim text-xs mt-1">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {i < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown size={14} className="text-text-dim" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Request flows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flows.map((flow, fi) => (
            <RevealOnScroll key={flow.title} delay={fi * 0.2}>
              <div className="bg-surface-light border border-border rounded-2xl p-6 h-full">
                <h3 className="text-lg font-bold text-white mb-5">{flow.title}</h3>
                <div className="space-y-3">
                  {flow.steps.map((step, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs text-primary-light font-medium">
                        {si + 1}
                      </span>
                      <p className="text-text-muted text-sm leading-relaxed">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
