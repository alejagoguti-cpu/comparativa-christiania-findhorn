import { useCallback, useEffect, useRef, useState } from 'react';
import { BLOCKS, STEPS } from './steps';
import { StageCtx, useSize } from './kit';

const MQ = '(max-width: 860px), (orientation: portrait) and (max-width: 1024px)';
const fromHash = () => { const n = parseInt(location.hash.replace('#', ''), 10); return Number.isFinite(n) ? Math.min(STEPS.length, Math.max(1, n)) - 1 : 0; };

export default function App() {
  const [i, setI] = useState(fromHash);
  const [notes, setNotes] = useState(false);
  const [mobile, setMobile] = useState(() => window.matchMedia(MQ).matches);
  const stageRef = useRef<HTMLDivElement>(null);
  const size = useSize(stageRef);
  useEffect(() => { const m = window.matchMedia(MQ); const f = () => setMobile(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const go = useCallback((n: number) => setI((c) => Math.min(STEPS.length - 1, Math.max(0, c + n))), []);
  useEffect(() => { history.replaceState(null, '', '#' + (i + 1)); }, [i]);
  useEffect(() => { const f = () => setI(fromHash()); window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f); }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go(1); }
      else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === 'Home') setI(0);
      else if (e.key === 'End') setI(STEPS.length - 1);
      else if (e.key.toLowerCase() === 'n') setNotes((v) => !v);
      else if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.();
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [go]);
  // precarga de imágenes del siguiente paso no es necesaria: el navegador las cachea al pasar.
  const s = STEPS[i]; const b = BLOCKS[s.b];
  const firstOf = (bi: number) => STEPS.findIndex((x) => x.b === bi);
  const lastOf = (bi: number) => STEPS.length - 1 - [...STEPS].reverse().findIndex((x) => x.b === bi);
  const onStage = (e: React.MouseEvent) => {
    if (mobile) return; // en celular se avanza con los botones
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    go(e.clientX - r.left < r.width * 0.2 ? -1 : 1);
  };
  return <div className="deck">
    <div>
      <div className="top">
        <span className="brand">Christiania <i>y</i> Findhorn</span>
        <span className="blk">{b.part} · Bloque {b.n} · {b.t}</span>
        <span className="sp" />
        <span className="tc">{b.time}</span>
      </div>
      <div className="prog" aria-hidden>
        {BLOCKS.map((_, bi) => { const a = firstOf(bi), z = lastOf(bi); const f = i > z ? 1 : i < a ? 0 : (i - a + 1) / (z - a + 1); return <span key={bi} title={'Bloque ' + BLOCKS[bi].n} onClick={() => setI(a)} style={{ cursor: 'pointer' }}><b style={{ transform: `scaleX(${f})` }} /></span>; })}
      </div>
    </div>
    <div className="stagewrap">
      <div className="stage" ref={stageRef} onClick={onStage}>
        <StageCtx.Provider value={{ w: size.w || 1200, h: size.h || 700, mobile }}>
          {size.w > 0 && <div className="scene" key={i}>{s.v()}</div>}
        </StageCtx.Provider>
      </div>
    </div>
    <div className="cap">
      <div key={i} className="po">
        <h1>{s.t}</h1>
        {s.d && <p>{s.d}</p>}
        {s.src && <div className="src">Fuentes: {s.src}</div>}
      </div>
      <div className="nav">
        <button onClick={() => go(-1)} disabled={i === 0} aria-label="Anterior">Anterior</button>
        <span className="ct">{i + 1} / {STEPS.length}</span>
        <button className="pri" onClick={() => go(1)} disabled={i === STEPS.length - 1} aria-label="Siguiente">Siguiente</button>
      </div>
    </div>
    {notes && s.nota && <div className="notes"><small>Guion · {b.time}</small>{s.nota}</div>}
  </div>;
}
