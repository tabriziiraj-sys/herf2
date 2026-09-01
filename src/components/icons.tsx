type IconProps = { className?: string };

const base = "h-6 w-6";

export function GridLogo({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect x="1.5" y="1.5" width="29" height="29" rx="5" fill="#107C41" />
      <path d="M7 22L13 10l3.5 6L20 12l5 10" stroke="#F1F5EE" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Line({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const IconPmo = ({ className }: IconProps) => (
  <Line className={className}>
    <rect x="3" y="4" width="18" height="16" rx="1.5" />
    <path d="M3 9h18M9 4v16" />
    <path d="M12 13h6M12 16.5h4" />
  </Line>
);

export const IconWage = ({ className }: IconProps) => (
  <Line className={className}>
    <rect x="2.5" y="6" width="19" height="12" rx="1.5" />
    <circle cx="12" cy="12" r="2.8" />
    <path d="M5.5 9.5h.01M18.5 14.5h.01" strokeWidth="2.4" />
  </Line>
);

export const IconBox = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" />
    <path d="M4 7l8 4 8-4M12 11v10" />
    <path d="M8 5l8 4" />
  </Line>
);

export const IconCoin = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" transform="translate(-1,0)" />
    <circle cx="18.5" cy="6" r="3" />
  </Line>
);

export const IconGauge = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M4 19a9 9 0 1 1 16 0" />
    <path d="M12 13l4.5-4.5" />
    <circle cx="12" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
    <path d="M2.5 19h19" />
  </Line>
);

export const IconChart = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" />
    <rect x="12" y="8" width="3" height="10" />
    <rect x="17" y="5" width="3" height="13" />
  </Line>
);

export const IconRobot = ({ className }: IconProps) => (
  <Line className={className}>
    <rect x="5" y="8" width="14" height="11" rx="2" />
    <path d="M12 8V4.5M12 4.5a1.4 1.4 0 1 0-.01 0z" />
    <circle cx="9.3" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="13" r="1" fill="currentColor" stroke="none" />
    <path d="M9 16.5h6M2.5 12v4M21.5 12v4" />
  </Line>
);

export const IconFlow = ({ className }: IconProps) => (
  <Line className={className}>
    <circle cx="5.5" cy="6" r="2.5" />
    <circle cx="18.5" cy="6" r="2.5" />
    <circle cx="12" cy="18" r="2.5" />
    <path d="M8 6h8M6.5 8.2l4 7.4M17.5 8.2l-4 7.4" />
  </Line>
);

export const IconCap = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M12 4L2 8.5l10 4.5 10-4.5L12 4z" />
    <path d="M6.5 10.8v4.7c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.7" />
    <path d="M22 8.5v5" />
  </Line>
);

export const IconPaper = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M6 2.5h9l4 4V21.5H6V2.5z" />
    <path d="M15 2.5v4h4" />
    <path d="M9 12h7M9 15.5h7M9 8.5h3" />
  </Line>
);

export const IconCheck = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 10.5l4.2 4.2L16.5 5.5" />
  </svg>
);

export const IconArrow = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 10H4M9 5l-5 5 5 5" />
  </svg>
);

export const IconExt = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4H4v12h12v-4M11 3h6v6M16.5 3.5L9 11" />
  </svg>
);

/* ── شبکه‌های اجتماعی ── */
export const IconInstagram = ({ className }: IconProps) => (
  <Line className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Line>
);

export const IconTelegram = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M21 4.5L3 11.4l5.2 2 2 6 3.2-4.3 4.6 3.4L21 4.5z" />
    <path d="M8.2 13.4L18 6" />
  </Line>
);

export const IconEitaa = ({ className }: IconProps) => (
  <Line className={className}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M7.5 13.5c.4 2 2.2 3.4 4.5 3.4 2.6 0 4.5-1.9 4.5-4.5S14.5 8 12 8c-1.7 0-3.2.9-4 2.2" />
    <path d="M10 12.2h-3.4L8 9.6" />
  </Line>
);

export const IconYoutube = ({ className }: IconProps) => (
  <Line className={className}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="M10 9.2l5 2.8-5 2.8V9.2z" fill="currentColor" stroke="none" />
  </Line>
);

export const IconGlobe = ({ className }: IconProps) => (
  <Line className={className}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M3.2 12h17.6M12 3.2c2.6 2.4 3.9 5.4 3.9 8.8s-1.3 6.4-3.9 8.8c-2.6-2.4-3.9-5.4-3.9-8.8s1.3-6.4 3.9-8.8z" />
  </Line>
);

export const IconMaktab = ({ className }: IconProps) => (
  <Line className={className}>
    <path d="M4 20V7l8-4 8 4v13" />
    <path d="M4 20h16M9 20v-6h6v6" />
    <path d="M12 8.5v.01" strokeWidth="2.6" />
  </Line>
);

export const socialIcon = (id: string, cls?: string) => {
  switch (id) {
    case "instagram":
      return <IconInstagram className={cls} />;
    case "telegram":
      return <IconTelegram className={cls} />;
    case "eitaa":
      return <IconEitaa className={cls} />;
    case "youtube":
      return <IconYoutube className={cls} />;
    case "maktab":
      return <IconMaktab className={cls} />;
    default:
      return <IconGlobe className={cls} />;
  }
};

export const softwareIcon = (id: string, cls?: string) => {
  switch (id) {
    case "pmo":
      return <IconPmo className={cls} />;
    case "wage":
      return <IconWage className={cls} />;
    case "box":
      return <IconBox className={cls} />;
    case "coin":
      return <IconCoin className={cls} />;
    case "gauge":
      return <IconGauge className={cls} />;
    default:
      return <IconChart className={cls} />;
  }
};
