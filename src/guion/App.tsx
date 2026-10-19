import { useCallback, useEffect, useRef, useState } from 'react';
import { BLOCKS, STEPS } from './steps';
import { StageCtx, useSize } from './kit';
import { Ico } from './icons';

const MQ = '(max-width: 900px), (orientation: portrait) and (max-width: 1100px)';
const fromHash = () => { const n = parseInt(location.hash.replace('#', ''), 10); return Number.isFinite(n) ? Math.min(STEPS.length, Math.max(1, n)) - 1 : 0; };
type Layer = { i: number; st: 'in' | 'out'; dir: 1 | -1; id: number };
let uid = 0;

export default function App() {
  const [i, setI] = useState(fromHash);
  const [sub, setSub] = useState(0);
  const [stops, setStopsState] = useState<string[]>([]);
  const [notes, setNotes] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia(MQ).matches);
  const [layers, setLayers] = useState<Layer[]>(() => [{ i: fromHash(), st: 'in', dir: 1, id: uid++ }]);
  const stageRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const size = useSize(stageRef);
  useEffect(() => { const m = window.matchMedia(MQ); const f = () => setMobile(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const prev = useRef(i);
  const goStep = useCallback((n: number) => {
    const k = Math.min(STEPS.length - 1, Math.max(0, n)); if (k === prev.current) return;
    const dir: 1 | -1 = k > prev.current ? 1 : -1; prev.current = k;
    setStopsState([]); setSub(0); setI(k);
    setLayers((ls) => [...ls.filter((l) => l.st === 'in').map((l) => ({ ...l, st: 'out' as const, dir })), { i: k, st: 'in', dir, id: uid++ }]);
    setTimeout(() => setLayers((ls) => ls.filter((l) => l.st === 'in')), 900);
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
    if (t.closest('button, input, .mapctl, .lgd, .abm .ctl')) return;
    if (performance.now() - ((window as any).__noClick ?? 0) < 300) return;
    next();
  };
  const setStops = useCallback((labels: string[]) => setStopsState((p) => (p.length ? p : labels)), []);
  const s = STEPS[i]; const b = BLOCKS[s.b];
  const firstOf = (bi: number) => STEPS.findIndex((x) => x.b === bi);
  const pct = ((i + 1) / STEPS.length) * 100;
  const focus = sub > 0 ? stops[sub - 1] : null;
  return <div className="app4">
    <header className="top2">
      <div className="brand"><b>Christiania · Findhorn</b><span>Cómo se sostiene una comunidad</span></div>
      <nav className="chips" ref={chipsRef}>
        {BLOCKS.map((bl, bi) => <button key={bi} className={s.b === bi ? 'on' : ''} onClick={() => goStep(firstOf(bi))} title={bl.t}><span>{bl.n}</span><em>{bl.t}</em></button>)}
      </nav>
      <div className="meta"><span>{b.time}</span><div className="bar"><b style={{ width: pct + '%' }} /></div></div>
    </header>
    <div className="wrap4">
      <div>
        <div className="stage4" ref={stageRef} onClick={onStage} style={{ height: mobile ? undefined : '100%' }}>
          <StageCtx.Provider value={{ w: size.w || 1000, h: size.h || 600, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3, sub, setStops }}>
            {size.w > 0 && layers.map((l) => <div className={`scene ${l.st} ${l.dir > 0 ? 'fw' : 'bw'}`} key={l.id}>{l.st === 'in' ? STEPS[l.i].v() : <StageCtx.Provider value={{ w: size.w, h: size.h, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3, sub: 0, setStops: () => {} }}>{STEPS[l.i].v()}</StageCtx.Provider>}</div>)}
          </StageCtx.Provider>
          {!mobile && <div className="clickhint">{stops.length > 0 && <span className="dots">{[0, ...stops.map((_, k) => k + 1)].map((k) => <i key={k} className={k === sub ? 'on' : k < sub ? 'done' : ''} />)}</span>}<span>{sub < stops.length ? 'Clic para acercar' : 'Clic para continuar'}</span></div>}
        </div>
        {mobile && <div className="clickhint">{stops.length > 0 && <span className="dots">{[0, ...stops.map((_, k) => k + 1)].map((k) => <i key={k} className={k === sub ? 'on' : k < sub ? 'done' : ''} />)}</span>}<span>{sub < stops.length ? 'Toca para acercar' : 'Toca para continuar'}</span></div>}
      </div>
      <section className="info4" key={i}>
        <span className="num po"><span className="sc-ico"><Ico t={s.t + ' ' + (s.d ?? '')} size={20} /></span>{String(i + 1).padStart(2, '0')} / {STEPS.length} · Bloque {b.n}</span>
        <h1 className="po" style={{ animationDelay: '.05s' }}>{s.t}</h1>
        {s.d && <p className="po" style={{ animationDelay: '.15s' }}>{s.d}</p>}
        {focus !== null && <div className="focus" key={'f' + sub}><span className="fi"><Ico t={focus + ' ' + s.t} size={18} /></span><div><small>En foco · {sub} de {stops.length}</small><b>{focus || 'Detalle'}</b></div></div>}
        {notes && s.nota && <div className="say">{s.nota}</div>}
        {s.src && <div className="src po" style={{ animationDelay: '.25s' }}>Fuentes · {s.src}</div>}
      </section>
    </div>
    <div className="foot4">
      <div className="scrub">
        {STEPS.map((x, k) => <span key={k} title={`${k + 1}. ${x.t}`} className={(k === i ? 'c' : k < i ? 'v' : '') + (k > 0 && STEPS[k - 1].b !== x.b ? ' b' : '')} onClick={() => goStep(k)} />)}
      </div>
      <div className="nav">
        <button onClick={back} disabled={i === 0 && sub === 0}>Anterior</button>
        <button className="pri" onClick={next} disabled={i === STEPS.length - 1 && sub >= stops.length}>{sub < stops.length ? 'Acercar' : 'Siguiente'}</button>
      </div>
    </div>
  </div>;
}
