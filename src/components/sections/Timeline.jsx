import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, CheckCircle2, Zap, Clock } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { timelinePhases } from '../../data/proposalData';

const totalWeeks = 26;

const phaseColors = [
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-indigo-600',
  'from-violet-500 to-violet-600',
  'from-purple-500 to-purple-600',
  'from-fuchsia-500 to-fuchsia-600',
  'from-pink-500 to-pink-600',
  'from-emerald-500 to-emerald-600',
];

const phaseColorsAccelerated = [
  'from-blue-400 to-blue-500',
  'from-indigo-400 to-indigo-500',
  'from-violet-400 to-violet-500',
  'from-purple-400 to-purple-500',
  'from-fuchsia-400 to-fuchsia-500',
  'from-pink-400 to-pink-500',
  'from-emerald-400 to-emerald-500',
];

// Claude Code accelerated phases — roughly 30-40% faster
const acceleratedPhases = [
  { phase: 0, name: "Foundation & Infrastructure", weeks: "1–2", duration: 2, description: "Project setup, AWS infrastructure, CI/CD pipeline, design system, multi-tenant skeleton", milestone: null },
  { phase: 1, name: "Auth, Tenancy & Billing", weeks: "3–5", duration: 3, description: "Clerk multi-tenant auth, subdomain routing, Stripe subscriptions, tenant onboarding", milestone: "Subscribers can sign up, pick their tenant, and start paying — revenue flows from day one" },
  { phase: 2, name: "Video LMS", weeks: "6–8", duration: 3, description: "Full course management, Mux video upload/streaming, progress tracking, student experience", milestone: "Your first paid value is live — HD courses streaming, progress tracked, students learning" },
  { phase: 3, name: "AI Toolkit", weeks: "9–11", duration: 3, description: "Claude API integration, Ad Copy Generator, Content Builder, Coaching Agent with streaming", milestone: "The 'wow moment' ships — three Claude-powered AI tools streaming results in real time" },
  { phase: 4, name: "Calendar & Gamification", weeks: "12–14", duration: 3, description: "Event calendar with Google sync, points engine, streaks, badges, real-time leaderboard", milestone: "The retention flywheel activates — streaks, badges, leaderboards, and live events keep users coming back" },
  { phase: 5, name: "Admin, Analytics & Notifications", weeks: "15–16", duration: 2, description: "Admin panel, BI dashboard, notification system, tenant management", milestone: "Full operator control — manage users, content, AI prompts, and revenue from one dashboard" },
  { phase: 6, name: "Polish & Launch", weeks: "17–18", duration: 2, description: "QA, security audit, performance optimization, production deployment, monitoring", milestone: "Production launch — your complete platform is live, monitored, and ready for subscribers" },
];

const acceleratedTotalWeeks = 18;

function getStartWeek(weeksStr) {
  return parseInt(weeksStr.split('–')[0]) - 1;
}

export default function Timeline() {
  const [showAccelerated, setShowAccelerated] = useState(false);

  const activePhases = showAccelerated ? acceleratedPhases : timelinePhases;
  const activeTotal = showAccelerated ? acceleratedTotalWeeks : totalWeeks;
  const activeColors = showAccelerated ? phaseColorsAccelerated : phaseColors;

  return (
    <section id="timeline" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Development Roadmap"
          title="26-Week Journey to Launch"
          subtitle="Seven phases, each ending with a working deliverable you review and approve before the next begins."
        />

        {/* Toggle: Standard vs Claude Code Accelerated */}
        <RevealOnScroll>
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center bg-surface-light border border-border rounded-xl p-1 gap-1">
              <button
                onClick={() => setShowAccelerated(false)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  !showAccelerated
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                <Clock size={15} />
                Standard Estimate
              </button>
              <button
                onClick={() => setShowAccelerated(true)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  showAccelerated
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                <Zap size={15} />
                With Claude Code
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Claude Code callout */}
        <AnimatePresence>
          {showAccelerated && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Zap size={18} className="text-primary-light" />
                  <h3 className="text-white font-bold">Claude Code Accelerated Timeline</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  With Claude Code as a development partner, boilerplate generation, schema scaffolding, test writing,
                  prompt engineering, and code review happen at AI speed. This compresses the timeline by approximately
                  <span className="text-primary-light font-semibold"> 30% </span>
                  — from 26 weeks down to an estimated <span className="text-white font-semibold">18 weeks</span>.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-surface/40 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">~8</p>
                    <p className="text-text-dim text-xs">Weeks Saved</p>
                  </div>
                  <div className="bg-surface/40 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">30%</p>
                    <p className="text-text-dim text-xs">Faster Delivery</p>
                  </div>
                  <div className="bg-surface/40 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">18</p>
                    <p className="text-text-dim text-xs">Weeks to Launch</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gantt Chart - Desktop */}
        <RevealOnScroll>
          <div className="hidden lg:block mb-16">
            <div className="bg-surface-light border border-border rounded-2xl p-8 overflow-x-auto">
              {/* Week headers */}
              <div className="flex items-center mb-6">
                <div className="w-56 flex-shrink-0" />
                <div className="flex-1 flex">
                  {Array.from({ length: activeTotal }, (_, i) => (
                    <div key={i} className="flex-1 text-center">
                      <span className={`text-[10px] ${i % 4 === 0 ? 'text-text-muted' : 'text-text-dim/50'}`}>
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase bars */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={showAccelerated ? 'accelerated' : 'standard'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activePhases.map((phase, i) => {
                    const start = getStartWeek(phase.weeks);
                    const leftPercent = (start / activeTotal) * 100;
                    const widthPercent = (phase.duration / activeTotal) * 100;

                    return (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center mb-3 group"
                      >
                        <div className="w-56 flex-shrink-0 pr-4">
                          <p className="text-sm font-medium text-white truncate">Phase {phase.phase}</p>
                          <p className="text-xs text-text-dim truncate">{phase.name}</p>
                        </div>
                        <div className="flex-1 relative h-10">
                          {/* Background grid */}
                          <div className="absolute inset-0 flex">
                            {Array.from({ length: activeTotal }, (_, wi) => (
                              <div key={wi} className="flex-1 border-l border-border/30" />
                            ))}
                          </div>
                          {/* Phase bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${widthPercent}%` }}
                            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                            style={{ left: `${leftPercent}%` }}
                            className={`absolute top-1 bottom-1 bg-gradient-to-r ${activeColors[i]} rounded-lg flex items-center justify-center overflow-hidden ${showAccelerated ? 'shadow-lg shadow-primary/20' : ''}`}
                          >
                            <span className="text-white text-[10px] font-medium px-2 whitespace-nowrap">
                              W{phase.weeks}
                            </span>
                          </motion.div>
                          {/* Milestone marker */}
                          {phase.milestone && (
                            <div
                              style={{ left: `${leftPercent + widthPercent}%` }}
                              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                            >
                              <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-surface-light" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-text-dim">Milestone / Client Review</span>
                </div>
                {showAccelerated && (
                  <div className="flex items-center gap-2">
                    <Zap size={12} className="text-primary-light" />
                    <span className="text-xs text-primary-light">Claude Code accelerated</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mobile-friendly vertical timeline */}
        <div className="lg:hidden space-y-6 mb-16">
          {activePhases.map((phase, i) => (
            <RevealOnScroll key={`${showAccelerated}-${phase.phase}`} delay={i * 0.1}>
              <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-border">
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-r ${activeColors[i]} flex items-center justify-center`}>
                  <span className="text-white text-[10px] font-bold">{phase.phase}</span>
                </div>
                <div className="bg-surface-light border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{phase.name}</h4>
                    <Badge variant="default">W{phase.weeks}</Badge>
                  </div>
                  <p className="text-text-muted text-sm mb-2">{phase.description}</p>
                  {phase.milestone && (
                    <div className="flex items-center gap-2 text-emerald-400 text-xs mt-2 pt-2 border-t border-border">
                      <Flag size={12} />
                      <span>{phase.milestone}</span>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Phase milestone cards - desktop */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-4">
          {activePhases.filter(p => p.milestone).map((phase, i) => (
            <RevealOnScroll key={`${showAccelerated}-milestone-${phase.phase}`} delay={i * 0.08}>
              <div className="bg-surface-light border border-border rounded-xl p-5 hover:border-emerald-500/30 transition-colors h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-r ${activeColors[phase.phase]} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-[10px] font-bold">{phase.phase}</span>
                  </div>
                  <span className="text-xs text-text-dim font-medium">Phase {phase.phase} · Week {phase.weeks.split('–')[1]}</span>
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">{phase.milestone}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Claude Code benefits */}
        <RevealOnScroll>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-surface-light border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">How Claude Code Accelerates Every Phase</h3>
                  <p className="text-text-dim text-xs">Your friendly neighborhood AI development partner</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { task: "Boilerplate & CRUD generation", saved: "~40% of repetitive code auto-generated" },
                  { task: "Prisma schema scaffolding", saved: "Database models drafted from requirements in minutes" },
                  { task: "Prompt engineering for AI tools", saved: "Use Claude to iterate on Claude prompts — meta but effective" },
                  { task: "Unit test scaffolding", saved: "Test cases generated alongside feature code" },
                  { task: "Code review & refactoring", saved: "Instant review of every PR before commit" },
                  { task: "Documentation & JSDoc", saved: "Inline docs generated as code is written" },
                  { task: "Email & component templates", saved: "React Email + UI components scaffolded rapidly" },
                  { task: "Bug diagnosis & debugging", saved: "Error traces analyzed and fixes suggested in real-time" },
                ].map((item) => (
                  <div key={item.task} className="flex items-start gap-3 bg-surface/40 rounded-lg p-3">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm font-medium">{item.task}</p>
                      <p className="text-text-dim text-xs">{item.saved}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
