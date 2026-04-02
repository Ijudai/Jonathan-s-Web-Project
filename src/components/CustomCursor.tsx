"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleHoverEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(201, 169, 98, 0.4)",
        borderColor: "rgba(201, 169, 98, 0.8)",
        duration: 0.3,
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(201, 169, 98, 0.5)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Attach hover effects to any element with .royal-interactive
    const interactiveElements = document.querySelectorAll(".royal-interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, { scope: cursorRef });

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[rgba(201,169,98,0.5)] pointer-events-none z-[9999] mix-blend-screen hidden md:block"
    />
  );
}
