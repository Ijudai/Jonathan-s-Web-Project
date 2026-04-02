"use client";

import { useEffect, useRef, ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(time * 1000);
      }
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef} 
      autoRaf={false} 
      root 
      options={{ lerp: 0.06, duration: 2, smoothWheel: true, syncTouch: true }}
    >
      {children}
    </ReactLenis>
  );
}
