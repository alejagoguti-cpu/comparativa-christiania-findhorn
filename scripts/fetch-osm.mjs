// Fetch real OpenStreetMap cartography (buildings, water, woods/parks, roads, barriers/walls, wind turbines)
// for Freetown Christiania (Copenhagen, Denmark) and Findhorn Ecovillage (Moray, Scotland).
import fs from 'node:fs';

fs.mkdirSync('public/data', { recursive: true });

const OVERPASS_URLS = [
  'https://overpass.private.coffee/api/interpreter',
  'https://overpass-api.de/api/interpreter',
];

async function queryOverpass(bbox) {
  const [s, w, n, e] = bbox;
  const q = `[out:json][timeout:25];(way["building"](${s},${w},${n},${e});way["highway"](${s},${w},${n},${e});way["natural"](${s},${w},${n},${e});way["landuse"](${s},${w},${n},${e}););out geom;`;

  for (const url of OVERPASS_URLS) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'User-Agent': 'ComparativaTerritorial3D/1.0',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'data=' + encodeURIComponent(q),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (data && data.elements && data.elements.length > 0) {
        return data.elements;
      }
    } catch (err) {
      console.warn('Failed', url, err.message);
    }
  }
  throw new Error('All Overpass endpoints failed');
}

const r6 = (n) => Math.round(n * 1e6) / 1e6;

function processSite(elements, centerLon, centerLat) {
  const cosLat = Math.cos((centerLat * Math.PI) / 180);
  // 1 unit in 3D scene = 10 meters
  const toXY = (lon, lat) => [
    Math.round(((lon - centerLon) * 111320 * cosLat) * 10) / 100,
    Math.round(((lat - centerLat) * 111132) * 10) / 100,
  ];

  const buildings = [];
  const waterPolys = [];
  const waterLines = [];
  const greenPolys = [];
  const roads = [];
  const walls = [];
  const trees = [];
  const turbines = [];

  const geoBuildings = [];
  const geoWater = [];
  const geoGreen = [];
  const geoRoads = [];

  for (const el of elements) {
    const t = el.tags || {};
    if (el.type === 'node') {
      if (t['generator:source'] === 'wind' || t.power === 'generator') {
        turbines.push({ ll: [r6(el.lon), r6(el.lat)], xy: toXY(el.lon, el.lat), name: t.name || 'Aerogenerador' });
      } else if (t.natural === 'tree') {
        trees.push([...toXY(el.lon, el.lat), 0.9]);
      }
      continue;
    }

    const geom = el.geometry;
    if (!geom || geom.length < 2) continue;

    const llCoords = geom.map((p) => [r6(p.lon), r6(p.lat)]);
    const xyCoords = geom.map((p) => toXY(p.lon, p.lat));

    const closeRing = (arr) => {
      const a = arr[0], b = arr[arr.length - 1];
      if (a[0] !== b[0] || a[1] !== b[1]) return [...arr, a];
      return arr;
    };

    if (t.building) {
      if (xyCoords.length < 3) continue;
      const levels = parseFloat(t['building:levels'] || '0');
      const height = parseFloat(t.height || '0') || (levels ? levels * 3.2 : 5.5 + (el.id % 5) * 1.1);
      const ringXY = closeRing(xyCoords);
      const ringLL = closeRing(llCoords);
      buildings.push({
        pts: ringXY,
        h: Math.round((height / 10) * 100) / 100,
        name: t.name || '',
        kind: t.building,
      });
      geoBuildings.push({
        type: 'Feature',
        properties: { name: t.name || '', h: height },
        geometry: { type: 'Polygon', coordinates: [ringLL] },
      });
    } else if (t.natural === 'water' || t.natural === 'wetland') {
      if (xyCoords.length >= 3) {
        const ringXY = closeRing(xyCoords);
        const ringLL = closeRing(llCoords);
        waterPolys.push(ringXY);
        geoWater.push({
          type: 'Feature',
          properties: { name: t.name || '', kind: t.natural || 'water' },
          geometry: { type: 'Polygon', coordinates: [ringLL] },
        });
      }
    } else if (t.waterway || t.natural === 'coastline') {
      waterLines.push(xyCoords);
      geoWater.push({
        type: 'Feature',
        properties: { name: t.name || '', kind: t.waterway || 'coast' },
        geometry: { type: 'LineString', coordinates: llCoords },
      });
    } else if (t.natural === 'wood' || t.natural === 'scrub' || t.landuse || t.leisure) {
      if (xyCoords.length >= 3) {
        const ringXY = closeRing(xyCoords);
        const ringLL = closeRing(llCoords);
        greenPolys.push(ringXY);
        geoGreen.push({
          type: 'Feature',
          properties: { name: t.name || '', kind: t.natural || t.landuse || t.leisure },
          geometry: { type: 'Polygon', coordinates: [ringLL] },
        });
      }
    } else if (t.barrier || t.historic) {
      walls.push(xyCoords);
    } else if (t.highway) {
      const cls = ['primary', 'secondary', 'tertiary', 'trunk'].includes(t.highway) ? 'main' : 'local';
      roads.push({ pts: xyCoords, cls, name: t.name || '' });
      geoRoads.push({
        type: 'Feature',
        properties: { name: t.name || '', cls },
        geometry: { type: 'LineString', coordinates: llCoords },
      });
    }
  }

  return {
    center: [centerLon, centerLat],
    buildings,
    waterPolys,
    waterLines,
    greenPolys,
    roads,
    walls,
    trees,
    turbines,
    geojson: {
      buildings: { type: 'FeatureCollection', features: geoBuildings },
      water: { type: 'FeatureCollection', features: geoWater },
      green: { type: 'FeatureCollection', features: geoGreen },
      roads: { type: 'FeatureCollection', features: geoRoads },
    },
  };
}

if (!fs.existsSync('public/data/christiania.json')) {
  console.log('Fetching Christiania...');
  const chrEl = await queryOverpass([55.6685, 12.5920, 55.6815, 12.6160]);
  const chrData = processSite(chrEl, 12.6015, 55.6745);
  fs.writeFileSync('public/data/christiania.json', JSON.stringify(chrData));
  console.log('Christiania saved:', {
    buildings: chrData.buildings.length,
    waterPolys: chrData.waterPolys.length,
    greenPolys: chrData.greenPolys.length,
    roads: chrData.roads.length,
    trees: chrData.trees.length,
  });
} else {
  console.log('Christiania already exists, skipping.');
}

if (!fs.existsSync('public/data/findhorn.json')) {
  console.log('Fetching Findhorn...');
  const fndEl = await queryOverpass([57.6490, -3.6060, 57.6615, -3.5740]);
  const fndData = processSite(fndEl, -3.5910, 57.6548);
  fs.writeFileSync('public/data/findhorn.json', JSON.stringify(fndData));
  console.log('Findhorn saved:', {
    buildings: fndData.buildings.length,
    waterPolys: fndData.waterPolys.length,
    greenPolys: fndData.greenPolys.length,
    roads: fndData.roads.length,
    trees: fndData.trees.length,
    turbines: fndData.turbines.length,
  });
}

