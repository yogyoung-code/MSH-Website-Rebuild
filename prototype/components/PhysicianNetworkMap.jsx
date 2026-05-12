
(function () {
  // ----- Geometry constants ---------------------------------------------
  // (BTH · Yangtze Delta · Pearl Delta · Cheng-Yu · Wuhan-Changsha-Zhengzhou
  // · Shandong peninsula · Hainan). Drops Xinjiang, Tibet, NE Heilongjiang
  // for clarity at homepage viewport size. US inset removed entirely.
  const VIEW_W = 760;
  const VIEW_H = 700;
  const CN_LNG_MIN =  99, CN_LNG_MAX = 126;   // 27° span
  const CN_LAT_MIN =  18, CN_LAT_MAX =  44;   // 26° span

  function projectCN(lng, lat) {
    const x = ((lng - CN_LNG_MIN) / (CN_LNG_MAX - CN_LNG_MIN)) * VIEW_W;
    const y = ((CN_LAT_MAX - lat) / (CN_LAT_MAX - CN_LAT_MIN)) * VIEW_H;
    return [x, y];
  }

  // ----- Deterministic PRNG (mulberry32) --------------------------------
  function mulberry32(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ----- Per-city physician counts (China) ------------------------------
  // Distribution mirrors China's tier-1/tier-2 hospital concentration
  // (Beijing-Tianjin-Hebei + Yangtze Delta + Pearl River Delta = ~55%).
  // Sum ≈ 3.0M; balance is in cities not individually rendered.
  const CITIES_CN = [
    { code: 'BJ',  name: 'Beijing',      lng: 116.4, lat: 39.9, n: 285, label: 'NE',  emphasis: true },
    { code: 'TJ',  name: 'Tianjin',      lng: 117.2, lat: 39.1, n:  95, label: null },
    { code: 'SJZ', name: 'Shijiazhuang', lng: 114.5, lat: 38.0, n:  70, label: null },
    { code: 'JN',  name: 'Jinan',        lng: 117.0, lat: 36.7, n:  90, label: null },
    { code: 'QD',  name: 'Qingdao',      lng: 120.4, lat: 36.1, n:  80, label: null },
    { code: 'ZZ',  name: 'Zhengzhou',    lng: 113.6, lat: 34.7, n: 100, label: null },
    { code: 'XA',  name: "Xi'an",        lng: 108.9, lat: 34.3, n: 110, label: null },
    { code: 'LZ',  name: 'Lanzhou',      lng: 103.8, lat: 36.1, n:  40, label: null },
    { code: 'NJ',  name: 'Nanjing',      lng: 118.8, lat: 32.1, n: 110, label: null },
    { code: 'SH',  name: 'Shanghai',     lng: 121.5, lat: 31.2, n: 320, label: 'NE',  emphasis: true },
    { code: 'HZ',  name: 'Hangzhou',     lng: 120.2, lat: 30.3, n: 130, label: 'SE',  emphasis: true },
    { code: 'HF',  name: 'Hefei',        lng: 117.3, lat: 31.9, n:  70, label: null },
    { code: 'WH',  name: 'Wuhan',        lng: 114.3, lat: 30.6, n: 150, label: 'NW',  emphasis: true },
    { code: 'CD',  name: 'Chengdu',      lng: 104.1, lat: 30.7, n: 175, label: 'NW',  emphasis: true },
    { code: 'CQ',  name: 'Chongqing',    lng: 106.5, lat: 29.6, n: 130, label: 'SW' },
    { code: 'CS',  name: 'Changsha',     lng: 113.0, lat: 28.2, n:  90, label: null },
    { code: 'NC',  name: 'Nanchang',     lng: 115.9, lat: 28.7, n:  70, label: null },
    { code: 'FZ',  name: 'Fuzhou',       lng: 119.3, lat: 26.1, n:  80, label: null },
    { code: 'GZ',  name: 'Guangzhou',    lng: 113.3, lat: 23.1, n: 230, label: 'SE',  emphasis: true },
    { code: 'SZ',  name: 'Shenzhen',     lng: 114.1, lat: 22.5, n: 145, label: null },
    { code: 'NN',  name: 'Nanning',      lng: 108.4, lat: 22.8, n:  55, label: null },
    { code: 'KM',  name: 'Kunming',      lng: 102.7, lat: 25.0, n:  60, label: null },
    { code: 'GY',  name: 'Guiyang',      lng: 106.7, lat: 26.6, n:  35, label: null },
    { code: 'HK',  name: 'Hong Kong',    lng: 114.2, lat: 22.3, n:  35, label: null },
    { code: 'TPE', name: 'Taipei',       lng: 121.5, lat: 25.0, n:  30, label: null },
    { code: 'SY',  name: 'Shenyang',     lng: 123.4, lat: 41.8, n:  85, label: null },
    { code: 'DL',  name: 'Dalian',       lng: 121.6, lat: 38.9, n:  60, label: null },
    { code: 'HH',  name: 'Hohhot',       lng: 111.7, lat: 40.8, n:  35, label: null },
    { code: 'TY',  name: 'Taiyuan',      lng: 112.5, lat: 37.9, n:  60, label: null },
    { code: 'YC',  name: 'Yinchuan',     lng: 106.3, lat: 38.5, n:  20, label: null },
    { code: 'XN',  name: 'Xining',       lng: 101.8, lat: 36.6, n:  18, label: null },
    { code: 'HK2', name: 'Haikou',       lng: 110.3, lat: 20.0, n:  25, label: null },
  ];
  /* Harbin / Changchun / Urumqi / Lhasa dropped — outside the zoomed-in
     central+eastern viewport (image-add pass 2). Their physician counts
     remain conceptually inside the 3.33M aggregate footnote. */

  // ----- Country outlines (simplified silhouettes) ----------------------
  // Hand-simplified clockwise polygons in [lng, lat] pairs. Not survey-grade —
  // intent is shape recognition beneath the dot density. China refined to
  // ~130 pts to capture the rooster-comb NE, Pamir tip W, Yunnan finger S,
  // Yangtze delta indent E. Hainan + Taiwan rendered as separate paths.
  const CHINA_OUTLINE = [
    /* NE corner (Mohe) — clockwise → east along Heilongjiang/Russia border */
    [122.4, 53.5], [123.5, 53.4], [125.0, 53.0], [126.5, 52.6],
    [127.5, 52.5], [129.0, 52.5], [130.5, 52.7], [132.0, 53.4],
    [133.5, 52.6], [134.6, 50.5], [134.7, 48.4],
    /* Russia border south, then NK border (Tumen R) */
    [134.0, 47.5], [133.5, 46.5], [132.5, 45.5], [131.5, 44.5],
    [131.0, 43.0], [130.7, 42.7], [130.0, 42.5], [129.0, 42.0],
    [128.0, 41.7], [126.5, 41.7], [125.5, 41.0],
    /* Yalu mouth, Liaodong peninsula, Bohai bay */
    [124.0, 40.0], [123.5, 39.7], [122.7, 39.5], [122.0, 39.2],
    [121.5, 39.0], [121.2, 38.8], [121.0, 38.7], [121.4, 39.0],
    [121.6, 39.7], [121.0, 40.5], [120.5, 40.4], [119.5, 39.7],
    [118.7, 39.2], [118.0, 38.8], [117.7, 38.3], [118.0, 37.7],
    /* Yellow R delta, Shandong peninsula, Qingdao */
    [118.7, 37.6], [119.5, 37.5], [120.7, 37.7], [121.7, 37.5],
    [122.4, 37.4], [122.7, 37.0], [122.5, 36.8], [121.5, 36.6],
    [120.7, 36.1], [120.0, 35.8], [119.5, 35.3], [119.2, 34.7],
    /* Jiangsu coast, Yangtze mouth, Shanghai */
    [120.0, 34.0], [120.5, 33.5], [121.0, 32.8], [121.5, 32.4],
    [121.9, 32.0], [121.8, 31.4], [121.4, 30.9], [121.0, 30.5],
    /* Hangzhou bay, Zhejiang coast */
    [121.0, 30.2], [121.7, 29.9], [122.0, 29.5], [121.7, 28.7],
    [121.6, 28.0], [121.0, 27.5], [120.5, 26.7],
    /* Fujian coast: Fuzhou → Xiamen → Shantou */
    [119.7, 25.7], [119.0, 25.0], [118.5, 24.5], [117.7, 23.9],
    [117.0, 23.5], [116.0, 22.9], [115.0, 22.7], [114.5, 22.5],
    /* Pearl R delta, Hong Kong, Guangdong, Leizhou peninsula */
    [114.0, 22.5], [113.5, 22.7], [113.0, 22.2], [112.3, 21.8],
    [111.5, 21.5], [110.7, 21.3], [110.3, 21.0], [110.2, 20.5],
    [110.0, 20.2], [109.7, 20.5], [109.7, 21.2], [109.5, 21.5],
    /* Beibu Gulf to Vietnam border */
    [108.7, 21.6], [108.0, 21.5], [107.5, 21.5], [106.7, 22.0],
    /* SW: Guangxi → Yunnan finger → Myanmar border (anti-clockwise on map) */
    [105.8, 22.9], [104.7, 22.8], [103.5, 22.6], [102.5, 22.4],
    [101.7, 22.4], [101.5, 21.7], [101.7, 21.2], [100.8, 21.5],
    [100.0, 21.7], [99.2, 22.1], [99.0, 23.1], [98.7, 24.1],
    [97.5, 24.5], [97.5, 25.7], [98.0, 27.0], [97.5, 28.2],
    [96.5, 28.7], [95.8, 29.1],
    /* McMahon Line east, Bhutan, Sikkim, Nepal, India */
    [94.5, 28.5], [93.0, 27.9], [92.0, 27.7], [91.5, 27.7],
    [90.5, 27.5], [89.0, 27.7], [88.0, 27.9], [87.0, 27.8],
    [85.5, 28.1], [84.0, 28.7], [82.5, 29.0], [81.2, 30.0],
    [80.3, 30.3], [79.5, 30.7], [79.0, 31.5], [78.5, 32.5],
    /* Aksai Chin → Karakorum → Pamir tip (westernmost) */
    [78.0, 33.5], [76.7, 35.5], [75.7, 36.6], [74.7, 37.3],
    [73.7, 38.7],
    /* Pamir → Tian Shan → Kazakhstan / Mongolia border (north loop) */
    [74.5, 39.5], [75.7, 40.5], [76.5, 40.8], [78.0, 41.4],
    [79.5, 41.7], [80.5, 43.0], [81.7, 44.5], [82.5, 45.0],
    [82.5, 46.0], [83.0, 47.0], [85.0, 47.4], [85.7, 48.0],
    [87.0, 48.5], [88.0, 49.0],
    /* Down for Gobi border with Mongolia */
    [89.5, 48.0], [91.0, 46.5], [93.0, 45.0], [95.0, 44.0],
    [96.5, 42.7], [99.0, 42.6], [101.0, 42.5], [103.5, 42.0],
    [105.5, 41.8], [107.5, 42.4], [109.5, 42.5], [111.5, 43.4],
    [114.0, 44.8], [116.0, 46.0], [117.5, 47.5], [119.0, 49.0],
    /* NE loop into Heilongjiang/Russia border, back to Mohe */
    [119.5, 49.7], [120.7, 50.5], [121.5, 51.7], [121.8, 52.7],
    [122.4, 53.5],
  ];
  /* Hainan island — recognizable elongated oval */
  const HAINAN_OUTLINE = [
    [110.5, 20.1], [110.7, 19.7], [110.7, 19.2], [110.4, 18.5],
    [110.0, 18.2], [109.5, 18.2], [108.9, 18.7], [108.7, 19.3],
    [108.7, 19.7], [109.0, 20.0], [109.7, 20.2],
  ];
  /* Taiwan island — tilted oval, sharper south tip */
  const TAIWAN_OUTLINE = [
    [121.5, 25.3], [121.9, 25.0], [122.0, 24.5], [121.9, 23.5],
    [121.5, 22.7], [120.8, 22.0], [120.2, 22.5], [120.1, 23.5],
    [120.4, 24.5], [121.0, 25.1],
  ];
  /* US outline removed in image-add pass 2 — US inset deemed unnecessary
     given the zoomed-in China focus. Trans-Pacific story moves to Hero copy
     and the upcoming /global page. */

  function polygonPath(points, projector) {
    if (!points || !points.length) return '';
    const projected = points.map(([lng, lat]) => projector(lng, lat));
    const [x0, y0] = projected[0];
    const rest = projected.slice(1).map(([x, y]) => `L ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    return `M ${x0.toFixed(1)} ${y0.toFixed(1)} ${rest} Z`;
  }

  // ----- Trans-Pacific & intra-China connection lines -------------------
  // Each pair = [code-a, code-b]; opacity scales with hub weight.
  const CONNECTIONS_CN = [
    ['BJ','SH'], ['BJ','GZ'], ['BJ','CD'], ['SH','GZ'],
    ['SH','CD'], ['SH','WH'], ['GZ','WH'], ['CD','XA'],
    ['BJ','SY'], ['SH','HZ'],
  ];
  /* CONNECTIONS_PAC removed — US inset deprecated in image-add pass 2. */

  // ----- Pre-compute density dots ---------------------------------------
  // For each city we scatter k = round(n / 8) "satellite" dots within a
  // jittered radius proportional to sqrt(n). This makes the dot pattern
  // itself reveal physician density (heavy on the eastern coast) without
  // having to draw a country outline.
  const rng = mulberry32(2415);
  const DENSITY_DOTS = (function build() {
    const out = [];
    for (const c of CITIES_CN) {
      const k = Math.max(2, Math.round(c.n / 8));
      const jitter = 6 + Math.sqrt(c.n) * 0.85;
      const [cx, cy] = projectCN(c.lng, c.lat);
      for (let i = 0; i < k; i++) {
        // Polar jitter — uniform in disk
        const r = jitter * Math.sqrt(rng());
        const a = rng() * Math.PI * 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        // Vary dot radius slightly for organic feel
        const rad = 0.9 + rng() * 0.6;
        out.push({ x, y, r: rad, op: 0.18 + rng() * 0.18 });
      }
    }
    return out;
  })();

  function cityCN(code) { return CITIES_CN.find(c => c.code === code); }

  // ----- Component ------------------------------------------------------
  function PhysicianNetworkMap() {
    return (
      <section id="network" style={{
        padding: 'clamp(72px, 9vw, 112px) clamp(24px, 6vw, 40px)',
        background: 'var(--bg-1)',
        borderTop: '1px solid var(--border-1)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="netfp-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(32px, 4vw, 64px)',
            alignItems: 'start',
          }}>
            {/* LEFT — copy + 3 inline stats */}
            <div style={{ maxWidth: 480 }}>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--brand-accent-700, #007995)',
                marginBottom: 14,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{
                  display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--brand-accent-500)',
                }} />
                Network footprint · 2026 Q1
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.6vw, 40px)', fontWeight: 600,
                color: 'var(--brand-primary-700)',
                margin: '0 0 18px',
                letterSpacing: '-0.012em', lineHeight: 1.15,
                textWrap: 'balance',
              }}>
                Where the physicians actually practice.
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.6,
                color: 'var(--fg-2)',
                margin: '0 0 28px',
              }}>
                3.33M+ registered physicians across all 31 provincial-level regions — densest where
                China's tier-3 hospitals, regulators and trial sites cluster: Beijing-Tianjin-Hebei,
                the Yangtze River Delta, the Pearl River Delta, and the Cheng-Yu corridor.
              </p>

              {/* Inline mini-stats */}
              <dl style={{
                margin: 0, padding: 0, display: 'grid',
                gridTemplateColumns: 'auto 1fr', columnGap: 20, rowGap: 14,
              }}>
                <Stat n="3.33M+" l="Registered physicians" />
                <Stat n="25K+"   l="Tertiary-hospital KOLs" />
                <Stat n="31"     l="Provincial-level regions covered" />
                <Stat n="6"      l="High-density hubs labelled" accent />
              </dl>

              <div style={{
                fontSize: 11, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono, var(--font-ui))',
                letterSpacing: '0.04em', marginTop: 20, lineHeight: 1.55,
              }}>
                Source: internal MedSci Healthcare registry · 2026-Q1.
                Per-city counts rounded for display; authoritative figures audited via PITL footer on each engagement.
              </div>
            </div>

            {/* RIGHT — SVG visualization */}
            <figure style={{ margin: 0, position: 'relative' }}>
              <NetworkMapSVG />
              <figcaption style={{
                fontSize: 11, color: 'var(--fg-3)',
                fontFamily: 'var(--font-mono, var(--font-ui))',
                letterSpacing: '0.04em', marginTop: 12,
                display: 'flex', flexWrap: 'wrap', gap: 18,
              }}>
                <LegendDot color="var(--brand-accent-500)" label="Physician density" />
                <LegendDot color="var(--brand-accent-500)" label="High-density hub" emphasis />
                <LegendDot color="var(--brand-primary-500)" label="Inter-hub link" line />
              </figcaption>
            </figure>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            #network .netfp-grid {
              grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.4fr) !important;
            }
          }
        `}</style>
      </section>
    );
  }

  function Stat({ n, l, accent }) {
    return (
      <React.Fragment>
        <dt style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 28, fontWeight: 600,
          color: accent ? 'var(--brand-accent-700, #007995)' : 'var(--brand-primary-700)',
          letterSpacing: '-0.02em', lineHeight: 1.05,
          alignSelf: 'baseline',
        }}>{n}</dt>
        <dd style={{
          margin: 0, fontSize: 13.5, lineHeight: 1.45,
          color: 'var(--fg-2)', alignSelf: 'baseline', paddingTop: 8,
        }}>{l}</dd>
      </React.Fragment>
    );
  }

  function LegendDot({ color, label, outline, line, emphasis }) {
    let glyph;
    if (line) {
      glyph = (
        <svg width="22" height="6" aria-hidden="true">
          <line x1="0" y1="3" x2="22" y2="3" stroke={color} strokeWidth="1" opacity="0.55" />
        </svg>
      );
    } else if (emphasis) {
      // Hub style: filled cyan dot inside a soft halo (matches map markers)
      glyph = (
        <svg width="14" height="14" aria-hidden="true">
          <circle cx="7" cy="7" r="6" fill={color} opacity="0.18" />
          <circle cx="7" cy="7" r="3.2" fill={color} />
        </svg>
      );
    } else {
      glyph = (
        <span aria-hidden="true" style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: outline ? 'transparent' : color,
          border: outline ? `1.5px solid ${color}` : 'none',
          opacity: outline ? 1 : 0.55,
        }} />
      );
    }
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>{glyph}{label}</span>;
  }

  // ----- Inner SVG ------------------------------------------------------
  function NetworkMapSVG() {
    return (
      <div style={{
        position: 'relative', width: '100%',
        background: 'linear-gradient(180deg, var(--bg-2, #fafbfc) 0%, var(--bg-1) 100%)',
        border: '1px solid var(--border-1)',
        borderRadius: 12, padding: 'clamp(8px, 1.2vw, 16px)',
      }}>
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width="100%"
          role="img"
          aria-labelledby="netmap-title netmap-desc"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: 'block', overflow: 'hidden' }}
        >
          <title id="netmap-title">MedSci physician-network distribution map</title>
          <desc id="netmap-desc">
            Zoomed-in view of MedSci Healthcare's physician-network density across central
            and eastern China. Clusters concentrate along the eastern coast — Beijing-Tianjin,
            Yangtze River Delta, and Pearl River Delta — with inland hubs in Chengdu, Wuhan,
            and Xi'an. Western and northeastern peripheries (Xinjiang, Tibet, far Heilongjiang)
            are out of frame.
          </desc>

          {/* --- subtle graticule (5° grid) --- */}
          <Graticule />

          {/* --- China silhouette: low-opacity navy fill + thin stroke.
                 Hand-simplified, included for shape recognition only. --- */}
          <g aria-hidden="true">
            <path d={polygonPath(CHINA_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
            <path d={polygonPath(HAINAN_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
            <path d={polygonPath(TAIWAN_OUTLINE, projectCN)}
              fill="var(--brand-primary-700)" fillOpacity="0.05"
              stroke="var(--brand-primary-500)" strokeOpacity="0.35" strokeWidth="0.8"
              strokeLinejoin="round" />
          </g>

          {/* --- density dots --- */}
          <g aria-hidden="true">
            {DENSITY_DOTS.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r}
                fill="var(--brand-accent-500)" opacity={d.op} />
            ))}
          </g>

          {/* --- intra-China connection lines (top hubs only) --- */}
          <g opacity="0.35" stroke="var(--brand-primary-500)" strokeWidth="0.6" fill="none">
            {CONNECTIONS_CN.map(([a, b], i) => {
              const A = cityCN(a), B = cityCN(b);
              if (!A || !B) return null;
              const [ax, ay] = projectCN(A.lng, A.lat);
              const [bx, by] = projectCN(B.lng, B.lat);
              return <line key={i} x1={ax} y1={ay} x2={bx} y2={by} />;
            })}
          </g>

          {/* --- city hub markers (large, labelled top hubs) --- */}
          <g>
            {CITIES_CN.map((c) => {
              const [x, y] = projectCN(c.lng, c.lat);
              const r = c.emphasis ? 5 : 3;
              return (
                <g key={c.code}>
                  {c.emphasis && (
                    <circle cx={x} cy={y} r={r + 4}
                      fill="var(--brand-accent-500)" opacity="0.18" />
                  )}
                  <circle cx={x} cy={y} r={r}
                    fill={c.emphasis ? 'var(--brand-accent-500)' : 'var(--brand-accent-700, #007995)'}
                    stroke="var(--bg-1)" strokeWidth={c.emphasis ? 1.5 : 0.8} />
                </g>
              );
            })}
          </g>

          {/* --- city labels (only emphasis cities) --- */}
          <g style={{
            fontFamily: 'var(--font-ui), Inter, system-ui, sans-serif',
            fontSize: 11, fontWeight: 600,
            fill: 'var(--brand-primary-700)',
            paintOrder: 'stroke',
            stroke: 'var(--bg-1)',
            strokeWidth: 3,
            strokeLinejoin: 'round',
          }}>
            {CITIES_CN.filter(c => c.label).map((c) => {
              const [x, y] = projectCN(c.lng, c.lat);
              const dx = c.label === 'NE' || c.label === 'SE' ? 9 : -9;
              const dy = c.label === 'NE' || c.label === 'NW' ? -8 : 14;
              const anchor = (c.label === 'NW' || c.label === 'SW') ? 'end' : 'start';
              return (
                <text key={c.code} x={x + dx} y={y + dy} textAnchor={anchor}>{c.name}</text>
              );
            })}
          </g>

        </svg>

        {/* Bottom-right viewBox label, anchors the visualization */}
        <div style={{
          position: 'absolute', right: 18, bottom: 14,
          fontFamily: 'var(--font-mono, var(--font-ui))',
          fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Equirect · simplified · not to scale
        </div>
      </div>
    );
  }

  function Graticule() {
    const lines = [];
    // Vertical (longitude) every 5° within the new zoom (99 → 126°E)
    for (let lng = 100; lng <= 125; lng += 5) {
      const [x] = projectCN(lng, CN_LAT_MIN);
      lines.push(<line key={`v${lng}`} x1={x} y1={0} x2={x} y2={VIEW_H}
        stroke="var(--border-1)" strokeWidth="0.5" opacity="0.4" />);
    }
    // Horizontal (latitude) every 5° within the new zoom (18 → 44°N)
    for (let lat = 20; lat <= 40; lat += 5) {
      const [, y] = projectCN(CN_LNG_MIN, lat);
      lines.push(<line key={`h${lat}`} x1={0} y1={y} x2={VIEW_W} y2={y}
        stroke="var(--border-1)" strokeWidth="0.5" opacity="0.4" />);
    }
    return <g aria-hidden="true">{lines}</g>;
  }

  // ----- Register component on window -----------------------------------
  if (typeof window !== 'undefined') {
    window.PhysicianNetworkMap = PhysicianNetworkMap;
  }
})();
