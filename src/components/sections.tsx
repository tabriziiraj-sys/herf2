import { faNum, profile, stats, timeline } from "../lib/data";
import { useCountUp, useInView } from "../lib/hooks";
import { IconCap, IconCheck, IconPaper } from "./icons";
import { Reveal, SectionHead } from "./ui";

function StatCell({ s, delay }: { s: (typeof stats)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const val = useCountUp(s.value, inView);
  const dec = "dec" in s && s.dec ? 1 : 0;
  return (
    <div
      ref={ref}
      className="group relative border border-inkline bg-ink-850/60 p-5 transition-colors duration-300 hover:border-leaf-2 hover:bg-ink-800 sm:p-6"
    >
      <span className="absolute left-3 top-3 font-mono text-[10px] text-faint transition-colors group-hover:text-leaf-3" dir="ltr">
        {s.cell}
      </span>
      <Reveal delay={delay}>
        <p className="font-mono text-3xl font-semibold text-moss sm:text-4xl" dir="ltr">
          {faNum(dec ? val : Math.round(val), dec)}
          <span className="text-leaf-3">{s.suffix}</span>
        </p>
        <p className="mt-2.5 text-[13px] font-medium leading-6 text-sage">{s.label}</p>
      </Reveal>
    </div>
  );
}

/** نوار آمار تیره */
export function StatsBand() {
  return (
    <section className="grid-dark relative bg-ink-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-leaf-3" dir="ltr">
              =COUNTIF(دستاوردها، «&gt;۰»)
            </p>
            <h2 className="mt-3 font-display text-3xl text-moss sm:text-4xl">اعداد، خودشان صحبت می‌کنند</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-sage">
            حاصل یک دهه تمرکز روی یک سلولِ ساده: تبدیل داده به تصمیم، و مهارت به درآمد.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCell key={s.cell} s={s} delay={(i % 4) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** درباره من + خط زمانی */
export function About() {
  return (
    <section id="about" className="grid-paper relative bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        {/* ستون چسبان */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <SectionHead
              cell="B2"
              kicker="درباره من"
              title="مهندسِ عمران که اکسل را به زبانِ کسب‌وکار ترجمه کرد"
            />
            <div className="mt-7 space-y-5">
              {profile.bio.map((p, i) => (
                <Reveal key={i} delay={i * 110}>
                  <p className="text-[15px] leading-8 text-ink-700 sm:leading-9">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <div className="mt-8 border-2 border-ink-900 bg-paper-2 p-5">
                <p className="flex items-center gap-2.5 font-display text-xl text-ink-900">
                  <IconCap className="h-6 w-6 text-leaf" />
                  مدارک و افتخارات
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-7 text-ink-700">
                  {[
                    "کارشناسی ارشد عمران — پژوهشکده ساختمان و مسکن وزارت مسکن و شهرسازی",
                    "حدود ۱۰ سال طراحی نرم‌افزار و داشبورد با Excel و VBA",
                    "مدرس رسمی مکتب‌خونه؛ ۶ دوره، ۶۶ ساعت محتوا، امتیاز ۴٫۶",
                    "مؤلف مقالات علمی در حوزه لرزه‌خیزی (سیویلیکا)",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-leaf" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* خط زمانی */}
        <div className="lg:col-span-7">
          <div className="relative border-r-2 border-dashed border-leaf/40 pr-7 sm:pr-10">
            {timeline.map((t, i) => (
              <Reveal key={t.cell} delay={i * 70} className="relative pb-9 last:pb-0">
                <span className="absolute -right-[39px] top-1 flex h-5 w-5 items-center justify-center border-2 border-leaf bg-paper sm:-right-[51px]">
                  <span className="h-1.5 w-1.5 bg-amber" />
                </span>
                <div className="group border border-line bg-paper-2/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-leaf hover:bg-paper-2 hover:shadow-[0_16px_35px_rgba(16,124,65,0.12)] sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border border-leaf/40 bg-mint px-2 py-0.5 font-mono text-[11px] font-bold text-leaf" dir="ltr">
                      {t.cell}
                    </span>
                    <h3 className="font-display text-xl text-ink-900 sm:text-2xl">{t.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-7 text-ink-700 sm:leading-8">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <a
              href="https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 border-b-2 border-leaf pb-1 text-sm font-bold text-leaf transition-colors hover:border-amber hover:text-ink-900"
            >
              <IconPaper className="h-4.5 w-4.5" />
              مشاهده صفحه رسمی مدرس در مکتب‌خونه
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
