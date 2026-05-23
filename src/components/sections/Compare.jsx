import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeader from '../ui/SectionHeader';
import { competitiveData } from '../../data/proposalData';

function BooleanCell({ value }) {
  return value ? (
    <span className="text-emerald-400 font-bold">✓</span>
  ) : (
    <span className="text-text-muted/40">—</span>
  );
}

export default function Compare() {
  const { label, title, subtitle, columns, rows, ours } = competitiveData;

  return (
    <section id="compare" className="py-24 bg-primary/[0.03] border-t border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader badge={label} title={title} subtitle={subtitle} />

        <RevealOnScroll delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-primary/10">
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-xs uppercase tracking-widest font-semibold text-text-muted font-mono"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.platform} className="border-b border-primary/10">
                    <td className="px-4 py-4 font-medium text-text-primary">{row.platform}</td>
                    <td className="px-4 py-4 text-center"><BooleanCell value={row.ai} /></td>
                    <td className="px-4 py-4 text-center"><BooleanCell value={row.video} /></td>
                    <td className="px-4 py-4 text-center"><BooleanCell value={row.gamification} /></td>
                    <td className="px-4 py-4 text-center"><BooleanCell value={row.events} /></td>
                    <td className="px-4 py-4 text-sm text-text-muted">{row.lacks}</td>
                  </tr>
                ))}

                {/* Our platform row — highlighted */}
                <tr className="bg-primary/[0.08]">
                  <td className="px-4 py-4 font-semibold text-text-primary">
                    {ours.platform}
                    <span className="ml-2 inline-block px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary-light font-medium">
                      this build
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center"><BooleanCell value={ours.ai} /></td>
                  <td className="px-4 py-4 text-center"><BooleanCell value={ours.video} /></td>
                  <td className="px-4 py-4 text-center"><BooleanCell value={ours.gamification} /></td>
                  <td className="px-4 py-4 text-center"><BooleanCell value={ours.events} /></td>
                  <td className="px-4 py-4 text-sm font-medium text-emerald-400">{ours.lacks}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
