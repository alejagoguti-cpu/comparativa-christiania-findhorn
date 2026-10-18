import { useEffect, useState } from 'react';
import type { BeatSpec, ChartKind } from './content';

interface Props {
  spec: BeatSpec;
  cite: string;
  onChangeKind?: (k: ChartKind) => void;
}

const CHART_MODES: { id: ChartKind; label: string }[] = [
  { id: 'timeline', label: 'Curva / Hitos' },
  { id: 'radar', label: 'Radar' },
  { id: 'sankey', label: 'Flujo Sankey' },
  { id: 'donut', label: 'Anillos' },
  { id: 'bars', label: 'Barras' },
  { id: 'gauge', label: 'Diales' },
];

export function PremiumChart({ spec, cite, onChangeKind }: Props) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [filterSite, setFilterSite] = useState<'both' | 'chr' | 'fnd'>('both');
  const [localKind, setLocalKind] = useState<ChartKind>(spec.chartKind);

  useEffect(() => {
    setLocalKind(spec.chartKind);
    setActiveIdx(0);
  }, [spec.index, spec.chartKind]);

  const s = spec.series;
  const sel = s[activeIdx] || s[0];
  const showChr = filterSite !== 'fnd';
  const showFnd = filterSite !== 'chr';

  const selectKind = (k: ChartKind) => {
    setLocalKind(k);
    onChangeKind?.(k);
  };

  const diff = sel ? Math.round((sel.chr - sel.fnd) * 10) / 10 : 0;

  return (
    <div className="pchart-wrap">
      {/* Barra de controles interactivos del diagrama */}
      <div className="pchart-toolbar">
        <div className="pchart-modes" role="tablist" aria-label="Cambiar visualización del diagrama">
          {CHART_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              className={'pchart-mode-btn' + (localKind === m.id ? ' on' : '')}
              onClick={() => selectKind(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
        <div className="pchart-legend-Filter">
          <button
            type="button"
            className={'pchart-pill chr' + (filterSite === 'chr' ? ' on' : '')}
            onClick={() => setFilterSite(filterSite === 'chr' ? 'both' : 'chr')}
            title="Filtrar o resaltar Freetown Christiania"
          >
            <i /> DK
          </button>
          <button
            type="button"
            className={'pchart-pill fnd' + (filterSite === 'fnd' ? ' on' : '')}
            onClick={() => setFilterSite(filterSite === 'fnd' ? 'both' : 'fnd')}
            title="Filtrar o resaltar Ecoaldea Findhorn"
          >
            <i /> UK
          </button>
        </div>
      </div>

      {/* Lienzo SVG interactivo con gradientes, glows y animaciones */}
      <div className="pchart-canvas">
        {localKind === 'timeline' && (
          <TimelineAreaChart series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
        {localKind === 'radar' && (
          <InteractiveRadarChart series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
        {localKind === 'donut' && (
          <ConcentricRingsChart series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
        {(localKind === 'sankey' || localKind === 'stacked') && (
          <AlluvialFlowChart series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
        {localKind === 'gauge' && (
          <DualGaugeDialChart series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
        {(localKind === 'bars' || localKind === 'matrix') && (
          <DivergingGlowBars series={s} activeIdx={activeIdx} onSelect={setActiveIdx} showChr={showChr} showFnd={showFnd} />
        )}
      </div>

      {/* Inspector interactivo inferior: muestra el texto completo sin truncar y el delta exacto al pasar el cursor o tocar */}
      {sel && (
        <div className="pchart-inspector">
          <div className="pci-top">
            <span className="pci-idx">0{activeIdx + 1}</span>
            <span className="pci-label">{sel.label}</span>
            <span className="pci-cite">{cite}</span>
          </div>
          <div className="pci-metrics">
            <div className={'pci-val chr' + (!showChr ? ' dim' : '')}>
              <span>🇩🇰 Christiania</span>
              <strong>
                {sel.chr}
                {sel.unit ? ' ' + sel.unit : '%'}
              </strong>
            </div>
            <div className="pci-delta">
              <span>Δ Diferencial</span>
              <strong>
                {diff > 0 ? `+${diff} DK` : diff < 0 ? `+${Math.abs(diff)} UK` : 'Paridad'}
              </strong>
            </div>
            <div className={'pci-val fnd' + (!showFnd ? ' dim' : '')}>
              <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn</span>
              <strong>
                {sel.fnd}
                {sel.unit ? ' ' + sel.unit : '%'}
              </strong>
            </div>
          </div>
          {/* Selector rápido de variables por chips */}
          <div className="pci-chips">
            {s.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                className={'pci-chip' + (idx === activeIdx ? ' on' : '')}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="n">0{idx + 1}</span>
                <span className="t">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface SubChartProps {
  series: BeatSpec['series'];
  activeIdx: number;
  onSelect: (i: number) => void;
  showChr: boolean;
  showFnd: boolean;
}

// ----------------------------------------------------------------------------------
// 1. TIMELINE / SPLINE AREA CHART (con curvas suaves Bézier, áreas luminosas y nodos)
// ----------------------------------------------------------------------------------
function TimelineAreaChart({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const padL = 28;
  const padR = 24;
  const padT = 22;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 100);

  const ptsChr = series.map((item, i) => ({
    x: padL + (i / Math.max(1, series.length - 1)) * plotW,
    y: padT + plotH - (item.chr / maxVal) * plotH,
    v: item.chr,
    label: item.label,
    unit: item.unit || '%',
  }));

  const ptsFnd = series.map((item, i) => ({
    x: padL + (i / Math.max(1, series.length - 1)) * plotW,
    y: padT + plotH - (item.fnd / maxVal) * plotH,
    v: item.fnd,
    label: item.label,
    unit: item.unit || '%',
  }));

  const smoothPath = (pts: { x: number; y: number }[]) => {
    if (!pts.length) return '';
    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cpx1 = p0.x + (p1.x - p0.x) * 0.45;
      const cpx2 = p1.x - (p1.x - p0.x) * 0.45;
      d += ` C ${cpx1.toFixed(1)} ${p0.y.toFixed(1)}, ${cpx2.toFixed(1)} ${p1.y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
    }
    return d;
  };

  const lineChr = smoothPath(ptsChr);
  const areaChr = `${lineChr} L ${ptsChr[ptsChr.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${ptsChr[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const lineFnd = smoothPath(ptsFnd);
  const areaFnd = `${lineFnd} L ${ptsFnd[ptsFnd.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${ptsFnd[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const actX = ptsChr[activeIdx]?.x ?? padL;

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      <defs>
        <linearGradient id="gradChr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6956a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e6956a" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="gradFnd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fbf8e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7fbf8e" stopOpacity="0.0" />
        </linearGradient>
        <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rejilla horizontal técnica */}
      {[0, 0.25, 0.5, 0.75, 1].map((f) => {
        const y = padT + plotH * (1 - f);
        return (
          <g key={f}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#1d1d28" strokeDasharray={f === 0 ? undefined : '3 3'} />
            <text x={padL - 6} y={y + 3} textAnchor="end" fill="#686878" fontSize="8" fontFamily="var(--mono)">
              {Math.round(maxVal * f)}
            </text>
          </g>
        );
      })}

      {/* Cursor vertical en el nodo seleccionado */}
      <line x1={actX} y1={padT - 6} x2={actX} y2={padT + plotH} stroke="#ebe5d9" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />

      {showChr && (
        <g>
          <path d={areaChr} fill="url(#gradChr)" />
          <path d={lineChr} fill="none" stroke="#e6956a" strokeWidth="2.6" filter="url(#glowLine)" />
          <path d={lineChr} fill="none" stroke="#fff" strokeWidth="1.8" strokeDasharray="4 28" className="pchart-flow-anim" />
        </g>
      )}

      {showFnd && (
        <g>
          <path d={areaFnd} fill="url(#gradFnd)" />
          <path d={lineFnd} fill="none" stroke="#7fbf8e" strokeWidth="2.6" filter="url(#glowLine)" />
          <path d={lineFnd} fill="none" stroke="#fff" strokeWidth="1.8" strokeDasharray="4 28" className="pchart-flow-anim" />
        </g>
      )}

      {/* Nodos interactivos por cada hito temporal */}
      {series.map((item, i) => {
        const pC = ptsChr[i];
        const pF = ptsFnd[i];
        const isAct = i === activeIdx;
        const shortTag = item.label.includes('·') ? item.label.split('·')[0].trim() : item.label.slice(0, 12);
        return (
          <g
            key={item.label}
            className="pchart-hit-col"
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            <rect x={pC.x - 24} y={padT - 10} width="48" height={plotH + 34} fill="transparent" />
            {showChr && (
              <g transform={`translate(${pC.x}, ${pC.y})`}>
                {isAct && <circle r="9" fill="rgba(230,149,106,0.28)" className="pchart-ping" />}
                <circle r={isAct ? 5.5 : 4} fill="#0b0b10" stroke="#e6956a" strokeWidth={isAct ? 2.5 : 1.8} />
                <text y="-8" textAnchor="middle" fill="#f5d3be" fontSize={isAct ? '9.5' : '8.5'} fontWeight="700" fontFamily="var(--mono)">
                  {pC.v}
                </text>
              </g>
            )}
            {showFnd && (
              <g transform={`translate(${pF.x}, ${pF.y})`}>
                {isAct && <circle r="9" fill="rgba(127,191,142,0.28)" className="pchart-ping" />}
                <circle r={isAct ? 5.5 : 4} fill="#0b0b10" stroke="#7fbf8e" strokeWidth={isAct ? 2.5 : 1.8} />
                <text y="15" textAnchor="middle" fill="#ccebd4" fontSize={isAct ? '9.5' : '8.5'} fontWeight="700" fontFamily="var(--mono)">
                  {pF.v}
                </text>
              </g>
            )}
            <text
              x={pC.x}
              y={H - 10}
              textAnchor="middle"
              fill={isAct ? '#ffffff' : '#9a9aa8'}
              fontSize={isAct ? '9.5' : '8.5'}
              fontWeight={isAct ? '700' : '500'}
              fontFamily="var(--mono)"
            >
              {shortTag}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------------
// 2. RADAR MULTIDIMENSIONAL INTERACTIVO (con anillos concéntricos y ejes seleccionables)
// ----------------------------------------------------------------------------------
function InteractiveRadarChart({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const cx = 112;
  const cy = 82;
  const R = 58;
  const n = series.length;
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 100);

  const coord = (i: number, val: number) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / n;
    const r = (Math.min(maxVal, Math.max(4, val)) / maxVal) * R;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), a };
  };

  const polyChr = series.map((item, i) => {
    const p = coord(i, item.chr);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(' ');

  const polyFnd = series.map((item, i) => {
    const p = coord(i, item.fnd);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(' ');

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <circle key={f} cx={cx} cy={cy} r={R * f} fill="none" stroke={f === 1 ? '#343444' : '#20202b'} strokeDasharray={f === 1 ? undefined : '2 3'} />
      ))}

      {series.map((item, i) => {
        const end = coord(i, maxVal);
        const isAct = i === activeIdx;
        return (
          <g key={item.label} onMouseEnter={() => onSelect(i)} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <line x1={cx} y1={cy} x2={end.x} y2={end.y} stroke={isAct ? '#ebe5d9' : '#2a2a38'} strokeWidth={isAct ? 1.8 : 1} />
            <circle
              cx={cx + (R + 13) * Math.cos(end.a)}
              cy={cy + (R + 13) * Math.sin(end.a)}
              r={isAct ? 9 : 7}
              fill={isAct ? '#ebe5d9' : '#171720'}
              stroke="#3a3a48"
            />
            <text
              x={cx + (R + 13) * Math.cos(end.a)}
              y={cy + (R + 13) * Math.sin(end.a) + 3}
              textAnchor="middle"
              fill={isAct ? '#000' : '#bbb'}
              fontSize="8"
              fontWeight="700"
              fontFamily="var(--mono)"
            >
              0{i + 1}
            </text>
          </g>
        );
      })}

      {showChr && (
        <g>
          <polygon points={polyChr} fill="rgba(230,149,106,0.28)" stroke="#e6956a" strokeWidth="2.2" />
          {series.map((item, i) => {
            const p = coord(i, item.chr);
            return (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={i === activeIdx ? 5 : 3.2}
                fill="#e6956a"
                stroke="#000"
                strokeWidth="1.2"
                onMouseEnter={() => onSelect(i)}
                onClick={() => onSelect(i)}
                style={{ cursor: 'pointer' }}
              />
            );
          })}
        </g>
      )}

      {showFnd && (
        <g>
          <polygon points={polyFnd} fill="rgba(127,191,142,0.28)" stroke="#7fbf8e" strokeWidth="2.2" />
          {series.map((item, i) => {
            const p = coord(i, item.fnd);
            return (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={i === activeIdx ? 5 : 3.2}
                fill="#7fbf8e"
                stroke="#000"
                strokeWidth="1.2"
                onMouseEnter={() => onSelect(i)}
                onClick={() => onSelect(i)}
                style={{ cursor: 'pointer' }}
              />
            );
          })}
        </g>
      )}

      {/* Tarjetas laterales de lectura de cada eje */}
      {series.slice(0, 4).map((item, i) => {
        const isAct = i === activeIdx;
        const y = 18 + i * 36;
        return (
          <g
            key={item.label}
            transform={`translate(198, ${y})`}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="-6"
              y="-10"
              width="160"
              height="31"
              rx="6"
              fill={isAct ? 'rgba(235,229,217,0.1)' : 'rgba(20,20,28,0.6)'}
              stroke={isAct ? '#ebe5d9' : '#242430'}
            />
            <text x="0" y="2" fill={isAct ? '#fff' : '#ccc'} fontSize="9" fontWeight={isAct ? '700' : '500'} fontFamily="var(--sans)">
              0{i + 1} · {item.label.length > 22 ? item.label.slice(0, 22) + '…' : item.label}
            </text>
            <text x="0" y="14" fill="#e6956a" fontSize="8.8" fontWeight="600" fontFamily="var(--mono)">
              DK: {item.chr}{item.unit || '%'}
            </text>
            <text x="76" y="14" fill="#7fbf8e" fontSize="8.8" fontWeight="600" fontFamily="var(--mono)">
              UK: {item.fnd}{item.unit || '%'}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------------
// 3. ANILLOS CONCÉNTRICOS RADIALES (Concentric Radial Gauges)
// ----------------------------------------------------------------------------------
function ConcentricRingsChart({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 100);

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      {series.slice(0, 3).map((item, i) => {
        const r = 56 - i * 15;
        const circ = 2 * Math.PI * r;
        const lenChr = (Math.min(maxVal, item.chr) / maxVal) * (circ * 0.75);
        const lenFnd = (Math.min(maxVal, item.fnd) / maxVal) * (circ * 0.75);
        const isAct = i === activeIdx;

        return (
          <g
            key={item.label}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            {/* Anillo Christiania (Izquierda) */}
            <g transform="translate(82, 84) rotate(135)">
              <circle r={r} fill="none" stroke="#1b1b24" strokeWidth={isAct ? 9 : 7} strokeDasharray={`${circ * 0.75} ${circ}`} strokeLinecap="round" />
              {showChr && (
                <circle
                  r={r}
                  fill="none"
                  stroke={isAct ? '#ffad80' : '#e6956a'}
                  strokeWidth={isAct ? 9.5 : 7}
                  strokeDasharray={`${lenChr} ${circ}`}
                  strokeLinecap="round"
                  opacity={isAct ? 1 : 0.78}
                />
              )}
            </g>

            {/* Anillo Findhorn (Derecha) */}
            <g transform="translate(278, 84) rotate(135)">
              <circle r={r} fill="none" stroke="#1b1b24" strokeWidth={isAct ? 9 : 7} strokeDasharray={`${circ * 0.75} ${circ}`} strokeLinecap="round" />
              {showFnd && (
                <circle
                  r={r}
                  fill="none"
                  stroke={isAct ? '#9be0ac' : '#7fbf8e'}
                  strokeWidth={isAct ? 9.5 : 7}
                  strokeDasharray={`${lenFnd} ${circ}`}
                  strokeLinecap="round"
                  opacity={isAct ? 1 : 0.78}
                />
              )}
            </g>
          </g>
        );
      })}

      {/* Centros de ambos medidores */}
      <text x="82" y="82" textAnchor="middle" fill="#e6956a" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
        {series[activeIdx]?.chr ?? 0}{series[activeIdx]?.unit || '%'}
      </text>
      <text x="82" y="95" textAnchor="middle" fill="#888" fontSize="8" fontFamily="var(--mono)">CHRISTIANIA</text>

      <text x="278" y="82" textAnchor="middle" fill="#7fbf8e" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
        {series[activeIdx]?.fnd ?? 0}{series[activeIdx]?.unit || '%'}
      </text>
      <text x="278" y="95" textAnchor="middle" fill="#888" fontSize="8" fontFamily="var(--mono)">FINDHORN</text>

      {/* Columna central de conectores */}
      {series.slice(0, 3).map((item, i) => {
        const y = 42 + i * 38;
        const isAct = i === activeIdx;
        return (
          <g
            key={item.label}
            transform={`translate(180, ${y})`}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            <rect x="-46" y="-12" width="92" height="26" rx="6" fill={isAct ? '#ebe5d9' : '#15151e'} stroke="#333342" />
            <text x="0" y="0" textAnchor="middle" fill={isAct ? '#000' : '#ddd'} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">
              0{i + 1} · ANILLO
            </text>
            <text x="0" y="10" textAnchor="middle" fill={isAct ? '#222' : '#999'} fontSize="8" fontFamily="var(--sans)">
              {item.label.slice(0, 14)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------------
// 4. DIAGRAMA ALUVIAL / SANKEY ANIMADO (Flujos curvos con partículas en movimiento)
// ----------------------------------------------------------------------------------
function AlluvialFlowChart({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 100);

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      {/* Nodo Origen Izquierdo: Christiania */}
      <rect x="14" y="24" width="16" height="118" rx="5" fill="#2b1a10" stroke="#e6956a" strokeWidth="1.5" />
      <text x="22" y="16" textAnchor="middle" fill="#e6956a" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">DK</text>

      {/* Nodo Origen Derecho: Findhorn */}
      <rect x={W - 30} y="24" width="16" height="118" rx="5" fill="#102617" stroke="#7fbf8e" strokeWidth="1.5" />
      <text x={W - 22} y="16" textAnchor="middle" fill="#7fbf8e" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">UK</text>

      {series.slice(0, 4).map((item, i) => {
        const y = 34 + i * 32;
        const isAct = i === activeIdx;
        const wChr = Math.max(2, (item.chr / maxVal) * 14);
        const wFnd = Math.max(2, (item.fnd / maxVal) * 14);
        const pathChr = `M 30 ${y} C 78 ${y}, 86 ${y}, 118 ${y}`;
        const pathFnd = `M ${W - 30} ${y} C ${W - 78} ${y}, ${W - 86} ${y}, ${W - 118} ${y}`;

        return (
          <g
            key={item.label}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            {showChr && (
              <>
                <path d={pathChr} fill="none" stroke="#e6956a" strokeWidth={wChr} strokeOpacity={isAct ? 0.65 : 0.28} />
                <path d={pathChr} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 18" className="pchart-flow-anim" opacity={isAct ? 0.95 : 0.4} />
              </>
            )}
            {showFnd && (
              <>
                <path d={pathFnd} fill="none" stroke="#7fbf8e" strokeWidth={wFnd} strokeOpacity={isAct ? 0.65 : 0.28} />
                <path d={pathFnd} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 18" className="pchart-flow-anim" opacity={isAct ? 0.95 : 0.4} />
              </>
            )}

            {/* Caja central homologada */}
            <rect
              x="116"
              y={y - 12}
              width="128"
              height="24"
              rx="7"
              fill={isAct ? '#1f1f2b' : '#111118'}
              stroke={isAct ? '#ebe5d9' : '#2d2d3a'}
              strokeWidth={isAct ? 1.6 : 1}
            />
            <text x="180" y={y - 1} textAnchor="middle" fill={isAct ? '#fff' : '#ccc'} fontSize="8.8" fontWeight="600" fontFamily="var(--sans)">
              {item.label.length > 20 ? item.label.slice(0, 20) + '…' : item.label}
            </text>
            <text x="144" y={y + 9} textAnchor="middle" fill="#e6956a" fontSize="8.2" fontWeight="700" fontFamily="var(--mono)">
              {item.chr}{item.unit || '%'}
            </text>
            <text x="216" y={y + 9} textAnchor="middle" fill="#7fbf8e" fontSize="8.2" fontWeight="700" fontFamily="var(--mono)">
              {item.fnd}{item.unit || '%'}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------------
// 5. DIALES VELOCÍMETRO COMPARATIVOS (Dual Semi-Circular Gauge Meters)
// ----------------------------------------------------------------------------------
function DualGaugeDialChart({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const sel = series[activeIdx] || series[0];
  const maxVal = Math.max(sel.chr, sel.fnd, 100);
  const r = 52;
  const arcLen = Math.PI * r;
  const chrDash = (sel.chr / maxVal) * arcLen;
  const fndDash = (sel.fnd / maxVal) * arcLen;

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      {/* Medidor Izquierdo: Christiania */}
      <g transform="translate(95, 108)">
        <path d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`} fill="none" stroke="#1d1d28" strokeWidth="13" strokeLinecap="round" />
        {showChr && (
          <path
            d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
            fill="none"
            stroke="#e6956a"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${chrDash} ${arcLen}`}
          />
        )}
        <text x="0" y="-14" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="var(--mono)">
          {sel.chr}
        </text>
        <text x="0" y="2" textAnchor="middle" fill="#e6956a" fontSize="8.5" fontFamily="var(--mono)">
          🇩🇰 CHRISTIANIA ({sel.unit || 'pts'})
        </text>
      </g>

      {/* Medidor Derecho: Findhorn */}
      <g transform="translate(265, 108)">
        <path d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`} fill="none" stroke="#1d1d28" strokeWidth="13" strokeLinecap="round" />
        {showFnd && (
          <path
            d={`M ${-r} 0 A ${r} ${r} 0 0 1 ${r} 0`}
            fill="none"
            stroke="#7fbf8e"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={`${fndDash} ${arcLen}`}
          />
        )}
        <text x="0" y="-14" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700" fontFamily="var(--mono)">
          {sel.fnd}
        </text>
        <text x="0" y="2" textAnchor="middle" fill="#7fbf8e" fontSize="8.5" fontFamily="var(--mono)">
          🏴󠁧󠁢󠁳󠁣󠁴󠁿 FINDHORN ({sel.unit || 'pts'})
        </text>
      </g>

      {/* Selector de métricas abajo */}
      {series.map((item, i) => {
        const bw = (W - 28) / series.length;
        const x = 14 + i * bw;
        const isAct = i === activeIdx;
        return (
          <g
            key={item.label}
            transform={`translate(${x}, 130)`}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            <rect x="2" y="0" width={bw - 4} height="24" rx="6" fill={isAct ? '#ebe5d9' : '#14141d'} stroke="#2e2e3c" />
            <text x={bw / 2} y="15" textAnchor="middle" fill={isAct ? '#000' : '#ccc'} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">
              0{i + 1} · {item.label.slice(0, 12)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------------
// 6. BARRAS HORIZONTALES PREMIUM CON TRACK, DELTA E INDICADOR DE HOVER
// ----------------------------------------------------------------------------------
function DivergingGlowBars({ series, activeIdx, onSelect, showChr, showFnd }: SubChartProps) {
  const W = 360;
  const H = 165;
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 1);

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      <defs>
        <linearGradient id="barGradChr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9e5530" />
          <stop offset="100%" stopColor="#ffad80" />
        </linearGradient>
        <linearGradient id="barGradFnd" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#356e44" />
          <stop offset="100%" stopColor="#9be0ac" />
        </linearGradient>
      </defs>

      {series.slice(0, 4).map((item, i) => {
        const rowH = series.length > 3 ? 38 : 48;
        const y = 8 + i * rowH;
        const isAct = i === activeIdx;
        const wChr = showChr ? Math.max(8, (item.chr / maxVal) * 230) : 0;
        const wFnd = showFnd ? Math.max(8, (item.fnd / maxVal) * 230) : 0;

        return (
          <g
            key={item.label}
            transform={`translate(10, ${y})`}
            onMouseEnter={() => onSelect(i)}
            onClick={() => onSelect(i)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="-4"
              y="-2"
              width={W - 12}
              height={rowH - 3}
              rx="7"
              fill={isAct ? 'rgba(235,229,217,0.07)' : 'transparent'}
              stroke={isAct ? 'rgba(235,229,217,0.35)' : 'transparent'}
            />
            <text x="2" y="10" fill={isAct ? '#ffffff' : '#d0d0dc'} fontSize="9.8" fontWeight={isAct ? '700' : '500'} fontFamily="var(--sans)">
              0{i + 1} · {item.label}
            </text>

            {/* Barra Christiania */}
            <rect x="2" y="14" width="230" height="7" rx="3.5" fill="#171720" />
            {showChr && <rect x="2" y="14" width={wChr} height="7" rx="3.5" fill="url(#barGradChr)" />}
            <text x="240" y="20.5" fill="#f5d3be" fontSize="9" fontWeight="700" fontFamily="var(--mono)">
              DK: {item.chr}{item.unit ? ' ' + item.unit : ''}
            </text>

            {/* Barra Findhorn */}
            <rect x="2" y="24" width="230" height="7" rx="3.5" fill="#171720" />
            {showFnd && <rect x="2" y="24" width={wFnd} height="7" rx="3.5" fill="url(#barGradFnd)" />}
            <text x="240" y="30.5" fill="#ccebd4" fontSize="9" fontWeight="700" fontFamily="var(--mono)">
              UK: {item.fnd}{item.unit ? ' ' + item.unit : ''}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
