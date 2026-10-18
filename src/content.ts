// Contenido de la secuencia comparativa 1.1: Freetown Christiania (Dinamarca) vs. Ecoaldea Findhorn (Escocia)
// Todos los datos, periodización histórica, matriz técnica y regla metodológica provienen del documento 1.1.

export type LngLat = [number, number];
export type SiteKey = 'chr' | 'fnd';

export const COLORS = {
  cream: '#ebe5d9',
  water: '#6ea8d6',
  green: '#7fbf8e',
  earth: '#cdae67',
  orange: '#e6956a',
  grey: '#b4b4b4',
  bio: '#f0f0f0',
  ink: '#0a0a0a',
};

export type ModelId = 'suj' | 'esc' | 'prop' | 'pchr' | 'pfnd' | 'econ' | 'meta';

export interface MatrixRow {
  criterio: string;
  chr: string;
  fnd: string;
}

export const MATRIX_ROWS: MatrixRow[] = [
  {
    criterio: 'Sujeto de Comparación',
    chr: 'Recinto comunitario urbano autogestionado (barrio autónomo ocupado y normalizado en suelo militar histórico).',
    fnd: 'Asentamiento rural-ecológico e intencional (ecoaldea, centro educativo y parque residencial holístico).',
  },
  {
    criterio: 'Localización Geográfica y Administrativa',
    chr: 'Distrito de Christianshavn, Municipio de Copenhague, Dinamarca (entorno urbano denso capitalino).',
    fnd: 'Península de Findhorn, Moray Firth, Consejo de Moray, Escocia (entorno rural costero de baja densidad).',
  },
  {
    criterio: 'Superficie Territorial',
    chr: '34 hectáreas (incluyendo murallas defensivas del siglo XVII, canales hídricos y áreas verdes de conservación).',
    fnd: '14 hectáreas en el núcleo de The Park (extensible a ~30 ha con fincas agrícolas e infraestructuras anexas).',
  },
  {
    criterio: 'Población Estable vs. Flotante',
    chr: '~900 a 1.000 residentes estables (~150 niños); >1.000.000 de visitantes/turistas anuales.',
    fnd: '~300 a 450 residentes estables; >4.000 a 10.000 visitantes/estudiantes anuales.',
  },
  {
    criterio: 'Año de Origen y Hito Fundacional',
    chr: '1971 (Ocupación civil del cuartel militar abandonado de Båtmandsstræde y proclama de "Ciudad Libre").',
    fnd: '1962 (Instalación del parque de caravanas por Eileen y Peter Caddy, y Dorothy Maclean).',
  },
  {
    criterio: 'Estructura Jurídica de Propiedad',
    chr: 'Propiedad Colectiva mediante Fideicomiso: Fundación Freetown Christiania (creada en 2012 para comprar/arrendar el suelo al Estado).',
    fnd: 'Propiedad Distribuida / Mixta: Park Ecovillage Trust (PET), Fundación Findhorn (educativa) y propietarios residenciales privados.',
  },
  {
    criterio: 'Enfoques Temáticos Asignados',
    chr: 'Enfoque 3 (Economía y conocimiento adaptativo) + Enfoque 5 (Infraestructuras y metabolismo).',
    fnd: 'Enfoque 3 (Economía y conocimiento adaptativo) + Enfoque 5 (Infraestructuras y metabolismo).',
  },
];

export interface PhaseItem {
  period: string;
  title: string;
  desc: string;
}

export const PHASES_CHR: PhaseItem[] = [
  {
    period: '1971–1989',
    title: '1. Fase de Ocupación y Ruptura',
    desc: 'Ocupación del recinto militar abandonado de Christianshavn por vecinos y movimientos contraculturales, proclamando un territorio autónomo con autogobierno asambleario.',
  },
  {
    period: '1989–2011',
    title: '2. Conflicto y Mantenimiento Experimental',
    desc: 'Expedición de la "Ley de Christiania" (Christianialoven) en 1989. Tensiones de normalización jurídica, presión por revalorización del suelo urbano y conflictos en Pusher Street.',
  },
  {
    period: '2012–Presente',
    title: '3. Normalización Jurídica y Fideicomiso',
    desc: 'Constitución de la Fundación Freetown Christiania en julio de 2012. Compra del suelo histórico al Ministerio de Defensa mediante "acciones comunitarias" y arrendamiento a largo plazo.',
  },
];

export const PHASES_FND: PhaseItem[] = [
  {
    period: '1962–1972',
    title: '1. Fase Experimental y Biocultural',
    desc: 'Inicio como huerto orgánico en suelo arenoso mediante técnicas biodinámicas y agricultura limpia en el parque de caravanas.',
  },
  {
    period: '1972–2019',
    title: '2. Institucionalización y Expansión Técnica',
    desc: 'Creación de la Fundación Findhorn (1972). Incorporación de ecotecnologías: edificación pasiva (Eco-houses, años 80), parque eólico (Findhorn Wind Park, 1989) y depuración biológica (Living Machine, 1995).',
  },
  {
    period: '2020–Presente',
    title: '3. Reestructuración, Incendio y Crisis',
    desc: 'Pérdida de infraestructura clave por incendio en 2021 (Sanctuary y Community Centre), seguida por quiebra técnica y reestructuración en 2023, separando gestión educativa de la comunidad residencial.',
  },
];

export interface Model {
  id: ModelId;
  n: string;
  title: string;
  short: string;
  text: string;
  color: string;
  ink: string;
  appear: number;
  role: string;
  chrBadge: string;
  fndBadge: string;
  tags?: string[];
}

export const MODELS: Model[] = [
  {
    id: 'suj',
    n: '01',
    title: 'Sujetos y Delimitación Territorial',
    short: 'Delimitación 14–34 ha',
    color: COLORS.cream,
    ink: '#0a0a0a',
    appear: 0,
    role: 'Unidad de análisis equivalente · Escala intermedia',
    text: 'Comparación de dos recintos comunitarios autogestionados: Freetown Christiania en Copenhague (34 ha, urbano denso) y Ecoaldea Findhorn en Escocia (14–30 ha, rural costero).',
    chrBadge: 'Christiania · 34 ha · Urbano (1971)',
    fndBadge: 'Findhorn · 14–30 ha · Rural (1962)',
    tags: ['Christianshavn · Copenhague', 'Península Findhorn · Moray', 'Escala intermedia 14–34 ha'],
  },
  {
    id: 'esc',
    n: '02',
    title: 'Escala, Demografía y Presión Visitante',
    short: 'Escala y demografía',
    color: COLORS.water,
    ink: '#04121c',
    appear: 1,
    role: 'Población estable vs. población flotante',
    text: 'Contraste entre residentes estables y flujos anuales: ~900–1.000 residentes vs. >1.000.000 turistas/año en Christiania; ~300–450 residentes vs. 4.000–10.000 estudiantes/año en Findhorn.',
    chrBadge: '~950 estables · >1M visitas/año',
    fndBadge: '~375 estables · >7k visitas/año',
    tags: ['Murallas s. XVII y canales (34 ha)', 'Núcleo The Park y dunas (14–30 ha)'],
  },
  {
    id: 'prop',
    n: '03',
    title: 'Estructura Jurídica y Propiedad del Suelo',
    short: 'Fideicomisos y suelo',
    color: COLORS.earth,
    ink: '#1a1405',
    appear: 3,
    role: 'Tenencia colectiva vs. propiedad distribuida/mixta',
    text: 'En Christiania, propiedad colectiva mediante la Fundación Freetown Christiania (2012) con acciones comunitarias; en Findhorn, estructura mixta entre Park Ecovillage Trust (PET), Fundación y privados.',
    chrBadge: 'Fundación Christiania (2012)',
    fndBadge: 'PET + Fundación + Privados',
    tags: ['Fideicomiso colectivo', 'Tenencia mixta / distribuida'],
  },
  {
    id: 'pchr',
    n: '04',
    title: 'Periodización A · Freetown Christiania (1971–Presente)',
    short: 'Fases Christiania',
    color: COLORS.orange,
    ink: '#1f0d04',
    appear: 4,
    role: 'Delimitación histórica · Copenhague, Dinamarca',
    text: '(1) Ocupación y Ruptura (1971–1989) en cuartel de Båtmandsstræde; (2) Conflicto y Ley de Christiania (1989–2011) con tensiones en Pusher Street; (3) Normalización y Fideicomiso (2012–Presente).',
    chrBadge: '1971 Ocupación → 1989 Ley → 2012 Fundación',
    fndBadge: 'Autogobierno asambleario',
    tags: ['1971–1989 Ocupación', '1989–2011 Christianialoven', '2012–Hoy Fideicomiso'],
  },
  {
    id: 'pfnd',
    n: '05',
    title: 'Periodización B · Ecoaldea Findhorn (1962–Presente)',
    short: 'Fases Findhorn',
    color: COLORS.green,
    ink: '#04150a',
    appear: 5,
    role: 'Delimitación histórica · Moray, Escocia',
    text: '(1) Experimental y Biocultural (1962–1972) en suelo arenoso; (2) Institucionalización y Expansión Técnica (1972–2019: Eco-houses, Wind Park, Living Machine); (3) Incendio 2021 y Reestructuración 2023.',
    chrBadge: 'Transición ecológica y crisis',
    fndBadge: '1962 Huerto → 1972 Fundación → 2021/23 Crisis',
    tags: ['1962–1972 Biocultural', '1972–2019 Ecotecnologías', '2020–Hoy Reestructuración'],
  },
  {
    id: 'econ',
    n: '06',
    title: 'Enfoque 3 · Economía y Conocimiento Adaptativo',
    short: 'Enfoque 3 · Economía',
    color: COLORS.bio,
    ink: '#0a0a0a',
    appear: 6,
    role: 'Homologación de mecanismos financieros y pedagógicos',
    text: 'Homologación entre la caja común Fælleskasse, talleres de reciclaje y acciones populares en Christiania frente a los aportes comunitarios, educación holística y fideicomiso residencial en Findhorn.',
    chrBadge: 'Fælleskasse + Acciones populares',
    fndBadge: 'Aportes + Educación holística',
    tags: ['Homologación de fondos comunitarios', 'Conocimiento adaptativo'],
  },
  {
    id: 'meta',
    n: '07',
    title: 'Enfoque 5 · Infraestructuras, Metabolismo y Dependencias',
    short: 'Enfoque 5 · Metabolismo',
    color: COLORS.grey,
    ink: '#0a0a0a',
    appear: 7,
    role: 'Sistemas metabólicos internos y dependencias de redes públicas',
    text: 'Reutilización de materiales y drenaje pluvial en Christiania vs. Living Machine y parque eólico en Findhorn, reconociendo su dependencia de la red sanitaria de Copenhague y la red eléctrica escocesa.',
    chrBadge: 'Reutilización + Red Copenhague',
    fndBadge: 'Living Machine + Red Escocesa',
    tags: ['Ciclo metabólico interno', 'Dependencia de redes públicas externas'],
  },
];

export const MODEL = Object.fromEntries(MODELS.map((m) => [m.id, m])) as Record<ModelId, Model>;

export const STEP_LABELS = [
  '1.1 Casos de Estudio',
  'Escala y Demografía',
  'Planos 3D Territoriales',
  'Propiedad y Fideicomisos',
  'Periodización Christiania',
  'Periodización Findhorn',
  'Enfoque 3 · Economía',
  'Enfoque 5 · Metabolismo',
  'Matriz y Red Síntesis',
];
export const N = STEP_LABELS.length;

export const SPINE: ModelId[] = ['suj', 'esc', 'prop', 'pchr', 'pfnd', 'econ', 'meta'];
export const ACTIVE_BY_BEAT = [0, 1, 1, 2, 3, 4, 5, 6, -1];

// Anclajes georreferenciados reales sobre ambos planos 3D (Christiania y Findhorn)
export interface GeoAnchor {
  ll: LngLat;
  site: SiteKey;
  label: string;
  sub: string;
}

export const GEO: Record<string, GeoAnchor> = {
  // Christiania (Copenhague, Dinamarca — centro [12.6015, 55.6745])
  batmands: { ll: [12.5982, 55.6728], site: 'chr', label: 'Cuartel Båtmandsstræde (1971)', sub: 'Hito fundacional y ocupación civil' },
  pusher: { ll: [12.5998, 55.6736], site: 'chr', label: 'Pusher Street / Green Light', sub: 'Zona de conflicto y normalización (1989–2011)' },
  faelles: { ll: [12.5990, 55.6744], site: 'chr', label: 'Fælleskasse · Caja Común', sub: 'Fondo comunitario y Fundación Christiania (2012)' },
  maskin: { ll: [12.6012, 55.6752], site: 'chr', label: 'Maskinhallen · Reciclaje', sub: 'Reutilización de materiales y talleres autogestionados' },
  stadsgrav: { ll: [12.6048, 55.6755], site: 'chr', label: 'Murallas s. XVII y Stadsgraven', sub: '34 ha · Drenaje pluvial y canales históricos' },
  redcph: { ll: [12.5945, 55.6715], site: 'chr', label: 'Red Sanitaria Copenhague', sub: 'Dependencia de red pública municipal externa' },

  // Findhorn (Moray, Escocia — centro [-3.5910, 57.6548])
  caravan: { ll: [-3.5928, 57.6552], site: 'fnd', label: 'Huerto y Parque Caravanas (1962)', sub: 'Origen biodinámico (Caddy & Maclean)' },
  thepark: { ll: [-3.5905, 57.6545], site: 'fnd', label: 'The Park · PET & Fundación', sub: '14 ha núcleo (~30 ha anexas) · Propiedad mixta' },
  ecohouses: { ll: [-3.5882, 57.6538], site: 'fnd', label: 'Field of Dreams · Eco-houses', sub: 'Edificación pasiva y ecológica (años 80)' },
  living: { ll: [-3.5938, 57.6539], site: 'fnd', label: 'Living Machine (1995)', sub: 'Planta biológica de depuración de aguas residuales' },
  windpark: { ll: [-3.5835, 57.6522], site: 'fnd', label: 'Findhorn Wind Park (1989)', sub: 'Parque eólico comunitario (675 kW)' },
  sanctuary: { ll: [-3.5914, 57.6558], site: 'fnd', label: 'Sanctuary & CC (Incendio 2021)', sub: 'Pérdida por incendio 2021 y reestructuración 2023' },
  redscot: { ll: [-3.5985, 57.6512], site: 'fnd', label: 'Red Eléctrica Nacional Escocesa', sub: 'Dependencia de red pública externa e intercambio' },
} as const;

export type GeoId = keyof typeof GEO;

// Cuadros geográficos reales para cámara 3D y 2D
export const BOUNDS = {
  // Christiania
  chr_all: [12.5935, 55.6695, 12.6115, 55.6795] as [number, number, number, number],
  chr_core: [12.5960, 55.6712, 12.6055, 55.6768] as [number, number, number, number],
  chr_water: [12.5975, 55.6715, 12.6095, 55.6785] as [number, number, number, number],
  // Findhorn
  fnd_all: [-3.6005, 57.6505, -3.5815, 57.6590] as [number, number, number, number],
  fnd_core: [-3.5955, 57.6525, -3.5865, 57.6572] as [number, number, number, number],
  fnd_tech: [-3.5985, 57.6508, -3.5820, 57.6565] as [number, number, number, number],
};

// Ciclo de Homologación Metabólica y Económica (Enfoques 3 y 5)
export const CYCLE = [
  { id: 'captacion', label: 'Captación y Energía' },
  { id: 'fondo', label: 'Fondo Comunitario' },
  { id: 'ecotec', label: 'Proceso y Ecotecnología' },
  { id: 'reuso', label: 'Depuración y Reúso' },
  { id: 'redext', label: 'Red Pública Externa' },
];

export const CYCLE_PROPOSED = [false, false, false, false, true];
