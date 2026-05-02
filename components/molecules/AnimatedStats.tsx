"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
  desc: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

function useCountUp(target: number, duration = 2000, delay = 0, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target === 0) return;

    let raf: number;
    const timeout = setTimeout(() => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 5);
        setCount(Math.floor(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
        else setCount(target);
      };

      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay, start]);

  return count;
}

function StatCell({
  value,
  label,
  desc,
  index,
  start,
}: {
  value: number;
  label: string;
  desc: string;
  index: number;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, index * 120, start);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!start) return;
    const t = setTimeout(() => setEntered(true), index * 120);
    return () => clearTimeout(t);
  }, [start, index]);

  return (
    <div
      className="stat-cell"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        position: "relative",
        padding: "1.75rem 0",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        gap: "0.25rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "3rem",
          color: "var(--text-primary)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
      </div>

      <div
        style={{
          fontSize: "0.6875rem",
          fontFamily: "var(--font-mono)",
          color: "var(--text-muted)",
          textTransform: "uppercase" as const,
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          opacity: entered ? 0.6 : 0,
          transition: `opacity 0.8s ease ${index * 120 + 400}ms`,
          letterSpacing: "0.01em",
          textAlign: "center" as const,
        }}
      >
        {desc}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "1px",
          background: "var(--accent)",
          width: entered ? "2rem" : "0",
          opacity: entered ? 0.5 : 0,
          transition: `width 0.6s ease ${index * 120 + 200}ms, opacity 0.6s ease ${index * 120 + 200}ms`,
        }}
      />
    </div>
  );
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="animate-enter animate-enter-2 stats-bar">
      {stats.map(({ value, label, desc }, i) => (
        <StatCell
          key={label}
          value={value}
          label={label}
          desc={desc}
          index={i}
          start={visible}
        />
      ))}
    </section>
  );
}