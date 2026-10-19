/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { C, useData, useStage } from './kit';
import { Ico } from './icons';

type P2 = [number, number];
const CORA: P2 = [-74.15916, 4.63069];
const MPAZ: P2 = [-74.15796, 4.63664];
const PBON: P2 = [-74.16070, 4.63942];
const ACOPIO_A: P2 = [-74.1535, 4.6338]; // hipotético
const ACOPIO_B: P2 = [-74.1665, 4.6418]; // hipotético
const BOX: [number, number, number, number] = [-74.1745, 4.6215, -74.1445, 4.6490];

const mx = (lon: number, z: number) => ((lon + 180) / 360) * 256 * 2 ** z;
const my = (lat: number, z: number) => { const s = Math.sin((lat * Math.PI) / 180); return (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * 256 * 2 ** z; };
const SAT = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

type Sc = { menosMaterial: boolean; transporte: boolean; cierraB: boolean; reinversion: boolean };

/** Recicladores de María Paz y Patio Bonito recogen material en Corabastos, lo llevan a un punto de acopio
 *  y la venta alimenta una caja común que paga equipos y mantenimiento. Ilustrativo: no está calibrado con datos. */
export function KennedyABM() {
  const wrap = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const data = useData('kennedy');
  const { mobile } = useStage();
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [sc, setSc] = useState<Sc>({ menosMaterial: false, transporte: false, cierraB: false, reinversion: false });
  const scR = useRef(sc); scR.current = sc;
  const [ind, setInd] = useState({ mat: 0, caja: 0, cap: 50, equipos: 0 });
  const resetR = useRef(false);

  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el); return () => ro.disconnect();
  }, []);

  // proyección ajustada al contenedor
  const W = size.w, H = size.h;
  const z = W ? Math.max(12, Math.min(17, Math.floor(Math.log2((W * 1.3 * 360) / (256 * (BOX[2] - BOX[0])))))) : 15;
  const X0 = mx(BOX[0], z), X1 = mx(BOX[2], z), Y0 = my(BOX[3], z), Y1 = my(BOX[1], z);
  let vw = X1 - X0, vh = Y1 - Y0; const asp = W / Math.max(1, H);
  if (vw / vh > asp) vh = vw / asp; else vw = vh * asp;
  const ox = (X0 + X1) / 2 - vw / 2, oy = (Y0 + Y1) / 2 - vh / 2;
  const toS = (p: P2): P2 => [((mx(p[0], z) - ox) / vw) * W, ((my(p[1], z) - oy) / vh) * H];
  const toV = (p: P2): P2 => [mx(p[0], z) - ox, my(p[1], z) - oy];
  const u = vw / 70;

  const tiles: [number, number][] = [];
  if (W) for (let x = Math.floor(ox / 256); x <= Math.floor((ox + vw) / 256); x++) for (let y = Math.floor(oy / 256); y <= Math.floor((oy + vh) / 256); y++) tiles.push([x, y]);

  useEffect(() => {
    const c = cv.current; if (!c || !W) return;
    const ctx = c.getContext('2d')!; const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const rnd = (a: number) => (Math.random() - 0.5) * a;
    const mk = (home: P2, n: number, grupo: 'mp' | 'pb') => Array.from({ length: n }, () => {
      const h: P2 = [home[0] + rnd(0.004), home[1] + rnd(0.003)];
      return { home: h, grupo, pos: toS(h), fase: 0, t: Math.random(), carga: 0, speed: 0.0035 + Math.random() * 0.002 };
    });
    let ag = [...mk(MPAZ, 18, 'mp'), ...mk(PBON, 18, 'pb')];
    let caja = 30, mat = 0, cap = 50, equipos = 0, tick = 0; const hist: number[] = [];
    const flows: { a: P2; b: P2; t: number; c: string }[] = [];
    const lerp = (a: P2, b: P2, t: number): P2 => { const m: P2 = [(a[0] + b[0]) / 2 + (b[1] - a[1]) * 0.12, (a[1] + b[1]) / 2 - (b[0] - a[0]) * 0.12]; const s = 1 - t; return [s * s * a[0] + 2 * s * t * m[0] + t * t * b[0], s * s * a[1] + 2 * s * t * m[1] + t * t * b[1]]; };
    let raf = 0;
    const loop = () => {
      tick++;
      if (resetR.current) { resetR.current = false; caja = 30; mat = 0; cap = 50; equipos = 0; hist.length = 0; ag = [...mk(MPAZ, 18, 'mp'), ...mk(PBON, 18, 'pb')]; }
      const s = scR.current;
      const cora = toS(CORA), A = toS(ACOPIO_A), B = toS(ACOPIO_B);
      ctx.clearRect(0, 0, W, H);
      // rutas guía
      ctx.setLineDash([4, 6]); ctx.lineWidth = 1.2; ctx.strokeStyle = 'rgba(255,255,255,.28)';
      for (const p of [toS(MPAZ), toS(PBON)]) { ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(cora[0], cora[1]); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(cora[0], cora[1]); ctx.lineTo(A[0], A[1]); ctx.stroke();
      if (!s.cierraB) { ctx.beginPath(); ctx.moveTo(cora[0], cora[1]); ctx.lineTo(B[0], B[1]); ctx.stroke(); }
      ctx.setLineDash([]);
      // agentes
      const cargaMax = (s.menosMaterial ? 0.4 : 1) * (1 + equipos * 0.06);
      const vel = s.transporte ? 0.7 : 1;
      for (const a of ag) {
        const home = toS(a.home);
        const dest = a.grupo === 'pb' && !s.cierraB ? B : A;
        a.t += a.speed * vel * (1 + equipos * 0.01);
        if (a.t >= 1) {
          a.t = 0; a.fase = (a.fase + 1) % 3;
          if (a.fase === 1) a.carga = cargaMax; // recoge en Corabastos
          if (a.fase === 2) { // entrega en el acopio
            const costo = (s.transporte ? 0.55 : 0.25) * (a.grupo === 'pb' && s.cierraB ? 1.8 : 1);
            const neto = Math.max(0, a.carga - costo * 0.6);
            mat += a.carga; caja += neto * 2.2; a.carga = 0;
            flows.push({ a: toS(dest === B ? ACOPIO_B : ACOPIO_A), b: toS(dest === B ? ACOPIO_B : ACOPIO_A), t: 0, c: C.hl });
          }
        }
        const seg: [P2, P2] = a.fase === 0 ? [home, cora] : a.fase === 1 ? [cora, dest] : [dest, home];
        a.pos = lerp(seg[0], seg[1], a.t);
        ctx.beginPath(); ctx.arc(a.pos[0], a.pos[1], a.carga > 0 ? 4.6 : 3.4, 0, Math.PI * 2);
        ctx.fillStyle = a.carga > 0 ? C.hl : C.fnd; ctx.fill(); ctx.lineWidth = 1; ctx.strokeStyle = '#000'; ctx.stroke();
      }
      // gasto de la caja: mantenimiento y equipos (cada ~1 s)
      if (tick % 60 === 0) {
        const mant = 4.5; caja -= mant;
        flows.push({ a: A, b: [A[0] + 60, A[1] - 50], t: 0, c: C.chr });
        const share = s.reinversion ? 0.6 : 0.2;
        if (caja > 12) { const inv = caja * share * 0.3; caja -= inv; equipos = Math.min(30, equipos + inv * 0.35); const h = toS(Math.random() < 0.5 ? MPAZ : PBON); flows.push({ a: A, b: h, t: 0, c: C.ken }); }
        equipos = Math.max(0, equipos - (caja < 5 ? 0.6 : 0.12)); // desgaste: sin caja no hay mantenimiento
        caja = Math.max(0, caja);
        const objetivo = Math.max(5, Math.min(98, 18 + equipos * 3.2 + Math.min(caja, 40) * 0.55 - (caja < 5 ? 15 : 0)));
        cap += (objetivo - cap) * 0.25;
        hist.push(cap); if (hist.length > 90) hist.shift();
        setInd({ mat: Math.round(mat), caja: Math.round(caja), cap: Math.round(cap), equipos: Math.round(equipos) });
      }
      for (let i = flows.length - 1; i >= 0; i--) {
        const f = flows[i]; f.t += 0.025; if (f.t >= 1) { flows.splice(i, 1); continue; }
        if (f.a[0] === f.b[0]) { ctx.beginPath(); ctx.arc(f.a[0], f.a[1], 6 + f.t * 22, 0, Math.PI * 2); ctx.strokeStyle = `rgba(242,182,50,${1 - f.t})`; ctx.lineWidth = 2; ctx.stroke(); }
        else { const p = lerp(f.a, f.b, f.t); ctx.beginPath(); ctx.arc(p[0], p[1], 3.2, 0, Math.PI * 2); ctx.fillStyle = f.c; ctx.fill(); }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [W, H, z]); // eslint-disable-line

  const tog = (k: keyof Sc) => (e: React.MouseEvent) => { e.stopPropagation(); setSc((v) => ({ ...v, [k]: !v[k] })); };
  const A = toV(ACOPIO_A), B = toV(ACOPIO_B), CO = toV(CORA), M = toV(MPAZ), PB = toV(PBON);
  const lbl = (p: P2, t: string, c: string, dx = 1.2, dy = -1.2) => <g>
    <rect x={p[0] + dx * u} y={p[1] + dy * u - 1.5 * u} width={t.length * 0.62 * u + 1.2 * u} height={2 * u} rx={0.3 * u} fill="rgba(8,8,7,.9)" stroke={c} strokeWidth={0.12 * u} />
    <text x={p[0] + dx * u + 0.6 * u} y={p[1] + dy * u - 0.1 * u} fontSize={1.1 * u} fontWeight={700} fill="#f3efe6" fontFamily="Inter Tight, Arial">{t}</text>
  </g>;
  const wet = data ? data.l.filter((f: any) => [479823059, 586687934, 8695506].includes(f[0])) : [];
  const roads = data ? data.r.filter((f: any) => /trunk|primary/.test(f[2])) : [];
  const path = (g: number[], close: boolean) => 'M' + Array.from({ length: g.length / 2 }, (_, j) => toV([g[2 * j], g[2 * j + 1]]).map((v) => v.toFixed(1)).join(' ')).join('L') + (close ? 'Z' : '');

  const card = (k: keyof Sc, t: string, d: string, c: string) => <button className={'kb ' + (sc[k] ? 'on' : '')} style={{ ['--c' as any]: c }} onClick={tog(k)}>
    <span className="kb-ico"><Ico t={t} size={16} /></span><span><b>{t}</b><small>{d}</small></span><i>{sc[k] ? 'Activo' : 'Apagado'}</i>
  </button>;

  return <div className="kabm" onClick={(e) => e.stopPropagation()}>
    <div className="kmap" ref={wrap}>
      {W > 0 && <svg className="vis" viewBox={`0 0 ${vw} ${vh}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        {tiles.map(([x, y]) => <image key={x + '_' + y} href={SAT.replace('{z}', String(z)).replace('{x}', String(x)).replace('{y}', String(y))} x={x * 256 - ox} y={y * 256 - oy} width={256.6} height={256.6} />)}
        <rect x={0} y={0} width={vw} height={vh} fill="#000" opacity={0.42} />
        {roads.map((f: any, i: number) => <path key={i} d={path(f[3], false)} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth={0.35 * u} />)}
        {wet.map((f: any, i: number) => <path key={'w' + i} d={path(f[3], true)} fill="rgba(91,155,224,.35)" stroke="#7fc0f0" strokeWidth={0.18 * u} />)}
        <circle cx={CO[0]} cy={CO[1]} r={2.2 * u} fill="none" stroke={sc.menosMaterial ? C.chr : C.hl} strokeWidth={0.3 * u} strokeDasharray={sc.menosMaterial ? `${0.6 * u} ${0.5 * u}` : undefined} />
        <circle cx={A[0]} cy={A[1]} r={1.6 * u} fill="rgba(242,182,50,.25)" stroke={C.hl} strokeWidth={0.3 * u} />
        <circle cx={B[0]} cy={B[1]} r={1.6 * u} fill={sc.cierraB ? 'rgba(80,80,80,.5)' : 'rgba(242,182,50,.25)'} stroke={sc.cierraB ? '#777' : C.hl} strokeWidth={0.3 * u} />
        {sc.cierraB && <path d={`M${B[0] - u} ${B[1] - u}L${B[0] + u} ${B[1] + u}M${B[0] + u} ${B[1] - u}L${B[0] - u} ${B[1] + u}`} stroke={C.chr} strokeWidth={0.35 * u} />}
        {lbl(CO, sc.menosMaterial ? 'Corabastos · menos material' : 'Corabastos · material recuperable', sc.menosMaterial ? C.chr : C.hl, 2.4, 2.6)}
        {lbl(M, 'María Paz · recicladores', C.fnd, 1.2, -1.4)}
        {lbl(PB, 'Patio Bonito · recicladores', C.fnd, -15, -1.4)}
        {lbl(A, 'Acopio A + caja común (hipotético)', C.hl, 1.8, 2.8)}
        {lbl(B, sc.cierraB ? 'Acopio B cerrado' : 'Acopio B (hipotético)', sc.cierraB ? '#999' : C.hl, -13, -1.8)}
        {wet[0] && lbl(toV([-74.16162, 4.62847]), 'Humedal La Vaca', '#7fc0f0', -9, 3)}
        {wet[2] && lbl(toV([-74.15027, 4.64101]), 'Humedal El Burro', '#7fc0f0', 1.5, -1)}
      </svg>}
      <canvas ref={cv} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div className="kleg"><span style={{ ['--c' as any]: C.fnd }}>Reciclador</span><span style={{ ['--c' as any]: C.hl }}>Con carga</span><span style={{ ['--c' as any]: C.ken }}>Equipos pagados por la caja</span><span style={{ ['--c' as any]: C.chr }}>Mantenimiento</span></div>
    </div>
    <div className="kpanel">
      <div className="kind">
        <div><small>Material recuperado</small><b>{ind.mat}</b></div>
        <div><small>Caja común</small><b>{ind.caja}</b></div>
        <div><small>Equipos compartidos</small><b>{ind.equipos}</b></div>
      </div>
      <div className="kcap"><small>Capacidad de la red para sostenerse</small><div className="meter"><b style={{ width: ind.cap + '%', background: ind.cap > 55 ? C.fnd : ind.cap > 35 ? C.hl : C.chr }} /></div></div>
      <div className="kbs">
        {card('menosMaterial', 'Menos material en Corabastos', 'Cada viaje trae menos.', C.chr)}
        {card('transporte', 'Suben los costos de transporte', 'Los viajes rinden menos.', C.chr)}
        {card('cierraB', 'Se cierra el acopio B', 'Patio Bonito debe ir más lejos.', C.chr)}
        {card('reinversion', 'Más reinversión en equipos', 'La caja compra más carros y herramientas.', C.fnd)}
      </div>
      <button className="kreset" onClick={(e) => { e.stopPropagation(); resetR.current = true; setSc({ menosMaterial: false, transporte: false, cierraB: false, reinversion: false }); }}>Reiniciar</button>
      {!mobile && <small className="knote">Ubicaciones reales (OpenStreetMap). Acopios, cantidades y reglas son hipotéticos: simulación ilustrativa, no calibrada con datos.</small>}
    </div>
  </div>;
}
