/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { C, useStage, useStops } from './kit';
import { Ico, ico } from './icons';
const SI = (t: string, x: number, y: number, s: number, c: string) => { const I = ico(t); return <I x={x - s / 2} y={y - s / 2} width={s} height={s} color={c} strokeWidth={1.8} />; };

const D = (i: number, base = 0.15, step = 0.28) => ({ animationDelay: `${base + i * step}s` });

/* ---------- HTML interactivo ---------- */
const Arr = () => <svg viewBox="0 0 20 20"><path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
function useSel() { const [s, set] = useState<number | null>(null); return [s, (i: number) => set((v) => (v === i ? null : i))] as const; }
const offIn = (el: HTMLElement, root: HTMLElement) => { let x = 0, y = 0, e: HTMLElement | null = el; while (e && e !== root) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent as HTMLElement | null; } return [x, y]; };
/** cada clic acerca la cámara a un elemento del diagrama */
function useFocusZoom(labels: string[], scale = 1.25) {
  const cur = useStops(labels);
  const ref = useRef<HTMLDivElement>(null);
  const [st, setSt] = useState<React.CSSProperties>({});
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (cur === null) { setSt({ transform: 'none' }); return; }
    const it = el.querySelectorAll<HTMLElement>('[data-stop]')[cur]; if (!it) return;
    const [x, y] = offIn(it, el); const cx = x + it.offsetWidth / 2, cy = y + it.offsetHeight / 2;
    const W = el.offsetWidth, H = el.offsetHeight;
    setSt({ transform: `translate(${W / 2 - cx}px, ${H / 2 - cy}px) scale(${scale})`, transformOrigin: `${cx}px ${cy}px` });
    it.scrollIntoView?.({ block: 'nearest' });
  }, [cur]); // eslint-disable-line
  return { cur, ref, st };
}

export function Flow({ title, items }: { title?: string; items: { h: string; p?: string; c?: string }[] }) {
  const { cur, ref, st } = useFocusZoom(items.map((x) => x.h), 1.18);
  return <div className={'dg zoomwrap' + (cur !== null ? ' focusing' : '')} ref={ref} style={st}>
    {title && <h3 className="po">{title}</h3>}
    <div className="flow">
      {items.map((it, i) => <FlowItem key={i} i={i} it={it} last={i === items.length - 1} sel={cur === i} on={() => {}} />)}
    </div>
  </div>;
}
function FlowItem({ it, i, last, sel, on }: any) {
  return <>
    <div data-stop className={'card po' + (sel ? ' sel' : '')} onClick={on} style={{ ...D(i, 0.1, 0.35), ['--c' as any]: it.c ?? C.mute }}><span className="ico"><Ico t={it.h + ' ' + (it.p ?? '')} /></span><span className="k">{String(i + 1).padStart(2, '0')}</span><h4>{it.h}</h4>{it.p && <p>{it.p}</p>}</div>
    {!last && <div className="ar po" style={D(i, 0.3, 0.35)}><Arr /></div>}
  </>;
}

export function Cols({ cols }: { cols: { h: string; c?: string; rows: [string, string][] }[] }) {
  const { cur, ref, st } = useFocusZoom(cols.map((x) => x.h), 1.12);
  return <div className={'dg zoomwrap' + (cur !== null ? ' focusing' : '')} ref={ref} style={st}><div className="cols" style={{ ['--n' as any]: cols.length }}>
    {cols.map((c, i) => <div key={i} data-stop className={'col po' + (cur === i ? ' sel' : '')} style={{ ...D(i, 0.1, 0.25), ['--c' as any]: c.c ?? C.mute }}>
      <h4>{c.h}</h4>
      {c.rows.map((r, k) => <div className="row po" key={k} style={D(k, 0.4 + i * 0.12, 0.3)}><span><i className="rico"><Ico t={r[0] + ' ' + r[1]} size={16} /></i>{r[0]}</span><span>{r[1]}</span></div>)}
    </div>)}
  </div></div>;
}

export function Timeline({ events, phases, title }: { title?: string; events: { y: string; h: string; p?: string; c?: string }[]; phases?: { t: string; c: string; span: number }[] }) {
  const { cur: sel, ref, st } = useFocusZoom(events.map((x) => x.y + ' · ' + x.h), 1.3);
  const tog = (_i: number) => {};
  const pct = sel === null ? 100 : ((sel + 0.5) / events.length) * 100;
  return <div className={'dg zoomwrap' + (sel !== null ? ' focusing' : '')} ref={ref} style={st}>
    {title && <h3 className="po">{title}</h3>}
    <div className="tl" style={{ ['--n' as any]: events.length }}>
      {phases && <div className="ph" style={{ ['--ph' as any]: phases.map((p) => p.span + 'fr').join(' ') }}>
        {phases.map((p, i) => <span key={i} className="po" style={{ ...D(i, 0.1, 0.2), ['--c' as any]: p.c }}>{p.t}</span>)}
      </div>}
      <div className="axis"><b style={{ width: pct + '%' }} /></div>
      <div className="evs">
        {events.map((e, i) => <button key={i} data-stop className={'ev po' + (sel === i ? ' sel' : '')} onClick={() => tog(i)} style={{ ...D(i, 0.3, 0.35), ['--c' as any]: e.c ?? C.ink, opacity: sel !== null && sel !== i ? 0.4 : undefined }}>
          <span className="dot" /><span className="y"><Ico t={e.h + ' ' + (e.p ?? '')} size={18} /> {e.y}</span><h4>{e.h}</h4>{e.p && <p>{e.p}</p>}
        </button>)}
      </div>
    </div>
  </div>;
}

export function Chk({ title, items, n }: { title?: string; n?: number; items: { k?: string; h: string; p?: string; c?: string }[] }) {
  const { cur: sel, ref, st } = useFocusZoom(items.map((x) => x.h), 1.25);
  const tog = (_i: number) => {};
  return <div className={'dg zoomwrap' + (sel !== null ? ' focusing' : '')} ref={ref} style={st}>
    {title && <h3 className="po">{title}</h3>}
    <div className="grid" style={{ ['--n' as any]: n ?? items.length }}>
      {items.map((it, i) => <div key={i} data-stop className={'card po' + (sel === i ? ' sel' : '')} onClick={() => tog(i)} style={{ ...D(i, 0.1, 0.25), ['--c' as any]: it.c ?? C.mute }}><span className="ico"><Ico t={it.h + ' ' + (it.p ?? '') + ' ' + (it.k ?? '')} /></span>{it.k && <span className="k">{it.k}</span>}<h4>{it.h}</h4>{it.p && <p>{it.p}</p>}</div>)}
    </div>
  </div>;
}

export function Big({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return <div className="dg"><p className="big po">{children}</p>{sub && <div className="po" style={D(1, 0.4, 0.6)}>{sub}</div>}</div>;
}

export function Qs({ items, title }: { title?: string; items: { k: string; q: string }[] }) {
  const { cur: sel, ref, st } = useFocusZoom(items.map((x) => x.q), 1.22);
  const tog = (_i: number) => {};
  return <div className={'dg zoomwrap' + (sel !== null ? ' focusing' : '')} ref={ref} style={st}>{title && <h3 className="po">{title}</h3>}<div className="qs">
    {items.map((it, i) => <div key={i} data-stop className={'card po' + (sel === i ? ' sel' : '')} onClick={() => tog(i)} style={{ ...D(i, 0.15, 0.4), ['--c' as any]: [C.chr, C.fnd, C.ken][i % 3] }}><span className="ico"><Ico t={it.q + ' ' + it.k} size={28} /></span><span className="k">{it.k}</span><h4>{it.q}</h4></div>)}
  </div></div>;
}

/* ---------- SVG con proporción según dispositivo ---------- */
function useVB(wide: [number, number], tall: [number, number]) {
  const { tall: mobile } = useStage();
  return mobile ? tall : wide;
}
const T = (x: number, y: number, s: string, o: any = {}) => <text x={x} y={y} textAnchor={o.a ?? 'middle'} fontSize={o.fs ?? 26} fontWeight={o.fw ?? 500} fill={o.c ?? C.ink} fontFamily="Inter Tight, Arial, sans-serif" fontStyle="normal">{s}</text>;
const ML = (x: number, y: number, s: string, o: any = {}) => s.split('\n').map((l, i) => <g key={i}>{T(x, y + i * (o.fs ?? 26) * 1.2, l, o)}</g>);

/** Ciclo: nodos en círculo con flechas; rupturas opcionales. */
export function Cycle({ nodes, center, breaks = [], examples }: { nodes: { h: string; c?: string }[]; center?: string; breaks?: { at: number; text: string }[]; examples?: { at: number; text: string; c: string }[] }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 900] : [1600, 900];
  const cx = W / 2, cy = H / 2 + (mobile ? 10 : 0), R = mobile ? 285 : 300;
  const n = nodes.length;
  const pos = nodes.map((_, i) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
  const fs = mobile ? 30 : 27;
  const cur = useStops(nodes.map((x) => x.h.replace(/\n/g, ' ')));
  const cam = cur === null ? 'none' : `translate(${W / 2 - pos[cur][0] * 1.6}px, ${H / 2 - pos[cur][1] * 1.6}px) scale(1.6)`;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`} style={{ overflow: 'hidden' }}><g style={{ transform: cam, transformOrigin: '0 0', transition: 'transform 1.1s cubic-bezier(.4,0,.2,1)' }}>
    <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill={C.ink} /></marker></defs>
    {pos.map((p, i) => {
      const a0 = -Math.PI / 2 + (i / n) * Math.PI * 2 + 0.33, a1 = -Math.PI / 2 + ((i + 1) / n) * Math.PI * 2 - 0.33;
      const d = `M${cx + R * Math.cos(a0)} ${cy + R * Math.sin(a0)}A${R} ${R} 0 0 1 ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)}`;
      return <path key={'a' + i} d={d} fill="none" stroke={C.ink} strokeWidth={3} markerEnd="url(#ah)" pathLength={1} className="dr" style={D(i, 0.6, 0.55)} />;
    })}
    {center && <g className="po" style={D(n, 0.6, 0.55)}>{ML(cx, cy - 8, center, { serif: true, it: true, fs: mobile ? 36 : 34, c: C.mute })}</g>}
    {pos.map((p, i) => <g key={i} className="po" style={D(i, 0.3, 0.55)}>
      <circle cx={p[0]} cy={p[1]} r={mobile ? 92 : 86} fill="#1a1a17" stroke={nodes[i].c ?? C.ink} strokeWidth={3} />
      {SI(nodes[i].h, p[0], p[1] - (mobile ? 58 : 54), mobile ? 30 : 28, nodes[i].c ?? C.ink)}
      {ML(p[0], p[1] - (nodes[i].h.split('\n').length - 1) * fs * 0.6 + fs * 0.55, nodes[i].h, { fs, fw: 600 })}
    </g>)}
    {breaks.map((b, i) => {
      const a = -Math.PI / 2 + ((b.at + 0.5) / n) * Math.PI * 2; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      const ox = Math.cos(a) * (mobile ? 0 : 150), oy = Math.sin(a) * (mobile ? 150 : 60);
      return <g key={'b' + i} className="po" style={D(i, 0.4, 0.6)}>
        <circle cx={x} cy={y} r={26} fill={C.chr} />
        <path d={`M${x - 11} ${y - 11}L${x + 11} ${y + 11}M${x + 11} ${y - 11}L${x - 11} ${y + 11}`} stroke="#fff" strokeWidth={5} />
        <rect x={x + ox - 150} y={y + oy - 26} width={300} height={44} rx={4} fill={C.chr} />
        {T(x + ox, y + oy + 5, b.text, { fs: 22, fw: 600, c: '#fff' })}
      </g>;
    })}
    {examples?.map((e, i) => {
      const a = -Math.PI / 2 + (e.at / n) * Math.PI * 2; const x = cx + (R + 175) * Math.cos(a), y = cy + (R + 120) * Math.sin(a);
      return <g key={'e' + i} className="po" style={D(i, 0.4, 0.5)}>{ML(Math.min(Math.max(x, 170), W - 170), y, e.text, { fs: 20, c: e.c, fw: 600 })}</g>;
    })}
  </g></svg>;
}

/** Red de actores (radial). */
export function Net({ center, nodes, links = [] }: { center: { h: string; c: string }; nodes: { h: string; p?: string; c: string }[]; links?: [number, number, string?][] }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 1000] : [1600, 900];
  const cx = W / 2, cy = H / 2, rx = mobile ? 280 : 560, ry = mobile ? 390 : 330;
  const pos = nodes.map((_, i) => { const a = -Math.PI / 2 + (i / nodes.length) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const cur = useStops(nodes.map((x) => x.h));
  const cam = cur === null ? 'none' : `translate(${W / 2 - pos[cur][0] * 1.7}px, ${H / 2 - pos[cur][1] * 1.7}px) scale(1.7)`;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`} style={{ overflow: 'hidden' }}><g style={{ transform: cam, transformOrigin: '0 0', transition: 'transform 1.1s cubic-bezier(.4,0,.2,1)' }}>
    {pos.map((p, i) => <line key={'l' + i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke={C.line} strokeWidth={2} pathLength={1} className="dr" style={D(i, 0.3, 0.25)} />)}
    {links.map(([a, b, t], i) => <g key={'k' + i} className="po" style={D(i, 2.4, 0.5)}>
      <line x1={pos[a][0]} y1={pos[a][1]} x2={pos[b][0]} y2={pos[b][1]} stroke={C.chr} strokeWidth={3} strokeDasharray="8 7" />
      {t && T((pos[a][0] + pos[b][0]) / 2, (pos[a][1] + pos[b][1]) / 2 - 10, t, { fs: 19, c: C.chr, fw: 600 })}
    </g>)}
    <g className="po"><circle cx={cx} cy={cy} r={mobile ? 105 : 95} fill={center.c} />{ML(cx, cy - 6, center.h, { fs: mobile ? 26 : 24, c: '#fff', fw: 600 })}</g>
    {pos.map((p, i) => <g key={i} className="po" style={D(i, 0.5, 0.3)}>
      <rect x={p[0] - (mobile ? 170 : 185)} y={p[1] - 46} width={mobile ? 340 : 370} height={nodes[i].p ? 96 : 66} rx={6} fill="#1a1a17" stroke={nodes[i].c} strokeWidth={2.5} />
      <rect x={p[0] - (mobile ? 170 : 185)} y={p[1] - 46} width={8} height={nodes[i].p ? 96 : 66} fill={nodes[i].c} />
      {SI(nodes[i].h + ' ' + (nodes[i].p ?? ''), p[0] - (mobile ? 140 : 155), p[1] - 12 + (nodes[i].p ? 14 : 0), 30, nodes[i].c)}
      {T(p[0] + 18, p[1] - 10, nodes[i].h, { fs: mobile ? 23 : 22, fw: 600 })}
      {nodes[i].p && ML(p[0] + 18, p[1] + 20, nodes[i].p!, { fs: mobile ? 17 : 17, c: C.mute, fw: 400 })}
    </g>)}
  </g></svg>;
}

/** Sankey cualitativo: fuentes -> nodo -> destinos (horizontal o vertical en celular). */
export function Sankey({ sources, mid, targets, note, leak }: { sources: { h: string; v: number; c?: string }[]; mid: { h: string; c: string }; targets: { h: string; v: number; c?: string }[]; note?: string; leak?: { h: string; v: number } }) {
  const { tall: mobile } = useStage();
  const [hv, setHv] = useState<string | null>(null);
  const [W, H] = mobile ? [800, 1000] : [1600, 820];
  const L = mobile ? H : W, S = mobile ? W : H; // L eje del flujo, S eje transversal
  const tot = Math.max(sources.reduce((a, b) => a + b.v, 0), targets.reduce((a, b) => a + b.v, 0) + (leak?.v ?? 0));
  const gap = 18, usable = S * 0.72; const k = (usable - gap * 4) / tot;
  const p0 = L * 0.2, pm = L * 0.5, p1 = L * 0.8, mw = 34;
  const midH = tot * k; const midS = (S - midH) / 2;
  const P = (l: number, s: number) => (mobile ? [s, l] : [l, s]);
  const band = (la: number, sa: number, lb: number, sb: number, h: number) => {
    const [x1, y1] = P(la, sa), [x2, y2] = P(lb, sb), [x3, y3] = P(lb, sb + h), [x4, y4] = P(la, sa + h);
    const lm = (la + lb) / 2;
    const [c1x, c1y] = P(lm, sa), [c2x, c2y] = P(lm, sb), [c3x, c3y] = P(lm, sb + h), [c4x, c4y] = P(lm, sa + h);
    return `M${x1} ${y1}C${c1x} ${c1y} ${c2x} ${c2y} ${x2} ${y2}L${x3} ${y3}C${c3x} ${c3y} ${c4x} ${c4y} ${x4} ${y4}Z`;
  };
  let s = (S - (sources.reduce((a, b) => a + b.v, 0) * k + gap * (sources.length - 1))) / 2; let ms = midS;
  const src = sources.map((it) => { const r = { ...it, s, h: it.v * k, ms }; s += it.v * k + gap; ms += it.v * k; return r; });
  const allT = leak ? [...targets, { h: leak.h, v: leak.v, c: '#b9b2a2' }] : targets;
  let t = (S - (allT.reduce((a, b) => a + b.v, 0) * k + gap * (allT.length - 1))) / 2; ms = midS;
  const tgt = allT.map((it) => { const r = { ...it, s: t, h: it.v * k, ms }; t += it.v * k + gap; ms += it.v * k; return r; });
  const fs = mobile ? 24 : 23;
  const lab = (l: number, sPos: number, txt: string, side: 'a' | 'b', c: string, i: number) => {
    const [x, y] = mobile ? [sPos, l + (side === 'a' ? -14 - (i % 2) * 44 : 34 + (i % 2) * 44)] : [l + (side === 'a' ? -14 : 14), sPos + 8];
    const a = mobile ? 'middle' : side === 'a' ? 'end' : 'start';
    const ix = mobile ? x : side === 'a' ? x - txt.split('\n').reduce((m2, l2) => Math.max(m2, l2.length), 0) * fs * 0.55 - 22 : x + txt.split('\n').reduce((m2, l2) => Math.max(m2, l2.length), 0) * fs * 0.55 + 22;
    return <g key={txt} className="po" style={D(i, 0.2, 0.2)}>{SI(txt, ix, mobile ? y - (side === 'a' ? 30 + (txt.split('\n').length - 1) * fs * 1.2 : -34 - (txt.split('\n').length - 1) * fs * 1.2) : y - 7, 26, c)}{ML(x, y - (mobile && side === 'a' ? (txt.split('\n').length - 1) * fs * 1.2 : 0), txt, { fs: mobile ? 19 : fs, a, c, fw: 600 })}</g>;
  };
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    {src.map((r, i) => <path key={'s' + i} d={band(p0 + 10, r.s, pm - mw / 2, r.ms, r.h)} fill={r.c ?? C.ink} fillOpacity={hv === 's' + i ? 0.7 : 0.34} className="fa" style={{ ...D(i, 0.4, 0.3), cursor: 'pointer', transition: 'fill-opacity .2s' }} onPointerEnter={() => setHv('s' + i)} onPointerLeave={() => setHv(null)} />)}
    {tgt.map((r, i) => <path key={'t' + i} d={band(pm + mw / 2, r.ms, p1 - 10, r.s, r.h)} fill={r.c ?? mid.c} fillOpacity={hv === 't' + i ? 0.7 : 0.34} className="fa" style={{ ...D(i, 1.6, 0.3), cursor: 'pointer', transition: 'fill-opacity .2s' }} onPointerEnter={() => setHv('t' + i)} onPointerLeave={() => setHv(null)} />)}
    {src.map((r, i) => { const [x, y] = P(p0, r.s); return <rect key={'sr' + i} x={x} y={y} width={mobile ? r.h : 10} height={mobile ? 10 : r.h} fill={r.c ?? C.ink} className="po" style={D(i, 0.2, 0.2)} />; })}
    {tgt.map((r, i) => { const [x, y] = P(p1 - 10, r.s); return <rect key={'tr' + i} x={x} y={y} width={mobile ? r.h : 10} height={mobile ? 10 : r.h} fill={r.c ?? mid.c} className="po" style={D(i, 1.6, 0.2)} />; })}
    {(() => { const [x, y] = P(pm - mw / 2, midS); return <rect x={x} y={y} width={mobile ? midH : mw} height={mobile ? mw : midH} fill={mid.c} className="po" style={D(0, 1, 0)} />; })()}
    {(() => { const [x, y] = mobile ? [W / 2, pm + 6] : [pm, midS - 22]; return <g className="po" style={D(0, 1, 0)}>{mobile ? <><rect x={x - 180} y={y - 30} width={360} height={46} fill={C.paper} />{T(x, y, mid.h, { fs: 26, fw: 700, c: mid.c })}</> : T(x, y, mid.h, { fs: 28, fw: 700, c: mid.c })}</g>; })()}
    {src.map((r, i) => lab(p0, r.s + r.h / 2, sources[i].h, 'a', r.c ?? C.ink, i))}
    {tgt.map((r, i) => lab(p1, r.s + r.h / 2, allT[i].h, 'b', (r as any).c ?? mid.c, i + 4))}
    {note && <g className="po" style={D(6, 0.5, 0.3)}>{T(W / 2, H - 14, note, { fs: 17, c: C.mute, fw: 400, it: true, serif: true })}</g>}
  </svg>;
}

/** Barras horizontales simples con resaltado. */
export function Bars({ rows, max, unit, hl = [], title }: { rows: { k: string; v: number; c?: string }[]; max: number; unit: string; hl?: number[]; title?: string }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 760] : [1600, 760];
  const x0 = mobile ? 250 : 420, x1 = W - (mobile ? 90 : 220); const rh = (H - 120) / rows.length;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    {title && T(20, 40, title, { a: 'start', fs: mobile ? 19 : 22, fw: 600, c: C.mute })}
    {rows.map((r, i) => {
      const y = 80 + i * rh; const w = ((x1 - x0) * r.v) / max; const on = hl.includes(i);
      return <g key={i}>
        {SI(r.k, 26, y + rh * 0.38, 28, r.c ?? C.mute)}
        {T(x0 - 16, y + rh * 0.42, r.k, { a: 'end', fs: mobile ? 23 : 25, fw: on ? 700 : 500 })}
        <rect x={x0} y={y + rh * 0.12} width={w} height={rh * 0.52} fill={r.c ?? (on ? C.chr : '#b9b2a2')} style={{ transformOrigin: `${x0}px 0`, animation: `grow .9s ${0.2 + i * 0.12}s cubic-bezier(.3,.7,.3,1) both` }} />
        <g className="po" style={D(i, 0.8, 0.12)}>{T(x0 + w + 12, y + rh * 0.48, `${r.v.toString().replace('.', ',')} ${unit}`, { a: 'start', fs: mobile ? 22 : 24, fw: 600, c: on ? C.chr : C.mute })}</g>
      </g>;
    })}
    <style>{'@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}'}</style>
  </svg>;
}

/** Potencia, energía, demanda y cobertura (perfil ilustrativo de 48 h). */
export function Energy({ phase }: { phase: number }) {
  const { tall: mobile } = useStage();
  const [hr, setHr] = useState<number | null>(null);
  const [W, H] = mobile ? [800, 860] : [1600, 820];
  const x0 = mobile ? 70 : 110, x1 = W - (mobile ? 30 : 60), y0 = mobile ? 640 : 680, y1 = mobile ? 120 : 110;
  const N = 96; const cap = 750;
  // viento: serie sintética reproducible (no datos medidos)
  const wind = Array.from({ length: N }, (_, i) => { const t = i / N; const v = 0.55 + 0.38 * Math.sin(t * 6.3 + 0.8) + 0.18 * Math.sin(t * 23 + 1.3) - 0.25 * Math.exp(-(((t - 0.62) / 0.08) ** 2)); return Math.max(0, Math.min(1, v)) * cap * 0.92; });
  const dem = Array.from({ length: N }, (_, i) => { const h = (i % 48) / 2; return 160 + 120 * Math.exp(-(((h - 8) / 2.2) ** 2)) + 170 * Math.exp(-(((h - 19) / 2.6) ** 2)) + 40 * Math.sin(h / 3); });
  const X = (i: number) => x0 + ((x1 - x0) * i) / (N - 1); const Y = (v: number) => y0 - ((y0 - y1) * v) / 800;
  const line = (a: number[]) => a.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join('');
  const area = (a: number[]) => line(a) + `L${X(N - 1)} ${y0}L${x0} ${y0}Z`;
  const surplus = wind.map((w, i) => Math.max(w, dem[i])); const covered = wind.map((w, i) => Math.min(w, dem[i]));
  const fs = mobile ? 22 : 22;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    <line x1={x0} y1={y0} x2={x1} y2={y0} stroke={C.ink} strokeWidth={2} />
    <line x1={x0} y1={y0} x2={x0} y2={y1 - 20} stroke={C.ink} strokeWidth={2} />
    {[0, 200, 400, 600, 800].map((v) => <g key={v}><line x1={x0} x2={x1} y1={Y(v)} y2={Y(v)} stroke={C.line} />{T(x0 - 10, Y(v) + 7, String(v), { a: 'end', fs: 18, c: C.mute })}</g>)}
    {T(x0, y1 - 34, 'kW', { a: 'start', fs: 18, c: C.mute })}
    {[0, 12, 24, 36, 48].map((h) => <g key={h}>{T(X((h / 48) * (N - 1)), y0 + 30, h + ' h', { fs: 18, c: C.mute })}</g>)}
    {/* 1 potencia instalada */}
    <g className="po"><line x1={x0} x2={x1} y1={Y(cap)} y2={Y(cap)} stroke={C.fnd} strokeWidth={3} strokeDasharray="10 8" />
      {T(x1, Y(cap) - 12, 'Potencia instalada: 750 kW (capacidad nominal)', { a: 'end', fs, fw: 700, c: C.fnd })}</g>
    {phase >= 1 && <g>
      <path d={area(wind)} fill={C.fnd} fillOpacity={0.22} className="fa" />
      <path d={line(wind)} fill="none" stroke={C.fnd} strokeWidth={3} pathLength={1} className="dr" />
      <g className="po" style={D(0, 1.2)}>{T(X(12), Y(wind[12]) - 18, 'Generación según el viento', { a: 'start', fs, fw: 600, c: C.fnd })}
        {T(X(30), y0 - 30, 'Energía = área bajo la curva (kWh)', { a: 'start', fs: fs - 2, fw: 600, c: C.fnd })}</g>
    </g>}
    {phase >= 2 && <g>
      <path d={line(dem)} fill="none" stroke={C.ink} strokeWidth={3.5} pathLength={1} className="dr" />
      <g className="po" style={D(0, 1.1)}>{T(X(76), Y(dem[76]) - 20, 'Demanda de la comunidad', { fs, fw: 700 })}</g>
    </g>}
    {phase >= 3 && <g>
      <path d={line(surplus) + 'L' + [...covered].reverse().map((v, j) => X(N - 1 - j).toFixed(1) + ' ' + Y(v).toFixed(1)).join('L') + 'Z'} fill="none" />
      {wind.map((w, i) => i < N - 1 && <g key={i}>
        {w > dem[i] && <rect x={X(i)} y={Y(w)} width={X(1) - X(0) + 0.5} height={Y(dem[i]) - Y(w)} fill={C.hl} fillOpacity={0.6} className="fa" style={D(i, 0.2, 0.012)} />}
        {w < dem[i] && <rect x={X(i)} y={Y(dem[i])} width={X(1) - X(0) + 0.5} height={Y(w) - Y(dem[i])} fill={C.chr} fillOpacity={0.55} className="fa" style={D(i, 0.2, 0.012)} />}
      </g>)}
      <g className="po" style={D(0, 1.6)}>
        <rect x={mobile ? x0 + 10 : x1 - 420} y={mobile ? H - 120 : y1 + 40} width={22} height={22} fill={C.hl} />{T((mobile ? x0 + 10 : x1 - 420) + 34, (mobile ? H - 120 : y1 + 40) + 19, 'Excedente: se exporta a la red', { a: 'start', fs: 20, fw: 600 })}
        <rect x={mobile ? x0 + 10 : x1 - 420} y={mobile ? H - 82 : y1 + 74} width={22} height={22} fill={C.chr} opacity={0.7} />{T((mobile ? x0 + 10 : x1 - 420) + 34, (mobile ? H - 82 : y1 + 74) + 19, 'Déficit: se importa de la red', { a: 'start', fs: 20, fw: 600 })}
      </g>
    </g>}
    {hr !== null && (() => { const i = Math.round((hr / 48) * (N - 1)); const w = wind[i], dm = dem[i]; const x = X(i); return <g>
      <line x1={x} x2={x} y1={y1 - 10} y2={y0} stroke={C.ink} strokeWidth={1.5} strokeDasharray="4 4" />
      {phase >= 1 && <circle cx={x} cy={Y(w)} r={9} fill={C.fnd} stroke="#000" strokeWidth={2} />}
      {phase >= 2 && <circle cx={x} cy={Y(dm)} r={9} fill={C.ink} stroke="#000" strokeWidth={2} />}
      <rect x={Math.min(x + 14, x1 - 330)} y={y1 + 120} width={320} height={phase >= 2 ? 112 : 70} rx={8} fill="#050505" stroke={C.line} />
      {T(Math.min(x + 14, x1 - 330) + 16, y1 + 150, `Hora ${hr.toFixed(0)}`, { a: 'start', fs: 20, fw: 700 })}
      {phase >= 1 && T(Math.min(x + 14, x1 - 330) + 16, y1 + 180, `Generación: ${Math.round(w)} kW`, { a: 'start', fs: 19, c: C.fnd, fw: 600 })}
      {phase >= 2 && T(Math.min(x + 14, x1 - 330) + 16, y1 + 208, `Demanda: ${Math.round(dm)} kW · ${w >= dm ? 'exporta ' + Math.round(w - dm) : 'importa ' + Math.round(dm - w)} kW`, { a: 'start', fs: 19, c: w >= dm ? C.hl : C.chr, fw: 600 })}
    </g>; })()}
    <rect x={x0} y={y1 - 20} width={x1 - x0} height={y0 - y1 + 20} fill="transparent" style={{ cursor: 'crosshair' }}
      onPointerMove={(e) => { const sv = (e.currentTarget.ownerSVGElement)!; const pt = sv.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; const q = pt.matrixTransform(sv.getScreenCTM()!.inverse()); setHr(Math.max(0, Math.min(48, ((q.x - x0) / (x1 - x0)) * 48))); }}
      onPointerLeave={() => setHr(null)} />
    {T(W / 2, H - 6, 'Perfil ilustrativo de 48 horas, no medición. Solo la potencia instalada (750 kW) es un dato real. Pasa el cursor para leer cada hora.', { fs: 16, c: C.mute, fw: 400 })}
  </svg>;
}

/** Diagrama causal (hipótesis de modelamiento). */
export function CLD({ step }: { step: number }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 1000] : [1600, 860];
  const n: Record<string, [number, number]> = mobile ? {
    rec: [400, 250], con: [650, 500], inf: [400, 750], cap: [150, 500], cos: [640, 90], dep: [160, 900], dec: [650, 900],
  } : {
    rec: [600, 170], con: [900, 400], inf: [640, 680], cap: [330, 430], cos: [1040, 110], dep: [160, 740], dec: [1300, 640],
  };
  const lab: Record<string, string> = { rec: 'Recursos\ncompartidos', con: 'Conocimiento\ntransmitido', inf: 'Infraestructura\nmantenida', cap: 'Capacidad de\nadaptación', cos: 'Costos', dep: 'Dependencias\nexternas', dec: 'Concentración\nde decisiones' };
  const pos = (a: string, b: string, sign: '+' | '−', c: string, i: number, base: number, bend = 0.22) => {
    const [x1, y1] = n[a], [x2, y2] = n[b];
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy); const r = 92;
    const sx = x1 + (dx / L) * r, sy = y1 + (dy / L) * r, ex = x2 - (dx / L) * (r + 8), ey = y2 - (dy / L) * (r + 8);
    const mx = (sx + ex) / 2 - dy * bend, my = (sy + ey) / 2 + dx * bend;
    return <g key={a + b} style={D(i, base, 0.35)} className="po">
      <path d={`M${sx} ${sy}Q${mx} ${my} ${ex} ${ey}`} fill="none" stroke={c} strokeWidth={3.5} markerEnd={`url(#m${c === C.chr ? 'r' : 'k'})`} />
      <circle cx={mx * 0.5 + (sx + ex) / 4} cy={my * 0.5 + (sy + ey) / 4} r={17} fill={c} />
      {T(mx * 0.5 + (sx + ex) / 4, my * 0.5 + (sy + ey) / 4 + 8, sign, { fs: 24, fw: 800, c: '#0a0a09' })}
    </g>;
  };
  const node = (k: string, c: string, i: number, base: number) => <g key={k} className="po" style={D(i, base, 0.25)}>
    <ellipse cx={n[k][0]} cy={n[k][1]} rx={mobile ? 122 : 116} ry={70} fill="#1a1a17" stroke={c} strokeWidth={3} />
    {SI(lab[k], n[k][0], n[k][1] - 40, 24, c)}
    {ML(n[k][0], n[k][1] + 4, lab[k], { fs: mobile ? 23 : 22, fw: 600 })}
  </g>;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    <defs>
      <marker id="mk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill={C.ink} /></marker>
      <marker id="mr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill={C.chr} /></marker>
    </defs>
    {['rec', 'con', 'inf', 'cap'].map((k, i) => node(k, C.fnd, i, 0.1))}
    {pos('rec', 'con', '+', C.ink, 0, 0.9)}{pos('con', 'inf', '+', C.ink, 1, 0.9)}{pos('inf', 'cap', '+', C.ink, 2, 0.9)}{pos('cap', 'rec', '+', C.ink, 3, 0.9)}
    <g className="po" style={D(0, 2.4)}>{T(mobile ? 400 : 620, mobile ? 505 : 445, 'R', { fs: 54, fw: 700, c: C.fnd, serif: true })}{T(mobile ? 400 : 620, mobile ? 540 : 481, 'refuerzo', { fs: 19, c: C.fnd })}</g>
    {step >= 1 && <g>
      {['cos', 'dep', 'dec'].map((k, i) => node(k, C.chr, i, 0.1))}
      {pos('cos', 'rec', '−', C.chr, 0, 0.6, 0.12)}{pos('dep', 'cap', '−', C.chr, 1, 0.6, 0.12)}{pos('dec', 'con', '−', C.chr, 2, 0.6, 0.12)}
      <g className="po" style={D(0, 2.2)}>{T(mobile ? 400 : 1180, mobile ? 960 : 330, 'B · equilibrio', { fs: 26, fw: 700, c: C.chr })}</g>
    </g>}
  </svg>;
}

/** Capas superpuestas en axonometría (quién gestiona qué). */
export function Layers({ layers, outline }: { layers: { h: string; p: string; c: string }[]; outline: number[][] }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 1000] : [1600, 860];
  const n = layers.length; const lx = mobile ? 400 : 560, gapY = mobile ? 260 : 220, top = mobile ? 150 : 160;
  const sc = mobile ? 300 : 360;
  const iso = (x: number, y: number) => [lx + (x - y) * sc * 0.75, (x + y) * sc * 0.36];
  const d = outline.map(([x, y], i) => { const [a, b] = iso(x, y); return (i ? 'L' : 'M') + a.toFixed(1) + ' ' + b.toFixed(1); }).join('') + 'Z';
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    {layers.map((l, i) => {
      const y = top + i * gapY - (mobile ? 40 : 20);
      return <g key={i} className="po" style={D(n - 1 - i, 0.2, 0.55)}>
        <g transform={`translate(0 ${y})`}><path d={d} fill={l.c} fillOpacity={0.16} stroke={l.c} strokeWidth={3} /></g>
        {mobile
          ? <g>{T(40, y + 210, l.h, { a: 'start', fs: 26, fw: 700, c: l.c })}{ML(40, y + 240, l.p, { a: 'start', fs: 19, c: C.mute, fw: 400 })}</g>
          : <g><line x1={lx + 260} y1={y + 150} x2={1000} y2={y + 150} stroke={l.c} strokeWidth={2} />{T(1020, y + 140, l.h, { a: 'start', fs: 30, fw: 700, c: l.c })}{ML(1020, y + 175, l.p, { a: 'start', fs: 20, c: C.mute, fw: 400 })}</g>}
      </g>;
    })}
  </svg>;
}

/** Metabolismo: entradas -> territorio -> salidas. */
export function Metab({ inputs, outputs, center, c, note }: { inputs: string[]; outputs: string[]; center: string; c: string; note?: string }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 1000] : [1600, 800];
  const box = mobile ? [200, 380, 400, 240] : [600, 250, 400, 300];
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    <g className="po"><rect x={box[0]} y={box[1]} width={box[2]} height={box[3]} rx={24} fill={c} fillOpacity={0.12} stroke={c} strokeWidth={3} strokeDasharray="12 8" />
      {ML(box[0] + box[2] / 2, box[1] + box[3] / 2 - 8, center, { fs: 30, fw: 600, serif: true })}</g>
    {inputs.map((s, i) => {
      const t = (i + 0.5) / inputs.length;
      const [x1, y1, x2, y2] = mobile ? [100 + t * 600, 60, box[0] + 40 + t * (box[2] - 80), box[1]] : [330, 120 + t * 560, box[0], box[1] + 30 + t * (box[3] - 60)];
      return <g key={s} className="po" style={D(i, 0.4, 0.3)}>
        <path d={`M${x1} ${y1 + (mobile ? 40 : 0)}C${mobile ? x1 : (x1 + x2) / 2} ${mobile ? (y1 + y2) / 2 : y1} ${mobile ? x2 : (x1 + x2) / 2} ${mobile ? (y1 + y2) / 2 : y2} ${x2} ${y2}`} fill="none" stroke={C.ink} strokeWidth={3} className="flowdash" />
        {mobile ? <>{SI(s, x1, y1 - 6, 26, C.ink)}{T(x1, y1 + 26, s, { fs: 20, fw: 600 })}</> : <>{SI(s, x1 - 14 - s.length * 15.5 - 22, y1, 30, C.ink)}{T(x1 - 12, y1 + 9, s, { a: 'end', fs: 28, fw: 600 })}</>}
      </g>;
    })}
    {outputs.map((s, i) => {
      const t = (i + 0.5) / outputs.length;
      const [x1, y1, x2, y2] = mobile ? [box[0] + 40 + t * (box[2] - 80), box[1] + box[3], 100 + t * 600, 900] : [box[0] + box[2], box[1] + 30 + t * (box[3] - 60), 1270, 120 + t * 560];
      return <g key={s} className="po" style={D(i, 1.6, 0.3)}>
        <path d={`M${x1} ${y1}C${mobile ? x1 : (x1 + x2) / 2} ${mobile ? (y1 + y2) / 2 : y1} ${mobile ? x2 : (x1 + x2) / 2} ${mobile ? (y1 + y2) / 2 : y2} ${x2} ${y2 - (mobile ? 30 : 0)}`} fill="none" stroke={C.chr} strokeWidth={3} className="flowdash" />
        {mobile ? <>{SI(s, x2, y2 - 46, 26, C.chr)}{T(x2, y2 + 2, s, { fs: 20, fw: 600, c: C.chr })}</> : <>{SI(s, x2 + 30, y2, 30, C.chr)}{T(x2 + 54, y2 + 9, s, { a: 'start', fs: 28, fw: 600, c: C.chr })}</>}
      </g>;
    })}
    {!mobile && <>{T(330, 70, 'ENTRAN', { a: 'end', fs: 18, fw: 700, c: C.mute })}{T(1270, 70, 'SALEN', { a: 'start', fs: 18, fw: 700, c: C.mute })}</>}
    {note && <g className="po" style={D(5, 0.5)}>{T(W / 2, H - 12, note, { fs: 19, it: true, serif: true, c: C.mute, fw: 400 })}</g>}
  </svg>;
}

/** Cuadrados de área a la misma escala. */
export function Scale({ items }: { items: { h: string; ha: number; c: string; p?: string }[] }) {
  const { tall: mobile } = useStage();
  const [W, H] = mobile ? [800, 900] : [1600, 800];
  const maxA = Math.max(...items.map((i) => i.ha));
  const big = mobile ? 520 : 560;
  let x = mobile ? 40 : 80;
  return <svg className="vis" viewBox={`0 0 ${W} ${H}`}>
    {items.map((it, i) => {
      const s = Math.max(3, big * Math.sqrt(it.ha / maxA)); const y = (mobile ? 90 : 120) + (big - s);
      const g = <g key={i} className="po" style={D(i, 0.2, 0.5)}>
        <rect x={x} y={y} width={s} height={s} fill={it.c} fillOpacity={0.85} />
        {T(x + Math.max(s, 6) + 14, y + Math.min(s, 30) - 4 + (s < 40 ? 0 : 0), it.h, { a: 'start', fs: 24, fw: 700 })}
        {it.p && T(x + Math.max(s, 6) + 14, y + Math.min(s, 30) + 24, it.p, { a: 'start', fs: 18, c: C.mute, fw: 400 })}
      </g>;
      x += s + (s < 60 ? 330 : 60);
      if (mobile && x > W - 260) x = 40;
      return g;
    })}
  </svg>;
}

/** Modelo basado en agentes mínimo (ilustrativo, se ejecuta en vivo). */
export function ABM() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [sc, setSc] = useState<'base' | 'cost' | 'inc' | 'reinv'>('base');
  const [cap, setCap] = useState(0.5);
  const scR = useRef(sc); scR.current = sc;
  useEffect(() => {
    const cv = ref.current!; const ctx = cv.getContext('2d')!;
    let W = 0, H = 0; const fit = () => { const r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * 2; cv.height = H * 2; ctx.setTransform(2, 0, 0, 2, 0, 0); };
    fit(); const ro = new ResizeObserver(fit); ro.observe(cv);
    const types = [{ c: C.fnd, n: 46 }, { c: C.ken, n: 6 }, { c: C.chr, n: 5 }];
    const ag: any[] = []; types.forEach((t, ti) => { for (let i = 0; i < t.n; i++) ag.push({ ti, x: Math.random(), y: Math.random(), vx: 0, vy: 0, r: Math.random() }); });
    let pool = 50, capv = 0.5, raf = 0, tick = 0; const hist: number[] = []; const dots: any[] = [];
    const loop = () => {
      tick++; const s = scR.current;
      const cost = s === 'cost' ? 1.9 : 1, inc = s === 'inc' ? 0.55 : 1, reinv = s === 'reinv' ? 1.6 : 1;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.45;
      // caja común
      const pr = 18 + Math.min(60, pool * 0.6);
      ctx.beginPath(); ctx.arc(cx, cy, pr, 0, Math.PI * 2); ctx.fillStyle = 'rgba(242,182,50,.18)'; ctx.fill(); ctx.strokeStyle = C.hl; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = C.ink; ctx.font = '600 12px Inter Tight, Arial'; ctx.textAlign = 'center'; ctx.fillText('caja común', cx, cy + 4);
      for (const a of ag) {
        a.vx += (Math.random() - 0.5) * 0.0016; a.vy += (Math.random() - 0.5) * 0.0016; a.vx *= 0.96; a.vy *= 0.96;
        a.x = Math.min(0.98, Math.max(0.02, a.x + a.vx)); a.y = Math.min(0.92, Math.max(0.02, a.y + a.vy));
        const px = a.x * W, py = a.y * H * 0.9;
        // residentes aportan; organizaciones reinvierten; prestadores cobran mantenimiento
        if (tick % 40 === Math.floor(a.r * 40)) {
          if (a.ti === 0 && Math.random() < 0.55 * inc) { pool += 0.6; dots.push({ x: px, y: py, tx: cx, ty: cy, t: 0, c: C.fnd }); }
          if (a.ti === 1 && pool > 2) { pool -= 0.5; capv += 0.006 * reinv; dots.push({ x: cx, y: cy, tx: px, ty: py, t: 0, c: C.ken }); }
          if (a.ti === 2 && pool > 1) { pool -= 0.9 * cost; dots.push({ x: cx, y: cy, tx: px, ty: py, t: 0, c: C.chr }); }
        }
        ctx.beginPath(); ctx.arc(px, py, a.ti === 0 ? 4 : 6.5, 0, Math.PI * 2); ctx.fillStyle = types[a.ti].c; ctx.fill();
      }
      for (let i = dots.length - 1; i >= 0; i--) { const d = dots[i]; d.t += 0.03; if (d.t >= 1) { dots.splice(i, 1); continue; } ctx.beginPath(); ctx.arc(d.x + (d.tx - d.x) * d.t, d.y + (d.ty - d.y) * d.t, 2.4, 0, Math.PI * 2); ctx.fillStyle = d.c; ctx.fill(); }
      pool = Math.max(0, pool); capv += (pool > 25 ? 0.0012 : -0.0022) * (s === 'reinv' ? 1.3 : 1); capv -= (s === 'cost' ? 0.0012 : 0); capv = Math.min(1, Math.max(0.02, capv * 0.9995));
      if (tick % 6 === 0) { hist.push(capv); if (hist.length > 160) hist.shift(); if (tick % 18 === 0) setCap(capv); }
      // serie
      ctx.beginPath(); hist.forEach((v, i) => { const x = 10 + (i / 160) * (W - 20), y = H - 8 - v * H * 0.16; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
      ctx.strokeStyle = C.ink; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.textAlign = 'left'; ctx.fillStyle = C.mute; ctx.font = '11px Inter Tight, Arial'; ctx.fillText('capacidad de adaptación en el tiempo', 10, H - H * 0.18 - 6);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  const b = (k: typeof sc, t: string) => <button className={sc === k ? 'on' : ''} onClick={(e) => { e.stopPropagation(); setSc(k); }}>{t}</button>;
  return <div className="abm" onClick={(e) => e.stopPropagation()}>
    <canvas ref={ref} />
    <div className="ctl">
      <div className="lg"><span style={{ ['--c' as any]: C.fnd }}>Residentes: aportan a la caja común</span><span style={{ ['--c' as any]: C.ken }}>Organizaciones comunitarias: reinvierten</span><span style={{ ['--c' as any]: C.chr }}>Prestadores de servicios: cobran mantenimiento</span></div>
      {b('base', 'Escenario base')}{b('cost', 'Aumentan los costos')}{b('inc', 'Disminuyen los ingresos')}{b('reinv', 'Se fortalece la reinversión')}
      <div><div className="meter"><b style={{ width: `${Math.round(cap * 100)}%` }} /></div><small style={{ color: C.mute }}>Capacidad de adaptación (indicador del modelo)</small></div>
      <small style={{ color: C.mute, lineHeight: 1.35 }}>Simulación ilustrativa con reglas simples. No está calibrada con datos.</small>
    </div>
  </div>;
}
