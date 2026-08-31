import { papers, profile, socials, software } from "../lib/data";
import { IconArrow, IconCap, IconExt, IconFlow, IconPaper, IconRobot, softwareIcon, socialIcon } from "./icons";
import { Chip, Reveal, SectionHead } from "./ui";

/* ───────────── نرم‌افزارهای تحت اکسل ───────────── */
export function Software() {
  return (
    <section id="software" className="relative border-y border-line bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          cell="E5"
          kicker="نرم‌افزار تحت اکسل"
          title="سیستمی که سازمان شما کم دارد، همین‌جاست"
          desc="حدود ۱۰ سال تجربه طراحی نرم‌افزارهای سازمانی در بستر Excel و VBA — بدون هزینه لایسنس، با داشبورد مدیریتی و گزارش‌ساز اختصاصی."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf hover:shadow-[0_20px_45px_rgba(16,124,65,0.15)]">
                <span
                  className="absolute left-0 top-0 h-1 w-0 bg-leaf transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-13 w-13 items-center justify-center border-2 border-ink-900 bg-mint text-leaf transition-all duration-300 group-hover:border-leaf group-hover:bg-leaf group-hover:text-paper">
                    {softwareIcon(s.icon, "h-6.5 w-6.5")}
                  </span>
                  <span className="font-mono text-[10px] text-faint" dir="ltr">
                    ROW.{String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-snug text-ink-900 sm:text-2xl">{s.title}</h3>
                <p className="mt-2.5 text-[13px] leading-7 text-ink-700">{s.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* نوار اتوماسیون */}
        <Reveal delay={150}>
          <div className="mt-10 grid gap-5 border-2 border-ink-900 bg-ink-900 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center bg-leaf/15 text-leaf-3">
                <IconFlow className="h-7 w-7" />
              </span>
              <span className="flex h-14 w-14 items-center justify-center bg-amber/15 text-amber-2">
                <IconRobot className="h-7 w-7" />
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl text-moss">اتوماسیون و هوش مصنوعی؛ گامِ بعدی حرفه‌ای شدن</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-sage">
                اتصال اکسل و Power BI به هوش مصنوعی و خودکارسازی گردش کار با n8n — تا کارهای تکراری را ماشین انجام دهد و
                تحلیل، کار شما باشد.
              </p>
            </div>
            <a
              href="https://herfeiish0.ir/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-leaf px-6 py-3 text-sm font-bold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-leaf-2"
            >
              دوره‌های AI و اتوماسیون
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── پیشینه علمی و پژوهشی ───────────── */
export function Research() {
  return (
    <section id="research" className="grid-paper relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          cell="F6"
          kicker="پیشینه علمی و پژوهشی"
          title="از سازه و لرزه‌خیزی تا سازه‌ی داده"
          desc="ریشه‌ی مهندسی؛ همان چیزی که تحلیل داده را برای ایشان از «فرمول» به «تفکر سیستمی» تبدیل کرده است."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full border-2 border-ink-900 bg-mint p-7 sm:p-8">
              <span className="flex h-14 w-14 items-center justify-center bg-ink-900 text-mint">
                <IconCap className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl leading-snug text-ink-900 sm:text-3xl">
                کارشناسی ارشد مهندسی عمران
              </h3>
              <p className="mt-2 text-sm font-bold text-leaf">پژوهشکده ساختمان و مسکن — وزارت مسکن و شهرسازی</p>
              <p className="mt-5 text-sm leading-8 text-ink-700">
                {profile.degree}. پژوهش در حوزه تحلیل خطر لرزه‌ای و لرزه‌زمین‌ساخت، پایه‌ی نگاه دقیق و داده‌محوری شد که
                امروز در داشبوردها و نرم‌افزارهای «حرفه‌ای شو» جریان دارد.
              </p>
              <a
                href="https://civilica.com/search/paper/n-%D8%A7%DB%8C%D8%B1%D8%AC%20%DA%86%D8%A7%D8%A6%DB%8C%20%D8%A7%D8%B5%D9%84%20%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2%DB%8C/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 border-b-2 border-leaf pb-1 text-sm font-bold text-leaf transition-colors hover:border-amber hover:text-ink-900"
              >
                <IconPaper className="h-4.5 w-4.5" />
                مقالات در پایگاه سیویلیکا
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:col-span-7">
            {papers.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 120}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:shadow-[0_18px_40px_rgba(16,124,65,0.13)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="border border-leaf/40 bg-mint px-2.5 py-1 font-mono text-[11px] font-bold text-leaf">
                      مقاله کنفرانسی · {i === 0 ? "۱۳۹۴" : "علمی-پژوهشی"}
                    </span>
                    <IconExt className="h-4.5 w-4.5 text-faint transition-colors group-hover:text-leaf" />
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-8 text-ink-900 transition-colors group-hover:text-leaf sm:text-2xl sm:leading-9">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] font-semibold text-ink-700">{p.meta}</p>
                  <p className="mt-1.5 text-[13px] text-ink-700/75">نویسندگان: {p.authors}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── ارتباط ───────────── */
export function Contact() {
  return (
    <section id="contact" className="grid-dark relative bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          dark
          cell="G7"
          kicker="ارتباط و شبکه‌ها"
          title="یک سلول فاصله تا حرفه‌ای شدن"
          desc="هرجا که راحت‌ترید؛ از اینستاگرام و تلگرام تا مکتب‌خونه و وب‌سایت، مسیر ارتباط باز است."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <a
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center gap-4 border border-inkline bg-ink-850/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-leaf-2 hover:bg-ink-800"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-inkline bg-ink-800 text-leaf-3 transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink-950">
                  {socialIcon(s.id, "h-6 w-6")}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-moss">{s.label}</span>
                  <span className="mt-0.5 block truncate font-mono text-xs text-sage" dir="auto">
                    {s.handle}
                  </span>
                </span>
                <IconArrow className="mr-auto h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:-translate-x-1 group-hover:text-amber-2" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* دعوت بزرگ */}
        <Reveal delay={150}>
          <div className="relative mt-12 overflow-hidden border-2 border-leaf bg-ink-850 p-8 text-center sm:p-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-leaf-3" dir="ltr">
              =IF(آماده‌ای، «شروع کن»، «همین حالا شروع کن»)
            </p>
            <h3 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-[1.3] text-moss sm:text-5xl sm:leading-[1.25]">
              امروز ردیفِ اولِ تغییر باش؛ <span className="text-amber-2">حرفه‌ای شو!</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-sage sm:text-base sm:leading-9">
              چه بخواهی اکسل را از صفر یاد بگیری، چه برای سازمانت نرم‌افزار تحت اکسل بخواهی — مسیر اینجاست.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://herfeiish0.ir/shop/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-leaf px-7 py-3.5 text-[15px] font-bold text-paper shadow-[0_12px_30px_rgba(29,163,92,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-leaf-2"
              >
                فروشگاه حرفه‌ای شو
                <IconArrow className="h-4 w-4" />
              </a>
              <a
                href="https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-moss/40 px-7 py-3 text-[15px] font-bold text-moss transition-all duration-200 hover:border-amber-2 hover:text-amber-2"
              >
                شروع از مکتب‌خونه
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
