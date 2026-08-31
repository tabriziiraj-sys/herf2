import React, { useEffect, useRef, useState } from "react";
import { fa } from "../lib/data";
import {
  IconCell,
  IconDash,
  IconCode,
  IconChart,
  IconFunnel,
  IconBot,
  IconLock,
  IconCert,
  IconPlay,
  IconSpark,
  IconCap,
  IconGlobe,
  IconInstagram,
  IconTelegram,
  IconEitaa,
  IconYoutube,
  IconSigma,
} from "./icons";

/* ---------- icon lookup ---------- */
export const iconMap: Record<string, (p: { className?: string }) => React.ReactElement> = {
  cell: IconCell,
  dash: IconDash,
  code: IconCode,
  chart: IconChart,
  funnel: IconFunnel,
  bot: IconBot,
  lock: IconLock,
  cert: IconCert,
  play: IconPlay,
  spark: IconSpark,
  cap: IconCap,
  globe: IconGlobe,
  instagram: IconInstagram,
  telegram: IconTelegram,
  eitaa: IconEitaa,
  youtube: IconYoutube,
  sigma: IconSigma,
};

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ["--rd" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- count up ---------- */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1600,
  className = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const shown =
    decimals > 0
      ? fa(val.toFixed(decimals))
      : fa(Math.round(val).toLocaleString("en-US"));

  return (
    <span ref={ref} className={className} dir="ltr">
      {shown}
      {suffix}
    </span>
  );
}

/* ---------- section heading ---------- */
export function SectionHead({
  kicker,
  title,
  desc,
  align = "start",
}: {
  kicker: string;
  title: React.ReactNode;
  desc?: string;
  align?: "start" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <p className="font-mono text-[13px] tracking-[0.25em] text-leaf-soft mb-4 flex items-center gap-3" dir="ltr">
        <span className="inline-block w-8 h-px bg-leaf/60" style={{ order: align === "center" ? 0 : 1 }} />
        <span style={{ order: 1 }}>{kicker}</span>
        {align === "center" && <span className="inline-block w-8 h-px bg-leaf/60" />}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl leading-[1.15] text-moss">{title}</h2>
      {desc && <p className="mt-4 text-sage leading-8 text-[15.5px]">{desc}</p>}
    </Reveal>
  );
}
