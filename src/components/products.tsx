import { courses, faNum, packages } from "../lib/data";
import { IconArrow, IconCheck, IconExt, IconRobot } from "./icons";
import { Reveal, SectionHead, Stars } from "./ui";

/* ───────────── پکیج‌ها و محصولات ───────────── */
export function Packages() {
  const king = packages[0];
  const others = packages.slice(1);

  return (
    <section id="packages" className="grid-dark relative bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          dark
          cell="C3"
          kicker="پکیج‌ها و محصولات"
          title="مسیرِ حرفه‌ای شدن، خانه به خانه"
          desc="از جامع‌ترین پکیج اکسلِ فارسی‌زبان تا داشبوردهای سازمانی سفارشی؛ هر محصول، یک شیتِ کامل از مهارت است."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* پکیج کینگ */}
          <Reveal className="lg:col-span-7">
            <article className="group relative h-full overflow-hidden border-2 border-amber bg-ink-900 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between bg-amber px-5 py-2.5">
                <span className="font-display text-lg text-ink-950">{king.badge} 🔥</span>
                <span className="font-mono text-[11px] font-bold text-ink-900" dir="ltr">
                  {king.hours}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] text-amber-2" dir="ltr">
                  PACKAGE://KING
                </p>
                <h3 className="mt-3 font-display text-4xl leading-tight text-moss sm:text-5xl">
                  {king.name}
                  <span className="block text-2xl text-amber-2 sm:text-3xl">{king.subtitle}</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-8 text-sage">{king.desc}</p>

                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {king.includes.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-moss/90">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-leaf/20 text-leaf-3">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-inkline pt-6">
                  <div>
                    <p className="text-xs text-faint">سرمایه‌گذاری روی مهارت:</p>
                    <p className="mt-1.5 font-mono text-3xl font-semibold text-amber-2" dir="ltr">
                      {faNum(king.price)}
                      <span className="mr-1.5 text-sm text-sage">تومان</span>
                    </p>
                    <p className="mt-1.5 text-xs text-leaf-3">✓ {king.students} دانشجو تا امروز</p>
                  </div>
                  <a
                    href={king.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 bg-amber px-6 py-3.5 text-[15px] font-bold text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-2 hover:shadow-[0_14px_30px_rgba(221,154,28,0.3)]"
                  >
                    {king.cta}
                    <IconArrow className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* دو کارت دیگر */}
          <div className="grid gap-5 lg:col-span-5">
            {others.map((p, i) => (
              <Reveal key={p.id} delay={120 + i * 120}>
                <article className="group flex h-full flex-col border border-inkline bg-ink-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf-2 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="border border-inkline bg-ink-800 px-2.5 py-1 text-[11px] font-bold text-leaf-3">{p.badge}</span>
                    <span className="font-mono text-[11px] text-faint" dir="ltr">
                      {p.hours}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-moss">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-amber-2">{p.subtitle}</p>
                  <p className="mt-3 text-[13px] leading-7 text-sage">{p.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {p.includes.slice(0, 3).map((it) => (
                      <li key={it} className="flex items-center gap-2 text-[13px] text-moss/85">
                        <IconCheck className="h-3.5 w-3.5 shrink-0 text-leaf-3" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-inkline pt-5 sm:mt-6">
                    {p.price > 0 ? (
                      <p className="font-mono text-xl font-semibold text-moss" dir="ltr">
                        {faNum(p.price)}
                        <span className="mr-1 text-xs text-sage">تومان</span>
                      </p>
                    ) : (
                      <p className="text-sm font-bold text-moss">{p.students}</p>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-leaf-2 px-4 py-2 text-[13px] font-bold text-leaf-3 transition-colors duration-200 hover:bg-leaf-2 hover:text-ink-950"
                    >
                      {p.cta}
                      <IconExt />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* نوار هوش مصنوعی */}
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border border-dashed border-inkline bg-ink-900/60 px-6 py-5">
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-leaf/15 text-leaf-3">
                <IconRobot className="h-6 w-6" />
              </span>
              <span className="font-display text-xl text-moss">نسل جدید آموزش‌ها:</span>
            </span>
            <p className="max-w-2xl text-sm leading-7 text-sage">
              یادگیری دوبرابر سریع‌تر Power BI با هوش مصنوعی، اکسل هوشمند با VBA و خودکارسازی فرایندها با{" "}
              <span className="font-mono text-amber-2" dir="ltr">n8n</span> — همه در مسیر «حرفه‌ای شو».
            </p>
            <a
              href="https://herfeiish0.ir/"
              target="_blank"
              rel="noreferrer"
              className="mr-auto inline-flex items-center gap-2 text-sm font-bold text-amber-2 transition-colors hover:text-amber"
            >
              مشاهده همه محصولات
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── جدول دوره‌های مکتب‌خونه ───────────── */
export function Courses() {
  return (
    <section id="courses" className="grid-paper relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            cell="D4"
            kicker="دوره‌های مکتب‌خونه"
            title="شیتِ دوره‌ها؛ هر ردیف یک مهارت"
            desc="۶ دوره فعال با گواهی‌نامه رسمی مکتب‌خونه — از اکسلِ صفر تا Power BI با هوش مصنوعی."
          />
          <Reveal delay={200}>
            <a
              href="https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-ink-900 px-5 py-3 text-sm font-bold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-leaf"
            >
              صفحه مدرس در مکتب‌خونه
              <IconExt />
            </a>
          </Reveal>
        </div>

        {/* جدول */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-x-auto border-2 border-ink-900 bg-paper shadow-[10px_10px_0_rgba(16,124,65,0.18)]">
            <table className="w-full min-w-[820px] border-collapse text-right">
              <thead>
                <tr className="bg-ink-900 text-paper">
                  <th className="w-10 border-l border-inkline px-3 py-3 font-mono text-[11px] font-medium text-sage">#</th>
                  <th className="border-l border-inkline px-4 py-3 text-sm font-bold">نام دوره</th>
                  <th className="border-l border-inkline px-4 py-3 text-sm font-bold">سطح</th>
                  <th className="border-l border-inkline px-4 py-3 text-sm font-bold">دانشجو</th>
                  <th className="border-l border-inkline px-4 py-3 text-sm font-bold">امتیاز</th>
                  <th className="border-l border-inkline px-4 py-3 text-sm font-bold">شهریه (تومان)</th>
                  <th className="px-4 py-3 text-sm font-bold">ثبت‌نام</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, i) => (
                  <tr
                    key={c.name}
                    className={`group border-t border-line transition-colors duration-200 hover:bg-mint ${
                      i % 2 ? "bg-paper-2/60" : "bg-paper"
                    }`}
                  >
                    <td className="border-l border-line px-3 py-4 font-mono text-xs text-leaf" dir="ltr">
                      {faNum(i + 1)}
                    </td>
                    <td className="border-l border-line px-4 py-4">
                      <p className="text-[14px] font-bold leading-6 text-ink-900">{c.name}</p>
                      {c.tag && (
                        <span className="mt-1.5 inline-block bg-amber px-2 py-0.5 text-[10px] font-bold text-ink-950">
                          ★ {c.tag}
                        </span>
                      )}
                    </td>
                    <td className="border-l border-line px-4 py-4 text-[13px] text-ink-700">{c.level}</td>
                    <td className="border-l border-line px-4 py-4">
                      <span className="font-mono text-sm font-semibold text-ink-900" dir="ltr">
                        {faNum(c.students)}
                      </span>
                    </td>
                    <td className="border-l border-line px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Stars value={Math.round(c.rating)} />
                        <span className="font-mono text-xs text-ink-700" dir="ltr">
                          {faNum(c.rating, 1)} ({faNum(c.votes)})
                        </span>
                      </div>
                    </td>
                    <td className="border-l border-line px-4 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-leaf px-2 py-1 font-mono text-[13px] font-bold text-paper" dir="ltr">
                          {faNum(c.price)}
                        </span>
                        <span className="text-xs text-ink-700/60 line-through" dir="ltr">
                          {faNum(c.oldPrice)}
                        </span>
                        <span className="text-[11px] font-bold text-amber">{c.off} تخفیف</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-ink-900 px-3.5 py-2 text-xs font-bold text-ink-900 transition-all duration-200 group-hover:border-leaf group-hover:bg-leaf group-hover:text-paper"
                      >
                        مشاهده دوره
                        <IconExt />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-ink-900 bg-paper-2">
                  <td className="px-3 py-3.5 font-mono text-xs text-leaf" dir="ltr">
                    Σ
                  </td>
                  <td className="px-4 py-3.5 text-sm font-bold text-ink-900" colSpan={2}>
                    جمع: ۶ دوره · ۶۶ ساعت محتوای آموزشی
                  </td>
                  <td className="px-4 py-3.5 font-mono text-sm font-bold text-leaf" dir="ltr" colSpan={2}>
                    {faNum(18761)} دانشجو
                  </td>
                  <td className="px-4 py-3.5 text-sm font-bold text-ink-900" colSpan={2}>
                    میانگین امتیاز: <span className="text-leaf">۴٫۶ از ۵</span> — همه با گواهی‌نامه رسمی
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[12px] text-ink-700/70">
            <span className="bg-ink-900 px-2 py-0.5 text-[10px] text-leaf-3" dir="ltr">
              NOTE
            </span>
            قیمت‌ها و آمار بر اساس صفحه رسمی دوره‌ها در مکتب‌خونه؛ برای تخفیف‌های لحظه‌ای روی «مشاهده دوره» بزنید.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
