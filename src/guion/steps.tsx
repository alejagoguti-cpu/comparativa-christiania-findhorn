/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import { C, GeoMap, Pair, Photo, FigureGround, TILE_CREDIT, type Ann, type Pt } from './kit';
import { Axo } from './Axo';
import { Ico } from './icons';
import { Ask, ABM, Bars, Big, Chk, CLD, Cols, Cycle, Energy, Flow, Layers, Metab, Net, Qs, Sankey, Scale, Timeline } from './diagrams';

export type Block = { n: string; t: string; time: string; part: string };
export const BLOCKS: Block[] = [
  { n: 'I', t: 'Apertura y tesis comparativa', time: '00:00–01:00', part: 'Contexto y evolución' },
  { n: 'II', t: 'Dos territorios, dos puntos de partida', time: '01:00–02:15', part: 'Contexto y evolución' },
  { n: 'III', t: 'Propiedad, continuidad y conflictos', time: '02:15–03:45', part: 'Contexto y evolución' },
  { n: 'IV', t: 'Evolución y crisis', time: '03:45–05:30', part: 'Contexto y evolución' },
  { n: 'V', t: 'Christiania: economía comunitaria', time: '05:30–07:00', part: 'Enfoque 3' },
  { n: 'VI', t: 'Findhorn: diversificación y vulnerabilidad', time: '07:00–08:30', part: 'Enfoque 3' },
  { n: 'VII', t: 'Conocimiento adaptativo', time: '08:30–10:00', part: 'Enfoque 3' },
  { n: 'VIII', t: 'Síntesis del enfoque 3', time: '10:00–11:30', part: 'Enfoque 3' },
  { n: 'IX', t: 'Christiania: materiales, movilidad y servicios', time: '11:30–13:00', part: 'Enfoque 5' },
  { n: 'X', t: 'Findhorn: Living Machine y energía eólica', time: '13:00–15:00', part: 'Enfoque 5' },
  { n: 'XI', t: 'El metabolismo territorial y sus límites', time: '15:00–16:15', part: 'Enfoque 5' },
  { n: 'XII', t: 'Contraste y transferencia a Kennedy', time: '16:15–17:30', part: 'Enfoque 5' },
  { n: 'XIII', t: 'Cierre: una hipótesis para el modelamiento', time: '17:30–18:30', part: 'Enfoque 5' },
];

export type Step = { b: number; t: string; d?: string; v: () => ReactNode; src?: string; nota?: string; scene?: string; geo?: [number, number, number, number] };

/* ---------- coordenadas y referencias ---------- */
const CHR_BOX: [number, number, number, number] = [12.5925, 55.6697, 12.6170, 55.6812];
const CPH_BOX: [number, number, number, number] = [12.552, 55.661, 12.648, 55.694];
const FND_BOX: [number, number, number, number] = [-3.5990, 57.6482, -3.5752, 57.6588];
const FND_PEN: [number, number, number, number] = [-3.665, 57.628, -3.535, 57.680];
const EU_BOX: [number, number, number, number] = [-7.5, 52.8, 15.8, 59.6];
const KEN_BOX: [number, number, number, number] = [-74.182, 4.614, -74.138, 4.660];
const CHR_ID = 250989045;
const PUSHER = [88456634, 1530565274];
const CPH: Pt = [12.6004, 55.6745];
const FND: Pt = [-3.5905, 57.6525];
const WIND: Pt[] = [[-3.5803307, 57.6574317], [-3.5794375, 57.6566052], [-3.5779864, 57.6559479]];
const LM: Pt = [-3.5880, 57.6503];
const CARAVAN: Pt = [-3.59349, 57.65225];
const CORA: Pt = [-74.15916, 4.63069];
const MPAZ: Pt = [-74.15796, 4.63664];
const PBON: Pt = [-74.16070, 4.63942];

const OSM = '© colaboradores de OpenStreetMap (ODbL)';
const sat = `${OSM}. ${TILE_CREDIT.sat}`;
const gris = `${OSM}. ${TILE_CREDIT.gris}`;
const g = (x: number, y: number): Pt => [x / 1400, y / 924]; // plano de Gedde (vista 1400 px)
const k = (x: number, y: number): Pt => [x / 3200, y / 1509]; // plano de subáreas 2018

const SUBI: Pt[] = [k(460, 88), k(720, 151), k(806, 241), k(955, 262), k(928, 567), k(994, 693), k(1050, 740), k(985, 777), k(961, 719), k(646, 579), k(642, 523), k(430, 338), k(406, 361)];
const chrBoundary = (d = 0.3, c = C.chr): Ann => ({ t: 'feat', kind: 'l', id: CHR_ID, c, w: 0.42, d, fill: 'rgba(196,71,43,.10)' });

/* ---------- pasos ---------- */
export const STEPS: Step[] = [
  /* ===== I ===== */
  {
    b: 0, geo: EU_BOX, t: 'Dos comunidades, dos maneras de organizar la vida colectiva', d: 'Freetown Christiania (Copenhague, Dinamarca) y Findhorn (Moray, Escocia), a unos 1.010 km de distancia.',
    v: () => <GeoMap bbox={EU_BOX} base="sat" dim={0.15} anns={[
      { t: 'arrow', from: CPH, to: FND, c: '#fff', bend: -0.12, d: 1.4, w: 0.8 },
      { t: 'ring', at: CPH, r: 1.6, c: C.chr, pulse: true, d: 0.3 },
      { t: 'tag', at: CPH, text: 'Freetown Christiania\nCopenhague, Dinamarca', c: C.chr, dx: 3, dy: 3, d: 0.6 },
      { t: 'ring', at: FND, r: 1.6, c: C.fnd, pulse: true, d: 0.9 },
      { t: 'tag', at: FND, text: 'Findhorn\nMoray, Escocia', c: C.fnd, dx: -3, dy: -3, d: 1.1 },
      { t: 'text', at: [4.8, 57.1], text: '≈ 1.010 km', c: '#fff', d: 2.2, size: 1.2 },
    ]} />,
    src: TILE_CREDIT.sat,
    nota: 'Hoy vamos a comparar dos experiencias comunitarias que han buscado organizar la vida colectiva de una manera diferente a los modelos urbanos convencionales: Freetown Christiania, en Copenhague, Dinamarca, y Findhorn, una comunidad ecológica ubicada en Moray, Escocia.',
  },
  {
    b: 0, geo: CPH_BOX, t: 'Christiania nace dentro de una ciudad consolidada', d: 'Ocupación de un antiguo recinto militar en Christianshavn, en pleno tejido urbano de Copenhague.',
    v: () => <GeoMap site="christiania" bbox={CPH_BOX} base="sat" dim={0.25} anns={[
      chrBoundary(0.3),
      { t: 'tag', at: [12.6095, 55.6762], text: 'Christiania · 34 ha', c: C.chr, dx: 4, dy: -4, d: 1.4 },
      { t: 'text', at: [12.585, 55.676], text: 'Centro de Copenhague', c: 'rgba(255,255,255,0.7)', d: 2 },
      { t: 'scale', at: [12.557, 55.6625], meters: 1000, d: 2.4 },
    ]} />,
    src: sat,
    nota: 'Aunque ambas comparten ideas de cooperación, autogestión y sostenibilidad, surgieron en contextos diferentes. Christiania nació de la ocupación de un antiguo recinto militar en una ciudad consolidada;',
  },
  {
    b: 0, t: 'Findhorn comienza en un entorno costero', d: 'La península entre la bahía de Findhorn y el estuario de Moray: suelo arenoso, dunas y baja densidad.',
    v: () => <GeoMap site="findhorn" bbox={FND_PEN} base="sat" dim={0.15} anns={[
      { t: 'ring', at: FND, r: 1.8, c: C.fnd, pulse: true, d: 0.3 },
      { t: 'tag', at: FND, text: 'The Park · ecoaldea de Findhorn', c: C.fnd, dx: 4, dy: 4, d: 0.6 },
      { t: 'text', at: [-3.605, 57.645], text: 'Bahía de Findhorn', c: 'rgba(255,255,255,0.65)', d: 1.2 },
      { t: 'text', at: [-3.575, 57.672], text: 'Estuario de Moray', c: 'rgba(255,255,255,0.65)', d: 1.6 },
      { t: 'scale', at: [-3.655, 57.631], meters: 1000, d: 2 },
    ]} />,
    src: sat,
    nota: 'Findhorn comenzó como una experiencia comunitaria en un entorno costero, donde sus habitantes buscaron desarrollar formas de vida más cercanas a los ciclos naturales.',
  },
  {
    b: 0, t: 'Tesis: la continuidad no depende solo de los ideales', d: 'Depende de cuatro capacidades que vamos a rastrear en ambos casos.',
    v: () => <Flow title="Lo que sostiene una comunidad en el tiempo" items={[
      { h: 'Organizar recursos económicos', p: 'Quién aporta, quién paga y qué se reinvierte.', c: C.chr },
      { h: 'Transmitir conocimientos', p: 'Aprender haciendo, enseñar y documentar.', c: C.fnd },
      { h: 'Mantener infraestructuras', p: 'Edificios, redes, energía y agua.', c: C.ken },
      { h: 'Gestionar dependencias del exterior', p: 'Estado, mercado, redes públicas y visitantes.', c: C.hl },
    ]} />,
    nota: 'Nuestra tesis es que la continuidad de estas comunidades no depende únicamente de sus ideales, sino de su capacidad para organizar recursos económicos, transmitir conocimientos, mantener infraestructuras y gestionar sus dependencias del exterior.',
  },
  {
    b: 0, t: 'No preguntamos si son sostenibles, sino cómo se sostienen', d: '',
    v: () => <Ask title="Tres preguntas que guían la comparación" items={[
      { q: '¿Cómo se sostienen?', c: C.fnd, a: 'Con acuerdos sobre el suelo, aportes a una caja común e infraestructura que ellos mismos mantienen.', v: () => <Photo img="chr_plano_subareas_2018" crop={[250, 20, 1500, 1000]} anns={[
        { t: 'line', pts: SUBI, close: true, c: C.fnd, w: 0.5, d: 0.3, fill: 'rgba(79,179,143,.22)' },
        { t: 'tag', at: k(700, 380), text: 'Suelo comprado por la Fundación\n(acuerdo de 2012)', c: C.fnd, dx: 10, dy: 8, d: 1 },
      ]} /> },
      { q: '¿Qué problemas enfrentan?', c: C.chr, a: 'Comercio ilegal y violencia en Christiania; crisis financiera e incendio en Findhorn.', v: () => <Photo img="chr_pusher2024" crop={[0, 600, 1600, 1531]} anns={[
        { t: 'tag', at: [0.55, 0.75], text: 'Pusher Street (abril 2024)', c: C.chr, dx: 4, dy: -4, d: 1.0 },
      ]} /> },
      { q: '¿Cuáles son los límites de su autonomía?', c: C.ken, a: 'Dependen de redes públicas, del Estado y del mercado inmobiliario que los rodea.', v: () => <GeoMap site="christiania" bbox={[12.578, 55.664, 12.628, 55.687]} base="sat" dim={0.35} anns={[
        chrBoundary(0.2),
        { t: 'arrow', from: [12.6050, 55.6655], to: [12.6045, 55.6705], c: '#9fd3ff', d: 0.8 },
        { t: 'tag', at: [12.6050, 55.6655], text: 'Agua, energía y saneamiento de la ciudad', c: '#9fd3ff', d: 1.1 },
        { t: 'arrow', from: [12.582, 55.6805], to: [12.5965, 55.6760], c: '#fff', d: 1.4 },
        { t: 'tag', at: [12.582, 55.6805], text: 'Estado', c: '#fff', d: 1.7 },
        { t: 'arrow', from: [12.6175, 55.6855], to: [12.6075, 55.6790], c: C.hl, d: 2 },
        { t: 'tag', at: [12.6175, 55.6855], text: 'Mercado inmobiliario', c: C.hl, d: 2.3 },
      ]} /> },
    ]} />,
    src: `Plano: Bygningsstyrelsen (2018). Foto: Penguin, CC BY-SA 4.0. Mapa: ${sat}`,
    nota: 'Por eso, más que preguntar si son completamente sostenibles, queremos entender cómo se sostienen, qué problemas enfrentan y cuáles son los límites de su autonomía.',
  },

  /* ===== II ===== */
  {
    b: 1, t: 'Un territorio militar: la fortificación de Christianshavn', d: 'Plano de 1751. Las murallas y bastiones del siglo XVII forman hoy el borde de Christiania.',
    v: () => <Photo img="chr_gedde1751" mcrop={[700, 700, 1900, 1148]} anns={[
      { t: 'line', pts: [g(470, 690), g(540, 735), g(600, 760), g(660, 770), g(720, 775), g(790, 772), g(860, 765), g(930, 740), g(1000, 705), g(1070, 665), g(1130, 625), g(1190, 590), g(1240, 560)], c: C.chr, w: 0.45, smooth: true, d: 0.4 },
      { t: 'tag', at: g(860, 765), text: 'Muralla y bastiones (s. XVII)\nhoy dentro de Christiania', c: C.chr, dx: -2, dy: -12, d: 1.6 },
      { t: 'text', at: g(360, 838), text: 'Amager', c: C.ink, d: 2.2 },
    ]} />,
    src: 'S. C. Gedde, Christianshavn (1751), Det Kgl. Bibliotek vía Wikimedia Commons, dominio público.',
    nota: 'Christiania se originó en 1971, cuando habitantes de Copenhague ocuparon unos antiguos terrenos militares abandonados',
  },
  {
    b: 1, t: '1971: del cuartel abandonado a una comunidad con reglas propias', d: 'Cuartel de Bådsmandsstræde hacia 1840 y el letrero de Christiania en octubre de 1971.',
    v: () => <Pair items={[
      { img: 'chr_kaserne1840', cap: <><b>Bådsmandsstrædes Kaserne, c. 1840.</b> Dominio público.</>, anns: [{ t: 'tag', at: [0.47, 0.22], text: 'Cuartel militar original', c: C.chr, dy: -2, d: 1.0 }] },
      { img: 'chr_1971', cap: <><b>Letrero de Christiania, octubre de 1971.</b> Utrecht1950, CC BY-SA 4.0.</>, anns: [{ t: 'tag', at: [0.35, 0.28], text: 'Entrada y letrero de Christiania (1971)', c: C.chr, dy: -2, d: 1.2 }] },
    ]} />,
    nota: '…y comenzaron a desarrollar una comunidad con reglas propias.',
  },
  {
    b: 1, t: 'Transformación progresiva: reutilizar, autoconstruir, compartir', d: 'Axonometría de las huellas reales de Christiania: edificios militares reutilizados frente a casas autoconstruidas sobre la muralla.',
    v: () => <Axo site="christiania" center={[12.6035, 55.6745]} radius={620} boundary={CHR_ID} marks={[
      { at: [12.5997, 55.6735], text: 'Pusher Street', c: C.hl },
      { at: [12.600523, 55.674664], text: 'Den Grå Hal (antigua nave militar)', c: C.chr, h: 70 },
      { at: [12.601063, 55.672739], text: 'Den Grønne Genbrugshal (reciclaje)', c: C.chr, h: 45 },
      { at: [12.598901, 55.674791], text: 'Entrada · Prinsessegade', c: C.ink, h: 38 },
      { at: [12.6058, 55.6728], text: 'Stadsgraven (foso)', c: C.ken, h: 30 },
      { at: [12.6085, 55.6768], text: 'Casas sobre la muralla', c: C.fnd, h: 50 },
    ]} groups={[
      { name: 'Grandes naves reutilizadas (talleres, cultura)', c: C.chr, match: (f) => /Grå Hal|Genbrugshal|Operaen|Hal C|Fabrikken|Multihuset|Tinghuset|Fælleshus|Børnebyen|Fredens Ark/i.test(f[1]) },
      { name: 'Casas autoconstruidas en la muralla (Dyssen)', c: C.fnd, match: (_f, [x, y]) => x > 250 && y > -250 && y < 650 },
    ]} />,
    src: `${OSM}. Clasificación aproximada por nombre y posición, elaborada para esta presentación.`,
    nota: 'El espacio se transformó progresivamente mediante la reutilización de edificios existentes, la autoconstrucción, los talleres, los espacios culturales y las áreas comunes.',
  },
  {
    b: 1, t: 'Reutilización y autoconstrucción, vistas en el lugar', d: '',
    v: () => <Pair items={[
      { img: 'chr_grahal', cap: <><b>Den Grå Hal:</b> antigua nave militar convertida en espacio cultural. Jens Cederskjold, CC BY 3.0.</> },
      { img: 'chr_stadsgraven_casas', cap: <><b>Casas autoconstruidas frente al foso de Stadsgraven.</b> Stig Nygaard, CC BY 2.0.</> },
    ]} />,
    nota: '(Ejemplos: espacios culturales en edificios militares y viviendas autoconstruidas.)',
  },
  {
    b: 1, t: 'Su condición urbana es fundamental', d: 'Christiania se relaciona a diario con el mercado inmobiliario, los visitantes, el Estado y las redes de la ciudad.',
    v: () => <GeoMap site="christiania" bbox={[12.575, 55.664, 12.630, 55.688]} base="sat" dim={0.35} anns={[
      chrBoundary(0.2),
      { t: 'arrow', from: [12.585, 55.6745], to: [12.5985, 55.6740], c: C.hl, d: 1, flow: true },
      { t: 'tag', at: [12.585, 55.6745], text: 'Visitantes', c: C.hl, dx: -1, dy: 0.1, d: 1.2 },
      { t: 'arrow', from: [12.6175, 55.6870], to: [12.6075, 55.6790], c: '#fff', d: 1.6 },
      { t: 'tag', at: [12.6175, 55.6870], text: 'Mercado inmobiliario\n(Holmen, Christianshavn)', c: '#fff', dark: true, d: 1.8 },
      { t: 'arrow', from: [12.580, 55.6810], to: [12.5965, 55.6760], c: '#fff', d: 2.2 },
      { t: 'tag', at: [12.580, 55.6810], text: 'Instituciones del Estado', c: '#fff', dark: true, d: 2.4 },
      { t: 'arrow', from: [12.6050, 55.6655], to: [12.6045, 55.6705], c: '#9fd3ff', d: 2.8 },
      { t: 'tag', at: [12.6050, 55.6655], text: 'Redes de agua, energía\ny saneamiento de la ciudad', c: '#9fd3ff', dark: true, d: 3 },
    ]} />,
    src: sat,
    nota: 'Su condición urbana es fundamental: Christiania se encuentra dentro de Copenhague y mantiene una relación constante con el mercado inmobiliario, los visitantes, las instituciones estatales y las redes de servicios de la ciudad.',
  },
  {
    b: 1, t: 'Findhorn, 1962: Eileen y Peter Caddy y Dorothy Maclean', d: 'La caravana original sigue en The Park; el mapa marca su ubicación según la geolocalización de la foto.',
    v: () => <div className="pair" style={{ ['--n' as any]: 2 }}>
      <figure className="po"><div style={{ minHeight: 0 }}><Photo img="fnd_caravana" anns={[{ t: 'tag', at: [0.45, 0.35], text: 'Caravana original (1962)', c: C.fnd, dy: -2, d: 0.8 }]} /></div><figcaption><b>La caravana original (1962).</b> Anne Burgess, CC BY-SA 2.0.</figcaption></figure>
      <figure className="po" style={{ animationDelay: '.3s' }}><div style={{ minHeight: 0 }}><GeoMap site="findhorn" bbox={[-3.5990, 57.6495, -3.5860, 57.6555]} base="sat" plan dim={0.15} anns={[
        { t: 'ring', at: CARAVAN, r: 1.6, c: C.fnd, pulse: true, d: 0.8 },
        { t: 'tag', at: CARAVAN, text: '1962 · punto de partida', c: C.fnd, dx: 4, dy: -4, d: 1.4 },
        { t: 'scale', at: [-3.5985, 57.6498], meters: 100, d: 1.8 },
      ]} /></div><figcaption><b>Ubicación en The Park.</b> {sat}</figcaption></figure>
    </div>,
    src: 'Fotografía: Anne Burgess (geograph.org.uk), CC BY-SA 2.0.',
    nota: 'Findhorn, por su parte, comenzó en 1962 con Eileen y Peter Caddy y Dorothy Maclean.',
  },
  {
    b: 1, t: 'Suelo arenoso y construcción de menor impacto', d: 'La comunidad experimentó con cultivo orgánico, cooperación y técnicas como las casas de barricas de whisky.',
    v: () => <Pair items={[
      { img: 'fnd_dunas', cap: <><b>Dunas junto a la bahía de Findhorn.</b> valenta, CC BY-SA 2.0.</> },
      { img: 'fnd_barril_original', cap: <><b>La primera casa de barril (duelas de barricas recicladas).</b> Julian Paren, CC BY-SA 2.0.</> },
    ]} />,
    nota: 'La experiencia se desarrolló en un entorno costero de suelo arenoso, donde la comunidad experimentó con el cultivo orgánico, la cooperación y formas de construcción de menor impacto ambiental.',
  },
  {
    b: 1, t: 'Con el tiempo: vivienda ecológica, educación, viento y agua', d: 'Plano de The Park con elementos reales de OpenStreetMap.',
    v: () => <GeoMap site="findhorn" bbox={FND_BOX} base="gris" plan anns={[
      { t: 'feat', kind: 'b', name: 'West Whins|Woodside', c: C.fnd, fill: 'rgba(46,107,87,.55)', d: 0.3 },
      { t: 'tag', at: [-3.5935, 57.6545], text: 'Viviendas ecológicas\n(West Whins)', c: C.fnd, dx: -5, dy: -3, d: 0.9 },
      { t: 'feat', kind: 'b', id: 312671080, c: C.ken, fill: 'rgba(39,93,155,.6)', d: 1.3 },
      { t: 'tag', at: [-3.5940, 57.6530], text: 'Universal Hall\n(programas educativos)', c: C.ken, dx: -6, dy: 4, d: 1.7 },
      ...WIND.map((p, i) => ({ t: 'ring', at: p, r: 1.2, c: C.hl, d: 2.1 + i * 0.15 } as Ann)),
      { t: 'tag', at: WIND[0], text: 'Aerogeneradores', c: C.hl, dx: -4, dy: -3, d: 2.6 },
      { t: 'ring', at: LM, r: 1.5, c: C.chr, pulse: true, d: 3 },
      { t: 'tag', at: LM, text: 'Living Machine (ubicación aprox.)\ntratamiento biológico de aguas', c: C.chr, dx: 4, dy: 3, d: 3.3 },
      { t: 'scale', at: [-3.598, 57.6486], meters: 200, d: 3.6 },
    ]} />,
    src: `${gris}. Ubicación de la Living Machine según la geolocalización de fotografías de Julian Paren (geograph.org.uk).`,
    nota: 'Con el tiempo, Findhorn incorporó viviendas ecológicas, programas educativos, generación eólica y sistemas de tratamiento biológico de aguas residuales.',
  },
  {
    b: 1, t: 'The Park en tres dimensiones', d: 'Huellas reales de OpenStreetMap: viviendas ecológicas, el centro educativo y los aerogeneradores.',
    v: () => <Axo site="findhorn" center={[-3.5872, 57.6542]} radius={600} zoom0={1.45} turbines={WIND} marks={[
      { at: WIND[1], text: 'Aerogeneradores (750 kW)', c: C.hl, h: 70 },
      { at: [-3.593361, 57.653168], text: 'Universal Hall (educación)', c: C.ken, h: 55 },
      { at: [-3.5948, 57.6541], text: 'West Whins (ecoviviendas)', c: C.fnd, h: 45 },
      { at: LM, text: 'Living Machine (aprox.)', c: C.chr, h: 40 },
      { at: [-3.592789, 57.6521], text: 'Community Centre', c: C.ink, h: 35 },
      { at: CARAVAN, text: 'Caravana original (1962)', c: C.fnd, h: 28 },
    ]} groups={[
      { name: 'Ecoviviendas (West Whins, Woodside)', c: C.fnd, match: (f) => /West Whins|Woodside/i.test(f[1]) },
      { name: 'Equipamientos comunitarios', c: C.ken, match: (f) => /Universal Hall|Community Centre|Hive|Moray Art/i.test(f[1]) },
    ]} />,
    src: `${OSM}. Aerogeneradores modelados en su posición OSM; altura ilustrativa.`,
    nota: '(Vista 3D de The Park para ubicar los elementos que se acaban de nombrar.)',
  },
  {
    b: 1, t: 'Transformar un tejido existente frente a adaptarse al lugar', d: 'Los dos asentamientos a la misma escala: el borde de Christiania sobre la trama urbana; The Park disperso sobre el terreno.',
    v: () => <FigureGround items={[
      { site: 'christiania', center: [12.6035, 55.6745], label: 'Christiania', c: C.chr, boundary: CHR_ID },
      { site: 'findhorn', center: [-3.5885, 57.6535], label: 'Findhorn, The Park', c: C.fnd },
    ]} />,
    src: OSM,
    nota: 'La diferencia inicial es clara: mientras Christiania transforma un territorio urbano preexistente, Findhorn desarrolla una comunidad que busca adaptar su asentamiento a las condiciones ecológicas del lugar.',
  },

  /* ===== III ===== */
  {
    b: 2, scene: 'subareas', t: '2012: la Fundación compra una parte del territorio', d: 'Plano oficial: la subárea I (7,4 ha, fuera del monumento protegido) pasa a la Fundación Freetown Christiania.',
    v: () => <Photo img="chr_plano_subareas_2018" mcrop={[250, 20, 1150, 1000]} anns={[
      { t: 'line', pts: [k(460, 88), k(720, 151), k(806, 241), k(955, 262), k(928, 567), k(994, 693), k(1050, 740), k(985, 777), k(961, 719), k(646, 579), k(642, 523), k(430, 338), k(406, 361)], close: true, c: C.chr, w: 0.6, d: 0.3, fill: 'rgba(196,71,43,.18)' },
      { t: 'tag', at: k(700, 380), text: 'Subárea I · comprada\n74.000 m²: suelo y edificios', c: C.chr, dx: 14, dy: 10, d: 1.6 },
      { t: 'box', a: k(2470, 1262), b: k(3130, 1302), c: C.chr, d: 2.4 },
    ]} />,
    src: 'Bygningsstyrelsen (18.04.2018), plano de subáreas, publicado por Københavns Kommune (2022). Datos del acuerdo: Folketinget, Aktstykke 89 (2012).',
    nota: 'La propiedad del suelo es decisiva para entender ambos casos. En Christiania, décadas de conflicto con el Estado llevaron a una solución institucional: en 2012 se formalizó la compra de parte del territorio por medio de la Fundación Freetown Christiania,',
  },
  {
    b: 2, scene: 'subareas', t: 'El resto se arrienda: la muralla sigue siendo del Estado', d: 'Subáreas II y III sobre el monumento protegido: la Fundación arrienda el suelo y parte de los edificios.',
    v: () => <Photo img="chr_plano_subareas_2018" anns={[
      { t: 'line', pts: [k(460, 88), k(720, 151), k(806, 241), k(955, 262), k(928, 567), k(994, 693), k(1050, 740), k(985, 777), k(961, 719), k(646, 579), k(642, 523), k(430, 338), k(406, 361)], close: true, c: C.chr, w: 0.35, d: 0, fill: 'rgba(196,71,43,.12)' },
      { t: 'ring', at: k(650, 660), r: 2.6, c: C.ken, d: 0.4 },
      { t: 'tag', at: k(650, 660), text: 'Subárea II · 41.000 m²\ncompra edificios, arrienda suelo', c: C.ken, dx: 3, dy: 9, d: 1 },
      { t: 'ring', at: k(1810, 1040), r: 3, c: C.fnd, d: 1.5 },
      { t: 'tag', at: k(1810, 1040), text: 'Subárea III · 377.200 m²\nincluye el foso; arrendada', c: C.fnd, dx: 8, dy: -9, d: 2 },
      { t: 'line', pts: [k(250, 300), k(560, 560), k(900, 700), k(1300, 820), k(1800, 930), k(2300, 980), k(2750, 860), k(2950, 700)], c: C.hl, w: 0.45, smooth: true, d: 2.6 },
    ]} />,
    src: 'Bygningsstyrelsen (2018), en Københavns Kommune (2022). Acuerdo del 22 de junio de 2011 entre el Estado y Christiania.',
    nota: '…junto con acuerdos de arrendamiento y obligaciones sobre los terrenos y edificios restantes.',
  },
  {
    b: 2, t: 'Proteger la continuidad tuvo un costo', d: 'La compra limitó la especulación, pero creó deudas, arriendos y deberes de mantenimiento.',
    v: () => <Chk n={4} items={[
      { k: 'PRECIO', h: '76,2 millones de coronas', p: 'Valor acordado por suelo y edificios de la subárea I.', c: C.chr },
      { k: 'JULIO DE 2012', h: 'Primer pago de 51,8 millones', p: 'Financiado con hipoteca y la venta de “acciones” de Christiania.', c: C.chr },
      { k: 'CADA AÑO', h: 'Arriendo de unos 6 millones', p: 'Por el suelo y los edificios de la muralla protegida.', c: C.ken },
      { k: 'OBLIGACIÓN', h: 'Recuperar y mantener', p: 'Áreas comunes, vías, alumbrado y redes internas pasan a la Fundación.', c: C.fnd },
    ]} />,
    src: 'The Copenhagen Post (2011, 2012); Folketinget, Aktstykke 89 (2012); acuerdo de 22.06.2011 (Socialstyrelsen).',
    nota: 'El objetivo fue proteger la continuidad de la comunidad y limitar la especulación inmobiliaria. Sin embargo, esta solución también implicó asumir compromisos económicos y responsabilidades de mantenimiento.',
  },
  {
    b: 2, t: 'Findhorn: una organización territorial más diversa', d: 'Varias entidades con funciones y propiedades distintas, no una sola institución.',
    v: () => <Net center={{ h: 'Comunidad\nresidencial', c: C.fnd }} nodes={[
      { h: 'Findhorn Foundation', p: 'fideicomiso educativo (1972–2023)', c: C.chr },
      { h: 'Park Ecovillage Trust', p: 'fideicomiso comunitario del lugar', c: C.fnd },
      { h: 'New Findhorn Association', p: 'asociación de residentes', c: C.ken },
      { h: 'Findhorn Wind Park', p: 'empresa del parque eólico', c: C.hl },
      { h: 'Biomatrix', p: 'opera la Living Machine', c: C.ken },
      { h: 'Propietarios privados', p: 'viviendas y negocios', c: C.mute },
    ]} links={[[0, 1, 'intereses distintos']]} />,
    src: 'Findhorn Foundation Trust (findhorn.org); Celebrating One Incredible Family (2024); Wikipedia: Findhorn Ecovillage.',
    nota: 'En Findhorn, la organización territorial es más diversa. La comunidad residencial, las entidades educativas, los fideicomisos y las organizaciones de inversión no son necesariamente una sola institución. Esta diversidad permitió desarrollar distintos proyectos, pero también hizo importante distinguir entre los intereses de los residentes y las decisiones de las organizaciones propietarias o administradoras.',
  },
  {
    b: 2, t: 'Autonomía no es ausencia de reglas', d: 'Tres preguntas que toda comunidad debe resolver para permanecer.',
    v: () => <Ask title="Tres preguntas para permanecer" items={[
      { q: '¿Quién controla el suelo?', c: C.chr, a: 'Christiania: la Fundación compra la subárea I y arrienda el resto al Estado. Findhorn: varias entidades y propietarios privados.', v: () => <Photo img="chr_plano_subareas_2018" anns={[
        { t: 'line', pts: SUBI, close: true, c: C.chr, w: 0.6, d: 0.3, fill: 'rgba(224,96,63,.2)' },
        { t: 'tag', at: k(700, 380), text: 'I · comprada', c: C.chr, dx: 10, dy: 6, d: 0.8 },
        { t: 'tag', at: k(650, 660), text: 'II · edificios comprados, suelo arrendado', c: C.ken, dx: 4, dy: 9, d: 1.2 },
        { t: 'tag', at: k(1810, 1040), text: 'III · arrendada al Estado', c: C.fnd, dx: 6, dy: -8, d: 1.6 },
      ]} /> },
      { q: '¿Quién paga las obligaciones?', c: C.hl, a: 'Christiania: residentes y negocios mediante la caja común, más hipoteca y arriendo. Findhorn: programas, visitantes, donaciones y servicios.', v: () => <Sankey sources={[{ h: 'Residentes', v: 5, c: C.chr }, { h: 'Negocios y talleres', v: 3, c: C.chr }, { h: 'Espacios culturales', v: 2, c: C.chr }]} mid={{ h: 'Caja común', c: '#b07d0c' }} targets={[{ h: 'Servicios comunes', v: 3.5, c: C.fnd }, { h: 'Mantenimiento', v: 3, c: C.ken }, { h: 'Hipoteca y arriendo', v: 3.5, c: C.ink }]} /> },
      { q: '¿Quién decide sobre los bienes comunes?', c: C.fnd, a: 'Christiania: asambleas y la Fundación, dentro de la ley danesa. Findhorn: las juntas de cada entidad y la asociación de residentes.', v: () => <Net center={{ h: 'Comunidad\nresidencial', c: C.fnd }} nodes={[
        { h: 'Findhorn Foundation', p: 'fideicomiso educativo', c: C.chr }, { h: 'Park Ecovillage Trust', p: 'fideicomiso del lugar', c: C.fnd },
        { h: 'New Findhorn Association', p: 'residentes', c: C.ken }, { h: 'Wind Park', p: 'energía', c: C.hl }, { h: 'Propietarios', p: 'privados', c: C.mute },
      ]} /> },
    ]} />,
    src: 'Plano: Bygningsstyrelsen (2018). Esquemas cualitativos elaborados para esta presentación.',
    nota: 'Los dos casos muestran que la autonomía no significa ausencia de reglas o compromisos. Para permanecer en el tiempo, una comunidad necesita resolver quién controla el suelo, quién paga las obligaciones y quién toma las decisiones sobre los bienes comunes.',
  },

  /* ===== IV ===== */
  {
    b: 3, t: 'Christiania en tres momentos', d: '',
    v: () => <Timeline phases={[{ t: 'Ocupación y experimentación', c: C.chr, span: 1 }, { t: 'Negociación y conflicto jurídico', c: C.ink, span: 2 }, { t: 'Formalización', c: C.fnd, span: 2 }]} events={[
      { y: '1971', h: 'Ocupación del cuartel', p: 'Se proclama la “ciudad libre”.', c: C.chr },
      { y: '1989', h: 'Ley de Christiania', p: 'Marco legal especial para el área.', c: C.ink },
      { y: '2004', h: 'Reforma de la ley', p: 'El Estado impulsa la “normalización”.', c: C.ink },
      { y: '2011', h: 'Acuerdo con el Estado', p: 'Compra y arriendos por subáreas.', c: C.fnd },
      { y: '2012', h: 'La Fundación toma posesión', p: '1 de julio de 2012.', c: C.fnd },
    ]} />,
    src: 'Coppola y Vanolo (2015), Urban Studies 52(6); lex.dk, “Christiania”.',
    nota: 'En Christiania podemos reconocer tres grandes momentos. Primero, la ocupación y experimentación social iniciada en 1971. Segundo, décadas de negociación y conflicto jurídico con el Estado. Y tercero, la formalización de acuerdos sobre la propiedad y la administración del territorio desde 2012.',
  },
  {
    b: 3, t: '2024: la comunidad interviene Pusher Street', d: 'Una calle de unos 100 metros concentraba el comercio ilegal de cannabis y la violencia asociada.',
    v: () => <GeoMap site="christiania" bbox={[12.5960, 55.6718, 12.6050, 55.6762]} base="sat" plan dim={0.3} anns={[
      chrBoundary(0, C.chr),
      { t: 'feat', kind: 'r', id: PUSHER, c: C.hl, w: 0.9, d: 0.6 },
      { t: 'tag', at: [12.5996, 55.6737], text: 'Pusher Street', c: C.hl, dx: -6, dy: -5, d: 1.8 },
      { t: 'feat', kind: 'r', name: '^Prinsessegade$', c: '#fff', w: 0.45, d: 1.2 },
      { t: 'tag', at: [12.5978, 55.6744], text: 'Entrada por Prinsessegade', c: '#fff', dark: true, dx: -3, dy: 4, d: 2.3 },
      { t: 'scale', at: [12.5965, 55.6721], meters: 100, d: 2.6 },
    ]} />,
    src: sat,
    nota: 'Un acontecimiento reciente fue la decisión comunitaria de intervenir Pusher Street en 2024,',
  },
  {
    b: 3, t: '6 de abril de 2024: se levantan los adoquines', d: 'Un gesto para recuperar el espacio frente al comercio ilegal y la violencia.',
    v: () => <Pair items={[
      { img: 'chr_pusher2024', cap: <><b>Pusher Street, abril de 2024.</b> Penguin, CC BY-SA 4.0.</>, anns: [{ t: 'tag', at: [0.55, 0.72], text: 'Pusher Street (adoquines levantados)', c: C.hl, dy: -4, d: 1.2 }] },
      { img: 'chr_entrada', cap: <><b>Entrada principal de Christiania.</b> Franklin Heijnen, CC BY-SA 2.0.</> },
    ]} />,
    src: 'The Copenhagen Post (6.4.2024); AP (5.4.2024).',
    nota: '…en un intento de recuperar ese espacio frente a los problemas asociados al comercio ilegal de drogas y la violencia.',
  },
  {
    b: 3, t: 'Findhorn: de la experimentación a la institución', d: '',
    v: () => <Timeline phases={[{ t: 'Experimental', c: C.fnd, span: 1 }, { t: 'Institucionalización y expansión técnica', c: C.ink, span: 4 }]} events={[
      { y: '1962', h: 'Caravana y huerto', p: 'Caddy y Maclean.', c: C.fnd },
      { y: '1972', h: 'Findhorn Foundation', p: 'Registro como fideicomiso.', c: C.ink },
      { y: '1980s', h: 'Ecoaldea', p: 'Primeras viviendas ecológicas.', c: C.ink },
      { y: '1989', h: 'Aerogenerador “Moya”', p: '75 kW.', c: C.ink },
      { y: '1995', h: 'Living Machine', p: 'La primera de Europa.', c: C.ink },
      { y: '2006', h: 'Parque eólico', p: '750 kW en total.', c: C.ink },
    ]} />,
    src: 'Findhorn Foundation Trust; Celebrating One Incredible Family (2015, 2024); Wikipedia: Findhorn Ecovillage.',
    nota: 'Findhorn también pasó de una etapa experimental a otra de institucionalización. Sus iniciativas ambientales y educativas ampliaron su alcance, pero también generaron una estructura organizativa y financiera que debía sostenerse.',
  },
  {
    b: 3, t: '12 de abril de 2021: el incendio del Sanctuary y el Community Centre', d: 'Dos espacios centrales de la vida comunitaria se perdieron en un incendio provocado.',
    v: () => <div className="pair" style={{ ['--n' as any]: 2 }}>
      <figure className="po"><div style={{ minHeight: 0 }}><Photo img="fnd_communitycentre" anns={[{ t: 'tag', at: [0.6, 0.35], text: 'Community Centre (antes del incendio)', c: C.chr, dy: -3, d: 1.2 }]} /></div><figcaption><b>Community Centre.</b> Anne Burgess, CC BY-SA 2.0.</figcaption></figure>
      <figure className="po" style={{ animationDelay: '.3s' }}><div style={{ minHeight: 0 }}><GeoMap site="findhorn" bbox={[-3.5955, 57.6505, -3.5895, 57.6540]} base="sat" plan dim={0.2} anns={[
        { t: 'feat', kind: 'b', id: 1225211284, c: C.chr, fill: 'rgba(196,71,43,.6)', w: 0.4, d: 0.9 },
        { t: 'tag', at: [-3.5928, 57.6522], text: 'Community Centre', c: C.chr, dx: 4, dy: -4, d: 1.8 },
        { t: 'ring', at: CARAVAN, r: 1.4, c: C.fnd, d: 2.3 },
        { t: 'tag', at: CARAVAN, text: 'Caravana original', c: C.fnd, dx: -3, dy: 4, d: 2.6 },
      ]} /></div><figcaption><b>Ubicación en The Park.</b> {sat}</figcaption></figure>
    </div>,
    src: 'Findhorn Foundation, Informe anual a enero de 2021 y a marzo de 2022.',
    nota: 'La pandemia, las dificultades económicas y el incendio de 2021 que destruyó el Sanctuary y el Community Centre contribuyeron a la crisis de la Fundación Findhorn.',
  },
  {
    b: 3, t: '2023: se cierra el fideicomiso y se transfieren activos', d: '',
    v: () => <Timeline events={[
      { y: '2020', h: 'Pandemia', p: 'Se desploman los ingresos presenciales.', c: C.chr },
      { y: '2021', h: 'Incendio', p: 'Sanctuary y Community Centre destruidos.', c: C.chr },
      { y: '2023', h: 'Cierre del Trust', p: 'Activos a organizaciones comunitarias; la misión educativa pasa a una SCIO.', c: C.ink },
      { y: '2024', h: 'Nuevo santuario', p: 'Reconstrucción a cargo de Park Ecovillage Trust.', c: C.fnd },
      { y: 'Nov. 2024', h: 'Compra comunitaria', p: 'Ecovillage Findhorn Community Benefit Society.', c: C.fnd },
    ]} />,
    src: 'Findhorn Foundation Trust (findhorn.org); The Wild Hunt (2023); Wikipedia: Findhorn Ecovillage.',
    nota: 'En 2023 se decidió cerrar la estructura fiduciaria anterior y transferir parte de sus activos y actividades a otras organizaciones comunitarias y educativas.',
  },
  {
    b: 3, t: 'La comunidad no es lo mismo que la institución', d: 'Una organización puede entrar en crisis mientras prácticas, relaciones y capacidades continúan.',
    v: () => <Cols cols={[
      { h: 'Lo que se cerró', c: C.chr, rows: [['Institución', 'Findhorn Foundation Trust (1972–2023).'], ['Programas', 'Oferta educativa presencial suspendida en 2023.'], ['Edificios', 'Sanctuary y Community Centre perdidos en 2021.']] },
      { h: 'Lo que continuó', c: C.fnd, rows: [['Agua', 'La Living Machine sigue tratando aguas de cerca de la mitad de las viviendas (2024).'], ['Energía', 'El parque eólico sigue operando.'], ['Organización', 'Park Ecovillage Trust y la sociedad comunitaria de 2024.']] },
    ]} />,
    src: 'Celebrating One Incredible Family, “Our Living Machine 1995” (2024); findhorn.org.',
    nota: 'Esto obliga a diferenciar la continuidad de una comunidad de la continuidad de una institución específica: una organización puede entrar en crisis mientras algunas prácticas, relaciones y capacidades colectivas continúan.',
  },

  /* ===== V ===== */
  {
    b: 4, t: 'La economía de Christiania es un sistema', d: 'Aportes de residentes, espacios de trabajo, negocios y obligaciones colectivas, conectados.',
    v: () => <Flow items={[
      { h: 'Residentes', p: 'Pagan una cuota de uso a la caja común.', c: C.chr },
      { h: 'Talleres y negocios', p: 'Generan actividad y aportes dentro del territorio.', c: C.chr },
      { h: 'Caja común', p: 'Fælleskasse: reúne y redistribuye.', c: C.hl },
      { h: 'Obligaciones colectivas', p: 'Servicios comunes, mantenimiento, pagos a la Fundación y al Estado.', c: C.ink },
    ]} />,
    nota: 'En Christiania, la economía debe entenderse como un sistema que relaciona las contribuciones de los residentes, los espacios de trabajo, los negocios y las obligaciones colectivas.',
  },
  {
    b: 4, t: 'La Fælleskasse: la caja común', d: 'Esquema cualitativo de flujos (los anchos no representan montos medidos).',
    v: () => <Sankey sources={[{ h: 'Cuotas de residentes', v: 5, c: C.chr }, { h: 'Talleres y negocios', v: 3, c: C.chr }, { h: 'Espacios culturales', v: 2, c: C.chr }]} mid={{ h: 'Fælleskasse', c: '#b07d0c' }} targets={[{ h: 'Servicios comunes\n(guarderías, limpieza)', v: 3.5, c: C.fnd }, { h: 'Mantenimiento', v: 3, c: C.ken }, { h: 'Fundación y Estado\n(hipoteca, arriendo)', v: 3.5, c: C.ink }]} />,
    src: 'Thörn, Wasshede y Nilson (eds.) (2011), Space for Urban Alternatives? Christiania 1971–2011.',
    nota: 'Uno de los mecanismos relevantes es la Fælleskasse, o caja común, vinculada a la organización de los recursos compartidos. Las contribuciones ayudan a cubrir gastos comunitarios, mientras que los talleres, establecimientos culturales y pequeños negocios mantienen actividades económicas dentro del territorio.',
  },
  {
    b: 4, t: 'Acciones que no pagan dividendos', d: 'La financiación colectiva de la compra respalda el proyecto, no al inversionista.',
    v: () => <Cols cols={[
      { h: 'Acción bursátil', c: C.mute, rows: [['Objetivo', 'Rentabilidad para quien invierte.'], ['Retorno', 'Dividendos y valorización.'], ['Mercado', 'Se compra y vende en bolsa.']] },
      { h: '“Acción” de Christiania', c: C.chr, rows: [['Objetivo', 'Apoyar la compra comunitaria del suelo.'], ['Retorno', 'Ninguno: es un aporte simbólico.'], ['Uso', 'Parte del primer pago de 2012, junto con una hipoteca.']] },
    ]} />,
    src: 'The Copenhagen Post (2012); lex.dk, “Christiania”.',
    nota: 'La Fundación Freetown Christiania también tiene obligaciones relacionadas con el suelo, los edificios y su conservación. Además, las acciones comunitarias utilizadas para apoyar la adquisición del territorio muestran una forma de financiación colectiva que no funciona como una inversión bursátil convencional: buscan respaldar el proyecto comunitario, no otorgar dividendos a sus participantes.',
  },
  {
    b: 4, t: 'Tres presiones sobre el modelo', d: 'Vivienda asequible y mantenimiento frente a valorización, turismo y economía ilegal.',
    v: () => <GeoMap site="christiania" bbox={CHR_BOX} base="sat" dim={0.4} anns={[
      chrBoundary(0.1),
      { t: 'ring', at: [12.6110, 55.6790], r: 3, c: '#fff', d: 0.6 },
      { t: 'tag', at: [12.6110, 55.6790], text: 'Valor inmobiliario en alza\n(entorno de Holmen)', c: '#fff', dark: true, dx: 3, dy: -3, d: 0.9 },
      { t: 'arrow', from: [12.5940, 55.6760], to: [12.5995, 55.6742], c: C.hl, d: 1.4, flow: true },
      { t: 'tag', at: [12.5940, 55.6760], text: 'Presión turística\n(cientos de miles de visitas al año)', c: C.hl, dx: -1, dy: -3, d: 1.6 },
      { t: 'feat', kind: 'r', id: PUSHER, c: C.chr, w: 0.8, d: 2.2 },
      { t: 'tag', at: [12.6005, 55.6738], text: 'Actividades ilegales', c: C.chr, dx: 4, dy: 4, d: 2.5 },
    ]} />,
    src: sat,
    nota: 'Sin embargo, este modelo enfrenta tensiones. Mantener una vivienda asequible y financiar el mantenimiento del territorio puede entrar en conflicto con el aumento del valor inmobiliario, la presión turística y las actividades ilegales que han afectado algunos espacios.',
  },
  {
    b: 4, t: 'No cuánto dinero circula, sino cuánto permanece', d: 'Retención, obligaciones y decisión sobre la distribución.',
    v: () => <Sankey sources={[{ h: 'Ingresos que entran\nal territorio', v: 10, c: C.chr }]} mid={{ h: '¿Qué permanece?', c: '#b07d0c' }} targets={[{ h: 'Se reinvierte en la comunidad', v: 4, c: C.fnd }, { h: 'Cubre obligaciones', v: 3.5, c: C.ink }]} leak={{ h: 'Sale del territorio', v: 2.5 }} note="¿Y quién decide cómo se distribuye?" />,
    nota: 'Por eso, la pregunta no es solamente cuánto dinero circula, sino qué parte de los recursos permanece en la comunidad, qué obligaciones debe cubrir y quién decide cómo se distribuyen.',
  },

  /* ===== VI ===== */
  {
    b: 5, t: 'Findhorn: una economía diversificada', d: 'Esquema cualitativo de fuentes y destinos de recursos.',
    v: () => <Sankey sources={[{ h: 'Programas educativos', v: 4, c: C.fnd }, { h: 'Visitantes', v: 3, c: C.fnd }, { h: 'Donaciones', v: 1.5, c: C.fnd }, { h: 'Servicios', v: 1.5, c: C.fnd }]} mid={{ h: 'Organizaciones de Findhorn', c: C.fnd }} targets={[{ h: 'Vivienda', v: 3, c: C.ken }, { h: 'Energía', v: 3, c: C.hl }, { h: 'Infraestructura', v: 4, c: C.ink }]} />,
    nota: 'En Findhorn, la economía comunitaria se ha apoyado en actividades educativas, visitantes, donaciones, servicios y proyectos relacionados con la sostenibilidad. También han participado organizaciones que canalizan recursos hacia iniciativas de vivienda, energía e infraestructura.',
  },
  {
    b: 5, t: 'Diversificar también generó una dependencia', d: 'Buena parte de los ingresos dependía de que la gente viniera en persona.',
    v: () => <Pair items={[
      { img: 'fnd_universalhall', cap: <><b>Universal Hall:</b> sede de cursos y eventos. Anne Burgess, CC BY-SA 2.0.</> },
      { img: 'fnd_bahia', cap: <><b>Visitantes y estudiantes llegaban desde fuera.</b> Hugh Venables, CC BY-SA 2.0.</> },
    ]} />,
    nota: 'Esta diversificación permitió ampliar la actividad de la comunidad y compartir conocimientos con personas de otros lugares. Pero generó una dependencia importante de los ingresos procedentes de visitantes y programas educativos.',
  },
  {
    b: 5, t: 'Cómo se encadenó la crisis', d: '',
    v: () => <Flow items={[
      { h: 'Pandemia', p: 'Las restricciones reducen los ingresos presenciales.', c: C.chr },
      { h: 'Incendio de 2021', p: 'Se pierden dos espacios centrales.', c: C.chr },
      { h: 'Estructura insostenible', p: 'Costos fijos sin ingresos suficientes.', c: C.ink },
      { h: '2023: cierre y transferencia', p: 'Activos y funciones pasan a otras organizaciones.', c: C.fnd },
    ]} />,
    src: 'Findhorn Foundation, informes anuales 2021 y 2022; The Wild Hunt (2023).',
    nota: 'La crisis de la Fundación mostró los riesgos de esa estructura. Las restricciones de la pandemia redujeron los ingresos presenciales; posteriormente, el incendio de 2021 afectó dos espacios importantes para las actividades comunitarias. En 2023, la Fundación decidió cerrar su estructura anterior y transferir activos y funciones a otras organizaciones.',
  },
  {
    b: 5, t: 'Tecnología ecológica no es lo mismo que estabilidad económica', d: 'El riesgo está en depender de una sola fuente de ingresos o de una organización central.',
    v: () => <Net center={{ h: 'Organización\ncentral', c: C.chr }} nodes={[
      { h: 'Programas', c: C.chr }, { h: 'Hospedaje', c: C.chr }, { h: 'Comedor', c: C.chr }, { h: 'Edificios', c: C.chr }, { h: 'Personal', c: C.chr }, { h: 'Servicios comunes', c: C.chr },
    ]} />,
    nota: 'La lección es que una comunidad puede contar con tecnologías ecológicas y una identidad colectiva fuerte, pero seguir siendo vulnerable si depende demasiado de una fuente de ingresos o de una organización central.',
  },
  {
    b: 5, t: 'Lo que la diversificación necesita para funcionar', d: '',
    v: () => <Chk n={4} title="La diversificación ayuda, pero no basta" items={[
      { k: '01', h: 'Reservas económicas', p: 'Para resistir caídas de ingresos.', c: C.fnd },
      { k: '02', h: 'Mantenimiento planificado', p: 'Costos previstos, no sorpresas.', c: C.fnd },
      { k: '03', h: 'Responsabilidades claras', p: 'Quién responde por cada bien común.', c: C.fnd },
      { k: '04', h: 'Protección de servicios comunes', p: 'Mecanismos activables en una crisis.', c: C.fnd },
    ]} />,
    nota: 'La diversificación ayuda, pero no garantiza por sí sola la estabilidad. También se necesitan reservas económicas, mantenimiento planificado, distribución clara de responsabilidades y mecanismos para proteger los servicios comunes durante una crisis.',
  },

  /* ===== VII ===== */
  {
    b: 6, t: 'Christiania aprende haciendo', d: 'Reparar, construir, reutilizar materiales y resolver problemas cotidianos.',
    v: () => <Pair items={[
      { img: 'chr_glasshouse', cap: <><b>Casa de vidrio sobre la muralla, construida con ventanas reutilizadas.</b> Seier+Seier, CC BY 2.0.</> },
      { img: 'chr_stadsgraven', cap: <><b>Autoconstrucción frente al foso.</b> Stig Nygaard, CC BY 2.0.</> },
    ]} />,
    nota: 'La segunda dimensión del enfoque económico es el conocimiento. En Christiania, una parte importante del aprendizaje se produce mediante la práctica: reparar, construir, reutilizar materiales, mantener talleres y resolver problemas cotidianos.',
  },
  {
    b: 6, t: 'Christiania Bike: de una necesidad a un producto', d: 'Un barrio sin carros necesitaba mover niños y carga en bicicleta.',
    v: () => <Photo img="chr_bike" anns={[
      { t: 'tag', at: [0.65, 0.35], text: 'Caja de carga delantera', c: C.chr, dy: -3, d: 0.8 },
      { t: 'tag', at: [0.55, 0.85], text: 'Triciclo con dos ruedas delanteras', c: C.hl, dy: 3, d: 1.4 },
    ]} />,
    src: 'Fotografía: Maurizio Ceol, CC BY 3.0. Historia: Christiania Bikes, “Our history”.',
    nota: 'Un ejemplo es Christiania Bike, una bicicleta de carga asociada al entorno de Christiania que convirtió una necesidad práctica de movilidad en un producto con difusión comercial internacional.',
  },
  {
    b: 6, t: 'El valor está en el proceso', d: 'Una solución local se vuelve innovación cuando se juntan cuatro condiciones.',
    v: () => <Timeline title="Christiania Bike" events={[
      { y: '1972', h: 'Herrería del barrio', p: 'Estufas y remolques con chatarra.', c: C.chr },
      { y: '1978', h: 'Empresa registrada', p: 'Producción de remolques.', c: C.chr },
      { y: '1984', h: 'Primera bici de carga', p: 'Hecha por Lars Engstrøm.', c: C.chr },
      { y: '1989', h: 'Producción a Bornholm', p: 'Escala más allá del barrio.', c: C.ink },
      { y: '2010', h: 'Premio de diseño', p: 'Danish Design Center.', c: C.ink },
    ]} />,
    src: 'Christiania Bikes, “Our history” (christianiabikes.com).',
    nota: 'Su importancia no radica únicamente en el objeto, sino en el proceso: una solución local puede transformarse en innovación cuando existen conocimientos técnicos, capacidad de producción, demanda y condiciones para mantener la actividad económica.',
  },
  {
    b: 6, t: 'Las cuatro condiciones de la innovación', d: '',
    v: () => <Chk n={4} items={[
      { k: 'SABER', h: 'Conocimiento técnico', p: 'Herreros y talleres del barrio.', c: C.chr },
      { k: 'HACER', h: 'Capacidad de producción', p: 'Taller propio, luego fábrica.', c: C.chr },
      { k: 'VENDER', h: 'Demanda', p: 'Primero vecinos, luego toda Copenhague.', c: C.chr },
      { k: 'DURAR', h: 'Condiciones para mantenerse', p: 'Empresa estable y escala.', c: C.chr },
    ]} />,
    nota: '(Condiciones: conocimientos técnicos, capacidad de producción, demanda y condiciones para mantener la actividad económica.)',
  },
  {
    b: 6, t: 'Findhorn enseña de forma formal', d: 'Cursos, talleres, programas y experiencias de construcción ecológica.',
    v: () => <Pair items={[
      { img: 'fnd_ecovivienda', cap: <><b>Vivienda ecológica con colectores solares.</b> Anne Burgess, CC BY-SA 2.0.</>, anns: [{ t: 'tag', at: [0.24, 0.22], text: 'Colectores solares', c: C.hl, dy: -3, d: 1.2 }] },
      { img: 'fnd_barril', cap: <><b>Casa de barril de whisky.</b> Chiswick Chap, CC BY-SA 3.0.</> },
    ]} />,
    nota: 'En Findhorn, el conocimiento se ha transmitido de manera más formal mediante cursos, talleres, programas educativos y experiencias de construcción ecológica. Las Eco-houses permiten explorar cómo las decisiones de diseño, los materiales y las estrategias de eficiencia energética pueden reducir impactos durante el uso de una vivienda.',
  },
  {
    b: 6, t: 'Dos mecanismos complementarios', d: '',
    v: () => <Cols cols={[
      { h: 'Christiania', c: C.chr, rows: [['Cómo aprende', 'En la práctica: talleres y necesidades cotidianas.'], ['Dónde queda', 'En las personas y los oficios.'], ['Ejemplo', 'Christiania Bike.']] },
      { h: 'Findhorn', c: C.fnd, rows: [['Cómo aprende', 'Sistematizando y enseñando.'], ['Dónde queda', 'En cursos, programas y publicaciones.'], ['Ejemplo', 'Eco-houses y programas educativos.']] },
    ]} />,
    nota: 'La comparación revela dos mecanismos complementarios. Christiania destaca el aprendizaje práctico ligado a los talleres y a las necesidades cotidianas; Findhorn, la sistematización y difusión educativa de sus experiencias.',
  },
  {
    b: 6, t: 'Lo que dice la literatura: la resiliencia se aprende', d: 'Marco de un estudio comparativo reciente sobre Findhorn: transmitir conocimiento sostiene la capacidad de adaptarse.',
    v: () => <Photo img="paper_es_fig6" anns={[
      { t: 'box', a: [0.0, 0.29], b: [0.30, 0.39], c: C.fnd, d: 0.3 }, { t: 'tag', at: [0.15, 0.29], text: 'Adaptabilidad · transmisión de conocimiento', c: C.fnd, dy: -3, d: 0.5 },
      { t: 'box', a: [0.41, 0.89], b: [0.63, 0.99], c: C.chr, d: 0.7 }, { t: 'tag', at: [0.52, 0.89], text: 'Capital social · cohesión', c: C.chr, dy: -3, d: 0.9 },
      { t: 'box', a: [0.05, 0.73], b: [0.33, 0.84], c: C.ken, d: 1.1 }, { t: 'tag', at: [0.19, 0.73], text: 'Transformabilidad · agencia', c: C.ken, dy: -3, d: 1.3 },
      { t: 'box', a: [0.78, 0.49], b: [0.99, 0.60], c: C.hl, d: 1.5 }, { t: 'tag', at: [0.885, 0.49], text: 'Conectividad · sentido', c: C.hl, dy: -3, d: 1.7 },
    ]} />,
    src: 'Fernandez, J., Baumber, A., Salignac, F. y Kaya, E. (2026). Narrative plasticity and the dynamics of community resilience in ecovillages. Ecology and Society 31(3):19. doi:10.5751/ES-17608-310319. Figura 6, CC BY 4.0.',
    nota: '(Apoyo bibliográfico: el conocimiento compartido y la capacidad de adaptación como factores de resiliencia en Findhorn.)',
  },
  {
    b: 6, t: 'Difundir una idea no demuestra que funcione en cualquier lugar', d: 'Cada técnica viaja con requisitos.',
    v: () => <Flow items={[
      { h: 'Idea o técnica', p: 'Lo que se enseña o se difunde.', c: C.ink },
      { h: 'Recursos y conocimientos', p: '¿Existen en el nuevo lugar?', c: C.chr },
      { h: 'Clima y condiciones', p: '¿Funciona con ese suelo, agua y viento?', c: C.chr },
      { h: 'Organización', p: '¿Quién la opera y la mantiene?', c: C.chr },
      { h: 'Adaptación local', p: 'Solo entonces se puede evaluar.', c: C.fnd },
    ]} />,
    nota: 'Pero debemos distinguir entre difundir una idea y demostrar que funciona en cualquier lugar. Una técnica puede requerir recursos, conocimientos, condiciones climáticas y formas de organización que no existen en todos los territorios.',
  },

  /* ===== VIII ===== */
  {
    b: 7, scene: 'ciclo', t: 'Un mecanismo común', d: 'Economía, propiedad y conocimiento forman un ciclo.',
    v: () => <Cycle center={'ciclo de\ninnovación\nadaptativa'} nodes={[
      { h: 'Necesidad', c: C.chr }, { h: 'Movilizar\nrecursos y\nsaberes', c: C.chr }, { h: 'Práctica\nestable', c: C.fnd }, { h: 'Mantener\no adaptar', c: C.fnd },
    ]} examples={[{ at: 0, text: 'Mover carga sin carro', c: C.chr }, { at: 2, text: 'Christiania Bike · Living Machine', c: C.fnd }]} />,
    nota: 'Si relacionamos economía, propiedad y conocimiento, aparece un mecanismo común. Primero, la comunidad identifica una necesidad. Después, moviliza recursos y conocimientos para responder a ella. Si la solución funciona, puede convertirse en una práctica estable, un servicio o una actividad económica. Finalmente, los recursos y aprendizajes acumulados permiten mantenerla o adaptarla.',
  },
  {
    b: 7, scene: 'ciclo', t: 'El ciclo también puede romperse', d: '',
    v: () => <Cycle center={'ciclo\ninterrumpido'} nodes={[
      { h: 'Necesidad', c: C.chr }, { h: 'Movilizar\nrecursos y\nsaberes', c: C.chr }, { h: 'Práctica\nestable', c: C.fnd }, { h: 'Mantener\no adaptar', c: C.fnd },
    ]} breaks={[{ at: 0, text: 'Pérdida de personal' }, { at: 1, text: 'Aumentan los costos' }, { at: 2, text: 'Disminuyen los ingresos' }, { at: 3, text: 'Decisiones concentradas' }]} />,
    nota: 'Sin embargo, este ciclo también puede interrumpirse. Si aumentan los costos, disminuyen los ingresos, se pierde personal capacitado o las decisiones se concentran en pocas personas, la iniciativa se vuelve más vulnerable.',
  },
  {
    b: 7, t: 'Innovación adaptativa es más que tecnología', d: '',
    v: () => <Chk n={4} items={[
      { k: '+', h: 'Tecnologías', p: 'Bicicletas, plantas de agua, aerogeneradores.', c: C.mute },
      { k: '+', h: 'Reglas', p: 'Acuerdos sobre suelo, cuotas y decisiones.', c: C.chr },
      { k: '+', h: 'Responsabilidades', p: 'Quién mantiene qué.', c: C.ken },
      { k: '+', h: 'Capacidad de aprender', p: 'Cuando cambian las condiciones.', c: C.fnd },
    ]} />,
    nota: 'Christiania y Findhorn muestran que la innovación adaptativa no consiste solamente en crear tecnologías nuevas. También implica construir reglas, distribuir responsabilidades y conservar la capacidad de aprender cuando cambian las condiciones.',
  },

  {
    b: 7, t: 'Findhorn en datos: qué sostiene la resiliencia', d: 'Porcentaje de residentes entrevistados que mencionan cada factor (naranja: Findhorn).',
    v: () => <Photo img="paper_es_fig4" anns={[
      { t: 'box', a: [0.54, 0.27], b: [0.582, 0.865], c: C.hl, d: 0.4 }, { t: 'tag', at: [0.561, 0.27], text: 'Adaptabilidad · 80 %', c: C.hl, dy: -3, d: 0.6 },
      { t: 'box', a: [0.919, 0.18], b: [0.961, 0.865], c: C.hl, d: 0.8 }, { t: 'tag', at: [0.94, 0.18], text: 'Capital social · 93 %', c: C.hl, dy: -3, dx: -2, d: 1 },
    ]} />,
    src: 'Fernandez et al. (2026), Ecology and Society 31(3):19, figura 4, CC BY 4.0.',
    nota: '(Dato de apoyo: en Findhorn, la adaptabilidad y el capital social son los factores más mencionados.)',
  },

  /* ===== IX ===== */
  {
    b: 8, t: 'El territorio como un sistema de flujos', d: 'Enfoque 5: lo que entra y lo que sale.',
    v: () => <Metab center={'Territorio\ncomunitario'} c={C.ken} inputs={['Agua', 'Energía', 'Alimentos', 'Materiales']} outputs={['Aguas residuales', 'Residuos sólidos', 'Emisiones', 'Movilidad']} />,
    nota: 'El enfoque 5 nos invita a estudiar el territorio como un sistema de flujos. Las personas necesitan agua, energía, alimentos y materiales; al mismo tiempo, producen aguas residuales, residuos sólidos, emisiones y demandas de movilidad.',
  },
  {
    b: 8, t: 'Christiania: reutilización, talleres y movilidad sin motor', d: 'Senderos peatonales y ciclovías internas, y el centro de reciclaje de materiales.',
    v: () => <GeoMap site="christiania" bbox={CHR_BOX} base="gris" plan anns={[
      chrBoundary(0.1),
      { t: 'feat', kind: 'r', cls: 'footway|path|pedestrian|cycleway|steps', inside: CHR_ID, c: C.fnd, w: 0.15, d: 0.6 },
      { t: 'tag', at: [12.6105, 55.6758], text: 'Red interna peatonal y ciclista', c: C.fnd, dx: 5, dy: -5, d: 1.8 },
      { t: 'feat', kind: 'b', name: 'Genbrugshal', c: C.chr, fill: 'rgba(196,71,43,.7)', w: 0.4, d: 2.2 },
      { t: 'tag', at: [12.6012, 55.6728], text: 'Den Grønne Genbrugshal\n(materiales de construcción reciclados)', c: C.chr, dx: -6, dy: -6, d: 2.6 },
      { t: 'scale', at: [12.6110, 55.6705], meters: 200, d: 3 },
    ]} />,
    src: gris,
    nota: 'En Christiania, una parte visible de su identidad territorial es la reutilización de edificios y materiales, la presencia de talleres y la importancia de los desplazamientos internos no motorizados.',
  },
  {
    b: 8, t: 'Reutilizar no es cerrar el ciclo', d: 'Siguen entrando insumos, reparaciones, servicios y productos de fuera.',
    v: () => <Metab center={'Christiania'} c={C.chr} inputs={['Insumos externos', 'Repuestos', 'Servicios', 'Productos']} outputs={['Residuos', 'Materiales sin uso', 'Desplazamientos']} note="La reutilización reduce entradas, pero el ciclo material sigue abierto." />,
    nota: 'Estas prácticas pueden reducir la necesidad de nuevos materiales y favorecer una ocupación más adaptada al lugar. Sin embargo, no debemos confundir la reutilización de materiales con el cierre completo del ciclo material: siguen siendo necesarios insumos externos, reparaciones, servicios y productos que la comunidad no puede producir por sí misma.',
  },
  {
    b: 8, t: '¿Quién gestiona cada capa?', d: 'Decidir sobre el espacio no es controlar el suministro.',
    v: () => <Layers outline={[[0, 0.05], [0.35, 0], [0.6, 0.15], [0.62, 0.55], [0.45, 0.62], [0.2, 0.5], [0.05, 0.3]]} layers={[
      { h: 'Usos del espacio', p: 'Gestión comunitaria: asambleas,\ntalleres, áreas comunes.', c: C.chr },
      { h: 'Vías, alumbrado y redes internas', p: 'Fundación Freetown Christiania\n(desde el acuerdo de 2012, subárea I).', c: C.hl },
      { h: 'Agua potable, electricidad, saneamiento', p: 'Redes públicas de Copenhague:\nla comunidad no las controla.', c: C.ken },
    ]} />,
    src: 'Acuerdo de 22.06.2011 entre el Estado y Christiania (la Fundación asume vías, alumbrado y redes en la subárea I).',
    nota: 'También es importante diferenciar los sistemas que gestiona la comunidad de aquellos que dependen de las redes públicas de Copenhague. La autogestión de espacios o residuos no implica necesariamente controlar el suministro de agua potable, la red eléctrica o todas las infraestructuras sanitarias. Esta distinción es esencial para evaluar la autonomía real.',
  },
  {
    b: 8, t: 'Autonomía real: local en lo espacial, dependiente en lo fundamental', d: '',
    v: () => <Bars title="Grado de control comunitario (lectura cualitativa)" unit="" max={5} hl={[0, 1]} rows={[
      { k: 'Uso del espacio', v: 5, c: C.chr }, { k: 'Reglas internas', v: 4.5, c: C.chr }, { k: 'Mantenimiento', v: 3, c: C.hl }, { k: 'Residuos', v: 2.5, c: C.hl }, { k: 'Agua potable', v: 0.5, c: C.ken }, { k: 'Electricidad', v: 0.5, c: C.ken }, { k: 'Saneamiento', v: 0.5, c: C.ken },
    ]} />,
    nota: 'Una comunidad puede tomar decisiones locales sobre el uso del espacio y, al mismo tiempo, depender de entidades externas para servicios fundamentales.',
  },

  /* ===== X ===== */
  {
    b: 9, t: 'Findhorn incorpora tecnologías ecológicas a sus servicios', d: 'La Living Machine, primera de Europa (1995), diseñada por John Todd.',
    v: () => <Photo img="fnd_livingmachine" anns={[
      { t: 'tag', at: [0.5, 0.08], text: 'Invernadero de la Living Machine', c: C.hl, dy: 3, d: 0.8 },
      { t: 'tag', at: [0.82, 0.65], text: 'Tanques abiertos de depuración biológica', c: C.fnd, dy: 3, d: 1.4 },
    ]} />,
    src: 'Fotografía: Julian Paren (geograph.org.uk), CC BY-SA 2.0. Celebrating One Incredible Family (2024); The Ecologist (2010).',
    nota: 'Findhorn permite observar con mayor claridad la incorporación de tecnologías ecológicas a los servicios del asentamiento. Una de ellas es la Living Machine, un sistema de tratamiento biológico de aguas residuales que utiliza procesos naturales y organismos vivos para contribuir a la depuración del agua.',
  },
  {
    b: 9, t: 'Cómo funciona: un tren de tratamiento biológico', d: 'Su interés: tratar parte de las aguas residuales dentro del propio territorio.',
    v: () => <Photo img="fnd_lm_esquema_epa" anns={[
      { t: 'box', a: [0.07, 0.33], b: [0.21, 0.72], c: C.ink, d: 0.4 }, { t: 'tag', at: [0.14, 0.33], text: '1 · Reactor anaerobio\nsedimenta y digiere sin oxígeno', c: C.ink, dy: -3, d: 0.6 },
      { t: 'box', a: [0.25, 0.12], b: [0.32, 0.58], c: C.ken, d: 0.8 }, { t: 'tag', at: [0.285, 0.58], text: '2 · Reactor anóxico', c: C.ken, dy: 4, d: 1 },
      { t: 'box', a: [0.32, 0.12], b: [0.41, 0.58], c: C.ken, d: 1.2 }, { t: 'tag', at: [0.365, 0.12], text: '3 · Aerobio cerrado', c: C.ken, dy: -3, d: 1.4 },
      { t: 'box', a: [0.42, 0.05], b: [0.69, 0.58], c: C.fnd, d: 1.6 }, { t: 'tag', at: [0.555, 0.58], text: '4 · Tanques abiertos con plantas', c: C.fnd, dy: 4, d: 1.8 },
      { t: 'box', a: [0.70, 0.18], b: [0.77, 0.66], c: C.hl, d: 2 }, { t: 'tag', at: [0.735, 0.66], text: '5 · Clarificador', c: C.hl, dy: 4, d: 2.2 },
      { t: 'box', a: [0.78, 0.05], b: [0.86, 0.58], c: C.fnd, d: 2.4 }, { t: 'tag', at: [0.82, 0.05], text: '6 · Lecho ecológico fluidizado', c: C.fnd, dy: -2, dx: 2, d: 2.6 },
    ]} />,
    src: 'US EPA (2002), Wastewater Technology Fact Sheet: The Living Machine, EPA 832-F-02-025, fig. 1 (fuente: Living Machines Inc., 2001); Todd y Josephson (1996), Ecological Engineering 6.',
    nota: 'Su interés consiste en integrar el tratamiento de residuos líquidos dentro del propio territorio, reduciendo la dependencia de soluciones convencionales para una parte del proceso.',
  },
  {
    b: 9, t: 'Su desempeño no se supone: se mide', d: 'Lo que necesitamos saber antes de evaluar la Living Machine.',
    v: () => <Chk n={5} items={[
      { k: 'm³/día', h: 'Volumen tratado', c: C.ken }, { k: 'DISEÑO', h: 'Capacidad de diseño', c: C.ken }, { k: 'DBO, N, P', h: 'Calidad de entrada y salida', c: C.ken }, { k: '£/año', h: 'Costos de operación', c: C.ken }, { k: 'HORAS', h: 'Mantenimiento requerido', c: C.ken },
    ]} title="Indicadores de evaluación (datos por solicitar al operador, Biomatrix)" />,
    nota: 'Pero su desempeño no debe suponerse únicamente por la presencia de plantas o microorganismos. Para evaluarlo necesitamos conocer el volumen tratado, la capacidad de diseño, la calidad del agua de entrada y salida, los costos de operación y los requerimientos de mantenimiento.',
  },
  {
    b: 9, t: 'El parque eólico de Findhorn', d: 'De un aerogenerador de 75 kW en 1989 a 750 kW desde 2006; los excedentes se venden a la red.',
    v: () => <div className="pair" style={{ ['--n' as any]: 2 }}>
      <figure className="po"><div style={{ minHeight: 0 }}><Photo img="fnd_eolico" /></div><figcaption><b>Aerogeneradores de Findhorn.</b> W. L. Tarbert, dominio público.</figcaption></figure>
      <figure className="po" style={{ animationDelay: '.3s' }}><div style={{ minHeight: 0 }}><GeoMap site="findhorn" bbox={[-3.5870, 57.6535, -3.5735, 57.6595]} base="sat" plan dim={0.15} anns={[
        ...WIND.map((p, i) => ({ t: 'ring', at: p, r: 1.4, c: C.hl, d: 1 + i * 0.25, pulse: true } as Ann)),
        { t: 'tag', at: WIND[1], text: 'Aerogeneradores (OSM)', c: C.hl, dx: -6, dy: 5, d: 2 },
        { t: 'scale', at: [-3.5865, 57.6538], meters: 100, d: 2.3 },
      ]} /></div><figcaption><b>Posición real de las turbinas.</b> {sat}</figcaption></figure>
    </div>,
    src: 'Celebrating One Incredible Family, “Moya” (2015); energymap.co.uk, Findhorn Wind Farm.',
    nota: 'El segundo ejemplo es el parque eólico de Findhorn. La generación renovable permite producir electricidad a partir del viento y, en determinadas condiciones, exportar excedentes a la red.',
  },
  {
    b: 9, scene: 'energia', t: 'Potencia instalada (kW)', d: 'La capacidad nominal de generación: no dice cuánto se produce.',
    v: () => <Energy phase={0} />,
    nota: 'Aquí debemos distinguir cuatro conceptos. La potencia instalada, medida en kilovatios, indica la capacidad nominal de generación.',
  },
  {
    b: 9, scene: 'energia', t: 'Energía producida (kWh)', d: 'Cuánto se genera durante un periodo: depende del viento.',
    v: () => <Energy phase={1} />,
    nota: 'La energía producida, medida en kilovatios-hora, expresa cuánto se genera durante un periodo.',
  },
  {
    b: 9, scene: 'energia', t: 'Demanda', d: 'La electricidad que necesita la comunidad, que varía durante el día.',
    v: () => <Energy phase={2} />,
    nota: 'La demanda representa la electricidad que necesita la comunidad y puede variar a lo largo del día.',
  },
  {
    b: 9, scene: 'energia', t: 'Cobertura: ¿qué parte de la demanda se satisface?', d: 'Un balance anual favorable no demuestra autonomía permanente: la red cubre las diferencias.',
    v: () => <Energy phase={3} />,
    nota: 'Por último, la cobertura indica qué proporción de esa demanda se satisface con la generación disponible. Por eso, un balance anual de generación favorable no demuestra autonomía permanente. Puede haber momentos en que el parque genere más electricidad de la que se necesita y otros en los que el viento sea insuficiente. La red externa permite gestionar esa diferencia. Este caso demuestra que la sostenibilidad depende tanto de las tecnologías locales como de la forma en que se conectan con sistemas de mayor escala.',
  },

  /* ===== XI ===== */
  {
    b: 10, t: 'Más allá de las tecnologías visibles', d: 'Lo que se produce adentro convive con lo que se sigue importando.',
    v: () => <Metab center={'Findhorn'} c={C.fnd} inputs={['Alimentos', 'Materiales de construcción', 'Equipos', 'Combustibles', 'Otros productos']} outputs={['Viajes de residentes', 'Viajes de visitantes', 'Residuos', 'Impactos en otros lugares']} note="Producción local: electricidad eólica y tratamiento de parte de las aguas residuales." />,
    nota: 'Al comparar ambos territorios, debemos mirar más allá de las tecnologías visibles. Una comunidad puede reutilizar materiales, producir energía renovable o tratar parte de sus aguas residuales, pero todavía importar alimentos, materiales de construcción, equipos, combustibles y otros productos.',
  },
  {
    b: 10, t: 'La huella de Findhorn: la mitad del promedio británico', d: 'Figura original del estudio de 2006: 2,71 frente a 5,4 hectáreas globales por persona.',
    v: () => <Photo img="fnd_huella_fig13" crop={[0, 150, 840, 870]} anns={[
      { t: 'box', a: [0.455, 0.655], b: [0.59, 0.87], c: C.fnd, d: 0.5 },
      { t: 'tag', at: [0.52, 0.655], text: 'Findhorn · 2,71 gha', c: C.fnd, dy: -3, d: 1.2 },
      { t: 'box', a: [0.145, 0.465], b: [0.28, 0.87], c: C.chr, d: 1.6 },
      { t: 'tag', at: [0.21, 0.465], text: 'Reino Unido · 5,4 gha', c: C.chr, dy: -3, d: 2.1 },
      { t: 'box', a: [0.04, 0.373], b: [0.895, 0.396], c: C.hl, d: 2.6 },
      { t: 'box', a: [0.04, 0.267], b: [0.895, 0.289], c: C.chr, d: 3.1 },
      { t: 'tag', at: [0.895, 0.278], text: 'Viajes', c: C.chr, dx: 2, d: 3.5 },
    ]} />,
    src: 'Tinsley, S. y George, H. (2006). Ecological Footprint of the Findhorn Foundation and Community. SDRC, UHI Millennium Institute. Tabla 27 y figura 13.',
    nota: 'También debe considerarse el transporte de residentes y visitantes. En Findhorn, los estudios de huella ecológica han señalado que, aunque el consumo de recursos puede ser inferior al promedio británico en determinados análisis,',
  },
  {
    b: 10, t: 'Pero los viajes pesan', d: 'En el transporte de los residentes, el avión explica casi el 70 %.',
    v: () => <Bars title="Huella de transporte por residente (gha), Tinsley y George (2006), tabla 5" unit="gha" max={0.28} hl={[0]} rows={[
      { k: 'Avión', v: 0.247, c: C.chr }, { k: 'Tren', v: 0.053 }, { k: 'Capital (vehículos)', v: 0.035 }, { k: 'Automóvil', v: 0.025 }, { k: 'Bus local', v: 0.004 }, { k: 'Motocicleta', v: 0.001 },
    ]} />,
    src: 'Tinsley y George (2006), tabla 5. Huella de los visitantes: 1,15 gha por persona adicional.',
    nota: '…los desplazamientos y las actividades asociadas a los visitantes siguen teniendo un peso importante.',
  },
  {
    b: 10, t: 'Leer el dato con su fecha y su método', d: 'Datos de 2004–2005; el estudio excluye casas privadas y negocios independientes.',
    v: () => <Photo img="fnd_huella_resumen" crop={[60, 40, 880, 940]} frac={false} anns={[
      { t: 'box', a: [338, 552], b: [840, 577], c: C.chr, d: 0.5, fill: 'rgba(227,165,26,.28)' },
      { t: 'box', a: [134, 577], b: [724, 602], c: C.chr, d: 0.9, fill: 'rgba(227,165,26,.28)' },
      { t: 'tag', at: [704, 590], text: 'Viviendas privadas y negocios: fuera del cálculo', c: C.chr, dx: 1, dy: 6, d: 1.6 },
      { t: 'box', a: [134, 804], b: [286, 829], c: C.fnd, d: 2.2 },
    ]} />,
    src: 'Tinsley y George (2006), resumen ejecutivo, p. 4.',
    nota: 'Ese resultado debe leerse teniendo en cuenta su fecha y metodología. Un estudio histórico no representa automáticamente la situación actual, y una medición que excluye determinadas viviendas, organizaciones o procesos puede ofrecer una imagen incompleta del sistema.',
  },
  {
    b: 10, t: 'El límite físico no es el límite del metabolismo', d: 'Flujos que entran y salen, infraestructuras externas e impactos en otros lugares.',
    v: () => <GeoMap site="findhorn" bbox={[-14, 47, 16, 63]} base="sat" dim={0.3} anns={[
      { t: 'ring', at: FND, r: 0.9, c: C.fnd, pulse: true, d: 0.2 },
      { t: 'tag', at: FND, text: 'Límite físico', c: C.fnd, dx: -3, dy: -3, d: 0.5 },
      { t: 'arrow', from: [-0.1, 51.5], to: FND, c: '#fff', d: 1, flow: true },
      { t: 'arrow', from: [-6.2, 53.35], to: FND, c: '#fff', d: 1.2, flow: true },
      { t: 'arrow', from: [13.4, 52.5], to: FND, c: '#fff', d: 1.4, flow: true },
      { t: 'arrow', from: [4.9, 52.4], to: FND, c: '#fff', d: 1.6, flow: true },
      { t: 'arrow', from: [-3.5, 48.5], to: FND, c: '#fff', d: 1.8, flow: true },
      { t: 'tag', at: [8, 49], text: 'Visitantes, productos y energía\nllegan de fuera', c: '#fff', dark: true, d: 2.4 },
    ]} />,
    src: TILE_CREDIT.sat,
    nota: 'La conclusión es que el metabolismo territorial no se mide solamente por lo que se produce dentro de un límite físico. También depende de los flujos que entran y salen, de las infraestructuras externas que lo hacen posible y de los impactos que se generan en otros lugares.',
  },

  /* ===== XII ===== */
  {
    b: 11, t: 'Otra escala: Hong Kong y Shenzhen', d: 'Densidades, infraestructuras y planificación muy distintas.',
    v: () => <Photo img="hk_lowu" anns={[{ t: 'line', pts: [[0.27, 0.9], [0.36, 0.78], [0.47, 0.67], [0.56, 0.6], [0.64, 0.54]], c: C.ken, w: 0.6, smooth: true, d: 0.6 }, { t: 'tag', at: [0.38, 0.76], text: 'Río Shenzhen: frontera', c: C.ken, dx: -6, dy: 4, d: 1.4 }, { t: 'tag', at: [0.86, 0.38], text: 'Shenzhen', c: C.ink, dy: -6, d: 1.8 }, { t: 'tag', at: [0.12, 0.62], text: 'Hong Kong', c: C.ink, dy: 6, d: 2.2 }]} />,
    src: 'Fotografía: Daniel Case, CC BY-SA 3.0.',
    nota: 'Esta comparación también permite distinguir estas experiencias de modelos urbanos de otra escala. Hong Kong y Shenzhen, por ejemplo, operan con densidades, infraestructuras y estructuras de planificación muy distintas.',
  },
  {
    b: 11, t: 'Territorios delimitados para observar en detalle', d: 'Superficies a la misma escala.',
    v: () => <Scale items={[
      { h: 'Shenzhen', ha: 199700, c: C.ken, p: '≈ 1.997 km²' },
      { h: 'Christiania', ha: 34, c: C.chr, p: '34 ha' },
      { h: 'Findhorn, The Park', ha: 14, c: C.fnd, p: '≈ 14 ha (núcleo)' },
    ]} />,
    src: 'Christiania: 34 ha (Københavns Kommune). Shenzhen: Shenzhen Statistical Yearbook. The Park: estimación del núcleo de la ecoaldea.',
    nota: 'Christiania y Findhorn permiten observar con más detalle cómo las decisiones comunitarias afectan la gestión cotidiana de un territorio relativamente delimitado.',
  },
  {
    b: 11, t: 'Çatalhöyük: un contraste histórico, no un equivalente', d: 'Asentamiento neolítico de Anatolia: condiciones sociales, técnicas y materiales distintas.',
    v: () => <Pair items={[
      { img: 'cat_excavacion', cap: <><b>Excavaciones de Çatalhöyük.</b> Omar Hoftun, CC BY-SA 3.0.</> },
      { img: 'cat_reconstruccion', cap: <><b>Reconstrucción de viviendas neolíticas.</b> Radosław Botev, CC BY 3.0 PL.</> },
    ]} />,
    nota: 'Por su parte, Çatalhöyük ofrece un contraste histórico sobre la organización de los asentamientos, aunque no debe tratarse como equivalente directo a una comunidad contemporánea: sus condiciones sociales, tecnológicas y materiales eran diferentes.',
  },
  {
    b: 11, t: '¿Qué podemos aprender para Kennedy?', d: 'Bogotá: María Paz, Patio Bonito, Corabastos y los humedales La Vaca y El Burro.',
    v: () => <GeoMap site="kennedy" bbox={KEN_BOX} base="sat" plan dim={0.3} anns={[
      { t: 'feat', kind: 'x', id: [11350362, 11350664], c: '#fff', w: 0.25, d: 0.2 },
      { t: 'feat', kind: 'l', id: [479823059, 586687934, 8695506], c: '#7fd1ff', fill: 'rgba(127,209,255,.35)', w: 0.4, d: 0.6 },
      { t: 'tag', at: [-74.16162, 4.62847], text: 'Humedal La Vaca', c: '#7fd1ff', dark: true, dx: -4, dy: 3, d: 1.4 },
      { t: 'tag', at: [-74.15027, 4.64101], text: 'Humedal El Burro', c: '#7fd1ff', dark: true, dx: 4, dy: -3, d: 1.6 },
      { t: 'ring', at: CORA, r: 2.2, c: C.hl, d: 2 },
      { t: 'tag', at: CORA, text: 'Corabastos', c: C.hl, dx: 4, dy: 3, d: 2.2 },
      { t: 'dot', at: MPAZ, c: C.chr, d: 2.6 },
      { t: 'tag', at: MPAZ, text: 'María Paz', c: C.chr, dx: 3, dy: -3, d: 2.8 },
      { t: 'dot', at: PBON, c: C.chr, d: 3 },
      { t: 'tag', at: PBON, text: 'Patio Bonito', c: C.chr, dx: -4, dy: -3, d: 3.2 },
      { t: 'scale', at: [-74.181, 4.6155], meters: 500, d: 3.4 },
    ]} />,
    src: sat,
    nota: 'La pregunta final es qué podemos aprender de estos casos para Kennedy, en Bogotá.',
  },
  {
    b: 11, t: 'Adaptar la caja común a la economía circular', d: 'Recicladores de María Paz y Patio Bonito, en relación con las dinámicas de Corabastos.',
    v: () => <div className="pair" style={{ ['--n' as any]: 2 }}>
      <figure className="po"><div style={{ minHeight: 0 }}><Photo img="ken_corabastos" anns={[{ t: 'tag', at: [0.63, 0.42], text: 'Central de abastos (Corabastos)', c: C.hl, dy: -3, d: 1.0 }]} /></div><figcaption><b>Corabastos desde el aire (2018).</b> Felipe Restrepo Acosta, CC BY-SA 4.0.</figcaption></figure>
      <figure className="po" style={{ animationDelay: '.3s' }}><div style={{ minHeight: 0 }}><GeoMap site="kennedy" bbox={[-74.168, 4.624, -74.150, 4.645]} base="sat" dim={0.3} anns={[
        { t: 'ring', at: CORA, r: 2.2, c: C.hl, d: 0.6 },
        { t: 'tag', at: CORA, text: 'Corabastos', c: C.hl, dx: 4, dy: 3, d: 0.9 },
        { t: 'arrow', from: CORA, to: MPAZ, c: '#fff', d: 1.4, flow: true },
        { t: 'arrow', from: CORA, to: PBON, c: '#fff', d: 1.7, flow: true, bend: -0.2 },
        { t: 'tag', at: MPAZ, text: 'María Paz', c: C.chr, dx: 3, dy: -3, d: 2.2 },
        { t: 'tag', at: PBON, text: 'Patio Bonito', c: C.chr, dx: -4, dy: -3, d: 2.4 },
        { t: 'tag', at: [-74.1575, 4.6335], text: 'Material recuperable', c: '#fff', dark: true, d: 2.8 },
      ]} /></div><figcaption><b>Flujos posibles entre la central y los barrios.</b> {sat}</figcaption></figure>
    </div>,
    src: 'Fotografía: Felipe Restrepo Acosta, CC BY-SA 4.0.',
    nota: 'Una posibilidad sería adaptar el principio de una caja común para fortalecer iniciativas de economía circular vinculadas con los recicladores de María Paz y Patio Bonito, en relación con las dinámicas de Corabastos.',
  },
  {
    b: 11, t: 'Una caja común para la recuperación de materiales', d: 'Propuesta exploratoria: qué financiaría.',
    v: () => <Sankey sources={[{ h: 'Venta de materiales\nrecuperados', v: 6, c: C.ken }, { h: 'Aportes de\norganizaciones', v: 2, c: C.ken }, { h: 'Convenios\n(p. ej. con comerciantes)', v: 2, c: C.ken }]} mid={{ h: 'Caja común', c: '#b07d0c' }} targets={[{ h: 'Equipos compartidos', v: 3, c: C.fnd }, { h: 'Logística', v: 2.5, c: C.fnd }, { h: 'Mantenimiento', v: 2, c: C.fnd }, { h: 'Condiciones de trabajo', v: 2.5, c: C.chr }]} note="Esquema exploratorio, sin montos." />,
    nota: 'El objetivo sería explorar cómo los recursos obtenidos por la recuperación de materiales podrían apoyar equipos compartidos, logística, mantenimiento y condiciones de trabajo.',
  },
  {
    b: 11, t: 'Filtración biológica para los humedales', d: 'No trasladar la Living Machine: evaluar si sus principios se adaptan a La Vaca y El Burro.',
    v: () => <Pair items={[
      { img: 'ken_elburro', cap: <><b>Humedal El Burro.</b> Juan Carlos Sáenz Rodríguez, CC BY-SA 4.0.</> },
      { img: 'ken_lavaca', cap: <><b>Humedal La Vaca.</b> Juan Carlos Sáenz Rodríguez, CC BY-SA 4.0.</> },
    ]} />,
    nota: 'Otra posibilidad sería estudiar sistemas de filtración biológica para contribuir al mejoramiento de la calidad del agua en los humedales La Vaca y El Burro. No se trata de trasladar directamente la Living Machine, sino de evaluar si ciertos principios de tratamiento biológico podrían adaptarse a las condiciones hidráulicas, ecológicas y sanitarias locales.',
  },
  {
    b: 11, t: 'Un principio a evaluar: el humedal de flujo subsuperficial', d: 'El agua pasa bajo la superficie, a través de grava y raíces, donde las bacterias la depuran.',
    v: () => <Photo img="ken_humedal_ssf_epa" crop={[0, 0, 1070, 800]} frac={false} anns={[
      { t: 'box', a: [200, 60], b: [900, 290], c: C.fnd, d: 0.3 }, { t: 'tag', at: [550, 60], text: 'Vegetación: raíces que oxigenan', c: C.fnd, dy: 3, d: 0.5 },
      { t: 'box', a: [205, 325], b: [865, 410], c: C.ken, d: 0.7 }, { t: 'tag', at: [535, 410], text: 'Zona de tratamiento: grava', c: C.ken, dy: 4, d: 0.9 },
      { t: 'ring', at: [212, 397], c: C.hl, d: 1.1 }, { t: 'tag', at: [212, 397], text: 'Entrada', c: C.hl, dx: -3, dy: 6, d: 1.3 },
      { t: 'ring', at: [860, 397], c: C.hl, d: 1.5 }, { t: 'tag', at: [860, 397], text: 'Salida', c: C.hl, dx: 3, dy: 6, d: 1.7 },
      { t: 'box', a: [205, 405], b: [865, 440], c: C.chr, d: 1.9 }, { t: 'tag', at: [370, 440], text: 'Membrana o suelo impermeable', c: C.chr, dy: 8, d: 2.1 },
    ]} />,
    src: 'US EPA (2000). Wastewater Technology Fact Sheet: Wetlands: Subsurface Flow. EPA 832-F-00-023, fig. 1 (adaptado de S. C. Reed). Documento del Gobierno de EE. UU., dominio público.',
    nota: '(Ejemplo de principio de tratamiento biológico que habría que evaluar para La Vaca y El Burro.)',
  },
  {
    b: 11, t: 'El Burro hoy: lo que dice su plan de manejo', d: 'En unos 70 años el humedal perdió cerca del 89 % de su área: de 71,5 ha a 18,8 ha de área legal.',
    v: () => <Chk n={4} items={[
      { k: 'FRAGMENTACIÓN', h: 'Dividido en dos sectores', p: 'La avenida Ciudad de Cali lo parte en dos.', c: C.chr },
      { k: 'AGUA', h: 'Agua de entrada deficiente', p: 'La calidad del agua que ingresa es baja.', c: C.ken },
      { k: 'SUELO', h: 'Pérdida de área inundable', p: 'Se reduce la ronda hidráulica y el área legal.', c: C.hl },
      { k: 'RESIDUOS', h: 'Residuos sólidos en el humedal', p: 'Disposición inadecuada en sus bordes.', c: C.mute },
    ]} />,
    src: 'Secretaría Distrital de Ambiente, Plan de Manejo Ambiental Humedal El Burro (diagnóstico); Universidad Nacional, reportado por El Espectador.',
    nota: '(Contexto de Kennedy: problemas documentados del humedal El Burro.)',
  },
  {
    b: 11, t: 'Antes de intervenir', d: 'Cualquier intervención requiere estudios y coordinación institucional.',
    v: () => <Chk n={3} items={[
      { k: '01', h: 'Estudios técnicos', p: 'Hidráulica, calidad del agua y suelos de cada humedal.', c: C.ken },
      { k: '02', h: 'Evaluación de impactos', p: 'Ecológicos y sanitarios, incluidas aves y vegetación.', c: C.ken },
      { k: '03', h: 'Coordinación institucional', p: 'Con las entidades competentes del Distrito.', c: C.ken },
    ]} />,
    nota: 'Cualquier intervención necesitaría estudios técnicos, evaluación de impactos y coordinación con las entidades competentes.',
  },
  {
    b: 11, t: 'Adaptar mecanismos, no copiar soluciones', d: '',
    v: () => <Cols cols={[
      { h: 'Copiar la solución', c: C.mute, rows: [['Caja común', 'Replicar la Fælleskasse tal cual.'], ['Agua', 'Instalar una Living Machine.'], ['Resultado', 'Ignora las condiciones del lugar.']] },
      { h: 'Adaptar el mecanismo', c: C.ken, rows: [['Caja común', 'Reglas de aporte y reinversión pensadas con los recicladores.'], ['Agua', 'Principios de tratamiento biológico evaluados en cada humedal.'], ['Resultado', 'Respuesta construida con el territorio.']] },
    ]} />,
    nota: 'En ambos casos, el aprendizaje principal es adaptar mecanismos, no copiar soluciones sin considerar las condiciones del lugar.',
  },

  /* ===== XIII ===== */
  {
    b: 12, t: 'La continuidad depende de tres relaciones', d: '',
    v: () => <Flow items={[{ h: 'Economía', p: 'Recursos compartidos y obligaciones.', c: C.chr }, { h: 'Conocimiento', p: 'Aprender, enseñar, adaptar.', c: C.fnd }, { h: 'Infraestructura', p: 'Mantener lo construido y sus redes.', c: C.ken }]} />,
    nota: 'Para cerrar, Christiania y Findhorn muestran que la continuidad comunitaria depende de la relación entre economía, conocimiento e infraestructura.',
  },
  {
    b: 12, scene: 'cld', t: 'Hipótesis: un ciclo de refuerzo…', d: 'Recursos, conocimiento y mantenimiento aumentan la capacidad de adaptación.',
    v: () => <CLD step={0} />,
    nota: 'Podemos formular una hipótesis para nuestro trabajo de modelamiento dinámico: cuando una comunidad fortalece sus recursos compartidos, transmite conocimientos y mantiene sus infraestructuras, puede aumentar su capacidad de adaptación;',
  },
  {
    b: 12, scene: 'cld', t: '…y sus frenos', d: 'Costos, dependencias externas y concentración de decisiones la debilitan.',
    v: () => <CLD step={1} />,
    nota: 'pero si crecen sus costos, sus dependencias externas o la concentración de decisiones, esa capacidad puede debilitarse.',
  },
  {
    b: 12, t: 'Variables del modelo', d: '',
    v: () => <Chk n={4} items={[
      { k: 'ECONOMÍA', h: 'Ingresos comunitarios', c: C.chr }, { k: 'ECONOMÍA', h: 'Costos de mantenimiento', c: C.chr }, { k: 'SOCIAL', h: 'Participación', c: C.ink }, { k: 'SOCIAL', h: 'Conocimientos disponibles', c: C.fnd },
      { k: 'METABOLISMO', h: 'Demanda energética', c: C.hl }, { k: 'METABOLISMO', h: 'Consumo de agua', c: C.ken }, { k: 'METABOLISMO', h: 'Generación de residuos', c: C.ken }, { k: 'DEPENDENCIA', h: 'Servicios externos', c: C.mute },
    ]} />,
    nota: 'Esta hipótesis puede representarse mediante variables como ingresos comunitarios, costos de mantenimiento, participación, conocimientos disponibles, demanda energética, consumo de agua, generación de residuos y dependencia de servicios externos.',
  },
  {
    b: 12, t: 'Un modelo basado en agentes', d: 'Residentes, organizaciones y prestadores deciden según recursos, necesidades y reglas de cooperación. Puede probar los escenarios.',
    v: () => <ABM />,
    nota: 'En un modelo basado en agentes, los residentes, las organizaciones comunitarias y los prestadores de servicios tomarían decisiones según sus recursos, necesidades y reglas de cooperación. Así podríamos explorar cómo cambian los resultados cuando aumentan los costos, disminuyen los ingresos o se fortalecen los mecanismos de reinversión colectiva.',
  },
  {
    b: 12, t: 'No hay una fórmula única de sostenibilidad', d: '',
    v: () => <Big sub={<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{[['Acuerdos', 'acuerdo', C.chr], ['Aprendizaje', 'aprendizaje', C.fnd], ['Mantenimiento', 'mantenimiento', C.ken], ['Redes territoriales', 'red dependencia externa', C.hl]].map(([t, q, c], n) => <div key={n} className="card po" style={{ ['--c' as any]: c, animationDelay: `${0.5 + n * 0.25}s`, display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px' }}><span className="ico" style={{ margin: 0 }}><Ico t={q} /></span><h4 style={{ margin: 0, fontSize: 20 }}>{t}</h4></div>)}</div>}>La autonomía se construye mediante <em>acuerdos</em>, <em>aprendizaje</em> y <em>mantenimiento</em>.</Big>,
    nota: 'La comparación no demuestra que exista una fórmula única de sostenibilidad. Demuestra que la autonomía se construye mediante acuerdos, aprendizaje y mantenimiento, y que siempre debe evaluarse en relación con las redes territoriales de las que depende.',
  },
  {
    b: 12, t: 'La pregunta final', d: 'No si son completamente autosuficientes, sino…',
    v: () => <Ask items={[
      { q: '¿Qué logran resolver colectivamente?', c: C.fnd, a: 'Energía del viento, parte del tratamiento del agua, vivienda ecológica y espacios comunes.', v: () => <GeoMap site="findhorn" bbox={FND_BOX} base="sat" plan dim={0.25} anns={[
        ...WIND.map((p, i) => ({ t: 'ring', at: p, r: 1.2, c: C.hl, d: 0.3 + i * 0.15 } as Ann)),
        { t: 'tag', at: WIND[0], text: 'Viento', c: C.hl, dx: -4, dy: -3, d: 0.8 },
        { t: 'ring', at: LM, r: 1.4, c: C.ken, d: 1 }, { t: 'tag', at: LM, text: 'Agua tratada', c: C.ken, dx: 4, dy: 3, d: 1.2 },
        { t: 'feat', kind: 'b', name: 'West Whins|Woodside', c: C.fnd, fill: 'rgba(79,179,143,.6)', d: 1.4 },
        { t: 'tag', at: [-3.5948, 57.6541], text: 'Vivienda ecológica', c: C.fnd, dx: -4, dy: -3, d: 1.7 },
      ]} /> },
      { q: '¿Qué siguen necesitando del exterior?', c: C.chr, a: 'Alimentos, materiales, redes públicas de servicios, visitantes y viajes.', v: () => <GeoMap bbox={[-14, 47, 16, 63]} base="sat" dim={0.3} anns={[
        { t: 'ring', at: FND, r: 0.9, c: C.fnd, d: 0.2 }, { t: 'ring', at: CPH, r: 0.9, c: C.chr, d: 0.3 },
        { t: 'arrow', from: [-0.1, 51.5], to: FND, c: '#fff', d: 0.6, flow: true }, { t: 'arrow', from: [4.9, 52.4], to: FND, c: '#fff', d: 0.8, flow: true },
        { t: 'arrow', from: [9.9, 53.5], to: CPH, c: '#fff', d: 1, flow: true }, { t: 'arrow', from: [13.4, 52.5], to: CPH, c: '#fff', d: 1.2, flow: true },
        { t: 'tag', at: [6, 49.5], text: 'Productos, energía y personas llegan de fuera', c: C.chr, d: 1.6 },
      ]} /> },
      { q: '¿Cómo se adaptan cuando cambian las condiciones?', c: C.ken, a: 'Reinvirtiendo recursos, transmitiendo conocimiento y cambiando de institución sin perder la comunidad.', v: () => <Cycle center={'adaptación'} nodes={[{ h: 'Necesidad', c: C.chr }, { h: 'Recursos y\nsaberes', c: C.chr }, { h: 'Práctica\nestable', c: C.fnd }, { h: 'Mantener\no adaptar', c: C.fnd }]} /> },
    ]} />,
    src: `${sat}`,
    nota: 'En definitiva, la pregunta no es si Christiania o Findhorn son completamente autosuficientes, sino qué logran resolver colectivamente, qué siguen necesitando del exterior y cómo pueden adaptarse cuando esas condiciones cambian.',
  },
  {
    b: 12, t: 'Referencias', d: '',
    v: () => <div className="refs po">
      <p>Bygningsstyrelsen (2018). <i>Christiania: plano de subáreas y acuerdos</i>. En Københavns Kommune (2022), respuesta sobre viviendas en Christiania.</p>
      <p>Christiania Bikes (s. f.). <i>Our history</i>. christianiabikes.com.</p>
      <p>Coppola, A. y Vanolo, A. (2015). Normalising autonomous spaces: Ongoing transformations in Christiania, Copenhagen. <i>Urban Studies, 52</i>(6), 1152–1168. https://doi.org/10.1177/0042098014532852</p>
      <p>Findhorn Foundation (2021, 2022). <i>Annual Report and Financial Statements</i>. findhorn.org.</p>
      <p>Folketinget (2012). <i>Aktstykke 89</i>: udmøntning af christianialoven.</p>
      <p>Global Ecovillage Network (s. f.). <i>The Living Machine</i>. ecovillage.org.</p>
      <p>Staten og Christiania (2011). <i>Aftale af 22. juni 2011</i>. Socialstyrelsen.</p>
      <p>The Copenhagen Post (2011, 2012, 6 de abril de 2024). Cobertura del acuerdo y de Pusher Street.</p>
      <p>Thörn, H., Wasshede, C. y Nilson, T. (eds.) (2011). <i>Space for Urban Alternatives? Christiania 1971–2011</i>. Gidlunds.</p>
      <p>Tinsley, S. y George, H. (2006). <i>Ecological Footprint of the Findhorn Foundation and Community</i>. Sustainable Development Research Centre, UHI Millennium Institute.</p>
      <p>Todd, J. y Josephson, B. (1996). The design of living technologies for waste treatment. <i>Ecological Engineering, 6</i>(1–3), 109–136.</p>
      <p>Imágenes: Wikimedia Commons y geograph.org.uk (autores y licencias indicados en cada lámina). Cartografía: © colaboradores de OpenStreetMap; Esri World Imagery y World Light Gray Base.</p>
    </div>,
  },
];
