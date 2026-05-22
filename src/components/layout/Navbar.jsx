import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/proposalData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="text-lg font-bold text-white">Legacy Scale</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-light bg-primary/10'
                      : 'text-text-muted hover:text-white hover:bg-surface-lighter'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href="#cta"
                className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
              >
                Let's Build
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-text-muted hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-surface-light border-l border-border z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 text-text-muted hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-medium text-text-muted hover:text-white hover:bg-surface-lighter transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-4 px-4 py-3 bg-primary hover:bg-primary-light text-white text-center font-semibold rounded-xl transition-all"
                >
                  Let's Build
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
