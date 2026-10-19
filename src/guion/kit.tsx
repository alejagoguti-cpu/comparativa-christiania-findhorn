/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

export const C = {
  ink: '#eeeae1', paper: '#0a0a09', panel: '#1a1a17', mute: '#8d887d', line: '#2f2e29',
  chr: '#e0603f', fnd: '#4fb38f', ken: '#5b9be0', hl: '#f2b632', water: '#9fb9c4', white: '#ffffff',
};

/* ---------- contexto de escenario ---------- */
export const StageCtx = createContext<{ w: number; h: number; mobile: boolean; tall: boolean; sub: number; setStops: (labels: string[]) => void }>({ w: 1200, h: 700, mobile: false, tall: false, sub: 0, setStops: () => {} });
/** Registra las paradas de cámara de una visual (cada clic acerca a una) y devuelve la parada actual: null = vista general. */
export function useStops(labels: string[]) {
  const { sub, setStops } = useContext(StageCtx);
  const key = labels.join('|');
  useEffect(() => { setStops(labels); }, [key]); // eslint-disable-line
  return sub > 0 && sub <= labels.length ? sub - 1 : null;
}
export const useStage = () => useContext(StageCtx);

/* ---------- datos OSM ---------- */
export type Site = 'christiania' | 'findhorn' | 'kennedy';
const cache: Record<string, Promise<any>> = {};
export function useData(site?: Site | null) {
  const [d, setD] = useState<any>(null);
  useEffect(() => {
    if (!site) return;
    cache[site] ||= fetch(`guion/data/${site}.json`).then((r) => r.json());
    let on = true;
    cache[site].then((x) => on && setD(x));
    return () => { on = false; };
  }, [site]);
  return d;
}

/* ---------- imágenes ---------- */
export const IMG: Record<string, [string, number, number, string]> = {
  cat_excavacion: ['cat_excavacion.jpg', 1600, 1085, 'Omar Hoftun, CC BY-SA 3.0'],
  cat_reconstruccion: ['cat_reconstruccion.jpg', 1600, 1200, 'Radosław Botev, CC BY 3.0 PL'],
  chr_1971: ['chr_1971.jpg', 1600, 1045, 'Utrecht1950, CC BY-SA 4.0'],
  chr_bike: ['chr_bike.jpg', 1600, 1200, 'Maurizio Ceol, CC BY 3.0'],
  chr_entrada: ['chr_entrada.jpg', 1600, 1200, 'Franklin Heijnen, CC BY-SA 2.0'],
  chr_gedde1751: ['chr_gedde1751.jpg', 2800, 1848, 'Samuel C. Gedde (1751), dominio público'],
  chr_glasshouse: ['chr_glasshouse.jpg', 1600, 2165, 'Seier+Seier, CC BY 2.0'],
  chr_grahal: ['chr_grahal.jpg', 1600, 1040, 'Jens Cederskjold, CC BY 3.0'],
  chr_kaserne1840: ['chr_kaserne1840.jpg', 1600, 962, 'Autor desconocido (c. 1840), dominio público'],
  chr_plano_subareas_2018: ['chr_plano_subareas_2018.jpg', 3200, 1509, 'Bygningsstyrelsen (2018), plano de subáreas, en Københavns Kommune (2022)'],
  chr_pusher2024: ['chr_pusher2024.jpg', 1600, 2131, 'Penguin, CC BY-SA 4.0'],
  chr_stadsgraven: ['chr_stadsgraven.jpg', 1600, 1068, 'Stig Nygaard, CC BY 2.0'],
  chr_stadsgraven_casas: ['chr_stadsgraven_casas.jpg', 1600, 1600, 'Stig Nygaard, CC BY 2.0'],
  fnd_bahia: ['fnd_bahia.jpg', 1600, 1067, 'Hugh Venables, CC BY-SA 2.0'],
  fnd_barril: ['fnd_barril.jpg', 1600, 1200, 'Chiswick Chap, CC BY-SA 3.0'],
  fnd_barril_original: ['fnd_barril_original.jpg', 1200, 882, 'Julian Paren, CC BY-SA 2.0'],
  fnd_caravana: ['fnd_caravana.jpg', 640, 427, 'Anne Burgess, CC BY-SA 2.0'],
  fnd_communitycentre: ['fnd_communitycentre.jpg', 640, 427, 'Anne Burgess, CC BY-SA 2.0'],
  fnd_dunas: ['fnd_dunas.jpg', 1024, 518, 'valenta, CC BY-SA 2.0'],
  fnd_ecovivienda: ['fnd_ecovivienda.jpg', 640, 335, 'Anne Burgess, CC BY-SA 2.0'],
  fnd_eolico: ['fnd_eolico.jpg', 1600, 1200, 'W. L. Tarbert, dominio público'],
  fnd_huella_fig13: ['fnd_huella_fig13.png', 840, 1140, 'Tinsley y George (2006), tabla 27 y figura 13'],
  fnd_huella_resumen: ['fnd_huella_resumen.png', 992, 1404, 'Tinsley y George (2006), resumen ejecutivo, p. 4'],
  fnd_livingmachine: ['fnd_livingmachine.jpg', 1200, 920, 'Julian Paren, CC BY-SA 2.0'],
  fnd_reactor: ['fnd_reactor.jpg', 1200, 900, 'Julian Paren, CC BY-SA 2.0'],
  fnd_universalhall: ['fnd_universalhall.jpg', 640, 427, 'Anne Burgess, CC BY-SA 2.0'],
  hk_lowu: ['hk_lowu.jpg', 1600, 1108, 'Daniel Case, CC BY-SA 3.0'],
  ken_corabastos: ['ken_corabastos.jpg', 1600, 1200, 'Felipe Restrepo Acosta, CC BY-SA 4.0'],
  ken_elburro: ['ken_elburro.jpg', 1600, 1067, 'Juan Carlos Sáenz Rodríguez, CC BY-SA 4.0'],
  ken_lavaca: ['ken_lavaca.jpg', 1600, 1067, 'Juan Carlos Sáenz Rodríguez, CC BY-SA 4.0'],
  fnd_lm_esquema_epa: ['fnd_lm_esquema_epa.png', 2440, 630, 'US EPA (2002), fig. 1 (fuente: Living Machines Inc., 2001)'],
  ken_humedal_ssf_epa: ['ken_humedal_ssf_epa.png', 1070, 940, 'US EPA (2000), fig. 1 (adaptado de S. C. Reed)'],
  paper_es_fig6: ['paper_es_fig6.jpg', 2000, 1520, 'Fernandez et al. (2026), fig. 6, CC BY 4.0'],
  paper_es_fig4: ['paper_es_fig4.jpg', 1964, 1040, 'Fernandez et al. (2026), fig. 4, CC BY 4.0'],
};

/* ---------- anotaciones ---------- */
export type Pt = [number, number];
export type Ann =
  | { t: 'line'; pts: Pt[]; c?: string; w?: number; d?: number; close?: boolean; fill?: string; dash?: boolean; smooth?: boolean }
  | { t: 'ring'; at: Pt; r?: number; c?: string; d?: number; pulse?: boolean }
  | { t: 'tag'; at: Pt; text: string; c?: string; d?: number; dx?: number; dy?: number; size?: number; dark?: boolean }
  | { t: 'arrow'; from: Pt; to: Pt; c?: string; d?: number; bend?: number; w?: number; flow?: boolean }
  | { t: 'box'; a: Pt; b: Pt; c?: string; d?: number; fill?: string }
  | { t: 'dot'; at: Pt; c?: string; d?: number; r?: number }
  | { t: 'feat'; kind: 'b' | 'r' | 'l' | 'w' | 'x'; id?: number | number[]; name?: string; cls?: string; c?: string; fill?: string; d?: number; w?: number; inside?: number }
  | { t: 'text'; at: Pt; text: string; c?: string; d?: number; size?: number; anchor?: 'start' | 'middle' | 'end'; italic?: boolean }
  | { t: 'scale'; at: Pt; meters: number; d?: number };

const pathOf = (pts: number[][], close?: boolean, smooth?: boolean) => {
  if (!pts.length) return '';
  if (!smooth || pts.length < 3) return 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + (close ? 'Z' : '');
  let s = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
    s += `Q${pts[i][0]} ${pts[i][1]} ${mx} ${my}`;
  }
  const l = pts[pts.length - 1];
  return s + `L${l[0]} ${l[1]}` + (close ? 'Z' : '');
};

/** estimación del ancho de texto (sans) */
const tw = (s: string, fs: number) => s.length * fs * 0.53;

export function Anns({ anns, P, u, data, M, vb }: { anns: Ann[]; P: (p: Pt) => number[]; u: number; data?: any; M?: number; vb?: number[] }) {
  const out: ReactNode[] = [];
  anns.forEach((a, i) => {
    const d = (a as any).d ?? 0.2 + i * 0.35;
    const st = { animationDelay: `${d}s` } as const;
    const col = (a as any).c ?? C.hl;
    if (a.t === 'line') {
      const pts = a.pts.map(P);
      out.push(<g key={i}>
        {a.fill && <path d={pathOf(pts, true, a.smooth)} fill={a.fill} className="fa" style={{ animationDelay: `${d + 0.6}s` }} />}
        <path d={pathOf(pts, a.close, a.smooth)} pathLength={1} className="dr" style={st} fill="none" stroke={col} strokeWidth={(a.w ?? 0.32) * u} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={a.dash ? undefined : undefined} />
      </g>);
    } else if (a.t === 'ring') {
      const [x, y] = P(a.at); const r = (a.r ?? 2.2) * u;
      out.push(<g key={i}>
        <circle cx={x} cy={y} r={r} fill="none" stroke={col} strokeWidth={0.32 * u} pathLength={1} className="dr" style={st} />
        {a.pulse && <circle cx={x} cy={y} r={r * 0.28} fill={col} className="po pulse" style={st} />}
      </g>);
    } else if (a.t === 'dot') {
      const [x, y] = P(a.at);
      out.push(<g key={i} className="po" style={st}><circle cx={x} cy={y} r={(a.r ?? 0.55) * u} fill={col} stroke="#fff" strokeWidth={0.18 * u} /></g>);
    } else if (a.t === 'box') {
      const [x1, y1] = P(a.a), [x2, y2] = P(a.b);
      const pts = [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
      out.push(<g key={i}>
        {a.fill && <path d={pathOf(pts, true)} fill={a.fill} className="fa" style={{ animationDelay: `${d + 0.5}s` }} />}
        <path d={pathOf(pts, true)} pathLength={1} className="dr" style={st} fill="none" stroke={col} strokeWidth={0.3 * u} />
      </g>);
    } else if (a.t === 'arrow') {
      const [x1, y1] = P(a.from), [x2, y2] = P(a.to);
      const bend = a.bend ?? 0.18;
      const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
      const ang = Math.atan2(y2 - my, x2 - mx); const hl = 1.1 * u * (a.w ?? 1);
      const h = `M${x2 - hl * Math.cos(ang - 0.45)} ${y2 - hl * Math.sin(ang - 0.45)}L${x2} ${y2}L${x2 - hl * Math.cos(ang + 0.45)} ${y2 - hl * Math.sin(ang + 0.45)}`;
      out.push(<g key={i} fill="none" stroke={col} strokeWidth={0.3 * u * (a.w ?? 1)} strokeLinecap="round" strokeLinejoin="round">
        <path d={`M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}`} pathLength={1} className={'dr'} style={st} />
        {a.flow && <path d={`M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}`} className="flowdash fa" stroke="#fff" strokeOpacity={0.7} strokeWidth={0.14 * u} style={{ animationDelay: `${d + 1.2}s, ${d + 1.2}s` }} />}
        <path d={h} className="po" style={{ animationDelay: `${d + 1}s` }} />
      </g>);
    } else if (a.t === 'tag') {
      const [x, y] = P(a.at); const fs = (a.size ?? 1) * 1.15 * u;
      const lines = a.text.split('\n'); const w = Math.max(...lines.map((l) => tw(l, fs))) + fs * 1.1; const h = lines.length * fs * 1.25 + fs * 0.6;
      const dx = (a.dx ?? 0) * u, dy = (a.dy ?? 0) * u;
      let bx = x + dx - (dx < 0 ? w : dx > 0 ? 0 : w / 2), by = y + dy - (dy < 0 ? h : dy > 0 ? 0 : h / 2);
      if (vb) { const m = 0.6 * u; bx = Math.min(Math.max(bx, vb[0] + m), vb[0] + vb[2] - w - m); by = Math.min(Math.max(by, vb[1] + m), vb[1] + vb[3] - h - m); }
      const bg = 'rgba(8,8,7,.92)'; const fg = '#f3efe6';
      out.push(<g key={i} className="po" style={st}>
        {(dx || dy) ? <line x1={x} y1={y} x2={Math.min(Math.max(x + dx, bx), bx + w)} y2={Math.min(Math.max(y + dy, by), by + h)} stroke={col} strokeWidth={0.2 * u} /> : null}
        {(dx || dy) ? <circle cx={x} cy={y} r={0.45 * u} fill={col} stroke="#fff" strokeWidth={0.15 * u} /> : null}
        <rect x={bx} y={by} width={w} height={h} fill={bg} stroke={col} strokeWidth={0.18 * u} rx={0.2 * u} />
        <rect x={bx} y={by} width={0.35 * u} height={h} fill={col} />
        {lines.map((l, k) => <text key={k} x={bx + fs * 0.7} y={by + fs * 0.3 + (k + 1) * fs * 1.2 - fs * 0.15} fontSize={fs} fontFamily="Inter Tight, Arial, sans-serif" fontWeight={k === 0 ? 600 : 400} fill={fg}>{l}</text>)}
      </g>);
    } else if (a.t === 'text') {
      const [x, y] = P(a.at); const fs = (a.size ?? 1) * 1.15 * u;
      out.push(<text key={i} className="po" style={st} x={x} y={y} fontSize={fs} textAnchor={a.anchor ?? 'middle'} fill={a.c ?? C.ink} fontFamily="Inter Tight, Arial, sans-serif" fontWeight={700} paintOrder="stroke" stroke="rgba(0,0,0,.85)" strokeWidth={fs * 0.25}>{a.text}</text>);
    } else if (a.t === 'scale') {
      const [x, y] = P(a.at); const px = (M ?? 1) * a.meters; const fs = 0.95 * u;
      out.push(<g key={i} className="po" style={st}>
        <rect x={x - 0.4 * u} y={y - 1.9 * u} width={px + 0.8 * u} height={2.6 * u} rx={0.3 * u} fill="rgba(8,8,7,.85)" />
        <path d={`M${x} ${y - 0.4 * u}V${y}H${x + px}V${y - 0.4 * u}`} fill="none" stroke={C.ink} strokeWidth={0.18 * u} />
        <text x={x} y={y - 0.75 * u} fontSize={fs} fontFamily="Inter Tight, Arial" fill={C.ink}>{a.meters >= 1000 ? a.meters / 1000 + ' km' : a.meters + ' m'}</text>
      </g>);
    } else if (a.t === 'feat' && data) {
      const list: any[] = data[a.kind] || [];
      const ids = a.id == null ? null : Array.isArray(a.id) ? a.id : [a.id];
      const re = a.name ? new RegExp(a.name, 'i') : null;
      const poly: number[] | null = a.inside ? (data.l.find((f: any) => f[0] === a.inside)?.[3] ?? null) : null;
      const pip = (x: number, y: number) => { if (!poly) return true; let c = false; for (let i2 = 0, j2 = poly.length - 2; i2 < poly.length; j2 = i2, i2 += 2) { const xi = poly[i2], yi = poly[i2 + 1], xj = poly[j2], yj = poly[j2 + 1]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };
      const clsRe = a.cls ? new RegExp('^(' + a.cls + ')$') : null;
      const sel = list.filter((f) => (ids ? ids.includes(f[0]) : true) && (re ? re.test(f[1]) : true) && (clsRe && a.kind !== 'w' ? clsRe.test(f[2]) : true) && (poly ? pip((f[a.kind === 'w' ? 2 : 3] as number[])[0], (f[a.kind === 'w' ? 2 : 3] as number[])[1]) : true));
      const geomIdx = a.kind === 'w' ? 2 : 3;
      const isPoly = a.kind !== 'r';
      out.push(<g key={i}>{sel.map((f, k) => {
        const g: number[] = f[geomIdx]; const pts: number[][] = [];
        for (let j = 0; j < g.length; j += 2) pts.push(P([g[j], g[j + 1]]));
        const dd = pathOf(pts, isPoly);
        return <g key={k}>
          {(a.fill) && <path d={dd} fill={a.fill} className="fa" style={{ animationDelay: `${d + 0.5}s` }} />}
          <path d={dd} pathLength={1} className="dr" style={st} fill="none" stroke={col} strokeWidth={(a.w ?? 0.3) * u} strokeLinejoin="round" strokeLinecap="round" />
        </g>;
      })}</g>);
    }
  });
  return <g>{out}</g>;
}


/** paradas de cámara: cada etiqueta (o, si no hay, cada círculo o recuadro) */
export function stopsOf(anns: Ann[]): { at: Pt; label: string; span?: [Pt, Pt] }[] {
  const o: { at: Pt; label: string; span?: [Pt, Pt] }[] = [];
  const shapes: { at: Pt; span?: [Pt, Pt]; idx: number }[] = [];
  (anns as any[]).forEach((a, idx) => {
    if (a.t === 'box') shapes.push({ at: [(a.a[0] + a.b[0]) / 2, (a.a[1] + a.b[1]) / 2], span: [a.a, a.b], idx });
    else if (a.t === 'ring' || a.t === 'dot') shapes.push({ at: a.at, idx });
    else if (a.t === 'tag') {
      const sh = [...shapes].reverse().find((s) => idx - s.idx <= 2 && !(s as any).used);
      if (sh) { (sh as any).used = true; o.push({ at: sh.at, span: sh.span, label: a.text.split('\n')[0] }); }
      else o.push({ at: a.at, label: a.text.split('\n')[0] });
    }
  });
  if (!o.length) for (const s of shapes) o.push({ at: s.at, span: s.span, label: '' });
  return o;
}
/** puntos de interés de las anotaciones */
export function focusPts(anns: Ann[]): Pt[] {
  const o: Pt[] = [];
  for (const a of anns) {
    if (a.t === 'ring' || a.t === 'dot' || a.t === 'tag') o.push(a.at);
    else if (a.t === 'arrow') o.push(a.to);
    else if (a.t === 'box') { o.push(a.a); o.push(a.b); }
  }
  return o;
}

/* ---------- foto anotada (clic para ampliar) ---------- */
export function Photo({ img, anns = [], crop, mcrop, frac = true, auto = true }: { img: string; anns?: Ann[]; crop?: [number, number, number, number]; mcrop?: [number, number, number, number]; frac?: boolean; auto?: boolean }) {
  const { mobile } = useStage();
  const [f, w, h] = IMG[img];
  const vb = (mobile && mcrop) || crop || [0, 0, w, h];
  const [z, setZ] = useState({ k: 1, x: 0, y: 0, slow: false });
  const touched = useRef(false);
  const u = (vb[2] / 62) * (mobile ? 1.45 : 1);
  const P = (p: Pt) => (frac ? [p[0] * w, p[1] * h] : p);
  const fit = (pts: number[][], kmax: number) => {
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const k2 = Math.max(1, Math.min(kmax, 0.72 * Math.min(vb[2] / Math.max(1, x1 - x0), vb[3] / Math.max(1, y1 - y0))));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    return { k: k2, x: Math.min(vb[0] * (1 - k2), Math.max(vb[0] + vb[2] - (vb[0] + vb[2]) * k2, vb[0] + vb[2] / 2 - cx * k2)), y: Math.min(vb[1] * (1 - k2), Math.max(vb[1] + vb[3] - (vb[1] + vb[3]) * k2, vb[1] + vb[3] / 2 - cy * k2)) };
  };
  const st = stopsOf(anns); const cur = useStops(st.map((s) => s.label));
  useEffect(() => {
    if (cur === null) { setZ({ k: 1, x: 0, y: 0, slow: true }); return; }
    const [qx, qy] = P(st[cur].at); const sp = st[cur].span;
    setZ({ ...(sp ? fit([P(sp[0]), P(sp[1])], 2.3) : fit([[qx - vb[2] * 0.16, qy - vb[3] * 0.16], [qx + vb[2] * 0.16, qy + vb[3] * 0.16]], 2.3)), slow: true });
  }, [cur]); // eslint-disable-line
  void touched; void auto;
  return <div className="fill">
    <svg className="vis" viewBox={vb.join(' ')} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'hidden' }}>
      <g transform={`translate(${z.x} ${z.y}) scale(${z.k})`} style={{ transition: `transform ${z.slow ? 2.8 : 0.8}s cubic-bezier(.33,0,.2,1)` }}>
        <image href={`guion/img/${f}`} x={0} y={0} width={w} height={h} preserveAspectRatio="none" />
        <Anns anns={anns} P={P} u={u / Math.pow(z.k, 0.75)} vb={vb} />
        {cur !== null && (() => { const [qx, qy] = P(st[cur].at); return <g key={cur}><circle cx={qx} cy={qy} r={2.6 * u / z.k * 1.4} fill="none" stroke={C.hl} strokeWidth={0.35 * u / z.k * 1.4} className="pulse" /></g>; })()}
      </g>
    </svg>
  </div>;
}

export function Pair({ items }: { items: { img: string; anns?: Ann[]; cap?: ReactNode; crop?: [number, number, number, number] }[] }) {
  return <div className="pair" style={{ ['--n' as any]: items.length }}>
    {items.map((it, i) => <figure key={i} className="po" style={{ animationDelay: `${i * 0.25}s` }}>
      <div style={{ minHeight: 0 }}><Photo img={it.img} anns={it.anns} crop={it.crop} /></div>
      {it.cap && <figcaption>{it.cap}</figcaption>}
    </figure>)}
  </div>;
}

/* ---------- mapa real: teselas + OSM ---------- */
const mx = (lon: number, z: number) => ((lon + 180) / 360) * 256 * 2 ** z;
const my = (lat: number, z: number) => { const s = Math.sin((lat * Math.PI) / 180); return (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * 256 * 2 ** z; };
const TILES: Record<string, string> = {
  sat: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  gris: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  dark: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
};
export const TILE_CREDIT: Record<string, string> = {
  sat: 'Imagen satelital: Esri, Maxar, Earthstar Geographics',
  gris: 'Base cartográfica: Esri, HERE, Garmin (Dark Gray Canvas)',
};

export type MapProps = {
  site?: Site | null; bbox: [number, number, number, number]; base?: 'sat' | 'gris' | 'none';
  plan?: boolean; anns?: Ann[]; dim?: number; roadsOnly?: boolean;
};

export function GeoMap(props: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const s = useSize(ref);
  return <div className="fill" ref={ref} style={{ minHeight: 0, height: '100%' }}>{s.w > 0 && <GeoMapInner {...props} SW={s.w} SH={s.h} />}</div>;
}
function GeoMapInner({ site, bbox, base = 'sat', plan = false, anns = [], dim = 0, SW, SH }: MapProps & { SW: number; SH: number }) {
  const { mobile } = useStage();
  const data = useData(site);
  const [w0, s0, e0, n0] = bbox;
  const pxw = Math.max(SW, 300) * (window.devicePixelRatio > 1 ? 1.4 : 1);
  let z = Math.floor(Math.log2((pxw * 360) / (256 * (e0 - w0) * 1.15)));
  z = Math.max(2, Math.min(base === 'gris' ? 16 : 19, z));
  const X0 = mx(w0, z), X1 = mx(e0, z), Y0 = my(n0, z), Y1 = my(s0, z);
  const cx = (X0 + X1) / 2, cy = (Y0 + Y1) / 2;
  let vw = X1 - X0, vh = Y1 - Y0; const asp = SW / Math.max(SH, 1);
  if (vw / vh > asp) vh = vw / asp; else vw = vh * asp;
  const ox = cx - vw / 2, oy = cy - vh / 2;
  const P = (p: Pt) => [mx(p[0], z) - ox, my(p[1], z) - oy];
  const u = (vw / 62) * (mobile ? 1.5 : 1);
  const metersPerPx = (40075016.7 * Math.cos(((s0 + n0) / 2) * Math.PI / 180)) / (256 * 2 ** z);
  // vista interactiva (zoom y desplazamiento)
  const [view, setView] = useState({ k: 1, x: 0, y: 0 });
  const [slow, setSlow] = useState(false);
  const touched = useRef(false);
  const st = stopsOf(anns); const cur = useStops(st.map((s) => s.label));
  useEffect(() => {
    setSlow(true); touched.current = false;
    if (cur === null) { setView({ k: 1, x: 0, y: 0 }); return; }
    const [qx, qy] = P(st[cur].at); const k2 = 2.1;
    setView(clampV({ k: k2, x: vw / 2 - qx * k2, y: vh / 2 - qy * k2 }));
  }, [cur]); // eslint-disable-line
  const [show, setShow] = useState({ calles: true, anot: true });
  const [tip, setTip] = useState<null | { x: number; y: number; t: string; s: string }>(null);
  const drag = useRef<null | { x: number; y: number; vx: number; vy: number; moved: boolean }>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const svgPt = (cx2: number, cy2: number) => { const r = wrap.current!.getBoundingClientRect(); const s = Math.min(r.width / vw, r.height / vh); return [(cx2 - r.left - (r.width - vw * s) / 2) / s, (cy2 - r.top - (r.height - vh * s) / 2) / s, s] as const; };
  const zoomAt = (px: number, py: number, f: number) => setView((v) => { const k2 = Math.min(8, Math.max(1, v.k * f)); const ax = (px - v.x) / v.k, ay = (py - v.y) / v.k; return clampV({ k: k2, x: px - ax * k2, y: py - ay * k2 }); });
  const clampV = (v: { k: number; x: number; y: number }) => ({ k: v.k, x: Math.min(0, Math.max(vw - vw * v.k, v.x)), y: Math.min(0, Math.max(vh - vh * v.k, v.y)) });

  const tiles = useMemo(() => {
    if (base === 'none') return [];
    const t: [number, number][] = [];
    const tx0 = Math.floor(ox / 256), tx1 = Math.floor((ox + vw) / 256), ty0 = Math.floor(oy / 256), ty1 = Math.floor((oy + vh) / 256);
    for (let x = tx0; x <= tx1; x++) for (let y = ty0; y <= ty1; y++) t.push([x, y]);
    return t;
  }, [base, z, ox, oy, vw, vh]);
  const inView = (g: number[]) => { for (let j = 0; j < g.length; j += 2) { const x = mx(g[j], z) - ox, y = my(g[j + 1], z) - oy; if (x > 0 && x < vw && y > 0 && y < vh) return true; } return false; };
  const pts = (g: number[]) => { const o: number[][] = []; for (let j = 0; j < g.length; j += 2) o.push([mx(g[j], z) - ox, my(g[j + 1], z) - oy]); return o; };
  const toD = (g: number[], close: boolean) => 'M' + pts(g).map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + (close ? 'Z' : '');
  const RT: Record<string, string> = { footway: 'sendero peatonal', path: 'sendero', pedestrian: 'calle peatonal', cycleway: 'ciclovía', residential: 'calle residencial', tertiary: 'vía', secondary: 'vía arteria', primary: 'vía principal', trunk: 'troncal', service: 'vía de servicio', living_street: 'calle compartida', steps: 'escaleras' };
  const layers = useMemo(() => {
    if (!data) return null;
    const water = data.w.filter((f: any) => inView(f[2])).map((f: any) => toD(f[2], true)).join('');
    const green = data.l.filter((f: any) => /wood|forest|wetland|scrub|grass|village_green|beach|allotments/.test(f[2]) && inView(f[3])).map((f: any) => toD(f[3], true)).join('');
    const bld = data.b.filter((f: any) => inView(f[3]));
    const roads = data.r.filter((f: any) => inView(f[3]) && !/^ww_/.test(f[2]));
    const ww = data.r.filter((f: any) => /^ww_/.test(f[2]) && inView(f[3]));
    // una etiqueta por nombre de calle, sobre su tramo más largo
    const best: Record<string, { L: number; p: number[][] }> = {};
    for (const f of [...roads, ...ww]) {
      if (!f[1] || /^C\d|^BF|^T\d/.test(f[1])) continue;
      const p = pts(f[3]); let L = 0; for (let j = 1; j < p.length; j++) L += Math.hypot(p[j][0] - p[j - 1][0], p[j][1] - p[j - 1][1]);
      if (!best[f[1]] || best[f[1]].L < L) best[f[1]] = { L, p };
    }
    const labels = Object.entries(best).filter(([n, v]) => v.L > n.length * u * 0.62).map(([n, v]) => {
      let acc = 0, half = v.L / 2, j = 1;
      for (; j < v.p.length; j++) { const s = Math.hypot(v.p[j][0] - v.p[j - 1][0], v.p[j][1] - v.p[j - 1][1]); if (acc + s >= half) break; acc += s; }
      const a2 = v.p[Math.max(0, j - 1)], b2 = v.p[Math.min(v.p.length - 1, j)];
      let ang = (Math.atan2(b2[1] - a2[1], b2[0] - a2[0]) * 180) / Math.PI; if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
      return { n, x: (a2[0] + b2[0]) / 2, y: (a2[1] + b2[1]) / 2, ang };
    }).filter((l) => l.x > 0 && l.x < vw && l.y > 0 && l.y < vh);
    return { water, green, bld, roads, ww, labels };
  }, [data, z, ox, oy, vw, vh]);

  const onSat = base === 'sat';
  const TL = base === 'gris' ? TILES.dark : TILES[base];
  const hover = (t: string, s2: string) => (e: React.PointerEvent) => { const r = wrap.current!.getBoundingClientRect(); setTip({ x: e.clientX - r.left, y: e.clientY - r.top, t, s: s2 }); };
  return <div className="fill" ref={wrap} style={{ touchAction: 'none' }}
    onWheel={(e) => { touched.current = true; setSlow(false); const [px, py] = svgPt(e.clientX, e.clientY); zoomAt(px, py, e.deltaY < 0 ? 1.25 : 0.8); }}
    onPointerDown={(e) => { touched.current = true; setSlow(false); drag.current = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y, moved: false }; }}
    onPointerMove={(e) => { const d2 = drag.current; if (!d2) return; const s = svgPt(0, 0)[2]; const dx = (e.clientX - d2.x) / s, dy = (e.clientY - d2.y) / s; if (Math.abs(dx) + Math.abs(dy) > 3) d2.moved = true; setView((v) => clampV({ ...v, x: d2.vx + dx, y: d2.vy + dy })); }}
    onPointerUp={() => { if (drag.current?.moved) (window as any).__noClick = performance.now(); drag.current = null; }} onPointerLeave={() => { drag.current = null; setTip(null); }}
    onDoubleClick={() => setView({ k: 1, x: 0, y: 0 })}>
    <svg className="vis" viewBox={`0 0 ${vw} ${vh}`} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'hidden', cursor: drag.current ? 'grabbing' : 'grab' }}>
      <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`} style={{ transition: drag.current ? 'none' : slow ? 'transform 2.8s cubic-bezier(.33,0,.2,1)' : 'transform .25s ease' }}>
        <rect x={0} y={0} width={vw} height={vh} fill="#11110f" />
        {tiles.map(([x, y]) => <image key={x + '_' + y} href={TL.replace('{z}', String(z)).replace('{x}', String(x)).replace('{y}', String(y))} x={x * 256 - ox} y={y * 256 - oy} width={256.6} height={256.6} />)}
        {dim > 0 && <rect x={0} y={0} width={vw} height={vh} fill="#000" opacity={dim} />}
        {layers && <g>
          {plan && <>
            <path d={layers.green} fill={onSat ? 'none' : 'rgba(79,179,143,.12)'} />
            <path d={layers.water} fill={onSat ? 'rgba(91,155,224,.18)' : 'rgba(91,155,224,.22)'} />
            {layers.ww.map((f: any, i: number) => <path key={'w' + i} d={toD(f[3], false)} fill="none" stroke="rgba(120,180,240,.75)" strokeWidth={0.25 * u} />)}
          </>}
          {show.calles && layers.roads.map((f: any, i: number) => { const major = /trunk|primary|secondary|tertiary/.test(f[2]); return <path key={i} d={toD(f[3], false)} fill="none" stroke={onSat ? (major ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.28)') : major ? '#7d786d' : '#4a4740'} strokeWidth={(major ? 0.34 : 0.15) * u} />; })}
          {plan && <path d={layers.bld.map((f: any) => toD(f[3], true)).join('')} fill={onSat ? 'rgba(255,255,255,.14)' : '#3d3a33'} stroke={onSat ? 'rgba(255,255,255,.4)' : '#57534a'} strokeWidth={0.05 * u} />}
          {/* zonas sensibles al cursor */}
          {layers.bld.filter((f: any) => f[1]).map((f: any, i: number) => <path key={"hb" + i} className="feat-hit" d={toD(f[3], true)} fill="#000" fillOpacity={0} stroke="none" style={{ pointerEvents: "all" }} onPointerMove={hover(f[1], 'edificio · OSM')} onPointerLeave={() => setTip(null)} />)}
          {layers.roads.filter((f: any) => f[1]).map((f: any, i: number) => <path key={"hr" + i} className="feat-hit" d={toD(f[3], false)} fill="none" stroke="#000" strokeOpacity={0} style={{ pointerEvents: "stroke" }} strokeWidth={0.9 * u} onPointerMove={hover(f[1], (RT[f[2]] ?? f[2]) + ' · OSM')} onPointerLeave={() => setTip(null)} />)}
          {show.calles && layers.labels.map((l: any, i: number) => <text key={'lb' + i} x={l.x} y={l.y} transform={`rotate(${l.ang} ${l.x} ${l.y})`} textAnchor="middle" dy={0.28 * u} fontSize={0.62 * u / Math.sqrt(view.k)} fontFamily="JetBrains Mono, monospace" fontWeight={600} fill={onSat ? '#f3efe6' : '#bdb7aa'} paintOrder="stroke" stroke="rgba(0,0,0,.85)" strokeWidth={0.2 * u} style={{ pointerEvents: 'none' }}>{l.n}</text>)}
        </g>}
        {show.anot && <g className="anns" style={{ pointerEvents: "none" }}><Anns anns={anns} P={P} u={u / Math.pow(view.k, 0.75)} data={data} M={1 / metersPerPx} vb={[0, 0, vw, vh]} /></g>}
        {cur !== null && (() => { const [qx, qy] = P(st[cur].at); return <circle key={cur} cx={qx} cy={qy} r={2.4 * u / view.k * 1.3} fill="none" stroke={C.hl} strokeWidth={0.32 * u / view.k * 1.3} className="pulse" style={{ pointerEvents: 'none' }} />; })()}
      </g>
    </svg>
    {tip && <div className="tip" style={{ left: tip.x, top: tip.y }}>{tip.t}<small>{tip.s}</small></div>}
    <div className="mapctl" onPointerDown={(e) => e.stopPropagation()}>
      <button onClick={() => zoomAt(vw / 2, vh / 2, 1.5)}>Acercar</button>
      <button onClick={() => zoomAt(vw / 2, vh / 2, 1 / 1.5)}>Alejar</button>
      <button onClick={() => setView({ k: 1, x: 0, y: 0 })}>Encuadre</button>
      <button className={show.calles ? '' : 'off'} onClick={() => setShow((s) => ({ ...s, calles: !s.calles }))}>Calles</button>
      <button className={show.anot ? '' : 'off'} onClick={() => setShow((s) => ({ ...s, anot: !s.anot }))}>Anotaciones</button>
    </div>
    {!mobile && <span className="hint">Arrastra · rueda para acercar · cursor sobre calles y edificios</span>}
  </div>;
}

/* ---------- figura-fondo a la misma escala ---------- */
export function FigureGround({ items }: { items: { site: Site; center: Pt; label: string; c: string; boundary?: number }[] }) {
  const { mobile } = useStage();
  const R = 650; // metros de radio visible
  return <div className="pair" style={{ ['--n' as any]: items.length }}>
    {items.map((it, i) => <figure key={i} className="po" style={{ animationDelay: `${i * 0.3}s` }}>
      <div style={{ minHeight: 0 }}><FG {...it} R={R} mobile={mobile} /></div>
      <figcaption><b>{it.label}</b> · huellas de edificios de OpenStreetMap, misma escala</figcaption>
    </figure>)}
  </div>;
}
function FG({ site, center, c, boundary, R, mobile }: any) {
  const d = useData(site);
  const k = Math.cos((center[1] * Math.PI) / 180) * 111320, kl = 110540;
  const P = (p: Pt) => [(p[0] - center[0]) * k, -(p[1] - center[1]) * kl];
  const u = ((2 * R) / 62) * (mobile ? 1.3 : 1);
  const toD = (g: number[], close = true) => { let s = ''; for (let j = 0; j < g.length; j += 2) { const [x, y] = P([g[j], g[j + 1]]); s += (j ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); } return s + (close ? 'Z' : ''); };
  const near = (g: number[]) => Math.abs((g[0] - center[0]) * k) < R * 1.3 && Math.abs((g[1] - center[1]) * kl) < R * 1.3;
  if (!d) return null;
  const bld = d.b.filter((f: any) => near(f[3])).map((f: any) => toD(f[3])).join('');
  const water = d.w.filter((f: any) => near(f[2]) || f[2].length > 200).map((f: any) => toD(f[2])).join('');
  const roads = d.r.filter((f: any) => near(f[3]) && !/^ww_/.test(f[2])).map((f: any) => ({ d: toD(f[3], false), m: /trunk|primary|secondary|tertiary|residential/.test(f[2]) }));
  const bnd = boundary ? d.l.filter((f: any) => f[0] === boundary).map((f: any) => toD(f[3])).join('') : '';
  return <svg className="vis" viewBox={`${-R} ${-R} ${2 * R} ${2 * R}`}>
    <rect x={-R} y={-R} width={2 * R} height={2 * R} fill="#11110f" stroke={C.line} />
    <path d={water} fill="rgba(91,155,224,.22)" />
    {roads.map((r: any, i: number) => <path key={i} d={r.d} fill="none" stroke={r.m ? '#6e6a60' : '#3e3c35'} strokeWidth={r.m ? 6 : 2.5} strokeLinecap="round" />)}
    <path d={bld} fill={C.ink} />
    {bnd && <path d={bnd} fill="none" stroke={c} strokeWidth={0.45 * u} pathLength={1} className="dr" style={{ animationDelay: '.6s' }} />}
    <Anns anns={[{ t: 'scale', at: [0, 0], meters: 200 }]} P={() => [-R + 1.5 * u, R - 1.5 * u]} u={u} M={1} />
  </svg>;
}

/* ---------- utilidades ---------- */
export function useSize(ref: React.RefObject<HTMLElement | null>) {
  const [s, setS] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setS({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return s;
}
