'use client'
import { useEffect, useState } from 'react';

const lerp = (start, end, t) => start * (1 - t) + end * t;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    let cursorAnimationFrame;

    const updateCursorPosition = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const handleElementHover = (e) => {
      const target = e.target.closest('.custom-cursor');
      setHoveredElement(target);
    };

    const handleElementUnhover = () => {
      setHoveredElement(null);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementUnhover);

    const animateCursor = () => {
      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, targetPosition.x, 0.1),
        y: lerp(prevPosition.y, targetPosition.y, 0.1),
      }));

      cursorAnimationFrame = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementUnhover);
      cancelAnimationFrame(cursorAnimationFrame);
    };
  }, [targetPosition]);

  return (
    <div
    className={`bg-custom5 bg-opacity-50 rounded-full fixed z-50 pointer-events-none ${hoveredElement ? "w-20 h-20 bg-transparent border-[1px] border-custom5 transition-multiple duration-300 ease-in-out" : "w-8 h-8 transition-multiple duration-300 ease-in-out"}`}
    style={{
      transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
    }}
  ></div>
  );
};

export default CustomCursor;
