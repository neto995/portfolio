"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./HeroSignal.module.css";

type HeroSignalProps = {
  autoReplay?: boolean;
  replayIntervalMs?: number;
};

type SignalDot = {
  element: SVGCircleElement;
  targetX: number;
  targetY: number;
};

const SVG_NS = "http://www.w3.org/2000/svg";
const COLS = 7;
const HEIGHTS = [4, 7, 3, 8, 5, 9, 6];
const DOT_RADIUS = 5.5;
const VIEWBOX_WIDTH = 400;
const VIEWBOX_HEIGHT = 240;
const BASE_Y = VIEWBOX_HEIGHT - 24;
const STEP_Y = 18;

function randomPoint() {
  return {
    x: 30 + Math.random() * (VIEWBOX_WIDTH - 60),
    y: 16 + Math.random() * 160,
  };
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export default function HeroSignal({
  autoReplay = true,
  replayIntervalMs = 9000,
}: HeroSignalProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dotsRef = useRef<SignalDot[]>([]);
  const reducedMotionRef = useRef(false);
  const rafIdsRef = useRef<number[]>([]);
  const timeoutIdsRef = useRef<number[]>([]);

  const clearAnimation = useCallback(() => {
    rafIdsRef.current.forEach((id) => cancelAnimationFrame(id));
    timeoutIdsRef.current.forEach((id) => window.clearTimeout(id));
    rafIdsRef.current = [];
    timeoutIdsRef.current = [];
  }, []);

  const setFinalState = useCallback(() => {
    dotsRef.current.forEach((dot) => {
      dot.element.setAttribute("cx", String(dot.targetX));
      dot.element.setAttribute("cy", String(dot.targetY));
      dot.element.classList.add(styles.settled);
    });
  }, []);

  const tweenDot = useCallback((dot: SignalDot, startX: number, startY: number) => {
    const start = performance.now();
    const duration = 850;

    const frame = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(progress);

      dot.element.setAttribute(
        "cx",
        String(startX + (dot.targetX - startX) * eased),
      );
      dot.element.setAttribute(
        "cy",
        String(startY + (dot.targetY - startY) * eased),
      );

      if (progress < 1) {
        const rafId = requestAnimationFrame(frame);
        rafIdsRef.current.push(rafId);
        return;
      }

      dot.element.classList.add(styles.settled);
    };

    const rafId = requestAnimationFrame(frame);
    rafIdsRef.current.push(rafId);
  }, []);

  const replay = useCallback(() => {
    clearAnimation();

    dotsRef.current.forEach((dot, index) => {
      const start = randomPoint();
      dot.element.classList.remove(styles.settled);
      dot.element.setAttribute("cx", String(start.x));
      dot.element.setAttribute("cy", String(start.y));

      if (reducedMotionRef.current) {
        return;
      }

      const timeoutId = window.setTimeout(() => {
        tweenDot(dot, start.x, start.y);
      }, index * 16);
      timeoutIdsRef.current.push(timeoutId);
    });

    if (reducedMotionRef.current) {
      setFinalState();
    }
  }, [clearAnimation, setFinalState, tweenDot]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;

    const axis = document.createElementNS(SVG_NS, "line");
    axis.setAttribute("x1", "20");
    axis.setAttribute("y1", String(BASE_Y + 8));
    axis.setAttribute("x2", String(VIEWBOX_WIDTH - 20));
    axis.setAttribute("y2", String(BASE_Y + 8));
    axis.setAttribute("class", styles.axis);
    svg.appendChild(axis);

    const gapX = VIEWBOX_WIDTH / (COLS + 1);
    const dots: SignalDot[] = [];

    for (let column = 0; column < COLS; column += 1) {
      for (let row = 0; row < HEIGHTS[column]; row += 1) {
        const start = randomPoint();
        const circle = document.createElementNS(SVG_NS, "circle");

        circle.setAttribute("r", String(DOT_RADIUS));
        circle.setAttribute("cx", String(start.x));
        circle.setAttribute("cy", String(start.y));
        circle.setAttribute("class", styles.dot);
        svg.appendChild(circle);

        dots.push({
          element: circle,
          targetX: gapX * (column + 1),
          targetY: BASE_Y - row * STEP_Y,
        });
      }
    }

    dotsRef.current = dots;

    const handleMotionChange = () => {
      reducedMotionRef.current = motionQuery.matches;
      if (motionQuery.matches) {
        clearAnimation();
        setFinalState();
      }
    };

    motionQuery.addEventListener("change", handleMotionChange);
    replay();

    return () => {
      clearAnimation();
      motionQuery.removeEventListener("change", handleMotionChange);
      dotsRef.current = [];
      svg.replaceChildren();
    };
  }, [clearAnimation, replay, setFinalState]);

  useEffect(() => {
    if (!autoReplay) {
      return;
    }

    const intervalId = window.setInterval(replay, replayIntervalMs);
    return () => window.clearInterval(intervalId);
  }, [autoReplay, replay, replayIntervalMs]);

  return (
    <aside
      className={styles.panel}
      aria-label="Animation showing raw scattered signals becoming structured output"
    >
      <div className={styles.head}>
        <span>SIGNAL.LOG</span>
        <span className={styles.status}>
          <span className={styles.liveDot} aria-hidden="true" />
          LIVE
        </span>
      </div>

      <svg
        ref={svgRef}
        className={styles.canvas}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        role="img"
        aria-label="Scattered points arrange into clear columns"
      />

      <div className={styles.foot}>
        <span>RAW SIGNAL → STRUCTURED OUTPUT</span>
        <button
          className={styles.replayButton}
          type="button"
          onClick={replay}
          aria-label="Replay signal animation"
        >
          ↻ replay
        </button>
      </div>
    </aside>
  );
}
