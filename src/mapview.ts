import maplibregl from 'maplibre-gl';
import { BOUNDS, COLORS, type SiteKey } from './content';
import type { Pad, ViewFocus } from './territory3d';

type Box = [number, number, number, number];

// Visor cartográfico 2D vectorial real (MapLibre GL) sincronizado para ambos recintos
export class DualMapView {
  maps: Record<SiteKey, maplibregl.Map>;
  ready: Promise<void>;
  focus: ViewFocus = 'dual';

  constructor(chrEl: HTMLElement, fndEl: HTMLElement) {
    this.maps = {
      chr: new maplibregl.Map({
        container: chrEl,
        style: { version: 8, sources: {}, layers: [] },
        bounds: BOUNDS.chr_all,
        interactive: false,
        attributionControl: false,
        fadeDuration: 0,
      }),
      fnd: new maplibregl.Map({
        container: fndEl,
        style: { version: 8, sources: {}, layers: [] },
        bounds: BOUNDS.fnd_all,
        interactive: false,
        attributionControl: false,
        fadeDuration: 0,
      }),
    };

    this.ready = Promise.all([
      new Promise<void>((res) => {
        this.maps.chr.on('load', async () => {
          const data = await fetch('./data/christiania.json').then((r) => r.json());
          this.buildSite(this.maps.chr, data.geojson, 'chr');
          res();
        });
      }),
      new Promise<void>((res) => {
        this.maps.fnd.on('load', async () => {
          const data = await fetch('./data/findhorn.json').then((r) => r.json());
          this.buildSite(this.maps.fnd, data.geojson, 'fnd');
          res();
        });
      }),
    ]).then(() => undefined);
  }

  private buildSite(m: maplibregl.Map, geo: any, site: SiteKey) {
    m.addSource('green', { type: 'geojson', data: geo.green });
    m.addSource('water', { type: 'geojson', data: geo.water });
    m.addSource('roads', { type: 'geojson', data: geo.roads });
    m.addSource('buildings', { type: 'geojson', data: geo.buildings });

    m.addLayer({
      id: 'green-f',
      type: 'fill',
      source: 'green',
      paint: { 'fill-color': '#122217', 'fill-opacity': 0.7 },
    });
    m.addLayer({
      id: 'water-f',
      type: 'fill',
      source: 'water',
      filter: ['==', ['geometry-type'], 'Polygon'],
      paint: { 'fill-color': COLORS.water, 'fill-opacity': 0.35 },
    });
    m.addLayer({
      id: 'water-l',
      type: 'line',
      source: 'water',
      paint: { 'line-color': COLORS.water, 'line-width': 1.5, 'line-opacity': 0.85 },
    });
    m.addLayer({
      id: 'roads-l',
      type: 'line',
      source: 'roads',
      paint: { 'line-color': '#555d68', 'line-width': 1.1, 'line-opacity': 0.7 },
    });
    m.addLayer({
      id: 'buildings-f',
      type: 'fill',
      source: 'buildings',
      paint: { 'fill-color': site === 'chr' ? '#362b24' : '#26382d', 'fill-opacity': 0.85 },
    });
    m.addLayer({
      id: 'buildings-l',
      type: 'line',
      source: 'buildings',
      paint: { 'line-color': site === 'chr' ? COLORS.orange : COLORS.green, 'line-width': 0.7, 'line-opacity': 0.6 },
    });
  }

  fit(focus: ViewFocus, chrBox: Box, fndBox: Box, _pad: Pad, duration = 1500) {
    this.focus = focus;
    this.maps.chr.resize();
    this.maps.fnd.resize();
    this.maps.chr.fitBounds(chrBox, { padding: 36, duration, essential: true, maxZoom: 16.5 });
    this.maps.fnd.fitBounds(fndBox, { padding: 36, duration, essential: true, maxZoom: 16.5 });
  }

  project(site: SiteKey, ll: [number, number]): { x: number; y: number } | null {
    if (this.focus !== 'dual' && this.focus !== site) return null;
    const m = this.maps[site];
    const c = m.getContainer();
    const r = c.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return null;
    const p = m.project(ll);
    return { x: r.left + p.x, y: r.top + p.y };
  }

  remove() {
    this.maps.chr.remove();
    this.maps.fnd.remove();
  }
}
