import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
            style={{
              left: position.x,
              top: position.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              width: isHovering ? 60 : 20,
              height: isHovering ? 60 : 20,
              backgroundColor: isHovering ? 'hsl(300 90% 55%)' : 'white',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          />
          {/* Outer ring */}
          <motion.div
            className="fixed pointer-events-none z-[9998] rounded-full border-2 border-primary/50"
            style={{
              left: position.x,
              top: position.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              width: isHovering ? 80 : 40,
              height: isHovering ? 80 : 40,
              opacity: isHovering ? 1 : 0.5,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
