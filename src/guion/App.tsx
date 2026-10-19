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
  const [notes, setNotes] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia(MQ).matches);
  const [layers, setLayers] = useState<Layer[]>(() => [{ i: fromHash(), st: 'in', dir: 1, id: uid++ }]);
  const stageRef = useRef<HTMLDivElement>(null);
  const colRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const lock = useRef(0);
  const size = useSize(stageRef);
  useEffect(() => { const m = window.matchMedia(MQ); const f = () => setMobile(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);

  // capas para la transición con zoom entre pasos
  const prev = useRef(i);
  useEffect(() => {
    if (prev.current === i) return;
    const dir: 1 | -1 = i > prev.current ? 1 : -1; prev.current = i;
    setLayers((ls) => [...ls.filter((l) => l.st === 'in').map((l) => ({ ...l, st: 'out' as const, dir })), { i, st: 'in', dir, id: uid++ }]);
    const t = setTimeout(() => setLayers((ls) => ls.filter((l) => l.st === 'in')), 900);
    history.replaceState(null, '', '#' + (i + 1));
    chipsRef.current?.querySelector('.on')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    return () => clearTimeout(t);
  }, [i]);

  // la columna de texto se desplaza; el paso activo es la tarjeta más cercana al centro
  const scrollToStep = useCallback((n: number, smooth = true) => {
    const k = Math.min(STEPS.length - 1, Math.max(0, n));
    const card = document.getElementById('paso-' + (k + 1)); if (!card) return;
    lock.current = performance.now();
    setI(k);
    if (mobile) { const y = card.getBoundingClientRect().top + window.scrollY - (stageRef.current?.parentElement?.getBoundingClientRect().bottom ?? 0) - 12; window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' }); }
    else colRef.current?.scrollTo({ top: card.offsetTop - (colRef.current.clientHeight - card.clientHeight) / 2, behavior: smooth ? 'smooth' : 'auto' });
  }, [mobile]);
  useEffect(() => { const t = setTimeout(() => scrollToStep(fromHash(), false), 50); return () => clearTimeout(t); }, [mobile]); // eslint-disable-line
  useEffect(() => { const f = () => { const n = fromHash(); if (n !== prev.current) scrollToStep(n, false); }; window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, [scrollToStep]);
  useEffect(() => {
    const target: HTMLElement | Window = mobile ? window : colRef.current!;
    const onScroll = () => {
      if (performance.now() - lock.current < 900) return;
      const cards = Array.from(document.querySelectorAll<HTMLElement>('.stepcard'));
      let mid: number;
      if (mobile) { const bottom = stageRef.current?.parentElement?.getBoundingClientRect().bottom ?? 0; mid = bottom + (window.innerHeight - bottom) * 0.4; }
      else { const r = colRef.current!.getBoundingClientRect(); mid = r.top + r.height / 2; }
      let best = 0, bd = 1e9; cards.forEach((c, k) => { const r = c.getBoundingClientRect(); const d = Math.abs(r.top + r.height / 2 - mid); if (d < bd) { bd = d; best = k; } });
      setI(best);
    };
    target.addEventListener('scroll', onScroll, { passive: true });
    return () => target.removeEventListener('scroll', onScroll);
  }, [mobile]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); scrollToStep(i + 1); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); scrollToStep(i - 1); }
      else if (e.key === 'Home') scrollToStep(0);
      else if (e.key === 'End') scrollToStep(STEPS.length - 1);
      else if (e.key.toLowerCase() === 'n') setNotes((v) => !v);
      else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [i, scrollToStep]);

  const s = STEPS[i]; const b = BLOCKS[s.b];
  const firstOf = (bi: number) => STEPS.findIndex((x) => x.b === bi);
  const pct = ((i + 1) / STEPS.length) * 100;
  return <div className="app2">
    <header className="top2">
      <div className="brand"><b>Christiania · Findhorn</b><span>Cómo se sostiene una comunidad</span></div>
      <nav className="chips" ref={chipsRef}>
        {BLOCKS.map((bl, bi) => <button key={bi} className={s.b === bi ? 'on' : ''} onClick={() => scrollToStep(firstOf(bi))} title={bl.t}><span>{bl.n}</span><em>{bl.t}</em></button>)}
      </nav>
      <div className="meta"><span>{b.time}</span><div className="bar"><b style={{ width: pct + '%' }} /></div></div>
    </header>
    <div className="wrap2">
      <div className="stagebox">
        <div className="stage" ref={stageRef}>
          <StageCtx.Provider value={{ w: size.w || 1000, h: size.h || 600, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3 }}>
            {size.w > 0 && layers.map((l) => <div className={`scene ${l.st} ${l.dir > 0 ? 'fw' : 'bw'}`} key={l.id} aria-hidden={l.st === 'out'}>{STEPS[l.i].v()}</div>)}
          </StageCtx.Provider>
        </div>
        <div className="stagebar">
          <span className="sb-n">{String(i + 1).padStart(2, '0')}<small>/{STEPS.length}</small></span>
          <span className="sb-t">Bloque {b.n} · {b.t}</span>
          <div className="nav">
            <button onClick={() => scrollToStep(i - 1)} disabled={i === 0} aria-label="Anterior">←</button>
            <button className="pri" onClick={() => scrollToStep(i + 1)} disabled={i === STEPS.length - 1} aria-label="Siguiente">Siguiente →</button>
          </div>
        </div>
      </div>
      <div className="col" ref={colRef}>
        <div className="col-pad" />
        {STEPS.map((x, k) => {
          const bl = BLOCKS[x.b]; const first = k === 0 || STEPS[k - 1].b !== x.b;
          return <article key={k} id={'paso-' + (k + 1)} className={'stepcard' + (k === i ? ' act' : '')} onClick={() => k !== i && scrollToStep(k)}>
            {first && <div className="blockhead"><span className="bn">{bl.n}</span><div><b>{bl.t}</b><small>{bl.time} · {bl.part}</small></div></div>}
            <div className="sc-top"><span className="sc-ico"><Ico t={x.t + ' ' + (x.d ?? '')} size={20} /></span><span className="sc-n">{String(k + 1).padStart(2, '0')}</span></div>
            <h2>{x.t}</h2>
            {x.d && <p>{x.d}</p>}
            {notes && x.nota && <div className="say"><b>Guion</b>{x.nota}</div>}
            {x.src && <div className="src">Fuentes · {x.src}</div>}
          </article>;
        })}
        <div className="col-pad" />
      </div>
    </div>
  </div>;
}
