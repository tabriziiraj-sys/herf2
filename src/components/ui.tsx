import type { ReactNode } from "react";
import { useInView } from "../lib/hooks";

/** نمایش تدریجی هنگام اسکرول */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** سرتیتر بخش‌ها با مرجع سلولی اکسلی */
export function SectionHead({
  cell,
  kicker,
  title,
  desc,
  dark = false,
}: {
  cell: string;
  kicker: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-9 min-w-9 items-center justify-center border px-2 font-mono text-xs font-semibold tracking-wide ${
              dark ? "border-inkline bg-ink-800 text-leaf-3" : "border-leaf/40 bg-mint text-leaf"
            }`}
            dir="ltr"
          >
            {cell}
          </span>
          <span className="flex-1 border-t border-dashed border-current opacity-20" />
          <span
            className={`text-[13px] font-bold tracking-[0.14em] ${dark ? "text-leaf-3" : "text-leaf"}`}
          >
            {kicker}
          </span>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`mt-5 font-display text-4xl leading-[1.15] sm:text-5xl ${
            dark ? "text-moss" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={170}>
          <p className={`mt-4 text-base leading-8 sm:text-lg sm:leading-9 ${dark ? "text-sage" : "text-ink-700/80"}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** ستاره امتیاز */
export function Stars({ value = 5, className = "text-amber" }: { value?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`امتیاز ${value} از ۵`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={i < Math.round(value) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
          <path d="M10 2.6l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L2.8 7.9l5-.7L10 2.6z" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}

/** برچسب کوچک */
export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide ${
        dark ? "border-inkline bg-ink-800/70 text-sage" : "border-line bg-paper-2 text-ink-700"
      }`}
    >
      {children}
    </span>
  );
}
