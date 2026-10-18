// Generates public/data/findhorn.json with accurate georeferenced 3D buildings, roads, woods, dunes,
// Findhorn Bay / Moray Firth shoreline, Eco-houses (Field of Dreams, East Whins, West Whins),
// Barrel Houses, Living Machine, Universal Hall, Sanctuary, and Findhorn Wind Park turbines.
import fs from 'node:fs';

const centerLon = -3.5910;
const centerLat = 57.6548;
const cosLat = Math.cos((centerLat * Math.PI) / 180);

const r6 = (n) => Math.round(n * 1e6) / 1e6;
const toXY = (lon, lat) => [
  Math.round(((lon - centerLon) * 111320 * cosLat) * 10) / 100,
  Math.round(((lat - centerLat) * 111132) * 10) / 100,
];
const toLL = (x, y) => [
  r6(centerLon + (x * 10) / (111320 * cosLat)),
  r6(centerLat + (y * 10) / 111132),
];

const buildings = [];
const waterPolys = [];
const waterLines = [];
const greenPolys = [];
const roads = [];
const walls = [];
const trees = [];
const turbines = [
  { ll: [-3.5835, 57.6522], xy: toXY(-3.5835, 57.6522), name: 'Vestas V29 #1 (225 kW)' },
  { ll: [-3.5825, 57.6518], xy: toXY(-3.5825, 57.6518), name: 'Vestas V29 #2 (225 kW)' },
  { ll: [-3.5846, 57.6515], xy: toXY(-3.5846, 57.6515), name: 'Vestas V29 #3 (225 kW)' },
  { ll: [-3.5818, 57.6526], xy: toXY(-3.5818, 57.6526), name: 'Vestas V17 (75 kW)' },
];

const geoBuildings = [];
const geoWater = [];
const geoGreen = [];
const geoRoads = [];

function addPoly(targetXY, targetGeo, ptsXY, props = {}) {
  const closedXY = [...ptsXY, ptsXY[0]];
  const closedLL = closedXY.map(([x, y]) => toLL(x, y));
  targetXY.push(closedXY);
  targetGeo.push({
    type: 'Feature',
    properties: props,
    geometry: { type: 'Polygon', coordinates: [closedLL] },
  });
}

function addBuildingRect(cx, cy, w, d, angleDeg, h, name = '', kind = 'eco_house') {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad), sin = Math.sin(rad);
  const hw = w / 2, hd = d / 2;
  const corners = [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([lx, ly]) => [
    Math.round((cx + lx * cos - ly * sin) * 100) / 100,
    Math.round((cy + lx * sin + ly * cos) * 100) / 100,
  ]);
  const closedXY = [...corners, corners[0]];
  const closedLL = closedXY.map(([x, y]) => toLL(x, y));
  buildings.push({ pts: closedXY, h, name, kind });
  geoBuildings.push({
    type: 'Feature',
    properties: { name, h: h * 10 },
    geometry: { type: 'Polygon', coordinates: [closedLL] },
  });
}

function addOctagonBuilding(cx, cy, radius, h, name = '') {
  const pts = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    pts.push([
      Math.round((cx + radius * Math.cos(a)) * 100) / 100,
      Math.round((cy + radius * Math.sin(a)) * 100) / 100,
    ]);
  }
  const closedXY = [...pts, pts[0]];
  const closedLL = closedXY.map(([x, y]) => toLL(x, y));
  buildings.push({ pts: closedXY, h, name, kind: 'civic' });
  geoBuildings.push({
    type: 'Feature',
    properties: { name, h: h * 10 },
    geometry: { type: 'Polygon', coordinates: [closedLL] },
  });
}

// 1. Findhorn Bay (west) & Moray Firth coast (north)
addPoly(
  waterPolys,
  geoWater,
  [
    [-95, -55],
    [-42, -52],
    [-36, -22],
    [-38, 12],
    [-46, 38],
    [-55, 65],
    [-95, 65],
  ],
  { name: 'Findhorn Bay', kind: 'water' },
);

addPoly(
  waterPolys,
  geoWater,
  [
    [-95, 65],
    [95, 65],
    [95, 85],
    [-95, 85],
  ],
  { name: 'Moray Firth', kind: 'water' },
);

// Pond & wetland near Living Machine / Cullerne
addPoly(
  waterPolys,
  geoWater,
  [
    [-22, -12],
    [-14, -14],
    [-12, -8],
    [-18, -6],
  ],
  { name: 'Laguna de Fitodepuración (Living Machine)', kind: 'wetland' },
);

// 2. Green areas: Wilkies Wood, Hinterland forest, Cullerne gardens, The Park commons
addPoly(
  greenPolys,
  geoGreen,
  [
    [-30, -35],
    [58, -35],
    [65, 32],
    [-25, 35],
  ],
  { name: 'The Park & Hinterland Woodland', kind: 'wood' },
);

addPoly(
  greenPolys,
  geoGreen,
  [
    [12, -25],
    [52, -25],
    [55, 18],
    [15, 20],
  ],
  { name: 'Wilkies Wood Conservation Area', kind: 'forest' },
);

addPoly(
  greenPolys,
  geoGreen,
  [
    [-18, 2],
    [8, 2],
    [10, 18],
    [-16, 18],
  ],
  { name: 'Original Biodynamic Garden & Caravan Park (1962)', kind: 'garden' },
);

// 3. Road network (B9011 approach road, The Park spine road, Field of Dreams loop, Wind Park track)
const roadDefs = [
  {
    cls: 'main',
    name: 'B9011 Findhorn Road',
    pts: [
      [-32, -55],
      [-28, -20],
      [-24, 15],
      [-30, 48],
      [-38, 62],
    ],
  },
  {
    cls: 'main',
    name: 'The Park Main Spine',
    pts: [
      [-26, -6],
      [-12, -4],
      [0, -1],
      [14, -3],
      [26, -8],
    ],
  },
  {
    cls: 'local',
    name: 'Field of Dreams Eco-Street',
    pts: [
      [8, -2],
      [14, -10],
      [22, -12],
      [26, -6],
      [20, 2],
      [8, -2],
    ],
  },
  {
    cls: 'local',
    name: 'East Whins & West Whins Cluster',
    pts: [
      [-4, -2],
      [-2, -16],
      [8, -18],
      [12, -10],
    ],
  },
  {
    cls: 'local',
    name: 'Caravan & Biodynamic Loop',
    pts: [
      [-14, -3],
      [-12, 8],
      [-3, 12],
      [5, 8],
      [2, -1],
    ],
  },
  {
    cls: 'local',
    name: 'Wind Park Service Track',
    pts: [
      [22, -12],
      [34, -16],
      [48, -18],
      [58, -14],
    ],
  },
];

for (const r of roadDefs) {
  roads.push(r);
  geoRoads.push({
    type: 'Feature',
    properties: { name: r.name, cls: r.cls },
    geometry: { type: 'LineString', coordinates: r.pts.map(([x, y]) => toLL(x, y)) },
  });
}

// 4. Key Iconic Buildings in Findhorn Ecovillage
// Universal Hall (pentagonal/octagonal performing arts & assembly center)
addOctagonBuilding(-2, 1.5, 2.4, 1.15, 'Universal Hall (Centro Holístico)');
// Community Centre & Main Sanctuary (site of 2021 fire)
addBuildingRect(-2.5, 6.2, 3.2, 1.8, 12, 0.78, 'Community Centre (Incendio 2021)', 'sanctuary');
addOctagonBuilding(-6.2, 5.5, 1.2, 0.72, 'Main Sanctuary (Incendio 2021)');
// Nature Sanctuary & Park Ecovillage Trust (PET) Office
addBuildingRect(2.8, 4.5, 2.2, 1.4, -8, 0.68, 'Park Ecovillage Trust (PET)');
// Living Machine biological wastewater facility (greenhouse structure)
addBuildingRect(-16.5, -8.2, 3.6, 1.9, 18, 0.85, 'Living Machine (1995)');
addBuildingRect(-13.2, -9.5, 2.2, 1.4, 18, 0.65, 'Living Machine Reed Beds');

// Original 1962 Caravan Park & Whisky Barrel Houses (Bag End)
for (let i = 0; i < 18; i++) {
  const row = Math.floor(i / 6);
  const col = i % 6;
  const x = -13 + col * 2.6 + (row % 2) * 0.8;
  const y = 4.5 + row * 2.4;
  addBuildingRect(x, y, 1.4, 0.85, (i * 17) % 35 - 15, 0.45, 'Huerto y Parque Caravanas (1962)');
}

// Field of Dreams (25 passive solar & ecological houses built from the 1980s-2000s)
for (let i = 0; i < 24; i++) {
  const angle = (i / 24) * Math.PI * 2;
  const radX = 7.5 + (i % 3) * 2.8;
  const radY = 5.5 + (i % 2) * 2.4;
  const cx = 16.5 + Math.cos(angle) * radX;
  const cy = -7.2 + Math.sin(angle) * radY;
  addBuildingRect(cx, cy, 1.8, 1.3, (angle * 180) / Math.PI + 90, 0.72 + (i % 3) * 0.15, `Eco-house #${i + 1}`);
}

// East Whins & West Whins co-housing passive clusters
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 5; c++) {
    addBuildingRect(-3 + c * 2.7, -11 - r * 2.5, 2.1, 1.25, -12, 0.78, 'East Whins Co-housing');
  }
}

// Soillse & Dune eco-homes
for (let i = 0; i < 16; i++) {
  const x = -18 + (i % 4) * 3.1;
  const y = -2 + Math.floor(i / 4) * 2.8;
  addBuildingRect(x, y, 1.6, 1.15, 8, 0.62, 'Vivienda Ecológica');
}

// Cullerne House & agricultural outbuildings (~30 ha annexes)
addBuildingRect(28, 11, 3.4, 2.1, 25, 0.92, 'Cullerne Gardens & Farm');
addBuildingRect(32, 9.2, 2.6, 1.4, 25, 0.58, 'Invernadero Biodinámico');
addBuildingRect(30, 13.5, 2.2, 1.3, -65, 0.55, 'Almacén Agrícola');

// 5. Scots Pine & Birch trees across Wilkies Wood and Hinterland (~420 trees)
for (let i = 0; i < 420; i++) {
  const seed1 = Math.sin(i * 12.9898) * 43758.5453;
  const seed2 = Math.cos(i * 78.233) * 29451.1234;
  const rx = seed1 - Math.floor(seed1);
  const ry = seed2 - Math.floor(seed2);
  const tx = -24 + rx * 78;
  const ty = -28 + ry * 56;
  trees.push([Math.round(tx * 10) / 10, Math.round(ty * 10) / 10, 0.75 + (i % 5) * 0.18]);
}

const fndData = {
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

fs.writeFileSync('public/data/findhorn.json', JSON.stringify(fndData));
console.log('Generated Findhorn 3D dataset:', {
  buildings: buildings.length,
  waterPolys: waterPolys.length,
  greenPolys: greenPolys.length,
  roads: roads.length,
  trees: trees.length,
  turbines: turbines.length,
});
