/* Asigna un ícono a cada idea según palabras clave del texto (español). */
import type { LucideIcon } from 'lucide-react';
import {
  Droplets, Wind, Coins, Building2, Home, Users, Landmark, GraduationCap, Wrench, Handshake, Plane, TrainFront, Car, Bus, Bike,
  Recycle, Factory, Flame, Scale, FileText, HandCoins, PiggyBank, Hammer, Lightbulb, MapPin, Leaf, Zap, Trash2, Truck, ShieldAlert,
  Network, Gauge, BookOpen, Store, Waves, Sprout, Sun, PlugZap, Link2, RefreshCw, TrendingUp, TrendingDown, UserMinus, Key,
  Package, Fuel, CloudFog, Footprints, Caravan, Globe, Microscope, ClipboardCheck, Layers, Workflow, Receipt, Construction, Warehouse,
  ShoppingBasket, Brain, Repeat, Split, Compass, Bird, Hourglass, Target, Puzzle, Boxes, Shield, Lock, Search, Milestone, Eye,
} from 'lucide-react';

const RULES: [RegExp, LucideIcon][] = [
  [/avi[oó]n|vuelo|a[eé]reo/i, Plane], [/tren/i, TrainFront], [/autom[oó]vil|carro|veh[ií]culo/i, Car], [/bus\b|bus local/i, Bus], [/motocicleta|bici|bicicleta|ciclov/i, Bike],
  [/incendio|fuego/i, Flame], [/pandemia|covid/i, CloudFog], [/ley|jur[ií]dic|legal|norma|reforma/i, Scale], [/acuerdo|convenio|coordinaci/i, Handshake],
  [/humedal|filtraci|aguas? residual|depura|saneamiento|living machine|tanque|vertido|lecho|reactor/i, Droplets], [/agua potable|agua\b|h[ií]dric/i, Droplets],
  [/foso|r[ií]o|canal|bah[ií]a|estuario|costa|costero|mar\b/i, Waves],
  [/aerogener|e[oó]lic|viento|moya/i, Wind], [/electricidad|potencia|kw|red el[eé]ctrica|energ/i, Zap], [/red\b|redes|exporta|importa|suministro/i, PlugZap], [/solar/i, Sun],
  [/caja com[uú]n|f[æa]lleskasse/i, PiggyBank], [/acci[oó]n|dividend|burs[aá]til|inversi/i, Receipt], [/millones|precio|pago|hipoteca|arriendo|ingres|dinero|costo|financ|cuota|venta|econ[oó]m/i, Coins],
  [/donaci|aporte/i, HandCoins], [/reserva/i, PiggyBank], [/recicl|reutiliz|materiales recuperad|recuperaci/i, Recycle], [/residuo|basura/i, Trash2], [/emisi/i, CloudFog],
  [/taller|herrer|reparar|autoconstru|construir|construcci/i, Hammer], [/mantenim|recuperar y mantener|mantener/i, Wrench], [/infraestructura|v[ií]as|alumbrado/i, Construction],
  [/educa|curso|programa|ense[nñ]|aprend|conocimiento|saber/i, GraduationCap], [/innovaci|idea|t[eé]cnica|tecnolog/i, Lightbulb], [/sistematiz|publicaci|estudio|informe|paper/i, BookOpen],
  [/visitante|turis|hospedaje/i, Footprints], [/caravana/i, Caravan], [/huerto|cultivo|org[aá]nic|siembra|nuevo santuario/i, Sprout], [/ecol[oó]g|verde|vegeta/i, Leaf],
  [/vivienda|casa|hogar|residencial|eco-?house/i, Home], [/edificio|cuartel|nave|bodega/i, Building2], [/suelo|propiedad|territorio|sub[aá]rea|compra/i, MapPin],
  [/fundaci[oó]n|fideicomiso|trust|instituci|estado|gobierno|ministerio/i, Landmark], [/asamblea|decid|decisi|gobernanza|qui[eé]n decide/i, Users],
  [/residente|comunidad|vecin|personas|participaci|recicladores/i, Users], [/personal|empleo|trabajo|condiciones de trabajo/i, UserMinus],
  [/alimento|comida|comedor|abastos|corabastos|mercado/i, ShoppingBasket], [/log[ií]stica|transporte|desplazam|viaje|movilidad/i, Truck], [/combustible/i, Fuel],
  [/equipo/i, Package], [/producto|insumo|repuesto/i, Boxes], [/producci[oó]n|f[aá]brica|bornholm/i, Factory], [/demanda|venta|vender/i, Store],
  [/crisis|ilegal|violencia|presi[oó]n|riesgo|vulnerab/i, ShieldAlert], [/protecci|proteger/i, Shield], [/servicio/i, Network],
  [/aumenta|alza|crec/i, TrendingUp], [/disminu|reduc|ca[ií]da|desplom/i, TrendingDown], [/ciclo|adapt|refuerzo/i, Repeat], [/cierre|cerr/i, Lock],
  [/necesidad|objetivo/i, Target], [/dependen|exterior|externo/i, Link2], [/eval|indicador|medir|medici|calidad/i, Gauge], [/impacto/i, Microscope],
  [/estudios t[eé]cnicos|diagn/i, ClipboardCheck], [/capa|uso del espacio/i, Layers], [/flujo|sistema/i, Workflow], [/variable|modelo/i, Brain],
  [/copiar|solucion/i, Split], [/mecanismo|adaptar el/i, Puzzle], [/hist[oó]ric|neol[ií]tic|fecha|a[nñ]o|tiempo/i, Hourglass], [/ave|fauna/i, Bird],
  [/escala|densidad/i, Globe], [/c[oó]mo|qu[eé]|pregunta/i, Search], [/momento|fase|etapa/i, Milestone], [/mirar|observ/i, Eye], [/lugar|clima/i, Compass],
  [/organizaci|entidad|asociaci|sociedad/i, Network], [/llave|control/i, Key], [/contrato|plano|documento/i, FileText], [/reglas?|responsab/i, Scale],
  [/dur|estable|continu/i, RefreshCw], [/vend|comerci/i, Store], [/almac/i, Warehouse],
];

export function ico(text: string): LucideIcon {
  for (const [re, I] of RULES) if (re.test(text)) return I;
  return Lightbulb;
}

/** Ícono React a partir de un texto. */
export function Ico({ t, size = 22, color }: { t: string; size?: number; color?: string }) {
  const I = ico(t);
  return <I size={size} color={color} strokeWidth={1.75} aria-hidden />;
}
