// Dual 3D Scene Engine (Three.js): renderiza en tiempo real los dos recintos autogestionados
//  - Freetown Christiania (Copenhague, Dinamarca · 34 ha · murallas del s. XVII, canales Stadsgraven, cuartel Båtmandsstræde)
//  - Ecoaldea Findhorn (Moray, Escocia · 14–30 ha · The Park, Eco-houses, Living Machine, aerogeneradores animados del Wind Park)
// Soporta vista dividida comparativa (ambos planos 3D en simultáneo con scissor/viewport) o enfoque individual en cámara.
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import gsap from 'gsap';
import { BOUNDS, COLORS, type LngLat, type SiteKey } from './content';

export interface Pad { top: number; right: number; bottom: number; left: number }
export type ViewFocus = 'dual' | 'chr' | 'fnd';

const CENTERS: Record<SiteKey, LngLat> = {
  chr: [12.6015, 55.6745],
  fnd: [-3.5910, 57.6548],
};

export function llToScene(site: SiteKey, lon: number, lat: number): { x: number; z: number } {
  const [cLon, cLat] = CENTERS[site];
  const cosLat = Math.cos((cLat * Math.PI) / 180);
  const x = ((lon - cLon) * 111320 * cosLat) / 10;
  const z = -((lat - cLat) * 111132) / 10;
  return { x, z };
}

interface SiteRig {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  base: THREE.Group;
  over: THREE.Group;
  cam: { tx: number; tz: number; dist: number; az: number; el: number };
  mats: LineMaterial[];
  fills: Record<string, THREE.MeshBasicMaterial>;
  lines: Record<string, LineMaterial>;
  rotors: THREE.Object3D[];
  flowPulses: THREE.Mesh[];
  viewport: { x: number; y: number; w: number; h: number };
}

export class DualTerritory3D {
  renderer: THREE.WebGLRenderer;
  rigs: Record<SiteKey, SiteRig>;
  W = 1;
  H = 1;
  pad: Pad = { top: 0, right: 0, bottom: 0, left: 0 };
  focus: ViewFocus = 'dual';
  active = false;
  orbit = false;
  running = true;
  status = 'idle';
  progress = 0;
  t0 = performance.now();
  lastDraw = 0;

  constructor(private host: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setScissorTest(true);
    host.appendChild(this.renderer.domElement);

    this.rigs = {
      chr: this.createRig('chr'),
      fnd: this.createRig('fnd'),
    };

    this.resize();

    const loop = () => {
      if (!this.running) return;
      const now = performance.now();
      const tweening = gsap.isTweening(this.rigs.chr.cam) || gsap.isTweening(this.rigs.fnd.cam);
      if (this.active && (tweening || now - this.lastDraw > 32)) {
        this.lastDraw = now;
        this.renderFrame(now);
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  private createRig(site: SiteKey): SiteRig {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 1, 5000);
    const base = new THREE.Group();
    const over = new THREE.Group();
    scene.add(base, over);
    scene.add(new THREE.AmbientLight(0xffffff, 1.25));
    const sun = new THREE.DirectionalLight(site === 'chr' ? 0xdde8ff : 0xffe8d6, 1.2);
    sun.position.set(-180, 340, 160);
    scene.add(sun);

    // Subtle ground grid ring in 3D space
    const gridHelper = new THREE.PolarGridHelper(160, 16, 8, 64, 0x1e242b, 0x14181d);
    gridHelper.position.y = -0.05;
    base.add(gridHelper);

    return {
      scene,
      camera,
      base,
      over,
      cam: { tx: 0, tz: 0, dist: site === 'chr' ? 135 : 115, az: site === 'chr' ? -0.25 : 0.22, el: 0.86 },
      mats: [],
      fills: {},
      lines: {},
      rotors: [],
      flowPulses: [],
      viewport: { x: 0, y: 0, w: 1, h: 1 },
    };
  }

  dispose() {
    this.running = false;
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }

  resize() {
    this.W = this.host.clientWidth || window.innerWidth;
    this.H = this.host.clientHeight || window.innerHeight;
    this.renderer.setSize(this.W, this.H);
    this.computeViewports();
  }

  private computeViewports() {
    const W = this.W;
    const H = this.H;
    const m = W < 760;

    if (this.focus === 'chr') {
      this.rigs.chr.viewport = { x: 0, y: 0, w: W, h: H };
      this.rigs.fnd.viewport = { x: 0, y: 0, w: 0, h: 0 };
    } else if (this.focus === 'fnd') {
      this.rigs.chr.viewport = { x: 0, y: 0, w: 0, h: 0 };
      this.rigs.fnd.viewport = { x: 0, y: 0, w: W, h: H };
    } else {
      // En modo dual (comparativo simultáneo):
      // En escritorio, la columna de tarjetas está a la izquierda y los dos planos 3D se dividen o superponen en la zona derecha
      if (m) {
        const halfH = Math.floor(H * 0.5);
        this.rigs.chr.viewport = { x: 0, y: halfH, w: W, h: H - halfH };
        this.rigs.fnd.viewport = { x: 0, y: 0, w: W, h: halfH };
      } else {
        const leftOffset = Math.min(Math.max(this.pad.left, 0), W * 0.30);
        const rightOffset = Math.min(Math.max(this.pad.right, 0), W * 0.34);
        const availW = Math.max(280, W - leftOffset - rightOffset);
        const halfW = Math.floor(availW / 2);
        this.rigs.chr.viewport = { x: Math.floor(leftOffset), y: 0, w: halfW, h: H };
        this.rigs.fnd.viewport = { x: Math.floor(leftOffset) + halfW, y: 0, w: availW - halfW, h: H };
      }
    }

    (['chr', 'fnd'] as SiteKey[]).forEach((k) => {
      const r = this.rigs[k];
      const vp = r.viewport;
      if (vp.w > 0 && vp.h > 0) {
        r.camera.aspect = vp.w / vp.h;
        if (this.focus !== 'dual') {
          const p = this.pad;
          r.camera.setViewOffset(W, H, -(p.left - p.right) / 2, -(p.top - p.bottom) / 2, W, H);
        } else {
          r.camera.clearViewOffset();
        }
        r.camera.updateProjectionMatrix();
        r.mats.forEach((mat) => mat.resolution.set(vp.w, vp.h));
      }
    });
  }

  private renderFrame(now: number) {
    const dt = (now - this.t0) / 1000;
    (['chr', 'fnd'] as SiteKey[]).forEach((k, idx) => {
      const r = this.rigs[k];
      const vp = r.viewport;
      if (vp.w <= 0 || vp.h <= 0) return;

      // Rotación continua de los aerogeneradores de Findhorn y pulsos metabólicos
      r.rotors.forEach((rot, i) => {
        rot.rotation.z = dt * (2.6 + i * 0.3);
      });
      r.flowPulses.forEach((mesh, i) => {
        const s = 1 + 0.28 * Math.sin(dt * 3.2 + i * 1.4);
        mesh.scale.set(s, 1, s);
      });

      const c = r.cam;
      const drift = Math.sin(dt * 0.35 + idx * 1.7) * 0.08;
      const az = c.az + drift + (this.orbit ? dt * 0.09 : 0);
      const dist = c.dist;
      r.camera.position.set(
        c.tx + dist * Math.sin(az) * Math.cos(c.el),
        dist * Math.sin(c.el),
        c.tz + dist * Math.cos(az) * Math.cos(c.el),
      );
      r.camera.lookAt(c.tx, 0, c.tz);
      r.camera.updateMatrixWorld();

      // WebGL coordinates have y=0 at bottom
      const webglY = this.H - vp.y - vp.h;
      this.renderer.setViewport(vp.x, webglY, vp.w, vp.h);
      this.renderer.setScissor(vp.x, webglY, vp.w, vp.h);
      this.renderer.render(r.scene, r.camera);
    });
  }

  project(site: SiteKey, ll: LngLat): { x: number; y: number } | null {
    const r = this.rigs[site];
    const vp = r.viewport;
    if (vp.w <= 0 || vp.h <= 0) return null;
    const p = llToScene(site, ll[0], ll[1]);
    const v = new THREE.Vector3(p.x, 1.2, p.z);
    v.project(r.camera);
    if (v.z > 1) return null;
    const sx = vp.x + (v.x * 0.5 + 0.5) * vp.w;
    const sy = vp.y + (-v.y * 0.5 + 0.5) * vp.h;
    if (sx < vp.x - 10 || sx > vp.x + vp.w + 10) return null;
    return { x: sx, y: sy };
  }

  fit(
    focus: ViewFocus,
    chrBox: [number, number, number, number],
    fndBox: [number, number, number, number],
    pad: Pad,
    duration = 1.6,
    azChr = -0.25,
    azFnd = 0.22,
    el = 0.84,
  ) {
    this.pad = pad;
    this.focus = focus;
    this.computeViewports();

    this.fitRig('chr', chrBox, duration, azChr, el);
    this.fitRig('fnd', fndBox, duration, azFnd, el);
  }

  private fitRig(site: SiteKey, box: [number, number, number, number], duration: number, az: number, el: number) {
    const r = this.rigs[site];
    const vp = r.viewport;
    if (vp.w <= 0 || vp.h <= 0) return;

    const a = llToScene(site, box[0], box[1]);
    const b = llToScene(site, box[2], box[3]);
    const cx = (a.x + b.x) / 2;
    const cz = (a.z + b.z) / 2;
    const spanX = Math.abs(b.x - a.x);
    const spanZ = Math.abs(b.z - a.z);

    const t = Math.tan((r.camera.fov * Math.PI) / 360);
    const aspect = Math.max(0.45, vp.w / vp.h);
    const dist = Math.max((spanX * 0.58) / (t * aspect), (spanZ * 0.58) / t, 55);

    gsap.to(r.cam, {
      tx: cx,
      tz: cz,
      dist,
      az,
      el,
      duration,
      ease: 'power3.inOut',
      overwrite: true,
    });
  }

  load(onProgress?: (p: number) => void) {
    if (this.status !== 'idle') return;
    this.status = 'loading';
    const done = (p: number) => {
      this.progress = p;
      onProgress?.(p);
    };

    (async () => {
      try {
        const chrData = await fetch('./data/christiania.json').then((r) => r.json());
        done(0.35);
        this.buildSiteMesh('chr', chrData);
        done(0.6);

        const fndData = await fetch('./data/findhorn.json').then((r) => r.json());
        done(0.85);
        this.buildSiteMesh('fnd', fndData);
        done(1);
        this.status = 'ready';
        this.state(this.lastState[0], this.lastState[1]);
      } catch (e) {
        console.error('Error loading 3D cartography:', e);
        done(1);
      }
    })();
  }

  private fatLine(rig: SiteRig, segs: number[], color: string, width: number, key: string, yOffset = 0.5) {
    if (!segs.length) return;
    const geo = new LineSegmentsGeometry();
    geo.setPositions(segs);
    const mat = new LineMaterial({
      color: new THREE.Color(color).getHex(),
      linewidth: width,
      transparent: true,
      opacity: 0,
      depthTest: false,
    });
    mat.resolution.set(rig.viewport.w || this.W, rig.viewport.h || this.H);
    rig.mats.push(mat);
    const l = new LineSegments2(geo, mat);
    l.position.y = yOffset;
    l.renderOrder = 10;
    rig.over.add(l);
    rig.lines[key] = mat;
  }

  private buildSiteMesh(site: SiteKey, data: any) {
    const rig = this.rigs[site];
    const g = rig.base;

    // 1. Áreas verdes / bosques / dunas / jardines
    if (data.greenPolys?.length) {
      const greenMat = new THREE.MeshBasicMaterial({
        color: site === 'chr' ? 0x112217 : 0x14281b,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      g.add(this.buildFlatPolys(data.greenPolys, 0.02, greenMat));
    }

    // 2. Cuerpos de agua (Stadsgraven en Christiania / Moray Firth y bahía en Findhorn)
    if (data.waterPolys?.length) {
      const waterBaseMat = new THREE.MeshBasicMaterial({
        color: 0x193954,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      g.add(this.buildFlatPolys(data.waterPolys, 0.05, waterBaseMat));

      // Capa resaltada para el estado hidrocéntrico / metabólico
      const waterHighlightMat = new THREE.MeshBasicMaterial({
        color: COLORS.water,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthTest: false,
      });
      const hm = this.buildFlatPolys(data.waterPolys, 0.14, waterHighlightMat);
      hm.renderOrder = 8;
      rig.over.add(hm);
      rig.fills.water = waterHighlightMat;

      // Contorno luminoso de los canales y cuerpos de agua
      const wSegs: number[] = [];
      data.waterPolys.forEach((poly: number[][]) => {
        for (let i = 0; i < poly.length - 1; i++) {
          wSegs.push(poly[i][0], 0.2, -poly[i][1], poly[i + 1][0], 0.2, -poly[i + 1][1]);
        }
      });
      this.fatLine(rig, wSegs, COLORS.water, 2.0, 'waterLine', 0.15);
    }

    // 3. Red vial y senderos internos
    if (data.roads?.length) {
      const mainSegs: number[] = [];
      const localSegs: number[] = [];
      data.roads.forEach((r: { pts: number[][]; cls: string }) => {
        const target = r.cls === 'main' ? mainSegs : localSegs;
        for (let i = 0; i < r.pts.length - 1; i++) {
          target.push(r.pts[i][0], 0.08, -r.pts[i][1], r.pts[i + 1][0], 0.08, -r.pts[i + 1][1]);
        }
      });
      if (mainSegs.length) {
        const lg = new THREE.BufferGeometry();
        lg.setAttribute('position', new THREE.Float32BufferAttribute(mainSegs, 3));
        g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x5c6470, transparent: true, opacity: 0.55 })));
        this.fatLine(rig, mainSegs, '#9a9a9a', 1.5, 'viasMain', 0.2);
      }
      if (localSegs.length) {
        const lg = new THREE.BufferGeometry();
        lg.setAttribute('position', new THREE.Float32BufferAttribute(localSegs, 3));
        g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x3b424c, transparent: true, opacity: 0.42 })));
        this.fatLine(rig, localSegs, COLORS.green, 1.2, 'viasLocal', 0.18);
      }
    }

    // 4. Árboles como nube de puntos 3D
    if (data.trees?.length) {
      const pos = new Float32Array(data.trees.length * 3);
      data.trees.forEach((t: number[], i: number) => {
        pos[i * 3] = t[0];
        pos[i * 3 + 1] = t[2] || 0.7;
        pos[i * 3 + 2] = -t[1];
      });
      const tg = new THREE.BufferGeometry();
      tg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(
        tg,
        new THREE.PointsMaterial({ color: 0x4ca66b, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.45 }),
      );
      g.add(pts);
    }

    // 5. Edificaciones extruidas en 3D real (barracones históricos de Christiania / Eco-houses y bungalows en Findhorn)
    if (data.buildings?.length) {
      const wallPos: number[] = [];
      const roofPos: number[] = [];
      const edgePos: number[] = [];

      data.buildings.forEach((b: { pts: number[][]; h: number }) => {
        const pts = b.pts.map(([x, y]) => ({ x, z: -y }));
        const h = Math.max(0.45, (b.h || 0.65) * 1.4);
        if (pts.length < 4) return;
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i];
          const c = pts[i + 1];
          wallPos.push(a.x, 0, a.z, c.x, 0, c.z, c.x, h, c.z, a.x, 0, a.z, c.x, h, c.z, a.x, h, a.z);
          edgePos.push(a.x, h, a.z, c.x, h, c.z);
        }
        try {
          const tri = THREE.ShapeUtils.triangulateShape(
            pts.map((p) => new THREE.Vector2(p.x, p.z)),
            [],
          );
          tri.forEach(([ia, ib, ic]) => {
            roofPos.push(pts[ia].x, h, pts[ia].z, pts[ib].x, h, pts[ib].z, pts[ic].x, h, pts[ic].z);
          });
        } catch {
          // ignore degenerate polygon
        }
      });

      const wallGeo = new THREE.BufferGeometry();
      wallGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPos, 3));
      wallGeo.computeVertexNormals();
      const wallMat = new THREE.MeshStandardMaterial({
        color: site === 'chr' ? 0x26221e : 0x1e2822,
        roughness: 0.85,
        metalness: 0.08,
        flatShading: true,
        side: THREE.DoubleSide,
      });
      g.add(new THREE.Mesh(wallGeo, wallMat));

      const roofGeo = new THREE.BufferGeometry();
      roofGeo.setAttribute('position', new THREE.Float32BufferAttribute(roofPos, 3));
      roofGeo.computeVertexNormals();
      const roofMat = new THREE.MeshStandardMaterial({
        color: site === 'chr' ? 0x382e28 : 0x2b3b31,
        roughness: 0.8,
        metalness: 0.1,
        flatShading: true,
        side: THREE.DoubleSide,
      });
      g.add(new THREE.Mesh(roofGeo, roofMat));

      const edgeGeo = new THREE.BufferGeometry();
      edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePos, 3));
      const edgeMat = new THREE.LineBasicMaterial({
        color: site === 'chr' ? 0xd99b66 : 0x7fbf8e,
        transparent: true,
        opacity: 0.32,
      });
      g.add(new THREE.LineSegments(edgeGeo, edgeMat));
    }

    // 6. Delimitación perimetral 3D (34 ha en Christiania / 14–30 ha en Findhorn) y elementos metabólicos 3D
    if (site === 'chr') {
      // Polígono envolvente del recinto de Freetown Christiania (34 ha: cuartel + murallas Stadsgraven)
      const chrPerim: LngLat[] = [
        [12.5955, 55.6720],
        [12.5985, 55.6710],
        [12.6035, 55.6722],
        [12.6085, 55.6765],
        [12.6075, 55.6788],
        [12.6025, 55.6778],
        [12.5972, 55.6750],
        [12.5955, 55.6720],
      ];
      const pSegs: number[] = [];
      for (let i = 0; i < chrPerim.length - 1; i++) {
        const a = llToScene('chr', chrPerim[i][0], chrPerim[i][1]);
        const b = llToScene('chr', chrPerim[i + 1][0], chrPerim[i + 1][1]);
        pSegs.push(a.x, 0.4, a.z, b.x, 0.4, b.z);
      }
      this.fatLine(rig, pSegs, COLORS.orange, 2.5, 'perim', 0.35);
    } else {
      // Polígono envolvente del núcleo de The Park en Findhorn (14 ha extensible a ~30 ha)
      const fndPerim: LngLat[] = [
        [-3.5955, 57.6532],
        [-3.5865, 57.6518],
        [-3.5820, 57.6525],
        [-3.5855, 57.6562],
        [-3.5938, 57.6568],
        [-3.5955, 57.6532],
      ];
      const pSegs: number[] = [];
      for (let i = 0; i < fndPerim.length - 1; i++) {
        const a = llToScene('fnd', fndPerim[i][0], fndPerim[i][1]);
        const b = llToScene('fnd', fndPerim[i + 1][0], fndPerim[i + 1][1]);
        pSegs.push(a.x, 0.4, a.z, b.x, 0.4, b.z);
      }
      this.fatLine(rig, pSegs, COLORS.green, 2.5, 'perim', 0.35);

      // Aerogeneradores 3D con hélices rotatorias en Findhorn Wind Park (1989)
      const windCoords: LngLat[] = [
        [-3.5835, 57.6522],
        [-3.5825, 57.6518],
        [-3.5846, 57.6515],
        [-3.5818, 57.6526],
      ];
      windCoords.forEach((ll) => {
        const p = llToScene('fnd', ll[0], ll[1]);
        const towerGroup = new THREE.Group();
        towerGroup.position.set(p.x, 0, p.z);

        const mast = new THREE.Mesh(
          new THREE.CylinderGeometry(0.14, 0.28, 6.2, 8),
          new THREE.MeshBasicMaterial({ color: 0xe8f5ec }),
        );
        mast.position.y = 3.1;
        towerGroup.add(mast);

        const rotor = new THREE.Group();
        rotor.position.set(0, 6.2, 0.2);
        for (let b = 0; b < 3; b++) {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(0.16, 2.5, 0.06),
            new THREE.MeshBasicMaterial({ color: 0x7fbf8e }),
          );
          blade.position.y = 1.2;
          const holder = new THREE.Group();
          holder.rotation.z = (b * Math.PI * 2) / 3;
          holder.add(blade);
          rotor.add(holder);
        }
        towerGroup.add(rotor);
        rig.rotors.push(rotor);
        g.add(towerGroup);
      });

      // Domo biodigestor de la Living Machine (1995)
      const lmPos = llToScene('fnd', -3.5938, 57.6539);
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(1.6, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x6ea8d6, wireframe: true, transparent: true, opacity: 0.75 }),
      );
      dome.position.set(lmPos.x, 0, lmPos.z);
      g.add(dome);
    }

    // Anillos pulsantes en los anclajes territoriales de cada sitio
    const ringGeo = new THREE.RingGeometry(1.1, 1.55, 24);
    ringGeo.rotateX(-Math.PI / 2);
    const ringColor = site === 'chr' ? COLORS.orange : COLORS.green;
    const anchorCoords =
      site === 'chr'
        ? [
            [12.5982, 55.6728],
            [12.5990, 55.6744],
            [12.6012, 55.6752],
          ]
        : [
            [-3.5905, 57.6545],
            [-3.5938, 57.6539],
            [-3.5835, 57.6522],
          ];
    anchorCoords.forEach(([lon, lat]) => {
      const p = llToScene(site, lon, lat);
      const m = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({ color: ringColor, transparent: true, opacity: 0.65, side: THREE.DoubleSide }),
      );
      m.position.set(p.x, 0.25, p.z);
      rig.flowPulses.push(m);
      g.add(m);
    });
  }

  private buildFlatPolys(polys: number[][][], y: number, mat: THREE.Material) {
    const pos: number[] = [];
    polys.forEach((poly) => {
      const pts = poly.map(([x, py]) => ({ x, z: -py }));
      if (pts.length < 3) return;
      try {
        const tri = THREE.ShapeUtils.triangulateShape(
          pts.map((p) => new THREE.Vector2(p.x, p.z)),
          [],
        );
        tri.forEach(([a, b, c]) => {
          pos.push(pts[a].x, y, pts[a].z, pts[b].x, y, pts[b].z, pts[c].x, y, pts[c].z);
        });
      } catch {
        // skip
      }
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 1;
    return mesh;
  }

  private fade(mat: { opacity: number } | undefined, v: number, delay = 0, dur = 0.8) {
    if (!mat) return;
    gsap.to(mat, { opacity: v, duration: dur, delay, ease: 'power2.out', overwrite: true });
  }

  lastState: [number, string | null] = [0, null];
  state(beat: number, sel: string | null = null) {
    this.lastState = [beat, sel];
    (['chr', 'fnd'] as SiteKey[]).forEach((site) => {
      const r = this.rigs[site];
      const showWater = beat >= 0;
      const showPerim = beat % 3 === 0 || beat <= 5 || beat === 39 || sel !== null;
      const showVias = beat >= 4;

      this.fade(r.fills.water, showWater ? (beat % 2 === 0 ? 0.38 : 0.24) : 0, 0.15);
      this.fade(r.lines.waterLine, showWater ? 0.92 : 0.35, 0.2);
      this.fade(r.lines.perim, showPerim ? 0.96 : 0.38, 0.15);
      this.fade(r.lines.viasMain, showVias ? 0.8 : 0.3, 0.2);
      this.fade(r.lines.viasLocal, beat >= 6 ? 0.68 : 0.25, 0.25);
    });
  }
}

export { BOUNDS };
