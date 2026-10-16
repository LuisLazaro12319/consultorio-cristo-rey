/**
 * Consultorio Dental Cristo Rey - datos del consultorio.
 * Fuente: ficha de Google Maps e Instagram @consultorio.dental.cristo.rey.
 * Todo lo que se muestra en la web sale de acá: para otro consultorio alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: 'Consultorio Dental Cristo Rey',
  initials: 'CR',
  professional: 'nuestro equipo',
  street: 'Bragado esq. Bariloche',
  streets: 'Bragado esq. Bariloche, Villa Celina',
  locality: 'Villa Celina',
  province: 'Provincia de Buenos Aires',
  fullAddress: 'Bragado esquina Bariloche, Villa Celina, Provincia de Buenos Aires',
  since: 0,
  phone: '011 5840-6949',
  // A CONFIRMAR: es el teléfono de la ficha de Google; se asume que atiende por WhatsApp.
  whatsappNumber: '5491158406949',
  whatsappDisplay: '011 5840-6949',
  instagramHandle: '@consultorio.dental.cristo.rey',
  instagramUrl: 'https://www.instagram.com/consultorio.dental.cristo.rey/',
  mapsUrl: 'https://maps.app.goo.gl/qLXbFBiwJsN86uae6',
  coordinates: { lat: -34.7009432, lng: -58.4829577 },
  // Google tiene solo 4 opiniones sin texto: la web no muestra calificación ni sección de opiniones.
  googleRating: '4.0',
  googleReviews: '4',
  googleNote: 'Opiniones de pacientes en Google',
  googleScope: '',
  photo: null as string | null,
  servicesSummary: 'ortodoncia y odontología general',
  paymentMethods: [] as string[],
  // A CONFIRMAR: en Google solo figura el cierre a las 20 hs.
  hoursSummary: 'Lunes a viernes de 9 a 20 hs',
  headline: 'Tu sonrisa,',
  headlineHighlight: 'bien cuidada',
  locationLabel: 'Villa Celina',
};

export interface SocialLink {
  id: 'instagram' | 'facebook' | 'tiktok' | 'threads';
  label: string;
  handle: string;
  url: string;
}

export const SOCIALS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@consultorio.dental.cristo.rey',
    url: 'https://www.instagram.com/consultorio.dental.cristo.rey/',
  },
];

export interface Branch {
  id: string;
  label: string;
  zone: string;
  fullAddress: string;
  mapsUrl: string;
  mapQuery: string;
  whatsapp: string;
  whatsappDisplay: string;
  /** Foto de la fachada (ruta dentro de /public); null muestra un recuadro reservado. */
  photo: string | null;
  /** Video del lugar (ruta dentro de /public); si existe se muestra en lugar de la foto. */
  video: string | null;
  showSchedule: boolean;
}

// Una sola sede. El video "dónde estamos" lo aportó Luis desde el escritorio.
export const BRANCHES: Branch[] = [
  {
    id: 'villa-celina',
    label: 'Bragado esq. Bariloche',
    zone: 'Villa Celina',
    fullAddress: 'Bragado esquina Bariloche, Villa Celina, Provincia de Buenos Aires',
    mapsUrl: 'https://maps.app.goo.gl/qLXbFBiwJsN86uae6',
    mapQuery: '-34.7009432,-58.4829577',
    whatsapp: '5491158406949',
    whatsappDisplay: '011 5840-6949',
    photo: null,
    video: 'videos/donde-estamos.mp4',
    showSchedule: true,
  },
];

/** Texto para aclarar la sucursal en los mensajes de WhatsApp; vacío si hay una sola sede. */
export const sedeTxt = (b: Branch): string => (BRANCHES.length > 1 ? ", sucursal ${b.label} (${b.zone})" : '');

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users' | 'pin';
  title: string;
  text: string;
}

// Las tres cajitas debajo del inicio: solo datos que figuran en su ficha de Google e Instagram.
export const HIGHLIGHTS: Highlight[] = [
  { icon: 'pin', title: 'En Villa Celina', text: 'Bragado esquina Bariloche' },
  { icon: 'heart', title: 'Ortodoncia y odontología', text: 'Consultá por tu tratamiento' },
  { icon: 'calendar', title: 'Turnos por WhatsApp', text: 'Escribinos y coordinamos tu turno' },
];

export interface Review {
  author: string | null;
  text: string;
}

// Sin opiniones con texto en Google: la sección de opiniones no se muestra.
export const REVIEWS: Review[] = [];

export interface TeamMember {
  role: string;
  name: string | null;
  photo: string | null;
  bio?: string;
}

// Equipo. Nombre y foto: A CONFIRMAR con el consultorio (en Google figura como "Ortodoncista").
export const TEAM: TeamMember[] = [{ role: 'Ortodoncia y odontología', name: null, photo: null }];

export interface DentalService {
  id: string;
  name: string;
  description: string;
  icon: 'stethoscope' | 'sparkles' | 'layers' | 'shield' | 'activity' | 'smile' | 'crown' | 'anchor' | 'gem';
}

// A CONFIRMAR con el consultorio: lista de ejemplo para la demo (en Google figura como "Ortodoncista");
// se quita lo que no realicen.
export const SERVICES: DentalService[] = [
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description: 'Corrección de la posición de los dientes y de la mordida, con controles en cada etapa.',
    icon: 'sparkles',
  },
  {
    id: 'integral',
    name: 'Odontología general',
    description: 'Revisión y cuidado de tu salud bucal de forma completa, con un plan pensado para vos.',
    icon: 'stethoscope',
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental',
    description: 'Remoción de sarro y placa para mantener tus encías y tus dientes sanos.',
    icon: 'smile',
  },
  {
    id: 'caries',
    name: 'Caries y restauraciones',
    description: 'Arreglo de caries y restauraciones para devolverle forma y función a tus dientes.',
    icon: 'activity',
  },
  {
    id: 'conducto',
    name: 'Tratamiento de conducto',
    description: 'Endodoncia para conservar tu diente cuando el nervio está afectado.',
    icon: 'shield',
  },
  {
    id: 'extracciones',
    name: 'Extracciones',
    description: 'Extracción de piezas dentales cuando es necesaria, con indicaciones claras para el después.',
    icon: 'crown',
  },
  {
    id: 'protesis',
    name: 'Prótesis',
    description: 'Reposición de piezas dentales, fijas o removibles, para recuperar la masticación y la sonrisa.',
    icon: 'layers',
  },
  {
    id: 'estetica',
    name: 'Estética dental',
    description: 'Tratamientos para mejorar el color, la forma y la armonía de tu sonrisa.',
    icon: 'gem',
  },
  {
    id: 'urgencias',
    name: 'Urgencias',
    description: 'Si tenés dolor o una urgencia, escribinos por WhatsApp y vemos cómo atenderte.',
    icon: 'shield',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
}

// A CONFIRMAR: en Google solo figura el cierre a las 20 hs; el resto es un horario de ejemplo para la demo.
export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '20:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '20:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '20:00' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '20:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '20:00' },
  { dayName: 'Sábado', dayIndex: 6, open: null, close: null },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const day = SCHEDULE.find((d) => d.dayIndex === today);
  if (day?.open && day.close) {
    if (minutes >= toMinutes(day.open) && minutes < toMinutes(day.close)) {
      return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${day.close} hs` };
    }
    if (minutes < toMinutes(day.open)) {
      return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${day.open} hs` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
    if (next?.open) {
      const cuando = i === 1 ? 'mañana' : `el ${next.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${next.open} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

/** Enlace de WhatsApp con el mensaje armado; sin número usa el de turnos general. */
export function whatsappUrl(message: string, number: string = CLINIC.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
