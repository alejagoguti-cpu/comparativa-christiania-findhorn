/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { C, useData, useStage, type Site } from './kit';

export type AxoGroup = { name: string; c: string; match: (f: any, xy: [number, number]) => boolean };

/** Axonometría ortográfica de edificios reales (OSM) con grupos resaltados. */
export function Axo({ site, center, radius, groups, extra, legend = true, spin = true }: {
  site: Site; center: [number, number]; radius: number; groups: AxoGroup[];
  extra?: (scene: THREE.Scene, P: (lon: number, lat: number) => [number, number]) => void; legend?: boolean; spin?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const data = useData(site);
  const { mobile } = useStage();
  useEffect(() => {
    const el = ref.current; if (!el || !data) return;
    const W = el.clientWidth, H = el.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(W, H);
    el.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    const k = Math.cos((center[1] * Math.PI) / 180) * 111320, kl = 110540;
    const P = (lon: number, lat: number): [number, number] => [(lon - center[0]) * k, -(lat - center[1]) * kl];
    const asp = W / H; const R = radius * (mobile ? 0.95 : 0.66);
    const cam = new THREE.OrthographicCamera(-R * asp, R * asp, R, -R, -5000, 5000);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb8b0a0, 1.6));
    const dl = new THREE.DirectionalLight(0xffffff, 1.4); dl.position.set(-300, 600, 200); scene.add(dl);
    // terreno
    const ground = new THREE.Mesh(new THREE.CircleGeometry(radius * 1.25, 64), new THREE.MeshBasicMaterial({ color: 0xe9e3d6 }));
    ground.rotation.x = -Math.PI / 2; scene.add(ground);
    const root = new THREE.Group(); scene.add(root);
    const water = new THREE.MeshBasicMaterial({ color: 0xc5d6dc });
    for (const f of data.w) {
      const g: number[] = f[2]; if (Math.abs((g[0] - center[0]) * k) > radius * 1.5) continue;
      const sh = new THREE.Shape(); for (let j = 0; j < g.length; j += 2) { const [x, y] = P(g[j], g[j + 1]); j ? sh.lineTo(x, y) : sh.moveTo(x, y); }
      const m = new THREE.Mesh(new THREE.ShapeGeometry(sh), water); m.rotation.x = Math.PI / 2; m.position.y = 0.2; m.scale.y = 1; root.add(m);
    }
    const mats = groups.map((g) => new THREE.MeshLambertMaterial({ color: new THREE.Color(g.c) }));
    const base = new THREE.MeshLambertMaterial({ color: 0xf7f4ec });
    const edge = new THREE.LineBasicMaterial({ color: 0x8c8676, transparent: true, opacity: 0.55 });
    const meshes: THREE.Mesh[] = [];
    for (const f of data.b) {
      const g: number[] = f[3];
      const [cx, cy] = P(g[0], g[1]);
      if (Math.hypot(cx, cy) > radius) continue;
      const sh = new THREE.Shape();
      for (let j = 0; j < g.length; j += 2) { const [x, y] = P(g[j], g[j + 1]); j ? sh.lineTo(x, y) : sh.moveTo(x, y); }
      const hgt = f[2] || 7;
      const geo = new THREE.ExtrudeGeometry(sh, { depth: hgt, bevelEnabled: false });
      const gi = groups.findIndex((gr) => gr.match(f, [cx, cy]));
      const m = new THREE.Mesh(geo, gi >= 0 ? mats[gi] : base);
      m.rotation.x = Math.PI / 2; m.scale.z = -1; // extruir hacia arriba
      root.add(m); meshes.push(m);
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), edge); e.rotation.x = Math.PI / 2; e.scale.z = -1; root.add(e);
      (m as any).userData.g = gi; (m as any).userData.h = hgt;
    }
    extra?.(root as any, P);
    let t0 = performance.now(); let raf = 0;
    const draw = () => {
      const t = (performance.now() - t0) / 1000;
      const a = (spin ? t * 0.06 : 0) + Math.PI * 0.25;
      cam.position.set(Math.cos(a) * 1000, 820, Math.sin(a) * 1000); cam.lookAt(0, 0, 0);
      // crecimiento inicial de alturas
      const gr = Math.min(1, t / 1.6); const e = 1 - Math.pow(1 - gr, 3);
      root.scale.y = 0.02 + 0.98 * e;
      renderer.render(scene, cam); raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); renderer.dispose(); renderer.domElement.remove(); };
  }, [data, mobile]);
  return <div className="axo" ref={ref}>
    {legend && <div className="lgd">{groups.map((g) => <span key={g.name} style={{ ['--c' as any]: g.c }}>{g.name}</span>)}<span style={{ ['--c' as any]: '#f7f4ec', outline: 'none' }}>Otros edificios</span></div>}
  </div>;
}

export const tone = C;
