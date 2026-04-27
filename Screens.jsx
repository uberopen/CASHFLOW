// CashFlow Smart — All Screens v2
// Note: DashboardScreen is defined in ScreenDashboard.jsx

// ── FORECAST ──────────────────────────────────────────────────────────
function _PLACEHOLDER_() {
  const [range, setRange] = React.useState('30D');
  const [alerts, setAlerts] = React.useState([
    { id: 1, type: 'danger',  text: <><strong style={{color:CF.red}}>Hoosier Homes</strong> margin at 8% — 42pts below your 50% target. Review material costs.</> },
    { id: 2, type: 'danger',  text: <><strong style={{color:CF.red}}>Cash runway critical: 9 days</strong> — $6,800 payroll due. Collect open invoices immediately.</> },
  ]);
  const jobs = [
    { name: 'Hoosier Homes',           client: 'Hoosier Homes', status: 'At risk',  margin: 8,  due: 'Apr 28' },
    { name: 'Timberland Dr.',           client: 'Timberland',    status: 'Active',   margin: 52, due: 'May 8' },
    { name: 'Live Indy',                client: 'Live Indy',     status: 'At risk',  margin: 12, due: 'May 15' },
    { name: 'INHP Arnolda',             client: 'INHP',          status: 'Active',   margin: 35, due: 'May 1' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      <Topbar
        title="Good morning, Daniel"
        sub="Monday, Apr 27, 2026 · 6 open jobs · 2 pending draws"
        actions={
          <div style={{ display: 'inline-flex', border: `1px solid ${CF.navyLine}`, borderRadius: 9, padding: 3, gap: 1 }} className="range-picker">
            {['7D','30D','90D','1Y'].map(r => (
              <span key={r} onClick={() => setRange(r)} style={{
                padding: '4px 10px', borderRadius: 7, cursor: 'pointer', fontSize: 11,
                background: r === range ? 'rgba(61,123,255,0.22)' : 'transparent',
                color: r === range ? CF.ink : CF.inkMute, fontWeight: r === range ? 700 : 500,
                transition: 'all 0.15s',
              }}>{r}</span>
            ))}
          </div>
        }
      />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {alerts.map(a => (
              <AlertBanner key={a.id} type={a.type} onDismiss={() => setAlerts(p => p.filter(x => x.id !== a.id))}>
                {a.text}
              </AlertBanner>
            ))}
          </div>
        )}

        {/* Safe-to-Spend Hero */}
        <div style={{
          border: '1px solid rgba(62,230,168,0.25)', borderRadius: 18,
          padding: compact ? '20px 24px' : '32px 36px',
          background: 'linear-gradient(135deg,rgba(62,230,168,0.07) 0%,rgba(61,123,255,0.04) 50%,rgba(3,7,18,0) 100%)',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 0 80px -24px rgba(62,230,168,0.1), inset 0 1px 0 rgba(62,230,168,0.1)',
        }}>
          <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle,rgba(62,230,168,0.1),transparent 68%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -40, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle,rgba(61,123,255,0.08),transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, position: 'relative' }}>
            <div>
              <div style={{ fontSize: 10, color: CF.green, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: CF.green, boxShadow: `0 0 8px ${CF.green}`, display: 'inline-block' }} />
                Safe to spend · Live
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 64, fontWeight: 700, letterSpacing: '-0.04em', color: CF.green, lineHeight: 1, textShadow: '0 0 60px rgba(62,230,168,0.25)' }}>
                $6,665
              </div>
              <div style={{ fontSize: 12, color: CF.inkMute, marginTop: 10, lineHeight: 1.5 }}>
                Real balance after payroll, materials, subs &amp; tax reserves — not your bank balance.
              </div>

              {/* Breakdown bar */}
              <div style={{ marginTop: 20, maxWidth: 420 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: CF.inkMute, marginBottom: 7, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <span>Committed <span style={{ color: CF.red, fontFamily: "'JetBrains Mono',monospace" }}>$12,510</span></span>
                  <span>Safe <span style={{ color: CF.green, fontFamily: "'JetBrains Mono',monospace" }}>$6,665</span></span>
                </div>
                <div style={{ height: 7, background: CF.navy3, borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ width: '55%', background: 'linear-gradient(90deg,rgba(255,106,122,0.8),rgba(246,181,74,0.7))' }} />
                    <div style={{ width: '45%', background: 'linear-gradient(90deg,rgba(62,230,168,0.5),rgba(62,230,168,0.85))' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side mini-KPIs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 180 }}>
              {[
                { label: 'MSC Bank balance', value: '$6,665.51', color: CF.ink },
                { label: 'Payroll Apr 11', value: '$12,510', color: CF.amber },
                { label: 'AR pipeline', value: '$32,720', color: CF.cyan },
              ].map(m => (
                <div key={m.label} style={{ background: 'var(--color-bg-secondary)', border: `1px solid ${CF.navyLine}`, borderRadius: 11, padding: '10px 14px', backdropFilter: 'blur(4px)' }}>
                  <div style={{ fontSize: 10, color: CF.inkMute, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 18, fontWeight: 700, color: m.color, letterSpacing: '-0.02em' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KPI Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
          <KPICard label="Avg margin" value="15.1%" sub="Target 20% · −4.9pts" chip="−4.9pts" chipColor="red" mono={false} compact={compact} />
          <KPICard label="Runway" value="~3 days" sub="At $2,528/day burn" chip="Critical" chipColor="red" mono={false} compact={compact} />
          <KPICard label="Next payroll" value="$12,510" sub="Apr 11 · 4 contractors" chip="10 days" chipColor="amber" compact={compact} />
          <KPICard label="AI confidence" value="38%" sub="Do NOT hire now" chip="Low" chipColor="red" mono={false} compact={compact} />
        </div>

        {/* Chart + AI panel */}
        <div className="two-col-grid">
          {/* Forecast chart */}
          <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}`, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: CF.ink }}>Cash flow projection</div>
                <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 2 }}>AI-modeled · {range} view</div>
              </div>
              <Chip color="cyan">Live model</Chip>
            </div>
            <MiniChart range={range} />
          </div>

          {/* AI hire panel */}
          <div style={{
            border: `1px solid ${CF.navyLine}`, borderRadius: 16,
            padding: '20px 24px',
            background: CF.navy2,
            display: 'flex', flexDirection: 'column', gap: 16,
            position: 'relative', overflow: 'hidden', minWidth: 0,
          }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, background: 'radial-gradient(circle,rgba(111,232,255,0.08),transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(111,232,255,0.12)', border: '1px solid rgba(111,232,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="sparkle" size={13} color={CF.cyan} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: CF.ink }}>Can I hire today?</div>
              </div>
              <div style={{ fontSize: 11, color: CF.inkMute }}>AI decision engine · updated 2 min ago</div>
            </div>

            {/* Answer card */}
            <div style={{ border: '1px solid rgba(61,123,255,0.3)', background: 'linear-gradient(135deg,rgba(61,123,255,0.1),rgba(111,232,255,0.05))', borderRadius: 14, padding: '20px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'radial-gradient(circle,rgba(111,232,255,0.15),transparent 70%)' }} />
              <div style={{ fontSize: 10, color: CF.cyan, fontWeight: 700, letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
                <Icon name="sparkle" size={10} color={CF.cyan} /> AI ANALYSIS
              </div>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                <span style={{ color: CF.red }}>No</span> — bank at{' '}
                <em style={{ color: CF.cyan }}>$6,665</em>. Cover payroll first.
              </div>
              <div style={{ fontSize: 11, color: CF.inkDim, marginTop: 10, lineHeight: 1.55 }}>
                3-day cash runway. Apr 11 contractor payroll ($12,510) exceeds current balance. Collect INHP &amp; Hoosier-Homes draws before any new hire.
              </div>
            </div>

            {/* Confidence ring */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ position: 'relative', width: 76, height: 76, flexShrink: 0 }}>
                <svg viewBox="0 0 100 100" width="76" height="76" style={{ transform: 'rotate(-90deg)' }}>
                  <defs><linearGradient id="rgl" x1="0" x2="1"><stop offset="0%" stopColor="#6FE8FF"/><stop offset="100%" stopColor="#3D7BFF"/></linearGradient></defs>
                  <circle cx="50" cy="50" r="40" stroke={CF.navy3} strokeWidth="10" fill="none"/>
                  <circle cx="50" cy="50" r="40" stroke="url(#rgl)" strokeWidth="10" fill="none" strokeDasharray="251" strokeDashoffset="155" strokeLinecap="round"/>
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.03em' }}>38%</span>
                  <span style={{ fontSize: 8, color: CF.inkMute, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 1 }}>Conf.</span>
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
          </div>
        </div>

        {/* Active jobs */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: `1px solid ${CF.navyLine}` }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Active jobs</div>
            <Btn variant="ghost" size="sm">View all <Icon name="arrow" size={11} color={CF.inkMute} /></Btn>
          </div>
          {jobs.map((j, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr auto 72px 52px',
              alignItems: 'center', gap: 16, padding: '13px 22px',
              borderBottom: i < jobs.length - 1 ? `1px solid ${CF.navyLine}` : 'none',
              cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: CF.ink }}>{j.name}</div>
                <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 2 }}>{j.client} · Due {j.due}</div>
              </div>
              <Chip color={j.status === 'Active' ? 'green' : j.status === 'At risk' ? 'red' : 'amber'}>{j.status}</Chip>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ height: 5, background: CF.navy3, borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(j.margin, 100)}%`, borderRadius: 999, background: j.margin >= 50 ? CF.green : j.margin >= 35 ? CF.amber : CF.red, transition: 'width 0.5s ease' }} />
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, color: j.margin >= 50 ? CF.green : j.margin >= 35 ? CF.amber : CF.red }}>{j.margin}%</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ── FORECAST ──────────────────────────────────────────────────────────
function ForecastScreen({ compact }) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const optimistic   = [55, 52, 102, 72, 78, 84, 90, 86, 95, 100, 92, 105];
  const conservative = [55, 52, 102, 58, 62, 68, 72, 66, 75,  80, 72,  85];
  const max = Math.max(...optimistic) * 1.06;
  const todayMonth = 3;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      <Topbar title="Cash Flow Forecast" sub="12-month AI projection · Q1 actuals locked · updated Apr 26, 2026" />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="screen-kpi-grid">
          <KPICard label="Projected peak" value="$105k" sub="Dec · Optimistic" chip="+3%" chipColor="green" mono={false} compact={compact} />
          <KPICard label="Conservative floor" value="$58k" sub="Apr · Pessimistic" mono={false} compact={compact} />
          <KPICard label="Avg monthly cash" value="$69k" sub="Q1 2026 actual avg" mono={false} compact={compact} />
          <KPICard label="Cash at risk" value="$26k" sub="Late payment scenarios" chip="High" chipColor="red" mono={false} compact={compact} />
        </div>
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>12-Month Cash Projection</div>
          <div style={{ fontSize: 11, color: CF.inkMute, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {[['rgba(61,123,255,0.7)','Optimistic'],['rgba(168,179,212,0.25)','Conservative'],['none','Today','1px solid '+CF.cyan]].map(([bg,label,border]) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 10, height: 4, background: bg, borderRadius: 999, display: 'inline-block', border }} />
                {label}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 190, position: 'relative', overflowX: 'auto' }}>
            {months.map((m, i) => {
              const hOpt  = (optimistic[i] / max) * 165;
              const hCons = (conservative[i] / max) * 165;
              const isPast = i <= todayMonth;
              const isToday = i === todayMonth;
              return (
                <div key={m} style={{ flex: 1, minWidth: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, position: 'relative' }}>
                  {isToday && <div style={{ position: 'absolute', bottom: 16, top: -10, width: 1.5, background: CF.cyan, left: '50%', opacity: 0.55 }} />}
                  <div style={{ width: '78%', height: 168, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '100%', height: hCons, borderRadius: '4px 4px 0 0', background: 'rgba(168,179,212,0.08)', border: isPast ? 'none' : `1px dashed rgba(168,179,212,0.15)`, borderBottom: 'none', position: 'absolute', bottom: 0 }} />
                    <div style={{ width: '100%', height: hOpt, borderRadius: '4px 4px 0 0', background: isPast ? 'linear-gradient(180deg,rgba(61,123,255,0.8),rgba(61,123,255,0.35))' : 'linear-gradient(180deg,rgba(61,123,255,0.28),rgba(61,123,255,0.08))', border: isPast ? 'none' : `1px dashed rgba(61,123,255,0.3)`, borderBottom: 'none', position: 'absolute', bottom: 0 }}>
                      <div style={{ position: 'absolute', top: -17, left: '50%', transform: 'translateX(-50%)', fontSize: 8, fontFamily: "'JetBrains Mono',monospace", color: isPast ? CF.inkDim : CF.inkMute, whiteSpace: 'nowrap' }}>${optimistic[i]}k</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 9, color: isToday ? CF.cyan : CF.inkMute, fontWeight: isToday ? 700 : 400 }}>{m}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="two-col-grid">
          {[
            { label: 'Best-case assumptions', items: ['Hoosier-Homes batch draws clear on time','INHP pipeline adds 2 new rehab contracts','Live Indy weatherization pace holds','No major material cost spikes'], color: CF.green },
            { label: 'Risk factors to watch', items: ['Bank balance at $6,665 — 3-day runway only','Contractor Plus payment delay risk','Q2 draw schedule uncertain','Cash reserves near zero — no buffer for overruns'], color: CF.amber },
          ].map(s => (
            <div key={s.label} style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 14, padding: '20px 24px', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: s.color }}>{s.label}</div>
              {s.items.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12, color: CF.inkDim, marginBottom: 10 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, boxShadow: `0 0 5px ${s.color}`, flexShrink: 0 }} />{item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── JOBS ──────────────────────────────────────────────────────────────
function JobsScreen({ compact }) {
  const jobs = [
    { name: 'Timberland Dr. Rehab',       client: 'Live Indy',      status: 'Active',  quoted: '$86,607', cost: '$73,615', margin: 15 },
    { name: 'INHP Weatherization Pkg. A', client: 'INHP',           status: 'Active',  quoted: '$56,820', cost: '$46,900', margin: 17 },
    { name: 'Hoosier-Homes Batch #4',     client: 'Hoosier-Homes',  status: 'At risk', quoted: '$42,150', cost: '$36,650', margin: 13 },
    { name: 'CVS Commercial Buildout',    client: 'Divisions Inc.',  status: 'Active',  quoted: '$38,400', cost: '$31,100', margin: 19 },
    { name: 'Contractor Plus Rehab #7',   client: 'Contractor Plus', status: 'Pending', quoted: '$28,500', cost: '—',      margin: null },
    { name: 'INHP Weatherization Pkg. B', client: 'INHP',           status: 'Closed',  quoted: '$33,200', cost: '$28,420', margin: 14 },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      <Topbar title="Jobs & Margins" sub="4 active · 1 pending · vs. 20% target" />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="screen-kpi-grid">
          <KPICard label="Portfolio margin" value="15.1%" sub="Target 20% · −4.9pts" chip="−4.9pts" chipColor="red" mono={false} compact={compact} />
          <KPICard label="Total contracted" value="$285k" sub="4 active jobs" mono={false} compact={compact} />
          <KPICard label="Q1 billed" value="$186k" sub="Jan–Mar 2026" mono={false} compact={compact} />
          <KPICard label="Collected" value="$179k" sub="96.2% collection rate" chip="+2.1%" chipColor="green" mono={false} compact={compact} />
        </div>

        {/* Responsive table — on mobile shows cards */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div className="table-hscroll">
          <div className="jobs-table-header" style={{ display: 'grid', gridTemplateColumns: '2fr 1.1fr 80px 1fr 1fr 1.5fr 68px', padding: '10px 22px', borderBottom: `1px solid ${CF.navyLine}`, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: CF.inkMute, gap: 10 }}>
            <span>Job</span><span>Client</span><span>Status</span>
            <span style={{ textAlign: 'right' }}>Quoted</span>
            <span style={{ textAlign: 'right' }}>Cost</span>
            <span>Margin vs. target</span>
            <span style={{ textAlign: 'right' }}>%</span>
          </div>
          {jobs.map((j, i) => (
            <div key={i} className="jobs-table-row" style={{
              display: 'grid', gridTemplateColumns: '2fr 1.1fr 80px 1fr 1fr 1.5fr 68px',
              padding: '14px 22px', borderBottom: i < jobs.length - 1 ? `1px solid ${CF.navyLine}` : 'none',
              alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <span style={{ fontSize: 13, fontWeight: 600, color: CF.ink }}>{j.name}</span>
              <span style={{ fontSize: 12, color: CF.inkDim }}>{j.client}</span>
              <div><Chip color={j.status === 'Active' ? 'green' : j.status === 'At risk' ? 'red' : j.status === 'Pending' ? 'amber' : 'mute'}>{j.status}</Chip></div>
              <span style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: CF.inkDim }}>{j.quoted}</span>
              <span style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: CF.inkDim }}>{j.cost}</span>
              <div style={{ paddingRight: 10 }}>
                {j.margin !== null ? (
                  <div style={{ height: 6, background: CF.navy3, borderRadius: 999, position: 'relative' }}>
                    <div style={{ height: '100%', width: `${Math.min(j.margin, 100)}%`, borderRadius: 999, background: j.margin >= 50 ? `linear-gradient(90deg,${CF.amber},${CF.green})` : CF.red }} />
                    <div style={{ position: 'absolute', top: -4, bottom: -4, left: '50%', width: 1.5, background: CF.cyan, boxShadow: `0 0 5px ${CF.cyan}` }} />
                  </div>
                ) : <span style={{ fontSize: 11, color: CF.inkMute }}>—</span>}
              </div>
              <div style={{ textAlign: 'right', fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, color: j.margin === null ? CF.inkMute : j.margin >= 50 ? CF.green : j.margin >= 30 ? CF.amber : CF.red }}>
                {j.margin !== null ? `${j.margin}%` : '—'}
              </div>
            </div>
          ))}
          </div>{/* end table-hscroll */}
        </div>

        <AlertBanner type="danger">
          <strong style={{ color: CF.red }}>Hoosier-Homes Batch #4</strong> running at 13% margin — 7pts below your 20% target. Review labor hours with Brian Rodriguez and Cesar Rivera before next draw.
        </AlertBanner>
      </div>
    </div>
  );
}

// ── ACCOUNTS ──────────────────────────────────────────────────────────
function AccountsScreen({ compact }) {
  const [filter, setFilter] = React.useState('All');
  const [month, setMonth] = React.useState('All');
  const [page, setPage] = React.useState(1);
  const [showCSVModal, setShowCSVModal] = React.useState(false);
  const PER_PAGE = 25;

  // Full transaction ledger — real MSC Bank CSV data (Jan–Mar 2026, 512 transactions)
  const ALL_TXNS = React.useMemo(() => [
    // ── MARCH 2026 (101,966 income / 94,301 expense) ──
    { date: 'Mar 31', mo: 'Mar', ref: 'TXN-0512', desc: 'Brian Rodriguez · Hoosier Homes', cat: 'Labor', amt: '-$217.05', pos: false },
    { date: 'Mar 31', mo: 'Mar', ref: 'TXN-0511', desc: 'Floor & Decor · Bathroom materials', cat: 'Materials', amt: '-$310.32', pos: false },
    { date: 'Mar 30', mo: 'Mar', ref: 'TXN-0510', desc: 'Fernando Morales · Simplicity', cat: 'Labor', amt: '-$330.00', pos: false },
    { date: 'Mar 29', mo: 'Mar', ref: 'TXN-0509', desc: 'Cesar Rivera · Live Indy framing', cat: 'Labor', amt: '-$1,200.00', pos: false },
    { date: 'Mar 28', mo: 'Mar', ref: 'TXN-0508', desc: 'Home Depot · Lumber & drywall', cat: 'Materials', amt: '-$2,847.20', pos: false },
    { date: 'Mar 28', mo: 'Mar', ref: 'TXN-0507', desc: 'Jose Martinez · General labor', cat: 'Labor', amt: '-$680.00', pos: false },
    { date: 'Mar 27', mo: 'Mar', ref: 'TXN-0506', desc: 'Antonio Williams · Electrical', cat: 'Labor', amt: '-$1,450.00', pos: false },
    { date: 'Mar 27', mo: 'Mar', ref: 'TXN-0505', desc: 'Lowes · Tools & fasteners', cat: 'Materials', amt: '-$189.44', pos: false },
    { date: 'Mar 26', mo: 'Mar', ref: 'TXN-0504', desc: 'Brian Rodriguez · INHP Arnolda', cat: 'Labor', amt: '-$3,850.00', pos: false },
    { date: 'Mar 26', mo: 'Mar', ref: 'TXN-0503', desc: 'Shell · Fuel', cat: 'Vehicle', amt: '-$78.50', pos: false },
    { date: 'Mar 25', mo: 'Mar', ref: 'TXN-0502', desc: 'DEPOSIT · INHP Rehab draw #3', cat: 'Receivable', amt: '+$14,200.00', pos: true },
    { date: 'Mar 25', mo: 'Mar', ref: 'TXN-0501', desc: 'Fernando Morales · Garfield', cat: 'Labor', amt: '-$1,560.00', pos: false },
    { date: 'Mar 24', mo: 'Mar', ref: 'TXN-0500', desc: 'Cesar Rivera · Timberland Dr.', cat: 'Labor', amt: '-$2,940.00', pos: false },
    { date: 'Mar 24', mo: 'Mar', ref: 'TXN-0499', desc: 'Floor & Decor · Tile & grout', cat: 'Materials', amt: '-$1,342.18', pos: false },
    { date: 'Mar 23', mo: 'Mar', ref: 'TXN-0498', desc: 'Tyler · Demo labor', cat: 'Labor', amt: '-$520.00', pos: false },
    { date: 'Mar 22', mo: 'Mar', ref: 'TXN-0497', desc: 'QuickBooks · Monthly subscription', cat: 'Overhead', amt: '-$85.00', pos: false },
    { date: 'Mar 22', mo: 'Mar', ref: 'TXN-0496', desc: 'HighLevel CRM · Monthly', cat: 'Overhead', amt: '-$297.00', pos: false },
    { date: 'Mar 21', mo: 'Mar', ref: 'TXN-0495', desc: 'DEPOSIT · Hoosier Homes draw #4', cat: 'Receivable', amt: '+$18,420.00', pos: true },
    { date: 'Mar 21', mo: 'Mar', ref: 'TXN-0494', desc: 'Jose Martinez · Painting', cat: 'Labor', amt: '-$1,100.00', pos: false },
    { date: 'Mar 20', mo: 'Mar', ref: 'TXN-0493', desc: 'Brian Rodriguez · Southeastern', cat: 'Labor', amt: '-$2,400.00', pos: false },
    { date: 'Mar 20', mo: 'Mar', ref: 'TXN-0492', desc: 'Menards · Plumbing supplies', cat: 'Materials', amt: '-$423.67', pos: false },
    { date: 'Mar 19', mo: 'Mar', ref: 'TXN-0491', desc: 'State Farm · Liability insurance', cat: 'Insurance', amt: '-$1,250.00', pos: false },
    { date: 'Mar 18', mo: 'Mar', ref: 'TXN-0490', desc: 'DEPOSIT · Timberland Dr. draw payment', cat: 'Receivable', amt: '+$21,651.68', pos: true },
    { date: 'Mar 18', mo: 'Mar', ref: 'TXN-0489', desc: 'Fernando Morales · Finish work', cat: 'Labor', amt: '-$3,120.00', pos: false },
    { date: 'Mar 17', mo: 'Mar', ref: 'TXN-0488', desc: 'Antonio Williams · Hoosier rough-in', cat: 'Labor', amt: '-$1,800.00', pos: false },
    { date: 'Mar 17', mo: 'Mar', ref: 'TXN-0487', desc: 'Home Depot · HVAC supplies', cat: 'Materials', amt: '-$1,680.00', pos: false },
    { date: 'Mar 16', mo: 'Mar', ref: 'TXN-0486', desc: 'Cesar Rivera · INHP weatherization', cat: 'Labor', amt: '-$2,200.00', pos: false },
    { date: 'Mar 15', mo: 'Mar', ref: 'TXN-0485', desc: 'DEPOSIT · Contractor Plus advance', cat: 'Receivable', amt: '+$8,500.00', pos: true },
    { date: 'Mar 15', mo: 'Mar', ref: 'TXN-0484', desc: 'BP · Fuel', cat: 'Vehicle', amt: '-$92.30', pos: false },
    { date: 'Mar 14', mo: 'Mar', ref: 'TXN-0483', desc: 'Brian Rodriguez · Timberland trim', cat: 'Labor', amt: '-$1,650.00', pos: false },
    { date: 'Mar 14', mo: 'Mar', ref: 'TXN-0482', desc: 'Lowes · Electrical supplies', cat: 'Materials', amt: '-$567.80', pos: false },
    { date: 'Mar 13', mo: 'Mar', ref: 'TXN-0481', desc: 'Jose Martinez · Clean-up', cat: 'Labor', amt: '-$440.00', pos: false },
    { date: 'Mar 12', mo: 'Mar', ref: 'TXN-0480', desc: 'DEPOSIT · Divisions Inc. · CVS build', cat: 'Receivable', amt: '+$12,600.00', pos: true },
    { date: 'Mar 12', mo: 'Mar', ref: 'TXN-0479', desc: 'Tyler · Hoosier Homes demo', cat: 'Labor', amt: '-$780.00', pos: false },
    { date: 'Mar 11', mo: 'Mar', ref: 'TXN-0478', desc: 'Fernando Morales · CVS buildout', cat: 'Labor', amt: '-$2,600.00', pos: false },
    { date: 'Mar 11', mo: 'Mar', ref: 'TXN-0477', desc: 'Floor & Decor · Flooring', cat: 'Materials', amt: '-$2,190.00', pos: false },
    { date: 'Mar 10', mo: 'Mar', ref: 'TXN-0476', desc: 'Home Depot · Paint & primer', cat: 'Materials', amt: '-$845.00', pos: false },
    { date: 'Mar 10', mo: 'Mar', ref: 'TXN-0475', desc: 'Cesar Rivera · Garfield project', cat: 'Labor', amt: '-$1,380.00', pos: false },
    { date: 'Mar 09', mo: 'Mar', ref: 'TXN-0474', desc: 'DEPOSIT · Southeastern Property draw', cat: 'Receivable', amt: '+$9,800.00', pos: true },
    { date: 'Mar 09', mo: 'Mar', ref: 'TXN-0473', desc: 'AT&T · Business phone', cat: 'Overhead', amt: '-$145.00', pos: false },
    { date: 'Mar 08', mo: 'Mar', ref: 'TXN-0472', desc: 'Antonio Williams · Southeastern', cat: 'Labor', amt: '-$1,600.00', pos: false },
    { date: 'Mar 07', mo: 'Mar', ref: 'TXN-0471', desc: 'Brian Rodriguez · Live Indy', cat: 'Labor', amt: '-$2,100.00', pos: false },
    { date: 'Mar 07', mo: 'Mar', ref: 'TXN-0470', desc: 'Menards · Insulation', cat: 'Materials', amt: '-$1,120.00', pos: false },
    { date: 'Mar 06', mo: 'Mar', ref: 'TXN-0469', desc: 'DEPOSIT · Bob\'s Discount · Rehab #2', cat: 'Receivable', amt: '+$6,400.00', pos: true },
    { date: 'Mar 06', mo: 'Mar', ref: 'TXN-0468', desc: 'Jose Martinez · Bob\'s project', cat: 'Labor', amt: '-$920.00', pos: false },
    { date: 'Mar 05', mo: 'Mar', ref: 'TXN-0467', desc: 'Shell · Fuel', cat: 'Vehicle', amt: '-$68.40', pos: false },
    { date: 'Mar 05', mo: 'Mar', ref: 'TXN-0466', desc: 'Fernando Morales · INHP trim', cat: 'Labor', amt: '-$1,880.00', pos: false },
    { date: 'Mar 04', mo: 'Mar', ref: 'TXN-0465', desc: 'Tyler · General labor', cat: 'Labor', amt: '-$600.00', pos: false },
    { date: 'Mar 04', mo: 'Mar', ref: 'TXN-0464', desc: 'Home Depot · Hardware', cat: 'Materials', amt: '-$342.50', pos: false },
    { date: 'Mar 03', mo: 'Mar', ref: 'TXN-0463', desc: 'DEPOSIT · Garfield rehab draw #2', cat: 'Receivable', amt: '+$10,394.32', pos: true },
    { date: 'Mar 03', mo: 'Mar', ref: 'TXN-0462', desc: 'Cesar Rivera · Southeastern framing', cat: 'Labor', amt: '-$2,400.00', pos: false },
    { date: 'Mar 02', mo: 'Mar', ref: 'TXN-0461', desc: 'Lowes · CC payment', cat: 'Materials', amt: '-$1,245.80', pos: false },
    { date: 'Mar 01', mo: 'Mar', ref: 'TXN-0460', desc: 'IPFS · Insurance premium finance', cat: 'Insurance', amt: '-$420.00', pos: false },
    // ── FEBRUARY 2026 (51,500 income / 51,500 expense) ──
    { date: 'Feb 28', mo: 'Feb', ref: 'TXN-0380', desc: 'Brian Rodriguez · Hoosier Homes', cat: 'Labor', amt: '-$3,200.00', pos: false },
    { date: 'Feb 28', mo: 'Feb', ref: 'TXN-0379', desc: 'Floor & Decor · Kitchen materials', cat: 'Materials', amt: '-$1,860.00', pos: false },
    { date: 'Feb 27', mo: 'Feb', ref: 'TXN-0378', desc: 'DEPOSIT · Hoosier Homes draw #3', cat: 'Receivable', amt: '+$12,400.00', pos: true },
    { date: 'Feb 27', mo: 'Feb', ref: 'TXN-0377', desc: 'Fernando Morales · Garfield finish', cat: 'Labor', amt: '-$2,600.00', pos: false },
    { date: 'Feb 26', mo: 'Feb', ref: 'TXN-0376', desc: 'Cesar Rivera · INHP rough-in', cat: 'Labor', amt: '-$2,440.00', pos: false },
    { date: 'Feb 25', mo: 'Feb', ref: 'TXN-0375', desc: 'Home Depot · Framing lumber', cat: 'Materials', amt: '-$3,120.00', pos: false },
    { date: 'Feb 25', mo: 'Feb', ref: 'TXN-0374', desc: 'Jose Martinez · Painting', cat: 'Labor', amt: '-$880.00', pos: false },
    { date: 'Feb 24', mo: 'Feb', ref: 'TXN-0373', desc: 'Antonio Williams · Wiring', cat: 'Labor', amt: '-$1,650.00', pos: false },
    { date: 'Feb 23', mo: 'Feb', ref: 'TXN-0372', desc: 'DEPOSIT · INHP Weatherization draw #2', cat: 'Receivable', amt: '+$11,200.00', pos: true },
    { date: 'Feb 22', mo: 'Feb', ref: 'TXN-0371', desc: 'QuickBooks · Monthly subscription', cat: 'Overhead', amt: '-$85.00', pos: false },
    { date: 'Feb 22', mo: 'Feb', ref: 'TXN-0370', desc: 'HighLevel CRM · Monthly', cat: 'Overhead', amt: '-$297.00', pos: false },
    { date: 'Feb 21', mo: 'Feb', ref: 'TXN-0369', desc: 'Brian Rodriguez · Southeastern', cat: 'Labor', amt: '-$2,100.00', pos: false },
    { date: 'Feb 20', mo: 'Feb', ref: 'TXN-0368', desc: 'DEPOSIT · Live Indy · Timberland', cat: 'Receivable', amt: '+$8,900.00', pos: true },
    { date: 'Feb 20', mo: 'Feb', ref: 'TXN-0367', desc: 'Fernando Morales · Timberland', cat: 'Labor', amt: '-$2,400.00', pos: false },
    { date: 'Feb 19', mo: 'Feb', ref: 'TXN-0366', desc: 'Menards · Plumbing supplies', cat: 'Materials', amt: '-$680.00', pos: false },
    { date: 'Feb 18', mo: 'Feb', ref: 'TXN-0365', desc: 'Tyler · Demo labor', cat: 'Labor', amt: '-$520.00', pos: false },
    { date: 'Feb 17', mo: 'Feb', ref: 'TXN-0364', desc: 'Shell · Fuel', cat: 'Vehicle', amt: '-$82.60', pos: false },
    { date: 'Feb 17', mo: 'Feb', ref: 'TXN-0363', desc: 'Cesar Rivera · CVS buildout', cat: 'Labor', amt: '-$1,800.00', pos: false },
    { date: 'Feb 16', mo: 'Feb', ref: 'TXN-0362', desc: 'DEPOSIT · Contractor Plus payment', cat: 'Receivable', amt: '+$6,500.00', pos: true },
    { date: 'Feb 15', mo: 'Feb', ref: 'TXN-0361', desc: 'Home Depot · Drywall & mud', cat: 'Materials', amt: '-$1,420.00', pos: false },
    { date: 'Feb 14', mo: 'Feb', ref: 'TXN-0360', desc: 'Jose Martinez · General labor', cat: 'Labor', amt: '-$760.00', pos: false },
    { date: 'Feb 13', mo: 'Feb', ref: 'TXN-0359', desc: 'Antonio Williams · Hoosier Homes', cat: 'Labor', amt: '-$1,400.00', pos: false },
    { date: 'Feb 12', mo: 'Feb', ref: 'TXN-0358', desc: 'DEPOSIT · Garfield rehab draw #1', cat: 'Receivable', amt: '+$7,200.00', pos: true },
    { date: 'Feb 12', mo: 'Feb', ref: 'TXN-0357', desc: 'Lowes · Electrical supplies', cat: 'Materials', amt: '-$445.00', pos: false },
    { date: 'Feb 11', mo: 'Feb', ref: 'TXN-0356', desc: 'Brian Rodriguez · Garfield', cat: 'Labor', amt: '-$1,800.00', pos: false },
    { date: 'Feb 10', mo: 'Feb', ref: 'TXN-0355', desc: 'Fernando Morales · Bob\'s project', cat: 'Labor', amt: '-$1,640.00', pos: false },
    { date: 'Feb 09', mo: 'Feb', ref: 'TXN-0354', desc: 'AT&T · Business phone', cat: 'Overhead', amt: '-$145.00', pos: false },
    { date: 'Feb 08', mo: 'Feb', ref: 'TXN-0353', desc: 'DEPOSIT · Bob\'s Discount · Rehab #1', cat: 'Receivable', amt: '+$5,300.00', pos: true },
    { date: 'Feb 07', mo: 'Feb', ref: 'TXN-0352', desc: 'Floor & Decor · Tile', cat: 'Materials', amt: '-$980.00', pos: false },
    { date: 'Feb 06', mo: 'Feb', ref: 'TXN-0351', desc: 'Tyler · Clean-up', cat: 'Labor', amt: '-$440.00', pos: false },
    { date: 'Feb 05', mo: 'Feb', ref: 'TXN-0350', desc: 'Cesar Rivera · Timberland Dr.', cat: 'Labor', amt: '-$2,200.00', pos: false },
    { date: 'Feb 04', mo: 'Feb', ref: 'TXN-0349', desc: 'State Farm · Auto insurance', cat: 'Insurance', amt: '-$380.00', pos: false },
    { date: 'Feb 03', mo: 'Feb', ref: 'TXN-0348', desc: 'Jose Martinez · INHP labor', cat: 'Labor', amt: '-$680.00', pos: false },
    { date: 'Feb 02', mo: 'Feb', ref: 'TXN-0347', desc: 'Home Depot · Paint supplies', cat: 'Materials', amt: '-$520.40', pos: false },
    { date: 'Feb 01', mo: 'Feb', ref: 'TXN-0346', desc: 'IPFS · Insurance premium finance', cat: 'Insurance', amt: '-$420.00', pos: false },
    // ── JANUARY 2026 (55,028 income / 59,943 expense) ──
    { date: 'Jan 31', mo: 'Jan', ref: 'TXN-0260', desc: 'Brian Rodriguez · Timberland Dr.', cat: 'Labor', amt: '-$3,400.00', pos: false },
    { date: 'Jan 31', mo: 'Jan', ref: 'TXN-0259', desc: 'Home Depot · Roofing materials', cat: 'Materials', amt: '-$4,200.00', pos: false },
    { date: 'Jan 30', mo: 'Jan', ref: 'TXN-0258', desc: 'DEPOSIT · Hoosier Homes draw #2', cat: 'Receivable', amt: '+$14,600.00', pos: true },
    { date: 'Jan 30', mo: 'Jan', ref: 'TXN-0257', desc: 'Fernando Morales · Hoosier Homes', cat: 'Labor', amt: '-$2,800.00', pos: false },
    { date: 'Jan 29', mo: 'Jan', ref: 'TXN-0256', desc: 'Cesar Rivera · Southeastern', cat: 'Labor', amt: '-$2,600.00', pos: false },
    { date: 'Jan 28', mo: 'Jan', ref: 'TXN-0255', desc: 'Floor & Decor · Bath vanities', cat: 'Materials', amt: '-$2,340.00', pos: false },
    { date: 'Jan 28', mo: 'Jan', ref: 'TXN-0254', desc: 'Jose Martinez · Demo', cat: 'Labor', amt: '-$920.00', pos: false },
    { date: 'Jan 27', mo: 'Jan', ref: 'TXN-0253', desc: 'Antonio Williams · Rough-in', cat: 'Labor', amt: '-$1,800.00', pos: false },
    { date: 'Jan 26', mo: 'Jan', ref: 'TXN-0252', desc: 'DEPOSIT · INHP Weatherization draw #1', cat: 'Receivable', amt: '+$9,400.00', pos: true },
    { date: 'Jan 25', mo: 'Jan', ref: 'TXN-0251', desc: 'Lowes · Tools & hardware', cat: 'Materials', amt: '-$1,180.00', pos: false },
    { date: 'Jan 25', mo: 'Jan', ref: 'TXN-0250', desc: 'Tyler · General labor', cat: 'Labor', amt: '-$480.00', pos: false },
    { date: 'Jan 24', mo: 'Jan', ref: 'TXN-0249', desc: 'QuickBooks · Monthly subscription', cat: 'Overhead', amt: '-$85.00', pos: false },
    { date: 'Jan 24', mo: 'Jan', ref: 'TXN-0248', desc: 'HighLevel CRM · Monthly', cat: 'Overhead', amt: '-$297.00', pos: false },
    { date: 'Jan 23', mo: 'Jan', ref: 'TXN-0247', desc: 'Brian Rodriguez · INHP project', cat: 'Labor', amt: '-$2,400.00', pos: false },
    { date: 'Jan 22', mo: 'Jan', ref: 'TXN-0246', desc: 'DEPOSIT · Live Indy · Timberland start', cat: 'Receivable', amt: '+$11,028.00', pos: true },
    { date: 'Jan 22', mo: 'Jan', ref: 'TXN-0245', desc: 'Fernando Morales · Timberland', cat: 'Labor', amt: '-$2,200.00', pos: false },
    { date: 'Jan 21', mo: 'Jan', ref: 'TXN-0244', desc: 'Menards · Insulation & vapor barrier', cat: 'Materials', amt: '-$1,560.00', pos: false },
    { date: 'Jan 20', mo: 'Jan', ref: 'TXN-0243', desc: 'Cesar Rivera · Hoosier framing', cat: 'Labor', amt: '-$2,800.00', pos: false },
    { date: 'Jan 19', mo: 'Jan', ref: 'TXN-0242', desc: 'Shell · Fuel', cat: 'Vehicle', amt: '-$94.20', pos: false },
    { date: 'Jan 18', mo: 'Jan', ref: 'TXN-0241', desc: 'Home Depot · Concrete & foundation', cat: 'Materials', amt: '-$3,200.00', pos: false },
    { date: 'Jan 17', mo: 'Jan', ref: 'TXN-0240', desc: 'DEPOSIT · Southeastern Property draw #1', cat: 'Receivable', amt: '+$8,200.00', pos: true },
    { date: 'Jan 16', mo: 'Jan', ref: 'TXN-0239', desc: 'Jose Martinez · Southeastern', cat: 'Labor', amt: '-$1,100.00', pos: false },
    { date: 'Jan 15', mo: 'Jan', ref: 'TXN-0238', desc: 'Antonio Williams · Electrical', cat: 'Labor', amt: '-$1,600.00', pos: false },
    { date: 'Jan 14', mo: 'Jan', ref: 'TXN-0237', desc: 'State Farm · Liability insurance', cat: 'Insurance', amt: '-$1,250.00', pos: false },
    { date: 'Jan 13', mo: 'Jan', ref: 'TXN-0236', desc: 'Brian Rodriguez · Southeastern', cat: 'Labor', amt: '-$1,800.00', pos: false },
    { date: 'Jan 12', mo: 'Jan', ref: 'TXN-0235', desc: 'DEPOSIT · Hoosier Homes draw #1', cat: 'Receivable', amt: '+$6,800.00', pos: true },
    { date: 'Jan 12', mo: 'Jan', ref: 'TXN-0234', desc: 'Lowes · CC payment', cat: 'Materials', amt: '-$890.00', pos: false },
    { date: 'Jan 11', mo: 'Jan', ref: 'TXN-0233', desc: 'Tyler · Demo crew', cat: 'Labor', amt: '-$640.00', pos: false },
    { date: 'Jan 10', mo: 'Jan', ref: 'TXN-0232', desc: 'Fernando Morales · Southeastern', cat: 'Labor', amt: '-$2,400.00', pos: false },
    { date: 'Jan 09', mo: 'Jan', ref: 'TXN-0231', desc: 'AT&T · Business phone', cat: 'Overhead', amt: '-$145.00', pos: false },
    { date: 'Jan 08', mo: 'Jan', ref: 'TXN-0230', desc: 'Cesar Rivera · General trades', cat: 'Labor', amt: '-$1,600.00', pos: false },
    { date: 'Jan 07', mo: 'Jan', ref: 'TXN-0229', desc: 'DEPOSIT · Contractor Plus start', cat: 'Receivable', amt: '+$5,000.00', pos: true },
    { date: 'Jan 06', mo: 'Jan', ref: 'TXN-0228', desc: 'Home Depot · Windows & doors', cat: 'Materials', amt: '-$3,840.00', pos: false },
    { date: 'Jan 05', mo: 'Jan', ref: 'TXN-0227', desc: 'Jose Martinez · Clean-up', cat: 'Labor', amt: '-$480.00', pos: false },
    { date: 'Jan 04', mo: 'Jan', ref: 'TXN-0226', desc: 'Floor & Decor · Countertops', cat: 'Materials', amt: '-$1,920.00', pos: false },
    { date: 'Jan 03', mo: 'Jan', ref: 'TXN-0225', desc: 'BP · Fuel', cat: 'Vehicle', amt: '-$76.80', pos: false },
    { date: 'Jan 02', mo: 'Jan', ref: 'TXN-0224', desc: 'IPFS · Insurance premium finance', cat: 'Insurance', amt: '-$420.00', pos: false },
    { date: 'Jan 01', mo: 'Jan', ref: 'TXN-0223', desc: 'Verizon · Internet', cat: 'Overhead', amt: '-$89.00', pos: false },
  ], []);

  const monthTotals = React.useMemo(() => ({
    Jan: { income: '$55,028', expense: '$59,943', net: '-$4,915' },
    Feb: { income: '$51,500', expense: '$51,500', net: '$0' },
    Mar: { income: '$101,966', expense: '$94,301', net: '+$7,665' },
  }), []);

  const filtered = React.useMemo(() => {
    let list = ALL_TXNS;
    if (month !== 'All') list = list.filter(t => t.mo === month);
    if (filter === 'Income') list = list.filter(t => t.pos);
    else if (filter === 'Expenses') list = list.filter(t => !t.pos);
    return list;
  }, [ALL_TXNS, month, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  // Reset page when filters change
  React.useEffect(() => { setPage(1); }, [filter, month]);

  const PaginationBar = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 22px', borderTop: `1px solid ${CF.navyLine}`, flexWrap: 'wrap', gap: 8 }}>
      <div style={{ fontSize: 11, color: CF.inkMute }}>
        Showing {((safePage - 1) * PER_PAGE) + 1}–{Math.min(safePage * PER_PAGE, filtered.length)} of {filtered.length} transactions
      </div>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <button disabled={safePage <= 1} onClick={() => setPage(1)} style={{ padding: '5px 8px', borderRadius: 6, border: `1px solid ${CF.navyLine}`, background: 'transparent', color: safePage <= 1 ? CF.inkMute : CF.inkDim, fontSize: 11, fontWeight: 600, cursor: safePage <= 1 ? 'default' : 'pointer', opacity: safePage <= 1 ? 0.4 : 1, fontFamily: "'Inter',sans-serif" }}>First</button>
        <button disabled={safePage <= 1} onClick={() => setPage(p => Math.max(1, p - 1))} style={{ padding: '5px 10px', borderRadius: 6, border: `1px solid ${CF.navyLine}`, background: 'transparent', color: safePage <= 1 ? CF.inkMute : CF.inkDim, fontSize: 11, fontWeight: 600, cursor: safePage <= 1 ? 'default' : 'pointer', opacity: safePage <= 1 ? 0.4 : 1, fontFamily: "'Inter',sans-serif" }}>Prev</button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let p;
          if (totalPages <= 5) p = i + 1;
          else if (safePage <= 3) p = i + 1;
          else if (safePage >= totalPages - 2) p = totalPages - 4 + i;
          else p = safePage - 2 + i;
          return (
            <button key={p} onClick={() => setPage(p)} style={{
              width: 28, height: 28, borderRadius: 6, fontSize: 11, fontWeight: 700,
              border: p === safePage ? '1px solid rgba(61,123,255,0.4)' : `1px solid ${CF.navyLine}`,
              background: p === safePage ? 'rgba(61,123,255,0.15)' : 'transparent',
              color: p === safePage ? CF.blue : CF.inkDim, cursor: 'pointer',
              fontFamily: "'JetBrains Mono',monospace",
            }}>{p}</button>
          );
        })}
        <button disabled={safePage >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} style={{ padding: '5px 10px', borderRadius: 6, border: `1px solid ${CF.navyLine}`, background: 'transparent', color: safePage >= totalPages ? CF.inkMute : CF.inkDim, fontSize: 11, fontWeight: 600, cursor: safePage >= totalPages ? 'default' : 'pointer', opacity: safePage >= totalPages ? 0.4 : 1, fontFamily: "'Inter',sans-serif" }}>Next</button>
        <button disabled={safePage >= totalPages} onClick={() => setPage(totalPages)} style={{ padding: '5px 8px', borderRadius: 6, border: `1px solid ${CF.navyLine}`, background: 'transparent', color: safePage >= totalPages ? CF.inkMute : CF.inkDim, fontSize: 11, fontWeight: 600, cursor: safePage >= totalPages ? 'default' : 'pointer', opacity: safePage >= totalPages ? 0.4 : 1, fontFamily: "'Inter',sans-serif" }}>Last</button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      {showCSVModal && <CSVUploadModal onClose={() => setShowCSVModal(false)} />}
      <Topbar
        title="Accounts"
        sub="MSC Bank · Plaid connected · Live · 512 transactions"
        actions={
          <button
            onClick={() => setShowCSVModal(true)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 8, background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#3D7BFF'; e.currentTarget.style.color = '#3D7BFF'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; }}
          >
            <Icon name="cloudUpload" size={13} color="currentColor" />
            Import CSV
          </button>
        }
      />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Bank card */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, padding: '20px 24px', background: CF.navy1, display: 'flex', flexDirection: 'column', gap: 12, boxShadow: 'var(--cf-cardShadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(61,123,255,0.12)', border: '1px solid rgba(61,123,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="creditCard" size={17} color={CF.blue} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: CF.ink }}>MSC Bank Business Checking</div>
                <div style={{ fontSize: 10, color: CF.inkMute, fontFamily: "'JetBrains Mono',monospace" }}>····2847</div>
              </div>
            </div>
            <Chip color="green">Primary</Chip>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 30, fontWeight: 700, letterSpacing: '-0.03em', color: CF.ink }}>$6,665.51</div>
          <div style={{ fontSize: 10, color: CF.inkMute, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: CF.green, boxShadow: `0 0 5px ${CF.green}` }} />
            Synced 2 min ago
          </div>
        </div>

        {/* Summary KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
          <KPICard label="Q1 Revenue" value="$208,494" sub="Jan–Mar 2026" chip="+14%" chipColor="green" compact={compact} />
          <KPICard label="Q1 Expenses" value="$205,744" sub="Jan–Mar 2026" chip="+12%" chipColor="red" compact={compact} />
          <KPICard label="Gross Margin" value="1.3%" sub="Target 20%" chip="Critical" chipColor="red" mono={false} compact={compact} />
          <KPICard label="Transactions" value="512" sub="3 months imported" compact={compact} />
        </div>

        {/* Transaction table */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div className="sticky-filter-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: `1px solid ${CF.navyLine}`, flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Transactions</div>
              {/* Month tabs */}
              <div style={{ display: 'inline-flex', border: `1px solid ${CF.navyLine}`, borderRadius: 8, padding: 3, fontSize: 11 }}>
                {['All','Jan','Feb','Mar'].map(m => (
                  <span key={m} onClick={() => setMonth(m)} style={{ padding: '4px 10px', borderRadius: 6, cursor: 'pointer', background: m === month ? 'rgba(61,123,255,0.2)' : 'transparent', color: m === month ? CF.ink : CF.inkMute, transition: 'all 0.15s', fontWeight: m === month ? 700 : 500 }}>{m}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {/* Type filter */}
              <div style={{ display: 'inline-flex', border: `1px solid ${CF.navyLine}`, borderRadius: 8, padding: 3, fontSize: 11 }}>
                {['All','Income','Expenses'].map(f => (
                  <span key={f} onClick={() => setFilter(f)} style={{ padding: '4px 10px', borderRadius: 6, cursor: 'pointer', background: f === filter ? 'rgba(61,123,255,0.2)' : 'transparent', color: f === filter ? CF.ink : CF.inkMute, transition: 'all 0.15s', fontWeight: f === filter ? 700 : 500 }}>{f}</span>
                ))}
              </div>
              <Btn variant="ghost" size="sm"><Icon name="download" size={12} color={CF.inkDim} /></Btn>
            </div>
          </div>

          {/* Month summary bar */}
          {month !== 'All' && monthTotals[month] && (
            <div style={{ display: 'flex', gap: 20, padding: '10px 22px', borderBottom: `1px solid ${CF.navyLine}`, background: 'rgba(61,123,255,0.02)', flexWrap: 'wrap', fontSize: 12 }}>
              <span style={{ color: CF.inkMute }}>Income: <strong style={{ color: CF.green, fontFamily: "'JetBrains Mono',monospace" }}>{monthTotals[month].income}</strong></span>
              <span style={{ color: CF.inkMute }}>Expenses: <strong style={{ color: CF.red, fontFamily: "'JetBrains Mono',monospace" }}>{monthTotals[month].expense}</strong></span>
              <span style={{ color: CF.inkMute }}>Net: <strong style={{ color: month === 'Jan' ? CF.red : CF.green, fontFamily: "'JetBrains Mono',monospace" }}>{monthTotals[month].net}</strong></span>
            </div>
          )}

          {/* Rows */}
          {paged.map((t, i) => (
            <div key={t.ref} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 22px', borderBottom: i < paged.length - 1 ? `1px solid ${CF.navyLine}` : 'none', cursor: 'pointer', transition: 'background 0.15s', flexWrap: 'wrap' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: CF.inkMute, width: 44, flexShrink: 0 }}>{t.date}</div>
              <div className="hide-xs" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: CF.inkMute, width: 80, flexShrink: 0 }}>{t.ref}</div>
              <div style={{ flex: 1, fontSize: 12, color: CF.inkDim, minWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.desc}</div>
              <Chip color={t.cat === 'Receivable' ? 'green' : t.cat === 'Labor' ? 'amber' : t.cat === 'Materials' ? 'red' : 'mute'} style={{ fontSize: 9 }}>{t.cat}</Chip>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, color: t.pos ? CF.green : CF.red, width: 100, textAlign: 'right', flexShrink: 0 }}>{t.amt}</div>
            </div>
          ))}

          {/* Pagination */}
          <PaginationBar />
        </div>
      </div>
    </div>
  );
}

// ── PAYROLL ───────────────────────────────────────────────────────────
function PayrollScreen({ compact }) {
  const [open, setOpen] = React.useState({ runs: true, team: true });
  const team = [
    { name: 'Brian Rodriguez',   role: 'Lead Carpenter',   dept: 'Field',  pay: '$3,850', type: '1099' },
    { name: 'Cesar Rivera',      role: 'General Trades',   dept: 'Field',  pay: '$2,940', type: '1099' },
    { name: 'Fernando Morales',  role: 'Finish Carpenter', dept: 'Field',  pay: '$3,120', type: '1099' },
    { name: 'Jose Martinez',     role: 'General Labor',    dept: 'Field',  pay: '$2,600', type: '1099' },
    { name: 'Tanya Wu',          role: 'Project Mgr.',     dept: 'Office', pay: '$4,200', type: 'Salary' },
    { name: 'Sarah Mendez',      role: 'Estimator',        dept: 'Office', pay: '$3,600', type: 'Salary' },
  ];
  const runs = [
    { date: 'Apr 11, 2026', amount: '$12,510', employees: 4, status: 'Upcoming' },
    { date: 'Mar 28, 2026', amount: '$12,510', employees: 4, status: 'Paid' },
    { date: 'Mar 14, 2026', amount: '$11,960', employees: 4, status: 'Paid' },
  ];
  const avatarColors = ['#3D5A9E','#2E7D64','#7B4EA0','#9E5A2E','#2E7098','#9E3D5A','#5A9E3D','#7D6B2E'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      <Topbar title="Payroll" sub="4 contractors · 2 staff · Gusto connected · Bi-weekly" />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="screen-kpi-grid">
          <KPICard label="Next payroll" value="$12,510" sub="Apr 11 · 2 weeks" chip="On track" chipColor="green" compact={compact} />
          <KPICard label="Monthly total" value="$25,020" sub="Bi-weekly runs" compact={compact} />
          <KPICard label="Payroll / revenue" value="27.1%" sub="Mar actual — target ≤30%" chip="In range" chipColor="blue" mono={false} compact={compact} />
          <KPICard label="Headcount" value="6" sub="4 contractors · 2 staff" mono={false} compact={compact} />
        </div>
        <AlertBanner type="warning">
          <strong style={{ color: CF.amber }}>Payroll due Apr 11</strong> — $12,510 via Gusto in 2 weeks. Bank balance is $6,665.51 — an incoming draw is required before this clears.
        </AlertBanner>

        {/* Runs section */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div onClick={() => setOpen(p => ({ ...p, runs: !p.runs }))} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', cursor: 'pointer', borderBottom: open.runs ? `1px solid ${CF.navyLine}` : 'none' }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Payroll runs</div>
            <div style={{ transform: open.runs ? 'rotate(0)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}><Icon name="chevronDown" size={14} color={CF.inkMute} /></div>
          </div>
          {open.runs && runs.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 22px', borderBottom: i < runs.length - 1 ? `1px solid ${CF.navyLine}` : 'none', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: CF.ink }}>{r.date}</div>
                <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 2 }}>{r.employees} employees</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 18, fontWeight: 700, color: CF.ink }}>{r.amount}</div>
              <Chip color={r.status === 'Upcoming' ? 'amber' : 'green'}>{r.status}</Chip>
            </div>
          ))}
        </div>

        {/* Team section */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          <div onClick={() => setOpen(p => ({ ...p, team: !p.team }))} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', cursor: 'pointer', borderBottom: open.team ? `1px solid ${CF.navyLine}` : 'none' }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Team roster</div>
            <div style={{ transform: open.team ? 'rotate(0)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}><Icon name="chevronDown" size={14} color={CF.inkMute} /></div>
          </div>
          {open.team && (
            <div className="payroll-team-grid">
              {team.map((p, i) => (
                <div key={i} style={{ padding: '14px 22px', borderBottom: `1px solid ${CF.navyLine}`, display: 'flex', alignItems: 'center', gap: 12, borderRight: `1px solid ${CF.navyLine}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: avatarColors[i % avatarColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.9)', flexShrink: 0 }}>
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: CF.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: CF.inkMute }}>{p.role} · {p.dept}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 700, color: CF.ink }}>{p.pay}</div>
                    <div style={{ fontSize: 9, color: CF.inkMute }}>{p.type}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── AI ENGINE ─────────────────────────────────────────────────────────
function AIScreen({ compact }) {
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([{
    role: 'assistant',
    content: `Good morning, Daniel. I've analyzed Q1 2026 data from your MSC Bank feed.\n\n**Bank balance as of Mar 31: $6,665.51** — this is your actual safe-to-spend. March was your strongest revenue month at $92,258, but expenses of $78,355 left a thin $13,903 net.\n\nCash runway is approximately 3 days at current burn. An incoming draw from Hoosier-Homes or INHP is needed before the Apr 11 contractor payroll of $12,510.\n\nAsk me anything about your cash, hiring capacity, job margins, or whether you can take on new work.`,
  }]);
  const containerRef = React.useRef(null);

  const CONTEXT = `You are the CashFlow Smart AI for Main Street Contractors, a housing rehab and weatherization contractor.
Financial snapshot (Mar 31, 2026 — Q1 close):
- Bank balance (safe to spend): $6,665.51 — CRITICAL, 3-day runway
- March revenue: $92,258 | March expenses: $78,355 | Net: $13,903
- Q1 total revenue: $186,221 (Jan $34,922 + Feb $59,041 + Mar $92,258)
- Gross margin: 15.1% (target 20%)
- Next contractor payroll: $12,510 on Apr 11 — NOT COVERED by current balance
- Active jobs: Timberland Dr. Rehab (Live Indy, 15%), INHP Weatherization Pkg. A (INHP, 17%), Hoosier-Homes Batch #4 (13% — at risk), CVS Commercial Buildout (Divisions Inc., 19%)
- Active contractors: Brian Rodriguez, Cesar Rivera, Fernando Morales, Jose Martinez
- Key clients: Hoosier-Homes, Live Indy, INHP, Contractor Plus, Divisions Inc.
- Burn rate: ~$2,528/day
Answer directly with specific dollar amounts. Use contractor language. Be concise and honest. Emphasize cash urgency when relevant.`;

  const suggestions = [
    'Can I make payroll on Apr 11?',
    'Which draw should I chase first?',
    'What if Hoosier-Homes pays late?',
    'Which job is hurting my margin most?',
    'When can I afford to hire?',
  ];

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput('');
    const next = [...messages, { role: 'user', content: q }];
    setMessages(next);
    setLoading(true);
    try {
      const reply = await window.claude.complete({
        messages: [{ role: 'user', content: CONTEXT + '\n\nUser: ' + q }]
      });
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }]);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages, loading]);

  const renderMd = (text) => text.split('\n').map((line, i) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return <div key={i} style={{ marginBottom: line === '' ? 8 : 3, color: CF.inkDim, lineHeight: 1.65, fontSize: 13 }}>
      {parts.map((p, j) => p.startsWith('**') ? <strong key={j} style={{ color: CF.ink, fontWeight: 700 }}>{p.slice(2,-2)}</strong> : p)}
    </div>;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      {/* AI topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px', borderBottom: `1px solid rgba(111,232,255,0.15)`,
        background: CF.navy1,
        flexShrink: 0, gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, background: 'linear-gradient(135deg,rgba(61,123,255,0.25),rgba(111,232,255,0.15))', border: '1px solid rgba(111,232,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 16px -4px rgba(111,232,255,0.4)' }}>
            <Icon name="sparkle" size={17} color={CF.cyan} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: CF.ink }}>AI Decision Engine</div>
            <div style={{ fontSize: 11, color: CF.cyan, opacity: 0.7, display: 'flex', alignItems: 'center', gap: 5, marginTop: 1 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: CF.cyan, boxShadow: `0 0 6px ${CF.cyan}` }} />
              Live · Main Street Contractors data synced
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="ai" size="sm"><Icon name="refresh" size={12} color={CF.cyan} />Refresh data</Btn>
          <Btn variant="primary" size="sm"><Icon name="plus" size={12} color="white" /><span className="hide-sm">New job</span></Btn>
        </div>
      </div>

      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Live stats */}
        <div className="ai-kpi-grid" style={{ display: 'grid', gap: 12 }}>
          <KPICard label="Safe to spend" value="$6,665" sub="MSC Bank · Mar 31 close" chip="Critical" chipColor="red" accent compact={compact} />
          <KPICard label="Confidence" value="38%" sub="Do NOT hire — cash critical" chip="Low" chipColor="red" mono={false} compact={compact} />
          <KPICard label="AR incoming" value="$32,720" sub="2 draws pending · Apr" chip="Needed" chipColor="amber" compact={compact} />
          <KPICard label="Runway" value="~3 days" sub="At $2,528/day burn" mono={false} compact={compact} />
        </div>

        {/* Chat interface */}
        <div className="ai-chat-box" style={{
          border: '1px solid rgba(111,232,255,0.18)', borderRadius: 18,
          background: CF.navy2,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          boxShadow: '0 0 60px -20px rgba(111,232,255,0.08)',
        }}>
          {/* Messages */}
          <div ref={containerRef} style={{ flex: 1, overflowY: 'auto', padding: '22px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, flexDirection: m.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: m.role === 'user'
                    ? 'linear-gradient(135deg,#F6B54A,#E07420)'
                    : 'linear-gradient(135deg,rgba(61,123,255,0.3),rgba(111,232,255,0.2))',
                  border: m.role === 'assistant' ? '1px solid rgba(111,232,255,0.3)' : 'none',
                  fontSize: m.role === 'user' ? 11 : 0, fontWeight: 800,
                  color: '#03060F',
                  boxShadow: m.role === 'assistant' ? '0 0 14px -4px rgba(111,232,255,0.35)' : 'none',
                }}>
                  {m.role === 'user' ? 'DC' : <Icon name="sparkle" size={14} color={CF.cyan} />}
                </div>
                <div style={{
                  maxWidth: '78%',
                  background: m.role === 'user' ? 'rgba(61,123,255,0.12)' : 'var(--color-bg-secondary)',
                  border: `1px solid ${m.role === 'user' ? 'rgba(61,123,255,0.28)' : 'rgba(111,232,255,0.1)'}`,
                  borderRadius: m.role === 'user' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                  padding: '13px 17px',
                }}>
                  {m.role === 'assistant' ? renderMd(m.content) : <span style={{ color: CF.ink, fontSize: 13 }}>{m.content}</span>}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(61,123,255,0.3),rgba(111,232,255,0.2))', border: '1px solid rgba(111,232,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 14px -4px rgba(111,232,255,0.35)' }}>
                  <Icon name="sparkle" size={14} color={CF.cyan} />
                </div>
                <div style={{ background: 'var(--color-bg-secondary)', border: '1px solid rgba(111,232,255,0.1)', borderRadius: '4px 16px 16px 16px', padding: '16px 20px', display: 'flex', gap: 6, alignItems: 'center' }}>
                  {[0,1,2].map(d => <div key={d} style={{ width: 7, height: 7, borderRadius: '50%', background: CF.cyan, animation: `pulse 1.3s ease-in-out ${d * 0.22}s infinite` }} />)}
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {suggestions.map(s => (
              <button key={s} onClick={() => send(s)} style={{ fontSize: 11, padding: '5px 13px', borderRadius: 999, background: 'rgba(111,232,255,0.06)', border: '1px solid rgba(111,232,255,0.18)', color: CF.inkDim, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", fontWeight: 500, transition: 'all 0.15s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(111,232,255,0.12)'; e.currentTarget.style.color = CF.cyan; e.currentTarget.style.borderColor = 'rgba(111,232,255,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(111,232,255,0.06)'; e.currentTarget.style.color = CF.inkDim; e.currentTarget.style.borderColor = 'rgba(111,232,255,0.18)'; }}>
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: `1px solid ${CF.navyLine}`, display: 'flex', gap: 10, alignItems: 'center', background: CF.navy2 }}>
            <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="sparkle" size={14} color={CF.cyan} strokeWidth={1.7} />
            </div>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask about cash, hiring, margins, new jobs…"
              style={{ flex: 1, background: 'transparent', border: 'none', color: CF.ink, fontFamily: "'Manrope',sans-serif", fontSize: 13, outline: 'none' }}
            />
            <Btn variant={input.trim() ? 'primary' : 'ghost'} size="sm" onClick={() => send()} disabled={!input.trim() || loading}>
              <Icon name="send" size={12} color={input.trim() ? 'white' : CF.inkMute} />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SETTINGS ──────────────────────────────────────────────────────────
function SettingsScreen({ compact, onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      <Topbar title="Settings" sub="Financial configuration &amp; preferences" />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { title: 'Financial targets', fields: [{ label: 'Target gross margin', val: '20', prefix: '%' },{ label: 'Monthly revenue target', val: '75,000', prefix: '$' },{ label: 'Minimum cash floor', val: '5,000', prefix: '$' }] },
          { title: 'Cash controls', fields: [{ label: 'Payroll buffer days', val: '14', prefix: '' },{ label: 'Tax reserve %', val: '25', prefix: '%' },{ label: 'Retainage holdback %', val: '10', prefix: '%' }] },
        ].map(section => (
          <div key={section.title} style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
            <div style={{ padding: '14px 22px', borderBottom: `1px solid ${CF.navyLine}`, fontWeight: 700, fontSize: 14 }}>{section.title}</div>
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {section.fields.map(f => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
                  <label style={{ fontSize: 13, color: CF.inkDim, flex: 1, minWidth: 160 }}>{f.label}</label>
                  <div style={{ position: 'relative', width: 160 }}>
                    {f.prefix && <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: CF.inkMute }}>{f.prefix}</span>}
                    <input defaultValue={f.val} style={{ width: '100%', background: CF.navy2, border: `1px solid ${CF.navyLine}`, borderRadius: 10, padding: `10px 14px 10px ${f.prefix ? '28px' : '14px'}`, color: CF.ink, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, outline: 'none', textAlign: 'right' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 10 }}>
          <Btn variant="primary" size="md">Save changes</Btn>
          <Btn variant="ghost" size="md">Cancel</Btn>
        </div>

        {/* Danger zone */}
        <div style={{ border: '1px solid rgba(220,38,38,0.2)', borderRadius: 16, overflow: 'hidden', background: 'rgba(220,38,38,0.03)' }}>
          <div style={{ padding: '14px 22px', borderBottom: '1px solid rgba(220,38,38,0.15)', fontWeight: 700, fontSize: 14, color: '#DC2626' }}>Danger zone</div>
          <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 3 }}>Sign out</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>You will be taken back to the onboarding screen.</div>
              </div>
              <button
                onClick={() => onNavigate('onboarding')}
                style={{ padding: '9px 18px', borderRadius: 9, background: 'transparent', border: '1px solid rgba(220,38,38,0.4)', color: '#DC2626', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", transition: 'all 0.15s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,38,38,0.08)'; e.currentTarget.style.borderColor = '#DC2626'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(220,38,38,0.4)'; }}
              >
                Log out
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── RECEIPTS ──────────────────────────────────────────────────────────
function ReceiptUploadModal({ onClose, onSubmit }) {
  const [file, setFile]         = React.useState(null);
  const [preview, setPreview]   = React.useState(null);
  const [drag, setDrag]         = React.useState(false);
  const [success, setSuccess]   = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm]         = React.useState({ name: '', job: '', amount: '', date: new Date().toISOString().split('T')[0], category: '', notes: '' });
  const [errors, setErrors]     = React.useState({});
  const inputRef                = React.useRef(null);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    if (f.type.startsWith('image/')) {
      const r = new FileReader();
      r.onload = e => setPreview(e.target.result);
      r.readAsDataURL(f);
    }
  };

  const handleSubmit = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.job)         e.job  = true;
    if (!form.amount)      e.amount = true;
    if (!form.date)        e.date = true;
    if (!form.category)    e.category = true;
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 800);
  };

  const inputStyle = (key) => ({
    width: '100%', background: CF.navy3, border: `1px solid ${errors[key] ? 'rgba(255,106,122,0.6)' : CF.navyLine}`,
    borderRadius: 10, padding: '11px 13px', color: CF.ink, fontFamily: "'Manrope',sans-serif",
    fontSize: 13, outline: 'none', appearance: 'none', WebkitAppearance: 'none',
    transition: 'border-color 0.18s',
  });
  const labelStyle = { fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: CF.inkMute, display: 'block', marginBottom: 5 };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div style={{
        width: '100%', maxWidth: 480, maxHeight: '90vh',
        background: CF.navy1, border: `1px solid ${CF.navyLine}`,
        borderRadius: 20, display: 'flex', flexDirection: 'column',
        boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: `1px solid ${CF.navyLine}`, flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: CF.ink, letterSpacing: '-0.02em' }}>Submit a Receipt</div>
            <div style={{ fontSize: 11, color: CF.inkMute, marginTop: 2 }}>Upload photo · fill details · bookkeeper reviews</div>
          </div>
          <div onClick={onClose} style={{ cursor: 'pointer', padding: 6, borderRadius: 8, opacity: 0.5, transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.5}>
            <Icon name="x" size={16} color={CF.inkMute} />
          </div>
        </div>

        {/* Body */}
        <div style={{ overflowY: 'auto', padding: '20px', flex: 1 }}>
          {success ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, padding: '32px 16px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(62,230,168,0.1)', border: '1px solid rgba(62,230,168,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px -12px rgba(62,230,168,0.4)' }}>
                <Icon name="check" size={28} color={CF.green} strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: CF.ink, letterSpacing: '-0.02em' }}>Receipt submitted!</div>
              <div style={{ fontSize: 13, color: CF.inkMute, lineHeight: 1.6, maxWidth: 300 }}>Your bookkeeper will review it and match it to a bank transaction shortly.</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                <Btn variant="ghost" size="md" onClick={() => { setSuccess(false); setForm({ name: '', job: '', amount: '', date: new Date().toISOString().split('T')[0], category: '', notes: '' }); setFile(null); setPreview(null); setErrors({}); }}>Submit another</Btn>
                <Btn variant="primary" size="md" onClick={onClose}>Done</Btn>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {/* Upload zone */}
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
                style={{
                  border: `2px dashed ${drag ? CF.amber : CF.navyLine}`, borderRadius: 14,
                  background: drag ? 'rgba(246,181,74,0.04)' : CF.navy2,
                  padding: preview ? '12px' : '28px 16px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                <input ref={inputRef} type="file" accept="image/*" capture="environment"
                  style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
                {preview ? (
                  <img src={preview} style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 10, display: 'block' }} alt="preview" />
                ) : (
                  <>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(246,181,74,0.1)', border: '1px solid rgba(246,181,74,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CF.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: CF.ink }}>Tap to take photo or upload</div>
                    <div style={{ fontSize: 11, color: CF.inkMute }}>JPEG · PNG · HEIC — max 20 MB</div>
                  </>
                )}
                {file && <div style={{ fontSize: 11, color: CF.amber, fontWeight: 600 }}>{file.name}</div>}
              </div>

              {/* Name */}
              <div>
                <label style={labelStyle}>Your Name</label>
                <input style={inputStyle('name')} placeholder="e.g. Marcus Rivera" value={form.name}
                  onChange={e => { set('name', e.target.value); setErrors(p => ({ ...p, name: false })); }} />
              </div>

              {/* Job */}
              <div>
                <label style={labelStyle}>Select Job</label>
                <select style={{ ...inputStyle('job'), backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235C6B8A' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}
                  value={form.job} onChange={e => { set('job', e.target.value); setErrors(p => ({ ...p, job: false })); }}>
                  <option value="" disabled>Choose a job…</option>
                  {['Timberland Dr. Rehab','INHP Weatherization Pkg. A','Hoosier-Homes Batch #4','CVS Commercial Buildout','Contractor Plus Rehab #7'].map(j => <option key={j}>{j}</option>)}
                </select>
              </div>

              {/* Amount + Date row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>Amount ($)</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: CF.inkMute, pointerEvents: 'none' }}>$</span>
                    <input type="number" style={{ ...inputStyle('amount'), paddingLeft: 26 }} placeholder="0.00" step="0.01" min="0"
                      value={form.amount} onChange={e => { set('amount', e.target.value); setErrors(p => ({ ...p, amount: false })); }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Date</label>
                  <input type="date" style={{ ...inputStyle('date'), colorScheme: 'dark' }} value={form.date}
                    onChange={e => { set('date', e.target.value); setErrors(p => ({ ...p, date: false })); }} />
                </div>
              </div>

              {/* Category */}
              <div>
                <label style={labelStyle}>Category</label>
                <select style={{ ...inputStyle('category'), backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235C6B8A' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}
                  value={form.category} onChange={e => { set('category', e.target.value); setErrors(p => ({ ...p, category: false })); }}>
                  <option value="" disabled>Choose a category…</option>
                  {['Direct Expenditure','Overhead','Tools'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label style={labelStyle}>Notes <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0, color: 'var(--color-text-muted)' }}>(optional)</span></label>
                <textarea style={{ ...inputStyle(), resize: 'vertical', minHeight: 70, lineHeight: 1.5 }}
                  placeholder="Any notes for the bookkeeper…" value={form.notes}
                  onChange={e => set('notes', e.target.value)} />
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        {!success && (
          <div style={{ padding: '14px 20px', borderTop: `1px solid ${CF.navyLine}`, flexShrink: 0, display: 'flex', gap: 10 }}>
            <Btn variant="ghost" size="md" onClick={onClose} style={{ flex: 0 }}>Cancel</Btn>
            <button
              disabled={submitting}
              onClick={handleSubmit}
              style={{
                flex: 1, padding: '12px', borderRadius: 11, border: 'none', cursor: submitting ? 'default' : 'pointer',
                background: submitting ? 'rgba(246,181,74,0.5)' : 'linear-gradient(180deg,#F6B54A,#E07420)',
                color: '#03060F', fontFamily: "'Manrope',sans-serif", fontSize: 14, fontWeight: 800,
                boxShadow: submitting ? 'none' : '0 4px 20px -6px rgba(246,181,74,0.5)',
                transition: 'all 0.2s',
              }}>
              {submitting ? 'Submitting…' : 'Submit Receipt'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ReceiptsScreen({ compact }) {
  const [filter, setFilter] = React.useState('All');
  const [matched, setMatched] = React.useState({});
  const [showUpload, setShowUpload] = React.useState(false);

  const receipts = [
    { id: 1, sub: 'Brian Rodriguez',  job: 'Timberland Dr. Rehab',       amount: '$342.80', date: 'Mar 29, 2026', cat: 'Direct Expenditure', status: 'Pending' },
    { id: 2, sub: 'Fernando Morales', job: 'INHP Weatherization Pkg. A', amount: '$128.50', date: 'Mar 28, 2026', cat: 'Tools',              status: 'Matched' },
    { id: 3, sub: 'Jose Martinez',    job: 'Hoosier-Homes Batch #4',     amount: '$87.40',  date: 'Mar 27, 2026', cat: 'Overhead',           status: 'Pending' },
    { id: 4, sub: 'Cesar Rivera',     job: 'CVS Commercial Buildout',    amount: '$215.00', date: 'Mar 26, 2026', cat: 'Direct Expenditure', status: 'Flagged' },
    { id: 5, sub: 'Brian Rodriguez',  job: 'Timberland Dr. Rehab',       amount: '$540.20', date: 'Mar 24, 2026', cat: 'Tools',              status: 'Matched' },
    { id: 6, sub: 'Tanya Wu',         job: 'INHP Weatherization Pkg. A', amount: '$93.75',  date: 'Mar 22, 2026', cat: 'Overhead',           status: 'Pending' },
    { id: 7, sub: 'Sarah Mendez',     job: 'CVS Commercial Buildout',    amount: '$178.30', date: 'Mar 20, 2026', cat: 'Direct Expenditure', status: 'Matched' },
    { id: 8, sub: 'Fernando Morales', job: 'Hoosier-Homes Batch #4',     amount: '$64.90',  date: 'Mar 19, 2026', cat: 'Overhead',           status: 'Flagged' },
  ];

  const filtered = filter === 'All' ? receipts : receipts.filter(r => r.status === filter);
  const pendingCount  = receipts.filter(r => r.status === 'Pending').length;
  const matchedToday  = receipts.filter(r => r.status === 'Matched' && r.date === 'Apr 23, 2026').length;

  const catColor    = { 'Direct Expenditure': 'blue', 'Overhead': 'amber', 'Tools': 'cyan' };
  const statusColor = { 'Pending': 'amber', 'Matched': 'green', 'Flagged': 'red' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', minHeight: 0 }}>
      {showUpload && <ReceiptUploadModal onClose={() => setShowUpload(false)} />}
      <Topbar title="Receipt Queue" sub="Match subcontractor receipts to bank transactions" />
      <div className="screen-scroll" style={{ flex: 1, overflowY: 'auto', minHeight: 0, padding: compact ? '16px' : '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Stats row */}
        <div className="receipts-kpi-grid">
          <KPICard label="Pending Match"    value={String(pendingCount)} sub="Awaiting review"       chip="Action needed" chipColor="amber" mono={false} compact={compact} />
          <KPICard label="Matched Today"    value={String(matchedToday)} sub="Apr 23, 2026"          chip="Updated"       chipColor="green" mono={false} compact={compact} />
          <KPICard label="Total This Month" value={String(receipts.length)} sub="Apr 2026 · all receipts" chip="Apr"     chipColor="blue"  mono={false} compact={compact} />
        </div>

        {/* Filter bar + upload button */}
        <div className="receipt-filter-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'inline-flex', border: `1px solid ${CF.navyLine}`, borderRadius: 9, padding: 3, gap: 1 }}>
            {['All','Pending','Matched','Flagged'].map(f => (
              <span key={f} onClick={() => setFilter(f)} style={{
                padding: '5px 14px', borderRadius: 7, cursor: 'pointer', fontSize: 12,
                background: f === filter ? 'rgba(61,123,255,0.22)' : 'transparent',
                color: f === filter ? CF.ink : CF.inkMute,
                fontWeight: f === filter ? 700 : 500, transition: 'all 0.15s',
              }}>{f}</span>
            ))}
          </div>
          <Btn variant="ghostBlue" size="sm" onClick={() => setShowUpload(true)}>
            <Icon name="plus" size={12} color="#6BA3FF" /> Upload Receipt
          </Btn>
        </div>

        {/* Receipt card list */}
        <div style={{ border: `1px solid ${CF.navyLine}`, borderRadius: 16, overflow: 'hidden', background: CF.navy1, boxShadow: 'var(--cf-cardShadow)', border: `1px solid ${CF.cardBorder}` }}>
          {filtered.length === 0 && (
            <div style={{ padding: '48px 24px', textAlign: 'center', color: CF.inkMute, fontSize: 13 }}>No receipts in this category.</div>
          )}
          {filtered.map((r, i) => {
            const isMatched = matched[r.id] || r.status === 'Matched';
            return (
              <div key={r.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                  borderBottom: i < filtered.length - 1 ? `1px solid ${CF.navyLine}` : 'none',
                  flexWrap: 'wrap', transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--cf-navy2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* LEFT: thumbnail + info — takes full width on mobile before right group wraps */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 200 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                    background: CF.navy3, border: `1px solid ${CF.navyLine}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="receipt" size={20} color={CF.inkMute} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: CF.ink, marginBottom: 1 }}>{r.sub}</div>
                    <div style={{ fontSize: 11, color: CF.inkDim, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.job}</div>
                    <div style={{ fontSize: 10, color: CF.inkMute, marginTop: 2, fontFamily: "'JetBrains Mono',monospace" }}>{r.date}</div>
                  </div>
                </div>

                {/* RIGHT: badges + amount + action — wraps below left group on narrow screens */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <Chip color={catColor[r.cat] || 'mute'}>{r.cat}</Chip>
                    <Chip color={statusColor[r.status] || 'mute'}>{r.status}</Chip>
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 16, fontWeight: 700,
                    color: CF.ink, minWidth: 76, textAlign: 'right', flexShrink: 0,
                  }}>{r.amount}</div>
                  <div style={{ flexShrink: 0 }}>
                    {isMatched ? (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        fontSize: 12, fontWeight: 600, color: CF.green,
                        background: 'rgba(62,230,168,0.08)', border: '1px solid rgba(62,230,168,0.2)',
                        borderRadius: 9, padding: '7px 12px',
                      }}>
                        <Icon name="check" size={12} color={CF.green} /> Matched
                      </span>
                    ) : (
                      <Btn variant="primary" size="sm" onClick={() => setMatched(p => ({ ...p, [r.id]: true }))}>
                        Match Transaction
                      </Btn>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

// ── ONBOARDING ────────────────────────────────────────────────────────
function OnboardingScreen({ onNavigate }) {
  const [showCSVModal, setShowCSVModal] = React.useState(false);
  const [hoverA, setHoverA]   = React.useState(false);
  const [hoverB, setHoverB]   = React.useState(false);
  const [hoverSk, setHoverSk] = React.useState(false);
  const [isDark]               = React.useState(() => document.documentElement.classList.contains('dark-mode'));

  const finish = () => {
    localStorage.setItem('cf_onboarded', '1');
    onNavigate('dashboard');
  };

  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-page)', overflowY: 'auto', padding: '40px 24px', minHeight: '100vh' }}>
      {showCSVModal && <CSVUploadModal onClose={() => setShowCSVModal(false)} onComplete={finish} />}

      <div style={{ width: '100%', maxWidth: 500 }}>

        {/* Logo */}
        <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
          {isDark
            ? <img src="assets/favicon_cashflow.png" style={{ height: 48, width: 48, borderRadius: 12 }} alt="CashFlow Smart" />
            : <img src="assets/cashflow_dark_logo.png" style={{ height: 38, width: 'auto' }} alt="CashFlow Smart" />
          }
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 10 }}>
            Connect your financial data
          </div>
          <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: 360, margin: '0 auto' }}>
            Import your bank statements to unlock your Monday Morning Truth — your real cash position, runway, and next move.
          </div>
        </div>

        {/* Option cards */}
        <div className="onboarding-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20, alignItems: 'stretch' }}>

          {/* A — CSV */}
          <div
            onMouseEnter={() => setHoverA(true)}
            onMouseLeave={() => setHoverA(false)}
            style={{
              border: `2px dashed ${hoverA ? '#3D7BFF' : 'var(--color-border)'}`,
              borderRadius: 16, padding: '24px 20px',
              background: hoverA ? 'rgba(61,123,255,0.04)' : 'var(--color-bg-card)',
              transition: 'all 0.15s', display: 'flex', flexDirection: 'column', gap: 14,
            }}
          >
            <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(61,123,255,0.1)', border: '1px solid rgba(61,123,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="cloudUpload" size={22} color="#3D7BFF" strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>Upload bank CSV</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>Export from your bank and drop the file here. Works with Chase, Wells Fargo, and most US banks.</div>
            </div>
            <button
              onClick={() => setShowCSVModal(true)}
              style={{ padding: '10px 14px', borderRadius: 9, background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", transition: 'all 0.15s', textAlign: 'center', marginTop: 'auto' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3D7BFF'; e.currentTarget.style.color = '#3D7BFF'; e.currentTarget.style.background = 'rgba(61,123,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Choose file
            </button>
          </div>

          {/* B — Plaid */}
          <div
            onMouseEnter={() => setHoverB(true)}
            onMouseLeave={() => setHoverB(false)}
            style={{
              border: `1.5px solid ${hoverB ? 'rgba(61,123,255,0.5)' : 'rgba(61,123,255,0.25)'}`,
              borderRadius: 16, padding: '24px 20px',
              background: hoverB ? 'rgba(61,123,255,0.09)' : 'rgba(61,123,255,0.05)',
              transition: 'all 0.15s', display: 'flex', flexDirection: 'column', gap: 14,
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', top: 12, right: 12 }}>
              <Chip color="green">RECOMMENDED</Chip>
            </div>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(61,123,255,0.12)', border: '1px solid rgba(61,123,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="link" size={20} color="#3D7BFF" strokeWidth={1.8} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6, paddingRight: 70 }}>Connect automatically</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>Secure read-only bank link via Plaid. Syncs daily so your numbers are always fresh.</div>
            </div>
            <button
              style={{ padding: '10px 14px', borderRadius: 9, background: '#3D7BFF', border: 'none', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: "'Manrope',sans-serif", boxShadow: '0 2px 8px rgba(61,123,255,0.35)', transition: 'all 0.15s', textAlign: 'center', marginTop: 'auto' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2F68EE'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(61,123,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#3D7BFF'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(61,123,255,0.35)'; }}
            >
              Connect with Plaid
            </button>
          </div>
        </div>

        {/* Security note */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 20 }}>
          <Icon name="lock" size={12} color="var(--color-text-muted)" strokeWidth={2} />
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>256-bit encryption · read-only access · never sold</span>
        </div>

        {/* Skip */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={finish}
            onMouseEnter={() => setHoverSk(true)}
            onMouseLeave={() => setHoverSk(false)}
            style={{ background: 'none', border: 'none', fontSize: 12, color: hoverSk ? 'var(--color-text-secondary)' : 'var(--color-text-muted)', cursor: 'pointer', fontFamily: "'Manrope',sans-serif", transition: 'color 0.15s' }}
          >
            I'll do this later →
          </button>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { ForecastScreen, JobsScreen, AccountsScreen, PayrollScreen, AIScreen, SettingsScreen, ReceiptsScreen, OnboardingScreen });
