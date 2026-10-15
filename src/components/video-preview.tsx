"use client";
import { useEffect, useRef } from "react";
export function VideoPreview({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    const parent = v?.closest("a");
    if (!v || !parent) return;
    const play = () => {
      if (
        !matchMedia("(prefers-reduced-motion: reduce)").matches &&
        matchMedia("(hover: hover)").matches
      ) {
        v.src = src;
        v.play().catch(() => {});
      }
    };
    const stop = () => {
      v.pause();
      v.removeAttribute("src");
      v.load();
    };
    parent.addEventListener("pointerenter", play);
    parent.addEventListener("pointerleave", stop);
    parent.addEventListener("focus", play);
    parent.addEventListener("blur", stop);
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) stop();
    });
    observer.observe(v);
    return () => {
      stop();
      observer.disconnect();
      parent.removeEventListener("pointerenter", play);
      parent.removeEventListener("pointerleave", stop);
      parent.removeEventListener("focus", play);
      parent.removeEventListener("blur", stop);
    };
  }, [src]);
  return (
    <video
      className="video-preview"
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-label={title + " — podgląd wideo"}
    />
  );
}
