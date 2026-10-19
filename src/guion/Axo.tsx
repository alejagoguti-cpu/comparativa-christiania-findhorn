/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useData, useStage, type Site } from './kit';

export type AxoGroup = { name: string; c: string; match: (f: any, xy: [number, number]) => boolean };

const ROADW: Record<string, number> = { trunk: 14, primary: 12, secondary: 10, tertiary: 8, residential: 6, unclassified: 6, service: 4, living_street: 5, pedestrian: 4, cycleway: 2.6, footway: 2, path: 1.8, steps: 1.8, track: 3 };

/** Axonometría ortográfica de edificios reales (OSM) sobre su trama de calles y agua. */
export type AxoMark = { at: [number, number]; text: string; c: string; h?: number };
export function Axo({ site, center, radius, groups, streets = 10, marks = [], boundary, turbines = [], zoom0 = 1 }: {
  site: Site; center: [number, number]; radius: number; groups: AxoGroup[]; streets?: number; marks?: AxoMark[]; boundary?: number; turbines?: [number, number][]; zoom0?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const data = useData(site);
  const { mobile } = useStage();
  const [only, setOnly] = useState<number | null>(null);
  const [tip, setTip] = useState<null | { x: number; y: number; t: string; s: string }>(null);
  useEffect(() => {
    const el = ref.current; if (!el || !data) return;
    const W = el.clientWidth, H = el.clientHeight - (mobile ? 64 : 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    const k = Math.cos((center[1] * Math.PI) / 180) * 111320, kl = 110540;
    // forma en (este, norte); rotateX(-90°) => mundo (x = este, y = altura, z = -norte)
    const P = (lon: number, lat: number): [number, number] => [(lon - center[0]) * k, (lat - center[1]) * kl];
    const asp = W / H; const R = radius * (mobile ? 0.9 : 0.62);
    const cam = new THREE.OrthographicCamera(-R * asp, R * asp, R, -R, -6000, 6000);
    scene.add(new THREE.HemisphereLight(0xdedad0, 0x1a1a17, 1.15));
    const sun = new THREE.DirectionalLight(0xfff3dd, 2.2); sun.position.set(-420, 700, 300); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera as THREE.OrthographicCamera;
    sc.left = -radius * 1.3; sc.right = radius * 1.3; sc.top = radius * 1.3; sc.bottom = -radius * 1.3; sc.near = 10; sc.far = 3000; sun.shadow.bias = -0.0008;
    scene.add(sun); scene.add(sun.target);
    const root = new THREE.Group(); scene.add(root);
    const near = (g: number[]) => { const [x, y] = P(g[0], g[1]); return Math.hypot(x, y) < radius * 1.15; };
    const ground = new THREE.Mesh(new THREE.CircleGeometry(radius * 1.2, 96).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0x2c2b26 }));
    ground.receiveShadow = true; root.add(ground);
    const shapeOf = (g: number[]) => { const sh = new THREE.Shape(); for (let j = 0; j < g.length; j += 2) { const [x, y] = P(g[j], g[j + 1]); j ? sh.lineTo(x, y) : sh.moveTo(x, y); } return sh; };
    const wmat = new THREE.MeshLambertMaterial({ color: 0x1f3a4f });
    for (const f of data.w) { if (!near(f[2]) && f[2].length < 400) continue; const m = new THREE.Mesh(new THREE.ShapeGeometry(shapeOf(f[2])).rotateX(-Math.PI / 2), wmat); m.position.y = 0.15; m.receiveShadow = true; root.add(m); }
    const roadGeo: number[] = []; const rmat = new THREE.MeshLambertMaterial({ color: 0x8a857a });
    const roadNames: Record<string, { L: number; p: [number, number][] }> = {};
    for (const f of data.r) {
      const g: number[] = f[3]; if (!near(g) || /^ww_/.test(f[2])) continue;
      const w = (ROADW[f[2]] ?? 4) / 2; const p: [number, number][] = []; for (let j = 0; j < g.length; j += 2) p.push(P(g[j], g[j + 1]));
      let L = 0;
      for (let j = 1; j < p.length; j++) {
        const [x1, y1] = p[j - 1], [x2, y2] = p[j]; const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy) || 1; L += l;
        const nx = (-dy / l) * w, ny = (dx / l) * w;
        const q = [[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]];
        for (const t of [0, 2, 1, 0, 3, 2]) roadGeo.push(q[t][0], 0.4, -q[t][1]);
      }
      if (f[1] && (!roadNames[f[1]] || roadNames[f[1]].L < L)) roadNames[f[1]] = { L, p };
    }
    const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.Float32BufferAttribute(roadGeo, 3)); rg.computeVertexNormals();
    // límite del área (franja roja en el suelo)
    if (boundary) {
      const f = data.l.find((x: any) => x[0] === boundary);
      if (f) { const g: number[] = f[3]; const bg: number[] = []; const p: [number, number][] = []; for (let j = 0; j < g.length; j += 2) p.push(P(g[j], g[j + 1]));
        for (let j = 1; j < p.length; j++) { const [x1, y1] = p[j - 1], [x2, y2] = p[j]; const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy) || 1; const nx = (-dy / l) * 3, ny = (dx / l) * 3; const q = [[x1 + nx, y1 + ny], [x2 + nx, y2 + ny], [x2 - nx, y2 - ny], [x1 - nx, y1 - ny]]; for (const t of [0, 2, 1, 0, 3, 2]) bg.push(q[t][0], 0.9, -q[t][1]); }
        const bgeo = new THREE.BufferGeometry(); bgeo.setAttribute('position', new THREE.Float32BufferAttribute(bg, 3)); bgeo.computeVertexNormals();
        root.add(new THREE.Mesh(bgeo, new THREE.MeshBasicMaterial({ color: 0xe0603f, side: THREE.DoubleSide }))); }
    }
    // aerogeneradores
    const blades: THREE.Group[] = [];
    for (const t of turbines) {
      const [x, y] = P(t[0], t[1]); const tw = new THREE.Group(); tw.position.set(x, 0, -y);
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.6, 34, 12), new THREE.MeshStandardMaterial({ color: 0xf1eee6 })); tower.position.y = 17; tower.castShadow = true; tw.add(tower);
      const nac = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 5), new THREE.MeshStandardMaterial({ color: 0xf1eee6 })); nac.position.set(0, 34.5, 0); tw.add(nac);
      const rot = new THREE.Group(); rot.position.set(0, 34.5, 2.8);
      for (let b = 0; b < 3; b++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.9, 15, 0.3), new THREE.MeshStandardMaterial({ color: 0xf1eee6 })); bl.position.y = 7.5; const arm = new THREE.Group(); arm.rotation.z = (b * Math.PI * 2) / 3; arm.add(bl); rot.add(arm); }
      tw.add(rot); blades.push(rot); root.add(tw);
    }
    const roadMesh = new THREE.Mesh(rg, rmat); (rmat as any).side = THREE.DoubleSide; roadMesh.receiveShadow = true; root.add(roadMesh);
    const base = new THREE.MeshStandardMaterial({ color: 0xd9d4c8, roughness: 0.9 });
    const mats = groups.map((g) => new THREE.MeshStandardMaterial({ color: new THREE.Color(g.c), roughness: 0.75 }));
    const edge = new THREE.LineBasicMaterial({ color: 0x0a0a09, transparent: true, opacity: 0.35 });
    const meshes: THREE.Mesh[] = []; const anchors: { v: THREE.Vector3; t: string; c: string; g: number }[] = [];
    for (const f of data.b) {
      const g: number[] = f[3]; const [cx, cy] = P(g[0], g[1]);
      if (Math.hypot(cx, cy) > radius) continue;
      const hgt = f[2] || 7;
      const geo = new THREE.ExtrudeGeometry(shapeOf(g), { depth: hgt, bevelEnabled: false }).rotateX(-Math.PI / 2);
      const gi = groups.findIndex((gr) => gr.match(f, [cx, -cy]));
      const m = new THREE.Mesh(geo, gi >= 0 ? mats[gi] : base); m.castShadow = true; m.receiveShadow = true;
      m.userData = { name: f[1], g: gi, h: hgt };
      root.add(m); meshes.push(m);
      const ed = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), edge); root.add(ed); m.userData.edge = ed;
      if (f[1] && gi >= 0 && anchors.filter((a) => a.g === gi).length < 5) { geo.computeBoundingBox(); const bb = geo.boundingBox!; anchors.push({ v: new THREE.Vector3((bb.min.x + bb.max.x) / 2, hgt + 2, (bb.min.z + bb.max.z) / 2), t: f[1], c: groups[gi].c, g: gi }); }
    }
    const st = Object.entries(roadNames).sort((a, b) => b[1].L - a[1].L).slice(0, streets).map(([n, v]) => { const m = v.p[Math.floor(v.p.length / 2)]; return { v: new THREE.Vector3(m[0], 1, -m[1]), t: n, c: '', g: -2 }; });
    const mk = marks.map((m) => { const [x, y] = P(m.at[0], m.at[1]); const h = m.h ?? 55;
      const lg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, 0.5, -y), new THREE.Vector3(x, h, -y)]);
      root.add(new THREE.Line(lg, new THREE.LineBasicMaterial({ color: new THREE.Color(m.c) })));
      const dot = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 0.6, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(m.c) })); dot.position.set(x, 1.2, -y); root.add(dot);
      return { v: new THREE.Vector3(x, h, -y), t: m.text, c: m.c, g: -3 }; });
    const all = [...(marks.length ? [] : anchors), ...st.slice(0, marks.length ? 6 : streets), ...mk];
    const lbls = all.map((a) => { const d = document.createElement('div'); d.className = 'lbl' + (a.g === -2 ? ' st' : a.g === -3 ? ' mk' : ''); d.textContent = a.t; if (a.c) d.style.setProperty('--c', a.c); el.appendChild(d); return d; });
    let az = Math.PI * 0.25, zoom = mobile ? Math.max(1, zoom0 * 0.75) : zoom0, dragging: null | { x: number; az: number } = null; let lastMove = 0;
    const ray = new THREE.Raycaster(); const mv = new THREE.Vector2();
    const down = (e: PointerEvent) => { if ((e.target as HTMLElement).closest('.lgd')) return; dragging = { x: e.clientX, az }; };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (dragging) { az = dragging.az - (e.clientX - dragging.x) * 0.008; lastMove = performance.now(); setTip(null); return; }
      mv.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(mv, cam);
      const hit = ray.intersectObjects(meshes, false)[0];
      const n = hit?.object.userData;
      setTip(hit ? { x: e.clientX - r.left, y: e.clientY - r.top, t: n!.name || 'Edificio sin nombre', s: (n!.g >= 0 ? groups[n!.g].name + ' · ' : '') + Math.round(n!.h) + ' m de altura aprox.' } : null);
    };
    const up = () => { dragging = null; };
    const wheel = (e: WheelEvent) => { e.preventDefault(); zoom = Math.min(4, Math.max(0.7, zoom * (e.deltaY < 0 ? 1.12 : 0.89))); };
    el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move); window.addEventListener('pointerup', up); el.addEventListener('wheel', wheel, { passive: false });
    const t0 = performance.now(); let raf = 0;
    const draw = () => {
      const now = performance.now(); const t = (now - t0) / 1000;
      if (!dragging && now - lastMove > 2500) az += 0.0009;
      cam.position.set(Math.cos(az) * 1000, 760, Math.sin(az) * 1000); cam.lookAt(0, 0, 0); cam.zoom = zoom; cam.updateProjectionMatrix();
      const e = 1 - Math.pow(1 - Math.min(1, t / 1.4), 3);
      for (const m of meshes) { m.scale.y = 0.02 + 0.98 * e; (m.userData.edge as THREE.Object3D).scale.y = m.scale.y; }
      blades.forEach((b2, bi) => { b2.rotation.z = t * 2.2 + bi; });
      renderer.render(scene, cam);
      const r = el.getBoundingClientRect();
      all.forEach((a, i) => { const p = a.v.clone(); p.y *= e; p.project(cam); const vis = Math.abs(p.x) < 0.96 && Math.abs(p.y) < 0.92; lbls[i].style.opacity = vis && t > 1.2 ? '1' : '0'; lbls[i].style.left = ((p.x + 1) / 2) * r.width + 'px'; lbls[i].style.top = ((1 - p.y) / 2) * r.height + 'px'; });
      raf = requestAnimationFrame(draw);
    };
    draw();
    (el as any).__setOnly = (gi: number | null) => { meshes.forEach((m) => { const g = m.userData.g; m.material = g >= 0 && (gi === null || gi === g) ? mats[g] : base; }); };
    return () => { cancelAnimationFrame(raf); renderer.dispose(); renderer.domElement.remove(); lbls.forEach((d) => d.remove()); el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); el.removeEventListener('wheel', wheel); };
  }, [data, mobile]);
  useEffect(() => { (ref.current as any)?.__setOnly?.(only); }, [only]);
  return <div className="axo" ref={ref} onPointerLeave={() => setTip(null)}>
    {tip && <div className="tip" style={{ left: tip.x, top: tip.y }}>{tip.t}<small>{tip.s}</small></div>}
    <div className="lgd">
      {groups.map((g, gi) => <button key={g.name} className={only !== null && only !== gi ? 'off' : ''} style={{ ['--c' as any]: g.c }} onClick={() => setOnly(only === gi ? null : gi)}>{g.name}</button>)}
    </div>
    {!mobile && <span className="hint">Arrastra para girar · rueda para acercar · cursor sobre los edificios</span>}
  </div>;
}
