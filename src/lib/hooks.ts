import { useEffect, useRef, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function useInView<T extends Element>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

/** عدد شمارنده که با ورود به دید، از صفر تا هدف بالا می‌رود */
export function useCountUp(target: number, started: boolean, duration = 1700): number {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, reduced]);
  return val;
}

/** ماشین تحریر چرخشی بین چند عبارت */
export function useTypewriter(phrases: string[], start = true, speed = 55, hold = 2200): string {
  const reduced = useReducedMotion();
  const [txt, setTxt] = useState(reduced ? phrases[0] : "");
  useEffect(() => {
    if (reduced || !start) {
      setTxt(phrases[0]);
      return;
    }
    let pi = 0;
    let ci = 0;
    let del = false;
    let t = 0;
    const tick = () => {
      const p = phrases[pi];
      if (!del) {
        ci++;
        setTxt(p.slice(0, ci));
        if (ci === p.length) {
          del = true;
          t = window.setTimeout(tick, hold);
        } else {
          t = window.setTimeout(tick, speed);
        }
      } else {
        ci--;
        setTxt(p.slice(0, ci));
        if (ci === 0) {
          del = false;
          pi = (pi + 1) % phrases.length;
          t = window.setTimeout(tick, 500);
        } else {
          t = window.setTimeout(tick, 24);
        }
      }
    };
    t = window.setTimeout(tick, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, reduced]);
  return txt;
}
