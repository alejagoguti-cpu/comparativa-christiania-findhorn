import { useEffect, useState } from 'react';
import { COLORS, type BeatSpec, type ChartKind } from './content';

interface PremiumChartProps {
  spec: BeatSpec;
  cite: string;
  onChangeKind?: (kind: ChartKind) => void;
}

// Catálogo de los 40 Arquetipos Visuales Únicos (uno distinto para cada uno de los 40 planos de 30 segundos)
export const DIAGRAM_ARCHETYPES: { code: string; name: string; subtitle: string }[] = [
  { code: 'D-01', name: 'Esferas Territoriales Homologadas', subtitle: 'Proporción geométrica de superficie (ha)' },
  { code: 'D-02', name: 'Perfil Estratigráfico de Baluartes', subtitle: 'Composición de la fortificación s. XVII (%)' },
  { code: 'D-03', name: 'Transecto Costero Dunar', subtitle: 'Gradiente ecológico Moray Firth → Cullerne (%)' },
  { code: 'D-04', name: 'Rosa de los Vientos Tetradimensional', subtitle: 'Brújula polar de inserción urbana vs. rural' },
  { code: 'D-05', name: 'Superposición Vectorial de Perímetros', subtitle: 'Cotas comparadas 3,4 km vs. 2,6 km' },
  { code: 'D-06', name: 'Matriz Reticular de Hectáreas (Waffle)', subtitle: 'Mosaico de 34 vs. 30 celdas de uso de suelo' },
  { code: 'D-07', name: 'Pirámide Demográfica Bilateral', subtitle: 'Estructura intergeneracional y densidad hab/ha' },
  { code: 'D-08', name: 'Vórtice Logarítmico de Visitantes', subtitle: 'Escala 1:1.050 turistas vs. 1:18 estudiantes' },
  { code: 'D-09', name: 'Coordenadas Paralelas de Carga', subtitle: 'Pendientes de impacto sobre convivencia' },
  { code: 'D-10', name: 'Anillo Circadiano Días-Persona/Año', subtitle: 'Equilibrio metabólico ponderado por estancia' },
  { code: 'D-11', name: 'Árbol Fiduciario Sin Propiedad Privada', subtitle: 'Arquitectura Estado → Fundación → Uso Vecinal' },
  { code: 'D-12', name: 'Triángulo Ternario de Titularidad', subtitle: 'Reparto polinuclear Fundación / PET / Privados' },
  { code: 'D-13', name: 'Grafo de Gobernanza Asamblearia vs. NFA', subtitle: 'Topología de consenso directo vs. red sociocrática' },
  { code: 'D-14', name: 'Cascada de Capitalización del Suelo', subtitle: 'Folkeaktier solidarias vs. banca ética Triodos' },
  { code: 'D-15', name: 'Flujo Aluvial de Blindaje Jurídico', subtitle: 'Transmisión de derechos y seguridad de tenencia' },
  { code: 'D-16', name: 'Sismógrafo de Ruptura (1971–1989)', subtitle: 'Pulsos de ocupación civil y resistencia vecinal' },
  { code: 'D-17', name: 'Conversión Patrimonial Castrense', subtitle: 'Transformación de cuarteles y polvorines (Lollipop)' },
  { code: 'D-18', name: 'Escalera Normativa Christianialoven', subtitle: 'Peldaños legales de 1989 a la Corte Suprema 2011' },
  { code: 'D-19', name: 'Ondas de Choque en Pusher Street', subtitle: 'Presión inmobiliaria (+340%) y tensión interna' },
  { code: 'D-20', name: 'Balanza Fiduciaria de 76,2 M DKK', subtitle: 'Equilibrio entre crédito garantizado y Folkeaktier' },
  { code: 'D-21', name: 'Arco de Regeneración Cívica (2012–2026)', subtitle: 'Trayectoria hacia la recuperación vecinal de 2024' },
  { code: 'D-22', name: 'Espiral Biodinámica de Sucesión (1962)', subtitle: 'Transformación orgánica de dunas estériles' },
  { code: 'D-23', name: 'Torres de Expansión del Campus Holístico', subtitle: 'Crecimiento de Eco-houses, red NFA y cursos' },
  { code: 'D-24', name: 'Tríada Ecotecnológica en Intersección', subtitle: 'Acoplamiento Eólica + Living Machine + Pasiva' },
  { code: 'D-25', name: 'Curva de Choque Térmico y Financiero (2021)', subtitle: 'Impacto acumulado de pandemia e incendio' },
  { code: 'D-26', name: 'Bifurcación Institucional (2023–Hoy)', subtitle: 'Separación entre Fundación educativa y comunidad' },
  { code: 'D-27', name: 'Doble Hélice Diacrónica (64 vs. 55 Años)', subtitle: 'Trayectorias evolutivas entrelazadas 1962–2026' },
  { code: 'D-28', name: 'Rueda Presupuestaria de la Fælleskasse', subtitle: 'Distribución circular del Brugerbetaling (%)' },
  { code: 'D-29', name: 'Circuito Monetario Ekopia & Ekos', subtitle: 'Flujo rotatorio de ahorro e inversión comunitaria' },
  { code: 'D-30', name: 'Puente Colgante de Homologación Fiscal', subtitle: 'Equivalencia funcional Fælleskasse ⇄ PET' },
  { code: 'D-31', name: 'Matriz de Oficios de Maskinhallen', subtitle: 'Indicadores de autoconstrucción y Christiania Bikes' },
  { code: 'D-32', name: 'Estrella de Difusión Global Gaia Education', subtitle: 'Irradiación pedagógica hacia >50 países' },
  { code: 'D-33', name: 'Plano Cartesiano 2×2 del Enfoque 3', subtitle: 'Desmercantilización vs. irradiación pedagógica' },
  { code: 'D-34', name: 'Corte de Infiltración Pluvial y Reciclaje', subtitle: 'Permeabilidad hacia Stadsgraven y reúso (82%)' },
  { code: 'D-35', name: 'Cascada de Reactores Living Machine', subtitle: 'Etapas anaerobia/aerobia y fitodepuración (98%)' },
  { code: 'D-36', name: 'Rotor Eólico y Balance de Micro-Red (675 kW)', subtitle: 'Autoconsumo (58%) y exportación neta (130%)' },
  { code: 'D-37', name: 'Esquema de Acometidas Municipales HOFOR', subtitle: 'Dependencia externa sanitaria y eléctrica en CPH' },
  { code: 'D-38', name: 'Osciloscopio Bidireccional Red Escocesa', subtitle: 'Importación en calma eólica vs. autonomía hídrica' },
  { code: 'D-39', name: 'Diagrama de Brecha Metabólica (Dumbbell)', subtitle: 'Distancia Low-Tech urbano vs. Eco-Tech rural' },
  { code: 'D-40', name: 'Heptágono Estelar de Síntesis 1.1', subtitle: 'Evaluación integral de las dimensiones comparadas' },
];

export function PremiumChart({ spec, cite }: PremiumChartProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [filterSite, setFilterSite] = useState<'both' | 'chr' | 'fnd'>('both');
  // Permite explorar el diagrama único propio del paso o previsualizar cualquiera de los 40 diseños
  const [customVariant, setCustomVariant] = useState<number | null>(null);

  useEffect(() => {
    setCustomVariant(null);
    setActiveIdx(0);
  }, [spec.index]);

  const variantIdx = customVariant !== null ? customVariant : spec.index % 40;
  const arch = DIAGRAM_ARCHETYPES[variantIdx] || DIAGRAM_ARCHETYPES[0];

  const s = spec.series;
  const safeIdx = Math.min(activeIdx, Math.max(0, s.length - 1));
  const curItem = s[safeIdx] || s[0] || { label: '', chr: 0, fnd: 0 };

  const diff = curItem.chr - curItem.fnd;
  const pctDiff =
    curItem.fnd !== 0
      ? Math.round((Math.abs(diff) / Math.max(curItem.chr, curItem.fnd, 1)) * 100)
      : 100;

  return (
    <div className="pchart-wrap" onClick={(e) => e.stopPropagation()}>
      {/* Barra superior con identificador único #01..#40 + navegador de las 40 geometrías + filtro DK/UK */}
      <div className="pchart-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0 }}>
          <span
            style={{
              font: '700 8.5px var(--mono)',
              background: '#ebe5d9',
              color: '#050508',
              padding: '2px 5px',
              borderRadius: 4,
              flex: 'none',
            }}
          >
            {arch.code}/40
          </span>
          <span
            style={{
              font: '600 9.5px var(--sans)',
              color: '#e8e9f2',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={arch.name}
          >
            {arch.name}
          </span>
        </div>

        <div className="pchart-legend-Filter">
          <button
            className="pchart-mode-btn"
            onClick={() => setCustomVariant(( variantIdx + 39 ) % 40)}
            title="Ver diseño de diagrama anterior (1 a 40)"
          >
            ◀
          </button>
          <button
            className="pchart-mode-btn"
            onClick={() => setCustomVariant(( variantIdx + 1 ) % 40)}
            title="Ver siguiente diseño de diagrama (1 a 40)"
          >
            ▶
          </button>
          <button
            className={'pchart-pill chr' + (filterSite !== 'fnd' ? ' on' : '')}
            onClick={() => setFilterSite(filterSite === 'chr' ? 'both' : 'chr')}
            title="Filtrar Freetown Christiania (Dinamarca)"
          >
            <i /> DK
          </button>
          <button
            className={'pchart-pill fnd' + (filterSite !== 'chr' ? ' on' : '')}
            onClick={() => setFilterSite(filterSite === 'fnd' ? 'both' : 'fnd')}
            title="Filtrar Ecoaldea Findhorn (Escocia)"
          >
            <i /> UK
          </button>
        </div>
      </div>

      {/* Lienzo SVG con 40 geometrías distintas (1 por cada plano de 30s) */}
      <div className="pchart-canvas">
        <UniqueFortyDiagramSvg
          variant={variantIdx}
          series={s}
          activeIdx={safeIdx}
          onSelect={setActiveIdx}
          filterSite={filterSite}
        />
      </div>

      {/* Inspector interactivo inferior sin textos cortados */}
      <div className="pchart-inspector">
        <div className="pci-top">
          <span className="pci-idx">#{safeIdx + 1}</span>
          <span className="pci-label">{curItem.label}</span>
          <span className="pci-cite">Fuente: {cite}</span>
        </div>
        <div className="pci-metrics">
          <div className={'pci-val chr' + (filterSite === 'fnd' ? ' dim' : '')}>
            <span>🇩🇰 Christiania</span>
            <strong>
              {curItem.chr}
              {curItem.unit ? ` ${curItem.unit}` : ''}
            </strong>
          </div>
          <div className={'pci-val fnd' + (filterSite === 'chr' ? ' dim' : '')}>
            <span>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn</span>
            <strong>
              {curItem.fnd}
              {curItem.unit ? ` ${curItem.unit}` : ''}
            </strong>
          </div>
          <div className="pci-delta">
            <span>Δ Diferencial</span>
            <strong>
              {diff === 0 ? 'Paridad' : `${diff > 0 ? 'DK +' : 'UK +'}${Math.abs(Number(diff.toFixed(1)))} (${pctDiff}%)`}
            </strong>
          </div>
        </div>
        <div className="pci-chips">
          {s.map((item, idx) => (
            <button
              key={item.label}
              className={'pci-chip' + (idx === safeIdx ? ' on' : '')}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="n">{idx + 1}</span>
              <span className="t">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MOTOR DE 40 DIAGRAMAS CIENTÍFICOS Y ARQUITECTÓNICOS ÚNICOS (variant 0..39)
// ============================================================================
function UniqueFortyDiagramSvg({
  variant,
  series,
  activeIdx,
  onSelect,
  filterSite,
}: {
  variant: number;
  series: BeatSpec['series'];
  activeIdx: number;
  onSelect: (i: number) => void;
  filterSite: 'both' | 'chr' | 'fnd';
}) {
  const W = 348;
  const H = 162;
  const showChr = filterSite !== 'fnd';
  const showFnd = filterSite !== 'chr';
  const maxVal = Math.max(...series.flatMap((x) => [x.chr, x.fnd]), 1);
  const n = series.length;

  const defs = (
    <defs>
      <linearGradient id="gChr" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={COLORS.orange} stopOpacity="0.85" />
        <stop offset="100%" stopColor={COLORS.orange} stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="gFnd" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={COLORS.green} stopOpacity="0.85" />
        <stop offset="100%" stopColor={COLORS.green} stopOpacity="0.2" />
      </linearGradient>
      <filter id="glow40" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );

  // --------------------------------------------------------------------------
  // D-01 (variant 0): Esferas Territoriales Homologadas con Puente Geodésico
  // --------------------------------------------------------------------------
  if (variant === 0) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        <path d="M 92 78 Q 174 18 256 78" fill="none" stroke="#ebe5d9" strokeWidth="1.5" strokeDasharray="4 4" className="pchart-flow-anim" />
        <text x="174" y="38" textAnchor="middle" fill="#ebe5d9" fontSize="8" fontFamily="var(--mono)">HOMOLOGACIÓN 14–34 HA</text>
        {series.map((item, i) => {
          const rChr = 16 + (item.chr / maxVal) * 34;
          const rFnd = 16 + (item.fnd / maxVal) * 34;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              {showChr && (
                <circle
                  cx={92}
                  cy={86}
                  r={rChr - i * 8}
                  fill={isAct ? 'rgba(230,149,106,0.22)' : 'none'}
                  stroke={COLORS.orange}
                  strokeWidth={isAct ? 2.5 : 1.2}
                  strokeDasharray={i === 1 ? '3 2' : undefined}
                />
              )}
              {showFnd && (
                <circle
                  cx={256}
                  cy={86}
                  r={rFnd - i * 8}
                  fill={isAct ? 'rgba(127,191,142,0.22)' : 'none'}
                  stroke={COLORS.green}
                  strokeWidth={isAct ? 2.5 : 1.2}
                  strokeDasharray={i === 1 ? '3 2' : undefined}
                />
              )}
            </g>
          );
        })}
        <text x="92" y="89" textAnchor="middle" fill={COLORS.orange} fontSize="11" fontWeight="700" fontFamily="var(--mono)">34 ha</text>
        <text x="92" y="146" textAnchor="middle" fill="#ccc" fontSize="8.5" fontFamily="var(--mono)">🇩🇰 55.67°N CPH</text>
        <text x="256" y="89" textAnchor="middle" fill={COLORS.green} fontSize="11" fontWeight="700" fontFamily="var(--mono)">14–30 ha</text>
        <text x="256" y="146" textAnchor="middle" fill="#ccc" fontSize="8.5" fontFamily="var(--mono)">🏴󠁧󠁢󠁳󠁣󠁴󠁿 57.65°N MORAY</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-02 (variant 1): Bastion Star Profile (Fortificación s. XVII y Canales)
  // --------------------------------------------------------------------------
  if (variant === 1) {
    const cx = 105;
    const cy = 82;
    const starPts = Array.from({ length: 12 }, (_, k) => {
      const a = (k * Math.PI) / 6;
      const r = k % 2 === 0 ? 54 : 32;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        <polygon points={starPts} fill="rgba(230,149,106,0.14)" stroke={COLORS.orange} strokeWidth="1.8" />
        <circle cx={cx} cy={cy} r="22" fill="rgba(110,168,214,0.2)" stroke="#6ea8d6" strokeDasharray="3 2" />
        <text x={cx} y={cy + 3} textAnchor="middle" fill="#fff" fontSize="8.5" fontFamily="var(--mono)">BALUARTE</text>
        {series.map((item, i) => {
          const y = 32 + i * 42;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} transform={`translate(180, ${y})`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <text x="0" y="-4" fill={isAct ? '#fff' : '#aaa'} fontSize="8.5" fontFamily="var(--sans)">{item.label.slice(0, 22)}</text>
              <rect x="0" y="2" width={(item.chr / 100) * 145} height="8" rx="4" fill={COLORS.orange} opacity={isAct ? 1 : 0.65} />
              <rect x="0" y="13" width={(item.fnd / 100) * 145} height="6" rx="3" fill={COLORS.green} opacity={isAct ? 0.9 : 0.5} />
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-03 (variant 2): Transecto Costero Dunar (Perfil Topográfico Ecológico)
  // --------------------------------------------------------------------------
  if (variant === 2) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        <path d="M 16 132 Q 70 62 128 96 T 236 58 T 332 110 L 332 142 L 16 142 Z" fill="url(#gFnd)" stroke={COLORS.green} strokeWidth="2" />
        <path d="M 16 136 Q 90 108 174 118 T 332 126" fill="none" stroke="#6ea8d6" strokeWidth="1.5" strokeDasharray="4 3" />
        {series.map((item, i) => {
          const x = 64 + i * 110;
          const y = 95 - (item.fnd / maxVal) * 42;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={x} y1={y} x2={x} y2={142} stroke="#ebe5d9" strokeDasharray="2 2" />
              <circle cx={x} cy={y} r={isAct ? 7 : 4.5} fill={COLORS.green} stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y - 10} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
              <text x={x} y={154} textAnchor="middle" fill={isAct ? '#ebe5d9' : '#999'} fontSize="8" fontFamily="var(--mono)">ZONA 0{i + 1}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-04 (variant 3): Rosa de los Vientos Tetradimensional (Compass Rose)
  // --------------------------------------------------------------------------
  if (variant === 3) {
    const cx = 174;
    const cy = 81;
    const R = 60;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        {[0.4, 0.75, 1].map((f) => (
          <circle key={f} cx={cx} cy={cy} r={R * f} fill="none" stroke="#252838" strokeDasharray="2 3" />
        ))}
        {series.map((item, i) => {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / n;
          const xChr = cx + ((item.chr / 100) * R) * Math.cos(a);
          const yChr = cy + ((item.chr / 100) * R) * Math.sin(a);
          const xFnd = cx + ((item.fnd / 100) * R) * Math.cos(a + 0.14);
          const yFnd = cy + ((item.fnd / 100) * R) * Math.sin(a + 0.14);
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={cx} y1={cy} x2={cx + R * Math.cos(a)} y2={cy + R * Math.sin(a)} stroke="#2e3144" />
              {showChr && <line x1={cx} y1={cy} x2={xChr} y2={yChr} stroke={COLORS.orange} strokeWidth={isAct ? 4 : 2.5} strokeLinecap="round" />}
              {showFnd && <line x1={cx} y1={cy} x2={xFnd} y2={yFnd} stroke={COLORS.green} strokeWidth={isAct ? 4 : 2.5} strokeLinecap="round" />}
              <circle cx={xChr} cy={yChr} r={isAct ? 4.5 : 3} fill={COLORS.orange} />
              <circle cx={xFnd} cy={yFnd} r={isAct ? 4.5 : 3} fill={COLORS.green} />
              <text
                x={cx + (R + 18) * Math.cos(a)}
                y={cy + (R + 12) * Math.sin(a) + 3}
                textAnchor="middle"
                fill={isAct ? '#fff' : '#9a9ca8'}
                fontSize="8"
                fontFamily="var(--mono)"
              >
                EJE 0{i + 1} ({item.chr}/{item.fnd})
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-05 (variant 4): Superposición Vectorial Isométrica de Polígonos
  // --------------------------------------------------------------------------
  if (variant === 4) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        {showChr && (
          <polygon
            points="45,125 85,28 245,22 295,95 210,138 95,140"
            fill="rgba(230,149,106,0.16)"
            stroke={COLORS.orange}
            strokeWidth="2.2"
          />
        )}
        {showFnd && (
          <polygon
            points="78,118 115,44 235,48 265,105 185,128"
            fill="rgba(127,191,142,0.18)"
            stroke={COLORS.green}
            strokeWidth="2.2"
            strokeDasharray="5 3"
          />
        )}
        {series.map((item, i) => {
          const x = 68 + i * 106;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} transform={`translate(${x}, 82)`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <rect x="-38" y="-22" width="76" height="44" rx="7" fill="rgba(10,11,17,0.88)" stroke={isAct ? '#ebe5d9' : '#323548'} />
              <text x="0" y="-6" textAnchor="middle" fill="#bbb" fontSize="7.5" fontFamily="var(--mono)">PARAM 0{i + 1}</text>
              <text x="0" y="7" textAnchor="middle" fill={COLORS.orange} fontSize="9.5" fontWeight="700" fontFamily="var(--mono)">DK: {item.chr}</text>
              <text x="0" y="18" textAnchor="middle" fill={COLORS.green} fontSize="9.5" fontWeight="700" fontFamily="var(--mono)">UK: {item.fnd}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-06 (variant 5): Matriz Reticular de Hectáreas (Waffle Grid 34 vs 30)
  // --------------------------------------------------------------------------
  if (variant === 5) {
    const colors = [COLORS.orange, '#7fbf8e', '#6ea8d6'];
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <text x="84" y="18" textAnchor="middle" fill={COLORS.orange} fontSize="9" fontWeight="700" fontFamily="var(--mono)">🇩🇰 34 HECTÁREAS</text>
        <text x="260" y="18" textAnchor="middle" fill={COLORS.green} fontSize="9" fontWeight="700" fontFamily="var(--mono)">🏴󠁧󠁢󠁳󠁣󠁴󠁿 30 HECTÁREAS</text>
        {Array.from({ length: 34 }, (_, k) => {
          const col = k % 7;
          const row = Math.floor(k / 7);
          const cat = k < 12 ? 0 : k < 26 ? 1 : 2;
          return (
            <rect
              key={`c${k}`}
              x={28 + col * 16}
              y={26 + row * 16}
              width="13"
              height="13"
              rx="2.5"
              fill={colors[cat]}
              opacity={activeIdx === cat ? 1 : 0.45}
              onClick={() => onSelect(cat)}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
        {Array.from({ length: 30 }, (_, k) => {
          const col = k % 6;
          const row = Math.floor(k / 6);
          const cat = k < 9 ? 0 : k < 24 ? 1 : 2;
          return (
            <rect
              key={`f${k}`}
              x={212 + col * 16}
              y={26 + row * 16}
              width="13"
              height="13"
              rx="2.5"
              fill={colors[cat]}
              opacity={activeIdx === cat ? 1 : 0.45}
              onClick={() => onSelect(cat)}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
        <text x="174" y="148" textAnchor="middle" fill="#aaa" fontSize="8" fontFamily="var(--mono)">Cada celda = 1 hectárea territorial</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-07 (variant 6): Pirámide / Mariposa Demográfica Bilateral
  // --------------------------------------------------------------------------
  if (variant === 6) {
    const mid = 174;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <line x1={mid} y1="16" x2={mid} y2="146" stroke="#444860" strokeWidth="1.5" />
        <text x={mid - 12} y="16" textAnchor="end" fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">← 🇩🇰 CHRISTIANIA</text>
        <text x={mid + 12} y="16" textAnchor="start" fill={COLORS.green} fontSize="8.5" fontFamily="var(--mono)">🏴󠁧󠁢󠁳󠁣󠁴󠁿 FINDHORN →</text>
        {series.map((item, i) => {
          const y = 32 + i * 38;
          const wChr = (item.chr / maxVal) * 135;
          const wFnd = (item.fnd / maxVal) * 135;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              {showChr && <rect x={mid - wChr - 3} y={y} width={wChr} height="16" rx="4" fill={COLORS.orange} opacity={isAct ? 1 : 0.65} />}
              {showFnd && <rect x={mid + 3} y={y} width={wFnd} height="16" rx="4" fill={COLORS.green} opacity={isAct ? 1 : 0.65} />}
              <text x={mid - wChr - 8} y={y + 11} textAnchor="end" fill="#fff" fontSize="8.5" fontFamily="var(--mono)">{item.chr}</text>
              <text x={mid + wFnd + 8} y={y + 11} textAnchor="start" fill="#fff" fontSize="8.5" fontFamily="var(--mono)">{item.fnd}</text>
              <text x={mid} y={y - 4} textAnchor="middle" fill={isAct ? '#ebe5d9' : '#999'} fontSize="8" fontFamily="var(--sans)">{item.label}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-08 (variant 7): Vórtice Logarítmico de Presión Turística (1:1.050 vs 1:18)
  // --------------------------------------------------------------------------
  if (variant === 7) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        {/* Embudo masivo Christiania */}
        <path d="M 24 24 L 154 24 L 104 134 L 74 134 Z" fill="url(#gChr)" stroke={COLORS.orange} strokeWidth="1.8" onClick={() => onSelect(0)} style={{ cursor: 'pointer' }} />
        <text x="89" y="48" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="var(--mono)">1.000.000 vis/año</text>
        <text x="89" y="64" textAnchor="middle" fill="#ffd4ba" fontSize="8.5" fontFamily="var(--mono)">Ratio 1 : 1.052</text>
        <text x="89" y="148" textAnchor="middle" fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">🇩🇰 Tránsito rápido (0,2 d)</text>

        {/* Embudo selectivo Findhorn */}
        <path d="M 225 56 L 285 56 L 268 134 L 242 134 Z" fill="url(#gFnd)" stroke={COLORS.green} strokeWidth="1.8" onClick={() => onSelect(1)} style={{ cursor: 'pointer' }} />
        <text x="255" y="46" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="var(--mono)">7.000 est/año</text>
        <text x="255" y="88" textAnchor="middle" fill="#c7f5d2" fontSize="8.5" fontFamily="var(--mono)">Ratio 1 : 18,6</text>
        <text x="255" y="148" textAnchor="middle" fill={COLORS.green} fontSize="8.5" fontFamily="var(--mono)">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Inmersión (7,5 d)</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-09 (variant 8): Coordenadas Paralelas Multicriterio (Slopegraph)
  // --------------------------------------------------------------------------
  if (variant === 8) {
    const xL = 78;
    const xR = 270;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <line x1={xL} y1="20" x2={xL} y2="144" stroke={COLORS.orange} strokeWidth="2" />
        <line x1={xR} y1="20" x2={xR} y2="144" stroke={COLORS.green} strokeWidth="2" />
        <text x={xL} y="14" textAnchor="middle" fill={COLORS.orange} fontSize="9" fontWeight="700" fontFamily="var(--mono)">🇩🇰 CHRISTIANIA</text>
        <text x={xR} y="14" textAnchor="middle" fill={COLORS.green} fontSize="9" fontWeight="700" fontFamily="var(--mono)">🏴󠁧󠁢󠁳󠁣󠁴󠁿 FINDHORN</text>
        {series.map((item, i) => {
          const y1 = 138 - (item.chr / 100) * 110;
          const y2 = 138 - (item.fnd / 100) * 110;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={xL} y1={y1} x2={xR} y2={y2} stroke={isAct ? '#ebe5d9' : '#585c78'} strokeWidth={isAct ? 2.8 : 1.4} />
              <circle cx={xL} cy={y1} r={isAct ? 5.5 : 3.5} fill={COLORS.orange} />
              <circle cx={xR} cy={y2} r={isAct ? 5.5 : 3.5} fill={COLORS.green} />
              <text x={xL - 8} y={y1 + 3} textAnchor="end" fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">{item.chr}%</text>
              <text x={xR + 8} y={y2 + 3} textAnchor="start" fill={COLORS.green} fontSize="8.5" fontFamily="var(--mono)">{item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-10 (variant 9): Anillo Circadiano de Ocupación Anual (Días-Persona)
  // --------------------------------------------------------------------------
  if (variant === 9) {
    const r = 44;
    const c = 2 * Math.PI * r;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {[{ x: 96, val: series[0]?.chr || 52, col: COLORS.orange, lb: '🇩🇰 DK 52% Res.' }, { x: 252, val: series[0]?.fnd || 72, col: COLORS.green, lb: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 UK 72% Res.' }].map((g, k) => (
          <g key={g.lb} transform={`translate(${g.x}, 80)`} onClick={() => onSelect(k % series.length)} style={{ cursor: 'pointer' }}>
            <circle r={r} fill="none" stroke="#222536" strokeWidth="12" />
            <circle
              r={r}
              fill="none"
              stroke={g.col}
              strokeWidth="12"
              strokeDasharray={`${(g.val / 100) * c} ${c}`}
              transform="rotate(-90)"
              strokeLinecap="round"
            />
            <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">{g.val}%</text>
            <text x="0" y="64" textAnchor="middle" fill={g.col} fontSize="8.5" fontFamily="var(--mono)">{g.lb}</text>
          </g>
        ))}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-11 (variant 10): Árbol Fiduciario Sin Propiedad Privada (Christiania 2012)
  // --------------------------------------------------------------------------
  if (variant === 10) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="114" y="10" width="120" height="24" rx="6" fill="#181a26" stroke="#ebe5d9" />
        <text x="174" y="25" textAnchor="middle" fill="#ebe5d9" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">ESTADO DANÉS (SUELO)</text>
        <path d="M 174 34 L 174 52 M 78 52 L 270 52 M 78 52 L 78 68 M 174 52 L 174 68 M 270 52 L 270 68" stroke="#666a86" strokeWidth="1.5" />
        {series.map((item, i) => {
          const x = 28 + i * 98;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} transform={`translate(${x}, 68)`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <rect width="94" height="68" rx="8" fill={isAct ? '#1b1e2e' : '#10121c'} stroke={isAct ? COLORS.orange : '#2c3044'} strokeWidth={isAct ? 2 : 1} />
              <text x="47" y="18" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 16)}</text>
              <text x="47" y="40" textAnchor="middle" fill={COLORS.orange} fontSize="12" fontWeight="700" fontFamily="var(--mono)">DK: {item.chr}%</text>
              <text x="47" y="56" textAnchor="middle" fill={COLORS.green} fontSize="9.5" fontFamily="var(--mono)">UK: {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-12 (variant 11): Triángulo Ternario de Titularidad Mixta (Findhorn)
  // --------------------------------------------------------------------------
  if (variant === 11) {
    const pts = [
      { x: 174, y: 20 },
      { x: 76, y: 138 },
      { x: 272, y: 138 },
    ];
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <polygon points="174,20 76,138 272,138" fill="rgba(127,191,142,0.12)" stroke={COLORS.green} strokeWidth="2" />
        <line x1="174" y1="20" x2="174" y2="98" stroke="#33384e" strokeDasharray="3 3" />
        <line x1="76" y1="138" x2="174" y2="98" stroke="#33384e" strokeDasharray="3 3" />
        <line x1="272" y1="138" x2="174" y2="98" stroke="#33384e" strokeDasharray="3 3" />
        {series.map((item, i) => {
          const p = pts[i % 3];
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={p.x} cy={p.y} r={isAct ? 16 : 12} fill="#10121c" stroke={i === 1 ? COLORS.orange : COLORS.green} strokeWidth="2.2" />
              <text x={p.x} y={p.y + 3} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
              <text x={p.x} y={i === 0 ? p.y - 14 : p.y + 22} textAnchor="middle" fill="#ddd" fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 20)}</text>
            </g>
          );
        })}
        <circle cx="174" cy="98" r="6" fill="#ebe5d9" />
        <text x="174" y="88" textAnchor="middle" fill="#ebe5d9" fontSize="8" fontFamily="var(--mono)">EQUILIBRIO MIXTO</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-13 (variant 12): Grafo de Red Asamblearia (14 Áreas) vs Policentrismo NFA
  // --------------------------------------------------------------------------
  if (variant === 12) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {/* Anillo de consenso Christiania */}
        <g transform="translate(90, 82)">
          <circle r="44" fill="none" stroke={COLORS.orange} strokeDasharray="3 3" />
          <circle r="14" fill="rgba(230,149,106,0.25)" stroke={COLORS.orange} strokeWidth="2" />
          <text x="0" y="3" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="var(--mono)">FÆLLESMØDE</text>
          {Array.from({ length: 14 }, (_, k) => {
            const a = (k * Math.PI * 2) / 14;
            return <circle key={k} cx={44 * Math.cos(a)} cy={44 * Math.sin(a)} r="3.5" fill={COLORS.orange} onClick={() => onSelect(k % n)} style={{ cursor: 'pointer' }} />;
          })}
          <text x="0" y="64" textAnchor="middle" fill={COLORS.orange} fontSize="8" fontFamily="var(--mono)">14 Áreas · Consenso</text>
        </g>
        {/* Red Policéntrica Findhorn */}
        <g transform="translate(256, 82)">
          {[[-24, -22], [26, -18], [0, 24], [-30, 18], [28, 22]].map(([nx, ny], k) => (
            <g key={k} onClick={() => onSelect(k % n)} style={{ cursor: 'pointer' }}>
              <line x1="0" y1="0" x2={nx} y2={ny} stroke={COLORS.green} strokeWidth="1.4" />
              <circle cx={nx} cy={ny} r="8" fill="#121816" stroke={COLORS.green} strokeWidth="1.8" />
            </g>
          ))}
          <circle r="13" fill="rgba(127,191,142,0.25)" stroke={COLORS.green} strokeWidth="2" />
          <text x="0" y="3" textAnchor="middle" fill="#fff" fontSize="7.5" fontFamily="var(--mono)">NFA+PET</text>
          <text x="0" y="64" textAnchor="middle" fill={COLORS.green} fontSize="8" fontFamily="var(--mono)">34 Org. · Sociocracia</text>
        </g>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-14 (variant 13): Cascada Financiera (Waterfall Capital Chart)
  // --------------------------------------------------------------------------
  if (variant === 13) {
    let accChr = 0;
    let accFnd = 0;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const x = 34 + i * 102;
          const hChr = (item.chr / 100) * 95;
          const hFnd = (item.fnd / 100) * 95;
          const yChr = 132 - accChr - hChr;
          const yFnd = 132 - accFnd - hFnd;
          accChr += hChr * 0.35;
          accFnd += hFnd * 0.35;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              {showChr && <rect x={x} y={yChr} width="32" height={Math.max(4, hChr)} rx="4" fill={COLORS.orange} opacity={isAct ? 1 : 0.7} />}
              {showFnd && <rect x={x + 36} y={yFnd} width="32" height={Math.max(4, hFnd)} rx="4" fill={COLORS.green} opacity={isAct ? 1 : 0.7} />}
              <text x={x + 16} y={yChr - 5} textAnchor="middle" fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">{item.chr}%</text>
              <text x={x + 52} y={yFnd - 5} textAnchor="middle" fill={COLORS.green} fontSize="8.5" fontFamily="var(--mono)">{item.fnd}%</text>
              <text x={x + 34} y="150" textAnchor="middle" fill={isAct ? '#fff' : '#999'} fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 14)}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-15 (variant 14): Flujo Aluvial de Blindaje Jurídico (Sankey Ribbons)
  // --------------------------------------------------------------------------
  if (variant === 14) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="12" y="34" width="12" height="94" rx="4" fill={COLORS.orange} />
        <rect x={W - 24} y="34" width="12" height="94" rx="4" fill={COLORS.green} />
        {series.map((item, i) => {
          const y = 38 + i * 40;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              {showChr && (
                <path
                  d={`M 24 ${50 + i * 26} C 80 ${50 + i * 26}, 95 ${y}, 122 ${y}`}
                  fill="none"
                  stroke={COLORS.orange}
                  strokeWidth={isAct ? 6 : 3.5}
                  strokeOpacity={isAct ? 0.9 : 0.45}
                />
              )}
              {showFnd && (
                <path
                  d={`M ${W - 24} ${50 + i * 26} C ${W - 80} ${50 + i * 26}, ${W - 95} ${y}, 226 ${y}`}
                  fill="none"
                  stroke={COLORS.green}
                  strokeWidth={isAct ? 6 : 3.5}
                  strokeOpacity={isAct ? 0.9 : 0.45}
                />
              )}
              <rect x="122" y={y - 12} width="104" height="24" rx="6" fill="#121420" stroke={isAct ? '#ebe5d9' : '#2d3146'} />
              <text x="174" y={y - 1} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 18)}</text>
              <text x="174" y={y + 8} textAnchor="middle" fill="#aaa" fontSize="7.5" fontFamily="var(--mono)">DK {item.chr}% · UK {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-16 (variant 15): Sismógrafo de Ruptura (1971–1989)
  // --------------------------------------------------------------------------
  if (variant === 15) {
    const pts = series.map((item, i) => ({
      x: 42 + i * 88,
      y: 128 - (item.chr / 100) * 92,
      yr: item.label.split('·')[0].trim(),
    }));
    const poly = pts.map((p) => `${p.x},${p.y}`).join(' ');
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        <line x1="20" y1="130" x2={W - 20} y2="130" stroke="#323548" />
        <polyline points={poly} fill="none" stroke={COLORS.orange} strokeWidth="2.8" filter="url(#glow40)" />
        {pts.map((p, i) => (
          <g key={p.yr} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <line x1={p.x} y1={p.y} x2={p.x} y2="130" stroke={COLORS.orange} strokeDasharray="2 3" />
            <circle cx={p.x} cy={p.y} r={i === activeIdx ? 7 : 4.5} fill={COLORS.orange} stroke="#fff" strokeWidth="1.5" />
            <text x={p.x} y={p.y - 10} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{series[i].chr}%</text>
            <text x={p.x} y="146" textAnchor="middle" fill={i === activeIdx ? '#ebe5d9' : '#999'} fontSize="8.5" fontFamily="var(--mono)">{p.yr}</text>
          </g>
        ))}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-17 (variant 16): Conversión Patrimonial Castrense (Lollipop Architectural)
  // --------------------------------------------------------------------------
  if (variant === 16) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const y = 34 + i * 44;
          const xChr = 95 + (item.chr / maxVal) * 210;
          const xFnd = 95 + (item.fnd / maxVal) * 210;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <text x="88" y={y + 4} textAnchor="end" fill={isAct ? '#fff' : '#aaa'} fontSize="8.5" fontFamily="var(--sans)">{item.label.slice(0, 15)}</text>
              <line x1="95" y1={y - 4} x2={xChr} y2={y - 4} stroke={COLORS.orange} strokeWidth="3" />
              <circle cx={xChr} cy={y - 4} r="6" fill={COLORS.orange} />
              <text x={xChr + 10} y={y - 1} fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">{item.chr} ud</text>
              <line x1="95" y1={y + 8} x2={xFnd} y2={y + 8} stroke={COLORS.green} strokeWidth="2.5" strokeDasharray="3 2" />
              <circle cx={xFnd} cy={y + 8} r="4.5" fill={COLORS.green} />
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-18 (variant 17): Escalera Normativa Christianialoven (Step Horizon Chart)
  // --------------------------------------------------------------------------
  if (variant === 17) {
    const pts = series.map((item, i) => ({
      x: 34 + i * 90,
      y: 132 - (item.chr / 100) * 95,
      yr: item.label.split('·')[0].trim(),
    }));
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      d += ` H ${pts[i].x} V ${pts[i].y}`;
    }
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <path d={`${d} V 136 H ${pts[0].x} Z`} fill="rgba(230,149,106,0.16)" />
        <path d={d} fill="none" stroke={COLORS.orange} strokeWidth="2.8" />
        {pts.map((p, i) => (
          <g key={p.yr} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <rect x={p.x - 16} y={p.y - 18} width="32" height="14" rx="3" fill="#121420" stroke={COLORS.orange} />
            <text x={p.x} y={p.y - 8} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--mono)">{p.yr}</text>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#ebe5d9" />
          </g>
        ))}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-19 (variant 18): Ondas de Choque en Pusher Street (Concentric Target)
  // --------------------------------------------------------------------------
  if (variant === 18) {
    const cx = 104;
    const cy = 81;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const r = 18 + i * 14;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={COLORS.orange}
                strokeWidth={isAct ? 3 : 1.5}
                strokeDasharray={i % 2 === 0 ? undefined : '4 3'}
              />
              <rect x="184" y={20 + i * 34} width="152" height="26" rx="6" fill={isAct ? '#1b1d2c' : '#10121c'} stroke={isAct ? COLORS.orange : '#25283a'} />
              <text x="192" y={32 + i * 34} fill="#ddd" fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 22)}</text>
              <text x="192" y={42 + i * 34} fill={COLORS.orange} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">DK {item.chr}/100 · UK {item.fnd}/100</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="6" fill="#ff5e5e" className="pchart-ping" />
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-20 (variant 19): Balanza Fiduciaria de 76,2 M DKK (Fulcrum Beam)
  // --------------------------------------------------------------------------
  if (variant === 19) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <polygon points="174,98 156,142 192,142" fill="#26293a" stroke="#ebe5d9" strokeWidth="1.5" />
        <line x1="56" y1="88" x2="292" y2="104" stroke="#ebe5d9" strokeWidth="3.5" strokeLinecap="round" />
        <g transform="translate(82, 54)" onClick={() => onSelect(0)} style={{ cursor: 'pointer' }}>
          <rect x="-46" y="-20" width="92" height="44" rx="8" fill="rgba(230,149,106,0.22)" stroke={COLORS.orange} strokeWidth="2" />
          <text x="0" y="-2" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">65% Crédito</text>
          <text x="0" y="13" textAnchor="middle" fill="#ffd1b3" fontSize="8" fontFamily="var(--sans)">Hipoteca Garantizada</text>
        </g>
        <g transform="translate(266, 68)" onClick={() => onSelect(1)} style={{ cursor: 'pointer' }}>
          <rect x="-46" y="-20" width="92" height="44" rx="8" fill="rgba(127,191,142,0.22)" stroke={COLORS.green} strokeWidth="2" />
          <text x="0" y="-2" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">35% Acciones</text>
          <text x="0" y="13" textAnchor="middle" fill="#c2f0cc" fontSize="8" fontFamily="var(--sans)">Folkeaktier Populares</text>
        </g>
        <text x="174" y="154" textAnchor="middle" fill="#ebe5d9" fontSize="8.5" fontFamily="var(--mono)">FIDEICOMISO 2012 · 76,2 M DKK</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-21 (variant 20): Arco de Regeneración Cívica (2012–2026)
  // --------------------------------------------------------------------------
  if (variant === 20) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <path d="M 38 134 A 136 110 0 0 1 310 134" fill="none" stroke="#2c3044" strokeWidth="14" strokeLinecap="round" />
        <path d="M 38 134 A 136 110 0 0 1 310 134" fill="none" stroke={COLORS.orange} strokeWidth="6" strokeDasharray="6 4" className="pchart-flow-anim" />
        {series.map((item, i) => {
          const a = Math.PI - (i / Math.max(1, n - 1)) * Math.PI;
          const x = 174 + 136 * Math.cos(a);
          const y = 134 - 102 * Math.sin(a);
          const yr = item.label.split('·')[0].trim();
          const isAct = i === activeIdx;
          return (
            <g key={yr} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy={y} r={isAct ? 9 : 6} fill="#10121c" stroke={COLORS.orange} strokeWidth="2.5" />
              <text x={x} y={y - 13} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{yr}</text>
              <text x={x} y={y + 20} textAnchor="middle" fill={COLORS.orange} fontSize="8" fontFamily="var(--mono)">{item.chr}%</text>
            </g>
          );
        })}
        <text x="174" y="126" textAnchor="middle" fill="#ebe5d9" fontSize="9.5" fontWeight="700" fontFamily="var(--sans)">Recuperación Vecinal 2024</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-22 (variant 21): Espiral Biodinámica de Sucesión del Suelo (Findhorn 1962)
  // --------------------------------------------------------------------------
  if (variant === 21) {
    const cx = 114;
    const cy = 82;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <path
          d="M 114 82 m 0 0 a 12 12 0 1 0 24 0 a 24 24 0 1 0 -48 0 a 36 36 0 1 0 72 0 a 48 48 0 1 0 -96 0"
          fill="none"
          stroke={COLORS.green}
          strokeWidth="2.2"
        />
        {series.map((item, i) => {
          const r = 14 + i * 13;
          const a = i * 1.4;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy={y} r={isAct ? 7 : 5} fill={COLORS.green} stroke="#fff" strokeWidth="1.5" />
              <text x="205" y={30 + i * 34} fill={isAct ? '#fff' : '#aaa'} fontSize="8.5" fontFamily="var(--sans)">{item.label.slice(0, 22)}</text>
              <text x="205" y={42 + i * 34} fill={COLORS.green} fontSize="9" fontWeight="700" fontFamily="var(--mono)">Índice Biocultural: {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-23 (variant 22): Torres de Expansión del Campus Holístico (1972–2019)
  // --------------------------------------------------------------------------
  if (variant === 22) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <line x1="24" y1="134" x2={W - 24} y2="134" stroke="#323548" />
        {series.map((item, i) => {
          const x = 44 + i * 100;
          const hChr = (item.chr / maxVal) * 95;
          const hFnd = (item.fnd / maxVal) * 95;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              {showChr && <rect x={x} y={134 - hChr} width="26" height={hChr} rx="4" fill={COLORS.orange} opacity={isAct ? 1 : 0.65} />}
              {showFnd && <rect x={x + 30} y={134 - hFnd} width="26" height={hFnd} rx="4" fill={COLORS.green} opacity={isAct ? 1 : 0.85} />}
              <text x={x + 13} y={129 - hChr} textAnchor="middle" fill={COLORS.orange} fontSize="8" fontFamily="var(--mono)">{item.chr}</text>
              <text x={x + 43} y={129 - hFnd} textAnchor="middle" fill={COLORS.green} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.fnd}</text>
              <text x={x + 28} y="149" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 14)}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-24 (variant 23): Tríada Ecotecnológica en Intersección (3-Circle Venn)
  // --------------------------------------------------------------------------
  if (variant === 23) {
    const centers = [
      { x: 144, y: 62, col: COLORS.green, lb: 'Eólica 100%' },
      { x: 204, y: 62, col: '#6ea8d6', lb: 'Living Machine 95%' },
      { x: 174, y: 108, col: COLORS.orange, lb: 'Pasiva 92%' },
    ];
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {centers.map((c, i) => (
          <g key={c.lb} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <circle cx={c.x} cy={c.y} r="44" fill={c.col} fillOpacity="0.2" stroke={c.col} strokeWidth={activeIdx === i ? 2.5 : 1.5} />
            <text x={c.x} y={i < 2 ? c.y - 16 : c.y + 24} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{c.lb}</text>
          </g>
        ))}
        <circle cx="174" cy="77" r="14" fill="#ebe5d9" onClick={() => onSelect(3)} style={{ cursor: 'pointer' }} />
        <text x="174" y="80" textAnchor="middle" fill="#050508" fontSize="7.5" fontWeight="700" fontFamily="var(--mono)">-50% CO2</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-25 (variant 24): Curva de Choque Térmico y Financiero (Incendio 2021)
  // --------------------------------------------------------------------------
  if (variant === 24) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {defs}
        <path d="M 36 90 L 128 24 L 220 42 L 312 32 L 312 136 L 36 136 Z" fill="rgba(255,95,95,0.18)" />
        <polyline points="36,90 128,24 220,42 312,32" fill="none" stroke="#ff6b6b" strokeWidth="2.8" />
        {series.map((item, i) => {
          const x = 36 + i * 92;
          const y = 136 - (item.fnd / 100) * 112;
          const yr = item.label.split('·')[0].trim();
          return (
            <g key={yr} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy={y} r={i === 1 ? 8 : 5} fill={i === 1 ? '#ff4d4d' : COLORS.green} stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={y - 10} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
              <text x={x} y="150" textAnchor="middle" fill="#ccc" fontSize="8.5" fontFamily="var(--mono)">{yr}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-26 (variant 25): Bifurcación Institucional de Findhorn (2023–Hoy)
  // --------------------------------------------------------------------------
  if (variant === 25) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="18" y="62" width="88" height="38" rx="7" fill="#161824" stroke="#ebe5d9" />
        <text x="62" y="79" textAnchor="middle" fill="#ebe5d9" fontSize="8" fontWeight="700" fontFamily="var(--mono)">REESTRUCTURA</text>
        <text x="62" y="91" textAnchor="middle" fill="#aaa" fontSize="7.5" fontFamily="var(--mono)">2023–2026</text>
        <path d="M 106 81 C 145 81, 155 44, 194 44" fill="none" stroke={COLORS.green} strokeWidth="3.5" />
        <path d="M 106 81 C 145 81, 155 118, 194 118" fill="none" stroke={COLORS.orange} strokeWidth="2.5" strokeDasharray="4 3" />
        {series.map((item, i) => {
          const y = i === 0 ? 24 : 98;
          return (
            <g key={item.label} transform={`translate(194, ${y})`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <rect width="138" height="40" rx="8" fill="#10121c" stroke={i === 0 ? COLORS.green : COLORS.orange} strokeWidth="1.8" />
              <text x="69" y="16" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 22)}</text>
              <text x="69" y="31" textAnchor="middle" fill={i === 0 ? COLORS.green : COLORS.orange} fontSize="9.5" fontWeight="700" fontFamily="var(--mono)">DK {item.chr}% · UK {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-27 (variant 26): Doble Hélice Diacrónica (64 Años vs 55 Años)
  // --------------------------------------------------------------------------
  if (variant === 26) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <path d="M 32 45 C 95 125, 165 25, 230 115 C 275 145, 300 45, 322 65" fill="none" stroke={COLORS.orange} strokeWidth="2.8" />
        <path d="M 32 115 C 95 25, 165 125, 230 45 C 275 25, 300 115, 322 95" fill="none" stroke={COLORS.green} strokeWidth="2.8" />
        {series.map((item, i) => {
          const x = 44 + i * 86;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={x} y1="32" x2={x} y2="128" stroke={isAct ? '#ebe5d9' : '#323548'} strokeDasharray="2 2" />
              <circle cx={x} cy="80" r={isAct ? 6 : 4} fill="#ebe5d9" />
              <text x={x} y="22" textAnchor="middle" fill={COLORS.orange} fontSize="8" fontFamily="var(--mono)">DK {item.chr}%</text>
              <text x={x} y="146" textAnchor="middle" fill={COLORS.green} fontSize="8" fontFamily="var(--mono)">UK {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-28 (variant 27): Rueda Presupuestaria de la Fælleskasse (Sunburst)
  // --------------------------------------------------------------------------
  if (variant === 27) {
    const cx = 104;
    const cy = 81;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <circle cx={cx} cy={cy} r="24" fill="rgba(230,149,106,0.2)" stroke={COLORS.orange} strokeWidth="2" />
        <text x={cx} y={cy + 3} textAnchor="middle" fill="#fff" fontSize="7.5" fontWeight="700" fontFamily="var(--mono)">FÆLLESKASSE</text>
        {series.map((item, i) => {
          const a = -Math.PI / 3 + i * ((Math.PI * 2) / 3);
          const x2 = cx + 54 * Math.cos(a);
          const y2 = cy + 54 * Math.sin(a);
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={cx} y1={cy} x2={x2} y2={y2} stroke={COLORS.orange} strokeWidth="2" />
              <circle cx={x2} cy={y2} r="13" fill="#121420" stroke={COLORS.orange} strokeWidth="2" />
              <text x={x2} y={y2 + 3} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="var(--mono)">{item.chr}%</text>
              <text x="192" y={36 + i * 40} fill="#ddd" fontSize="8.5" fontFamily="var(--sans)">{item.label.slice(0, 22)}</text>
              <text x="192" y={48 + i * 40} fill={COLORS.orange} fontSize="8.5" fontFamily="var(--mono)">DK {item.chr}% · UK {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-29 (variant 28): Circuito Monetario Ekopia & Ekos (Circular Loop)
  // --------------------------------------------------------------------------
  if (variant === 28) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <circle cx="174" cy="81" r="54" fill="none" stroke={COLORS.green} strokeWidth="3" strokeDasharray="8 5" className="pchart-flow-anim" />
        <text x="174" y="79" textAnchor="middle" fill="#fff" fontSize="9.5" fontWeight="700" fontFamily="var(--mono)">EKOPIA / PET</text>
        <text x="174" y="91" textAnchor="middle" fill={COLORS.green} fontSize="8" fontFamily="var(--mono)">Banca Comunitaria</text>
        {series.map((item, i) => {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / 3;
          const x = 174 + 54 * Math.cos(a);
          const y = 81 + 54 * Math.sin(a);
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy={y} r="14" fill="#101418" stroke={COLORS.green} strokeWidth="2.2" />
              <text x={x} y={y + 3} textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-30 (variant 29): Puente Colgante de Homologación Fiscal (Fælleskasse ⇄ PET)
  // --------------------------------------------------------------------------
  if (variant === 29) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="44" y="28" width="14" height="112" rx="3" fill={COLORS.orange} />
        <rect x="290" y="28" width="14" height="112" rx="3" fill={COLORS.green} />
        <path d="M 51 34 Q 174 112 297 34" fill="none" stroke="#ebe5d9" strokeWidth="2.2" />
        <line x1="44" y1="112" x2="304" y2="112" stroke="#ebe5d9" strokeWidth="3" />
        {series.map((item, i) => {
          const x = 104 + i * 70;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={x} y1="68" x2={x} y2="112" stroke="#888" strokeDasharray="2 2" />
              <circle cx={x} cy="112" r="6" fill={i === activeIdx ? '#ebe5d9' : '#26293a'} stroke="#fff" />
              <text x={x} y="58" textAnchor="middle" fill={COLORS.orange} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.chr}%</text>
              <text x={x} y="132" textAnchor="middle" fill={COLORS.green} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-31 (variant 30): Matriz de Oficios de Maskinhallen (Workshop Gauges)
  // --------------------------------------------------------------------------
  if (variant === 30) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const cx = 64 + i * 110;
          const r = 34;
          const c = 2 * Math.PI * r;
          return (
            <g key={item.label} transform={`translate(${cx}, 76)`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle r={r} fill="none" stroke="#222536" strokeWidth="8" strokeDasharray="4 3" />
              <circle r={r} fill="none" stroke={COLORS.orange} strokeWidth="8" strokeDasharray={`${(item.chr / 100) * c} ${c}`} transform="rotate(-90)" />
              <circle r={r - 10} fill="none" stroke={COLORS.green} strokeWidth="5" strokeDasharray={`${(item.fnd / 100) * (c * 0.7)} ${c}`} transform="rotate(-90)" />
              <text x="0" y="4" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="var(--mono)">{item.chr}</text>
              <text x="0" y="54" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 15)}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-32 (variant 31): Estrella de Difusión Global Gaia Education (>50 Países)
  // --------------------------------------------------------------------------
  if (variant === 31) {
    const cx = 174;
    const cy = 82;
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const a = -Math.PI / 2 + (i * Math.PI * 2) / n;
          const x2 = cx + 92 * Math.cos(a);
          const y2 = cy + 56 * Math.sin(a);
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1={cx} y1={cy} x2={x2} y2={y2} stroke={COLORS.green} strokeWidth="2.2" strokeDasharray="4 3" className="pchart-flow-anim" />
              <circle cx={x2} cy={y2} r="16" fill="#101815" stroke={COLORS.green} strokeWidth="2" />
              <text x={x2} y={y2 + 3} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="var(--mono)">{item.fnd}</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="22" fill="rgba(127,191,142,0.25)" stroke="#ebe5d9" strokeWidth="2" />
        <text x={cx} y={cy + 3} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="var(--mono)">FINDHORN</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-33 (variant 32): Plano Cartesiano 2×2 del Enfoque 3 (Quadrant Scatter)
  // --------------------------------------------------------------------------
  if (variant === 32) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="36" y="16" width="276" height="124" rx="8" fill="#0d0f18" stroke="#26293a" />
        <line x1="174" y1="16" x2="174" y2="140" stroke="#32364c" strokeDasharray="3 3" />
        <line x1="36" y1="78" x2="312" y2="78" stroke="#32364c" strokeDasharray="3 3" />
        {series.map((item, i) => {
          const x = 48 + (item.chr / 100) * 250;
          const y = 130 - (item.fnd / 100) * 102;
          const isAct = i === activeIdx;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy={y} r={isAct ? 9 : 6} fill="#ebe5d9" stroke={COLORS.orange} strokeWidth="2.5" />
              <text x={x} y={y - 11} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--mono)">0{i + 1}</text>
            </g>
          );
        })}
        <text x="174" y="153" textAnchor="middle" fill="#999" fontSize="8" fontFamily="var(--mono)">Eje X: 🇩🇰 Christiania (%) · Eje Y: 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn (%)</text>
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-34 (variant 33): Corte de Infiltración Pluvial y Reciclaje (Christiania)
  // --------------------------------------------------------------------------
  if (variant === 33) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const x = 42 + i * 104;
          const hChr = (item.chr / 100) * 96;
          const hFnd = (item.fnd / 100) * 96;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <rect x={x} y="26" width="64" height="102" rx="8" fill="#10131e" stroke="#282c3e" />
              <rect x={x + 6} y={124 - hChr} width="24" height={hChr} rx="4" fill={COLORS.orange} />
              <rect x={x + 34} y={124 - hFnd} width="24" height={hFnd} rx="4" fill={COLORS.green} />
              <text x={x + 18} y={120 - hChr} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--mono)">{item.chr}%</text>
              <text x={x + 46} y={120 - hFnd} textAnchor="middle" fill="#fff" fontSize="8" fontFamily="var(--mono)">{item.fnd}%</text>
              <text x={x + 32} y="145" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 14)}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-35 (variant 34): Cascada de Reactores Biológicos Living Machine (1995)
  // --------------------------------------------------------------------------
  if (variant === 34) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <path d="M 38 78 H 310" stroke="#6ea8d6" strokeWidth="4" strokeDasharray="6 4" className="pchart-flow-anim" />
        {series.map((item, i) => {
          const x = 36 + i * 102;
          return (
            <g key={item.label} transform={`translate(${x}, 36)`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <rect width="74" height="84" rx="10" fill="rgba(127,191,142,0.16)" stroke={COLORS.green} strokeWidth="2" />
              <path d="M 8 54 Q 24 48 37 54 T 66 54 L 66 78 L 8 78 Z" fill="rgba(110,168,214,0.35)" />
              <text x="37" y="24" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">{item.fnd}{item.unit || '%'}</text>
              <text x="37" y="40" textAnchor="middle" fill={COLORS.orange} fontSize="8" fontFamily="var(--mono)">DK: {item.chr}</text>
              <text x="37" y="100" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">REACTOR 0{i + 1}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-36 (variant 35): Rotor Eólico y Balance de Micro-Red (675 kW / 130%)
  // --------------------------------------------------------------------------
  if (variant === 35) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <g transform="translate(86, 82)">
          <circle r="44" fill="none" stroke={COLORS.green} strokeDasharray="3 3" />
          {[0, 120, 240].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="0"
              x2={40 * Math.cos((deg * Math.PI) / 180)}
              y2={40 * Math.sin((deg * Math.PI) / 180)}
              stroke={COLORS.green}
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
          <circle r="7" fill="#ebe5d9" />
          <text x="0" y="60" textAnchor="middle" fill={COLORS.green} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">675 kW · 4 Turbinas</text>
        </g>
        {series.map((item, i) => (
          <g key={item.label} transform={`translate(166, ${34 + i * 52})`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
            <text x="0" y="0" fill="#eee" fontSize="8.5" fontFamily="var(--sans)">{item.label}</text>
            <rect x="0" y="6" width={(item.fnd / 100) * 150} height="12" rx="4" fill={COLORS.green} />
            <text x={(item.fnd / 100) * 150 + 6} y="15" fill={COLORS.green} fontSize="9" fontWeight="700" fontFamily="var(--mono)">{item.fnd}%</text>
          </g>
        ))}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-37 (variant 36): Esquema de Acometidas Municipales HOFOR (Copenhague)
  // --------------------------------------------------------------------------
  if (variant === 36) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <rect x="14" y="24" width="68" height="114" rx="8" fill="#161824" stroke="#8e90a0" strokeDasharray="4 2" />
        <text x="48" y="76" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">RED HOFOR</text>
        <text x="48" y="88" textAnchor="middle" fill="#aaa" fontSize="7.5" fontFamily="var(--mono)">Copenhague</text>
        {series.map((item, i) => {
          const y = 42 + i * 40;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <line x1="82" y1={y} x2="210" y2={y} stroke={COLORS.orange} strokeWidth="4" strokeDasharray="6 4" className="pchart-flow-anim" />
              <rect x="210" y={y - 13} width="122" height="26" rx="6" fill="#10121c" stroke={COLORS.orange} />
              <text x="271" y={y - 2} textAnchor="middle" fill="#fff" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 20)}</text>
              <text x="271" y={y + 9} textAnchor="middle" fill={COLORS.orange} fontSize="8.5" fontWeight="700" fontFamily="var(--mono)">DK {item.chr}% · UK {item.fnd}%</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-38 (variant 37): Osciloscopio Bidireccional con la Red Escocesa
  // --------------------------------------------------------------------------
  if (variant === 37) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        <line x1="20" y1="81" x2={W - 20} y2="81" stroke="#32364a" />
        <path d="M 24 81 Q 66 22 108 81 T 192 81 T 276 81 T 328 81" fill="none" stroke={COLORS.green} strokeWidth="2.6" />
        <path d="M 24 81 Q 66 136 108 81 T 192 81 T 276 81" fill="none" stroke={COLORS.orange} strokeWidth="2" strokeDasharray="4 3" />
        {series.map((item, i) => {
          const x = 68 + i * 106;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <circle cx={x} cy="81" r="16" fill="#10121c" stroke={COLORS.green} strokeWidth="2" />
              <text x={x} y="79" textAnchor="middle" fill={COLORS.orange} fontSize="7.5" fontFamily="var(--mono)">DK:{item.chr}</text>
              <text x={x} y="90" textAnchor="middle" fill={COLORS.green} fontSize="8" fontWeight="700" fontFamily="var(--mono)">UK:{item.fnd}%</text>
              <text x={x} y="142" textAnchor="middle" fill="#ccc" fontSize="7.5" fontFamily="var(--sans)">{item.label.slice(0, 16)}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-39 (variant 38): Diagrama de Mancuerna / Brecha Metabólica (Dumbbell)
  // --------------------------------------------------------------------------
  if (variant === 38) {
    return (
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
        {series.map((item, i) => {
          const y = 26 + i * 34;
          const xChr = 110 + (item.chr / 100) * 210;
          const xFnd = 110 + (item.fnd / 100) * 210;
          return (
            <g key={item.label} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
              <text x="102" y={y + 4} textAnchor="end" fill="#ccc" fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 18)}</text>
              <line x1="110" y1={y} x2="326" y2={y} stroke="#202332" strokeWidth="4" strokeLinecap="round" />
              <line x1={xChr} y1={y} x2={xFnd} y2={y} stroke="#ebe5d9" strokeWidth="2.5" />
              <circle cx={xChr} cy={y} r="6" fill={COLORS.orange} />
              <circle cx={xFnd} cy={y} r="6" fill={COLORS.green} />
            </g>
          );
        })}
      </svg>
    );
  }

  // --------------------------------------------------------------------------
  // D-40 (variant 39): Heptágono Estelar de Síntesis Integral (Sección 1.1)
  // --------------------------------------------------------------------------
  const cx = 104;
  const cy = 81;
  const R = 58;
  const ptPoly = (key: 'chr' | 'fnd') =>
    series
      .map((item, i) => {
        const a = -Math.PI / 2 + (i * Math.PI * 2) / n;
        const r = (item[key] / 100) * R;
        return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
      })
      .join(' ');

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} className="pchart-svg">
      {defs}
      {[0.5, 1].map((f) => (
        <circle key={f} cx={cx} cy={cy} r={R * f} fill="none" stroke="#282b3e" strokeDasharray="2 2" />
      ))}
      {showChr && <polygon points={ptPoly('chr')} fill="url(#gChr)" stroke={COLORS.orange} strokeWidth="2" />}
      {showFnd && <polygon points={ptPoly('fnd')} fill="url(#gFnd)" stroke={COLORS.green} strokeWidth="2" />}
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#ebe5d9" fontSize="9.5" fontWeight="700" fontFamily="var(--mono)">84 vs 88</text>
      {series.map((item, i) => (
        <g key={item.label} transform={`translate(182, ${18 + i * 23})`} onClick={() => onSelect(i)} style={{ cursor: 'pointer' }}>
          <text x="0" y="0" fill={i === activeIdx ? '#fff' : '#aaa'} fontSize="8" fontFamily="var(--sans)">{item.label.slice(0, 24)}</text>
          <text x="128" y="0" fill={COLORS.orange} fontSize="8" fontWeight="700" fontFamily="var(--mono)">{item.chr}</text>
          <text x="146" y="0" fill={COLORS.green} fontSize="8" fontWeight="700" fontFamily="var(--mono)">{item.fnd}</text>
        </g>
      ))}
    </svg>
  );
}
