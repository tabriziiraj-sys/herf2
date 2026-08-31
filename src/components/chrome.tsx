import { useEffect, useState } from "react";
import { formulas, navLinks } from "../lib/data";
import { useTypewriter } from "../lib/hooks";
import { GridLogo } from "./icons";

/** نوار عنوان پنجره ورک‌بوک */
function TitleBar() {
  return (
    <div className="flex h-9 items-center gap-3 bg-ink-950 px-3 sm:px-4">
      <div className="flex items-center gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#e2604c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-leaf-2" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
        <GridLogo className="h-4.5 w-4.5 shrink-0" />
        <p className="truncate font-mono text-[11px] tracking-wide text-sage sm:text-xs" dir="ltr">
          Iraj_ChaeiAsl_Tabrizi.xlsx — حرفه‌ای شو
        </p>
      </div>
      <span className="hidden items-center gap-1.5 border border-inkline px-2 py-0.5 font-mono text-[10px] text-leaf-3 sm:flex">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-leaf-2" />
        ذخیره خودکار: روشن
      </span>
    </div>
  );
}

/** نوار فرمول با تایپ زنده */
function FormulaBar() {
  const txt = useTypewriter(formulas);
  return (
    <div className="flex h-10 items-stretch gap-0 border-b border-inkline bg-ink-900 font-mono text-xs text-moss">
      <div className="flex w-16 items-center justify-center border-l border-inkline bg-ink-800 text-leaf-3 sm:w-20" dir="ltr">
        A1
      </div>
      <div className="flex w-10 items-center justify-center border-l border-inkline text-amber-2 italic">
        fx
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-2 px-3 sm:px-4" dir="ltr">
        <span className="caret truncate text-[11px] tracking-wide text-moss/90 sm:text-xs">{txt}</span>
      </div>
      <div className="hidden items-center gap-2 border-r border-inkline px-3 text-[10px] text-faint md:flex">
        <span>Sheet: رزومه</span>
        <span className="text-leaf-3">✓ معتبر</span>
      </div>
    </div>
  );
}

/** ریبون ناوبری با اسکرول‌اسپای و نوار پیشرفت */
export function ExcelChrome() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = "home";
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 160) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(5,15,10,0.25)]">
      <TitleBar />
      <FormulaBar />
      <nav className="relative flex h-11 items-center gap-1 overflow-x-auto bg-paper px-2 sm:px-4" aria-label="ناوبری اصلی">
        <span className="mr-1 hidden font-display text-lg leading-none text-leaf lg:block">حرفه‌ای شو</span>
        <div className="flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative whitespace-nowrap border-b-2 px-3 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                active === l.id
                  ? "border-leaf bg-mint text-leaf"
                  : "border-transparent text-ink-700 hover:bg-paper-2 hover:text-ink-900"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://herfeiish0.ir/"
          target="_blank"
          rel="noreferrer"
          className="mr-auto hidden shrink-0 items-center gap-1.5 bg-leaf px-3.5 py-1.5 text-[13px] font-bold text-paper transition-colors hover:bg-leaf-2 sm:flex"
        >
          herfeiish0.ir
        </a>
        <span className="pointer-events-none absolute bottom-0 right-0 h-[3px] bg-leaf transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </nav>
    </header>
  );
}

/** فوتر به سبک نوار وضعیت اکسل */
export function StatusBarFooter() {
  return (
    <footer className="border-t-4 border-leaf bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <GridLogo className="h-10 w-10" />
            <div>
              <p className="font-display text-2xl leading-none text-moss">حرفه‌ای شو</p>
              <p className="mt-1 text-xs text-sage">با ایرج چائی اصل تبریزی</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-sage">
            از سلولِ صفر تا داشبوردِ هزار؛ آموزش اکسل، Power BI و هوش مصنوعی و طراحی نرم‌افزارهای تحت اکسل برای کسب‌وکارها.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-leaf-3">دسترسی سریع</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navLinks.slice(1).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-moss/80 transition-colors hover:text-amber-2">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="https://herfeiish0.ir/shop/" target="_blank" rel="noreferrer" className="text-moss/80 transition-colors hover:text-amber-2">
                فروشگاه دوره‌ها
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-leaf-3">اطلاعات تماس</p>
          <ul className="mt-4 space-y-2.5 text-sm text-moss/80">
            <li>
              <a href="https://www.instagram.com/herfeiish0/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-2">
                اینستاگرام: <span dir="ltr">@herfeiish0</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/herfeish0" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-2">
                تلگرام: <span dir="ltr">@herfeish0</span>
              </a>
            </li>
            <li>
              <a href="https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-2">
                صفحه مدرس در مکتب‌خونه
              </a>
            </li>
            <li>
              <a href="https://herfeiish0.ir/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber-2" dir="ltr">
                herfeiish0.ir
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* نوار وضعیت */}
      <div className="border-t border-inkline">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2.5 font-mono text-[11px] text-sage sm:px-6">
          <span className="flex items-center gap-2 text-leaf-3">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-leaf-2" />
            آماده (Ready) ✓
          </span>
          <span className="hidden sm:inline">میانگین: ۴٫۶ از ۵</span>
          <span className="hidden md:inline">تعداد: ۱۸٬۷۶۱ دانشجو</span>
          <span className="mr-auto flex items-center gap-2">
            <span className="hidden items-center gap-1 sm:flex">
              <span className="border border-inkline bg-leaf px-2 py-0.5 text-paper">رزومه</span>
              <span className="border border-inkline px-2 py-0.5 text-faint">پکیج‌ها</span>
              <span className="border border-inkline px-2 py-0.5 text-faint">ارتباط</span>
            </span>
            <span>بزرگ‌نمایی: ۱۰۰٪</span>
          </span>
        </div>
        <p className="border-t border-inkline/60 py-3 text-center text-[11px] text-faint">
          © ۱۴۰۴ — تمامی حقوق برای «حرفه‌ای شو» و ایرج چائی اصل تبریزی محفوظ است.
        </p>
      </div>
    </footer>
  );
}
