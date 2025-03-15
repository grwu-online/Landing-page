import { useState, useEffect } from 'react';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;

      // Debugging logs
      console.log('Total Height:', totalHeight, 'Scroll Y:', window.scrollY, 'Progress:', progress);

      setScrollProgress(Math.min(progress, 100));
    };

    // Debounce the scroll event
    const debouncedUpdateScroll = () => {
      requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', debouncedUpdateScroll);

    // Initial call to set progress on mount
    updateScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', debouncedUpdateScroll);
  }, []);

  // Log scrollProgress whenever it changes
  useEffect(() => {
    console.log('Scroll Progress:', scrollProgress);
  }, [scrollProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[51]"> {/* Increased z-index */}
      <div
        className="h-full"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, #FEA250, #48A8A5, #1A1A1A)`,
          transition: 'width 0.2s ease-out'
        }}
      />
    </div>
  );
}