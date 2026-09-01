import { useEffect, useState } from "react";
import { faNum, marqueeItems, profile } from "../lib/data";
import { useCountUp, useInView, useReducedMotion } from "../lib/hooks";
import { IconArrow, IconCheck } from "./icons";
import { Reveal, Stars } from "./ui";

const COLS = ["A", "B", "C", "D", "E", "F", "G"];

/* ───────────── داشبورد زنده ───────────── */

function Donut({ inView }: { inView: boolean }) {
  const segs = [
    { v: 45, c: "#1da35c", label: "اکسل و VBA" },
    { v: 30, c: "#dd9a1c", label: "Power BI" },
    { v: 25, c: "#4f9dd8", label: "AI و اتوماسیون" },
  ];
  const R = 40;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-28 w-28 shrink-0 -rotate-90">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#10281d" strokeWidth="13" />
        {segs.map((s, i) => {
          const off = acc;
          acc += s.v;
          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={s.c}
              strokeWidth="13"
              strokeLinecap="butt"
              strokeDasharray={`${inView ? (s.v / 100) * C : 0} ${C}`}
              strokeDashoffset={-(off / 100) * C}
              style={{ transition: "stroke-dasharray 1.1s cubic-bezier(.22,.61,.36,1)", transitionDelay: `${i * 180}ms` }}
            />
          );
        })}
      </svg>
      <ul className="space-y-2 text-[12px]">
        {segs.map((s, i) => (
          <li key={i} className="flex items-center gap-2 text-sage">
            <span className="h-2.5 w-2.5" style={{ background: s.c }} />
            {s.label}
            <span className="font-mono text-moss">{faNum(s.v)}٪</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LiveBars({ animate }: { animate: boolean }) {
  const reduced = useReducedMotion();
  const [bars, setBars] = useState([42, 68, 55, 80, 62, 90, 74, 96]);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(
      () => setBars((b) => b.map((v) => Math.max(28, Math.min(100, v + (Math.random() * 34 - 17))))),
      2600
    );
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <div className={`flex h-28 items-end gap-1.5 ${animate ? "bar-in" : ""}`}>
      {bars.map((h, i) => (
        <div key={i} className="relative flex-1 overflow-hidden bg-ink-800">
          <div
            className="bar-grow absolute bottom-0 w-full"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? "#dd9a1c" : "#1da35c",
              transitionDelay: `${i * 70}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function DashboardMock() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const revenue = useCountUp(2840, inView, 2000);
  const students = useCountUp(13420, inView, 2000);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced || !inView) return;
    const t = setInterval(() => setTick((x) => x + 1), 3000);
    return () => clearInterval(t);
  }, [reduced, inView]);

  const topCourses = [
    { n: "مصورسازی داده با اکسل", v: 9553, c: "#1da35c" },
    { n: "اکسل هوشمند با AI", v: 4248, c: "#dd9a1c" },
    { n: "Power BI با هوش مصنوعی", v: 3247, c: "#4f9dd8" },
  ];

  return (
    <div ref={ref} className="relative border border-inkline bg-ink-900 shadow-[0_30px_80px_rgba(5,15,10,0.5)]">
      {/* سرتیتر داشبورد */}
      <div className="flex items-center justify-between border-b border-inkline bg-ink-850 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="live-dot h-2 w-2 rounded-full bg-leaf-2" />
          <p className="text-sm font-bold text-moss">داشبورد مدیریتی «حرفه‌ای شو»</p>
        </div>
        <span className="font-mono text-[10px] text-faint" dir="ltr">
          last update: live
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        {/* KPIها */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="border border-inkline bg-ink-850 p-3">
            <p className="text-[10px] text-faint">درآمد ماهانه (میلیون تومان)</p>
            <p key={tick} className="tickpop mt-1.5 font-mono text-lg font-semibold text-leaf-3 sm:text-xl" dir="ltr">
              {faNum(Math.round(revenue + (inView ? tick * 7 : 0)))}
            </p>
          </div>
          <div className="border border-inkline bg-ink-850 p-3">
            <p className="text-[10px] text-faint">دانشجوی فعال</p>
            <p className="mt-1.5 font-mono text-lg font-semibold text-amber-2 sm:text-xl" dir="ltr">
              {faNum(Math.round(students))}
            </p>
          </div>
          <div className="border border-inkline bg-ink-850 p-3">
            <p className="text-[10px] text-faint">رضایت دانشجویان</p>
            <p className="mt-1.5 font-mono text-lg font-semibold text-skyx sm:text-xl" dir="ltr">
              ٪{faNum(97)}
            </p>
          </div>
        </div>

        {/* نمودار میله‌ای */}
        <div className="border border-inkline bg-ink-850 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold text-moss">ثبت‌نام ماهانه دوره‌ها</p>
            <span className="font-mono text-[10px] text-leaf-3">▲ ۲۳٪ رشد</span>
          </div>
          <LiveBars animate={inView} />
          <div className="mt-2 flex justify-between font-mono text-[9px] text-faint" dir="ltr">
            {["فرو", "اردی", "خرد", "تیر", "مرد", "شهری", "مهر", "آبا"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* دونات */}
          <div className="border border-inkline bg-ink-850 p-3.5">
            <p className="mb-3 text-xs font-bold text-moss">سهم مهارت‌های تدریسی</p>
            <Donut inView={inView} />
          </div>
          {/* دوره‌های برتر */}
          <div className="border border-inkline bg-ink-850 p-3.5">
            <p className="mb-3 text-xs font-bold text-moss">پرمخاطب‌ترین دوره‌ها</p>
            <ul className="space-y-3">
              {topCourses.map((c) => (
                <li key={c.n}>
                  <div className="mb-1 flex items-center justify-between text-[11px]">
                    <span className="text-sage">{c.n}</span>
                    <span className="font-mono text-moss" dir="ltr">
                      {faNum(c.v)}
                    </span>
                  </div>
                  <div className="h-1.5 bg-ink-700">
                    <div
                      className="h-full"
                      style={{
                        width: inView ? `${(c.v / 9553) * 100}%` : "0%",
                        background: c.c,
                        transition: "width 1.2s cubic-bezier(.22,.61,.36,1)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* سلول انتخاب‌شده با مورچه‌های رزرو و نام تایپ‌شونده */
function SelectedCell() {
  return (
    <div className="relative mt-5 inline-block max-w-full px-1 py-0.5">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
        <rect className="ants-rect" x="1" y="4" width="98" height="92" vectorEffect="non-scaling-stroke" rx="2" />
      </svg>
      <div className="flex items-center gap-2.5 bg-paper px-3.5 py-2.5">
        <span className="font-display text-lg leading-none text-leaf sm:text-xl">{profile.name}</span>
        <span className="h-2 w-2 shrink-0 bg-leaf" aria-hidden />
      </div>
    </div>
  );
}

/* ───────────── هیرو ───────────── */
export default function Hero() {
  return (
    <section id="home" className="grid-paper relative overflow-hidden">
      {/* سرستون‌های اکسلی */}
      <div className="flex border-b border-line bg-paper-2/90" aria-hidden>
        <div className="w-8 shrink-0 border-l border-line bg-paper-3 sm:w-10" />
        {COLS.map((c, i) => (
          <div
            key={c}
            className={`flex-1 border-l border-line py-1.5 text-center font-mono text-[11px] font-semibold ${
              i >= 1 && i <= 4 ? "bg-mint text-leaf" : "text-ink-700/50"
            }`}
            dir="ltr"
          >
            {c}
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl px-4 sm:px-6">
        {/* شماره ردیف‌ها */}
        <div className="flex w-8 shrink-0 flex-col border-l border-line sm:w-10" aria-hidden>
          {Array.from({ length: 26 }).map((_, i) => (
            <div
              key={i}
              className={`flex h-[52px] items-center justify-center border-b border-line font-mono text-[10px] sm:h-[64px] ${
                i === 25 ? "min-h-[52px] flex-1 sm:min-h-[64px]" : ""
              } ${i >= 1 && i <= 11 ? "bg-mint font-bold text-leaf" : "bg-paper-2/60 text-ink-700/40"}`}
            >
              {faNum(i + 1)}
            </div>
          ))}
        </div>

        {/* محتوای سلول‌ها */}
        <div className="grid min-w-0 flex-1 gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 border border-leaf/40 bg-mint px-3 py-1.5 text-xs font-bold text-leaf">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-leaf" />
                اکسل • VBA • Power BI • هوش مصنوعی
              </span>
              <span className="border border-line bg-paper-2 px-3 py-1.5 font-mono text-[11px] text-ink-700">
                بنیان‌گذار «حرفه‌ای شو»
              </span>
            </div>

            <h1 className="mt-7 font-display leading-[1.12] text-ink-900">
              <span className="line-mask text-[2.6rem] sm:text-6xl xl:text-[4.2rem]" style={{ "--d": "80ms" } as React.CSSProperties}>
                <span>از سـلولِ صفر،</span>
              </span>
              <span className="line-mask text-[2.6rem] text-leaf sm:text-6xl xl:text-[4.2rem]" style={{ "--d": "240ms" } as React.CSSProperties}>
                <span>تا داشبوردِ <em className="not-italic text-amber">هزار!</em></span>
              </span>
            </h1>

            <div className="mt-4">
              <SelectedCell />
            </div>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-ink-700 sm:text-base sm:leading-9">
              {profile.tagline}؛ حدود ۱۰ سال تجربه طراحی نرم‌افزار و داشبورد مدیریتی در بستر اکسل و VBA، مدرس مکتب‌خونه با{" "}
              <strong className="text-leaf">۱۸٬۷۶۱ دانشجو</strong> و خالق جامع‌ترین مسیر آموزش اکسل به زبان فارسی برای رسیدن به{" "}
              <strong className="text-ink-900">درآمد میلیونی</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#packages"
                className="group inline-flex items-center gap-2.5 bg-leaf px-6 py-3.5 text-[15px] font-bold text-paper shadow-[0_10px_25px_rgba(16,124,65,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-900 hover:shadow-[0_14px_30px_rgba(10,26,18,0.35)]"
              >
                پکیج King؛ صفر تا ۱۰۰۰ اکسل
                <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 border-2 border-ink-900 px-6 py-3 text-[15px] font-bold text-ink-900 transition-all duration-200 hover:bg-ink-900 hover:text-paper"
              >
                دوره‌های مکتب‌خونه
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-dashed border-line pt-5">
              <div className="flex items-center gap-2.5">
                <Stars value={5} />
                <span className="text-sm font-bold text-ink-900">۴٫۶ از ۵</span>
                <span className="text-xs text-ink-700/70">امتیاز دانشجویان</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <IconCheck className="h-4.5 w-4.5 text-leaf" />
                <span className="font-bold text-ink-900">۱۳٬۰۰۰+</span>
                <span className="text-xs text-ink-700/70">دانشجوی موفق وب‌سایت</span>
              </div>
            </div>
          </div>

          {/* داشبورد */}
          <div className="relative lg:col-span-6">
            <div className="floaty relative lg:mt-6">
              <div className="absolute -inset-3 border border-dashed border-leaf/30" aria-hidden />
              <DashboardMock />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 border border-line bg-paper-2/80 px-4 py-2.5 font-mono text-[11px] text-ink-700">
              <span>
                سلول فعال: <b className="text-leaf" dir="ltr">B2:E11</b>
              </span>
              <span className="hidden sm:inline">فرمول: =موفقیت(تلاش، تداوم)</span>
            </div>
          </div>
        </div>
      </div>

      {/* نوار متحرک مهارت‌ها */}
      <div className="relative border-t-2 border-leaf bg-ink-950 py-3.5" aria-hidden>
        <div className="marquee-track items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 text-sm font-semibold text-sage">
              {item}
              <svg viewBox="0 0 10 10" className="h-2 w-2 fill-amber">
                <path d="M5 0l5 5-5 5-5-5z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
