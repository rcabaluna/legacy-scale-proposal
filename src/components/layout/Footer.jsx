import { Mail, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">LS</span>
            </div>
            <span className="text-lg font-bold text-white">Legacy Scale</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-text-dim text-sm">
            <span className="text-text-muted font-medium">Ruel Cabaluna Jr.</span>
            <a href="mailto:rcabalunajr@gmail.com" className="flex items-center gap-1.5 hover:text-primary-light transition-colors">
              <Mail size={13} />
              rcabalunajr@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <AtSign size={13} />
              @rcabaluna
            </span>
          </div>
          <p className="text-text-dim text-sm">
            CONFIDENTIAL · Proposal v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
