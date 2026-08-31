import React from "react";

type P = { className?: string; strokeWidth?: number };

const S = ({ className = "w-6 h-6", strokeWidth = 1.7, children }: P & { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IconCell = (p: P) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 3v18" />
    <rect x="10.2" y="10.2" width="9.6" height="9.6" fill="currentColor" opacity="0.25" stroke="none" />
  </S>
);

export const IconDash = (p: P) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 14v3M11 11v6M15 8v9" />
    <path d="M7 8.5h3M13.5 5.5H17" opacity="0.6" />
  </S>
);

export const IconCode = (p: P) => (
  <S {...p}>
    <path d="m8 8-4.5 4L8 16M16 8l4.5 4L16 16" />
    <path d="m13.2 5.5-2.4 13" />
  </S>
);

export const IconChart = (p: P) => (
  <S {...p}>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="m7 14 4-4 3 3 5-6" />
    <circle cx="19" cy="7" r="1.4" fill="currentColor" stroke="none" />
  </S>
);

export const IconFunnel = (p: P) => (
  <S {...p}>
    <path d="M4 5h16l-6.2 7v5.5L10.2 20v-8L4 5Z" />
  </S>
);

export const IconBot = (p: P) => (
  <S {...p}>
    <rect x="5" y="8" width="14" height="10" rx="3" />
    <path d="M12 8V5M12 5a1.4 1.4 0 1 0 0-2.8A1.4 1.4 0 0 0 12 5ZM9.5 12.5v.01M14.5 12.5v.01" />
    <path d="M9.5 15.5c.8.6 4.2.6 5 0" />
    <path d="M2.8 12v3M21.2 12v3" />
  </S>
);

export const IconLock = (p: P) => (
  <S {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
    <path d="M8 10.5V7.8a4 4 0 1 1 8 0v2.7" />
    <path d="M12 14.5v2" />
  </S>
);

export const IconCert = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="9" r="5.2" />
    <path d="m9.6 8.8 1.7 1.7 3.2-3.2" />
    <path d="m8.8 13.3-1.6 6 4.8-2.6 4.8 2.6-1.6-6" />
  </S>
);

export const IconPlay = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.6v6.8L15.4 12 10 8.6Z" fill="currentColor" stroke="none" opacity="0.9" />
  </S>
);

export const IconSpark = (p: P) => (
  <S {...p}>
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.3l-1.8-5.7-5.7-1.8L10.2 9 12 3.5Z" />
    <path d="M19 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" strokeWidth="1.2" />
  </S>
);

export const IconCap = (p: P) => (
  <S {...p}>
    <path d="m12 4.5 9.5 4.5L12 13.5 2.5 9 12 4.5Z" />
    <path d="M6.5 11v4.2c0 1.2 2.5 2.6 5.5 2.6s5.5-1.4 5.5-2.6V11" />
    <path d="M21.5 9v5" />
  </S>
);

export const IconGlobe = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z" />
  </S>
);

export const IconInstagram = (p: P) => (
  <S {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </S>
);

export const IconTelegram = (p: P) => (
  <S {...p}>
    <path d="m21 4.5-3.2 15.2c-.15.7-.6.9-1.2.55l-4.6-3.4-2.2 2.15c-.25.25-.45.45-.9.45l.35-4.65L17.8 7c.35-.3-.1-.5-.55-.2L6.7 13.6l-4.5-1.4c-1-.3-1-1 .2-1.45l17.4-6.7c.8-.3 1.5.2 1.2 1.45Z" />
  </S>
);

export const IconEitaa = (p: P) => (
  <S {...p}>
    <path d="M20 11.6c0 4.5-3.6 8-8 8-1 0-1.9-.18-2.8-.5L4 20.5l1.5-4A8 8 0 1 1 20 11.6Z" />
    <path d="M8.5 10h7M8.5 13.2h4.5" />
  </S>
);

export const IconYoutube = (p: P) => (
  <S {...p}>
    <rect x="2.8" y="5.5" width="18.4" height="13" rx="3.5" />
    <path d="M10.2 9.2v5.6L15 12l-4.8-2.8Z" fill="currentColor" stroke="none" />
  </S>
);

export const IconStar = (p: P) => (
  <svg viewBox="0 0 24 24" className={p.className ?? "w-4 h-4"} fill="currentColor" aria-hidden="true">
    <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3-4.7-4.4 6.4-.8L12 2.8Z" />
  </svg>
);

export const IconArrow = (p: P) => (
  <S {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </S>
);

export const IconExt = (p: P) => (
  <S {...p}>
    <path d="M14 5h5v5M19 5l-8.5 8.5" />
    <path d="M19 13.5V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3.5" />
  </S>
);

export const IconCheck = (p: P) => (
  <S {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </S>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 24 24" className={p.className ?? "w-6 h-6"} fill="currentColor" aria-hidden="true">
    <path d="M10.2 6.5c-3.4 1.6-5.2 4-5.2 7.4 0 2.2 1.3 3.8 3.2 3.8 1.7 0 3-1.3 3-3s-1.2-2.9-2.8-2.9c.3-1.7 1.5-3 3.4-4L10.2 6.5Zm8.6 0c-3.4 1.6-5.2 4-5.2 7.4 0 2.2 1.3 3.8 3.2 3.8 1.7 0 3-1.3 3-3s-1.2-2.9-2.8-2.9c.3-1.7 1.5-3 3.4-4L18.8 6.5Z" />
  </svg>
);

export const IconSend = (p: P) => (
  <S {...p}>
    <path d="M20.5 3.5 3.5 10l6 2.5L12 19l8.5-15.5Z" />
    <path d="m9.5 12.5 4-4" />
  </S>
);

export const IconClock = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </S>
);

export const IconUsers = (p: P) => (
  <S {...p}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" />
    <path d="M15.5 5.5a3.5 3.5 0 0 1 0 6M18 14.7c1.7.8 2.7 2.4 3 4.8" />
  </S>
);

export const IconSigma = (p: P) => (
  <S {...p}>
    <path d="M17.5 7.5V5.8H6.5L12 12l-5.5 6.2h11v-1.7" />
  </S>
);

export const IconMenu = (p: P) => (
  <S {...p}>
    <path d="M4 7h16M4 12h10M4 17h16" />
  </S>
);

export const IconClose = (p: P) => (
  <S {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </S>
);

export const IconPhone = (p: P) => (
  <S {...p}>
    <path d="M5.5 4h3.2l1.5 4-2 1.5a12.5 12.5 0 0 0 5.8 5.8l1.5-2 4 1.5v3.2c0 1-.8 1.9-1.9 1.8C10 19.3 4.7 14 4.2 6.4 4.1 5.3 4.5 4 5.5 4Z" />
  </S>
);

export const Logo = ({ className = "w-9 h-9" }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect x="2" y="2" width="36" height="36" rx="9" fill="#11221c" stroke="#24493a" />
    <path d="M10 10h8v8h-8zM22 10h8v8h-8zM10 22h8v8h-8z" fill="#1d4032" />
    <rect x="22" y="22" width="8" height="8" rx="1" fill="#22b573" />
    <path d="M24.5 26h3M26 24.5v3" stroke="#0b1512" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
