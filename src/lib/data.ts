/* ---------- helpers ---------- */
export const fa = (v: string | number): string =>
  String(v)
    .replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d])
    .replace(/,/g, "٬")
    .replace(/\./g, "٫");

export const price = (n: number): string => fa(n.toLocaleString("en-US"));

export const LINKS = {
  site: "https://herfeiish0.ir",
  shop: "https://herfeiish0.ir/shop/",
  king: "https://herfeiish0.ir/product/%D9%BE%DA%A9%DB%8C%D8%AC-king-%D9%87%D9%85%D9%87-%D8%AF%D9%88%D8%B1%D9%87-%D9%87%D8%A7/",
  viz: "https://herfeiish0.ir/product/%D8%AF%D9%88%D8%B1%D9%87-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C-%D9%85%D8%B5%D9%88%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C-%D8%AF%D8%A7%D8%AF%D9%87-%D9%87%D8%A7-%D8%AF%D8%A7%D8%B4%D8%A8%D9%88%D8%B1%D8%AF-%D9%87/",
  instagram: "https://www.instagram.com/herfeiish0/",
  telegram: "https://t.me/herfeish0",
  eitaa: "https://eitaa.com/herfeiish0",
  youtube: "https://www.youtube.com/playlist?list=PLAu43_uf7P19xDREkKt93zdp59DMSdLuk",
  maktab: "https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/",
  support: "https://eitaa.com/herfeiish0",
};

/* ---------- marquee ---------- */
export const tickerItems = [
  "Excel",
  "VBA",
  "Power BI",
  "داشبورد مدیریتی",
  "مصورسازی داده",
  "هوش مصنوعی",
  "n8n",
  "گزارش‌سازی",
  "فرمول‌نویسی",
  "اتوماسیون",
  "نرم‌افزار تحت اکسل",
  "Pivot Table",
];

/* ---------- stats ---------- */
export const heroStats = [
  { value: 15900, suffix: "+", label: "دانشجو در مکتب‌خونه" },
  { value: 102, suffix: "+", label: "ساعت ویدیوی پروژه‌محور" },
  { value: 4.7, suffix: "", decimals: 1, label: "میانگین امتیاز دانشجویان" },
];

export const aboutStats = [
  { value: 10, suffix: "+", label: "سال تجربه اجرایی" },
  { value: 15900, suffix: "+", label: "دانشجوی فعال" },
  { value: 120, suffix: "+", label: "جلسه آموزشی" },
  { value: 4, suffix: "", label: "دوره در مکتب‌خونه" },
];

/* ---------- timeline ---------- */
export const timeline = [
  {
    year: "تحصیلات",
    title: "کارشناسی ارشد مهندسی عمران",
    text: "فارغ‌التحصیل از پژوهشکده ساختمان و مسکن وزارت مسکن و شهرسازی",
    icon: "cert",
  },
  {
    year: "آغاز مسیر",
    title: "ورود به دنیای داده و اکسل",
    text: "شروع فعالیت حرفه‌ای در حوزه طراحی داشبوردهای مدیریتی و گزارش‌سازی",
    icon: "cell",
  },
  {
    year: "تخصص",
    title: "+۱۰ سال طراحی نرم‌افزار تحت اکسل",
    text: "توسعه نرم‌افزارها و داشبوردهای مدیریتی با اکسل و زبان برنامه‌نویسی VBA",
    icon: "code",
  },
  {
    year: "برند",
    title: "تأسیس «حرفه‌ای شو»",
    text: "راه‌اندازی herfeiish0.ir برای آموزش اکسل حرفه‌ای و ساخت نرم‌افزار تحت اکسل",
    icon: "spark",
  },
  {
    year: "تدریس",
    title: "مدرس رسمی مکتب‌خونه",
    text: "تدریس دوره‌های اکسل، مصورسازی داده و Power BI برای هزاران دانشجو",
    icon: "play",
  },
  {
    year: "امروز",
    title: "اکسل + هوش مصنوعی + n8n",
    text: "آموزش صفر تا ۱۰۰۰ اکسل، Power BI، هوش مصنوعی و اتوماسیون با n8n",
    icon: "bot",
  },
];

/* ---------- skills bento ---------- */
export type Skill = {
  icon: string;
  title: string;
  text: string;
  chips: string[];
  span: string;
  accent?: "leaf" | "amber" | "sky";
  visual?: "dash";
};

export const skills: Skill[] = [
  {
    icon: "dash",
    title: "داشبوردسازی مدیریتی",
    text: "طراحی داشبوردهای تعاملی و مدیریتی که داده‌های خام را به تصمیم‌های روشن تبدیل می‌کنند؛ دو برابر سریع‌تر از روش‌های معمولی.",
    chips: ["KPI", "اسلایسر", "تعاملی"],
    span: "md:col-span-4",
    accent: "leaf",
    visual: "dash",
  },
  {
    icon: "code",
    title: "برنامه‌نویسی VBA",
    text: "آموزش جامع و تخصصی، کاملاً پروژه‌محور؛ از ماکرو تا ساخت نرم‌افزار کامل.",
    chips: ["ماکرو", "UserForm", "اتوماسیون"],
    span: "md:col-span-2",
    accent: "amber",
  },
  {
    icon: "chart",
    title: "مصورسازی داده‌ها",
    text: "نمایش حرفه‌ای داده‌ها حتی بدون نمودارهای آماده؛ ترسیم نمودارهای عمومی و خاص.",
    chips: ["نمودار", "اینفوگرافیک"],
    span: "md:col-span-2",
    accent: "sky",
  },
  {
    icon: "funnel",
    title: "Power BI",
    text: "یادگیری دوبرابر سریع‌تر با کمک هوش مصنوعی؛ از اتصال داده تا انتشار داشبورد.",
    chips: ["DAX", "Power Query"],
    span: "md:col-span-2",
    accent: "amber",
  },
  {
    icon: "bot",
    title: "اکسل هوشمند با AI",
    text: "فرمول‌نویسی، کدنویسی VBA و گزارش‌سازی با کمک هوش مصنوعی و اتوماسیون n8n.",
    chips: ["Copilot", "n8n", "گزارش‌سازی"],
    span: "md:col-span-2",
    accent: "leaf",
  },
  {
    icon: "lock",
    title: "نرم‌افزار تحت اکسل",
    text: "قفل‌گذاری پیشرفته، فرم‌ها، دکمه‌ها و امکانات حرفه‌ای که اکسل را به نرم‌افزار تبدیل می‌کند.",
    chips: ["فرم", "دکمه", "امنیت"],
    span: "md:col-span-6 lg:col-span-6 md:!col-span-2",
    accent: "sky",
  },
];

/* ---------- maktabkhooneh courses ---------- */
export type Course = {
  title: string;
  desc: string;
  url: string;
  students: number;
  rating: number;
  votes: number;
  sessions?: string;
  hours?: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  cert: boolean;
  features: string[];
};

export const courses: Course[] = [
  {
    title: "آموزش اکسل از صفر",
    desc: "شروع از نقطه صفر؛ همه چیزی که برای ورود قدرتمند به دنیای اکسل لازم دارید.",
    url: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A7%DA%A9%D8%B3%D9%84-%D8%B5%D9%81%D8%B1-mk3323/",
    students: 2132,
    rating: 4.7,
    votes: 180,
    price: 1999000,
    badge: "محبوب کاربران",
    cert: true,
    features: ["مناسب مبتدی مطلق", "گواهی‌نامه پایان دوره", "تمرین‌های کاربردی"],
  },
  {
    title: "مصورسازی داده‌ها با اکسل",
    desc: "پرمخاطب‌ترین دوره؛ ۸۲ جلسه آموزش ساخت داشبوردهای حرفه‌ای و نمودارهای خاص.",
    url: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D8%B5%D9%88%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C-%D8%AF%D8%A7%D8%AF%D9%87-%D8%A7%DA%A9%D8%B3%D9%84-mk1641/",
    students: 9553,
    rating: 4.6,
    votes: 275,
    sessions: "۸۲ جلسه",
    hours: "۱۱ ساعت",
    price: 486850,
    oldPrice: 749000,
    badge: "۳۵٪ تخفیف",
    cert: true,
    features: ["داشبورد بدون نمودار آماده", "نمودارهای عمومی و خاص", "پروژه واقعی"],
  },
  {
    title: "اکسل هوشمند با هوش مصنوعی",
    desc: "فرمول‌نویسی، کدنویسی VBA و گزارش‌سازی در اکسل با کمک هوش مصنوعی.",
    url: "https://maktabkhooneh.org/learn/excel-programming/",
    students: 4239,
    rating: 4.4,
    votes: 96,
    sessions: "۱۹ جلسه",
    hours: "۵ ساعت",
    price: 699000,
    cert: true,
    features: ["فرمول‌نویسی با AI", "کدنویسی VBA", "گزارش‌سازی خودکار"],
  },
  {
    title: "Power BI دوبرابر سریع‌تر با AI",
    desc: "یادگیری صفر تا صد پاور بی آی و ساخت داشبورد، با سرعتی دوبرابر به کمک هوش مصنوعی.",
    url: "https://maktabkhooneh.org/course/%DB%8C%D8%A7%D8%AF%DA%AF%DB%8C%D8%B1%DB%8C-%D8%AF%D9%88%D8%A8%D8%B1%D8%A7%D8%A8%D8%B1-%D8%B3%D8%B1%DB%8C%D8%B9%D8%AA%D8%B1-power-bi-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-mk12016/",
    students: 541,
    rating: 5,
    votes: 6,
    sessions: "۲۲ جلسه",
    hours: "۵ ساعت",
    price: 149000,
    oldPrice: 134100,
    cert: false,
    features: ["با کمک هوش مصنوعی", "داشبورد تعاملی", "زیرنویس دوره"],
  },
];

/* ---------- products (herfeiish0.ir) ---------- */
export type Product = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  price: number;
  students: string;
  url: string;
  features: string[];
  featured?: boolean;
  accent: "amber" | "leaf" | "sky";
  hours?: string;
};

export const products: Product[] = [
  {
    id: "king",
    title: "پکیج King",
    tag: "اکسل صفر تا ۱۰۰۰ برای کسب درآمد",
    desc: "جامع‌ترین پکیج آموزش اکسل به زبان فارسی؛ مسیری کامل از اولین فرمول تا ساخت نرم‌افزار تحت اکسل و کسب درآمد میلیونی.",
    price: 11082500,
    students: "+۴٬۰۰۰ دانشجو",
    url: LINKS.king,
    hours: "۱۰۲ ساعت",
    featured: true,
    accent: "amber",
    features: [
      "۱۰۲ ساعت ویدیوی آموزشی پروژه‌محور",
      "آموزش صفر تا صد اکسل + فرمول‌نویسی پیشرفته",
      "داشبوردسازی و مصورسازی داده‌ها",
      "برنامه‌نویسی VBA و ساخت نرم‌افزار تحت اکسل",
      "Power BI و هوش مصنوعی و n8n",
      "پشتیبانی و همراهی تا کسب درآمد",
    ],
  },
  {
    id: "pbi",
    title: "آموزش جامع Power BI + اکسل کاربردی",
    tag: "داشبورد دوبرابر سریع‌تر",
    desc: "ترکیب قدرت پاور بی آی و اکسل برای ساخت داشبوردهای سازمانی حرفه‌ای.",
    price: 8498000,
    students: "+۱۰۰ دانشجو",
    url: LINKS.shop,
    accent: "sky",
    features: ["صفر تا صد Power BI", "اکسل کاربردی", "پروژه‌های واقعی"],
  },
  {
    id: "vba",
    title: "پکیج جامع و تخصصی VBA",
    tag: "آموزش پروژه‌محور",
    desc: "از ماکروهای ساده تا ساخت نرم‌افزار کامل با فرم، دکمه و قفل پیشرفته.",
    price: 4025000,
    students: "پروژه‌محور",
    url: LINKS.shop,
    accent: "amber",
    features: ["پروژه‌های متنوع", "فرم و دکمه و اتوماسیون", "قفل‌گذاری پیشرفته"],
  },
  {
    id: "viz",
    title: "مصورسازی داده‌ها و داشبوردهای حرفه‌ای",
    tag: "پرمخاطب‌ترین دوره",
    desc: "مصورسازی داده بدون نمودارهای آماده، ترسیم نمودار عمومی و ساخت داشبورد حرفه‌ای.",
    price: 749000,
    students: "+۹٬۵۰۰ دانشجو",
    url: LINKS.viz,
    accent: "leaf",
    features: ["مصورسازی بدون نمودار", "نمودار عمومی", "داشبورد حرفه‌ای"],
  },
];

/* ---------- income path ---------- */
export const pathSteps = [
  {
    n: "۰۱",
    title: "از صفر شروع کن",
    text: "مفاهیم پایه، محیط اکسل و اولین فرمول‌ها؛ بدون هیچ پیش‌نیازی.",
  },
  {
    n: "۰۲",
    title: "فرمول‌نویسی و توابع کاربردی",
    text: "توابع جستجو، شرطی و آرایه‌ای که قلب هر گزارش حرفه‌ای هستند.",
  },
  {
    n: "۰۳",
    title: "داشبورد و مصورسازی داده",
    text: "تبدیل داده‌های خام به داشبوردهای مدیریتی چشم‌نواز و تعاملی.",
  },
  {
    n: "۰۴",
    title: "VBA و نرم‌افزار تحت اکسل",
    text: "اتوماسیون، فرم‌ها و قفل‌گذاری؛ اکسل دیگر فقط یک صفحه‌گسترده نیست.",
  },
  {
    n: "۰۵",
    title: "Power BI و هوش مصنوعی",
    text: "گزارش‌های سازمانی با Power BI و شتاب‌گرفتن با AI و n8n.",
  },
  {
    n: "۰۶",
    title: "کسب درآمد میلیونی",
    text: "پروژه‌گیری، استخدام، فروش داشبورد و نرم‌افزار تحت اکسل.",
  },
];

/* ---------- testimonials ---------- */
export const testimonials = [
  {
    name: "مریم — حسابدار",
    role: "دوره مصورسازی داده‌ها",
    text: "داشبوردی که برای شرکتمون ساختم باعث شد گزارش ماهانه از ۳ روز به ۲ ساعت برسه. تدریس مهندس تبریزی کاملاً پروژه‌محوره.",
    rot: "-rotate-2",
    off: "md:translate-y-4",
  },
  {
    name: "امیر — کارشناس فروش",
    role: "پکیج King",
    text: "از صفرِ صفر شروع کردم؛ الان پروژه داشبورد می‌گیرم. پشتیبانی واقعاً پای کاره و هر سوالی داشتم جواب گرفتم.",
    rot: "rotate-1",
    off: "md:-translate-y-2",
  },
  {
    name: "نگار — دانشجوی مدیریت",
    role: "اکسل از صفر (مکتب‌خونه)",
    text: "بیان ساده و مثال‌های واقعی. اولین‌بار بود که فرمول‌های اکسل رو واقعاً فهمیدم، نه حفظ کردم.",
    rot: "-rotate-1",
    off: "md:translate-y-8",
  },
  {
    name: "کاوه — کارشناس کنترل پروژه",
    role: "پکیج VBA",
    text: "با VBA یک نرم‌افزار ثبت گزارش روزانه ساختیم که کل تیم ازش استفاده می‌کنه. دوره کاملاً پروژه‌محوره.",
    rot: "rotate-2",
    off: "md:translate-y-0",
  },
  {
    name: "سحر — تحلیلگر داده",
    role: "Power BI",
    text: "تکنیک‌های هوش مصنوعی که یاد داد سرعت یادگیریم رو واقعاً دو برابر کرد. داشبوردهام الان سطح دیگری دارند.",
    rot: "-rotate-2",
    off: "md:translate-y-6",
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: "آیا برای شروع دوره‌ها نیاز به پیش‌نیاز دارم؟",
    a: "خیر. دوره «آموزش اکسل از صفر» و پکیج King از نقطه صفر مطلق شروع می‌شوند و فقط به یک کامپیوتر و علاقه نیاز دارید. بقیه دوره‌ها نیز قدم‌به‌قدم شما را همراهی می‌کنند.",
  },
  {
    q: "تفاوت پکیج King با دوره‌های مکتب‌خونه چیست؟",
    a: "دوره‌های مکتب‌خونه مهارت‌محور و همراه با گواهی‌نامه رسمی هستند. پکیج King یک مسیر کامل ۱۰۲ ساعته با هدف کسب درآمد است؛ از صفر تا ساخت نرم‌افزار تحت اکسل، همراه با پشتیبانی مستقیم مجموعه حرفه‌ای شو.",
  },
  {
    q: "پشتیبانی دوره‌ها چطور انجام می‌شود؟",
    a: "از طریق آی‌دی پشتیبانی @Herfeiish0_support و کانال‌های تلگرام، ایتا و اینستاگرام. تعهد ما فقط آموزش نیست؛ همراهی شما تا رسیدن به نتیجه است.",
  },
  {
    q: "آیا دوره‌ها گواهی‌نامه دارند؟",
    a: "بله؛ دوره‌های مکتب‌خونه دارای گواهی‌نامه رسمی پایان دوره هستند که در رزومه شما قابل استناد است.",
  },
  {
    q: "واقعاً می‌شود از اکسل درآمد میلیونی داشت؟",
    a: "بله؛ طراحی داشبورد برای شرکت‌ها، اتوماسیون گزارش‌های حسابداری و فروش، ساخت نرم‌افزار تحت اکسل و تحلیل داده از پرتقاضاترین مهارت‌های بازار کار امروز هستند. در پکیج King مسیر کسب درآمد قدم‌به‌قدم آموزش داده می‌شود.",
  },
];

/* ---------- socials ---------- */
export const socials = [
  { name: "اینستاگرام", handle: "herfeiish0@", url: LINKS.instagram, icon: "instagram", accent: "text-amber-soft" },
  { name: "تلگرام", handle: "herfeish0@", url: LINKS.telegram, icon: "telegram", accent: "text-skyx" },
  { name: "ایتا", handle: "herfeiish0@", url: LINKS.eitaa, icon: "eitaa", accent: "text-leaf-soft" },
  { name: "یوتیوب", handle: "آموزش فرمول‌ها و داشبورد", url: LINKS.youtube, icon: "youtube", accent: "text-amber-soft" },
  { name: "مکتب‌خونه", handle: "پروفایل مدرس", url: LINKS.maktab, icon: "cap", accent: "text-leaf-soft" },
  { name: "وب‌سایت", handle: "herfeiish0.ir", url: LINKS.site, icon: "globe", accent: "text-skyx" },
];

export const navLinks = [
  { label: "درباره من", href: "#about" },
  { label: "تخصص‌ها", href: "#skills" },
  { label: "دوره‌ها", href: "#courses" },
  { label: "پکیج‌ها", href: "#products" },
  { label: "مسیر درآمد", href: "#path" },
  { label: "سوالات", href: "#faq" },
];
