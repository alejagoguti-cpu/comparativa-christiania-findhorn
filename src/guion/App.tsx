import { useCallback, useEffect, useRef, useState } from 'react';
import { BLOCKS, STEPS } from './steps';
import { StageCtx, useSize } from './kit';

const MQ = '(max-width: 900px), (orientation: portrait) and (max-width: 1100px)';
const fromHash = () => { const n = parseInt(location.hash.replace('#', ''), 10); return Number.isFinite(n) ? Math.min(STEPS.length, Math.max(1, n)) - 1 : 0; };
const PARTS = ['Contexto y evolución', 'Enfoque 3 · Economía y conocimiento', 'Enfoque 5 · Infraestructura y metabolismo'];
const partOf = (p: string) => (p.startsWith('Contexto') ? 0 : p === 'Enfoque 3' ? 1 : 2);

export default function App() {
  const [i, setI] = useState(fromHash);
  const [notes, setNotes] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia(MQ).matches);
  const stageRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);
  const size = useSize(stageRef);
  useEffect(() => { const m = window.matchMedia(MQ); const f = () => setMobile(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const go = useCallback((n: number) => setI((c) => Math.min(STEPS.length - 1, Math.max(0, c + n))), []);
  useEffect(() => { history.replaceState(null, '', '#' + (i + 1)); }, [i]);
  useEffect(() => { const f = () => setI(fromHash()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go(1); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === 'Home') setI(0);
      else if (e.key === 'End') setI(STEPS.length - 1);
      else if (e.key.toLowerCase() === 'n') setNotes((v) => !v);
      else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [go]);
  useEffect(() => { tocRef.current?.querySelector('.on')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }, [i]);
  const s = STEPS[i]; const b = BLOCKS[s.b];
  const firstOf = (bi: number) => STEPS.findIndex((x) => x.b === bi);
  let lastPart = -1;
  return <div className="app">
    <aside className="side">
      <div className="logo"><b>Christiania · Findhorn</b><span>Cómo se sostiene una comunidad</span></div>
      <nav className="toc" ref={tocRef}>
        {BLOCKS.map((bl, bi) => {
          const p = partOf(bl.part); const head = p !== lastPart; lastPart = p;
          const idx = STEPS.map((x, k) => [x, k] as const).filter(([x]) => x.b === bi);
          return <div key={bi} style={{ display: 'contents' }}>
            {head && <div className="part">{PARTS[p]}</div>}
            <button className={s.b === bi ? 'on' : ''} onClick={() => setI(firstOf(bi))}>
              <span className="n">{bl.n}</span><span className="t">{bl.t}</span>
              <span className="dots">{idx.map(([, k]) => <i key={k} className={k === i ? 'c' : k < i ? 'v' : ''} />)}</span>
            </button>
          </div>;
        })}
      </nav>
      <div className="keys"><kbd>→</kbd> siguiente · <kbd>←</kbd> anterior<br /><kbd>N</kbd> guion · <kbd>F</kbd> pantalla completa</div>
    </aside>
    <main className="main">
      <div className="head">
        <span className="chip">Bloque {b.n}</span>
        <span className="bt">{b.t}</span>
        <span className="sp" />
        <span className="tc">{b.time} · {b.part}</span>
      </div>
      <div className="body">
        <div className="stagecard">
          <div className="stage" ref={stageRef}>
            <StageCtx.Provider value={{ w: size.w || 1000, h: size.h || 600, mobile, tall: mobile || (size.w / Math.max(1, size.h)) < 1.3 }}>
              {size.w > 0 && <div className="scene" key={i}>{s.v()}</div>}
            </StageCtx.Provider>
          </div>
        </div>
        <section className="info" key={i}>
          <span className="num po">{String(i + 1).padStart(2, '0')} / {STEPS.length}</span>
          <h1 className="po" style={{ animationDelay: '.05s' }}>{s.t}</h1>
          {s.d && <p className="po" style={{ animationDelay: '.15s' }}>{s.d}</p>}
          {notes && s.nota && <div className="say"><b>Guion · {b.time}</b>{s.nota}</div>}
          {s.src && <div className="src po" style={{ animationDelay: '.25s' }}>Fuentes · {s.src}</div>}
        </section>
      </div>
      <div className="foot">
        <span className="ct">{String(i + 1).padStart(2, '0')}/{STEPS.length}</span>
        <div className="scrub" role="slider" aria-valuenow={i + 1} aria-valuemin={1} aria-valuemax={STEPS.length}>
          {STEPS.map((x, k) => <span key={k} title={`${k + 1}. ${x.t}`} className={(k === i ? 'c' : k < i ? 'v' : '') + (k > 0 && STEPS[k - 1].b !== x.b ? ' b' : '')} onClick={() => setI(k)} />)}
        </div>
        <div className="nav">
          <button onClick={() => go(-1)} disabled={i === 0}>Anterior</button>
          <button className="pri" onClick={() => go(1)} disabled={i === STEPS.length - 1}>Siguiente</button>
        </div>
      </div>
    </main>
  </div>;
}
