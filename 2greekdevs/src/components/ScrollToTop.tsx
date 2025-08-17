import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.2 }}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-50"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-14 sm:w-12 sm:h-12 bg-greekteal text-white flex items-center justify-center rounded-l-full shadow-lg hover:bg-greekteal/90 active:scale-95 transition-all duration-200"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
