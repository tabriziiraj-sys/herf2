/* ── داده‌های واقعی گردآوری‌شده از وب (مکتب‌خونه، حرفه‌ای‌شو، سیویلیکا، شبکه‌های اجتماعی) ── */

export const faNum = (n: number | string, dec = 0): string => {
  const num = typeof n === "string" ? parseFloat(n) : n;
  const fixed = num.toFixed(dec);
  const [int, frac] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
  const s = frac ? `${grouped}٫${frac}` : grouped;
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};

export const profile = {
  name: "ایرج چائی اصل تبریزی",
  brand: "حرفه‌ای شو",
  tagline: "مدرس اکسل، Power BI و هوش مصنوعی",
  degree: "کارشناسی ارشد عمران — پژوهشکده ساختمان و مسکن وزارت مسکن و شهرسازی",
  bio: [
    "ایرج چائی اصل تبریزی، فارغ‌التحصیل کارشناسی ارشد عمران از پژوهشکده ساختمان و مسکن وزارت مسکن و شهرسازی است. ایشان حدود ۱۰ سال است که در حوزه طراحی نرم‌افزارها، داشبوردهای مدیریتی، مصورسازی اطلاعات و غیره در بستر اکسل و زبان برنامه‌نویسی VBA فعالیت می‌کند.",
    "ایشان سابقه طراحی نرم‌افزار در زمینه‌های مدیریت و کنترل پروژه (PMO)، حقوق و دستمزد، انبارداری، سیستم ثبت هزینه‌ها و درآمدها، سود و زیان و غیره را داشته و اکنون با برند «حرفه‌ای شو» یکی از جامع‌ترین مسیرهای آموزش اکسل به زبان فارسی را از صفرِ صفر تا کسب درآمد میلیونی هدایت می‌کند.",
  ],
};

export const stats = [
  { value: 10, suffix: "+", label: "سال تجربه تخصصی", cell: "A1" },
  { value: 18761, suffix: "", label: "دانشجوی مکتب‌خونه", cell: "B1" },
  { value: 13000, suffix: "+", label: "دانشجوی موفق وب‌سایت", cell: "C1" },
  { value: 102, suffix: "", label: "ساعت ویدیو در پکیج کینگ", cell: "D1" },
  { value: 66, suffix: "", label: "ساعت محتوای مکتب‌خونه", cell: "E1" },
  { value: 100, suffix: "+", label: "شرکت با پرسنل همراه", cell: "F1" },
  { value: 4.6, suffix: "", label: "امتیاز دانشجویان (از ۵)", dec: 1, cell: "G1" },
  { value: 6, suffix: "", label: "دوره فعال آموزشی", cell: "H1" },
];

export const timeline = [
  {
    cell: "A2",
    title: "کارشناسی ارشد عمران",
    text: "فارغ‌التحصیل از پژوهشکده ساختمان و مسکن وزارت مسکن و شهرسازی؛ پایه‌ای مهندسی برای نگاه تحلیلی به داده.",
  },
  {
    cell: "A3",
    title: "پژوهش‌های لرزه‌خیزی",
    text: "نگارش مقالات علمی در تحلیل احتمالاتی خطر لرزه‌ای و لرزه‌زمین‌ساخت؛ ثبت‌شده در سیویلیکا و شبکه‌های علمی کشور.",
  },
  {
    cell: "A4",
    title: "ورود به دنیای اکسل و VBA",
    text: "آغاز حدود ۱۰ سال فعالیت مستمر در طراحی نرم‌افزار، داشبورد مدیریتی و مصورسازی اطلاعات در بستر اکسل.",
  },
  {
    cell: "A5",
    title: "نرم‌افزارهای سازمانی",
    text: "طراحی سیستم‌های PMO، حقوق و دستمزد، انبارداری، ثبت هزینه‌ها و درآمدها و سود و زیان برای کسب‌وکارها.",
  },
  {
    cell: "A6",
    title: "تدریس در مکتب‌خونه",
    text: "انتشار دوره‌های پرمخاطب اکسل و مصورسازی داده؛ بیش از ۱۸ هزار دانشجو و امتیاز ۴٫۶ از ۵.",
  },
  {
    cell: "A7",
    title: "تأسیس «حرفه‌ای شو»",
    text: "راه‌اندازی herfeiish0.ir و تربیت بیش از ۱۳ هزار دانشجوی موفق؛ پرسنل بیش از ۱۰۰ شرکت نام‌آشنا همراه شدند.",
  },
  {
    cell: "A8",
    title: "هوش مصنوعی و اتوماسیون",
    text: "توسعه آموزش‌های Power BI با هوش مصنوعی، اکسل هوشمند با VBA و خودکارسازی فرایندها با n8n.",
  },
];

export const packages = [
  {
    id: "king",
    name: "پکیج King",
    subtitle: "اکسل صفر تا ۱۰۰۰ برای کسب درآمد",
    desc: "جامع‌ترین پکیج آموزش اکسل به زبان فارسی؛ ۱۰۲ ساعت ویدیوی آموزشی پروژه‌محور از صفرِ صفر تا طراحی نرم‌افزار تحت اکسل و درآمد میلیونی.",
    price: 11082500,
    students: "۴۰۰۰+",
    badge: "پرفروش‌ترین",
    featured: true,
    hours: "۱۰۲ ساعت",
    includes: [
      "آموزش اکسل از صفر تا پیشرفته",
      "فرمول‌ها و توابع کاربردی",
      "برنامه‌نویسی VBA و ماکرو",
      "داشبوردسازی و مصورسازی داده",
      "طراحی نرم‌افزار تحت اکسل",
      "مسیر کسب درآمد از اکسل",
      "Power BI و هوش مصنوعی",
      "آپدیت‌های دائمی و پشتیبانی",
    ],
    link: "https://herfeiish0.ir/product/%D9%BE%DA%A9%DB%8C%D8%AC-king-%D9%87%D9%85%D9%87-%D8%AF%D9%88%D8%B1%D9%87-%D9%87%D8%A7/",
    cta: "مشاهده پکیج King",
  },
  {
    id: "pbi",
    name: "آموزش جامع Power BI + اکسل کاربردی",
    subtitle: "از داده خام تا داشبورد تصمیم‌گیری",
    desc: "تسلط بر مصورسازی حرفه‌ای داده، مدل‌سازی و گزارش‌سازی تعاملی در Power BI در کنار اکسل کاربردی روزمره.",
    price: 8498000,
    students: "۱۰۰+",
    badge: "تخصصی",
    featured: false,
    hours: "پروژه‌محور",
    includes: [
      "Power Query و پاک‌سازی داده",
      "مدل‌سازی و DAX",
      "داشبوردهای تعاملی مدیریتی",
      "اتصال اکسل و Power BI",
    ],
    link: "https://herfeiish0.ir/shop/",
    cta: "مشاهده در فروشگاه",
  },
  {
    id: "custom",
    name: "طراحی نرم‌افزار تحت اکسل",
    subtitle: "سفارش اختصاصی برای سازمان شما",
    desc: "طراحی و پیاده‌سازی نرم‌افزارهای مدیریت و کنترل پروژه (PMO)، حقوق و دستمزد، انبارداری، هزینه‌ها و درآمدها و سود و زیان با VBA و داشبورد مدیریتی.",
    price: 0,
    students: "۱۰+ سال سابقه",
    badge: "سفارشی",
    featured: false,
    hours: "قراردادی",
    includes: [
      "تحلیل نیاز و فرایند سازمان",
      "طراحی سیستم با Excel و VBA",
      "داشبورد مدیریتی و گزارش‌ساز",
      "استقرار، آموزش و پشتیبانی",
    ],
    link: "https://herfeiish0.ir/",
    cta: "ثبت درخواست",
  },
];

export const courses = [
  {
    name: "دوره آموزش مصورسازی داده‌ها با اکسل",
    level: "مقدماتی تا پیشرفته",
    students: 9553,
    rating: 4.6,
    votes: 278,
    price: 486850,
    oldPrice: 749000,
    off: "۳۵٪",
    tag: "",
    link: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D8%B5%D9%88%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C-%D8%AF%D8%A7%D8%AF%D9%87-%D8%A7%DA%A9%D8%B3%D9%84-mk1641/",
  },
  {
    name: "یادگیری دوبرابر سریع‌تر Power BI با هوش مصنوعی",
    level: "مقدماتی تا پیشرفته",
    students: 3247,
    rating: 4.7,
    votes: 224,
    price: 2249500,
    oldPrice: 4499000,
    off: "۵۰٪",
    tag: "محبوب کاربران",
    link: "https://maktabkhooneh.org/course/%DB%8C%D8%A7%D8%AF%DA%AF%DB%8C%D8%B1%DB%8C-%D8%AF%D9%88%D8%A8%D8%B1%D8%A7%D8%A8%D8%B1-%D8%B3%D8%B1%DB%8C%D8%B9%D8%AA%D8%B1-power-bi-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-mk12016/",
  },
  {
    name: "اکسل هوشمند: فرمول‌نویسی، VBA و گزارش‌سازی با هوش مصنوعی",
    level: "متوسط",
    students: 4248,
    rating: 4.4,
    votes: 104,
    price: 419400,
    oldPrice: 699000,
    off: "۴۰٪",
    tag: "",
    link: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%81%D8%B1%D9%85%D9%88%D9%84-%DA%A9%D8%AF-vba-%DA%AF%D8%B2%D8%A7%D8%B1%D8%B4-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A7%DA%A9%D8%B3%D9%84-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-mk11151/",
  },
  {
    name: "آموزش اکسل از صفر",
    level: "مقدماتی",
    students: 3807,
    rating: 4.7,
    votes: 260,
    price: 551850,
    oldPrice: 849000,
    off: "۳۵٪",
    tag: "",
    link: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A7%DA%A9%D8%B3%D9%84-%D8%A7%D8%B2-%D8%B5%D9%81%D8%B1-mk3323/",
  },
  {
    name: "آموزش فرمول‌ها و توابع کاربردی اکسل",
    level: "متوسط تا پیشرفته",
    students: 2133,
    rating: 4.7,
    votes: 180,
    price: 799600,
    oldPrice: 1999000,
    off: "۶۰٪",
    tag: "محبوب کاربران",
    link: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%81%D8%B1%D9%85%D9%88%D9%84-%D8%AA%D9%88%D8%A7%D8%A8%D8%B9-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-%D8%A7%DA%A9%D8%B3%D9%84-mk2121/",
  },
  {
    name: "آموزش مقدماتی گوگل شیت (Google Sheets)",
    level: "مقدماتی",
    students: 552,
    rating: 4.4,
    votes: 30,
    price: 449700,
    oldPrice: 1499000,
    off: "۷۰٪",
    tag: "",
    link: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%D9%82%D8%AF%D9%85%D8%A7%D8%AA%DB%8C-%DA%AF%D9%88%DA%AF%D9%84-%D8%B4%DB%8C%D8%AA-google-sheets-mk10236/",
  },
];

export const software = [
  {
    icon: "pmo",
    title: "مدیریت و کنترل پروژه (PMO)",
    text: "سیستم جامع پایش پیشرفت، منابع و گزارش‌های دوره‌ای پروژه با داشبورد مدیریتی زنده.",
    chips: ["Excel", "VBA", "Dashboard"],
  },
  {
    icon: "wage",
    title: "حقوق و دستمزد",
    text: "محاسبه خودکار کارکرد، اضافه‌کار، کسورات و فیش حقوقی با خروجی آماده برای حسابداری.",
    chips: ["Excel", "VBA", "گزارش‌ساز"],
  },
  {
    icon: "box",
    title: "انبارداری",
    text: "ثبت ورود و خروج کالا، نقطه سفارش، ریالی کردن موجودی و گزارش گردش انبار.",
    chips: ["Excel", "Power Query"],
  },
  {
    icon: "coin",
    title: "هزینه‌ها، درآمدها و سود و زیان",
    text: "ثبت روزانه تراکنش‌ها، دسته‌بندی خودکار و صورت سود و زیان ماهانه در یک نگاه.",
    chips: ["Excel", "Dashboard"],
  },
  {
    icon: "gauge",
    title: "داشبوردهای مدیریتی",
    text: "مصورسازی اطلاعات کلیدی کسب‌وکار با نمودارهای تعاملی و به‌روزرسانی خودکار.",
    chips: ["Excel", "Power BI"],
  },
  {
    icon: "chart",
    title: "مصورسازی داده",
    text: "تبدیل داده‌های خام به نمودارها و اینفوگرافیک‌های گویا برای تصمیم‌گیری سریع‌تر.",
    chips: ["Charts", "Pivot", "Slicer"],
  },
];

export const papers = [
  {
    title: "تحلیل احتمالاتی خطر لرزه‌ای شهرستان مراغه واقع در استان آذربایجان شرقی",
    meta: "هفتمین کنفرانس بین‌المللی مدیریت جامع بحران — ۱۳۹۴",
    authors: "علی بیت‌اللهی، ایرج چائی اصل تبریزی، مینا باقری ملاحاجلو",
    link: "https://elmnet.ir/article/20459407-32152/",
  },
  {
    title: "بررسی لرزه‌زمین‌ساخت و لرزه‌خیزی شهرستان مهدی‌شهر واقع در استان سمنان",
    meta: "جنوب رشته‌کوه‌های البرز — مقاله کنفرانسی",
    authors: "ایرج چائی اصل تبریزی، کیوان فاتحی‌منش، مینا باقری ملاحاجلو",
    link: "https://civilica.com/search/paper/n-%D8%A7%DB%8C%D8%B1%D8%AC%20%DA%86%D8%A7%D8%A6%DB%8C%20%D8%A7%D8%B5%D9%84%20%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2%DB%8C/",
  },
];

export const socials = [
  { id: "web", label: "وب‌سایت حرفه‌ای شو", handle: "herfeiish0.ir", link: "https://herfeiish0.ir/" },
  { id: "instagram", label: "اینستاگرام", handle: "@herfeiish0", link: "https://www.instagram.com/herfeiish0/" },
  { id: "telegram", label: "تلگرام", handle: "@herfeish0", link: "https://t.me/herfeish0" },
  { id: "eitaa", label: "ایتا", handle: "herfeiish0", link: "https://eitaa.com/herfeiish0" },
  { id: "youtube", label: "یوتیوب", handle: "آموزش فرمول‌ها و مصورسازی", link: "https://www.youtube.com/playlist?list=PLAu43_uf7P19xDREkKt93zdp59DMSdLuk" },
  { id: "maktab", label: "مکتب‌خونه", handle: "۶ دوره · ۱۸٬۷۶۱ دانشجو", link: "https://maktabkhooneh.org/teacher/iraj-chaei-asl-tabrizi/" },
];

export const marqueeItems = [
  "فرمول‌نویسی اکسل",
  "برنامه‌نویسی VBA",
  "Power BI",
  "داشبورد مدیریتی",
  "مصورسازی داده",
  "گوگل شیت",
  "هوش مصنوعی",
  "اتوماسیون n8n",
  "کنترل پروژه PMO",
  "حقوق و دستمزد",
  "انبارداری",
  "سود و زیان",
];

export const formulas = [
  "=حرفه‌ای‌شو(ایرج؛ اکسل؛ Power BI؛ AI)",
  "=SUM(تجربه۱۰ساله + مهارت + آموزش)",
  "=VLOOKUP(«ایرج»، دنیای_اکسل، ۲، ۰)",
];

export const navLinks = [
  { id: "home", label: "خانه" },
  { id: "about", label: "درباره من" },
  { id: "packages", label: "پکیج‌ها" },
  { id: "courses", label: "دوره‌ها" },
  { id: "software", label: "نرم‌افزارها" },
  { id: "research", label: "پژوهش" },
  { id: "contact", label: "ارتباط" },
];
