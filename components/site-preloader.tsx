"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const SESSION_KEY = "k7-intro-shown";
const MIN_PROGRESS_TIME = 1100;
const MAX_WAIT_TIME = 2500;
const FINISH_TIME = 250;
const COMPLETE_HOLD = 250;
const EXIT_TIME = 450;

export function SitePreloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [exiting, setExiting] = useState(false);
  const restoreScrollRef = useRef<() => void>(() => undefined);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // If storage is unavailable, the intro still runs without blocking the site.
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    restoreScrollRef.current = () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };

    setVisible(true);

    if (reducedMotion) {
      setProgress(100);
      setComplete(true);
      const exitTimer = window.setTimeout(() => setExiting(true), 120);
      const removeTimer = window.setTimeout(() => {
        restoreScrollRef.current();
        setVisible(false);
      }, 280);

      return () => {
        window.clearTimeout(exitTimer);
        window.clearTimeout(removeTimer);
        restoreScrollRef.current();
      };
    }

    let frame = 0;
    let exitTimer = 0;
    let removeTimer = 0;
    let pageReady = document.readyState === "complete";
    let finishingAt: number | null = null;
    let finishFrom = 0;
    const startedAt = performance.now();
    const markReady = () => { pageReady = true; };

    window.addEventListener("load", markReady, { once: true });

    const fallbackTimer = window.setTimeout(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", markReady);
      restoreScrollRef.current();
      setVisible(false);
    }, 3500);

    const animate = (now: number) => {
      const elapsed = now - startedAt;

      if (finishingAt === null) {
        const preparation = Math.min(1, elapsed / MIN_PROGRESS_TIME);
        const simulatedProgress = 90 * (1 - Math.pow(1 - preparation, 3));
        finishFrom = simulatedProgress;
        setProgress(Math.round(simulatedProgress));

        if ((pageReady && elapsed >= MIN_PROGRESS_TIME) || elapsed >= MAX_WAIT_TIME) {
          finishingAt = now;
        }
      } else {
        const finishProgress = Math.min(1, (now - finishingAt) / FINISH_TIME);
        const nextProgress = finishFrom + (100 - finishFrom) * finishProgress;
        setProgress(Math.round(nextProgress));

        if (finishProgress === 1) {
          setComplete(true);
          exitTimer = window.setTimeout(() => setExiting(true), COMPLETE_HOLD);
          removeTimer = window.setTimeout(() => {
            window.clearTimeout(fallbackTimer);
            restoreScrollRef.current();
            setVisible(false);
          }, COMPLETE_HOLD + EXIT_TIME);
          return;
        }
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", markReady);
      restoreScrollRef.current();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-preloader${complete ? " is-complete" : ""}${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Carregando site: ${progress}%`}
    >
      <div className="site-preloader-glow" aria-hidden="true" />
      <div className="site-preloader-content">
        <div className="site-preloader-logo">
          <Image src="/k7-logo.png" alt="K7 Sites" width={132} height={132} priority />
        </div>
        <strong aria-hidden="true">{progress}%</strong>
        <div className="site-preloader-track" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  );
}
