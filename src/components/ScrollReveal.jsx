"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up", // 'up', 'down', 'left', 'right', or 'none' (fade only)
  distance = 24, // reduced from 40px to minimise layout shift
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [done, setDone] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          // Release willChange after animation to free GPU memory
          setTimeout(() => setDone(true), duration + delay + 50);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getTransform = () => {
    switch (direction) {
      case "up":    return `translateY(${distance}px)`;
      case "down":  return `translateY(-${distance}px)`;
      case "left":  return `translateX(${distance}px)`;
      case "right": return `translateX(-${distance}px)`;
      default:      return "translate(0)";
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: done ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
