import { BEATS, COLORS, GEO, MODEL, type GeoId, type ModelId } from './content';

export interface Conn {
  id: string;
  a: string;
  b: string;
  color: string;
  dashed?: boolean;
  arrow?: boolean;
  min: number;
  max: number;
  models: ModelId[];
  delay?: number;
  label?: string;
  title?: string;
  bulge?: boolean;
  kind?: 'tension' | 'dep';
  exp?: boolean;
}

const C = COLORS;
export const CONNS: Conn[] = [];
const add = (c: Conn) => CONNS.push(c);

// ---- Columna vertical de las 7 dimensiones (secuencias 0 a 38)
add({ id: 's-suj-esc', a: 'c:suj:b', b: 'c:esc:t', color: C.cream, arrow: true, min: 5, max: 38, delay: 0.4, models: ['suj', 'esc'] });
add({ id: 's-esc-prop', a: 'c:esc:b', b: 'c:prop:t', color: C.water, arrow: true, min: 10, max: 38, delay: 0.4, models: ['esc', 'prop'] });
add({ id: 's-prop-pchr', a: 'c:prop:b', b: 'c:pchr:t', color: C.earth, arrow: true, min: 15, max: 38, delay: 0.4, models: ['prop', 'pchr'] });
add({ id: 's-pchr-pfnd', a: 'c:pchr:b', b: 'c:pfnd:t', color: C.orange, arrow: true, min: 21, max: 38, delay: 0.4, models: ['pchr', 'pfnd'] });
add({ id: 's-pfnd-econ', a: 'c:pfnd:b', b: 'c:econ:t', color: C.green, arrow: true, min: 27, max: 38, delay: 0.4, models: ['pfnd', 'econ'] });
add({ id: 's-econ-meta', a: 'c:econ:b', b: 'c:meta:t', color: C.bio, arrow: true, min: 33, max: 38, delay: 0.4, models: ['econ', 'meta'] });

// ---- Conexiones dinámicas por cada uno de los 40 beats (cada 30 segundos cambia el flujo)
const MODEL_BY_IDX: ModelId[] = ['suj', 'esc', 'prop', 'pchr', 'pfnd', 'econ', 'meta'];

BEATS.forEach((b) => {
  const i = b.index;
  if (i === 39) return;
  const modId = MODEL_BY_IDX[Math.max(0, b.modelIndex)] || 'suj';
  const modColor = MODEL[modId].color;

  // Anclajes desde la tarjeta activa a los puntos geográficos del plano 3D de ese segmento de 30s
  b.activeGeos.forEach((g, idx) => {
    const gSite = GEO[g].site;
    const isDep = g === 'redcph' || g === 'redscot';
    const isTension = g === 'pusher' || g === 'sanctuary';
    add({
      id: `b${i}-c-${g}`,
      a: `c:${modId}:r`,
      b: `g:${g}`,
      color: isDep ? C.grey : isTension ? '#ffffff' : gSite === 'chr' ? C.orange : C.green,
      dashed: isDep || idx % 2 === 1,
      arrow: true,
      min: i,
      max: i,
      delay: 0.3 + idx * 0.35,
      models: [modId],
      kind: isTension ? 'tension' : isDep ? 'dep' : undefined,
      label: idx === 0 ? b.planCode.split('·')[0].trim() : undefined,
      title: `${b.planTitle} → ${GEO[g].label}: ${GEO[g].sub}`,
    });
  });

  // Flujo cruzado entre los dos primeros puntos geográficos activos del beat
  if (b.activeGeos.length >= 2) {
    const g0 = b.activeGeos[0];
    const g1 = b.activeGeos[1];
    add({
      id: `b${i}-g-${g0}-${g1}`,
      a: `g:${g0}`,
      b: `g:${g1}`,
      color: modColor,
      dashed: GEO[g0].site !== GEO[g1].site,
      arrow: true,
      min: i,
      max: i,
      delay: 0.65,
      models: [modId],
      label: GEO[g0].site !== GEO[g1].site ? 'Homologación 14–34 ha' : undefined,
      title: `Relación espacial en ${b.timeRange}: ${GEO[g0].label} ⇄ ${GEO[g1].label}`,
    });
  }
});

// ---- Beat 39 (19:30–20:00): Red Síntesis Orbital de Cierre
add({ id: 'n-suj-esc', a: 'o:suj', b: 'o:esc', color: C.cream, arrow: true, min: 39, max: 39, delay: 0.4, models: ['suj', 'esc'], title: 'Delimitación de escala intermedia (14–34 ha) y demografía' });
add({ id: 'n-esc-prop', a: 'o:esc', b: 'o:prop', color: C.water, arrow: true, min: 39, max: 39, delay: 0.6, models: ['esc', 'prop'] });
add({ id: 'n-prop-pchr', a: 'o:prop', b: 'o:pchr', color: C.earth, arrow: true, min: 39, max: 39, delay: 0.8, models: ['prop', 'pchr'] });
add({ id: 'n-prop-pfnd', a: 'o:prop', b: 'o:pfnd', color: C.green, arrow: true, min: 39, max: 39, delay: 1.0, models: ['prop', 'pfnd'] });
add({ id: 'n-pchr-econ', a: 'o:pchr', b: 'o:econ', color: C.orange, arrow: true, min: 39, max: 39, delay: 1.2, models: ['pchr', 'econ'], label: 'Enfoque 3 + Enfoque 5' });
add({ id: 'n-pfnd-meta', a: 'o:pfnd', b: 'o:meta', color: C.green, arrow: true, min: 39, max: 39, delay: 1.4, models: ['pfnd', 'meta'] });
add({ id: 'n-econ-meta', a: 'o:econ', b: 'o:meta', color: C.bio, dashed: true, arrow: true, min: 39, max: 39, delay: 1.6, models: ['econ', 'meta'], title: 'Homologación entre fondos comunitarios e infraestructuras metabólicas' });

// Enlaces de exploración en el Beat 39 hacia los anclajes 3D
([
  ['suj', 'batmands'],
  ['suj', 'thepark'],
  ['esc', 'pusher'],
  ['esc', 'whins'],
  ['prop', 'faelles'],
  ['prop', 'ecohouses'],
  ['pchr', 'stadsgrav'],
  ['pfnd', 'caravan'],
  ['pfnd', 'sanctuary'],
  ['econ', 'maskin'],
  ['meta', 'living'],
  ['meta', 'windpark'],
  ['meta', 'redcph'],
  ['meta', 'redscot'],
] as [ModelId, GeoId][]).forEach(([mId, gId], k) => {
  add({
    id: `exp-${mId}-${gId}`,
    a: `o:${mId}`,
    b: `g:${gId}`,
    color: MODEL[mId].color,
    dashed: gId === 'redcph' || gId === 'redscot',
    arrow: true,
    min: 39,
    max: 39,
    delay: 0.3 + k * 0.1,
    models: [mId],
    exp: true,
  });
});

export const REL_TEXT: Record<ModelId, { rel: [ModelId, string][]; geo: GeoId[] }> = {
  suj: {
    rel: [
      ['esc', 'delimita la unidad equivalente (14–34 ha)'],
      ['prop', 'enmarca los regímenes de suelo urbano y rural'],
      ['econ', 'articula el Enfoque 3 en ambos casos'],
      ['meta', 'articula el Enfoque 5 en ambos casos'],
    ],
    geo: ['batmands', 'stadsgrav', 'thepark', 'caravan'],
  },
  esc: {
    rel: [
      ['suj', 'contrasta densidad capitalina vs. rural costera'],
      ['prop', 'presión de >1M turistas vs. 4k–10k estudiantes'],
    ],
    geo: ['batmands', 'pusher', 'thepark', 'whins'],
  },
  prop: {
    rel: [
      ['pchr', 'Fundación Christiania (2012) tras Ley de 1989'],
      ['pfnd', 'PET + Fundación Findhorn + propietarios privados'],
      ['econ', 'soporte jurídico de los fondos comunitarios'],
    ],
    geo: ['faelles', 'batmands', 'thepark', 'ecohouses'],
  },
  pchr: {
    rel: [
      ['prop', 'normalización mediante fideicomiso en 2012'],
      ['econ', 'autogobierno asambleario y Fælleskasse'],
      ['meta', 'reciclaje urbano en Maskinhallen y Stadsgraven'],
    ],
    geo: ['batmands', 'pusher', 'faelles', 'maskin', 'dysse'],
  },
  pfnd: {
    rel: [
      ['prop', 'separación entre gestión educativa y comunidad (2023)'],
      ['econ', 'evolución desde huerto biodinámico a campus holístico'],
      ['meta', 'incorporación de Eco-houses, Wind Park y Living Machine'],
    ],
    geo: ['caravan', 'ecohouses', 'living', 'windpark', 'sanctuary'],
  },
  econ: {
    rel: [
      ['prop', 'acciones comunitarias Folkeaktier vs. fideicomiso PET'],
      ['meta', 'financia el mantenimiento metabólico e infraestructural'],
    ],
    geo: ['faelles', 'maskin', 'thepark', 'ecohouses'],
  },
  meta: {
    rel: [
      ['econ', 'sostenido por mecanismos económicos comunitarios'],
      ['suj', 'reconoce dependencias de redes públicas externas (HOFOR / Scottish Grid)'],
    ],
    geo: ['maskin', 'stadsgrav', 'redcph', 'living', 'windpark', 'redscot'],
  },
};

export { GEO };
