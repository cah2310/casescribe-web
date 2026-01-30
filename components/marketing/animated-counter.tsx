"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  numberClassName?: string;
  labelClassName?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  numberClassName,
  labelClassName,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative inline-block">
        {/* Radial glow behind number */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
        <div className={numberClassName ?? "relative text-4xl font-bold text-blue-400 sm:text-5xl"}>
          {prefix}
          {count}
          {suffix}
        </div>
      </div>
      <div className={labelClassName ?? "mt-2 text-sm font-medium text-slate-400"}>{label}</div>
    </motion.div>
  );
}
