import { useCallback, useEffect, useRef, useState } from 'react';
import { BLOCKS, STEPS } from './steps';
import { StageCtx, useSize } from './kit';
import { Ico } from './icons';

const MQ = '(max-width: 900px), (orientation: portrait) and (max-width: 1100px)';
const fromHash = () => { const n = parseInt(location.hash.replace('#', ''), 10); return Number.isFinite(n) ? Math.min(STEPS.length, Math.max(1, n)) - 1 : 0; };
type Layer = { i: number; st: 'in' | 'out'; dir: 1 | -1; id: number; ox: number; oy: number; fly?: number };
const mxm = (lon: number) => (lon + 180) / 360; const mym = (lat: number) => { const s = Math.sin((lat * Math.PI) / 180); return 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI); };

/** Texto que se escribe letra por letra, con cursor. */
function Typed({ text, speed = 24, delay = 0, className }: { text: string; speed?: number; delay?: number; className?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0); const t0 = performance.now() + delay; let raf = 0;
    const tick = () => { const k = Math.max(0, Math.min(text.length, Math.floor((performance.now() - t0) / speed))); setN(k); if (k < text.length) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, speed, delay]);
  return <span className={className}>{text.slice(0, n)}<i className={'caret' + (n >= text.length ? ' done' : '')} /></span>;
}
let uid = 0;

export default function App() {
  const [i, setI] = useState(fromHash);
  const [sub, setSub] = useState(0);
  const [stops, setStopsState] = useState<string[]>([]);
  const [notes, setNotes] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia(MQ).matches);
  const [layers, setLayers] = useState<Layer[]>(() => [{ i: fromHash(), st: 'in', dir: 1, id: uid++, ox: 50, oy: 50 }]);
  const lastPt = useRef<[number, number]>([50, 50]);
  const stageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const size = useSize(stageRef);
  const sizeRef = useRef(size); sizeRef.current = size;
  useEffect(() => { const m = window.matchMedia(MQ); const f = () => setMobile(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const prev = useRef(i);
  const prevI = useRef(i);
  const goStep = useCallback((n: number) => {
    const k = Math.min(STEPS.length - 1, Math.max(0, n)); if (k === prev.current) return;
    const dir: 1 | -1 = k > prev.current ? 1 : -1; prev.current = k;
    setStopsState([]); setSub(0); setI(k);
    const from = STEPS[prevI.current], to = STEPS[k]; prevI.current = k;
    if (from.scene && from.scene === to.scene) {
      // misma escena: no se cambia de imagen, solo se actualiza en su sitio (y la cámara se mueve despacio)
      setLayers((ls) => ls.filter((l) => l.st === 'in').map((l) => ({ ...l, i: k })));
      history.replaceState(null, '', '#' + (k + 1)); return;
    }
    let fly: { ox: number; oy: number; s: number } | null = null;
    if (from.geo && to.geo && dir > 0) {
      // vuelo continuo: se acerca al lugar del siguiente mapa
      const [w0, s0, e0, n0] = from.geo; const W = sizeRef.current.w || 1000, H = sizeRef.current.h || 600;
      let vw = mxm(e0) - mxm(w0), vh = mym(s0) - mym(n0); const asp = W / H; if (vw / vh > asp) vh = vw / asp; else vw = vh * asp;
      const cx = (mxm(w0) + mxm(e0)) / 2, cy = (mym(n0) + mym(s0)) / 2;
      const [w1, s1, e1, n1] = to.geo; const tx = (mxm(w1) + mxm(e1)) / 2, ty = (mym(n1) + mym(s1)) / 2;
      const ox = ((tx - (cx - vw / 2)) / vw) * 100, oy = ((ty - (cy - vh / 2)) / vh) * 100; const sc = vw / Math.max(1e-9, mxm(e1) - mxm(w1));
      if (ox > 2 && ox < 98 && oy > 2 && oy < 98 && sc > 1.5) fly = { ox, oy, s: Math.min(sc, 30) };
    }
    if (fly) {
      const f = fly;
      setLayers((ls) => [...ls.filter((l) => l.st === 'in').map((l) => ({ ...l, st: 'out' as const, dir, ox: f.ox, oy: f.oy, fly: f.s })), { i: k, st: 'in', dir, id: uid++, ox: 50, oy: 50, fly: f.s }]);
    } else {
      setLayers((ls) => [...ls.filter((l) => l.st === 'in').map((l) => ({ ...l, st: 'out' as const, dir })), { i: k, st: 'in', dir, id: uid++, ox: lastPt.current[0], oy: lastPt.current[1] }]);
    }
    lastPt.current = [50, 50];
    setTimeout(() => setLayers((ls) => ls.filter((l) => l.st === 'in')), 3200);
    history.replaceState(null, '', '#' + (k + 1));
  }, []);
  // un clic: si quedan paradas, acerca la cámara a la siguiente; si no, pasa al siguiente paso con zoom
  const next = useCallback(() => { if (sub < stops.length) setSub(sub + 1); else goStep(i + 1); }, [sub, stops.length, i, goStep]);
  const back = useCallback(() => { if (sub > 0) setSub(sub - 1); else goStep(i - 1); }, [sub, i, goStep]);
  useEffect(() => { chipsRef.current?.querySelector('.on')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }, [i]);
  useEffect(() => { const f = () => goStep(fromHash()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, [goStep]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); next(); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); back(); }
      else if (e.key === 'Home') goStep(0);
      else if (e.key === 'End') goStep(STEPS.length - 1);
      else if (e.key.toLowerCase() === 'n') setNotes((v) => !v);
      else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [next, back, goStep]);
  const onStage = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); lastPt.current = [((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100];
    if (t.closest('button, input, .mapctl, .lgd, .abm .ctl')) return;
    if (performance.now() - ((window as any).__noClick ?? 0) < 300) return;
    next();
  };
  const setStops = useCallback((labels: string[]) => setStopsState((p) => (p.length ? p : labels)), []);
  const s = STEPS[i]; const b = BLOCKS[s.b];
  const firstOf = (bi: number) => STEPS.findIndex((x) => x.b === bi);
  const pct = ((i + 1) / STEPS.length) * 100;
  const focus = sub > 0 ? stops[sub - 1] : null;
  return <div className="app5">
    <header className="top2">
      <div className="brand"><b>Christiania · Findhorn</b><span>Cómo se sostiene una comunidad</span></div>
      <nav className="chips" ref={chipsRef}>
        {BLOCKS.map((bl, bi) => <button key={bi} className={s.b === bi ? 'on' : ''} onClick={() => goStep(firstOf(bi))} title={bl.t}><span>{bl.n}</span><em>{bl.t}</em></button>)}
      </nav>
      <div className="meta"><span>{b.time}</span><div className="bar"><b style={{ width: pct + '%' }} /></div></div>
    </header>
    <section className="title5" key={'t' + i}>
      <div className="kick"><span className="sc-ico"><Ico t={s.t + ' ' + (s.d ?? '')} size={18} /></span><Typed text={`${String(i + 1).padStart(2, '0')} — Bloque ${b.n} · ${b.t}`} speed={12} /></div>
      <h1><Typed text={s.t} speed={26} delay={250} /></h1>
      <div className="sub">
        {focus !== null
          ? <span className="focus5" key={'f' + sub}><span className="fi"><Ico t={focus + ' ' + s.t} size={16} /></span><b>{sub}/{stops.length}</b><Typed text={focus || 'Detalle'} speed={22} /></span>
          : s.d ? <span className="dek fa" style={{ animationDelay: `${0.4 + s.t.length * 0.026}s` }}>{s.d}</span> : null}
      </div>
    </section>
    <div className="stage5" ref={stageRef} onClick={onStage}>
      <StageCtx.Provider value={{ w: size.w || 1000, h: size.h || 600, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3, sub, setStops }}>
        {size.w > 0 && layers.map((l) => <div className={`scene ${l.st} ${l.fly ? 'fly' : l.dir > 0 ? 'fw' : 'bw'}`} key={l.id} style={{ ['--ox' as any]: l.ox + '%', ['--oy' as any]: l.oy + '%', ['--fs' as any]: l.fly ?? 1 }}>{l.st === 'in' ? STEPS[l.i].v() : <StageCtx.Provider value={{ w: size.w, h: size.h, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3, sub: 0, setStops: () => {} }}>{STEPS[l.i].v()}</StageCtx.Provider>}</div>)}
      </StageCtx.Provider>
      {!mobile && <div className="clickhint">{stops.length > 0 && <span className="dots">{[0, ...stops.map((_, k) => k + 1)].map((k) => <i key={k} className={k === sub ? 'on' : k < sub ? 'done' : ''} />)}</span>}<span>{sub < stops.length ? 'Clic para acercar' : 'Clic para continuar'}</span></div>}
    </div>
    <footer className="foot5">
      {mobile && <div className="clickhint">{stops.length > 0 && <span className="dots">{[0, ...stops.map((_, k) => k + 1)].map((k) => <i key={k} className={k === sub ? 'on' : k < sub ? 'done' : ''} />)}</span>}<span>{sub < stops.length ? 'Toca para acercar' : 'Toca para continuar'}</span></div>}
      {s.src && <div className="src5">Fuentes · {s.src}</div>}
      {notes && s.nota && <div className="say5">{s.nota}</div>}
      <div className="row5">
        <div className="scrub">
          {STEPS.map((x, k) => <span key={k} title={`${k + 1}. ${x.t}`} className={(k === i ? 'c' : k < i ? 'v' : '') + (k > 0 && STEPS[k - 1].b !== x.b ? ' b' : '')} onClick={() => goStep(k)} />)}
        </div>
        <div className="nav">
          <button onClick={back} disabled={i === 0 && sub === 0}>Anterior</button>
          <button className="pri" onClick={next} disabled={i === STEPS.length - 1 && sub >= stops.length}>{sub < stops.length ? 'Acercar' : 'Siguiente'}</button>
        </div>
      </div>
    </footer>
  </div>;
}
