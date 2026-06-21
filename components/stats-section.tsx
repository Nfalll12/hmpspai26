"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";

import { stats } from "@/data/stats";
import { getIcon } from "@/lib/icon-map";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-semibold text-forest dark:text-secondary sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-[2.25rem] border border-border bg-card/70 p-6 shadow-softer backdrop-blur sm:grid-cols-4 sm:p-10">
          {stats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/70 text-forest dark:bg-secondary/20 dark:text-secondary">
                  <Icon className="size-5" />
                </span>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
