'use client';

import { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { ganttData } from '../../data/proposalData';

function GanttChart({ plan, milestoneLabels }) {
  const { totalWeeks, phases, milestones } = plan;
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i + 1);

  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[600px] rounded-xl border border-border/60 bg-surface-light/30">
      <table className="w-full border-collapse" style={{ minWidth: totalWeeks * 26 + 195 }}>
        <thead>
          {/* Week header row */}
          <tr className="border-b border-border/40">
            <th
              className="sticky left-0 z-10 bg-surface-light text-left px-3 py-2 text-xs text-text-muted font-[family-name:var(--font-mono)] tracking-wide border-r border-border/40"
              style={{ minWidth: 195, maxWidth: 195 }}
            >
              Phase / Feature
            </th>
            {weeks.map((w) => (
              <th
                key={w}
                className={`px-0 py-2 text-center text-[11px] font-[family-name:var(--font-mono)] tracking-tight border-r border-border/20 ${
                  milestones[w]
                    ? 'bg-emerald-500/10 text-emerald-400 font-bold'
                    : 'text-text-dim font-normal'
                }`}
                style={{ minWidth: 26 }}
              >
                W{w}
              </th>
            ))}
          </tr>

          {/* Milestone row */}
          <tr className="border-b border-border/40">
            <td
              className="sticky left-0 z-10 bg-surface-light px-3 py-1.5 text-xs text-emerald-400 font-[family-name:var(--font-mono)] font-semibold border-r border-border/40"
              style={{ minWidth: 195, maxWidth: 195 }}
            >
              Milestones
            </td>
            {weeks.map((w) => (
              <td
                key={w}
                className={`px-0 py-1.5 text-center text-[11px] font-[family-name:var(--font-mono)] font-bold border-r border-border/20 ${
                  milestones[w]
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-transparent'
                }`}
              >
                {milestones[w] || '\u00A0'}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {phases.map((phase) => (
            <PhaseBlock key={phase.name} phase={phase} totalWeeks={totalWeeks} weeks={weeks} milestones={milestones} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PhaseBlock({ phase, totalWeeks, weeks, milestones }) {
  return (
    <>
      {/* Phase row */}
      <tr className="border-b border-border/30">
        <td
          className="sticky left-0 z-10 bg-surface-light px-3 py-1.5 text-sm font-semibold border-r border-border/40 whitespace-nowrap truncate"
          style={{ minWidth: 195, maxWidth: 195, color: phase.col }}
        >
          {phase.name}
        </td>
        {weeks.map((w) => {
          const inRange = w >= phase.start && w <= phase.end;
          return (
            <td
              key={w}
              className={`px-0 py-1.5 border-r border-border/20 ${
                milestones[w] ? 'bg-emerald-500/[0.04]' : ''
              }`}
            >
              {inRange && (
                <div
                  className="mx-auto"
                  style={{
                    height: 20,
                    borderRadius: 3,
                    backgroundColor: phase.col,
                    opacity: 0.35,
                    width: '90%',
                  }}
                />
              )}
            </td>
          );
        })}
      </tr>

      {/* Feature rows */}
      {phase.feats.map(([name, start, end]) => (
        <tr key={name} className="border-b border-border/20">
          <td
            className="sticky left-0 z-10 bg-surface-light px-3 pl-6 py-1 text-xs text-text-dim border-r border-border/40 whitespace-nowrap truncate"
            style={{ minWidth: 195, maxWidth: 195 }}
          >
            {name}
          </td>
          {weeks.map((w) => {
            const inRange = w >= start && w <= end;
            return (
              <td
                key={w}
                className={`px-0 py-1 border-r border-border/20 ${
                  milestones[w] ? 'bg-emerald-500/[0.04]' : ''
                }`}
              >
                {inRange && (
                  <div
                    className="mx-auto"
                    style={{
                      height: 20,
                      borderRadius: 3,
                      backgroundColor: phase.col,
                      opacity: 0.9,
                      width: '90%',
                    }}
                  />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}

function Legend({ phases, milestones, milestoneLabels }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
      {/* Phase legend */}
      {phases.map((phase) => (
        <span key={phase.name} className="inline-flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: phase.col }}
          />
          {phase.name}
        </span>
      ))}

      {/* Divider */}
      <span className="text-border">|</span>

      {/* Milestone legend */}
      {Object.entries(milestones).map(([week, label]) => (
        <span key={label} className="inline-flex items-center gap-1">
          <span className="text-emerald-400 text-sm">&#9733;</span>
          <span className="text-text-dim">
            {label}: {milestoneLabels[label]}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Gantt() {
  const [mode, setMode] = useState('standard');

  const plan = mode === 'standard' ? ganttData.standard : ganttData.accelerated;

  return (
    <section id="gantt" className="py-24 lg:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={ganttData.label}
          title={ganttData.title}
          subtitle={ganttData.subtitle}
        />

        {/* Toggle */}
        <RevealOnScroll delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border border-border/60 bg-surface-light/50 p-1">
              <button
                onClick={() => setMode('standard')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  mode === 'standard'
                    ? 'bg-indigo-500/20 text-indigo-300 shadow-sm border border-indigo-500/30'
                    : 'text-text-muted hover:text-text-light'
                }`}
              >
                Without Claude Code &mdash; 24 Weeks
              </button>
              <button
                onClick={() => setMode('accelerated')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  mode === 'accelerated'
                    ? 'bg-sky-500/20 text-sky-300 shadow-sm border border-sky-500/30'
                    : 'text-text-muted hover:text-text-light'
                }`}
              >
                &#9889; With Claude Code &mdash; 20 Weeks
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Gantt Chart */}
        <RevealOnScroll delay={0.2}>
          <GanttChart plan={plan} milestoneLabels={ganttData.milestoneLabels} />
          <Legend
            phases={plan.phases}
            milestones={plan.milestones}
            milestoneLabels={ganttData.milestoneLabels}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
