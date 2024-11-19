"use client";
import { useEffect, useState, useRef } from "react";

const lerp = (start, end, t) => start * (1 - t) + end * t;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const targetPositionRef = useRef({ x: 0, y: 0 });

  // Check device type
  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth > 768);

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Handle cursor animation
  useEffect(() => {
    if (!isDesktop) return;

    const updateCursorPosition = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleElementHover = (e) => {
      const target = e.target.closest(".custom-cursor");
      setHoveredElement(target);
    };

    const handleElementUnhover = () => {
      setHoveredElement(null);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseout", handleElementUnhover);

    const animateCursor = () => {
      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, targetPositionRef.current.x, 0.05),
        y: lerp(prevPosition.y, targetPositionRef.current.y, 0.05),
      }));
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseout", handleElementUnhover);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className={`bg-custom5 bg-opacity-50 rounded-full fixed z-50 pointer-events-none ${
        hoveredElement
          ? "w-20 h-20 bg-transparent border-[1px] border-custom5 transition-multiple duration-300 ease-in-out"
          : "w-8 h-8 transition-multiple duration-300 ease-in-out"
      }`}
      style={{
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
