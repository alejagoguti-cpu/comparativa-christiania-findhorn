import { COLORS, GEO, type GeoId, type ModelId } from './content';

// Una conexión animada entre dos anclas:
//  c:<modelo>:<t|b|l|r>  borde de una tarjeta     g:<punto>  punto del territorio proyectado en el plano 3D/2D
//  x:<id>  punto del ciclo                         o:<modelo> nodo orbital de la red propia (secuencia 8)
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

// ---- columna vertical de tarjetas (secuencias 1 a 7)
add({ id: 's-suj-esc', a: 'c:suj:b', b: 'c:esc:t', color: C.cream, arrow: true, min: 1, max: 7, delay: 0.7, models: ['suj', 'esc'] });
add({ id: 's-esc-prop', a: 'c:esc:b', b: 'c:prop:t', color: C.water, arrow: true, min: 3, max: 7, delay: 0.6, models: ['esc', 'prop'] });
add({ id: 's-prop-pchr', a: 'c:prop:b', b: 'c:pchr:t', color: C.earth, arrow: true, min: 4, max: 7, delay: 0.6, models: ['prop', 'pchr'] });
add({ id: 's-pchr-pfnd', a: 'c:pchr:b', b: 'c:pfnd:t', color: C.orange, arrow: true, min: 5, max: 7, delay: 0.6, models: ['pchr', 'pfnd'] });
add({ id: 's-pfnd-econ', a: 'c:pfnd:b', b: 'c:econ:t', color: C.green, arrow: true, min: 6, max: 7, delay: 0.6, models: ['pfnd', 'econ'] });
add({ id: 's-econ-meta', a: 'c:econ:b', b: 'c:meta:t', color: C.bio, arrow: true, min: 7, max: 7, delay: 0.6, models: ['econ', 'meta'] });

// ---- Beat 2: Escala territorial y demografía en los dos planos 3D (Christiania 34 ha vs Findhorn 14-30 ha)
add({ id: 'e-batmands', a: 'c:esc:r', b: 'g:batmands', color: C.water, min: 2, max: 2, delay: 0.5, models: ['esc'], title: 'Christiania: ~950 residentes estables y >1.000.000 visitantes/año' });
add({ id: 'e-stadsgrav', a: 'c:esc:r', b: 'g:stadsgrav', color: C.water, min: 2, max: 2, delay: 0.9, models: ['esc'], title: 'Murallas del siglo XVII y canal Stadsgraven (34 hectáreas)' });
add({ id: 'e-thepark', a: 'c:esc:r', b: 'g:thepark', color: C.green, min: 2, max: 2, delay: 1.3, models: ['esc'], title: 'Ecoaldea Findhorn: 14 ha en The Park (~30 ha con anexos), ~375 residentes' });
add({ id: 'e-caravan', a: 'g:thepark', b: 'g:caravan', color: C.green, dashed: true, arrow: true, min: 2, max: 2, delay: 1.7, models: ['esc'], title: 'Expansión desde el parque de caravanas original (1962)' });

// ---- Beat 3: Estructura jurídica de propiedad y fideicomisos
add({ id: 'pr-faelles', a: 'c:prop:r', b: 'g:faelles', color: C.earth, min: 3, max: 3, delay: 0.5, models: ['prop'], title: 'Fundación Freetown Christiania (2012): fideicomiso colectivo y acciones comunitarias' });
add({ id: 'pr-bat', a: 'g:faelles', b: 'g:batmands', color: C.earth, arrow: true, min: 3, max: 3, delay: 1.0, models: ['prop'], title: 'Compra/arrendamiento del suelo militar al Estado danés' });
add({ id: 'pr-park', a: 'c:prop:r', b: 'g:thepark', color: C.earth, min: 3, max: 3, delay: 0.8, models: ['prop'], title: 'Propiedad distribuida/mixta: Park Ecovillage Trust (PET) + Fundación Findhorn' });
add({ id: 'pr-eco', a: 'g:thepark', b: 'g:ecohouses', color: C.earth, dashed: true, arrow: true, min: 3, max: 3, delay: 1.4, models: ['prop'], title: 'Propietarios residenciales privados en Field of Dreams' });

// ---- Beat 4: Periodización A · Freetown Christiania (1971–Presente)
add({ id: 'pc-1', a: 'c:pchr:r', b: 'g:batmands', color: C.orange, min: 4, max: 4, delay: 0.5, models: ['pchr'], label: '1971–1989 Ocupación', title: 'Fase 1 (1971–1989): Ocupación del cuartel de Båtmandsstræde y autogobierno asambleario' });
add({ id: 'pc-2', a: 'g:batmands', b: 'g:pusher', color: '#ffffff', min: 4, max: 4, delay: 1.1, models: ['pchr'], kind: 'tension', label: '1989–2011 Christianialoven', title: 'Fase 2 (1989–2011): Ley de Christiania, presión inmobiliaria y tensiones en Pusher Street' });
add({ id: 'pc-3', a: 'g:pusher', b: 'g:faelles', color: C.orange, arrow: true, min: 4, max: 4, delay: 1.7, models: ['pchr'], label: '2012–Hoy Fideicomiso', title: 'Fase 3 (2012–Presente): Fundación Freetown Christiania y acciones comunitarias' });

// ---- Beat 5: Periodización B · Ecoaldea Findhorn (1962–Presente)
add({ id: 'pf-1', a: 'c:pfnd:r', b: 'g:caravan', color: C.green, min: 5, max: 5, delay: 0.5, models: ['pfnd'], label: '1962–1972 Biocultural', title: 'Fase 1 (1962–1972): Huerto biodinámico en suelo arenoso y parque de caravanas' });
add({ id: 'pf-2a', a: 'g:caravan', b: 'g:ecohouses', color: C.green, arrow: true, min: 5, max: 5, delay: 1.0, models: ['pfnd'], label: '1972–2019 Ecotecnologías', title: 'Fase 2 (1972–2019): Eco-houses (80s), Wind Park (1989) y Living Machine (1995)' });
add({ id: 'pf-2b', a: 'g:ecohouses', b: 'g:living', color: C.water, arrow: true, min: 5, max: 5, delay: 1.4, models: ['pfnd'], title: 'Integración metabólica entre viviendas ecológicas y planta Living Machine' });
add({ id: 'pf-2c', a: 'g:ecohouses', b: 'g:windpark', color: C.green, arrow: true, min: 5, max: 5, delay: 1.6, models: ['pfnd'], title: 'Parque eólico comunitario Findhorn Wind Park (1989)' });
add({ id: 'pf-3', a: 'g:thepark', b: 'g:sanctuary', color: '#ffffff', min: 5, max: 5, delay: 2.0, models: ['pfnd'], kind: 'tension', label: '2021 Incendio · 2023 Crisis', title: 'Fase 3 (2020–Presente): Incendio de Sanctuary y CC (2021) y reestructuración financiera (2023)' });

// ---- Beat 6: Enfoque 3 · Economía y Conocimiento Adaptativo (Homologación de Mecanismos)
add({ id: 'ec-chr', a: 'c:econ:r', b: 'g:faelles', color: C.bio, min: 6, max: 6, delay: 0.5, models: ['econ'], label: 'Fælleskasse', title: 'Caja común Fælleskasse y acciones populares en Christiania' });
add({ id: 'ec-maskin', a: 'g:faelles', b: 'g:maskin', color: C.earth, arrow: true, min: 6, max: 6, delay: 1.0, models: ['econ'], title: 'Financiamiento de mantenimiento urbano y talleres colectivos (Maskinhallen)' });
add({ id: 'ec-fnd', a: 'c:econ:r', b: 'g:thepark', color: C.bio, min: 6, max: 6, delay: 0.8, models: ['econ'], label: 'PET & Educación', title: 'Impuestos/donaciones comunitarias en Findhorn y centro educativo holístico' });
add({ id: 'ec-homol', a: 'g:faelles', b: 'g:thepark', color: C.cream, dashed: true, min: 6, max: 6, delay: 1.5, models: ['econ'], label: 'Homologación financiera', title: 'Regla Metodológica: Homologación de fondos comunitarios (Fælleskasse vs. aportes PET/Findhorn)' });
add({ id: 'ec-cyc', a: 'x:fondo', b: 'g:faelles', color: C.orange, dashed: true, min: 6, max: 6, delay: 1.8, models: ['econ'], title: 'Articulación del fondo comunitario en el ciclo adaptativo' });

// ---- Beat 7: Enfoque 5 · Infraestructuras, Metabolismo y Reconocimiento de Dependencias
add({ id: 'mt-chr1', a: 'c:meta:r', b: 'g:maskin', color: C.orange, min: 7, max: 7, delay: 0.5, models: ['meta'], title: 'Christiania: Reutilización de materiales y autoconstrucción adaptativa' });
add({ id: 'mt-chr2', a: 'g:maskin', b: 'g:stadsgrav', color: C.water, arrow: true, min: 7, max: 7, delay: 0.9, models: ['meta'], label: 'Drenaje pluvial', title: 'Drenaje pluvial hacia los canales históricos de Stadsgraven' });
add({ id: 'mt-dep-chr', a: 'g:batmands', b: 'g:redcph', color: C.grey, dashed: true, min: 7, max: 7, delay: 1.4, models: ['meta'], kind: 'dep', label: 'Dep. Red Copenhague', title: 'Reconocimiento de Dependencia: Red sanitaria y eléctrica municipal de Copenhague' });

add({ id: 'mt-fnd1', a: 'c:meta:r', b: 'g:living', color: C.water, min: 7, max: 7, delay: 0.7, models: ['meta'], label: 'Living Machine', title: 'Findhorn: Depuración biológica anaerobia/aerobia en Living Machine (1995)' });
add({ id: 'mt-fnd2', a: 'g:windpark', b: 'g:ecohouses', color: C.green, arrow: true, min: 7, max: 7, delay: 1.1, models: ['meta'], label: '675 kW Eólica', title: 'Abastecimiento eléctrico desde los aerogeneradores comunitarios hacia Eco-houses' });
add({ id: 'mt-dep-fnd', a: 'g:windpark', b: 'g:redscot', color: C.grey, dashed: true, min: 7, max: 7, delay: 1.6, models: ['meta'], kind: 'dep', label: 'Dep. Red Escocesa', title: 'Reconocimiento de Dependencia: Red eléctrica nacional escocesa como respaldo de fondo' });

// ---- Beat 8: Red Síntesis de Homologación Comparativa
add({ id: 'n-suj-esc', a: 'o:suj', b: 'o:esc', color: C.cream, arrow: true, min: 8, max: 8, delay: 0.6, models: ['suj', 'esc'], title: 'La delimitación de escala intermedia (14–34 ha) habilita la comparación demográfica' });
add({ id: 'n-esc-prop', a: 'o:esc', b: 'o:prop', color: C.water, arrow: true, min: 8, max: 8, delay: 0.9, models: ['esc', 'prop'] });
add({ id: 'n-prop-pchr', a: 'o:prop', b: 'o:pchr', color: C.earth, arrow: true, min: 8, max: 8, delay: 1.1, models: ['prop', 'pchr'] });
add({ id: 'n-prop-pfnd', a: 'o:prop', b: 'o:pfnd', color: C.green, arrow: true, min: 8, max: 8, delay: 1.3, models: ['prop', 'pfnd'] });
add({ id: 'n-pchr-econ', a: 'o:pchr', b: 'o:econ', color: C.orange, arrow: true, min: 8, max: 8, delay: 1.5, models: ['pchr', 'econ'], label: 'Enfoque 3 + Enfoque 5' });
add({ id: 'n-pfnd-meta', a: 'o:pfnd', b: 'o:meta', color: C.green, arrow: true, min: 8, max: 8, delay: 1.7, models: ['pfnd', 'meta'] });
add({ id: 'n-econ-meta', a: 'o:econ', b: 'o:meta', color: C.bio, dashed: true, arrow: true, min: 8, max: 8, delay: 1.9, models: ['econ', 'meta'], title: 'Articulación entre fondos comunitarios e infraestructuras metabólicas' });

for (const o of CONNS.slice()) {
  if (o.max === 8 || !(o.a.startsWith('g:') || o.b.startsWith('g:')) || o.a.startsWith('x:')) continue;
  add({ ...o, id: o.id + '-n', a: o.a.startsWith('c:') ? 'o:' + o.a.split(':')[1] : o.a, min: 8, max: 8, exp: true });
}

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
    geo: ['batmands', 'stadsgrav', 'thepark', 'caravan'],
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
    geo: ['batmands', 'pusher', 'faelles', 'maskin'],
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
      ['prop', 'acciones comunitarias vs. fideicomiso PET'],
      ['meta', 'financia el mantenimiento metabólico e infraestructural'],
    ],
    geo: ['faelles', 'maskin', 'thepark', 'sanctuary'],
  },
  meta: {
    rel: [
      ['econ', 'sostenido por mecanismos económicos comunitarios'],
      ['suj', 'reconoce dependencias de redes públicas externas'],
    ],
    geo: ['maskin', 'stadsgrav', 'redcph', 'living', 'windpark', 'redscot'],
  },
};

export { GEO };
