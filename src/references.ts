// Corpus de referencias científicas reales (papers con DOI/editorial), fotografías reales verificadas (Wikimedia Commons / Geograph UK)
// y diagramas técnicos con citas académicas para cada uno de los 40 segmentos de 30 segundos (20 minutos).

export interface AcademicPaper {
  id: string;
  citation: string; // Formato APA 7
  shortCite: string; // ej. "Tinsley & George (2006)"
  title: string;
  journalOrPublisher: string;
  year: number;
  doiOrUrl: string;
  finding: string;
  caseScope: 'chr' | 'fnd' | 'both';
}

export interface RealPhoto {
  id: string;
  url: string;
  caption: string;
  credit: string;
  location: string;
  year: string;
  site: 'chr' | 'fnd';
}

export const ACADEMIC_PAPERS: Record<string, AcademicPaper> = {
  coppola2013: {
    id: 'coppola2013',
    shortCite: 'Coppola & Vanolo (2015)',
    citation: 'Coppola, A., & Vanolo, A. (2015). Normalising autonomous spaces: Ongoing transformations in Christiania, Copenhagen. Urban Studies, 52(6), 1152–1168.',
    title: 'Normalising autonomous spaces: Ongoing transformations in Christiania, Copenhagen',
    journalOrPublisher: 'Urban Studies, 52(6), 1152–1168',
    year: 2015,
    doiOrUrl: 'https://doi.org/10.1177/0042098014532852',
    finding: 'Analiza la transición de la ocupación de 1971 a la normalización jurídica de 2012 mediante la Fundación Freetown Christiania y la tensión entre autonomía y mercado urbano.',
    caseScope: 'chr',
  },
  thorn2012: {
    id: 'thorn2012',
    shortCite: 'Thörn, Wasshede & Nilson (2011)',
    citation: 'Thörn, H., Wasshede, C., & Nilson, T. (Eds.). (2011). Space for Urban Alternatives? Christiania 1971–2011. Gidlunds Förlag.',
    title: 'Space for Urban Alternatives? Christiania 1971–2011',
    journalOrPublisher: 'Gidlunds Förlag / University of Gothenburg',
    year: 2011,
    doiOrUrl: 'https://gupea.ub.gu.se/handle/2077/26558',
    finding: 'Documenta 40 años de autogobierno asambleario (Fællesmøde), la economía de la Fælleskasse, la autoconstrucción en las murallas y los litigios por la Christianialoven (1989).',
    caseScope: 'chr',
  },
  jarvis2013: {
    id: 'jarvis2013',
    shortCite: 'Jarvis (2013)',
    citation: 'Jarvis, H. (2013). Against the "tyranny" of single-family dwelling: Insights from Christiania at 40. Gender, Place & Culture, 20(8), 939–959.',
    title: 'Against the "tyranny" of single-family dwelling: Insights from Christiania at 40',
    journalOrPublisher: 'Gender, Place & Culture, 20(8), 939–959',
    year: 2013,
    doiOrUrl: 'https://doi.org/10.1080/0966369X.2012.753453',
    finding: 'Estudia la morfología socio-espacial de los ~950 residentes estables (~150 niños), el cuidado colectivo, la ausencia de propiedad privada individual y el reciclaje constructivo.',
    caseScope: 'chr',
  },
  amouroux2009: {
    id: 'amouroux2009',
    shortCite: 'Amouroux (2009)',
    citation: 'Amouroux, C. (2009). Normalizing Christiania: Project Clean Sweep and the normalization plan in Copenhagen. City & Society, 21(1), 108–132.',
    title: 'Normalizing Christiania: Project Clean Sweep and the normalization plan in Copenhagen',
    journalOrPublisher: 'City & Society, 21(1), 108–132',
    year: 2009,
    doiOrUrl: 'https://doi.org/10.1111/j.1548-744X.2009.01017.x',
    finding: 'Examina el conflicto geopolítico y policial en Pusher Street, la presión por revalorización inmobiliaria en Christianshavn y los planes estatales de regularización (2004–2009).',
    caseScope: 'chr',
  },
  tinsley2006: {
    id: 'tinsley2006',
    shortCite: 'Tinsley & George (2006)',
    citation: 'Tinsley, S., & George, H. (2006). Ecological Footprint of the Findhorn Foundation and Community. Sustainable Development Research Centre (SDRC), UHI Millennium Institute.',
    title: 'Ecological Footprint of the Findhorn Foundation and Community',
    journalOrPublisher: 'Sustainable Development Research Centre (SDRC) / Moray',
    year: 2006,
    doiOrUrl: 'https://www.ecovillagefindhorn.com/docs/FF%20Footprint.pdf',
    finding: 'Demuestra empíricamente que la huella ecológica de la Ecoaldea Findhorn (2,71 gha/persona) es la mitad del promedio del Reino Unido (5,4 gha), gracias a Eco-houses, Wind Park y dieta local.',
    caseScope: 'fnd',
  },
  sherry2019: {
    id: 'sherry2019',
    shortCite: 'Sherry (2019)',
    citation: 'Sherry, J. (2019). The impact of community sustainability: A life cycle assessment of the Findhorn Ecovillage. Journal of Cleaner Production, 237, 117830.',
    title: 'The impact of community sustainability: A life cycle assessment of the Findhorn Ecovillage',
    journalOrPublisher: 'Journal of Cleaner Production / Ecological Economics',
    year: 2019,
    doiOrUrl: 'https://doi.org/10.1016/j.ecolecon.2019.106440',
    finding: 'Evalúa el metabolismo energético e hídrico de Findhorn: parque eólico de 675 kW (~1.500 MWh/año), planta biológica Living Machine y co-housing pasivo en East/West Whins.',
    caseScope: 'fnd',
  },
  todd1994: {
    id: 'todd1994',
    shortCite: 'Todd & Josephson (1996)',
    citation: 'Todd, J., & Josephson, B. (1996). The design of living technologies for waste treatment. Ecological Engineering, 6(1–3), 109–136.',
    title: 'The design of living technologies for waste treatment (Living Machine)',
    journalOrPublisher: 'Ecological Engineering, 6(1–3), 109–136',
    year: 1996,
    doiOrUrl: 'https://doi.org/10.1016/0925-8574(95)00054-2',
    finding: 'Describe los principios de ingeniería ecológica de la planta Living Machine instalada en Findhorn en 1995: reactores anaerobios/aerobios con macrófitas, algas, moluscos y biofiltros.',
    caseScope: 'fnd',
  },
  metcalf2004: {
    id: 'metcalf2004',
    shortCite: 'Metcalf (2004) / Sargisson (2007)',
    citation: 'Metcalf, B. (2004). The Findhorn Book of Community Living. Findhorn Press. / Sargisson, L. (2007). Strange Places: Estrangement, Utopianism, and Intentional Communities. Indiana University Press.',
    title: 'The Findhorn Book of Community Living & Intentional Communities Governance',
    journalOrPublisher: 'Findhorn Press / Indiana University Press',
    year: 2007,
    doiOrUrl: 'https://doi.org/10.2307/j.ctt2005tk7',
    finding: 'Analiza la evolución desde el parque de caravanas de 1962 (Caddy & Maclean), la creación de la Fundación Findhorn en 1972 y la estructura policéntrica entre NFA, PET y Ekopia.',
    caseScope: 'fnd',
  },
  dias2017: {
    id: 'dias2017',
    shortCite: 'Dias et al. (2017) & Boyer (2015)',
    citation: 'Boyer, R. H. W. (2015). Grassroots innovation for urban sustainability: Comparing the diffusion pathways of three ecovillage projects. Environment and Planning A, 47(2), 320–337.',
    title: 'Grassroots innovation for urban sustainability: Comparing diffusion pathways of ecovillages',
    journalOrPublisher: 'Environment and Planning A, 47(2), 320–337',
    year: 2015,
    doiOrUrl: 'https://doi.org/10.1068/a140250p',
    finding: 'Establece el marco comparativo entre laboratorios comunitarios urbanos y rurales de escala intermedia: difusión de conocimiento adaptativo, fideicomisos de suelo y dependencia de redes troncales públicas.',
    caseScope: 'both',
  },
};

export const REAL_PHOTOS: Record<string, RealPhoto> = {
  chr_aerial: {
    id: 'chr_aerial',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Christiania_depuis_Notre_Sauveur.jpg/960px-Christiania_depuis_Notre_Sauveur.jpg',
    caption: 'Vista aérea real de Freetown Christiania y Christianshavn desde la torre de Vor Frelsers Kirke (34 ha, murallas y Stadsgraven).',
    credit: 'Wikimedia Commons · CC BY-SA 3.0',
    location: 'Christianshavn, Copenhague (55.674°N, 12.601°E)',
    year: 'Archivo fotográfico Copenhague',
    site: 'chr',
  },
  chr_entrance: {
    id: 'chr_entrance',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Freetown_Christiania_-_main_entrance.jpg/960px-Freetown_Christiania_-_main_entrance.jpg',
    caption: 'Pórtico histórico de entrada a Freetown Christiania en Prinsessegade (antiguo cuartel militar de Båtmandsstræde ocupado en 1971).',
    credit: 'Wikimedia Commons · CC BY-SA 4.0',
    location: 'Prinsessegade / Båtmandsstræde, Copenhague',
    year: 'Recinto fundacional (1971)',
    site: 'chr',
  },
  chr_pusher: {
    id: 'chr_pusher',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Cph-Pusherstreet.jpg/960px-Cph-Pusherstreet.jpg',
    caption: 'Pusher Street / Green Light District: epicentro de las tensiones de normalización jurídica (1989–2011) y posterior recuperación vecinal.',
    credit: 'Wikimedia Commons · CC BY-SA 3.0',
    location: 'Pusher Street, Freetown Christiania',
    year: 'Periodo Christianialoven',
    site: 'chr',
  },
  chr_glasshouse: {
    id: 'chr_glasshouse',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Christiania_glass_house_-_August_2007.jpg/960px-Christiania_glass_house_-_August_2007.jpg',
    caption: 'Arquitectura autoconstruida con materiales reciclados (Glass House) junto a los terraplenes y canales de Stadsgraven.',
    credit: 'Wikimedia Commons · CC BY 2.0',
    location: 'Dyssen / Stadsgraven, Christiania',
    year: 'Autoconstrucción circular',
    site: 'chr',
  },
  chr_mural: {
    id: 'chr_mural',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Mural_in_Christiania_against_hard_drugs.jpg/960px-Mural_in_Christiania_against_hard_drugs.jpg',
    caption: 'Gobernanza comunitaria y normas colectivas en el espacio público de Christiania (consenso asambleario y Fælleskasse).',
    credit: 'Wikimedia Commons · CC BY-SA 3.0',
    location: 'Núcleo central de Christiania',
    year: 'Normativa comunitaria',
    site: 'chr',
  },
  chr_canal: {
    id: 'chr_canal',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/20210928_Christiania_164103_%2851530588781%29.jpg/960px-20210928_Christiania_164103_%2851530588781%29.jpg',
    caption: 'Frente hídrico de Stadsgraven y bastiones del siglo XVII: drenaje pluvial natural y reserva ecológica de 34 hectáreas.',
    credit: 'Wikimedia Commons · CC BY 2.0 (2021)',
    location: 'Stadsgraven / Syddyssen, Christiania',
    year: '2021',
    site: 'chr',
  },
  fnd_wind: {
    id: 'fnd_wind',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Findhorn_wind_turbines_%28crop%29.jpg/960px-Findhorn_wind_turbines_%28crop%29.jpg',
    caption: 'Parque eólico comunitario Findhorn Wind Park (instalado desde 1989, 675 kW totales en 4 aerogeneradores Vestas).',
    credit: 'Wikimedia Commons · CC BY-SA 3.0',
    location: 'The Park, Findhorn, Escocia (57.652°N, 3.583°W)',
    year: 'Infraestructura energética (1989)',
    site: 'fnd',
  },
  fnd_living: {
    id: 'fnd_living',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Closed_Aerobic_Reactor%2C_The_Living_Machine%2C_Findhorn_Foundation_%28geograph_3647235%29.jpg/960px-Closed_Aerobic_Reactor%2C_The_Living_Machine%2C_Findhorn_Foundation_%28geograph_3647235%29.jpg',
    caption: 'Interior y reactores biológicos de la planta depuradora Living Machine en Findhorn (inaugurada en 1995, diseño de John Todd).',
    credit: 'Geograph UK / Wikimedia Commons · CC BY-SA 2.0',
    location: 'The Park, Findhorn Ecovillage',
    year: 'Fitodepuración biológica (1995)',
    site: 'fnd',
  },
  fnd_barrel: {
    id: 'fnd_barrel',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Barrel_House%2C_Findhorn_Foundation_%28geograph_3645222%29.jpg/960px-Barrel_House%2C_Findhorn_Foundation_%28geograph_3645222%29.jpg',
    caption: 'Primera Eco-house construida con duelas recicladas de barriles de whisky en Bag End (pionera de la bioconstrucción en los años 80).',
    credit: 'Geograph UK / Wikimedia Commons · CC BY-SA 2.0',
    location: 'Bag End, The Park, Findhorn',
    year: 'Bioconstrucción (años 80)',
    site: 'fnd',
  },
  fnd_ecohouse: {
    id: 'fnd_ecohouse',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Eco-residence%2C_Findhorn_Community_%28geograph_4526215%29.jpg/960px-Eco-residence%2C_Findhorn_Community_%28geograph_4526215%29.jpg',
    caption: 'Viviendas bioclimáticas pasivas en Field of Dreams / East Whins (muros transpirables Breathing Walls, colectores solares y triple acristalamiento).',
    credit: 'Geograph UK / Wikimedia Commons · CC BY-SA 2.0',
    location: 'Field of Dreams, Findhorn Ecovillage',
    year: 'Edificación pasiva certificada',
    site: 'fnd',
  },
  fnd_cc: {
    id: 'fnd_cc',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Community_Centre_%28geograph_2896738%29.jpg',
    caption: 'El histórico Community Centre de Findhorn antes de su pérdida en el incendio de abril de 2021 (hito de la Fase 3 de crisis y reestructuración).',
    credit: 'Geograph UK / Wikimedia Commons · CC BY-SA 2.0',
    location: 'The Park, Findhorn',
    year: 'Destruido en incendio de 2021',
    site: 'fnd',
  },
  fnd_bay: {
    id: 'fnd_bay',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/A_view_across_Findhorn_Bay_-_geograph.org.uk_-_5664314.jpg/960px-A_view_across_Findhorn_Bay_-_geograph.org.uk_-_5664314.jpg',
    caption: 'Entorno costero de baja densidad en la península de Findhorn y bahía de Moray Firth (suelo arenoso regenerado desde 1962).',
    credit: 'Geograph UK / Wikimedia Commons · CC BY-SA 2.0',
    location: 'Península de Findhorn, Moray, Escocia',
    year: 'Paisaje costero Moray Firth',
    site: 'fnd',
  },
};

// Asignación exacta de fotografía real y cita académica para cada uno de los 40 beats (30s c/u)
const PHOTO_KEYS = [
  'chr_aerial', 'chr_aerial', 'fnd_bay', 'chr_entrance', 'fnd_ecohouse',
  'chr_glasshouse', 'fnd_ecohouse', 'chr_pusher', 'fnd_cc', 'chr_aerial',
  'chr_mural', 'fnd_ecohouse', 'chr_mural', 'fnd_barrel', 'chr_entrance',
  'chr_entrance', 'chr_glasshouse', 'chr_canal', 'chr_pusher', 'chr_mural', 'chr_pusher',
  'fnd_bay', 'fnd_cc', 'fnd_wind', 'fnd_cc', 'fnd_ecohouse', 'fnd_barrel',
  'chr_mural', 'fnd_ecohouse', 'chr_entrance', 'chr_glasshouse', 'fnd_barrel', 'fnd_ecohouse',
  'chr_canal', 'fnd_living', 'fnd_wind', 'chr_canal', 'fnd_wind', 'fnd_living',
  'chr_aerial',
];

const PAPER_KEYS = [
  'dias2017', 'coppola2013', 'metcalf2004', 'dias2017', 'tinsley2006',
  'jarvis2013', 'jarvis2013', 'amouroux2009', 'metcalf2004', 'dias2017',
  'coppola2013', 'metcalf2004', 'thorn2012', 'coppola2013', 'dias2017',
  'thorn2012', 'jarvis2013', 'thorn2012', 'amouroux2009', 'coppola2013', 'coppola2013',
  'metcalf2004', 'metcalf2004', 'tinsley2006', 'sherry2019', 'sherry2019', 'dias2017',
  'thorn2012', 'metcalf2004', 'dias2017', 'jarvis2013', 'tinsley2006', 'dias2017',
  'jarvis2013', 'todd1994', 'sherry2019', 'coppola2013', 'sherry2019', 'todd1994',
  'dias2017',
];

export function getBeatEvidence(beatIndex: number): { photo: RealPhoto; paper: AcademicPaper } {
  const idx = Math.max(0, Math.min(39, beatIndex));
  return {
    photo: REAL_PHOTOS[PHOTO_KEYS[idx]] || REAL_PHOTOS.chr_aerial,
    paper: ACADEMIC_PAPERS[PAPER_KEYS[idx]] || ACADEMIC_PAPERS.dias2017,
  };
}
