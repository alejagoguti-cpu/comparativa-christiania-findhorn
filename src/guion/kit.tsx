/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

export const C = {
  ink: '#17150f', paper: '#f3efe6', mute: '#6b665c', line: '#d6cebd',
  chr: '#c4472b', fnd: '#2e6b57', ken: '#275d9b', hl: '#e3a51a', water: '#9fb9c4', white: '#ffffff',
};

/* ---------- contexto de escenario ---------- */
export const StageCtx = createContext({ w: 1200, h: 700, mobile: false });
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
      const bg = a.dark ? C.ink : '#fffdf7'; const fg = a.dark ? '#fff' : C.ink;
      out.push(<g key={i} className="po" style={st}>
        {(dx || dy) ? <line x1={x} y1={y} x2={Math.min(Math.max(x + dx, bx), bx + w)} y2={Math.min(Math.max(y + dy, by), by + h)} stroke={col} strokeWidth={0.2 * u} /> : null}
        {(dx || dy) ? <circle cx={x} cy={y} r={0.45 * u} fill={col} stroke="#fff" strokeWidth={0.15 * u} /> : null}
        <rect x={bx} y={by} width={w} height={h} fill={bg} stroke={col} strokeWidth={0.18 * u} rx={0.2 * u} />
        <rect x={bx} y={by} width={0.35 * u} height={h} fill={col} />
        {lines.map((l, k) => <text key={k} x={bx + fs * 0.7} y={by + fs * 0.3 + (k + 1) * fs * 1.2 - fs * 0.15} fontSize={fs} fontFamily="Inter Tight, Arial, sans-serif" fontWeight={k === 0 ? 600 : 400} fill={fg}>{l}</text>)}
      </g>);
    } else if (a.t === 'text') {
      const [x, y] = P(a.at); const fs = (a.size ?? 1) * 1.15 * u;
      out.push(<text key={i} className="po" style={st} x={x} y={y} fontSize={fs} textAnchor={a.anchor ?? 'middle'} fill={a.c ?? C.ink} fontFamily={a.italic ? 'Newsreader, Georgia, serif' : 'Inter Tight, Arial, sans-serif'} fontStyle={a.italic ? 'italic' : 'normal'} fontWeight={a.italic ? 500 : 600} paintOrder="stroke" stroke="rgba(255,253,247,.85)" strokeWidth={fs * 0.22}>{a.text}</text>);
    } else if (a.t === 'scale') {
      const [x, y] = P(a.at); const px = (M ?? 1) * a.meters; const fs = 0.95 * u;
      out.push(<g key={i} className="po" style={st}>
        <rect x={x - 0.4 * u} y={y - 1.9 * u} width={px + 0.8 * u} height={2.6 * u} fill="rgba(255,253,247,.85)" />
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

/* ---------- foto anotada ---------- */
export function Photo({ img, anns = [], crop, mcrop, frac = true }: { img: string; anns?: Ann[]; crop?: [number, number, number, number]; mcrop?: [number, number, number, number]; frac?: boolean }) {
  const { mobile } = useStage();
  const [f, w, h] = IMG[img];
  const vb = (mobile && mcrop) || crop || [0, 0, w, h];
  const u = (vb[2] / 62) * (mobile ? 1.45 : 1);
  // coordenadas en fracción (0–1) de la imagen completa si frac=true
  const P = (p: Pt) => (frac ? [p[0] * w, p[1] * h] : p);
  return <svg className="vis" viewBox={vb.join(' ')} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'hidden' }}>
    <image href={`guion/img/${f}`} x={0} y={0} width={w} height={h} preserveAspectRatio="none" />
    <Anns anns={anns} P={P} u={u} vb={vb} />
  </svg>;
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
  gris: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
};
export const TILE_CREDIT: Record<string, string> = {
  sat: 'Imagen satelital: Esri, Maxar, Earthstar Geographics',
  gris: 'Base cartográfica: Esri, HERE, Garmin',
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
  // ajustar caja a la proporción del escenario (cubrir, sin franjas)
  const X0 = mx(w0, z), X1 = mx(e0, z), Y0 = my(n0, z), Y1 = my(s0, z);
  const cx = (X0 + X1) / 2, cy = (Y0 + Y1) / 2;
  let vw = X1 - X0, vh = Y1 - Y0; const asp = SW / Math.max(SH, 1);
  if (vw / vh > asp) vh = vw / asp; else vw = vh * asp;
  const ox = cx - vw / 2, oy = cy - vh / 2;
  const vb = [0, 0, vw, vh];
  const P = (p: Pt) => [mx(p[0], z) - ox, my(p[1], z) - oy];
  const u = (vw / 62) * (mobile ? 1.5 : 1);
  const metersPerPx = (40075016.7 * Math.cos(((s0 + n0) / 2) * Math.PI / 180)) / (256 * 2 ** z);

  const tiles = useMemo(() => {
    if (base === 'none') return [];
    const t: [number, number][] = [];
    const tx0 = Math.floor(ox / 256), tx1 = Math.floor((ox + vw) / 256), ty0 = Math.floor(oy / 256), ty1 = Math.floor((oy + vh) / 256);
    for (let x = tx0; x <= tx1; x++) for (let y = ty0; y <= ty1; y++) t.push([x, y]);
    return t;
  }, [base, z, ox, oy, vw, vh]);

  const inView = (g: number[]) => {
    for (let j = 0; j < g.length; j += 2) {
      const x = mx(g[j], z) - ox, y = my(g[j + 1], z) - oy;
      if (x > 0 && x < vw && y > 0 && y < vh) return true;
    }
    return false;
  };
  const toD = (g: number[], close: boolean) => {
    let s = '';
    for (let j = 0; j < g.length; j += 2) s += (j ? 'L' : 'M') + (mx(g[j], z) - ox).toFixed(1) + ' ' + (my(g[j + 1], z) - oy).toFixed(1);
    return s + (close ? 'Z' : '');
  };
  const layers = useMemo(() => {
    if (!data || !plan) return null;
    const water = data.w.filter((f: any) => inView(f[2])).map((f: any) => toD(f[2], true)).join('');
    const green = data.l.filter((f: any) => /wood|forest|wetland|scrub|grass|village_green|beach|allotments/.test(f[2]) && inView(f[3])).map((f: any) => toD(f[3], true)).join('');
    const bld = data.b.filter((f: any) => inView(f[3])).map((f: any) => toD(f[3], true)).join('');
    const roads = data.r.filter((f: any) => inView(f[3]) && !/^ww_/.test(f[2])).map((f: any) => ({ d: toD(f[3], false), major: /trunk|primary|secondary|tertiary/.test(f[2]) }));
    const ww = data.r.filter((f: any) => /^ww_/.test(f[2]) && inView(f[3])).map((f: any) => toD(f[3], false)).join('');
    return { water, green, bld, roads, ww };
  }, [data, plan, z, ox, oy, vw, vh]);

  const onSat = base === 'sat';
  return <svg className="vis" viewBox={vb.join(' ')} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'hidden' }}>
    <rect x={0} y={0} width={vw} height={vh} fill={base === 'none' ? '#f7f4ec' : '#ddd8cc'} />
    {tiles.map(([x, y]) => <image key={x + '_' + y} href={TILES[base].replace('{z}', String(z)).replace('{x}', String(x)).replace('{y}', String(y))} x={x * 256 - ox} y={y * 256 - oy} width={256.6} height={256.6} />)}
    {dim > 0 && <rect x={0} y={0} width={vw} height={vh} fill={onSat ? '#0d0c08' : '#f3efe6'} opacity={dim} />}
    {layers && <g>
      <path d={layers.green} fill={onSat ? 'none' : '#e3e6d4'} />
      <path d={layers.water} fill={onSat ? 'rgba(120,170,200,.25)' : '#c9d9de'} />
      <path d={layers.ww} fill="none" stroke={onSat ? 'rgba(160,200,230,.7)' : '#9fbcc8'} strokeWidth={0.25 * u} />
      {layers.roads.map((r: any, i: number) => <path key={i} d={r.d} fill="none" stroke={onSat ? 'rgba(255,255,255,.35)' : r.major ? '#b9b2a2' : '#d2cbbb'} strokeWidth={(r.major ? 0.32 : 0.14) * u} />)}
      <path d={layers.bld} fill={onSat ? 'rgba(255,255,255,.18)' : '#5a554b'} stroke={onSat ? 'rgba(255,255,255,.45)' : 'none'} strokeWidth={0.05 * u} />
    </g>}
    <Anns anns={anns} P={P} u={u} data={data} M={1 / metersPerPx} vb={vb} />
  </svg>;
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
  const water = d.w.filter((f: any) => near(f[2])).map((f: any) => toD(f[2])).join('');
  const bnd = boundary ? d.l.filter((f: any) => f[0] === boundary).map((f: any) => toD(f[3])).join('') : '';
  return <svg className="vis" viewBox={`${-R} ${-R} ${2 * R} ${2 * R}`}>
    <rect x={-R} y={-R} width={2 * R} height={2 * R} fill="#fbfaf6" stroke={C.line} />
    <path d={water} fill="#d6e3e7" />
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
