// CashFlow Smart — Enhanced Dashboard Screen

// ── Sparkline ─────────────────────────────────────────────────────────
function SparkLine({ data, color = '#3D7BFF', h = 38, w = 240, filled = true, responsive = false }) {
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const px = (i) => (i / (data.length - 1)) * w;
  const py = (v) => (h - 4) - ((v - min) / range) * (h - 8) + 2;
  let d = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const uid = color.replace(/[^a-z0-9]/gi, '');
  const area = d + ` L${w},${h} L0,${h} Z`;
  const svgProps = responsive
    ? { width: '100%', height: h, viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: 'none' }
    : { width: w, height: h, viewBox: `0 0 ${w} ${h}` };
  return (
    <svg {...svgProps} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id={`sg${uid}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {filled && <path d={area} fill={`url(#sg${uid})`}/>}
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
    </svg>
  );
}

// ── Cash Floor Gauge ──────────────────────────────────────────────────
function CashFloorGauge({ pct = 145 }) {
  const r = 46, cx = 60, cy = 60;
  const circ = 2 * Math.PI * r;
  const filled = Math.min(pct / 200, 1);
  const dash = filled * circ;
  const color = pct >= 100 ? CF.green : pct >= 50 ? CF.amber : CF.red;
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="gaugeg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={CF.cyan}/><stop offset="100%" stopColor={color}/>
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} stroke={CF.navy3} strokeWidth="10" fill="none"/>
      <circle cx={cx} cy={cy} r={r} stroke="url(#gaugeg)" strokeWidth="10" fill="none"
        strokeDasharray={`${dash} ${circ}`} strokeDashoffset={circ * 0.25}
        strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}/>
      <text x={cx} y={cy - 6} textAnchor="middle" fill={color} fontSize="18" fontWeight="700" fontFamily="JetBrains Mono">{pct}%</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill={CF.inkMute} fontSize="9" fontFamily="Manrope" fontWeight="600" letterSpacing="0.08em">ABOVE FLOOR</text>
    </svg>
  );
}

// ── Projected Cash Flow (6 months, 2 lines) ───────────────────────────
function ProjectedCashFlowChart() {
  const months = ['May','Jun','Jul','Aug','Sep','Oct'];
  const optimistic   = [220, 310, 380, 440, 510, 580];
  const conservative = [180, 220, 260, 310, 350, 390];
  const W = 520, H = 160;
  const max = 620, min = -40;
  const range = max - min;
  const px = (i) => 32 + (i / (months.length - 1)) * (W - 48);
  const py = (v) => H - 20 - ((v - min) / range) * (H - 32);
  const zero = py(0);

  const makePath = (data) => {
    const pts = data.map((v, i) => [px(i), py(v)]);
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const cpx = (pts[i-1][0] + pts[i][0]) / 2;
      d += ` C${cpx},${pts[i-1][1]} ${cpx},${pts[i][1]} ${pts[i][0]},${pts[i][1]}`;
    }
    return d;
  };

  const optPath  = makePath(optimistic);
  const conPath  = makePath(conservative);
  const optArea  = optPath + ` L${px(months.length-1)},${H} L${px(0)},${H} Z`;
  const conArea  = conPath + ` L${px(months.length-1)},${H} L${px(0)},${H} Z`;

  const yLabels = [600, 400, 200, 0, -200];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="optg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={CF.blue} stopOpacity="0.2"/>
          <stop offset="100%" stopColor={CF.blue} stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="cong" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={CF.amber} stopOpacity="0.15"/>
          <stop offset="100%" stopColor={CF.amber} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Grid */}
      {yLabels.map((v) => (
        <g key={v}>
          <line x1={32} y1={py(v)} x2={W - 8} y2={py(v)} stroke={CF.navyLine} strokeWidth="1" opacity="0.6"/>
          <text x={28} y={py(v) + 4} textAnchor="end" fill={CF.inkMute} fontSize="9" fontFamily="JetBrains Mono">{v < 0 ? `-$${Math.abs(v)}k` : `$${v}k`}</text>
        </g>
      ))}
      {/* Zero line */}
      <line x1={32} y1={zero} x2={W-8} y2={zero} stroke={CF.navyLine} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8"/>
      {/* Areas */}
      <path d={optArea} fill="url(#optg)"/>
      <path d={conArea} fill="url(#cong)"/>
      {/* Lines */}
      <path d={conPath} fill="none" stroke={CF.amber} strokeWidth="1.8" strokeDasharray="5 3" strokeLinecap="round"/>
      <path d={optPath} fill="none" stroke={CF.blue} strokeWidth="2.2" strokeLinecap="round"/>
      {/* Points + labels */}
      {optimistic.map((v, i) => (
        <g key={i}>
          <circle cx={px(i)} cy={py(v)} r="3.5" fill={CF.navy0} stroke={CF.blue} strokeWidth="2"/>
          {i === optimistic.length - 1 && (
            <>
              <rect x={px(i) - 36} y={py(v) - 22} width="72" height="19" rx="6" fill={CF.navy2} stroke={CF.navyLine}/>
              <text x={px(i)} y={py(v) - 9} textAnchor="middle" fill={CF.blue} fontSize="11" fontWeight="700" fontFamily="JetBrains Mono">${v}k</text>
            </>
          )}
        </g>
      ))}
      {conservative.map((v, i) => (
        <g key={i}>
          <circle cx={px(i)} cy={py(v)} r="3" fill={CF.navy0} stroke={CF.amber} strokeWidth="1.8"/>
          {i === conservative.length - 1 && (
            <>
              <rect x={px(i) - 30} y={py(v) + 7} width="60" height="19" rx="6" fill={CF.navy2} stroke={CF.navyLine}/>
              <text x={px(i)} y={py(v) + 20} textAnchor="middle" fill={CF.amber} fontSize="11" fontWeight="700" fontFamily="JetBrains Mono">${v}k</text>
            </>
          )}
        </g>
      ))}
      {/* X axis labels */}
      {months.map((m, i) => (
        <text key={m} x={px(i)} y={H - 2} textAnchor="middle" fill={CF.inkMute} fontSize="9" fontFamily="Manrope" fontWeight="600">{m} '26</text>
      ))}
    </svg>
  );
}

// ── Weekly Rhythm Chart ───────────────────────────────────────────────
function WeeklyRhythmChart() {
  const weeks = ['Wk1\nApr 7','Wk2\nApr 14','Wk3\nApr 21','Wk4\nApr 28','Wk5\nMay 5','Wk6\nMay 12','Wk7\nMay 19','Wk8\nMay 26'];
  const revenue   = [140, 160, 95, 185, 120, 175, 90, 155];
  const labor     = [60,  72, 58,  88,  65,  80, 55,  75];
  const materials = [40,  35, 30,  55,  38,  48, 32,  44];
  const maxVal = Math.max(...revenue) * 1.1;
  const W = 480, H = 130, barW = 10, gap = 3;
  const groupW = barW * 3 + gap * 2 + 14;
  const py = (v) => H - 14 - (v / maxVal) * (H - 22);
  const bh = (v) => (v / maxVal) * (H - 22);
  return (
    <svg viewBox={`0 0 ${W} ${H + 16}`} width="100%" style={{ display: 'block' }}>
      {[0, 50, 100, 150].map(v => (
        <g key={v}>
          <line x1={24} y1={py(v)} x2={W - 4} y2={py(v)} stroke={CF.navyLine} strokeWidth="1" opacity="0.5"/>
          <text x={20} y={py(v) + 4} textAnchor="end" fill={CF.inkMute} fontSize="8" fontFamily="JetBrains Mono">${v}k</text>
        </g>
      ))}
      {weeks.map((w, i) => {
        const gx = 28 + i * groupW;
        const label = w.split('\n');
        return (
          <g key={i}>
            <rect x={gx}           y={py(revenue[i])}   width={barW} height={bh(revenue[i])}   rx="2" fill={`rgba(61,123,255,0.75)`}/>
            <rect x={gx+barW+gap}  y={py(labor[i])}     width={barW} height={bh(labor[i])}     rx="2" fill={`rgba(246,181,74,0.75)`}/>
            <rect x={gx+barW*2+gap*2} y={py(materials[i])} width={barW} height={bh(materials[i])} rx="2" fill={`rgba(62,230,168,0.65)`}/>
            <text x={gx + barW * 1.5 + gap} y={H + 6} textAnchor="middle" fill={CF.inkMute} fontSize="7.5" fontFamily="Manrope" fontWeight="600">{label[0]}</text>
            <text x={gx + barW * 1.5 + gap} y={H + 15} textAnchor="middle" fill={CF.inkMute} fontSize="7" fontFamily="Manrope">{label[1]}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ── KPI Card with Sparkline ────────────────────────────────────────────
function KPISparkCard({ label, value, delta, deltaDir, sparkData, sparkColor, icon, compact }) {
  const [hover, setHover] = React.useState(false);

  // Cash Runway: pick color based on days remaining
  let lineColor = sparkColor;
  if (label === 'Cash Runway') {
    const days = parseInt(value, 10);
    lineColor = days <= 7 ? '#DC2626' : days <= 14 ? '#D97706' : '#059669';
  }

  // Delta badge styles
  const pos = deltaDir === 'up';
  const neg = deltaDir === 'down';
  const deltaBg    = pos ? 'rgba(16,185,129,0.12)' : neg ? 'rgba(239,68,68,0.1)' : 'var(--color-bg-tertiary)';
  const deltaColor = pos ? '#059669'               : neg ? '#DC2626'              : 'var(--color-text-muted)';
  const deltaSign  = pos ? '+' : '';

  // Inline sparkline — full control over fill opacity + bleed
  const spMax = Math.max(...sparkData), spMin = Math.min(...sparkData);
  const spRange = spMax - spMin || 1;
  const sW = 100, sH = 56;
  const spx = (i) => (i / (sparkData.length - 1)) * sW;
  const spy = (v) => sH - ((v - spMin) / spRange) * sH * 0.88 - sH * 0.06;
  const sparkD = sparkData.map((v, i) => `${i === 0 ? 'M' : 'L'}${spx(i).toFixed(2)},${spy(v).toFixed(2)}`).join(' ');
  const areaD  = sparkD + ` L${sW},${sH} L0,${sH} Z`;
  const uid    = `ksc-${label.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-card-border)',
        borderRadius: 16,
        padding: '20px 20px 0 20px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? 'var(--kpi-hover-shadow)' : 'var(--cf-cardShadow)',
        transition: 'all 0.15s ease',
      }}
    >
      {/* Top row: label + delta badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontSize: 11, fontWeight: 600,
          color: 'var(--color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>{label}</span>
        <span style={{
          fontSize: 11, fontWeight: 700,
          color: deltaColor, background: deltaBg,
          padding: '3px 8px', borderRadius: 999,
        }}>{deltaSign}{delta}</span>
      </div>

      {/* Main value */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 28, fontWeight: 800,
        color: 'var(--color-text-primary)',
        letterSpacing: '-0.03em',
        marginTop: 8, lineHeight: 1,
      }}>{value}</div>

      {/* Sub label */}
      <div style={{
        fontSize: 11, color: 'var(--color-text-muted)', marginTop: 4,
      }}>vs prior 30 days</div>

      {/* Sparkline — negative margins bleed to card edges */}
      <div style={{ margin: '16px -20px 0 -20px' }}>
        <svg viewBox={`0 0 ${sW} ${sH}`} width="100%" height={sH}
          preserveAspectRatio="none" style={{ display: 'block' }}>
          <defs>
            <linearGradient id={uid} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity="0.3"/>
              <stop offset="100%" stopColor={lineColor} stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={areaD} fill={`url(#${uid})`}/>
          <path d={sparkD} fill="none" stroke={lineColor} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
        </svg>
      </div>
    </div>
  );
}

// ── AI Copilot Panel ──────────────────────────────────────────────────
function AICopilotPanel({ onNavigate, onClose }) {
  const [isDark, setIsDark] = React.useState(() => document.documentElement.classList.contains('dark-mode'));
  React.useEffect(() => {
    const obs = new MutationObserver(() => setIsDark(document.documentElement.classList.contains('dark-mode')));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  const [learnMoreOpen, setLearnMoreOpen] = React.useState(false);
  const [atBottom, setAtBottom] = React.useState(false);
  const confidence = 85;

  const handlePanelScroll = (e) => {
    const el = e.currentTarget;
    setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 32);
  };

  // Section label
  const SL = ({ children }) => (
    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
      {children}
    </div>
  );

  // Inline SVG for icons not in Icon component
  const MiniSVG = ({ children, size = 15, color = '#3D7BFF', sw = 1.7 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
      {children}
    </svg>
  );

  // Reusable card row for risks / actions / opps
  const Row = ({ left, title, sub, onClick }) => (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14,
      background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
      borderRadius: 12, padding: '14px 16px', marginBottom: 8,
      cursor: 'pointer', transition: 'background 0.12s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-secondary)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg-card)'}
    >
      {left}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{title}</div>
        {sub && <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 2, lineHeight: 1.35 }}>{sub}</div>}
      </div>
      <Icon name="chevronRight" size={14} color="var(--color-text-muted)" strokeWidth={2} style={{ flexShrink: 0 }} />
    </div>
  );

  return (
    <div style={{ width: '100%', flex: 1, minHeight: 0, background: 'var(--color-bg-card)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>

          {/* Left: favicon logo + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="assets/favicon_cashflow.png" alt="CashIQ" style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>CashIQ</span>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999, background: 'rgba(61,123,255,0.1)', color: '#3D7BFF', letterSpacing: '0.04em' }}>BETA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 500 }}>AI CFO</span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3EE6A8', boxShadow: '0 0 8px rgba(62,230,168,0.8)', flexShrink: 0, display: 'block' }} />
                <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 500 }}>Live insights</span>
              </div>
            </div>
          </div>

          {/* Right: accuracy badge + close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid var(--color-border)', textAlign: 'center', minWidth: 64 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#3D7BFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{confidence}%</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.06em', marginTop: 3 }}>ACCURACY</div>
            </div>
            {onClose && (
              <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.12s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-tertiary)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg-secondary)'}
              >
                <Icon name="x" size={14} color="var(--color-text-muted)" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── SCROLLABLE BODY ── */}
      <div style={{ position: 'relative', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <div onScroll={handlePanelScroll} style={{ height: '100%', overflowY: 'auto', padding: '16px 16px 0' }}>

          {/* TOP PRIORITY */}
          <SL>Top Priority</SL>
          <div style={{ background: 'rgba(220,38,38,0.04)', border: '1px solid rgba(220,38,38,0.15)', borderRadius: 14, padding: 16, position: 'relative', marginBottom: 20, overflow: 'hidden' }}>
            {/* Decorative illustration — top right */}
            <div style={{ position: 'absolute', top: 14, right: 14, pointerEvents: 'none' }}>
              {/* Background invoice shape */}
              <div style={{ position: 'absolute', top: -2, right: 28, width: 46, height: 54, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.12)', borderRadius: 6, transform: 'rotate(-5deg)' }}>
                <div style={{ margin: '9px 7px 0', height: 3, background: 'rgba(220,38,38,0.2)', borderRadius: 2 }} />
                <div style={{ margin: '5px 7px 0', height: 3, background: 'rgba(220,38,38,0.15)', borderRadius: 2, width: '70%' }} />
                <div style={{ margin: '5px 7px 0', height: 3, background: 'rgba(220,38,38,0.12)', borderRadius: 2, width: '50%' }} />
              </div>
              {/* Dollar circle */}
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2, boxShadow: '0 2px 8px rgba(220,38,38,0.35)' }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1 }}>$</span>
              </div>
              {/* Warning circle overlapping */}
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: -4, right: -4, zIndex: 3, boxShadow: '0 2px 6px rgba(220,38,38,0.3)' }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1 }}>!</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, paddingRight: 72 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(220,38,38,0.3)' }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#fff', lineHeight: 1 }}>!</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.4, marginBottom: 4 }}>3 overdue invoices impacting your cash flow.</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Collect $42,150 to improve your cash position.</div>
              </div>
            </div>

            {/* CTA */}
            <button style={{ width: '100%', marginTop: 12, padding: '8px 14px', borderRadius: 8, background: 'transparent', border: '1px solid rgba(220,38,38,0.3)', color: '#DC2626', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background 0.12s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(220,38,38,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Review overdue invoices <Icon name="chevronRight" size={13} color="#DC2626" strokeWidth={2.2} />
            </button>
          </div>

          {/* RISKS TO WATCH */}
          <SL>Risks to Watch</SL>
          <div style={{ marginBottom: 20 }}>
            <Row
              onClick={() => {}}
              left={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(217,119,6,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="warning" size={15} color="#D97706" strokeWidth={2} /></div>}
              title="Cash floor breach in 23 days"
              sub="Due to scheduled payroll on May 26"
            />
            <Row
              onClick={() => {}}
              left={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(217,119,6,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MiniSVG color="#D97706" sw={1.8}>
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                  <polyline points="17 18 23 18 23 12"/>
                </MiniSVG>
              </div>}
              title="Margin dropping on Hoosier Homes"
              sub="Running at 8% margin"
            />
            <Row
              onClick={() => {}}
              left={<div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(220,38,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MiniSVG color="#DC2626" sw={1.7}>
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.55l1.57-7.45H6"/>
                </MiniSVG>
              </div>}
              title="Material purchase alert"
              sub="Large purchase scheduled May 18"
            />
          </div>

          {/* OPPORTUNITIES */}
          <SL>Opportunities</SL>
          <div style={{ marginBottom: 20 }}>
            {[
              <>With $1,887 safe-to-spend, <span style={{ color: '#DC2626', fontWeight: 700 }}>collect $26K in closing jobs before taking new work.</span></>,
              <>Delay equipment purchase and preserve <span style={{ color: '#059669', fontWeight: 700 }}>$18K</span> in cash.</>,
              <>Negotiate retainage release on 2 projects worth <span style={{ color: '#059669', fontWeight: 700 }}>$24,700</span>.</>,
            ].map((jsx, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '14px 16px', marginBottom: 8, cursor: 'pointer', transition: 'background 0.12s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-secondary)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg-card)'}
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={14} color="#059669" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>{jsx}</div>
                <Icon name="chevronRight" size={14} color="var(--color-text-muted)" strokeWidth={2} style={{ flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* AI ACTION CENTER */}
          <SL>AI Action Center</SL>
          <div style={{ marginBottom: 20 }}>
            {[
              { icon: <Icon name="receipt" size={15} color="#3D7BFF" strokeWidth={1.7} />, label: 'Collect overdue invoices', nav: null },
              { icon: <Icon name="send" size={14} color="#3D7BFF" strokeWidth={1.7} />, label: 'Send payment reminders', nav: null },
              { icon: <MiniSVG color="#3D7BFF" sw={1.7}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></MiniSVG>, label: 'Review job margins', nav: 'jobs' },
              { icon: <Icon name="trendUp" size={14} color="#3D7BFF" strokeWidth={1.7} />, label: 'Run cash flow scenarios', nav: 'forecast' },
            ].map((a, i) => (
              <div key={i} onClick={() => a.nav && onNavigate(a.nav)} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '14px 16px', marginBottom: 8, cursor: 'pointer', transition: 'background 0.12s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-bg-secondary)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-bg-card)'}
              >
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(61,123,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{a.icon}</div>
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>{a.label}</span>
                <Icon name="chevronRight" size={14} color="var(--color-text-muted)" strokeWidth={2} style={{ flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* AI LEARNING CARD */}
          <div style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', borderRadius: 14, padding: 16, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(61,123,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="sparkle" size={16} color="#3D7BFF" strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1 }}>AI is learning your business</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 3 }}>More accurate insights over time.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 6, background: 'var(--color-bg-tertiary)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${confidence}%`, height: '100%', background: '#3D7BFF', borderRadius: 999 }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#3D7BFF', flexShrink: 0 }}>{confidence}%</span>
            </div>
            <button onClick={() => setLearnMoreOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#3D7BFF', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Manrope',sans-serif", marginTop: 10, padding: 0 }}>
              Learn more about CashIQ
              <MiniSVG size={12} color="#3D7BFF" sw={2}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </MiniSVG>
            </button>
          </div>

          <div style={{ height: 80 }} />
        </div>

        {/* Scroll hint — fade gradient + bouncing chevron */}
        {!atBottom && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 72,
            background: isDark
              ? 'linear-gradient(to bottom, rgba(15,22,41,0) 0%, rgba(15,22,41,0.95) 100%)'
              : 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.96) 100%)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            paddingBottom: 10, pointerEvents: 'none',
          }}>
            <div style={{ animation: 'scroll-bounce 1.5s ease-in-out infinite', opacity: 0.55 }}>
              <Icon name="chevronDown" size={16} color={isDark ? CF.inkDim : CF.inkMute} strokeWidth={2.2} />
            </div>
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div style={{ borderTop: '1px solid var(--color-border)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Insights are based on your connected data.</span>
        <button style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#3D7BFF', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Manrope',sans-serif", fontWeight: 600, padding: 0 }}>
          <MiniSVG size={13} color="#3D7BFF" sw={1.8}>
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </MiniSVG>
          Provide feedback
        </button>
      </div>

      {/* Learn more modal */}
      {learnMoreOpen && (
        <div onClick={() => setLearnMoreOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 420, background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 16, padding: '28px 28px 24px', boxShadow: '0 16px 48px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="sparkle" size={16} color={CF.blue} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>AI Accuracy — {confidence}%</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 1 }}>Learning from your transaction history</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>
              CashIQ gets smarter as it sees more of your data. Import more transactions to reach <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>100% accuracy</strong> and unlock deeper forecasting confidence.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              {[
                { label: 'Bank transactions', pct: 92, color: CF.blue },
                { label: 'QuickBooks invoices', pct: 88, color: CF.green },
                { label: 'Job cost history', pct: 74, color: CF.amber },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                    <span>{s.label}</span><span style={{ fontWeight: 600, color: s.color }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--color-bg-tertiary)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ width: `${s.pct}%`, height: '100%', background: s.color, borderRadius: 999, opacity: 0.8 }} />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setLearnMoreOpen(false)} style={{ width: '100%', padding: '10px', borderRadius: 10, background: CF.blue, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none', fontFamily: "'Inter',sans-serif" }}>
              Connect more data sources
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Asset Total Widget ────────────────────────────────────────────────
function AssetTotalWidget() {
  // 84 pts (14 per month × 6 months): Jul → Dec, dips negative in Oct
  const data = [
    18200,19000,20100,19500,18800,18200,17800,18400,19200,20000,19600,18900,18200,17700,
    17200,16600,16000,15400,14800,14200,13500,12900,12200,11500,10800,10200,9600,9100,
    8600,8000,7400,6800,6200,5600,5000,4400,3800,3200,2600,2000,1400,800,
    200,-600,-1600,-2800,-4200,-5800,-7400,-9100,-8200,-6600,-4900,-3100,-1200,600,
    2800,5200,7800,10600,13400,16200,18400,19800,20600,19800,18900,18200,18600,19000,
    19300,19500,19700,19400,19100,18800,19000,19300,19100,18900,18700,18900,19100,18293,
  ];

  const months = ['Jul','Aug','Sept','Oct','Nov','Dec'];
  const W = 600, H = 140;
  const dataMin = -10000, dataMax = 22000, range = dataMax - dataMin;
  const lp = 42, rp = 0, tp = 6, bp = 20;
  const cW = W - lp - rp, cH = H - tp - bp;

  const px = (i) => lp + (i / (data.length - 1)) * cW;
  const py = (v) => tp + cH - ((v - dataMin) / range) * cH;
  const path = data.map((v,i) => `${i===0?'M':'L'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const area = path + ` L${px(data.length-1)},${tp+cH} L${px(0)},${tp+cH} Z`;

  const gridLines = [20000, 0, -10000];
  const monthX = months.map((_,i) => lp + (i/(months.length-1)) * cW);

  return (
    <div className="asset-net-grid">

      {/* ── Left: Asset Total + chart ── */}
      <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 24px 14px' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: CF.inkMute, marginBottom: 10 }}>Asset Total</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink, lineHeight: 1 }}>$18,293.00</div>
            <Icon name="eye" size={16} color={CF.inkMute} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: CF.green, background: 'rgba(5,150,105,0.1)', padding: '2px 8px', borderRadius: 999 }}>↑ 3.2%</span>
            <span style={{ fontSize: 11, color: CF.inkMute }}>Compared to last month</span>
          </div>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', flexShrink: 0 }}>
          <defs>
            <linearGradient id="at-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={CF.green} stopOpacity="0.18"/>
              <stop offset="100%" stopColor={CF.green} stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Grid */}
          {gridLines.map(v => (
            <g key={v}>
              <line x1={lp} y1={py(v)} x2={W} y2={py(v)} stroke={CF.navyLine} strokeWidth="1" strokeDasharray="4 4" opacity="0.8"/>
              <text x={lp - 5} y={py(v) + 4} textAnchor="end" fill={CF.inkMute} fontSize="9" fontFamily="Inter,sans-serif">
                {v >= 0 ? `$${v/1000}k` : `-$${Math.abs(v/1000)}k`}
              </text>
            </g>
          ))}
          {/* Area fill */}
          <path d={area} fill="url(#at-fill)"/>
          {/* Line */}
          <path d={path} fill="none" stroke={CF.green} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Month labels */}
          {months.map((m, i) => (
            <text key={m} x={monthX[i]} y={H - 3} textAnchor="middle" fill={CF.inkMute} fontSize="10" fontFamily="Inter,sans-serif">{m}</text>
          ))}
        </svg>
      </div>

      {/* ── Right: stacked cards ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Net Worth Total */}
        <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: CF.ink }}>Net Worth Total</div>
            <span style={{ fontSize: 11, color: CF.blue, fontWeight: 600, cursor: 'pointer' }}>View all</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink, marginBottom: 10, lineHeight: 1 }}>$14,892.44</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: CF.green, background: 'rgba(5,150,105,0.1)', padding: '2px 8px', borderRadius: 999 }}>↑ 2.4%</span>
            <span style={{ fontSize: 11, color: CF.inkMute }}>Compared to last week</span>
          </div>
        </div>

        {/* AI Forecast Summary */}
        <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: CF.ink }}>AI Forecast Summary</div>
            <span style={{ fontSize: 11, color: CF.blue, fontWeight: 600, cursor: 'pointer' }}>View all</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink, marginBottom: 10, lineHeight: 1 }}>$3,297.32</div>
          <div style={{ fontSize: 11, color: CF.inkDim, lineHeight: 1.55 }}>
            Your net worth <strong style={{ fontWeight: 600, color: CF.ink }}>is predicted to increase</strong>{' '}
            <span style={{ fontSize: 11, fontWeight: 600, color: CF.green, background: 'rgba(5,150,105,0.1)', padding: '2px 7px', borderRadius: 999 }}>↑ 8.2%</span>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Cash Flow Forecast Widget ─────────────────────────────────────────
function CashFlowForecastWidget() {
  const [selectedKPI, setSelectedKPI] = React.useState(null);

  const kpis = [
    { label: 'Mar Revenue',    value: '$101,966', accent: CF.green },
    { label: 'Mar Expenses',   value: '$94,301',  accent: CF.red   },
    { label: 'Net Cash Flow',  value: '$7,665',   accent: CF.amber },
    { label: 'Avg (3 mo)',     value: '$917',     accent: CF.red   },
  ];

  // Jan–Mar actual, Apr–Jun projected (*)
  const months = ['Jan', 'Feb', 'Mar', 'Apr*', 'May*', 'Jun*'];
  const incomeData  = [55028, 51500, 101966, 72000,  78000,  84000];
  const expenseData = [59943, 51500,  94301, 65000,  70000,  74000];
  const percentages = [   -9,     0,      8,    10,     10,     12];

  const W = 480, H = 160;
  const maxVal = 110000;
  const leftPad = 36, rightPad = 8, topPad = 32, bottomPad = 22;
  const chartW = W - leftPad - rightPad;
  const chartH = H - topPad - bottomPad;
  const groupW = chartW / months.length;
  const barW = groupW * 0.28;
  const gap = 3;

  const py = (v) => topPad + chartH - (v / maxVal) * chartH;
  const bh = (v) => (v / maxVal) * chartH;
  const cx = (i) => leftPad + i * groupW + groupW / 2;

  return (
    <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)' }}>
      {/* Title */}
      <div style={{ fontSize: 14, fontWeight: 600, color: CF.ink, marginBottom: 16 }}>Cash Flow Forecast</div>

      {/* KPI mini-cards */}
      <div className="forecast-kpi-grid" style={{ display: 'grid', gap: 8, marginBottom: 20 }}>
        {kpis.map((k, i) => (
          <div key={i} onClick={() => setSelectedKPI(i)} style={{
            padding: '9px 12px', borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s',
            border: `1px solid ${i === selectedKPI ? k.accent : CF.navyLine}`,
            background: i === selectedKPI ? `${k.accent}0D` : 'transparent',
          }}>
            <div style={{ fontSize: 10, color: CF.inkMute, fontWeight: 500, marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: i === selectedKPI ? k.accent : CF.ink, letterSpacing: '-0.025em', lineHeight: 1 }}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <linearGradient id="cffw-income" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={CF.blue} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={CF.blue} stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="cffw-expense" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={CF.amber} stopOpacity="0.7"/>
            <stop offset="100%" stopColor={CF.amber} stopOpacity="0.4"/>
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 50000, 100000, 145000].map(v => (
          <g key={v}>
            <line x1={leftPad} y1={py(v)} x2={W - rightPad} y2={py(v)}
              stroke={CF.navyLine} strokeWidth="1" strokeDasharray="3 3" opacity="0.7"/>
            <text x={leftPad - 5} y={py(v) + 4} textAnchor="end"
              fill={CF.inkMute} fontSize="9" fontFamily="Inter,sans-serif">
              ${v === 0 ? '0' : v / 1000 + 'k'}
            </text>
          </g>
        ))}

        {/* Bars per month */}
        {months.map((m, i) => {
          const x1 = cx(i) - barW - gap / 2;
          const x2 = cx(i) + gap / 2;
          const iy = py(incomeData[i]);
          const ey = py(expenseData[i]);

          return (
            <g key={m}>
              {/* Income bar */}
              <rect x={x1} y={iy} width={barW} height={bh(incomeData[i])} fill="url(#cffw-income)" rx="3"/>
              {/* Expense bar */}
              <rect x={x2} y={ey} width={barW} height={bh(expenseData[i])} fill="url(#cffw-expense)" rx="3"/>

              {/* Labels above income bar */}
              <text x={cx(i)} y={iy - 14} textAnchor="middle"
                fill={percentages[i] < 0 ? CF.red : i >= 3 ? CF.inkMute : CF.ink} fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">
                {percentages[i]}%{i >= 3 ? '*' : ''}
              </text>
              <text x={cx(i)} y={iy - 3} textAnchor="middle"
                fill={CF.inkMute} fontSize="8.5" fontFamily="Inter,sans-serif">
                {(incomeData[i] / 1000).toFixed(1)}K
              </text>

              {/* Month label */}
              <text x={cx(i)} y={H - 2} textAnchor="middle"
                fill={CF.inkMute} fontSize="10" fontFamily="Inter,sans-serif">
                {m}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g>
          <rect x={leftPad} y={2} width={10} height={10} fill={CF.blue} rx="2" opacity="0.8"/>
          <text x={leftPad + 14} y={11} fill={CF.inkMute} fontSize="9" fontFamily="Inter,sans-serif">Income</text>
          <rect x={leftPad + 64} y={2} width={10} height={10} fill={CF.amber} rx="2" opacity="0.65"/>
          <text x={leftPad + 78} y={11} fill={CF.inkMute} fontSize="9" fontFamily="Inter,sans-serif">Expenses</text>
        </g>
      </svg>

      {/* AI insight footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 14,
        padding: '8px 12px', borderRadius: 9,
        background: 'rgba(61,123,255,0.05)', border: `1px solid rgba(61,123,255,0.18)` }}>
        <Icon name="sparkle" size={11} color={CF.blue} strokeWidth={2}/>
        <span style={{ fontSize: 11, color: CF.inkDim, fontWeight: 500 }}>
          Revenue up 56% Mar vs Feb (actual). Apr–Jun are AI projections based on trend.
        </span>
      </div>
    </div>
  );
}

// ── Main Dashboard Screen ─────────────────────────────────────────────
function DashboardScreen({ compact, onNavigate }) {
  const [range, setRange] = React.useState('30D');
  const greeting = React.useMemo(() => {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return 'Good morning, Dan 👋';
    if (h >= 12 && h < 17) return 'Good afternoon, Dan 👋';
    if (h >= 17 && h < 21) return 'Good evening, Dan 👋';
    return 'Good morning, Dan 👋';
  }, []);
  const subDate = React.useMemo(() => {
    const d = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `Here's your financial overview for ${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }, []);
  const [alerts, setAlerts] = React.useState([
    { id: 1, type: 'danger', action: 'Collect invoices', text: <><strong style={{color:CF.red}}>⚠ Cash runway critical: 9 days</strong> — Gross margin at 1.3%. Collect open invoices and reduce material spend immediately.</> },
  ]);
  const [showBreakdown, setShowBreakdown] = React.useState(false);
  const [showWhyAI, setShowWhyAI] = React.useState(false);
  const [aiCopilot, setAiCopilot] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Real CSV data — Main Street Contractors (Jan–Mar 2026)
  const kpis = [
    { label: 'Total Revenue (90D)', value: '$208,494', delta: '14.2%', deltaDir: 'up', sparkColor: CF.green,
      sparkData: [18,20,15,22,28,19,34,24,30,38,32,42] },
    { label: 'Total Expenses (90D)', value: '$205,744', delta: '12.8%', deltaDir: 'up', sparkColor: CF.red,
      sparkData: [20,22,18,24,26,21,32,28,29,36,34,40] },
    { label: 'Gross Margin', value: '1.3%', delta: '2.1pts', deltaDir: 'down', sparkColor: CF.red,
      sparkData: [5,3,4,2,6,3,8,4,5,3,2,1] },
    { label: 'Active Jobs', value: '6', delta: '1', deltaDir: 'up', sparkColor: CF.cyan,
      sparkData: [4,4,5,5,5,5,5,6,5,6,6,6] },
    { label: 'Cash Runway', value: '9 days', delta: '4 days', deltaDir: 'down', sparkColor: CF.red,
      sparkData: [18,14,10,8,12,9,6,11,8,7,10,9] },
  ];

  const recentActivity = [
    { desc: 'Brian Rodriguez · Hoosier Homes',      time: 'Mar 31, 10:22 AM',   amt: '-$217.05',    pos: false, type: 'bill',    dotColor: CF.amber },
    { desc: 'Floor & Decor · Bathroom materials',   time: 'Mar 31, 9:15 AM',    amt: '-$310.32',    pos: false, type: 'bill',    dotColor: CF.amber },
    { desc: 'Fernando Morales · Simplicity',        time: 'Mar 30, 3:40 PM',    amt: '-$330.00',    pos: false, type: 'bill',    dotColor: CF.amber },
    { desc: 'Timberland Dr. — draw payment',        time: 'Mar 18, 11:05 AM',   amt: '+$21,651.68', pos: true,  type: 'payment', dotColor: CF.green },
  ];

  const breakdown = [
    { label: 'Bank Balance',             value: '$6,665',    color: CF.ink },
    { label: 'Tax Reserve (25% profit)', value: '-$688',     color: CF.inkMute },
    { label: 'Payroll Nut (14 days)',    value: '-$2,800',   color: CF.inkMute },
    { label: 'Committed Materials',      value: '-$1,290',   color: CF.inkMute },
    { label: 'Safe-to-Spend',           value: '$1,887',    color: CF.red, bold: true },
  ];

  const integrations = [
    { name: 'QuickBooks', status: 'Connected', color: '#2CA01C' },
    { name: 'Buildertrend', status: 'Connected', color: CF.amber },
    { name: 'Plaid', status: 'Connected', color: CF.blue },
  ];

  return (
    <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>

      {/* ── Main scrollable area ─────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0, minHeight: 0 }}>
        <Topbar
          title={greeting}
          sub={subDate}
          actions={
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', border: `1px solid ${CF.navyLine}`, borderRadius: 9, padding: 3, gap: 1 }} className="range-picker">
                {['7D','30D','90D','1Y'].map(r => (
                  <span key={r} onClick={() => setRange(r)} style={{ padding: '4px 10px', borderRadius: 7, cursor: 'pointer', fontSize: 11, background: r === range ? 'rgba(61,123,255,0.22)' : 'transparent', color: r === range ? CF.ink : CF.inkMute, fontWeight: r === range ? 700 : 500, transition: 'all 0.15s' }}>{r}</span>
                ))}
              </div>
            </div>
          }
        />

        <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px 16px 140px' : '24px 24px 140px', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {alerts.map(a => (
                <AlertBanner key={a.id} type={a.type} action={a.action}>
                  {a.text}
                </AlertBanner>
              ))}
            </div>
          )}

          {/* ── Monday Morning Truth ────────────────── */}
          <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, background: CF.navy1, boxShadow: 'var(--cf-cardShadow)' }}>
            {/* Section label */}
            <div style={{ padding: '14px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: CF.ink, display: 'flex', alignItems: 'center', gap: 7 }}>
                Monday Morning Truth
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--color-bg-secondary)', border: `1px solid ${CF.navyLine}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <span style={{ fontSize: 10, color: CF.inkMute, fontWeight: 700, lineHeight: 1 }}>?</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: CF.amber, fontWeight: 700, background: 'rgba(217,119,6,0.08)', border: '1px solid rgba(217,119,6,0.2)', padding: '3px 10px', borderRadius: 999 }}>
                <Icon name="warning" size={10} color={CF.amber} strokeWidth={2.5} /> Cash at risk
              </div>
            </div>

            <div className="mmt-grid">
              {/* Safe-to-Spend */}
              <div className="mmt-section" style={{ padding: compact ? '16px 20px 20px' : '20px 28px 28px', minWidth: 0, position: 'relative' }}>
                <div style={{ fontSize: 11, color: CF.inkDim, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: CF.red, flexShrink: 0, boxShadow: '0 0 6px rgba(220,38,38,0.5)', animation: 'cashiq-pulse 2.4s ease-in-out infinite' }} />
                  Safe to spend · as of today
                </div>
                <div className="mmt-safe-spend" style={{ fontFamily: "'Inter','Manrope',sans-serif", fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em', color: CF.red, lineHeight: 1 }}>
                  $1,887
                </div>
                <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 8, lineHeight: 1.5 }}>
                  Bank: $6,665 after tax, payroll nut &amp;<br/>committed materials for active jobs
                </div>
                <button onClick={() => setShowBreakdown(p => !p)} className="mmt-view-breakdown-btn" style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 9, background: 'rgba(61,123,255,0.06)', border: '1px solid rgba(61,123,255,0.2)', color: CF.blue, fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: "'Manrope',sans-serif'" }}>
                  {showBreakdown ? 'Hide breakdown' : 'View breakdown'} <Icon name="chevronDown" size={11} color={CF.blue} style={{ transform: showBreakdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {showBreakdown && (
                  <div className="mmt-breakdown-mobile" style={{ display: 'none', marginTop: 14, padding: '14px 0 0', borderTop: `1px dashed ${CF.navyLine}` }}>
                    {breakdown.map((b, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i === breakdown.length - 1 ? `1px solid ${CF.navyLine}` : 'none', marginTop: i === breakdown.length - 1 ? 4 : 0, paddingTop: i === breakdown.length - 1 ? 10 : 6 }}>
                        <span style={{ fontSize: 11, color: i === breakdown.length - 1 ? CF.ink : CF.inkDim, fontWeight: i === breakdown.length - 1 ? 600 : 400 }}>{b.label}</span>
                        <span style={{ fontSize: i === breakdown.length - 1 ? 14 : 12, fontWeight: 700, color: b.color }}>{b.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="mmt-divider-v" style={{ width: 1, background: `linear-gradient(180deg,transparent,${CF.navyLine},transparent)`, margin: '16px 0' }} />

              {/* AI Insight */}
              <div className="mmt-section" style={{ flex: 1, padding: compact ? '16px 18px 20px' : '20px 24px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(61,123,255,0.12)', border: '1px solid rgba(61,123,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="sparkle" size={10} color={CF.blue} />
                  </div>
                  <span style={{ fontSize: 11, color: CF.inkMute, fontWeight: 600 }}>AI Insight</span>
                  <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 5, background: 'rgba(61,123,255,0.1)', color: CF.blue, border: '1px solid rgba(61,123,255,0.2)', fontWeight: 600 }}>Beta</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                  <Icon name="sparkle" size={14} color={CF.green} strokeWidth={2.5} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 17, lineHeight: 1.3, color: CF.ink }}>
                    <span style={{ color: CF.red }}>Do not hire</span> — 9-day runway.
                  </div>
                </div>
                <div style={{ fontSize: 11, color: CF.inkDim, lineHeight: 1.55, marginBottom: 12 }}>
                  $1,887 safe-to-spend after tax reserve, payroll, and committed materials. 9-day runway. Collect open invoices before adding overhead.
                </div>
                <button onClick={() => setShowWhyAI(true)} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: CF.blue, fontWeight: 600, cursor: 'pointer', background: 'none', border: 'none', fontFamily: "'Inter','Manrope',sans-serif", padding: 0 }}>
                  Why AI says this <Icon name="arrow" size={11} color={CF.blue} />
                </button>
              </div>

              {/* Divider */}
              <div className="mmt-divider-v mmt-divider-v-2" style={{ width: 1, background: `linear-gradient(180deg,transparent,${CF.navyLine},transparent)`, margin: '16px 0' }} />

              {/* Breakdown table (desktop only) */}
              <div className="mmt-section mmt-breakdown-desktop" style={{ padding: compact ? '16px 20px 20px' : '20px 24px 24px', minWidth: 0 }}>
                {breakdown.map((b, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i === breakdown.length - 1 ? `1px solid ${CF.navyLine}` : 'none', marginTop: i === breakdown.length - 1 ? 4 : 0, paddingTop: i === breakdown.length - 1 ? 10 : 6 }}>
                    <span style={{ fontSize: i === breakdown.length - 1 ? 11 : 11, color: i === breakdown.length - 1 ? CF.ink : CF.inkDim, fontWeight: i === breakdown.length - 1 ? 600 : 400 }}>{b.label}</span>
                    <span style={{ fontSize: i === breakdown.length - 1 ? 14 : 12, fontWeight: 700, color: b.color }}>{b.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── KPI Row ─────────────────────────────── */}
          <div className="kpi-grid">
            {kpis.map(k => (
              <KPISparkCard key={k.label} {...k} compact={compact} />
            ))}
          </div>

          {/* ── Largest Invoice + Jobs Closing ──────── */}
          <div className="invoice-jobs-grid">

            {/* Largest Open Invoice */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: CF.ink }}>Largest Open Invoice</div>
                <span style={{ fontSize: 10, fontWeight: 700, color: CF.red, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', padding: '3px 8px', borderRadius: 6, letterSpacing: '0.06em' }}>OVERDUE</span>
              </div>
              <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink, lineHeight: 1, marginBottom: 6 }}>$14,200</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: CF.inkDim, marginBottom: 2 }}>Southeastern Property — draw #3</div>
              <div style={{ fontSize: 11, color: CF.inkMute, marginBottom: 20 }}>Due Apr 15, 2026</div>
              <div style={{ marginTop: 'auto' }}>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 16px', borderRadius: 10, background: 'rgba(217,119,6,0.08)', border: `1px solid rgba(217,119,6,0.25)`, color: CF.amber, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter',sans-serif" }}>
                  <Icon name="send" size={12} color={CF.amber} /> Send reminder
                </button>
              </div>
            </div>

            {/* Jobs Closing This Week */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: CF.ink }}>Jobs Closing This Week</div>
                <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-cyan)', background: 'rgba(111,232,255,0.08)', border: '1px solid rgba(111,232,255,0.18)', padding: '2px 8px', borderRadius: 999, letterSpacing: '0.06em' }}>CashIQ</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 14 }}>
                {[
                  { name: 'Hoosier Homes — framing',  amount: '$8,400',  closes: 'Apr 28' },
                  { name: 'Live Indy — punch list', amount: '$5,200',  closes: 'Apr 30' },
                  { name: 'INHP Arnolda — draw #2', amount: '$12,600', closes: 'May 1'  },
                ].map((job, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0', borderBottom: i < 2 ? `1px solid ${CF.navyLine}` : 'none' }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: CF.inkDim }}>{job.name}</div>
                      <div style={{ fontSize: 10, color: CF.inkMute, marginTop: 2 }}>Closes {job.closes}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: CF.ink, letterSpacing: '-0.02em' }}>{job.amount}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.18)' }}>
                <span style={{ fontSize: 11, color: CF.inkDim, fontWeight: 500 }}>Total closing</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: CF.green, letterSpacing: '-0.02em' }}>$26,200</span>
              </div>
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <span style={{ fontSize: 11, color: CF.blue, fontWeight: 600, cursor: 'pointer' }}>View all projects →</span>
              </div>
            </div>
          </div>

          {/* ── Cash Flow Forecast + Recent Activity ─── */}
          <div className="forecast-activity-grid">
            <CashFlowForecastWidget />
            {/* Recent Activity */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: CF.ink }}>Recent Activity</span>
                <span style={{ fontSize: 11, color: CF.blue, fontWeight: 600, cursor: 'pointer' }}>View all</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                {recentActivity.map((t, i) => {
                  const iconName = t.type === 'payment' ? 'trendUp' : t.type === 'overdue' ? 'warning' : t.type === 'bill' ? 'accounts' : 'jobs';
                  const bgOpacity = t.type === 'payment' ? 'rgba(5,150,105,0.1)' : t.type === 'overdue' ? 'rgba(220,38,38,0.09)' : t.type === 'bill' ? 'rgba(217,119,6,0.1)' : 'rgba(61,123,255,0.1)';
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < recentActivity.length - 1 ? `1px solid ${CF.navyLine}` : 'none' }}>
                      {/* Colored dot indicator */}
                      <div style={{ position: 'relative', flexShrink: 0 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 9, background: bgOpacity, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon name={iconName} size={14} color={t.dotColor} />
                        </div>
                        <span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: '50%', background: t.dotColor, border: `2px solid ${CF.navy1}` }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: CF.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.desc}</div>
                        <div style={{ fontSize: 10, color: CF.inkMute, marginTop: 2 }}>{t.time}</div>
                      </div>
                      {t.amt && (
                        <div style={{ fontSize: 12, fontWeight: 700, color: t.pos === true ? CF.green : t.pos === false ? CF.red : CF.inkDim, flexShrink: 0, letterSpacing: '-0.02em' }}>{t.amt}</div>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* CashIQ row */}
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: 'linear-gradient(135deg, rgba(109,76,210,0.12) 0%, rgba(61,123,255,0.12) 100%)', border: '1px solid rgba(61,123,255,0.18)', cursor: 'pointer' }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(111,232,255,0.15)', border: '1px solid rgba(111,232,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="sparkle" size={12} color={CF.cyan} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: CF.ink }}>CashIQ spotted a pattern</div>
                  <div style={{ fontSize: 10, color: CF.inkMute, marginTop: 1 }}>Southeastern Property pays late 2 of 3 draws. Set auto-reminder.</div>
                </div>
                <Icon name="chevronRight" size={12} color={CF.inkMute} />
              </div>
            </div>
          </div>

          {/* ── Cash Flow + Can I Hire? ──────────────── */}
          <div className="hire-chart-grid">
            {/* 30D Cash Flow mini chart */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '20px 24px 0 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', minWidth: 0, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: CF.ink }}>Cash flow projection</div>
                  <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 2 }}>AI-modeled · {range} view</div>
                </div>
                <Chip color="cyan">Live model</Chip>
              </div>
              <div style={{ marginTop: 14, marginLeft: -24, marginRight: -24 }}><MiniChart range={range} /></div>
            </div>

            {/* Can I Hire Today? */}
            <div style={{
              border: `1px solid ${CF.cardBorder}`, borderRadius: 16,
              padding: '20px 24px',
              background: CF.navy1, boxShadow: 'var(--cf-cardShadow)',
              display: 'flex', flexDirection: 'column', gap: 14,
              minWidth: 0,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="sparkle" size={12} color={CF.blue} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: CF.ink }}>Can I hire today?</div>
                </div>
                <div style={{ fontSize: 11, color: CF.inkMute }}>AI decision engine · updated 2 min ago</div>
              </div>
              {/* Answer card */}
              <div style={{ border: `1px solid ${CF.navyLine}`, background: CF.navy3, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, color: CF.inkMute, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
                  AI Analysis
                </div>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 20, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                  <span style={{ color: CF.red }}>No</span> — not safe to hire.{' '}
                  <em>9-day runway.</em>
                </div>
                <div style={{ fontSize: 11, color: CF.inkDim, marginTop: 8, lineHeight: 1.55 }}>
                  $1,887 safe-to-spend with 9-day runway. Gross margin at 1.3%. Collect open invoices before adding overhead.
                </div>
              </div>
              {/* Confidence ring */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
                  <svg viewBox="0 0 100 100" width="80" height="80" style={{ transform: 'rotate(-90deg)' }}>
                    <defs><linearGradient id="rgl3" x1="0" x2="1"><stop offset="0%" stopColor="#6FE8FF"/><stop offset="100%" stopColor="#3D7BFF"/></linearGradient></defs>
                    <circle cx="50" cy="50" r="40" stroke={CF.navy3} strokeWidth="10" fill="none"/>
                    <circle cx="50" cy="50" r="40" stroke="url(#rgl3)" strokeWidth="10" fill="none" strokeDasharray="251" strokeDashoffset="166" strokeLinecap="round"/>
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em' }}>34%</span>
                    <span style={{ fontSize: 8, color: CF.inkMute, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Conf.</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: CF.inkDim, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[['#6FE8FF','AR pipeline'],['#3D7BFF','Margin buffer'],['#1C2A48','Risk reserve']].map(([c,l]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 3, background: c, flexShrink: 0 }} />{l}
                    </div>
                  ))}
                </div>
              </div>

              {/* Second AI question */}
              <div style={{ borderTop: `1px solid ${CF.navyLine}`, paddingTop: 14 }}>
                <div style={{ fontSize: 10, color: CF.inkMute, fontWeight: 500, marginBottom: 8 }}>
                  "Can I buy a $40k truck?"
                </div>
                <div style={{ border: '1px solid rgba(217,119,6,0.25)', background: 'rgba(217,119,6,0.05)', borderRadius: 10, padding: '12px 14px' }}>
                  <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 18, lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: 6 }}>
                    <span style={{ color: CF.red }}>No</span> — not viable now.
                  </div>
                  <div style={{ fontSize: 11, color: CF.inkDim, lineHeight: 1.55 }}>
                    $6,665 balance with $1,887 safe-to-spend. Collect $26K in closing jobs first.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Margin Alert ─────────────────── */}
          <div style={{ border: '1px solid rgba(217,119,6,0.3)', borderRadius: 14, padding: '16px 20px', background: 'rgba(217,119,6,0.04)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="warning" size={18} color={CF.amber} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: CF.amber, marginBottom: 4 }}>Hoosier Homes margin at 8% — 42pts below target</div>
              <div style={{ fontSize: 11, color: CF.inkDim }}>Job is running below your 50% margin floor. Material costs ($4,200 Floor & Decor) eating into profit.</div>
            </div>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 18px', borderRadius: 10, background: CF.amber, color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', border: 'none', flexShrink: 0, fontFamily: "'Inter',sans-serif" }}>
              Review now <Icon name="arrow" size={12} color="#fff" />
            </button>
          </div>

          {/* ── Bottom Row ──────────────────────────── */}
          <div className="bottom-grid">

            {/* Upcoming Payroll */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 14, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
                <Icon name="payroll" size={13} color={CF.amber} />
                <span style={{ fontSize: 11, fontWeight: 500, color: CF.inkDim }}>Upcoming Payroll</span>
              </div>
              <div style={{ fontSize: 11, color: CF.amber, fontWeight: 700 }}>Due this week</div>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink }}>$6,800</div>
              <div style={{ fontSize: 11, color: CF.inkMute }}>Estimated · Cesar, Brian & helpers</div>
              <button style={{ marginTop: 4, fontSize: 11, color: CF.amber, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Manrope',sans-serif", textAlign: 'left', padding: 0 }}>View details →</button>
            </div>

            {/* Bills Due */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 14, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
                <Icon name="accounts" size={13} color={CF.red} />
                <span style={{ fontSize: 11, fontWeight: 500, color: CF.inkDim }}>Bills due (7 days)</span>
              </div>
              <div style={{ fontSize: 11, color: CF.red, fontWeight: 700 }}>Total</div>
              <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink }}>$3,245</div>
              <div style={{ fontSize: 11, color: CF.inkMute }}>QuickBooks, HighLevel, IPFS, Lowes CC</div>
              <button style={{ marginTop: 4, fontSize: 11, color: CF.red, fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Manrope',sans-serif", textAlign: 'left', padding: 0 }}>View bills →</button>
            </div>

            {/* Cash Floor */}
            <div style={{ border: `1px solid ${CF.cardBorder}`, borderRadius: 14, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, width: '100%', marginBottom: 2 }}>
                <Icon name="zap" size={13} color={CF.blue} />
                <span style={{ fontSize: 11, fontWeight: 500, color: CF.inkDim }}>Safety Buffer</span>
              </div>
              <CashFloorGauge pct={38} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
                  <span style={{ color: CF.inkMute }}>5-Day Floor</span>
                  <span style={{ color: CF.inkDim, fontWeight: 600 }}>$4,900</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
                  <span style={{ color: CF.inkMute }}>Current Balance</span>
                  <span style={{ color: CF.red, fontWeight: 700 }}>$6,665</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Integrations Status ─────────────────── */}
          <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 12, padding: '12px 20px', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: CF.inkMute, letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: 4 }}>Integrations Status</span>
            {integrations.map(ig => (
              <div key={ig.name} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: CF.green, boxShadow: `0 0 6px ${CF.green}` }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: CF.inkDim }}>{ig.name}</span>
                <span style={{ fontSize: 10, color: CF.green, fontWeight: 600 }}>✓ Connected</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── CashIQ Floating Panel ─────────────────────── */}
      {aiCopilot && (
        <>
          {/* Backdrop — click to close */}
          <div onClick={() => setAiCopilot(false)} style={{ position: 'fixed', inset: 0, zIndex: 1190, background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(2px)' }} />
          <div className="cashiq-panel" style={{
            position: 'fixed', top: 12, right: 12, bottom: 12, zIndex: 1210,
            width: 420, height: 'calc(100vh - 24px)',
            background: CF.navy1,
            border: `1px solid ${CF.navyLine}`,
            borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.28), 0 0 0 1px rgba(61,123,255,0.06)',
            display: 'flex', flexDirection: 'column',
            animation: 'cashiq-in 0.22s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            <AICopilotPanel onNavigate={onNavigate} onClose={() => setAiCopilot(false)} />
          </div>
        </>
      )}

      {/* ── CashIQ Launcher ──────────────────────────────── */}
      <div
        onClick={() => setAiCopilot(p => !p)}
        style={{
          position: 'fixed',
          bottom: isMobile ? 80 : 24,
          right: isMobile ? 16 : 24,
          zIndex: 100,
          display: aiCopilot ? 'none' : 'flex', alignItems: 'center',
          gap: isMobile ? 8 : 11,
          padding: isMobile ? '8px 12px' : '9px 16px 9px 9px',
          height: isMobile ? 40 : 'auto',
          borderRadius: 20,
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--cashiq-fab-shadow)',
          cursor: 'pointer',
          transition: 'all 0.18s ease',
          userSelect: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--cashiq-fab-shadow-hover)'; e.currentTarget.style.borderColor = 'rgba(61,123,255,0.35)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--cashiq-fab-shadow)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
      >
        {/* Avatar */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src="assets/favicon_cashflow.png"
            alt="CashIQ"
            style={{
              width: isMobile ? 24 : 40,
              height: isMobile ? 24 : 40,
              borderRadius: isMobile ? 7 : 13,
              objectFit: 'cover', display: 'block',
              border: '2px solid rgba(61,123,255,0.3)',
              boxShadow: isMobile ? 'none' : '0 4px 14px rgba(61,123,255,0.3)',
            }}
          />
          <span style={{
            position: 'absolute', top: -4, right: -4,
            minWidth: 16, height: 16, borderRadius: 999,
            background: '#EF4444',
            border: '2px solid var(--color-bg-card)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, fontWeight: 800, color: '#fff',
            animation: 'cashiq-pulse 2.4s ease-in-out infinite',
          }}>3</span>
        </div>

        {/* Text */}
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: isMobile ? 0 : 1 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>CashIQ</span>
            {!isMobile && (
              <span style={{
                fontSize: 9, fontWeight: 700, color: '#3D7BFF',
                background: 'rgba(61,123,255,0.08)', border: '1px solid rgba(61,123,255,0.2)',
                padding: '1px 6px', borderRadius: 999, letterSpacing: '0.04em',
              }}>AI CFO</span>
            )}
          </div>
          {!isMobile && (
            <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', lineHeight: 1.3 }}>
              ⚠ 3 alerts · cash at $6,665
            </div>
          )}
        </div>

        {/* Arrow — desktop only */}
        {!isMobile && (
          <div style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 8, background: 'var(--color-bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
            <Icon name={aiCopilot ? 'chevronDown' : 'chevronRight'} size={11} color="var(--color-text-secondary)" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes cashiq-in {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(5px); }
        }
        @keyframes cashiq-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(220,38,38,0); }
        }
      `}</style>

      {/* ── Why AI modal ──────────────────────── */}
      {showWhyAI && (
        <div onClick={() => setShowWhyAI(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 540, maxHeight: '88vh', overflowY: 'auto', background: CF.navy1, border: `1px solid ${CF.cardBorder}`, borderRadius: 16, padding: '24px 26px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(111,232,255,0.15)', border: '1px solid rgba(111,232,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="sparkle" size={16} color={CF.cyan} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: CF.ink }}>Why AI says: do not hire</div>
                  <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 1 }}>Reasoning · 34% confidence · updated 2 min ago</div>
                </div>
              </div>
              <button onClick={() => setShowWhyAI(false)} style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: `1px solid ${CF.navyLine}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="x" size={14} color={CF.inkMute} />
              </button>
            </div>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 22, lineHeight: 1.3, color: CF.ink, marginBottom: 18, padding: '14px 16px', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 12, background: 'linear-gradient(135deg,rgba(220,38,38,0.06),transparent)' }}>
              <em style={{ color: CF.red }}>No</em> — do not hire. <em style={{ color: CF.red }}>9-day runway</em>, $1,887 safe-to-spend.
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: CF.inkMute, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>Reasoning chain</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
              {[
                { num: '1', color: CF.red,   title: 'Safe-to-Spend: $1,887',              body: 'After tax reserve ($688), payroll nut ($2,800), committed materials ($1,290). Below 5-day floor of $4,900.' },
                { num: '2', color: CF.red,   title: '9-day cash runway',                   body: '$68,581 monthly burn rate. Current position cannot support new hire at any level.' },
                { num: '3', color: CF.amber, title: 'Jobs closing: $26,200 this week',     body: 'Hoosier Homes $8,400 Apr 28 + INHP Arnolda $12,600 May 1. Moderate AR pipeline.' },
                { num: '4', color: CF.amber, title: 'Watch Hoosier Homes',                 body: 'Running at 8% margin — 42pts below 50% target. Material costs from Floor & Decor eroding profit.' },
              ].map(step => (
                <div key={step.num} style={{ display: 'flex', gap: 12, padding: '10px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: `1px solid ${CF.navyLine}` }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', border: `1px solid ${step.color}60`, background: `${step.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 700, color: step.color, fontFamily: "'JetBrains Mono',monospace" }}>{step.num}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: CF.ink, marginBottom: 3 }}>{step.title}</div>
                    <div style={{ fontSize: 11, color: CF.inkDim, lineHeight: 1.5 }}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: CF.inkMute, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>Data sources</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {['MSC Bank feed', 'Plaid connected', 'Gusto payroll', 'Q1 2026 actuals', '91 days history'].map(s => (
                <span key={s} style={{ fontSize: 10, padding: '4px 10px', borderRadius: 999, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.22)', color: CF.blue, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button onClick={() => setShowWhyAI(false)} style={{ padding: '9px 16px', borderRadius: 9, background: 'transparent', border: `1px solid ${CF.navyLine}`, color: CF.inkDim, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: "'Manrope',sans-serif" }}>Dismiss</button>
              <button style={{ padding: '9px 16px', borderRadius: 9, background: CF.blue, border: 'none', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter','Manrope',sans-serif" }}>Collect invoices →</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

Object.assign(window, { DashboardScreen });
