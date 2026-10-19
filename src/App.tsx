import { cloneElement, type ReactElement } from 'react';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Camera,
  Coins,
  Compass,
  Download,
  Droplets,
  Edit3,
  ExternalLink,
  Flame,
  History,
  Home,
  Landmark,
  Layers,
  Leaf,
  Link2,
  Network,
  Pause,
  Play,
  Recycle,
  RotateCcw,
  Scale,
  ShieldAlert,
  Sliders,
  Sprout,
  Table2,
  Timer,
  Upload,
  Users,
  Waves,
  Wind,
  X,
  Zap,
} from 'lucide-react';
import {
  ACTIVE_BY_BEAT,
  BEATS,
  COLORS,
  GEO,
  MATRIX_ROWS,
  MODEL,
  MODELS,
  N,
  PHASES_CHR,
  PHASES_FND,
  SPINE,
  type BeatSpec,
  type ChartKind,
  type GeoId,
  type MatrixRow,
  type Model,
  type ModelId,
} from './content';
import { CONNS, REL_TEXT, type Conn } from './conns';
import { ACADEMIC_PAPERS, REAL_PHOTOS, getBeatEvidence, type AcademicPaper, type RealPhoto } from './references';
import { DualMapView } from './mapview';
import { DualTerritory3D, type Pad, type ViewFocus } from './territory3d';
import { PremiumChart } from './PremiumChart';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.ticker.lagSmoothing(0);

const STORAGE_KEY = 'christiania_findhorn_custom_v1';

interface CustomOverrides {
  models: Record<string, Partial<Model>>;
  beats: Record<number, Partial<BeatSpec>>;
  evidence: Record<number, { photo?: Partial<RealPhoto>; paper?: Partial<AcademicPaper> }>;
  matrix: MatrixRow[];
}

function loadOverrides(): CustomOverrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        models: parsed.models || {},
        beats: parsed.beats || {},
        evidence: parsed.evidence || {},
        matrix: parsed.matrix || MATRIX_ROWS,
      };
    }
  } catch {
    // ignore storage errors
  }
  return { models: {}, beats: {}, evidence: {}, matrix: MATRIX_ROWS };
}

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
  dysse: <Home />,
  redcph: <Link2 />,
  caravan: <Sprout />,
  thepark: <Landmark />,
  ecohouses: <Home />,
  whins: <Home />,
  living: <Droplets />,
  windpark: <Wind />,
  sanctuary: <Flame />,
  cullerne: <Leaf />,
  redscot: <Zap />,
};

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function orbit(W: number, H: number, m: boolean) {
  const u = m ? Math.min(W * 0.42, (H - 260) / 2) : Math.min(W * 0.22, (H - 180) / 2);
  const cx = m ? W * 0.5 : W * 0.25;
  const cy = m ? H * 0.42 : H * 0.5;
  const at = (R: number, deg: number) => ({
    x: cx + R * Math.cos((deg * Math.PI) / 180),
    y: cy + R * Math.sin((deg * Math.PI) / 180),
  });
  const Rb = u * 0.98;
  const Rl = u * 0.82;
  const Re = u * 0.64;
  const Rt = u * 0.42;
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

function layout(b: number, W: number, H: number, m: boolean, hidePanels = false): Record<string, St> {
  const L: Record<string, St> = {};
  const cw = m ? Math.min(W * 0.9, 340) : 280;
  const sx = m ? W * 0.5 : 154;
  const act = ACTIVE_BY_BEAT[b];
  const target = H * (m ? 0.28 : 0.46);

  SPINE.forEach((id, i) => {
    const mod = MODEL[id];
    const vis = b >= mod.appear && !hidePanels;
    if (b === N - 1) {
      const p = orbit(W, H, m).pos[id];
      L[id] = { x: p.x, y: p.y + (m ? 14 : 20), o: hidePanels ? 0 : 1, s: 1, w: m ? 96 : 128, compact: true, orb: true, d: 0.1 + i * 0.06 };
    } else {
      const ya = Math.max(146, target);
      const y = i === act ? ya : i < act ? ya - 114 - (act - i - 1) * 54 : ya + 126;
      const o = !vis ? 0 : i === act ? 1 : Math.max(0.22, 0.58 - (act - i) * 0.14);
      const fade = y < (m ? 82 : 96) ? 0 : o;
      L[id] = {
        x: sx,
        y: vis ? y : y + 18,
        o: fade,
        s: vis ? 1 : 0.94,
        w: i === act ? cw : cw * 0.88,
        compact: i !== act,
        d: i === act ? 0.18 : 0,
      };
    }
  });
  return L;
}

function cameraForBeat(
  b: number,
  W: number,
  H: number,
  m: boolean,
  overrideFocus: ViewFocus | null = null,
  hidePanels = false,
): {
  focus: ViewFocus;
  chrBox: [number, number, number, number];
  fndBox: [number, number, number, number];
  pad: Pad;
  azChr: number;
  azFnd: number;
  el: number;
} {
  const spec = BEATS[b] || BEATS[0];
  const rightHudW = m ? 12 : hidePanels ? 24 : Math.min(372, W * 0.31);
  const leftColW = m ? 12 : hidePanels ? 24 : 306;
  const pad: Pad = m
    ? { top: H * 0.36, right: 12, bottom: H * 0.36, left: 12 }
    : { top: 68, right: rightHudW, bottom: 64, left: leftColW };

  return {
    focus: overrideFocus || spec.focus,
    chrBox: spec.chrBox,
    fndBox: spec.fndBox,
    pad,
    azChr: spec.azChr,
    azFnd: spec.azFnd,
    el: spec.el,
  };
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
  const [autoPlay, setAutoPlay] = useState(false);
  const [secInBeat, setSecInBeat] = useState(0);
  const [sel, setSel] = useState<ModelId | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);
  // Modo Presentación activo por defecto: oculta controles de edición y bordes punteados
  const [presMode, setPresMode] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [hidePanels, setHidePanels] = useState(false);
  const [hudTab, setHudTab] = useState<'mix' | 'chart' | 'evidence'>('mix');
  const [showIntro, setShowIntro] = useState(true);
  const [overrides, setOverrides] = useState<CustomOverrides>(() => loadOverrides());
  const [zoomPhoto, setZoomPhoto] = useState<RealPhoto | null>(null);
  const [focusOverride, setFocusOverride] = useState<ViewFocus | null>(null);
  const [size, setSize] = useState({ W: window.innerWidth, H: window.innerHeight });
  const [mapOk, setMapOk] = useState(false);
  const [view3d, setView3d] = useState(true);
  const [k3p, setK3p] = useState(0);
  const { W, H } = size;
  const m = W < 960;

  const fileInputRef = useRef<HTMLInputElement>(null);
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
  const prevOn = useRef<Set<string>>(new Set());
  const inited = useRef(false);
  const shape = useRef<Record<string, string>>({});

  // Persistir cambios automáticamente en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch {
      // ignore quota errors
    }
  }, [overrides]);

  // Helpers para actualizar cualquier texto, cifra, foto o cita en vivo
  const updateBeat = useCallback((idx: number, patch: Partial<BeatSpec>) => {
    setOverrides((prev) => ({
      ...prev,
      beats: { ...prev.beats, [idx]: { ...(prev.beats[idx] || {}), ...patch } },
    }));
  }, []);

  const updateModel = useCallback((id: ModelId, patch: Partial<Model>) => {
    setOverrides((prev) => ({
      ...prev,
      models: { ...prev.models, [id]: { ...(prev.models[id] || {}), ...patch } },
    }));
  }, []);

  const updateEvidence = useCallback(
    (idx: number, kind: 'photo' | 'paper', patch: Partial<RealPhoto> | Partial<AcademicPaper>) => {
      setOverrides((prev) => {
        const cur = prev.evidence[idx] || {};
        return {
          ...prev,
          evidence: {
            ...prev.evidence,
            [idx]: {
              ...cur,
              [kind]: { ...(cur[kind] || {}), ...patch },
            },
          },
        };
      });
    },
    [],
  );

  const updateMatrixCell = useCallback((rowIdx: number, field: keyof MatrixRow, value: string) => {
    setOverrides((prev) => {
      const next = prev.matrix.map((r, i) => (i === rowIdx ? { ...r, [field]: value } : r));
      return { ...prev, matrix: next };
    });
  }, []);

  const resetAllOverrides = () => {
    localStorage.removeItem(STORAGE_KEY);
    setOverrides({ models: {}, beats: {}, evidence: {}, matrix: MATRIX_ROWS });
  };

  const exportOverridesJson = () => {
    const blob = new Blob([JSON.stringify(overrides, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'christiania-findhorn-edicion.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importOverridesJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setOverrides({
          models: parsed.models || {},
          beats: parsed.beats || {},
          evidence: parsed.evidence || {},
          matrix: parsed.matrix || MATRIX_ROWS,
        });
      } catch {
        alert('El archivo JSON no tiene un formato válido.');
      }
    };
    reader.readAsText(file);
  };

  // Datos combinados (base + ediciones del usuario)
  const mergedModels: Model[] = useMemo(
    () => MODELS.map((mod) => ({ ...mod, ...(overrides.models[mod.id] || {}) })),
    [overrides.models],
  );

  const curBeat: BeatSpec = useMemo(() => {
    const base = BEATS[beat] || BEATS[0];
    const ov = overrides.beats[beat] || {};
    return {
      ...base,
      ...ov,
      series: ov.series || base.series,
    };
  }, [beat, overrides.beats]);

  const curEvidence = useMemo(() => {
    const base = getBeatEvidence(beat);
    const ov = overrides.evidence[beat] || {};
    return {
      photo: { ...base.photo, ...(ov.photo || {}) },
      paper: { ...base.paper, ...(ov.paper || {}) },
    };
  }, [beat, overrides.evidence]);

  const go = useCallback((n: number) => {
    n = Math.max(0, Math.min(N - 1, n));
    if (n === beatRef.current) return;
    beatRef.current = n;
    setBeat(n);
    setSecInBeat(0);
    setFocusOverride(null);
    if (n < N - 1) setSel(null);
    const target = n * window.innerHeight;
    lock.current = true;
    gsap.to(window, {
      scrollTo: target,
      duration: reduced() ? 0 : 0.75,
      ease: 'power2.inOut',
      onComplete: () => {
        lock.current = false;
      },
    });
  }, []);

  // Cronómetro automático de 20 minutos: avanza cada 30 segundos
  useEffect(() => {
    if (!autoPlay) return;
    const iv = setInterval(() => {
      setSecInBeat((prev) => {
        if (prev + 1 >= 30) {
          if (beatRef.current < N - 1) {
            go(beatRef.current + 1);
          } else {
            setAutoPlay(false);
          }
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [autoPlay, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // No interceptar flechas ni espacio si el usuario está escribiendo o editando un texto
      const tag = (e.target as HTMLElement)?.tagName;
      const isEditingText =
        (e.target as HTMLElement)?.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
      if (isEditingText) return;

      if (e.key === 'Escape') {
        if (zoomPhoto) setZoomPhoto(null);
        else if (showMatrix) setShowMatrix(false);
        else if (showDrawer) setShowDrawer(false);
        else setSel(null);
        return;
      }
      if (showMatrix || zoomPhoto) return;
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
  }, [go, showMatrix, zoomPhoto, showDrawer]);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      snap: { snapTo: 1 / (N - 1), duration: { min: 0.15, max: 0.45 }, ease: 'power2.inOut' },
      onUpdate: (self) => {
        if (lock.current) return;
        const n = Math.round(self.progress * (N - 1));
        if (n !== beatRef.current) {
          beatRef.current = n;
          setBeat(n);
          setSecInBeat(0);
          setFocusOverride(null);
          if (n < N - 1) setSel(null);
        }
      },
    });
    return () => st.kill();
  }, []);

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
      k3.current.active = view3d;
      k3.current.orbit = beat === N - 1;
    }
  }, [beat, view3d]);

  useEffect(() => {
    k3.current?.resize();
  }, [W, H]);

  useEffect(() => {
    if (k3.current) k3.current.state(beat, sel);
  }, [beat, sel]);

  const camState = useMemo(
    () => cameraForBeat(beat, W, H, m, focusOverride, hidePanels),
    [beat, W, H, m, focusOverride, hidePanels],
  );

  useEffect(() => {
    const c = camState;
    if (k3.current) {
      k3.current.fit(c.focus, c.chrBox, c.fndBox, c.pad, reduced() ? 0 : 1.35, c.azChr, c.azFnd, c.el);
    }
    if (!mapOk || !mv.current) return;
    mv.current.fit(c.focus, c.chrBox, c.fndBox, c.pad, reduced() ? 0 : 1200);
  }, [camState, mapOk]);

  useLayoutEffect(() => {
    gsap.to(mapWrapRef.current, { opacity: !view3d ? 1 : 0, duration: reduced() ? 0 : 0.9, ease: 'power2.out' });
    gsap.to(k3El.current, { opacity: view3d ? (beat === N - 1 ? 0.85 : 1) : 0, duration: reduced() ? 0 : 0.9, ease: 'power2.out' });
    gsap.to('#wash', { opacity: hidePanels ? 0.2 : beat < N - 1 ? 0.85 : 0.5, duration: 0.8 });
  }, [beat, view3d, hidePanels]);

  useLayoutEffect(() => {
    gsap.set(Object.values(cards.current).filter(Boolean), { xPercent: -50, yPercent: -50 });
  }, []);

  const introOn = !!curBeat.intro && showIntro && !hidePanels;
  useEffect(() => {
    setShowIntro(true);
  }, [beat]);
  const lay = useMemo(() => layout(beat, W, H, m, hidePanels || introOn), [beat, W, H, m, hidePanels, introOn]);

  useLayoutEffect(() => {
    const first = !inited.current;
    inited.current = true;
    const dur = reduced() || first ? 0 : 0.75;
    for (const k of Object.keys(lay)) {
      const el = cards.current[k];
      if (!el) continue;
      const s = lay[k];
      const dim = beat === N - 1 && sel ? (isRelated(sel, k as ModelId) ? 1 : 0.22) : 1;
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
          el.classList.toggle('compact', s.compact);
          el.classList.toggle('orb', !!s.orb);
          shape.current[k] = (s.compact ? ' compact' : '') + (s.orb ? ' orb' : '');
        },
      });
      el.style.pointerEvents = s.o > 0.2 ? 'auto' : 'none';
    }
  }, [lay, sel, beat]);

  const conns = useMemo(
    () => CONNS.filter((c) => beat >= c.min && beat <= c.max && (!c.exp || (beat === N - 1 && (!sel || c.models.includes(sel))))),
    [beat, sel],
  );
  const related = (c: Conn) => !sel || c.models.includes(sel);

  const geoColor = useMemo(() => {
    const g: Record<string, string> = {};
    curBeat.activeGeos.forEach((id) => {
      g[id] = GEO[id].site === 'chr' ? COLORS.orange : COLORS.green;
    });
    for (const c of conns.filter(related)) {
      for (const a of [c.a, c.b]) {
        if (a.startsWith('g:')) g[a.slice(2)] = g[a.slice(2)] || c.color;
      }
    }
    return g;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conns, curBeat, sel]);

  // Bucle de dibujo de conectores sobre los planos 3D
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
      return null;
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

    const tick = () => {
      const b = beatRef.current;
      setLane('eco', b === N - 1 ? ['suj', 'esc', 'prop', 'pchr', 'pfnd'] : ['suj', 'esc'], { t: 32, r: 18, b: 16, l: 18 });
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
        const k = Math.max(32, dist * 0.38);
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
        const mx = 0.125 * A.x + 0.375 * c1.x + 0.375 * c2.x + 0.125 * B.x;
        const my = 0.125 * A.y + 0.375 * c1.y + 0.375 * c2.y + 0.125 * B.y;
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
        const m0 = mids[g.dataset.gl!];
        if (m0) g.setAttribute('transform', 'translate(' + m0.x + ' ' + m0.y + ')');
      });

      svg.querySelectorAll<SVGTextElement>('text.el.on').forEach((t) => {
        const m0 = mids[t.dataset.el!];
        if (m0) {
          t.setAttribute('x', String(m0.x));
          t.setAttribute('y', String(m0.y - 10));
        }
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [mapOk]);

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
        }, ((c.delay || 0) + 0.25) * 1000);
      });
    }
    prevOn.current = now;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conns, sel]);

  const ripple = (e: React.MouseEvent, color: string) => {
    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.cssText = 'left:' + e.clientX + 'px;top:' + e.clientY + 'px;--c:' + color;
    stageRef.current?.appendChild(r);
    setTimeout(() => r.remove(), 1000);
  };

  const onCard = (e: React.MouseEvent, id: ModelId) => {
    e.stopPropagation();
    if (editMode) return; // En modo edición el clic permite editar el texto directamente
    ripple(e, MODEL[id].color);
    if (beat === N - 1) {
      setSel(sel === id ? null : id);
      return;
    }
    const mod = MODEL[id];
    go(mod.appear);
  };

  const orb = useMemo(() => orbit(W, H, m), [W, H, m]);
  const totalElapsedSec = beat * 30 + secInBeat;
  const fmtMMSS = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const canEdit = !presMode && editMode;
  const splitMidX = !m
    ? Math.floor(
        Math.min(camState.pad.left, W * 0.30) +
          Math.max(280, W - Math.min(camState.pad.left, W * 0.30) - Math.min(camState.pad.right, W * 0.34)) / 2,
      )
    : Math.floor(W / 2);

  return (
    <>
      <div ref={spacerRef} style={{ height: N * 100 + 'vh' }} aria-hidden />
      <div id="stage" ref={stageRef} className={canEdit ? 'edit-active' : ''} onClick={() => setSel(null)}>
        <div
          id="map-wrap"
          ref={mapWrapRef}
          style={{
            opacity: 0,
            paddingLeft: !m && !hidePanels && camState.focus === 'dual' ? 306 : 0,
            paddingRight: !m && !hidePanels ? 372 : 0,
            flexDirection: m ? 'column' : 'row',
          }}
        >
          <div ref={mapChrEl} className="map-pane" style={{ display: camState.focus === 'fnd' ? 'none' : 'block' }} />
          <div ref={mapFndEl} className="map-pane" style={{ display: camState.focus === 'chr' ? 'none' : 'block' }} />
        </div>
        <div id="k3d" ref={k3El} style={{ opacity: 1 }} />
        <div id="wash" style={{ opacity: 1 }} />

        {/* Línea divisoria sutil cuando ambos territorios 3D están en paralelo */}
        {!m && camState.focus === 'dual' && (
          <div className="vp-divider" style={{ left: splitMidX }} />
        )}

        {/* Píldora central unificada del escenario 3D: Plano activo + Selector de cámara 3D */}
        <div id="stage-pill" style={{ left: !m ? splitMidX : '50%' }} onClick={(e) => e.stopPropagation()}>
          <div className="sp-plan">
            <span
              className="sp-code"
              contentEditable={canEdit}
              suppressContentEditableWarning
              onBlur={(e) => updateBeat(beat, { planCode: e.currentTarget.textContent || '' })}
            >
              {curBeat.planCode}
            </span>
            <span
              className="sp-title"
              contentEditable={canEdit}
              suppressContentEditableWarning
              onBlur={(e) => updateBeat(beat, { planTitle: e.currentTarget.textContent || '' })}
            >
              {curBeat.planTitle}
            </span>
          </div>
          <div className="sp-cams">
            <button
              className={'sp-cam-btn' + (camState.focus === 'dual' ? ' on' : '')}
              onClick={() => setFocusOverride('dual')}
              title="Vista comparativa simultánea de ambos territorios 3D"
            >
              Paralelo 3D
            </button>
            <button
              className={'sp-cam-btn chr' + (camState.focus === 'chr' ? ' on' : '')}
              onClick={() => setFocusOverride(focusOverride === 'chr' ? null : 'chr')}
              title="Enfocar Freetown Christiania (34 ha)"
            >
              <i />🇩🇰 Christiania
            </button>
            <button
              className={'sp-cam-btn fnd' + (camState.focus === 'fnd' ? ' on' : '')}
              onClick={() => setFocusOverride(focusOverride === 'fnd' ? null : 'fnd')}
              title="Enfocar Ecoaldea Findhorn (14–30 ha)"
            >
              <i />🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn
            </button>
          </div>
        </div>

        {/* Diapositiva narrativa (apertura / tesis / pregunta guía) */}
        {curBeat.intro && !hidePanels && (
          introOn ? (
            <div id="intro-slide" onClick={(e) => e.stopPropagation()}>
              <div className="is-card">
                <div className="is-head">
                  <span
                    className="is-kicker"
                    contentEditable={canEdit}
                    suppressContentEditableWarning
                    onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, kicker: e.currentTarget.textContent || '' } })}
                  >
                    {curBeat.intro.kicker}
                  </span>
                  <button className="is-close" onClick={() => setShowIntro(false)} title="Ocultar texto y ver los planos 3D">
                    <X size={13} /> Ver planos 3D
                  </button>
                </div>

                <p
                  className="is-lead"
                  contentEditable={canEdit}
                  suppressContentEditableWarning
                  onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, lead: e.currentTarget.textContent || '' } })}
                >
                  {curBeat.intro.lead}
                </p>

                <p
                  className="is-shared"
                  contentEditable={canEdit}
                  suppressContentEditableWarning
                  onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, shared: e.currentTarget.textContent || '' } })}
                >
                  {curBeat.intro.shared}
                </p>

                <div className="is-cols">
                  <div className="is-col chr">
                    <span className="is-tag">🇩🇰 Freetown Christiania · Copenhague</span>
                    <p
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, chr: e.currentTarget.textContent || '' } })}
                    >
                      {curBeat.intro.chr}
                    </p>
                  </div>
                  <div className="is-col fnd">
                    <span className="is-tag">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn · Moray, Escocia</span>
                    <p
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, fnd: e.currentTarget.textContent || '' } })}
                    >
                      {curBeat.intro.fnd}
                    </p>
                  </div>
                </div>

                <div className="is-thesis">
                  <span className="is-tag">Tesis</span>
                  <p
                    contentEditable={canEdit}
                    suppressContentEditableWarning
                    onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, thesis: e.currentTarget.textContent || '' } })}
                  >
                    {curBeat.intro.thesis}
                  </p>
                  <div className="is-pillars">
                    <span>Recursos económicos</span>
                    <span>Transmisión de conocimientos</span>
                    <span>Infraestructuras</span>
                    <span>Dependencias del exterior</span>
                  </div>
                </div>

                <div className="is-question">
                  <span className="is-tag">Pregunta guía</span>
                  <p
                    contentEditable={canEdit}
                    suppressContentEditableWarning
                    onBlur={(e) => updateBeat(beat, { intro: { ...curBeat.intro!, question: e.currentTarget.textContent || '' } })}
                  >
                    {curBeat.intro.question}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button id="intro-reopen" onClick={(e) => { e.stopPropagation(); setShowIntro(true); }}>
              <BookOpen size={13} /> Mostrar texto de la diapositiva
            </button>
          )
        )}

        {/* Capa SVG de flujos dinámicos, anillos orbitales y anclajes 3D */}
        <svg id="links" ref={svgRef} width={W} height={H}>
          <NetRings o={orb} on={beat === N - 1 && !hidePanels} m={m} />
          {CONNS.map((c) => {
            const on = !hidePanels && conns.includes(c) && related(c);
            return (
              <g
                key={c.id}
                data-cn={c.id}
                data-a={c.a}
                data-b={c.b}
                className={'cn' + (on ? ' on' : '') + (c.dashed ? ' dsh' : '')}
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
              className={'el' + (!hidePanels && conns.includes(c) && related(c) ? ' on' : '')}
              textAnchor="middle"
              style={{ ['--c' as string]: c.color, ['--dl' as string]: (c.delay || 0) + 0.3 + 's' }}
            >
              {c.label}
            </text>
          ))}
          {CONNS.filter((c) => c.kind).map((c) => (
            <g
              key={'gl' + c.id}
              data-gl={c.id}
              className={'gl2' + (!hidePanels && conns.includes(c) && related(c) ? ' on' : '') + (c.kind === 'tension' ? ' ten' : ' dep')}
              style={{ ['--dl' as string]: (c.delay || 0) + 0.35 + 's' }}
            >
              <title>{c.title}</title>
              <circle r="12" />
              {cloneElement(c.kind === 'tension' ? <Zap /> : <Link2 />, { x: -7, y: -7, size: 14, strokeWidth: 2.2 } as object)}
            </g>
          ))}
          {(Object.keys(GEO) as GeoId[]).map((g) => (
            <g
              key={g}
              data-g={g}
              className={'gp' + (geoColor[g] ? ' on' : '')}
              style={{ ['--c' as string]: geoColor[g] || '#fff' }}
            >
              <title>{GEO[g].label} — {GEO[g].sub}</title>
              <circle className="gr" r="13" />
              <circle className="gd" r="13" />
              <g style={{ color: 'var(--c)' }}>
                {cloneElement(GEO_ICON[g], { x: -7.5, y: -7.5, size: 15, strokeWidth: 2 } as object)}
              </g>
              <text x="0" y="26" className="gl">{GEO[g].label}</text>
            </g>
          ))}
        </svg>

        {/* Columna izquierda: 7 Dimensiones Estructurales en cristal oscuro arquitectónico */}
        {mergedModels.map((mod) => (
          <div
            key={mod.id}
            ref={(e) => { cards.current[mod.id] = e; }}
            data-id={mod.id}
            className={'abs node d1 on mm-' + mod.id + (sel === mod.id ? ' sel' : '') + (shape.current[mod.id] || '')}
            style={{ ['--c' as string]: mod.color, ['--ink' as string]: mod.ink, opacity: 0, cursor: canEdit ? 'text' : 'pointer' }}
            onClick={(e) => onCard(e, mod.id)}
          >
            <div className="tile">{ICONS[mod.id]}</div>
            <div className="txt">
              <div
                className="id"
                contentEditable={canEdit}
                suppressContentEditableWarning
                onBlur={(e) => updateModel(mod.id, { role: e.currentTarget.textContent || '' })}
              >
                {mod.role}
              </div>
              <div
                className="lb"
                contentEditable={canEdit}
                suppressContentEditableWarning
                onBlur={(e) => updateModel(mod.id, { title: e.currentTarget.textContent || '' })}
              >
                {mod.title}
              </div>
              <div className="lbs">{mod.short}</div>
              <p
                className="dsc"
                contentEditable={canEdit}
                suppressContentEditableWarning
                onBlur={(e) => updateModel(mod.id, { text: e.currentTarget.textContent || '' })}
              >
                {mod.text}
              </p>
              <div className="dual-badges">
                <span
                  className="tag chr"
                  contentEditable={canEdit}
                  suppressContentEditableWarning
                  onBlur={(e) => updateModel(mod.id, { chrBadge: (e.currentTarget.textContent || '').replace(/^🇩🇰\s*/, '') })}
                >
                  🇩🇰 {mod.chrBadge}
                </span>
                <span
                  className="tag fnd"
                  contentEditable={canEdit}
                  suppressContentEditableWarning
                  onBlur={(e) => updateModel(mod.id, { fndBadge: (e.currentTarget.textContent || '').replace(/^🏴󠁧󠁢󠁳󠁣󠁴󠁿\s*/, '') })}
                >
                  🏴󠁧󠁢󠁳󠁣󠁴󠁿 {mod.fndBadge}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Dock Derecho Unificado: Diagrama Interactivo + Fotografía Real + Paper citado */}
        {!hidePanels && (
          <div id="hud-right" onClick={(e) => e.stopPropagation()}>
            <div className="hud-card">
              {/* Cabecera con pestañas de vista limpia */}
              <div className="hud-head">
                <div className="hud-tabs">
                  <button
                    className={'hud-tab' + (hudTab === 'mix' ? ' on' : '')}
                    onClick={() => setHudTab('mix')}
                    title="Ver Diagrama Interactivo y resumen de Foto/Paper simultáneamente"
                  >
                    <Scale size={11} /> Mixto
                  </button>
                  <button
                    className={'hud-tab' + (hudTab === 'chart' ? ' on' : '')}
                    onClick={() => setHudTab('chart')}
                    title="Enfocar en el Diagrama Interactivo"
                  >
                    <BarChart3 size={11} /> Diagrama ({beat + 1}/{N})
                  </button>
                  <button
                    className={'hud-tab' + (hudTab === 'evidence' ? ' on' : '')}
                    onClick={() => setHudTab('evidence')}
                    title="Ver Fotografía Real y Cita APA completa"
                  >
                    <Camera size={11} /> Foto &amp; Paper
                  </button>
                </div>
                <span className="hud-time-pill">{curBeat.timeRange}</span>
              </div>

              {/* Sección 1: Diagrama Cuantitativo Interactivo */}
              {hudTab !== 'evidence' && (
                <>
                  <div className="hud-title-block">
                    <div
                      className="hud-title"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateBeat(beat, { chartTitle: e.currentTarget.textContent || '' })}
                    >
                      {curBeat.chartTitle}
                    </div>
                    <div
                      className="hud-sub"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateBeat(beat, { chartSub: e.currentTarget.textContent || '' })}
                    >
                      {curBeat.chartSub}
                    </div>
                  </div>

                  <div className="kpi-row">
                    <div className="kpi-box chr">
                      <small>🇩🇰 Freetown Christiania</small>
                      <span
                        contentEditable={canEdit}
                        suppressContentEditableWarning
                        onBlur={(e) => updateBeat(beat, { kpiChr: e.currentTarget.textContent || '' })}
                      >
                        {curBeat.kpiChr}
                      </span>
                    </div>
                    <div className="kpi-box fnd">
                      <small>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Ecoaldea Findhorn</small>
                      <span
                        contentEditable={canEdit}
                        suppressContentEditableWarning
                        onBlur={(e) => updateBeat(beat, { kpiFnd: e.currentTarget.textContent || '' })}
                      >
                        {curBeat.kpiFnd}
                      </span>
                    </div>
                  </div>

                  <PremiumChart
                    spec={curBeat}
                    cite={curEvidence.paper.shortCite}
                    onChangeKind={(k) => updateBeat(beat, { chartKind: k })}
                  />

                  {hudTab === 'chart' && (
                    <div
                      className="chart-note"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateBeat(beat, { note: e.currentTarget.textContent || '' })}
                    >
                      {curBeat.note}
                    </div>
                  )}
                </>
              )}

              {/* Sección 2A: Vista Mixta Compacta (Foto real + Paper con cita APA sin desbordar pantalla) */}
              {hudTab === 'mix' && (
                <div className="ev-compact">
                  <div
                    className="ev-thumb"
                    onClick={() => setZoomPhoto(curEvidence.photo)}
                    title="Clic para ampliar fotografía real verificada"
                  >
                    <img src={curEvidence.photo.url} alt={curEvidence.photo.caption} loading="eager" />
                    <span>🔍 Foto real</span>
                  </div>
                  <div className="ev-body">
                    <div
                      className="ev-cap"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateEvidence(beat, 'photo', { caption: e.currentTarget.textContent || '' })}
                    >
                      {curEvidence.photo.caption}
                    </div>
                    <div className="ev-paper-row">
                      <a
                        className="paper-link"
                        href={curEvidence.paper.doiOrUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={curEvidence.paper.citation}
                      >
                        <BookOpen size={10} /> {curEvidence.paper.shortCite} ↗
                      </a>
                      <button className="ev-more-btn" onClick={() => setHudTab('evidence')}>
                        Cita APA completa
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Sección 2B: Vista Expandida de Fotografía Real y Paper Académico con Cita APA 7 */}
              {hudTab === 'evidence' && (
                <div className="ev-expanded">
                  <div
                    className="photo-frame-lg"
                    onClick={() => setZoomPhoto(curEvidence.photo)}
                    title="Haz clic para pantalla completa"
                  >
                    <img src={curEvidence.photo.url} alt={curEvidence.photo.caption} loading="eager" />
                    <div className="photo-tag">{curEvidence.photo.year} · {curEvidence.photo.location}</div>
                  </div>
                  <div
                    className="photo-cap"
                    contentEditable={canEdit}
                    suppressContentEditableWarning
                    onBlur={(e) => updateEvidence(beat, 'photo', { caption: e.currentTarget.textContent || '' })}
                  >
                    {curEvidence.photo.caption}
                  </div>
                  <div className="photo-cred">📍 {curEvidence.photo.credit}</div>

                  <div className="paper-box">
                    <div className="hud-kicker" style={{ color: '#6ea8d6' }}>
                      <BookOpen /> PAPER CIENTÍFICO CITADO ({curEvidence.paper.year})
                    </div>
                    <div
                      className="paper-cite"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateEvidence(beat, 'paper', { citation: e.currentTarget.textContent || '' })}
                    >
                      {curEvidence.paper.citation}
                    </div>
                    <div
                      className="paper-finding"
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateEvidence(beat, 'paper', { finding: e.currentTarget.textContent || '' })}
                    >
                      {curEvidence.paper.finding}
                    </div>
                    <a className="paper-link" href={curEvidence.paper.doiOrUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={11} /> Abrir DOI / Fuente: {curEvidence.paper.shortCite}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Cajón Lateral de Personalización (solo visible cuando se desactiva el Modo Presentación y se abre Datos & Fotos) */}
        {!presMode && showDrawer && (
          <div id="editor-drawer" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="kick" style={{ color: '#7fbf8e' }}>ESTUDIO DE EDICIÓN · PLANO {beat + 1}/40 ({curBeat.timeRange})</div>
                <h3 style={{ font: '700 15px var(--sans)', color: '#fff' }}>Modificar Textos, Cifras, Foto y Cita</h3>
              </div>
              <button className="btn" onClick={() => setShowDrawer(false)}>
                <X />Cerrar
              </button>
            </div>

            <div className="ed-group">
              <label>Título de la Secuencia (Barra inferior)</label>
              <input
                className="ed-input"
                value={curBeat.title}
                onChange={(e) => updateBeat(beat, { title: e.target.value })}
              />
            </div>

            <div className="ed-row2">
              <div className="ed-group">
                <label>Código del Plano 3D</label>
                <input
                  className="ed-input"
                  value={curBeat.planCode}
                  onChange={(e) => updateBeat(beat, { planCode: e.target.value })}
                />
              </div>
              <div className="ed-group">
                <label>Tipo de Diagrama</label>
                <select
                  className="ed-select"
                  value={curBeat.chartKind}
                  onChange={(e) => updateBeat(beat, { chartKind: e.target.value as ChartKind })}
                >
                  <option value="timeline">Curva / Hitos</option>
                  <option value="radar">Radar Multidimensional</option>
                  <option value="sankey">Flujo Sankey</option>
                  <option value="donut">Anillos Concéntricos</option>
                  <option value="bars">Barras Comparativas</option>
                  <option value="gauge">Diales</option>
                </select>
              </div>
            </div>

            <div className="ed-group">
              <label>Subtítulo del Plano 3D</label>
              <input
                className="ed-input"
                value={curBeat.planTitle}
                onChange={(e) => updateBeat(beat, { planTitle: e.target.value })}
              />
            </div>

            <div className="ed-row2">
              <div className="ed-group">
                <label>KPI 🇩🇰 Christiania</label>
                <input
                  className="ed-input"
                  value={curBeat.kpiChr}
                  onChange={(e) => updateBeat(beat, { kpiChr: e.target.value })}
                />
              </div>
              <div className="ed-group">
                <label>KPI 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn</label>
                <input
                  className="ed-input"
                  value={curBeat.kpiFnd}
                  onChange={(e) => updateBeat(beat, { kpiFnd: e.target.value })}
                />
              </div>
            </div>

            <div className="ed-group">
              <label>Valores Numéricos de la Gráfica (Etiqueta | DK | UK | Unidad)</label>
              {curBeat.series.map((sItem, sIdx) => (
                <div key={sIdx} className="ed-series-row">
                  <input
                    className="ed-input"
                    value={sItem.label}
                    onChange={(e) => {
                      const next = curBeat.series.map((x, k) => (k === sIdx ? { ...x, label: e.target.value } : x));
                      updateBeat(beat, { series: next });
                    }}
                  />
                  <input
                    type="number"
                    className="ed-input"
                    value={sItem.chr}
                    onChange={(e) => {
                      const next = curBeat.series.map((x, k) => (k === sIdx ? { ...x, chr: parseFloat(e.target.value) || 0 } : x));
                      updateBeat(beat, { series: next });
                    }}
                  />
                  <input
                    type="number"
                    className="ed-input"
                    value={sItem.fnd}
                    onChange={(e) => {
                      const next = curBeat.series.map((x, k) => (k === sIdx ? { ...x, fnd: parseFloat(e.target.value) || 0 } : x));
                      updateBeat(beat, { series: next });
                    }}
                  />
                  <input
                    className="ed-input"
                    placeholder="unid."
                    value={sItem.unit || ''}
                    onChange={(e) => {
                      const next = curBeat.series.map((x, k) => (k === sIdx ? { ...x, unit: e.target.value } : x));
                      updateBeat(beat, { series: next });
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="ed-group">
              <label>Nota Analítica del Gráfico</label>
              <textarea
                className="ed-textarea"
                value={curBeat.note}
                onChange={(e) => updateBeat(beat, { note: e.target.value })}
              />
            </div>

            <div className="ed-group">
              <label>URL de Fotografía Real (Wikimedia o URL propia)</label>
              <input
                className="ed-input"
                value={curEvidence.photo.url}
                onChange={(e) => updateEvidence(beat, 'photo', { url: e.target.value })}
              />
            </div>

            <div className="ed-group">
              <label>Pie de Foto</label>
              <textarea
                className="ed-textarea"
                value={curEvidence.photo.caption}
                onChange={(e) => updateEvidence(beat, 'photo', { caption: e.target.value })}
              />
            </div>

            <div className="ed-group">
              <label>Cita Académica (APA 7)</label>
              <textarea
                className="ed-textarea"
                value={curEvidence.paper.citation}
                onChange={(e) => updateEvidence(beat, 'paper', { citation: e.target.value })}
              />
            </div>

            <div className="ed-row2">
              <div className="ed-group">
                <label>Autor Corto (ej. Sherry, 2019)</label>
                <input
                  className="ed-input"
                  value={curEvidence.paper.shortCite}
                  onChange={(e) => updateEvidence(beat, 'paper', { shortCite: e.target.value })}
                />
              </div>
              <div className="ed-group">
                <label>Enlace DOI / URL del Paper</label>
                <input
                  className="ed-input"
                  value={curEvidence.paper.doiOrUrl}
                  onChange={(e) => updateEvidence(beat, 'paper', { doiOrUrl: e.target.value })}
                />
              </div>
            </div>

            <div className="ed-actions">
              <button className="btn" onClick={exportOverridesJson} title="Descargar tus cambios en un archivo JSON">
                <Download />Exportar JSON
              </button>
              <button className="btn" onClick={() => fileInputRef.current?.click()} title="Cargar un archivo JSON de cambios">
                <Upload />Importar JSON
              </button>
              <input ref={fileInputRef} type="file" accept=".json" style={{ display: 'none' }} onChange={importOverridesJson} />
              <button className="btn" onClick={resetAllOverrides} title="Restaurar todos los textos y datos originales">
                <RotateCcw />Restaurar Original
              </button>
            </div>
          </div>
        )}

        {/* Lightbox para ampliar la fotografía real */}
        {zoomPhoto && (
          <div id="photo-lightbox" onClick={() => setZoomPhoto(null)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div>
                <div className="kick">ARCHIVO FOTOGRÁFICO REAL VERIFICADO</div>
                <h3 style={{ font: '700 18px var(--sans)', color: '#fff' }}>{zoomPhoto.location}</h3>
              </div>
              <button className="btn" onClick={() => setZoomPhoto(null)}>
                <X />Cerrar
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', background: '#000', borderRadius: 12, padding: 12, border: '1px solid #252525' }}>
              <img
                src={zoomPhoto.url}
                alt={zoomPhoto.caption}
                style={{ maxHeight: '62vh', maxWidth: '100%', borderRadius: 8, objectFit: 'contain' }}
              />
            </div>
            <p style={{ marginTop: 12, font: '400 14px/1.45 var(--sans)', color: '#ddd' }}>{zoomPhoto.caption}</p>
            <p style={{ marginTop: 4, font: '400 11px var(--mono)', color: '#8e8e8e' }}>{zoomPhoto.credit}</p>
          </div>
        )}

        {/* Modal de Matriz 1.1 */}
        {showMatrix && (
          <div id="matrix-modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div>
                <div className="kick">SECCIÓN 1.1 · MATRIZ COMPARATIVA, PERIODIZACIÓN Y PAPERS CIENTÍFICOS</div>
                <h2 style={{ font: '700 19px var(--sans)', color: '#fff', marginTop: 2 }}>
                  Ficha Técnica, Delimitación Territorial y Corpus Bibliográfico
                </h2>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {!presMode && (
                  <button className={'btn' + (editMode ? ' pri act' : '')} onClick={() => setEditMode(!editMode)}>
                    <Edit3 />{editMode ? 'Terminar Edición' : 'Editar Celdas'}
                  </button>
                )}
                <button className="btn" onClick={() => setShowMatrix(false)}>
                  <X />Cerrar
                </button>
              </div>
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
                {overrides.matrix.map((r, rIdx) => (
                  <tr key={rIdx}>
                    <td
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateMatrixCell(rIdx, 'criterio', e.currentTarget.textContent || '')}
                    >
                      {r.criterio}
                    </td>
                    <td
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateMatrixCell(rIdx, 'chr', e.currentTarget.textContent || '')}
                    >
                      {r.chr}
                    </td>
                    <td
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      onBlur={(e) => updateMatrixCell(rIdx, 'fnd', e.currentTarget.textContent || '')}
                    >
                      {r.fnd}
                    </td>
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

            <h3 style={{ font: '700 16px var(--sans)', color: '#ebe5d9', marginTop: 22 }}>
              Referencias Científicas y Papers Citados (APA 7 / DOI)
            </h3>
            <div className="papers-list">
              {Object.values(ACADEMIC_PAPERS).map((p) => (
                <div key={p.id} className="paper-item">
                  <div className="paper-cite">{p.citation}</div>
                  <div className="paper-finding" style={{ marginTop: 5 }}>{p.finding}</div>
                  <a className="paper-link" style={{ marginTop: 6 }} href={p.doiOrUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={11} /> {p.doiOrUrl}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Barra Superior Limpia en Modo Presentación */}
        <div id="bar">
          <div id="brand">
            <div className="logo"><Network /></div>
            <div>
              <h1>Christiania ⇄ Findhorn</h1>
              <p>Sección 1.1 · 40 Planos × 30s (20 Min)</p>
            </div>
          </div>

          <div className="timer-box" title="Cronómetro de exposición de 20 minutos (cambia de plano cada 30 segundos)">
            <Timer size={14} color="#7fbf8e" />
            <span>{fmtMMSS(totalElapsedSec)} / 20:00</span>
            <div className="t-progress">
              <div className="t-fill" style={{ width: `${((secInBeat + 1) / 30) * 100}%` }} />
            </div>
            <span className="kick">{30 - secInBeat}s</span>
          </div>

          <button
            className={'btn pri' + (autoPlay ? ' act' : '')}
            onClick={() => setAutoPlay(!autoPlay)}
            title="Iniciar o pausar el avance automático cada 30 segundos"
          >
            {autoPlay ? <Pause /> : <Play />}
            <span className="bt">{autoPlay ? 'Pausar' : 'Exposición 20m'}</span>
          </button>

          <button
            className={'btn' + (hidePanels ? ' pri act' : '')}
            onClick={() => setHidePanels(!hidePanels)}
            title="Ocultar tarjetas laterales para ver los modelos 3D a pantalla completa"
          >
            <Compass />
            <span className="bt">{hidePanels ? 'Mostrar Paneles' : 'Solo 3D'}</span>
          </button>

          <button
            className={'btn' + (showMatrix ? ' pri act' : '')}
            onClick={() => setShowMatrix(!showMatrix)}
            title="Abrir Matriz 1.1 completa y listado de papers con DOI"
          >
            <Table2 /><span className="bt">Matriz &amp; Papers</span>
          </button>

          <button
            className="btn"
            onClick={() => setView3d(!view3d)}
            title="Alternar entre los Planos 3D extruidos y la Cartografía 2D"
          >
            <Layers />
            <span className="bt">{view3d ? '2D' : '3D'}</span>
            {view3d && k3p < 1 && <span className="kick" style={{ marginLeft: 4 }}>{Math.round(k3p * 100)}%</span>}
          </button>

          {/* Conmutador Modo Presentación vs Personalizar (En Modo Presentación oculta todo lo editable) */}
          <button
            className={'btn' + (!presMode ? ' pri act' : '')}
            onClick={() => {
              const nextPres = !presMode;
              setPresMode(nextPres);
              if (nextPres) {
                setEditMode(false);
                setShowDrawer(false);
              }
            }}
            title={
              presMode
                ? 'Modo Presentación activo (interfaz limpia). Clic para mostrar herramientas de edición.'
                : 'Volver a Modo Presentación limpio'
            }
          >
            <Sliders />
            <span className="bt">{presMode ? 'Modo Presentación' : 'Salir de Edición'}</span>
          </button>

          {/* Controles de edición SOLO visibles cuando se sale del Modo Presentación */}
          {!presMode && (
            <>
              <button
                className={'btn' + (editMode ? ' pri act' : '')}
                onClick={() => setEditMode(!editMode)}
                title="Habilitar edición haciendo clic sobre cualquier texto"
              >
                <Edit3 />
                <span className="bt">{editMode ? 'Texto Directo: ON' : 'Editar Texto'}</span>
              </button>
              <button
                className={'btn' + (showDrawer ? ' pri act' : '')}
                onClick={() => setShowDrawer(!showDrawer)}
                title="Abrir cajón para modificar datos de gráficas, fotos y citas"
              >
                <Sliders />
                <span className="bt">Panel Datos</span>
              </button>
            </>
          )}
        </div>

        {/* Barra inferior con leyenda integrada + 40 pasos de 30s */}
        <div id="nav">
          <button className="btn" style={{ visibility: beat === 0 ? 'hidden' : 'visible' }} onClick={() => go(beat - 1)}>
            <ArrowLeft />Anterior
          </button>
          <div className="steps">
            <div className="inline-legend hidemob">
              <span><i style={{ background: '#e6956a' }} />🇩🇰 Christiania (34 ha)</span>
              <span><i style={{ background: '#7fbf8e' }} />🏴󠁧󠁢󠁳󠁣󠁴󠁿 Findhorn (14–30 ha)</span>
              <span><i style={{ background: '#fff' }} />Tensión</span>
              <span><i className="dsh" />Red pública externa</span>
            </div>
            <div className="ticks">
              {BEATS.map((bItem, i) => (
                <span
                  key={bItem.index}
                  onClick={() => go(i)}
                  title={`Plano ${i + 1}/40 (${bItem.timeRange} · ${bItem.title})`}
                  style={{
                    height: i === beat ? 15 : i % 5 === 0 ? 10 : 5,
                    background: i === beat ? '#7fbf8e' : i < beat ? '#f0f0f0' : '#383838',
                  }}
                />
              ))}
            </div>
            <span
              className="kick hidemob"
              contentEditable={canEdit}
              suppressContentEditableWarning
              onBlur={(e) => updateBeat(beat, { title: e.currentTarget.textContent || '' })}
            >
              PLANO {String(beat + 1).padStart(2, '0')}/40 · [{curBeat.timeRange}] · {curBeat.title}
            </span>
          </div>
          <button className="btn" style={{ visibility: beat === N - 1 ? 'hidden' : 'visible' }} onClick={() => go(beat + 1)}>
            Siguiente (30s)<ArrowRight />
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
        {m ? 'ENFOQUE 5 · METABOLISMO Y REDES' : 'ENFOQUE 5 · METABOLISMO Y DEPENDENCIAS DE REDES PÚBLICAS'}
      </text>
      <circle r="4.5" fill={COLORS.bio} className="orbdot">
        <animateMotion dur="38s" repeatCount="indefinite"><mpath href="#rbio" /></animateMotion>
      </circle>

      <circle cx={o.cx} cy={o.cy} r={o.Rl} className="nring lim" />
      <path d={ring(o.Rl)} id="rlim" fill="none" />
      <text x={o.cx} y={o.cy + o.Rl + 20} textAnchor="middle" className="ringlb" style={{ fill: COLORS.grey }}>
        {m ? 'ENFOQUE 3 · ECONOMÍA ADAPTATIVA' : 'ENFOQUE 3 · HOMOLOGACIÓN FINANCIERA (FÆLLESKASSE ⇄ PET)'}
      </text>
      <circle r="4" fill={COLORS.grey} className="orbdot">
        <animateMotion dur="26s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#rlim" /></animateMotion>
      </circle>

      <circle cx={o.cx} cy={o.cy} r={o.Re} fill="url(#ecoGlow)" className="neco" />
      <circle cx={o.cx} cy={o.cy} r={o.Re} className="nring eco" />
      <circle cx={o.cx} cy={o.cy} r={o.Rt * 1.55} className="nring tri" />
      <circle cx={o.cx} cy={o.cy} r={o.Rt * 0.62} fill="url(#hidGlow)" className="nhid" />
    </g>
  );
}
