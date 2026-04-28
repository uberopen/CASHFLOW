// CashFlow Smart — Design tokens & primitives v2

const CF = {
  navy0: 'var(--cf-navy0)', navy1: 'var(--cf-navy1)', navy2: 'var(--cf-navy2)', navy3: 'var(--cf-navy3)',
  navyLine: 'var(--cf-navyLine)', cardBorder: 'var(--cf-cardBorder)',
  ink: 'var(--cf-ink)', inkDim: 'var(--cf-inkDim)', inkMute: 'var(--cf-inkMute)',
  blue: '#3D7BFF', blueBright: '#5B91FF', cyan: '#6FE8FF',
  amber: '#D97706', green: '#059669', red: '#DC2626', orange: '#EA580C',
};

// ── Icon ──────────────────────────────────────────────────────────────
function Icon({ name, size = 16, color = CF.inkDim, strokeWidth = 1.6 }) {
  const paths = {
    dashboard:    <><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/></>,
    forecast:     <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></>,
    jobs:         <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 118 0v2"/></>,
    accounts:     <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></>,
    payroll:      <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    ai:           <><path d="M12 2l2 5.5L19.5 9l-5.5 2L12 17l-2-5.5L4.5 9l5.5-2z"/><path d="M19 17l1.5 2"/><path d="M3 4l1 1"/></>,
    settings:     <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    arrow:        <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    sparkle:      <><path d="M12 2l2 5.5L19.5 9l-5.5 2L12 17l-2-5.5L4.5 9l5.5-2z"/></>,
    check:        <><path d="M5 12l4 4L19 6"/></>,
    search:       <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>,
    bell:         <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    plus:         <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    warning:      <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    download:     <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    filter:       <><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></>,
    chevronDown:  <><polyline points="6 9 12 15 18 9"/></>,
    chevronLeft:  <><polyline points="15 18 9 12 15 6"/></>,
    chevronRight: <><polyline points="9 6 15 12 9 18"/></>,
    send:         <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    x:            <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    creditCard:   <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></>,
    trendUp:      <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    menu:         <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    collapse:     <><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></>,
    expand:       <><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></>,
    zap:          <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
    refresh:      <><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></>,
    receipt:      <><path d="M4 2h16v20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5V2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></>,
    eye:          <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    cloudUpload:  <><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></>,
    link:         <><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></>,
    lock:         <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
    logOut:       <><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    edit:         <><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    user:         <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    mail:         <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    phone:        <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></>,
    moon:         <><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></>,
    sun:          <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {paths[name] || null}
    </svg>
  );
}

// ── Logo mark ──────────────────────────────────────────────────────────
function CFMark({ size = 34 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.26),
      background: 'linear-gradient(145deg,#0F1C3A,#060C1A)',
      border: `1px solid ${CF.navyLine}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    }}>
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 56 56" fill="none">
        <path d="M34 8C22 8 12 15 12 28C12 41 22 48 34 48C38 48 41.5 46.5 44 44"
              stroke="white" strokeWidth="7" strokeLinecap="round"/>
        <line x1="28" y1="11" x2="28" y2="46" stroke="white" strokeWidth="7" strokeLinecap="round"/>
        <line x1="28" y1="11" x2="46" y2="11" stroke="white" strokeWidth="6.5" strokeLinecap="round"/>
        <line x1="28" y1="28" x2="42" y2="28" stroke="white" strokeWidth="6" strokeLinecap="round"/>
        <polygon points="32,20 46,28 32,36" fill="#FF8A00"/>
        <rect x="24" y="24.5" width="11" height="7" fill="#FF8A00"/>
      </svg>
    </div>
  );
}

function CFWordmark({ size = 15 }) {
  return (
    <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: size, letterSpacing: '-0.02em', lineHeight: 1, whiteSpace: 'nowrap' }}>
      <span style={{ color: CF.ink }}>Cash</span>
      <span style={{ color: CF.orange }}>Flow</span>
      <span style={{ color: CF.inkMute, fontSize: size * 0.6, letterSpacing: '0.16em', textTransform: 'uppercase', marginLeft: 2, fontWeight: 600 }}>Smart</span>
    </span>
  );
}

// ── Chip ──────────────────────────────────────────────────────────────
function Chip({ children, color = 'mute', style = {} }) {
  const map = {
    green: { bg: 'rgba(16,185,129,0.1)',  fg: '#059669',  border: 'rgba(16,185,129,0.2)' },
    red:   { bg: 'rgba(239,68,68,0.1)',   fg: '#DC2626',  border: 'rgba(239,68,68,0.2)' },
    amber: { bg: 'rgba(245,158,11,0.1)',  fg: '#D97706',  border: 'rgba(245,158,11,0.2)' },
    blue:  { bg: 'rgba(61,123,255,0.1)',  fg: CF.blue,    border: 'rgba(61,123,255,0.2)' },
    cyan:  { bg: 'rgba(61,123,255,0.08)', fg: CF.blue,    border: 'rgba(61,123,255,0.15)' },
    mute:  { bg: CF.navy3,                fg: CF.inkMute, border: CF.navyLine },
  };
  const c = map[color] || map.mute;
  return (
    <span style={{
      fontSize: 11, padding: '2px 8px', borderRadius: 999, fontWeight: 600,
      background: c.bg, color: c.fg,
      whiteSpace: 'nowrap', display: 'inline-flex',
      alignItems: 'center', ...style,
    }}>{children}</span>
  );
}

// ── Button ────────────────────────────────────────────────────────────
function Btn({ children, variant = 'primary', size = 'md', onClick, style = {}, disabled = false, className = '' }) {
  const [hover, setHover] = React.useState(false);
  const sz = { sm: { p: '7px 14px', fs: 12, r: 9 }, md: { p: '10px 20px', fs: 13, r: 11 }, lg: { p: '14px 26px', fs: 15, r: 12 } }[size];
  const v = {
    primary:  {
      bg: hover ? '#2F68EE' : '#3D7BFF',
      color: '#fff', border: 'none',
      shadow: '0 1px 3px rgba(61,123,255,0.3)',
    },
    ghost:    { bg: hover ? CF.navy3 : 'transparent', color: CF.inkDim, border: `1px solid ${CF.navyLine}`, shadow: 'none' },
    ghostBlue:{ bg: hover ? 'rgba(61,123,255,0.1)' : 'rgba(61,123,255,0.06)', color: CF.blue, border: '1px solid rgba(61,123,255,0.2)', shadow: 'none' },
    danger:   { bg: hover ? 'rgba(255,106,122,0.1)' : 'rgba(255,106,122,0.06)', color: CF.red, border: `1px solid ${CF.navyLine}`, shadow: 'none' },
    ai:       {
      bg: hover ? 'rgba(61,123,255,0.1)' : 'rgba(61,123,255,0.06)',
      color: CF.blue, border: `1px solid ${CF.navyLine}`,
      shadow: 'none',
    },
  }[variant];
  return (
    <button
      className={className}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick} disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: sz.p, borderRadius: sz.r, fontSize: sz.fs, fontWeight: 600,
        fontFamily: "'Inter','Manrope',sans-serif", cursor: disabled ? 'default' : 'pointer',
        background: v.bg, color: v.color, border: v.border, boxShadow: v.shadow,
        opacity: disabled ? 0.45 : 1,
        transition: 'all 0.15s ease', whiteSpace: 'nowrap', ...style,
      }}>{children}</button>
  );
}

// ── KPI Card ──────────────────────────────────────────────────────────
function KPICard({ label, value, sub, chip, chipColor, mono = true, accent, onClick, compact = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        border: `1px solid ${hover && onClick ? 'rgba(61,123,255,0.35)' : CF.cardBorder}`,
        borderRadius: 12, padding: compact ? '14px 16px' : '16px 18px',
        background: hover && onClick ? CF.navy3 : CF.navy1,
        boxShadow: 'var(--cf-cardShadow)',
        display: 'flex', flexDirection: 'column', gap: 5,
        cursor: onClick ? 'pointer' : 'default',
        transform: hover && onClick ? 'translateY(-1px)' : 'none',
        transition: 'all 0.15s ease',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: CF.inkMute, fontWeight: 500 }}>{label}</span>
        {chip && <Chip color={chipColor}>{chip}</Chip>}
      </div>
      <div style={{
        fontSize: compact ? 20 : 24, fontWeight: 700, letterSpacing: '-0.02em',
        color: accent ? CF.green : CF.ink, lineHeight: 1.15,
      }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: CF.inkMute, lineHeight: 1.4 }}>{sub}</div>}
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────
function Sidebar({ active, onNav, collapsed, onToggle }) {
  const [isDark, setIsDark] = React.useState(() => document.documentElement.classList.contains('dark-mode'));
  const [profileOpen, setProfileOpen] = React.useState(false);
  React.useEffect(() => {
    const obs = new MutationObserver(() => setIsDark(document.documentElement.classList.contains('dark-mode')));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  const NAV_TOP = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'forecast',  icon: 'forecast',  label: 'Cash Flow' },
    { id: 'jobs',      icon: 'jobs',      label: 'Jobs & Margins' },
    { id: 'accounts',  icon: 'accounts',  label: 'Accounts' },
    { id: 'receipts',  icon: 'receipt',   label: 'Receipts' },
    { id: 'payroll',   icon: 'payroll',   label: 'Payroll', badge: '2' },
  ];
  const NAV_AI = { id: 'ai', icon: 'ai', label: 'AI Engine', special: true };

  const W = collapsed ? 56 : 220;

  const SectionLabel = ({ children }) => collapsed ? null : (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 14px', margin: '14px 0 2px',
    }}>
      <span style={{
        fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--color-text-muted)',
        opacity: 0.55,
      }}>{children}</span>
    </div>
  );

  const NavItem = ({ item }) => {
    const isActive = active === item.id;
    const isAI = item.special;
    const [hover, setHover] = React.useState(false);
    const activeBg  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)';
    const hoverBg   = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)';
    const activeClr = 'var(--color-text-primary)';
    const dimClr    = 'var(--color-text-secondary)';

    return (
      <div
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onClick={() => onNav(item.id)}
        title={collapsed ? item.label : ''}
        style={{
          display: 'flex', alignItems: 'center',
          height: 34,
          gap: collapsed ? 0 : 10,
          padding: collapsed ? '0' : '0 10px',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderRadius: 8, cursor: 'pointer',
          margin: '1px 6px',
          background: isActive ? activeBg : hover ? hoverBg : 'transparent',
          transition: 'background 0.12s',
        }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, flexShrink: 0 }}>
          <Icon name={item.icon} size={15}
            color={isActive || hover ? activeClr : dimClr}
            strokeWidth={isActive ? 2 : 1.7}
          />
        </div>
        {!collapsed && (
          <>
            <span style={{
              fontSize: 13, fontWeight: isActive ? 600 : 500,
              color: isActive || hover ? activeClr : dimClr,
              flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{item.label}</span>
            {item.badge && (
              <span style={{
                minWidth: 18, height: 18, borderRadius: 999, padding: '0 4px',
                background: '#EF4444',
                color: '#fff', fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{item.badge}</span>
            )}
            {isAI && !item.badge && (
              <span style={{
                fontSize: 9, padding: '2px 6px', borderRadius: 4,
                background: 'rgba(61,123,255,0.12)',
                color: '#3D7BFF', fontWeight: 700, flexShrink: 0,
              }}>AI</span>
            )}
          </>
        )}
      </div>
    );
  };

  const LogoutBtn = () => {
    const [hover, setHover] = React.useState(false);
    const hoverBg = isDark ? 'rgba(220,38,38,0.08)' : 'rgba(220,38,38,0.05)';
    return (
      <div
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onClick={() => onNav('onboarding')}
        title={collapsed ? 'Log out' : ''}
        style={{
          display: 'flex', alignItems: 'center',
          height: 34, gap: collapsed ? 0 : 10,
          padding: collapsed ? '0' : '0 10px',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderRadius: 8, cursor: 'pointer',
          margin: '1px 6px',
          background: hover ? hoverBg : 'transparent',
          transition: 'background 0.12s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, flexShrink: 0 }}>
          <Icon name="logOut" size={15} color={hover ? '#DC2626' : 'var(--color-text-secondary)'} strokeWidth={1.7} />
        </div>
        {!collapsed && (
          <span style={{ fontSize: 13, fontWeight: 500, color: hover ? '#DC2626' : 'var(--color-text-secondary)', flex: 1 }}>
            Sign out
          </span>
        )}
      </div>
    );
  };

  return (
    <aside style={{
      width: W, flexShrink: 0, background: 'var(--color-sidebar-bg)',
      borderRight: isDark ? '1px solid #1A1A1A' : '1px solid var(--color-border)',
      display: 'flex', flexDirection: 'column',
      padding: '0', paddingBottom: 16,
      transition: 'width 0.22s cubic-bezier(.4,0,.2,1)',
      overflow: 'hidden', overflowY: 'auto', position: 'relative',
    }}>
      {/* Logo */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        padding: collapsed ? '16px 12px 18px' : '16px 20px 18px',
        gap: 10, flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <img
            src={collapsed ? "assets/favicon_cashflow.png" : (isDark ? "assets/cashflow_logo.svg" : "assets/cashflow_dark_logo.png")}
            height={36}
            style={{ maxWidth: collapsed ? 36 : 160, objectFit: 'contain', objectPosition: 'left center', display: 'block' }}
          />
        </div>
        {!collapsed && onToggle && (
          <div onClick={onToggle} style={{ cursor: 'pointer', padding: 5, borderRadius: 6, opacity: 0.4, transition: 'opacity 0.15s', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.4}>
            <Icon name="collapse" size={13} color={CF.inkMute} />
          </div>
        )}
      </div>

      {/* Expand button when collapsed */}
      {collapsed && (
        <div onClick={onToggle} title="Expand sidebar" style={{ display: 'flex', justifyContent: 'center', marginBottom: 8, cursor: 'pointer' }}>
          <div style={{ padding: 5, borderRadius: 6, opacity: 0.4, transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.4}>
            <Icon name="expand" size={13} color={CF.inkMute} />
          </div>
        </div>
      )}

      {/* Main nav */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
        {NAV_TOP.map(item => <NavItem key={item.id} item={item} />)}
      </div>

      {/* Intelligence */}
      <SectionLabel>Intelligence</SectionLabel>
      <NavItem item={NAV_AI} />

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bottom nav */}
      <NavItem item={{ id: 'settings', icon: 'settings', label: 'Settings' }} />
      <LogoutBtn />

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--color-border)', margin: '10px 14px 8px' }} />

      {/* User card */}
      {!collapsed && (
        <div
          onClick={() => setProfileOpen(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 12px', cursor: 'pointer', borderRadius: 8,
            margin: '0 6px 4px', transition: 'background 0.12s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'linear-gradient(135deg, #F6B54A, #E07420)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: '#03060F',
            }}>DC</div>
            <span style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 8, height: 8, borderRadius: '50%',
              background: '#22C55E',
              border: `1.5px solid var(--color-sidebar-bg)`,
            }} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: 1.3 }}>Daniel Cordoba</div>
            <div style={{ fontSize: 10, color: 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: 1.3 }}>daniel@mainstreet.com</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.5 }}>
            <path d="M8 9l4-4 4 4M8 15l4 4 4-4"/>
          </svg>
        </div>
      )}
      {collapsed && (
        <div
          onClick={() => setProfileOpen(true)}
          title="Profile"
          style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'linear-gradient(135deg, #F6B54A, #E07420)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: '#03060F',
            }}>DC</div>
            <span style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 8, height: 8, borderRadius: '50%',
              background: '#22C55E',
              border: `1.5px solid var(--color-sidebar-bg)`,
            }} />
          </div>
        </div>
      )}

      {profileOpen && (
        <ProfileModal
          onClose={() => setProfileOpen(false)}
          onLogout={() => { setProfileOpen(false); onNav('onboarding'); }}
        />
      )}
    </aside>
  );
}

// ── Mobile Bottom Nav ─────────────────────────────────────────────────
function MobileNav({ active, onNav }) {
  const items = [
    { id: 'dashboard', icon: 'dashboard', label: 'Home' },
    { id: 'forecast',  icon: 'forecast',  label: 'Cash Flow' },
    { id: 'ai',        icon: 'ai',        label: 'AI', special: true },
    { id: 'receipts',  icon: 'receipt',   label: 'Receipts' },
    { id: 'jobs',      icon: 'jobs',      label: 'Jobs' },
  ];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', gap: 4,
      background: 'rgba(15,22,41,0.92)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(30,45,74,0.8)',
      borderRadius: 999,
      padding: '8px 10px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
    }}>
      {items.map(item => {
        const isActive = active === item.id;
        const isAI = item.special;
        const activeColor = isAI ? CF.cyan : CF.blue;
        return (
          <div
            key={item.id}
            onClick={() => onNav(item.id)}
            title={item.label}
            style={{
              position: 'relative',
              width: isAI ? 52 : 44,
              height: isAI ? 52 : 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', borderRadius: 999, flexShrink: 0,
              background: isActive
                ? isAI
                  ? 'rgba(111,232,255,0.15)'
                  : 'rgba(61,123,255,0.18)'
                : 'transparent',
              border: isAI && isActive
                ? '1px solid rgba(111,232,255,0.3)'
                : isActive
                  ? '1px solid rgba(61,123,255,0.25)'
                  : '1px solid transparent',
              transition: 'background 0.18s, border-color 0.18s, transform 0.12s',
              transform: isActive ? 'scale(1.08)' : 'scale(1)',
            }}
          >
            {isAI && isActive && (
              <div style={{
                position: 'absolute', inset: -3, borderRadius: 999,
                background: 'radial-gradient(circle, rgba(111,232,255,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
            )}
            <Icon
              name={item.icon}
              size={isAI ? 22 : 19}
              color={isActive ? activeColor : CF.inkMute}
              strokeWidth={isActive ? 2.2 : 1.7}
            />
            {isActive && (
              <div style={{
                position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                width: 4, height: 4, borderRadius: 999,
                background: activeColor,
                boxShadow: `0 0 6px ${activeColor}`,
              }} />
            )}
          </div>
        );
      })}
    </nav>
  );
}

// ── Topbar ────────────────────────────────────────────────────────────
function Topbar({ title, sub, actions, onMenuClick }) {
  const [bellOpen, setBellOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() => document.documentElement.classList.contains('dark-mode'));
  const notifRef = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (notifRef.current && !notifRef.current.contains(e.target)) setBellOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark-mode', next);
    document.documentElement.classList.toggle('light-mode', !next);
    localStorage.setItem('cf-theme', next ? 'dark' : 'light');
  };
  const notifications = [
    { id: 1, type: 'danger',  icon: 'warning',  title: 'Cash runway critical',      body: '9-day runway. Collect $26K in closing jobs.',    time: '5m ago', unread: true },
    { id: 2, type: 'warning', icon: 'payroll',  title: 'Payroll due in 8 days',    body: '$6,800 — Cesar, Brian & helpers.',               time: '2h ago', unread: true },
    { id: 3, type: 'danger',  icon: 'sparkle',  title: 'AI: Do not hire',          body: '$1,887 safe-to-spend. 9-day runway.',            time: '4h ago', unread: true },
    { id: 4, type: 'success', icon: 'check',    title: 'Payment received',         body: 'Timberland Dr. draw — $21,651.68.',              time: '1d ago', unread: false },
    { id: 5, type: 'warning', icon: 'accounts', title: 'Southeastern overdue',     body: '$14,200 draw #3 past due.',                      time: '2d ago', unread: false },
  ];
  const typeColor = (t) => t === 'danger' ? CF.red : t === 'warning' ? CF.amber : t === 'success' ? CF.green : CF.blue;
  const unreadCount = notifications.filter(n => n.unread).length;

  const iconBtnStyle = (active) => ({
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 34, height: 34, borderRadius: 9,
    background: active ? 'rgba(61,123,255,0.1)' : 'transparent',
    border: `1px solid ${active ? 'rgba(61,123,255,0.3)' : CF.navyLine}`,
    cursor: 'pointer', transition: 'all 0.15s',
  });

  return (
    <div className="cf-topbar" style={{
      display: 'flex', alignItems: 'center',
      padding: '0 20px', borderBottom: `1px solid ${CF.navyLine}`,
      background: CF.navy1, flexShrink: 0, gap: 12, height: 56,
    }}>
      {/* Left: title (desktop) + logo (mobile) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flexShrink: 0 }}>
        <div
          onClick={() => window.dispatchEvent(new CustomEvent('cf-menu-open'))}
          className="mobile-menu-btn"
          style={{ cursor: 'pointer', display: 'none', padding: 4 }}
        >
          <Icon name="menu" size={20} color={CF.inkMute} />
        </div>
        {/* Logo — shown only on mobile */}
        <div className="topbar-mobile-logo" style={{ display: 'none', alignItems: 'center', gap: 8 }}>
          {isDark
            ? <img src="assets/favicon_cashflow.png" alt="CashFlow Smart" style={{ height: 32, width: 32, borderRadius: 8 }} />
            : <img src="assets/cashflow_dark_logo.png" alt="CashFlow Smart" style={{ height: 28, width: 'auto' }} />
          }
        </div>
        {/* Page title — hidden on mobile */}
        <div className="topbar-page-title" style={{ minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.015em', color: CF.ink, whiteSpace: 'nowrap' }} className="cf-topbar-title">{title}</div>
          {sub && <div className="topbar-sub" style={{ fontSize: 11, color: CF.inkMute, marginTop: 1, whiteSpace: 'nowrap' }}>{sub}</div>}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* Right: actions */}
      <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto', flexShrink: 0 }}>
        {actions}
        <button onClick={toggleTheme} style={iconBtnStyle(false)} title={isDark ? 'Light mode' : 'Dark mode'}>
          <Icon name={isDark ? 'sun' : 'moon'} size={14} color={CF.inkDim} />
        </button>
        <div ref={notifRef} style={{ position: 'relative' }}>
          <button onClick={() => setBellOpen(p => !p)} style={{ ...iconBtnStyle(bellOpen), position: 'relative' }}>
            <Icon name="bell" size={14} color={bellOpen ? CF.blue : CF.inkDim} />
            {unreadCount > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -5, minWidth: 16, height: 16, borderRadius: 999, background: CF.red, color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px', border: `1.5px solid ${CF.navy1}` }}>
                {unreadCount}
              </span>
            )}
          </button>
          {bellOpen && (
            <>
            <div className="notif-backdrop" onClick={() => setBellOpen(false)} />
            <div className="notif-dropdown" style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 380, maxWidth: 'calc(100vw - 24px)', background: CF.navy2, border: `1px solid ${CF.navyLine}`, borderRadius: 14, boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)', zIndex: 1001, overflow: 'hidden' }}>
              <div style={{ padding: '14px 16px', borderBottom: `1px solid ${CF.navyLine}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: CF.ink }}>Notifications</div>
                  <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 1 }}>{unreadCount} unread</div>
                </div>
                <button style={{ fontSize: 11, color: CF.blue, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter','Manrope',sans-serif" }}>Mark all read</button>
              </div>
              <div style={{ maxHeight: 380, overflowY: 'auto' }}>
                {notifications.map(n => {
                  const c = typeColor(n.type);
                  return (
                    <div key={n.id} style={{ padding: '12px 16px', borderBottom: `1px solid ${CF.navyLine}`, display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', background: n.unread ? 'rgba(61,123,255,0.03)' : 'transparent', position: 'relative' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(61,123,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.background = n.unread ? 'rgba(61,123,255,0.03)' : 'transparent'}>
                      {n.unread && <span style={{ position: 'absolute', left: 6, top: 18, width: 5, height: 5, borderRadius: '50%', background: c }} />}
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: `${c}18`, border: `1px solid ${c}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon name={n.icon} size={12} color={c} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: CF.ink, marginBottom: 2 }}>{n.title}</div>
                        <div style={{ fontSize: 11, color: CF.inkDim, lineHeight: 1.4, marginBottom: 4 }}>{n.body}</div>
                        <div style={{ fontSize: 10, color: CF.inkMute }}>{n.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ padding: '10px 16px', borderTop: `1px solid ${CF.navyLine}`, textAlign: 'center' }}>
                <button style={{ fontSize: 11, color: CF.blue, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter','Manrope',sans-serif" }}>View all activity →</button>
              </div>
            </div>
            </>
          )}
        </div>
        <button className="topbar-new-job" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, background: CF.blue, color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', border: 'none', fontFamily: "'Inter','Manrope',sans-serif", boxShadow: '0 2px 8px rgba(61,123,255,0.3)', transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2F68EE'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = CF.blue; e.currentTarget.style.transform = 'none'; }}>
          <span>+ New job</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── Forecast mini chart ───────────────────────────────────────────────
function MiniChart({ range = '30D' }) {
  const datasets = {
    '7D':  [391,405,389,412,424,410,431],
    '30D': [330,358,318,385,402,362,435,414,392,448,421,456,431],
    '90D': [290,318,298,352,370,402,391,428,418,464,448,488,518,498,526,512],
    '1Y':  [228,252,290,318,298,352,374,402,422,458,448,512],
  };
  const pts = datasets[range] || datasets['30D'];
  const max = Math.max(...pts) * 1.08;
  const min = Math.min(...pts) * 0.92;
  const W = 560, H = 145;
  const px = (i) => (i / (pts.length - 1)) * W;
  const py = (v) => H - ((v - min) / (max - min)) * (H - 18) - 4;
  const todayIdx = Math.floor(pts.length * 0.62);

  // Smooth bezier path
  const pathPts = pts.map((v, i) => [px(i), py(v)]);
  let d = `M${pathPts[0][0]},${pathPts[0][1]}`;
  for (let i = 1; i < pathPts.length; i++) {
    const cpx = (pathPts[i-1][0] + pathPts[i][0]) / 2;
    d += ` C${cpx},${pathPts[i-1][1]} ${cpx},${pathPts[i][1]} ${pathPts[i][0]},${pathPts[i][1]}`;
  }
  const area = d + ` L${W},${H} L0,${H} Z`;

  // Split path at todayIdx: solid before, dashed after
  let dBefore = `M${pathPts[0][0]},${pathPts[0][1]}`;
  for (let i = 1; i <= todayIdx; i++) {
    const cpx = (pathPts[i-1][0] + pathPts[i][0]) / 2;
    dBefore += ` C${cpx},${pathPts[i-1][1]} ${cpx},${pathPts[i][1]} ${pathPts[i][0]},${pathPts[i][1]}`;
  }
  let dAfter = `M${pathPts[todayIdx][0]},${pathPts[todayIdx][1]}`;
  for (let i = todayIdx + 1; i < pathPts.length; i++) {
    const cpx = (pathPts[i-1][0] + pathPts[i][0]) / 2;
    dAfter += ` C${cpx},${pathPts[i-1][1]} ${cpx},${pathPts[i][1]} ${pathPts[i][0]},${pathPts[i][1]}`;
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="cgline" x1="0" x2="1"><stop offset="0%" stopColor="#6FE8FF"/><stop offset="60%" stopColor="#4A84FF"/><stop offset="100%" stopColor="#3D7BFF"/></linearGradient>
        <linearGradient id="cgarea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3D7BFF" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#3D7BFF" stopOpacity="0"/>
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
      </defs>
      {[0.15,0.45,0.75].map((r,i) => (
        <line key={i} x1="0" y1={H * r + 4} x2={W} y2={H * r + 4} stroke={CF.navyLine} strokeWidth="1" strokeDasharray="none" opacity="0.6"/>
      ))}
      <path d={area} fill="url(#cgarea)"/>
      <path d={dBefore} fill="none" stroke="#3D7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={dAfter} fill="none" stroke="#3D7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4"/>
      {/* Today marker */}
      <line x1={px(todayIdx)} y1={0} x2={px(todayIdx)} y2={H - 18} stroke={CF.cyan} strokeWidth="1" strokeDasharray="3 3" opacity="0.45"/>
      <circle cx={px(todayIdx)} cy={py(pts[todayIdx])} r="5" fill={CF.navy0} stroke={CF.cyan} strokeWidth="2.2"/>
      <circle cx={px(todayIdx)} cy={py(pts[todayIdx])} r="5" fill={CF.navy0} stroke={CF.cyan} strokeWidth="2.2" filter="url(#glow)" opacity="0.5"/>
      <text x={px(todayIdx)} y={H - 4} fill="#6FE8FF" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="600">TODAY</text>
      {/* Projected tooltip */}
      <rect x={px(pts.length-1) - 84} y={py(pts[pts.length-1]) - 32} width="82" height="30" rx="6" fill="#3D7BFF" fillOpacity="0.1" stroke="#3D7BFF" strokeOpacity="0.2" strokeWidth="1"/>
      <text x={px(pts.length-1) - 43} y={py(pts[pts.length-1]) - 19} fill="#3D7BFF" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle" letterSpacing="0.05em" fontWeight="600">PROJECTED</text>
      <text x={px(pts.length-1) - 43} y={py(pts[pts.length-1]) - 7} fill="#3D7BFF" fontSize="11" fontWeight="700" fontFamily="JetBrains Mono" textAnchor="middle">${pts[pts.length-1]}k</text>
    </svg>
  );
}

// ── Alert Banner ──────────────────────────────────────────────────────
function AlertBanner({ type = 'warning', children, onDismiss, action }) {
  const c = {
    warning: { bg: 'rgba(217,119,6,0.12)',   border: '1px solid rgba(217,119,6,0.25)', icon: '#D97706', actionColor: '#D97706' },
    danger:  { bg: 'rgba(220,38,38,0.08)',   border: '1px solid rgba(220,38,38,0.22)', icon: '#DC2626', actionColor: '#DC2626' },
    info:    { bg: 'rgba(61,123,255,0.08)',  border: '1px solid rgba(61,123,255,0.2)', icon: '#3D7BFF', actionColor: '#3D7BFF' },
  }[type];
  return (
    <div style={{ background: c.bg, border: c.border, borderRadius: 10, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Icon name="warning" size={14} color={c.icon} strokeWidth={2.2} />
      <div style={{ flex: 1, fontSize: 13, color: 'var(--color-text-primary)', lineHeight: 1.45, fontWeight: 500 }}>{children}</div>
      {action && (
        <div style={{ flexShrink: 0, fontSize: 12, fontWeight: 600, color: c.actionColor, cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }}>
          {action} <Icon name="chevronRight" size={11} color={c.actionColor} strokeWidth={2.5} />
        </div>
      )}
      {onDismiss && <div onClick={onDismiss} style={{ cursor: 'pointer', flexShrink: 0, opacity: 0.5 }}><Icon name="x" size={13} color={CF.inkMute} /></div>}
    </div>
  );
}

// ── CSV Upload Modal ──────────────────────────────────────────────────
function CSVUploadModal({ onClose, onComplete }) {
  const [step, setStep]           = React.useState('upload');
  const [file, setFile]           = React.useState(null);
  const [drag, setDrag]           = React.useState(false);
  const [progress, setProgress]   = React.useState(0);
  const [statusMsg, setStatusMsg] = React.useState('Reading transactions...');
  const [dateFrom, setDateFrom]   = React.useState('2026-01');
  const [dateTo, setDateTo]       = React.useState('2026-03');
  const inputRef    = React.useRef(null);
  const timerRef    = React.useRef(null);

  const MESSAGES = ['Reading transactions...','Running AI categorization...','Detecting duplicates...','Almost done...'];

  const PREVIEW_ROWS = [
    { date: 'Mar 31', desc: 'HOOSIER-HOMES DRAW #4',        amount: '+$18,420.00', cat: 'Income', pos: true  },
    { date: 'Mar 28', desc: 'CONTRACTOR PAY · B. RODRIGUEZ', amount: '-$3,850.00',  cat: 'Labor',  pos: false },
    { date: 'Mar 25', desc: 'INHP REHAB DRAW #3',            amount: '+$14,200.00', cat: 'Income', pos: true  },
    { date: 'Mar 22', desc: 'CONTRACTOR PAY · C. RIVERA',    amount: '-$2,940.00',  cat: 'Labor',  pos: false },
    { date: 'Mar 18', desc: 'LIVE INDY · TIMBERLAND DR',     amount: '+$21,651.68', cat: 'Income', pos: true  },
  ];

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
  };

  const fmtSize = (b) => b < 1024 ? b + ' B' : b < 1048576 ? (b/1024).toFixed(1)+' KB' : (b/1048576).toFixed(1)+' MB';

  const startImport = () => {
    if (!file) return;
    setStep('processing');
    let prog = 0;
    timerRef.current = setInterval(() => {
      prog += Math.random() * 9 + 4;
      if (prog >= 100) {
        prog = 100;
        clearInterval(timerRef.current);
        setProgress(100);
        setTimeout(() => setStep('preview'), 500);
      } else {
        setStatusMsg(MESSAGES[Math.min(Math.floor((prog / 100) * MESSAGES.length), MESSAGES.length - 1)]);
        setProgress(prog);
      }
    }, 340);
  };

  React.useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const canClose = step !== 'processing';

  const inputStyle = {
    background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)',
    borderRadius: 8, padding: '8px 12px', color: 'var(--color-text-primary)',
    fontFamily: "'Manrope',sans-serif", fontSize: 12, outline: 'none', width: '100%',
    colorScheme: 'dark',
  };

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget && canClose) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div style={{ width: '100%', maxWidth: 520, maxHeight: '92vh', background: 'var(--color-bg-card)', borderRadius: 20, border: '1px solid var(--color-card-border)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)' }}>Import bank transactions</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>CSV from your bank statement</div>
          </div>
          <button
            onClick={canClose ? onClose : undefined}
            disabled={!canClose}
            style={{ width: 30, height: 30, borderRadius: 8, background: 'transparent', border: '1px solid var(--color-border)', cursor: canClose ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: canClose ? 1 : 0.3, transition: 'opacity 0.15s' }}
          >
            <Icon name="x" size={14} color={CF.inkMute} />
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Step 1: Upload */}
          {step === 'upload' && (<>
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
              style={{
                height: 180, borderRadius: 12, cursor: 'pointer', transition: 'all 0.15s',
                border: `2px dashed ${drag ? '#3D7BFF' : 'var(--color-border)'}`,
                background: drag ? 'rgba(61,123,255,0.04)' : 'var(--color-bg-secondary)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              <input ref={inputRef} type="file" accept=".csv" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
              {file ? (<>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={20} color="#3D7BFF" strokeWidth={2.5} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', textAlign: 'center', padding: '0 16px', wordBreak: 'break-all' }}>{file.name}</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{fmtSize(file.size)} · Click to change</div>
              </>) : (<>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="cloudUpload" size={22} color="#3D7BFF" strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Drag your CSV here</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>or click to browse</div>
              </>)}
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 8 }}>Import period</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBottom: 4 }}>From</div>
                  <input type="month" value={dateFrom} onChange={e => setDateFrom(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginBottom: 4 }}>To</div>
                  <input type="month" value={dateTo} onChange={e => setDateTo(e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>
          </>)}

          {/* Step 2: Processing */}
          {step === 'processing' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: '24px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px -8px rgba(61,123,255,0.4)', animation: 'pulse 2s ease-in-out infinite' }}>
                <Icon name="sparkle" size={26} color="#3D7BFF" strokeWidth={1.8} />
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{statusMsg}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#3D7BFF' }}>{Math.round(progress)}%</div>
                </div>
                <div style={{ height: 6, background: 'var(--color-bg-tertiary)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,#3D7BFF,#6FE8FF)', borderRadius: 999, transition: 'width 0.3s ease' }} />
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>Do not close this window during processing.</div>
            </div>
          )}

          {/* Step 3: Preview */}
          {step === 'preview' && (<>
            <div style={{ background: 'var(--color-bg-secondary)', borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                Found <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>513</span> transactions
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12, color: '#059669', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>+$186,221 income</span>
                <span style={{ fontSize: 12, color: '#DC2626', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>−$179,556 expenses</span>
              </div>
            </div>
            <div style={{ borderRadius: 10, border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '54px 1fr 94px 72px', padding: '8px 12px', borderBottom: '1px solid var(--color-border)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', gap: 6 }}>
                <span>Date</span><span>Description</span><span style={{ textAlign: 'right' }}>Amount</span><span style={{ textAlign: 'right' }}>Cat.</span>
              </div>
              {PREVIEW_ROWS.map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '54px 1fr 94px 72px', padding: '9px 12px', borderBottom: i < PREVIEW_ROWS.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--color-text-muted)' }}>{r.date}</span>
                  <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.desc}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 700, color: r.pos ? '#059669' : '#DC2626', textAlign: 'right' }}>{r.amount}</span>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Chip color="amber">{r.cat}</Chip></div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
              AI assigned these categories. Review and correct after import.
            </div>
          </>)}

          {/* Step 4: Success */}
          {step === 'success' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, padding: '28px 16px' }}>
              <div style={{ width: 68, height: 68, borderRadius: 20, background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px -12px rgba(62,230,168,0.5)' }}>
                <Icon name="check" size={30} color="#059669" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>Import complete!</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginTop: 4 }}>513 transactions imported successfully</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: 300 }}>
                Your dashboard is now live with real data.
              </div>
            </div>
          )}

        </div>

        {/* ── Footer actions ── */}
        <div style={{ padding: '14px 20px 0', borderTop: '1px solid var(--color-border)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, justifyContent: step === 'preview' ? 'space-between' : 'flex-end' }}>
            {step === 'upload' && (<>
              <button onClick={onClose} style={{ padding: '9px 16px', borderRadius: 9, background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif" }}>Cancel</button>
              <button onClick={startImport} disabled={!file} style={{ padding: '9px 20px', borderRadius: 9, background: file ? '#3D7BFF' : 'var(--color-bg-secondary)', border: 'none', color: file ? '#fff' : 'var(--color-text-muted)', fontSize: 12, fontWeight: 700, cursor: file ? 'pointer' : 'not-allowed', fontFamily: "'Manrope',sans-serif", transition: 'all 0.15s', boxShadow: file ? '0 1px 3px rgba(61,123,255,0.3)' : 'none' }}>
                Import →
              </button>
            </>)}
            {step === 'preview' && (<>
              <button onClick={onClose} style={{ padding: '9px 16px', borderRadius: 9, background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif" }}>Edit categories</button>
              <button onClick={() => setStep('success')} style={{ padding: '9px 20px', borderRadius: 9, background: '#3D7BFF', border: 'none', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", boxShadow: '0 1px 3px rgba(61,123,255,0.3)' }}>
                Confirm import →
              </button>
            </>)}
            {step === 'success' && (
              <button onClick={() => { if (onComplete) onComplete(); onClose(); }} style={{ flex: 1, padding: '12px', borderRadius: 11, background: '#3D7BFF', border: 'none', color: '#fff', fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", boxShadow: '0 4px 16px -4px rgba(61,123,255,0.4)' }}>
                View dashboard →
              </button>
            )}
          </div>
          {/* Footer note — all steps */}
          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.5, padding: '4px 0 12px' }}>
            Your data is encrypted and stored securely. We never share your financial data.
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Profile Modal ─────────────────────────────────────────────────────
function ProfileModal({ onClose, onLogout }) {
  const [form, setForm] = React.useState({
    name:    'Daniel Cordoba',
    company: 'Main Street Contractors',
    email:   'daniel@mainstreetcontractors.com',
    phone:   '+1 (317) 555-0182',
    role:    'Owner',
  });
  const [saved, setSaved] = React.useState(false);
  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setSaved(false); };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const inputStyle = {
    width: '100%', background: 'var(--color-bg-secondary)',
    border: '1px solid var(--color-border)', borderRadius: 10,
    padding: '10px 13px', color: 'var(--color-text-primary)',
    fontFamily: "'Manrope',sans-serif", fontSize: 13,
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s',
  };
  const labelStyle = {
    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--color-text-muted)',
    display: 'block', marginBottom: 5,
  };

  const fields = [
    { key: 'name',    label: 'Full name',   icon: 'user',  type: 'text' },
    { key: 'company', label: 'Company',     icon: 'jobs',  type: 'text' },
    { key: 'email',   label: 'Email',       icon: 'mail',  type: 'email' },
    { key: 'phone',   label: 'Phone',       icon: 'phone', type: 'tel' },
    { key: 'role',    label: 'Your role',   icon: 'edit',  type: 'text' },
  ];

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
    >
      <div style={{
        width: '100%', maxWidth: 440,
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 20,
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        animation: 'cashiq-in 0.2s cubic-bezier(0.34,1.56,0.64,1)',
      }}>

        {/* Header */}
        <div style={{ padding: '20px 24px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>Your profile</div>
          <div
            onClick={onClose}
            style={{ width: 28, height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'var(--color-bg-secondary)', transition: 'background 0.12s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-tertiary)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg-secondary)'}
          >
            <Icon name="x" size={13} color="var(--color-text-muted)" strokeWidth={2} />
          </div>
        </div>

        {/* Avatar + plan */}
        <div style={{ padding: '20px 24px 16px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'linear-gradient(135deg, #F6B54A, #E07420)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 800, color: '#03060F', flexShrink: 0,
            boxShadow: '0 0 0 3px rgba(246,181,74,0.2)',
          }}>
            {form.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>{form.name}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 8 }}>{form.company}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <Chip color="blue">Pro Plan</Chip>
              <Chip color="green">Active</Chip>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--color-border)', margin: '0 24px' }} />

        {/* Fields */}
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12, maxHeight: '40vh', overflowY: 'auto' }}>
          {fields.map(f => (
            <div key={f.key}>
              <label style={labelStyle}>{f.label}</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <Icon name={f.icon} size={13} color="var(--color-text-muted)" strokeWidth={1.7} />
                </div>
                <input
                  type={f.type}
                  value={form[f.key]}
                  onChange={e => set(f.key, e.target.value)}
                  style={{ ...inputStyle, paddingLeft: 34 }}
                  onFocus={e => e.currentTarget.style.borderColor = '#3D7BFF'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ padding: '0 24px 16px', display: 'flex', gap: 20 }}>
          {[
            { label: 'Member since', val: 'Jan 2026' },
            { label: 'Data history', val: '91 days' },
            { label: 'Transactions', val: '512' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 10, color: 'var(--color-text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: "'JetBrains Mono',monospace" }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '12px 24px 20px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            onClick={handleSave}
            style={{
              flex: 1, padding: '10px', borderRadius: 10,
              background: saved ? 'rgba(5,150,105,0.12)' : '#3D7BFF',
              border: saved ? '1px solid rgba(5,150,105,0.3)' : 'none',
              color: saved ? '#059669' : '#fff',
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              fontFamily: "'Manrope',sans-serif",
              transition: 'all 0.2s',
            }}
          >
            {saved ? '✓ Saved' : 'Save changes'}
          </button>
          <button
            onClick={onLogout}
            style={{ padding: '10px 16px', borderRadius: 10, background: 'transparent', border: '1px solid rgba(220,38,38,0.3)', color: '#DC2626', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,38,38,0.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, {
  CF, Icon, CFMark, CFWordmark, Chip, Btn, KPICard,
  Sidebar, MobileNav, Topbar, MiniChart, AlertBanner,
  CSVUploadModal, ProfileModal,
});
