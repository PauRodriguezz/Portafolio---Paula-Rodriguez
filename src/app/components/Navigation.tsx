import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-['Oooh_Baby',sans-serif] text-[36px] text-[#6695a5] hover:opacity-80 transition-opacity z-50 relative"
            >
              Pau
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 lg:gap-12">
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="font-['Montserrat',sans-serif] text-[20px] lg:text-[24px] text-[#6695a5] hover:opacity-80 transition-opacity"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="font-['Montserrat',sans-serif] text-[20px] lg:text-[24px] text-[#6695a5] hover:opacity-80 transition-opacity"
              >
                Proyectos
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-full h-0.5 bg-[#6695a5] rounded-full origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-[#6695a5] rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="w-full h-0.5 bg-[#6695a5] rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-40 lg:hidden"
          >
            <div className="flex flex-col pt-24 px-8 space-y-8">
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="font-['Montserrat',sans-serif] text-[24px] text-[#6695a5] hover:opacity-80 transition-opacity text-left py-3 border-b border-[#6695a5]/20"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="font-['Montserrat',sans-serif] text-[24px] text-[#6695a5] hover:opacity-80 transition-opacity text-left py-3 border-b border-[#6695a5]/20"
              >
                Proyectos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}