import { cloneElement, type ReactElement } from 'react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Coins,
  Compass,
  Droplets,
  Flame,
  History,
  Home,
  Landmark,
  Layers,
  Leaf,
  Link2,
  MousePointerClick,
  Network,
  Recycle,
  Scale,
  ShieldAlert,
  Sprout,
  Table2,
  Users,
  Waves,
  Wind,
  X,
  Zap,
} from 'lucide-react';
import {
  ACTIVE_BY_BEAT,
  BOUNDS,
  COLORS,
  CYCLE,
  CYCLE_PROPOSED,
  GEO,
  MATRIX_ROWS,
  MODEL,
  MODELS,
  N,
  PHASES_CHR,
  PHASES_FND,
  SPINE,
  STEP_LABELS,
  type GeoId,
  type ModelId,
} from './content';
import { CONNS, REL_TEXT, type Conn } from './conns';
import { DualMapView } from './mapview';
import { DualTerritory3D, type Pad, type ViewFocus } from './territory3d';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.ticker.lagSmoothing(0);

const ICONS: Record<ModelId, ReactElement> = {
  suj: <Compass />,
  esc: <Users />,
  prop: <Landmark />,
  pchr: <History />,
  pfnd: <Sprout />,
  econ: <Coins />,
  meta: <Recycle />,
};

const GEO_ICON: Record<GeoId, ReactElement> = {
  batmands: <Building2 />,
  pusher: <ShieldAlert />,
  faelles: <Coins />,
  maskin: <Recycle />,
  stadsgrav: <Waves />,
  redcph: <Link2 />,
  caravan: <Sprout />,
  thepark: <Landmark />,
  ecohouses: <Home />,
  living: <Droplets />,
  windpark: <Wind />,
  sanctuary: <Flame />,
  redscot: <Zap />,
};

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Disposición orbital para la Red Síntesis Comparativa (Secuencia 8)
function orbit(W: number, H: number, m: boolean, shift = false) {
  const sh = shift && !m;
  const mx = shift && m;
  const u = mx
    ? Math.min(W * 0.45, (H * 0.56 - 96) / 2)
    : m
      ? Math.min(W * 0.45, (H - 250) / 2)
      : sh
        ? Math.min(W * 0.255, (H - 170) / 2)
        : Math.min(W * 0.42, (H - 150) / 2);
  const cx = sh ? W * 0.27 : W * 0.36;
  const cy = mx ? 86 + u : m ? H * 0.5 : H / 2 + 6;
  const at = (R: number, deg: number) => ({
    x: cx + R * Math.cos((deg * Math.PI) / 180),
    y: cy + R * Math.sin((deg * Math.PI) / 180),
  });
  const Rb = u * 0.98;
  const Rl = u * 0.82;
  const Re = u * 0.64;
  const Rt = u * (m ? 0.46 : 0.4);
  const pos: Record<ModelId, { x: number; y: number }> = {
    prop: { x: cx, y: cy },
    suj: at(Re, -90),
    esc: at(Rt, -150),
    pchr: at(Rt, -30),
    pfnd: at(Rt, 90),
    econ: at(Rl, 42),
    meta: at(Rb, -138),
  };
  return { u, cx, cy, Rb, Rl, Re, Rt, pos };
}

interface St {
  x: number;
  y: number;
  o: number;
  s: number;
  w: number;
  compact: boolean;
  d: number;
  orb?: boolean;
}

function layout(b: number, W: number, H: number, m: boolean, shift = false): Record<string, St> {
  const L: Record<string, St> = {};
  const cw = m ? Math.min(W * 0.9, 380) : 346;
  const sx = m ? W * 0.5 : W * 0.19;
  const gap = 148;
  const y0 = m ? 104 : 132;
  const act = ACTIVE_BY_BEAT[b];
  const target = H * (m ? (H < 720 ? 0.32 : 0.36) : 0.45);
  const cam = b >= 8 ? 0 : Math.min(0, target - (y0 + Math.max(act, 0) * gap));

  SPINE.forEach((id, i) => {
    const mod = MODEL[id];
    const vis = b >= mod.appear && !(b === 0);
    if (b >= 8) {
      const p = orbit(W, H, m, shift).pos[id];
      L[id] = { x: p.x, y: p.y + (m ? 14 : 22), o: 1, s: 1, w: m ? 96 : 140, compact: true, orb: true, d: 0.15 + i * 0.08 };
    } else {
      const ya = Math.max(y0 + 60, target);
      const y = i === act ? ya : i < act ? ya - 134 - (act - i - 1) * 98 : ya + 140;
      const o = !vis ? 0 : i === act ? 1 : Math.max(0.28, 0.7 - (act - i) * 0.14);
      const fade = y < (m ? 96 : 124) ? 0 : o;
      L[id] = {
        x: sx,
        y: vis ? y : y + 24,
        o: id === 'suj' && b === 0 ? 0 : fade,
        s: vis ? 1 : 0.94,
        w: i === act ? cw : cw * 0.84,
        compact: i !== act,
        d: i === act ? 0.35 : 0,
      };
    }
  });

  L.hero = b === 0 ? { x: W / 2, y: H * 0.45, o: 1, s: 1, w: 0, compact: false, d: 0 } : { x: sx, y: y0 + cam, o: 0, s: 0.55, w: 0, compact: false, d: 0 };
  return L;
}

function cameraForBeat(
  b: number,
  W: number,
  H: number,
  m: boolean,
  shift = false,
  overrideFocus: ViewFocus | null = null,
): {
  focus: ViewFocus;
  chrBox: [number, number, number, number];
  fndBox: [number, number, number, number];
  pad: Pad;
  azChr: number;
  azFnd: number;
  el: number;
} {
  const pad: Pad = m ? { top: H * 0.48, right: 14, bottom: 80, left: 14 } : { top: 80, right: 36, bottom: 86, left: W * 0.38 };

  let focus: ViewFocus = 'dual';
  let chrBox = BOUNDS.chr_all;
  let fndBox = BOUNDS.fnd_all;
  let azChr = -0.24;
  let azFnd = 0.22;
  let el = 0.84;

  if (b === 2) {
    focus = 'dual';
    chrBox = BOUNDS.chr_all;
    fndBox = BOUNDS.fnd_all;
    azChr = -0.22;
    azFnd = 0.25;
    el = 0.86;
  } else if (b === 3) {
    focus = 'dual';
    chrBox = BOUNDS.chr_core;
    fndBox = BOUNDS.fnd_core;
    azChr = 0.18;
    azFnd = -0.22;
    el = 0.8;
  } else if (b === 4) {
    // Periodización A: Freetown Christiania en primer plano 3D
    focus = 'chr';
    chrBox = BOUNDS.chr_core;
    azChr = -0.32;
    el = 0.76;
  } else if (b === 5) {
    // Periodización B: Ecoaldea Findhorn en primer plano 3D
    focus = 'fnd';
    fndBox = BOUNDS.fnd_tech;
    azFnd = 0.28;
    el = 0.75;
  } else if (b === 6) {
    // Enfoque 3: Economía y Conocimiento Adaptativo + Ciclo
    focus = 'dual';
    if (!m) pad.right = W * 0.3;
    chrBox = BOUNDS.chr_core;
    fndBox = BOUNDS.fnd_core;
    azChr = 0.25;
    azFnd = -0.25;
    el = 0.82;
  } else if (b === 7) {
    // Enfoque 5: Infraestructuras, Metabolismo y Dependencias
    focus = 'dual';
    chrBox = BOUNDS.chr_water;
    fndBox = BOUNDS.fnd_tech;
    azChr = -0.18;
    azFnd = 0.32;
    el = 0.84;
  } else if (b === 8) {
    focus = 'dual';
    pad.left = shift && !m ? W * 0.48 : W * 0.44;
    pad.right = 16;
    el = 0.8;
  }

  if (overrideFocus) focus = overrideFocus;
  return { focus, chrBox, fndBox, pad, azChr, azFnd, el };
}

const rect = (e: Element | null | undefined) => (e ? e.getBoundingClientRect() : null);
interface Pt {
  x: number;
  y: number;
  dx: number;
  dy: number;
  r?: number;
}

export default function App() {
  const [beat, setBeat] = useState(0);
  const [explore, setExplore] = useState(false);
  const [sel, setSel] = useState<ModelId | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);
  const [focusOverride, setFocusOverride] = useState<ViewFocus | null>(null);
  const [size, setSize] = useState({ W: window.innerWidth, H: window.innerHeight });
  const [mapOk, setMapOk] = useState(false);
  const [view3d, setView3d] = useState(true);
  const [k3p, setK3p] = useState(0);
  const { W, H } = size;
  const m = W < 760;

  const stageRef = useRef<HTMLDivElement>(null);
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const mapChrEl = useRef<HTMLDivElement>(null);
  const mapFndEl = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const cards = useRef<Record<string, HTMLElement | null>>({});
  const lanes = useRef<Record<string, HTMLElement | null>>({});
  const mv = useRef<DualMapView | null>(null);
  const k3 = useRef<DualTerritory3D | null>(null);
  const k3El = useRef<HTMLDivElement>(null);
  const v3 = useRef(true);
  const beatRef = useRef(0);
  const lock = useRef(false);
  const statics = useRef<Record<string, Pt>>({});
  const prevOn = useRef<Set<string>>(new Set());
  const inited = useRef(false);
  const shape = useRef<Record<string, string>>({});

  const go = useCallback((n: number) => {
    n = Math.max(0, Math.min(N - 1, n));
    if (n === beatRef.current) return;
    beatRef.current = n;
    setBeat(n);
    setFocusOverride(null);
    if (n < 8) {
      setExplore(false);
      setSel(null);
    }
    const target = n * window.innerHeight;
    lock.current = true;
    gsap.to(window, {
      scrollTo: target,
      duration: reduced() ? 0 : 0.9,
      ease: 'power2.inOut',
      onComplete: () => {
        lock.current = false;
      },
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showMatrix) setShowMatrix(false);
        else setSel(null);
        return;
      }
      if (showMatrix) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        go(beatRef.current + 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        go(beatRef.current - 1);
      }
    };
    const onResize = () => setSize({ W: window.innerWidth, H: window.innerHeight });
    addEventListener('keydown', onKey);
    addEventListener('resize', onResize);
    return () => {
      removeEventListener('keydown', onKey);
      removeEventListener('resize', onResize);
    };
  }, [go, showMatrix]);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      snap: { snapTo: 1 / (N - 1), duration: { min: 0.2, max: 0.6 }, ease: 'power2.inOut' },
      onUpdate: (self) => {
        if (lock.current) return;
        const n = Math.round(self.progress * (N - 1));
        if (n !== beatRef.current) {
          beatRef.current = n;
          setBeat(n);
          setFocusOverride(null);
          if (n < 8) {
            setExplore(false);
            setSel(null);
          }
        }
      },
    });
    return () => st.kill();
  }, []);

  // Inicializar visores 2D y 3D
  useEffect(() => {
    const v = new DualMapView(mapChrEl.current!, mapFndEl.current!);
    mv.current = v;
    v.ready.then(() => setMapOk(true));
    return () => {
      v.remove();
      mv.current = null;
    };
  }, []);

  useEffect(() => {
    const k = new DualTerritory3D(k3El.current!);
    k3.current = k;
    k.load(setK3p);
    return () => {
      k.dispose();
      k3.current = null;
    };
  }, []);

  useEffect(() => {
    v3.current = view3d;
  }, [view3d]);

  useEffect(() => {
    if (k3.current) {
      k3.current.active = beat >= 1 && view3d;
      k3.current.orbit = beat === 8;
    }
  }, [beat, view3d]);

  useEffect(() => {
    k3.current?.resize();
  }, [W, H]);

  useEffect(() => {
    if (k3.current) k3.current.state(beat, explore ? sel : null);
  }, [beat, explore, sel]);

  const camState = useMemo(
    () => cameraForBeat(beat, W, H, m, explore, focusOverride),
    [beat, W, H, m, explore, focusOverride],
  );

  useEffect(() => {
    const c = camState;
    if (k3.current) {
      k3.current.fit(c.focus, c.chrBox, c.fndBox, c.pad, reduced() ? 0 : 1.5, c.azChr, c.azFnd, c.el);
    }
    if (!mapOk || !mv.current) return;
    mv.current.fit(c.focus, c.chrBox, c.fndBox, c.pad, reduced() ? 0 : 1400);
  }, [camState, mapOk]);

  useLayoutEffect(() => {
    gsap.to(mapWrapRef.current, { opacity: beat >= 1 && !view3d ? 1 : 0, duration: reduced() ? 0 : 1.1, ease: 'power2.out' });
    gsap.to(k3El.current, { opacity: beat >= 1 && view3d ? (beat === 8 ? 0.78 : 1) : 0, duration: reduced() ? 0 : 1.1, ease: 'power2.out' });
    gsap.to('#wash', { opacity: beat >= 1 && beat <= 7 ? 1 : 0, duration: 0.8 });
  }, [beat, view3d]);

  // Posicionamiento animado de tarjetas
  useLayoutEffect(() => {
    gsap.set(
      Object.values(cards.current).filter((e) => e && !e.classList.contains('herosub') && e.tagName !== 'P'),
      { xPercent: -50, yPercent: -50 },
    );
    gsap.set(cards.current.heroSub, { opacity: 0, y: 14 });
  }, []);

  const lay = useMemo(() => layout(beat, W, H, m, explore && beat === 8), [beat, W, H, m, explore]);

  useLayoutEffect(() => {
    const first = !inited.current;
    inited.current = true;
    const dur = reduced() || first ? 0 : 0.9;
    for (const k of Object.keys(lay)) {
      const el = k === 'hero' ? cards.current.hero : cards.current[k];
      if (!el) continue;
      const s = lay[k];
      const dim = explore && sel ? (isRelated(sel, k as ModelId) ? 1 : 0.18) : 1;
      gsap.to(el, {
        x: s.x,
        y: s.y,
        opacity: s.o * dim,
        scale: s.s,
        width: s.w || undefined,
        duration: dur,
        delay: reduced() || first ? 0 : s.d,
        ease: 'power3.inOut',
        overwrite: 'auto',
        onStart: () => {
          if (k !== 'hero') {
            el.classList.toggle('compact', s.compact);
            el.classList.toggle('orb', !!s.orb);
            shape.current[k] = (s.compact ? ' compact' : '') + (s.orb ? ' orb' : '');
          }
        },
      });
      if (k !== 'hero') el.style.pointerEvents = s.o > 0.2 && (beat < 8 || explore) ? 'auto' : 'none';
    }
    if (beat === 0) gsap.to(cards.current.heroSub, { opacity: 1, y: 0, duration: 1, delay: 0.45, overwrite: 'auto' });
    else gsap.to(cards.current.heroSub, { opacity: 0, duration: 0.35, overwrite: 'auto' });
  }, [lay, explore, sel, beat]);

  const conns = useMemo(
    () => CONNS.filter((c) => beat >= c.min && beat <= c.max && (!c.exp || (explore && sel && c.models.includes(sel)))),
    [beat, explore, sel],
  );
  const related = (c: Conn) => !explore || !sel || sel === 'suj' || sel === 'econ' || sel === 'meta' || c.models.includes(sel);

  const geoColor = useMemo(() => {
    const g: Record<string, string> = {};
    const src =
      beat === 8 && !explore
        ? []
        : beat === 8 && !sel
          ? CONNS.filter((c) => c.min === 8 && c.max === 8 && (c.a.startsWith('o:') || c.b.startsWith('g:')))
          : conns.filter(related);
    for (const c of src) {
      for (const a of [c.a, c.b]) {
        if (a.startsWith('g:')) g[a.slice(2)] = g[a.slice(2)] || c.color;
      }
    }
    return g;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conns, explore, sel, beat]);

  // Ciclo de homologación metabólica y económica (Enfoques 3 y 5)
  const cyc = useMemo(() => {
    const top = H * (H < 720 ? 0.32 : 0.36) + 76;
    const avail = H - 84 - top;
    const cx = m ? W * 0.5 : Math.min(W * 0.82, W - 190);
    const cy = m ? top + avail / 2 : H * 0.52;
    const R = m ? Math.max(58, Math.min(W * 0.25, avail / 2 - 54)) : Math.min(W * 0.095, H * 0.21);
    const pts = CYCLE.map((c, i) => {
      const a = (-90 + i * 72) * (Math.PI / 180);
      return { ...c, a, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
    });
    return { cx, cy, R, pts, m };
  }, [W, H, m]);

  useEffect(() => {
    const p = cyc.pts[1];
    statics.current = {
      ringL: { x: cyc.cx - cyc.R - 14, y: cyc.cy, dx: -1, dy: 0 },
      fondo: { x: p.x, y: p.y, dx: 0, dy: 0 },
    };
  }, [cyc]);

  // Bucle de dibujo sincronizado por cuadro (GSAP ticker)
  useEffect(() => {
    const anchor = (s: string): Pt | null => {
      const [k, a, b] = s.split(':');
      if (k === 'o') {
        const t = cards.current[a]?.querySelector('.tile');
        const r = rect(t);
        return r ? { x: r.left + r.width / 2, y: r.top + r.height / 2, dx: 0, dy: 0, r: r.width / 2 + 3 } : null;
      }
      if (k === 'c' || k === 'f') {
        const r = rect(k === 'c' ? cards.current[a] : lanes.current[a]);
        if (!r) return null;
        if (b === 'b') return { x: r.left + r.width / 2, y: r.bottom, dx: 0, dy: 1 };
        if (b === 't') return { x: r.left + r.width / 2, y: r.top, dx: 0, dy: -1 };
        if (b === 'l') return { x: r.left, y: r.top + r.height / 2, dx: -1, dy: 0 };
        return { x: r.right, y: r.top + r.height / 2, dx: 1, dy: 0 };
      }
      if (k === 'g') {
        const gItem = GEO[a as GeoId];
        if (!gItem) return null;
        if (v3.current) {
          const q = k3.current?.project(gItem.site, gItem.ll);
          return q ? { x: q.x, y: q.y, dx: 0, dy: 0 } : null;
        }
        const q2 = mv.current?.project(gItem.site, gItem.ll);
        return q2 ? { x: q2.x, y: q2.y, dx: 0, dy: 0 } : null;
      }
      return statics.current[a] || null;
    };

    type Pd = { t: number; r: number; b: number; l: number };
    const union = (ids: string[], pad: Pd) => {
      let x0 = 1e9,
        y0 = 1e9,
        x1 = -1e9,
        y1 = -1e9;
      for (const id of ids) {
        const r = rect(cards.current[id]);
        if (!r) continue;
        x0 = Math.min(x0, r.left);
        y0 = Math.min(y0, r.top);
        x1 = Math.max(x1, r.right);
        y1 = Math.max(y1, r.bottom);
      }
      return { x: x0 - pad.l, y: y0 - pad.t, w: x1 - x0 + pad.l + pad.r, h: y1 - y0 + pad.t + pad.b };
    };
    const setLane = (key: string, ids: string[], pad: Pd) => {
      const el = lanes.current[key];
      if (!el) return;
      const u = union(ids, pad);
      el.style.transform = 'translate(' + u.x + 'px,' + u.y + 'px)';
      el.style.width = u.w + 'px';
      el.style.height = u.h + 'px';
    };

    interface Box {
      x: number;
      y: number;
      w: number;
      h: number;
    }
    const hit = (a: Box, b: Box) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    const toBox = (r: DOMRect, pad = 3): Box => ({ x: r.left - pad, y: r.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 });

    const declutter = (svg: SVGSVGElement, mids: Record<string, { x: number; y: number }>) => {
      const Wd = window.innerWidth,
        Hd = window.innerHeight;
      const occ: Box[] = [
        { x: 0, y: 0, w: Wd, h: 66 },
        { x: 0, y: Hd - 64, w: Wd, h: 64 },
      ];
      for (const id of Object.keys(cards.current)) {
        const el = cards.current[id];
        if (!el || id === 'heroSub') continue;
        if (parseFloat(el.style.opacity || '0') > 0.12) occ.push(toBox(el.getBoundingClientRect(), 4));
      }
      document.querySelectorAll('.lane.on .chip, #legend, #panel, .herosub, .vp-badge').forEach((el) => occ.push(toBox(el.getBoundingClientRect(), 4)));
      svg.querySelectorAll('.cyc.on text').forEach((el) => occ.push(toBox(el.getBoundingClientRect(), 3)));

      svg.querySelectorAll<SVGGElement>('g.gp').forEach((g) => {
        if (!g.classList.contains('on')) {
          g.style.visibility = '';
          return;
        }
        const bx = toBox(g.querySelector('.gd')!.getBoundingClientRect(), 4);
        if (occ.some((o) => hit(bx, o))) g.style.visibility = 'hidden';
        else {
          g.style.visibility = '';
          occ.push(bx);
        }
      });

      svg.querySelectorAll('g.gl2.on circle').forEach((el) => occ.push(toBox(el.getBoundingClientRect(), 3)));

      const place = (px: number, py: number, w: number, h: number, cands: [number, number, boolean?][], mid: boolean) => {
        for (const [dx, dy, md] of cands) {
          const m0 = md ?? mid;
          const x = px + dx - (m0 ? w / 2 : dx < 0 ? w : 0);
          const bx: Box = { x, y: py + dy - h + 3, w, h };
          if (bx.x < 6 || bx.x + bx.w > Wd - 6 || bx.y < 70 || bx.y + bx.h > Hd - 70) continue;
          if (occ.some((o) => hit(bx, o))) continue;
          occ.push(bx);
          return { x: px + dx, y: py + dy };
        }
        return null;
      };

      svg.querySelectorAll<SVGGElement>('g.gp.on').forEach((g) => {
        if (g.style.visibility === 'hidden') return;
        const t = g.querySelector<SVGTextElement>('.gl')!;
        const P = g.getAttribute('transform')?.match(/translate\(([-\d.]+)[ ,]([-\d.]+)\)/);
        if (!P) return;
        const px = parseFloat(P[1]),
          py = parseFloat(P[2]);
        if (!t.dataset.w) t.dataset.w = String(t.getComputedTextLength() + 8);
        const w = parseFloat(t.dataset.w);
        const pos = place(px, py, w, 13, [[0, 30, true], [0, -22, true], [20, 4], [20, 22], [-20, 4], [-20, 22]], false);
        if (pos) {
          const dxp = pos.x - px;
          const md = Math.abs(dxp) < 1;
          t.setAttribute('text-anchor', md ? 'middle' : dxp < 0 ? 'end' : 'start');
          t.setAttribute('x', String(pos.x - px));
          t.setAttribute('y', String(pos.y - py));
          t.style.opacity = '1';
        } else t.style.opacity = '0';
      });

      svg.querySelectorAll<SVGTextElement>('text.el.on').forEach((t) => {
        const m = mids[t.dataset.el!];
        if (!m) return;
        if (!t.dataset.w) t.dataset.w = String(t.getComputedTextLength() + 8);
        const pos = place(m.x, m.y, parseFloat(t.dataset.w), 13, [[0, -8], [0, 16], [0, -24], [0, 32]], true);
        if (pos) {
          t.setAttribute('x', String(pos.x));
          t.setAttribute('y', String(pos.y));
          t.style.opacity = '';
        } else t.style.opacity = '0';
      });
    };

    const tick = () => {
      const b = beatRef.current;
      setLane('eco', b >= 8 ? ['suj', 'esc', 'prop', 'pchr', 'pfnd'] : ['suj', 'esc'], { t: 38, r: 22, b: 20, l: 22 });
      setLane('hid', ['esc'], { t: 30, r: 11, b: 11, l: 11 });
      setLane('bio', SPINE, { t: 16, r: 28, b: 16, l: 28 });

      const mids: Record<string, { x: number; y: number }> = {};
      const svg = svgRef.current;
      if (!svg) return;

      svg.querySelectorAll<SVGGElement>('g[data-cn]').forEach((g) => {
        const A = anchor(g.dataset.a!);
        const B = anchor(g.dataset.b!);
        const gone = (s: string) => {
          const [k, a] = s.split(':');
          return (k === 'c' || k === 'o') && parseFloat(cards.current[a]?.style.opacity || '0') < 0.15;
        };
        const hide = gone(g.dataset.a!) || gone(g.dataset.b!) || !A || !B;
        g.style.visibility = hide ? 'hidden' : '';
        if (!A || !B || hide) return;

        if (A.r || B.r) {
          const L0 = Math.hypot(B.x - A.x, B.y - A.y) || 1,
            ux = (B.x - A.x) / L0,
            uy = (B.y - A.y) / L0;
          if (A.r) {
            A.x += ux * A.r;
            A.y += uy * A.r;
          }
          if (B.r) {
            B.x -= ux * B.r;
            B.y -= uy * B.r;
          }
        }
        const dist = Math.hypot(B.x - A.x, B.y - A.y);
        const k = Math.max(36, dist * 0.42);
        const c1 = { x: A.x + A.dx * k, y: A.y + A.dy * k };
        const c2 = { x: B.x + B.dx * k, y: B.y + B.dy * k };
        const d = 'M' + A.x + ' ' + A.y + 'C' + c1.x + ' ' + c1.y + ' ' + c2.x + ' ' + c2.y + ' ' + B.x + ' ' + B.y;
        g.querySelectorAll('path[data-p]').forEach((p) => p.setAttribute('d', d));
        const ar = g.querySelector('.arrow');
        if (ar) {
          const ex = B.x - c2.x,
            ey = B.y - c2.y;
          const ang = Math.atan2(ey || B.y - A.y, ex || B.x - A.x) * (180 / Math.PI);
          ar.setAttribute('transform', 'translate(' + B.x + ' ' + B.y + ') rotate(' + ang + ')');
        }
        const t = 0.5,
          u = 0.5;
        const mx = u * u * u * A.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * B.x;
        const my = u * u * u * A.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * B.y;
        mids[g.dataset.cn!] = { x: mx, y: my };
      });

      svg.querySelectorAll<SVGGElement>('g[data-g]').forEach((g) => {
        const P = anchor('g:' + g.dataset.g);
        if (P) {
          g.style.display = '';
          g.setAttribute('transform', 'translate(' + P.x + ' ' + P.y + ')');
        } else {
          g.style.display = 'none';
        }
      });

      svg.querySelectorAll<SVGGElement>('g[data-gl]').forEach((g) => {
        const m = mids[g.dataset.gl!];
        if (m) g.setAttribute('transform', 'translate(' + m.x + ' ' + m.y + ')');
      });

      // Corchete lateral de la Regla Metodológica en Secuencia 7
      const bp = svg.querySelectorAll<SVGPathElement>('path[data-brk]');
      if (b === 7 && window.innerWidth >= 760) {
        const rb = rect(cards.current.meta);
        const items = SPINE.filter((id) => id !== 'meta')
          .map((id) => ({ id, r: cards.current[id] ? rect(cards.current[id]) : null, o: parseFloat(cards.current[id]?.style.opacity || '0') }))
          .filter((x) => x.r && x.o > 0.2);
        if (rb && items.length) {
          const x = Math.min(rb.left, ...items.map((i) => i.r!.left)) - 22;
          const yb = rb.top + rb.height / 2;
          const ys = items.map((i) => i.r!.top + i.r!.height / 2);
          const yMin = Math.min(...ys);
          let d = 'M' + rb.left + ' ' + yb + 'H' + x + 'V' + yMin;
          items.forEach((i, k) => {
            d += 'M' + x + ' ' + ys[k] + 'H' + (i.r!.left - 3);
          });
          bp.forEach((p) => p.setAttribute('d', d));
        }
      } else bp.forEach((p) => p.setAttribute('d', ''));

      declutter(svg, mids);
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [mapOk]);

  // Destello viajero que recorre cada conexión al activarse
  useEffect(() => {
    const now = new Set(conns.filter(related).map((c) => c.id));
    const svg = svgRef.current;
    if (svg && !reduced()) {
      now.forEach((id) => {
        if (prevOn.current.has(id)) return;
        const c = CONNS.find((x) => x.id === id)!;
        const t = svg.querySelector('g[data-cn="' + id + '"] .trav');
        if (!t) return;
        setTimeout(() => {
          t.classList.remove('go');
          void (t as SVGElement).getBoundingClientRect();
          t.classList.add('go');
        }, ((c.delay || 0) + 0.45) * 1000);
      });
    }
    prevOn.current = now;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conns, explore, sel]);

  const ripple = (e: React.MouseEvent, color: string) => {
    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.cssText = 'left:' + e.clientX + 'px;top:' + e.clientY + 'px;--c:' + color;
    stageRef.current?.appendChild(r);
    setTimeout(() => r.remove(), 1000);
  };

  const onCard = (e: React.MouseEvent, id: ModelId) => {
    e.stopPropagation();
    ripple(e, MODEL[id].color);
    if (beat >= 8) {
      if (explore) setSel(sel === id ? null : id);
      return;
    }
    const act = ACTIVE_BY_BEAT[beat];
    if (SPINE[act] === id) go(beat + 1);
  };

  const orb = useMemo(() => orbit(W, H, m, explore && beat === 8), [W, H, m, explore, beat]);
  const selModel = sel ? MODEL[sel] : null;
  const dashedLegend = beat >= 2;

  // Coordenadas para las insignias superiores de cada plano 3D
  const leftSplit = Math.min(Math.max(camState.pad.left * 0.72, 260), W * 0.38);
  const availW = W - leftSplit;
  const dividerX = Math.floor(leftSplit + availW / 2);

  return (
    <>
      <div ref={spacerRef} style={{ height: N * 100 + 'vh' }} aria-hidden />
      <div
        id="stage"
        ref={stageRef}
        onClick={() => {
          if (explore) setSel(null);
        }}
      >
        <div
          id="map-wrap"
          ref={mapWrapRef}
          style={{
            opacity: 0,
            paddingLeft: !m && camState.focus === 'dual' ? leftSplit : 0,
            flexDirection: m ? 'column' : 'row',
          }}
        >
          <div
            ref={mapChrEl}
            className="map-pane"
            style={{ display: camState.focus === 'fnd' ? 'none' : 'block' }}
          />
          <div
            ref={mapFndEl}
            className="map-pane"
            style={{ display: camState.focus === 'chr' ? 'none' : 'block' }}
          />
        </div>
        <div id="k3d" ref={k3El} style={{ opacity: 0 }} />
        <div id="wash" style={{ opacity: 0 }} />

        {/* Divisor e insignias interactivas de los dos planos 3D */}
        {beat >= 1 && camState.focus === 'dual' && !m && (
          <div className="vp-divider" style={{ left: dividerX }} />
        )}
        {beat >= 1 && (camState.focus === 'dual' || camState.focus === 'chr') && (
          <div
            className="vp-badge"
            style={{ left: m ? 14 : camState.focus === 'dual' ? leftSplit + 18 : W * 0.42 }}
            onClick={(e) => {
              e.stopPropagation();
              setFocusOverride(focusOverride === 'chr' ? null : 'chr');
            }}
            title="Haz clic para alternar enfoque 3D exclusivo en Freetown Christiania"
          >
            <i style={{ background: COLORS.orange }} />
            <span>Freetown Christiania</span>
            <span className="sub">34 ha · Copenhague (1971)</span>
          </div>
        )}
        {beat >= 1 && (camState.focus === 'dual' || camState.focus === 'fnd') && (
          <div
            className="vp-badge"
            style={{
              left: m ? 14 : camState.focus === 'dual' ? dividerX + 18 : W * 0.42,
              top: m && camState.focus === 'dual' ? H * 0.5 + 12 : 68,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setFocusOverride(focusOverride === 'fnd' ? null : 'fnd');
            }}
            title="Haz clic para alternar enfoque 3D exclusivo en Ecoaldea Findhorn"
          >
            <i style={{ background: COLORS.green }} />
            <span>Ecoaldea Findhorn</span>
            <span className="sub">14–30 ha · Escocia (1962)</span>
          </div>
        )}

        {/* Campos conceptuales (carriles punteados) */}
        <div ref={(e) => { lanes.current.bio = e; }} className="lane bio" style={{ ['--c' as string]: COLORS.bio }}>
          <span className="chip"><Scale />Regla Metodológica · Homologación y Dependencias</span>
        </div>
        <div ref={(e) => { lanes.current.eco = e; }} className={'lane eco' + (beat >= 1 && beat <= 2 ? ' on' : '')} style={{ ['--c' as string]: COLORS.cream }}>
          <span className="chip"><Compass />{beat >= 8 ? 'Unidad Equivalente · 14 a 34 ha' : 'Unidad de Análisis Equivalente (14–34 ha)'}</span>
        </div>
        <div ref={(e) => { lanes.current.hid = e; }} className={'lane hid' + (beat >= 1 && beat <= 2 ? ' on' : '')} style={{ ['--c' as string]: COLORS.water }}>
          <span className="chip"><Users />Población estable vs. flotante</span>
        </div>

        {/* Conexiones SVG animadas, anillos y ciclo metabólico */}
        <svg id="links" ref={svgRef} width={W} height={H}>
          <NetRings o={orb} on={beat === 8} m={m} />
          <g className={'cyc' + (beat === 6 || (beat === 8 && explore && (sel === 'econ' || sel === 'meta')) ? ' on' : '')}>
            <CycleSvg cyc={cyc} />
          </g>
          {CONNS.map((c) => {
            const on = conns.includes(c) && related(c);
            const soft = beat <= 7 && c.max >= 8 && c.min <= 6 && beat >= c.min + 2;
            return (
              <g
                key={c.id}
                data-cn={c.id}
                data-a={c.a}
                data-b={c.b}
                className={
                  'cn' +
                  (on ? ' on' : '') +
                  (c.dashed ? ' dsh' : '') +
                  (soft ? ' soft' : '') +
                  (beat === 8 && explore && sel && !related(c) ? ' dimS' : '')
                }
                style={{ ['--c' as string]: c.color, ['--dl' as string]: (on ? c.delay || 0 : 0) + 's' }}
              >
                {c.title && <title>{c.title}</title>}
                <path data-p className="base" pathLength={1} />
                <path data-p className="flow" pathLength={1} />
                <path data-p className="trav" pathLength={1} />
                {c.arrow && <path className="arrow" d="M-9 -5 L3 0 L-9 5 Z" />}
              </g>
            );
          })}
          {CONNS.filter((c) => c.label).map((c) => (
            <text
              key={'t' + c.id}
              data-el={c.id}
              className={'el' + (conns.includes(c) && related(c) ? ' on' : '')}
              textAnchor="middle"
              style={{ ['--c' as string]: c.color, ['--dl' as string]: (c.delay || 0) + 0.4 + 's' }}
            >
              {c.label}
            </text>
          ))}
          {CONNS.filter((c) => c.kind).map((c) => (
            <g
              key={'gl' + c.id}
              data-gl={c.id}
              className={'gl2' + (conns.includes(c) && related(c) ? ' on' : '') + (c.kind === 'tension' ? ' ten' : ' dep')}
              style={{ ['--dl' as string]: (c.delay || 0) + 0.5 + 's' }}
            >
              <title>{c.title}</title>
              <circle r="12" />
              {cloneElement(c.kind === 'tension' ? <Zap /> : <Link2 />, { x: -7, y: -7, size: 14, strokeWidth: 2.2 } as object)}
            </g>
          ))}
          <g className={'brk' + (beat === 7 ? ' on' : '')}>
            <path data-brk className="base" pathLength={1} />
            <path data-brk className="flow" pathLength={1} />
          </g>
          {(Object.keys(GEO) as GeoId[]).map((g) => (
            <g
              key={g}
              data-g={g}
              className={'gp' + (geoColor[g] ? ' on' : '')}
              style={{ ['--c' as string]: geoColor[g] || '#fff' }}
            >
              <title>{GEO[g].label} — {GEO[g].sub}</title>
              <circle className="gr" r="14" />
              <circle className="gd" r="14" />
              <g style={{ color: 'var(--c)' }}>
                {cloneElement(GEO_ICON[g], { x: -8, y: -8, size: 16, strokeWidth: 2 } as object)}
              </g>
              <text x="0" y="30" className="gl">{GEO[g].label}</text>
            </g>
          ))}
        </svg>

        {/* Inicio: Nodo central 1.1 con anillo pulsante */}
        <div
          ref={(e) => { cards.current.hero = e; }}
          className="abs hero"
          onClick={() => beat === 0 && go(1)}
          style={{ cursor: beat === 0 ? 'pointer' : 'default', pointerEvents: beat === 0 ? 'auto' : 'none' }}
        >
          <div className="node d0 on" style={{ ['--c' as string]: COLORS.cream, ['--ink' as string]: '#0a0a0a' }}>
            <div className="tile"><Compass /></div>
            <div className="txt">
              <div className="id">1.1 · FICHA TÉCNICA Y DELIMITACIÓN TERRITORIAL</div>
              <div className="lb">CHRISTIANIA ⇄ FINDHORN</div>
            </div>
          </div>
        </div>
        <p ref={(e) => { cards.current.heroSub = e; }} className="herosub" style={{ top: H * 0.45 + (m ? 114 : 132) }}>
          Caracterización comparativa en 3D de dos recintos comunitarios autogestionados de escala intermedia (14 a 34 ha): Copenhague (Dinamarca) y Moray (Escocia).
        </p>
        <div id="hint" className={beat === 0 ? '' : 'hide'}>
          <MousePointerClick />
          {m ? 'Toca para iniciar el recorrido 3D' : 'Haz clic en el nodo central o desplaza para iniciar'}
        </div>

        {/* Columna de tarjetas interactivas */}
        {MODELS.map((mod) => (
          <div
            key={mod.id}
            ref={(e) => { cards.current[mod.id] = e; }}
            data-id={mod.id}
            className={'abs node d1 on mm-' + mod.id + (explore && sel === mod.id ? ' sel' : '') + (shape.current[mod.id] || '')}
            style={{ ['--c' as string]: mod.color, ['--ink' as string]: mod.ink, opacity: 0, cursor: 'pointer' }}
            onClick={(e) => onCard(e, mod.id)}
          >
            <div className="wm">{ICONS[mod.id]}</div>
            <div className="tile">{ICONS[mod.id]}</div>
            <div className="txt">
              <div className="id">DIMENSIÓN {mod.n} · {mod.role}</div>
              <div className="lb">{mod.title}</div>
              <div className="lbs">{mod.short}</div>
              <p className="dsc">{mod.text}</p>
              <div className="dual-badges">
                <span className="tag">🇩🇰 {mod.chrBadge}</span>
                <span className="tag">🏴󠁧󠁢󠁳󠁣󠁴󠁿 {mod.fndBadge}</span>
              </div>
              {mod.tags && (
                <div className="chain" aria-label="hitos y criterios">
                  {mod.tags.map((t, i) => (
                    <span key={t} style={{ animationDelay: i * 0.8 + 's' }}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Panel de exploración en la secuencia 8 */}
        {beat === 8 && explore && (
          <div
            id="panel"
            className={sel ? 'on' : ''}
            style={{
              ['--c' as string]: selModel?.color || '#fff',
              ...(m ? { top: Math.round(orb.cy + orb.Rl + 36), bottom: 'auto', maxHeight: Math.round(H - (orb.cy + orb.Rl + 36) - 74) } : {}),
            }}
          >
            {selModel ? (
              <>
                <div className="kick">{selModel.role}</div>
                <h3>{selModel.title}</h3>
                <p>{selModel.text}</p>
                <div className="kick" style={{ marginTop: 12 }}>Relaciones de Homologación</div>
                <ul>
                  {REL_TEXT[selModel.id].rel.map(([id, t]) => (
                    <li
                      key={id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSel(id);
                      }}
                    >
                      <i style={{ background: MODEL[id].color }} />
                      <b>{MODEL[id].short}</b> · {t}
                    </li>
                  ))}
                </ul>
                <div className="kick" style={{ marginTop: 12 }}>Anclajes en los Planos 3D</div>
                <div className="geos">
                  {REL_TEXT[selModel.id].geo.map((g) => (
                    <span key={g}>{GEO[g].label}</span>
                  ))}
                </div>
              </>
            ) : (
              <div className="kick">Selecciona un nodo orbital para inspeccionar sus flujos y anclajes 3D</div>
            )}
          </div>
        )}

        {/* Modal interactivo con la Matriz Comparativa 1.1 completa y la Periodización Histórica */}
        {showMatrix && (
          <div id="matrix-modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <div className="kick">SECCIÓN 1.1 · DOCUMENTACIÓN INTEGRAL</div>
                <h2 style={{ font: '700 20px var(--sans)', color: '#fff', marginTop: 2 }}>
                  Ficha Técnica, Delimitación Territorial y Caracterización Comparativa
                </h2>
              </div>
              <button className="btn" onClick={() => setShowMatrix(false)}>
                <X />Cerrar
              </button>
            </div>

            <table className="mtx-grid">
              <thead>
                <tr>
                  <th>Criterio de Delimitación</th>
                  <th>🇩🇰 Freetown Christiania (Dinamarca)</th>
                  <th>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Ecoaldea Findhorn (Escocia, Reino Unido)</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_ROWS.map((r) => (
                  <tr key={r.criterio}>
                    <td>{r.criterio}</td>
                    <td>{r.chr}</td>
                    <td>{r.fnd}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="phases-wrap">
              <div className="phase-col">
                <h4 style={{ color: COLORS.orange }}>
                  <History size={18} /> A. Freetown Christiania (Copenhague, Dinamarca)
                </h4>
                {PHASES_CHR.map((p) => (
                  <div key={p.period} className="phase-item">
                    <div className="p-yr">{p.period}</div>
                    <div className="p-tt">{p.title}</div>
                    <div className="p-ds">{p.desc}</div>
                  </div>
                ))}
              </div>
              <div className="phase-col">
                <h4 style={{ color: COLORS.green }}>
                  <Leaf size={18} /> B. Ecoaldea Findhorn (Moray, Escocia)
                </h4>
                {PHASES_FND.map((p) => (
                  <div key={p.period} className="phase-item">
                    <div className="p-yr">{p.period}</div>
                    <div className="p-tt">{p.title}</div>
                    <div className="p-ds">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Barra superior */}
        <div id="bar">
          <div id="brand">
            <div className="logo"><Network /></div>
            <div>
              <h1>Christiania ⇄ Findhorn · 1.1</h1>
              <p>Ficha Técnica, Delimitación Territorial y Planos 3D</p>
            </div>
          </div>
          <button
            className={'btn' + (showMatrix ? ' pri act' : '')}
            onClick={() => setShowMatrix(!showMatrix)}
            title="Ver Matriz Comparativa Técnica y Periodización completa"
          >
            <Table2 /><span className="bt">Matriz 1.1</span>
          </button>
          {beat >= 1 && (
            <button
              className="btn"
              onClick={() => setView3d(!view3d)}
              title="Alternar entre los Planos 3D extruidos y la Cartografía 2D"
            >
              <Layers />
              <span className="bt">{view3d ? 'Cartografía 2D' : 'Planos 3D'}</span>
              {view3d && k3p < 1 && <span className="kick" style={{ marginLeft: 4 }}>{Math.round(k3p * 100)}%</span>}
            </button>
          )}
          {beat === 8 && (
            <button
              className={'btn pri' + (explore ? ' act' : '')}
              onClick={() => {
                setExplore(!explore);
                setSel(null);
              }}
            >
              <Network />
              {explore ? (m ? 'Salir' : 'Salir de explorar') : (m ? 'Explorar' : 'Explorar red')}
            </button>
          )}
        </div>

        {dashedLegend && !(m && explore) && (
          <div id="legend">
            <span>
              <svg width="26" height="8"><path d="M1 4H25" stroke="#bbb" strokeWidth="2" strokeLinecap="round" /></svg>
              flujo / estructura consolidada
            </span>
            <span>
              <svg width="26" height="8"><path d="M1 4H25" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 5" /></svg>
              homologación / transición
            </span>
            {beat >= 4 && (
              <span>
                <svg width="26" height="8"><path d="M1 4H25" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" /></svg>
                tensión histórica / crisis
              </span>
            )}
            {beat >= 7 && (
              <span>
                <svg width="26" height="8"><path d="M1 4H25" stroke="#8e8e8e" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" /></svg>
                dependencia red pública
              </span>
            )}
          </div>
        )}
        <p className="attr">Cartografía 3D © OpenStreetMap contributors · Christianshavn (Copenhague) &amp; Findhorn (Escocia)</p>

        {/* Navegación por secuencias */}
        <div id="nav">
          <button className="btn" style={{ visibility: beat === 0 ? 'hidden' : 'visible' }} onClick={() => go(beat - 1)}>
            <ArrowLeft />Atrás
          </button>
          <div className="steps">
            <div className="ticks">
              {STEP_LABELS.map((s, i) => (
                <span
                  key={s}
                  onClick={() => go(i)}
                  title={s}
                  style={{ height: i === beat ? 16 : 7, background: i <= beat ? '#f0f0f0' : '#383838' }}
                />
              ))}
            </div>
            <span className="kick hidemob">
              {String(beat + 1).padStart(2, '0')} · {STEP_LABELS[beat]}
            </span>
          </div>
          <button className="btn" style={{ visibility: beat === N - 1 ? 'hidden' : 'visible' }} onClick={() => go(beat + 1)}>
            Continuar<ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

function isRelated(sel: ModelId, id: ModelId) {
  if (sel === id) return true;
  if (sel === 'suj' || sel === 'econ' || sel === 'meta') return true;
  return REL_TEXT[sel].rel.some(([r]) => r === id);
}

// ------------------------------------------------------------ Ciclo de Homologación Metabólica y Económica
const CYC_ICON: Record<string, ReactElement> = {
  captacion: <Wind />,
  fondo: <Coins />,
  ecotec: <Home />,
  reuso: <Droplets />,
  redext: <Link2 />,
};
const CYC_LINES: Record<string, string[]> = {
  captacion: ['Captación', 'y Energía'],
  fondo: ['Fondo Común', 'Fælleskasse / PET'],
  ecotec: ['Hábitat y', 'Ecotecnología'],
  reuso: ['Depuración y', 'Reúso Local'],
  redext: ['Red Pública', 'Externa'],
};

function CycleSvg({
  cyc,
}: {
  cyc: { cx: number; cy: number; R: number; m: boolean; pts: { id: string; label: string; a: number; x: number; y: number }[] };
}) {
  const { cx, cy, R, pts, m } = cyc;
  const T = m ? 22 : 28;
  const gapA = (T + 12) / R;
  const arcs = pts.map((p, i) => {
    const q = pts[(i + 1) % pts.length];
    const a0 = p.a + gapA;
    let a1 = q.a - gapA;
    if (a1 < a0) a1 += Math.PI * 2;
    const x0 = cx + R * Math.cos(a0),
      y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1),
      y1 = cy + R * Math.sin(a1);
    return {
      d: 'M' + x0 + ' ' + y0 + 'A' + R + ' ' + R + ' 0 0 1 ' + x1 + ' ' + y1,
      x1,
      y1,
      ang: (a1 + Math.PI / 2) * (180 / Math.PI),
      prop: CYCLE_PROPOSED[i],
      i,
    };
  });

  return (
    <>
      <circle cx={cx} cy={cy} r={R + T + 26} className="cycbg" />
      <circle cx={cx} cy={cy} r={R - T - 16} className="cycin" />
      {arcs.map((a) => (
        <g key={a.i} className={'cycarc' + (a.prop ? ' dsh' : '')} style={{ ['--c' as string]: COLORS.orange, ['--dl' as string]: 0.4 + a.i * 0.4 + 's' }}>
          <path d={a.d} className="base" pathLength={1} />
          <path d={a.d} className="flow" pathLength={1} />
          <path className="arrow on" d="M-9 -5 L3 0 L-9 5 Z" transform={'translate(' + a.x1 + ' ' + a.y1 + ') rotate(' + a.ang + ')'} />
        </g>
      ))}
      {pts.map((p, i) => {
        const prop = CYCLE_PROPOSED[i === 0 ? 4 : i - 1];
        const cos = Math.cos(p.a),
          sin = Math.sin(p.a);
        const right = !m && cos > 0.25,
          left = !m && cos < -0.25;
        const lines = CYC_LINES[p.id];
        const lx = p.x + (right ? T + 12 : left ? -T - 12 : 0);
        const ly = right || left ? p.y - (lines.length - 1) * 7 : (m ? sin < -0.9 : sin < 0) ? p.y - T - 12 - (lines.length - 1) * 14 : p.y + T + (m ? 15 : 20);
        return (
          <g key={p.id} className="cycnode" style={{ ['--dl' as string]: 0.25 + i * 0.4 + 's', ['--i' as string]: i }}>
            <title>{p.label}</title>
            <rect x={p.x - T} y={p.y - T} width={T * 2} height={T * 2} rx={m ? 12 : 15} className={'cyctile' + (prop ? ' prop' : '')} />
            <g style={{ color: COLORS.orange }}>
              {cloneElement(CYC_ICON[p.id], { x: p.x - (m ? 11 : 14), y: p.y - (m ? 11 : 14), size: m ? 22 : 28, strokeWidth: 1.8 } as object)}
            </g>
            <text x={p.x - T + (m ? 4 : 6)} y={p.y - T + (m ? 11 : 14)} className="cycnum">{String(i + 1).padStart(2, '0')}</text>
            <text x={lx} y={ly} textAnchor={right ? 'start' : left ? 'end' : 'middle'} className="cyclb">
              {lines.map((l, k) => (
                <tspan key={k} x={lx} dy={k === 0 ? 0 : 13}>{l}</tspan>
              ))}
            </text>
          </g>
        );
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" className="cyctitle">HOMOLOGACIÓN</text>
      <text x={cx} y={cy + 10} textAnchor="middle" className="cycsub">enfoques 3 y 5</text>
      <text x={cx} y={cy + 24} textAnchor="middle" className="cycsub">economía + metabolismo</text>
    </>
  );
}

// ------------------------------------------------------------ Anillos orbitales de la Red Síntesis
function NetRings({ o, on, m }: { o: ReturnType<typeof orbit>; on: boolean; m: boolean }) {
  const ring = (R: number) => 'M' + (o.cx - R) + ' ' + o.cy + 'a' + R + ' ' + R + ' 0 1 0 ' + 2 * R + ' 0a' + R + ' ' + R + ' 0 1 0 ' + -2 * R + ' 0';
  return (
    <g className={'net' + (on ? ' on' : '')}>
      <defs>
        <radialGradient id="ecoGlow">
          <stop offset="0%" stopColor={COLORS.cream} stopOpacity="0.2" />
          <stop offset="70%" stopColor={COLORS.cream} stopOpacity="0.07" />
          <stop offset="100%" stopColor={COLORS.cream} stopOpacity="0.02" />
        </radialGradient>
        <radialGradient id="hidGlow">
          <stop offset="0%" stopColor={COLORS.earth} stopOpacity="0.38" />
          <stop offset="100%" stopColor={COLORS.earth} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={o.cx} cy={o.cy} r={o.Rb} className="nring bio" />
      <path d={ring(o.Rb)} id="rbio" fill="none" />
      <text x={o.cx} y={o.cy - o.Rb - 9} textAnchor="middle" className="ringlb" style={{ fill: COLORS.bio }}>
        {m ? 'ENFOQUE 5 · METABOLISMO Y DEPENDENCIAS' : 'ENFOQUE 5 · INFRAESTRUCTURAS, METABOLISMO Y REDES EXTERNAS'}
      </text>
      <circle r="4.5" fill={COLORS.bio} className="orbdot">
        <animateMotion dur="38s" repeatCount="indefinite"><mpath href="#rbio" /></animateMotion>
      </circle>
      <circle r="3" fill={COLORS.bio} className="orbdot">
        <animateMotion dur="38s" begin="-19s" repeatCount="indefinite"><mpath href="#rbio" /></animateMotion>
      </circle>

      <circle cx={o.cx} cy={o.cy} r={o.Rl} className="nring lim" />
      <path d={ring(o.Rl)} id="rlim" fill="none" />
      <text x={o.cx} y={o.cy + o.Rl + 20} textAnchor="middle" className="ringlb" style={{ fill: COLORS.grey }}>
        {m ? 'ENFOQUE 3 · ECONOMÍA ADAPTATIVA' : 'ENFOQUE 3 · ECONOMÍA Y CONOCIMIENTO ADAPTATIVO (FÆLLESKASSE ⇄ PET)'}
      </text>
      <circle r="4" fill={COLORS.grey} className="orbdot">
        <animateMotion dur="26s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#rlim" /></animateMotion>
      </circle>
      <circle r="3" fill={COLORS.grey} className="orbdot">
        <animateMotion dur="26s" begin="-13s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#rlim" /></animateMotion>
      </circle>

      <circle cx={o.cx} cy={o.cy} r={o.Re} fill="url(#ecoGlow)" className="neco" />
      <circle cx={o.cx} cy={o.cy} r={o.Re} className="nring eco" />
      <circle cx={o.cx} cy={o.cy} r={o.Rt * 1.55} className="nring tri" />
      <circle cx={o.cx} cy={o.cy} r={o.Rt * 0.62} fill="url(#hidGlow)" className="nhid" />
    </g>
  );
}
