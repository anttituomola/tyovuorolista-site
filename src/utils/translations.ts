import fiTranslations from '../i18n/fi.json';
import enTranslations from '../i18n/en.json';
import svTranslations from '../i18n/sv.json';

type Locale = 'fi' | 'en' | 'sv';

const translations: Record<Locale, any> = {
  fi: fiTranslations,
  en: enTranslations,
  sv: svTranslations,
};

/**
 * Get translation for a key path (e.g., "nav.pricing" or "hero.title")
 * Falls back to Finnish if translation is missing
 */
export function t(key: string, locale: Locale = 'fi'): string {
  const keys = key.split('.');
  let value: any = translations[locale] || translations.fi;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Finnish
      value = translations.fi;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if translation not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * Get nested translation object
 */
export function getTranslationObject(key: string, locale: Locale = 'fi'): any {
  const keys = key.split('.');
  let value: any = translations[locale] || translations.fi;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Finnish
      value = translations.fi;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return null;
        }
      }
      break;
    }
  }
  
  return value;
}

/**
 * Get current locale from Astro context
 */
export function getLocaleFromAstro(Astro: any): Locale {
  try {
    const locale = Astro.locale || Astro.url.pathname.split('/')[1];
    if (locale === 'en' || locale === 'sv') {
      return locale;
    }
    return 'fi';
  } catch {
    return 'fi';
  }
}

/**
 * Get locale from URL pathname
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'en' || firstSegment === 'sv') {
    return firstSegment;
  }
  return 'fi';
}

/**
 * Path mappings from Finnish to English/Swedish
 */
const pathMappings: Record<string, Record<Locale, string>> = {
  '/yhteystiedot': {
    fi: '/yhteystiedot',
    en: '/en/contact',
    sv: '/sv/kontakt'
  },
  '/hinnoittelu': {
    fi: '/hinnoittelu',
    en: '/en/pricing',
    sv: '/sv/prissattning'
  },
  '/kayttoehdot': {
    fi: '/kayttoehdot',
    en: '/en/terms',
    sv: '/sv/villkor'
  },
  '/ravintolat-ja-kahvilat': {
    fi: '/ravintolat-ja-kahvilat',
    en: '/en/restaurants-and-cafes',
    sv: '/sv/restauranger-och-kafeer'
  },
  '/taksiyritykset-ja-kuljetus': {
    fi: '/taksiyritykset-ja-kuljetus',
    en: '/en/taxi-and-transport',
    sv: '/sv/taxi-och-transport'
  },
  '/siivous-ja-kiinteistopalvelut': {
    fi: '/siivous-ja-kiinteistopalvelut',
    en: '/en/cleaning-and-property-services',
    sv: '/sv/stadning-och-fastighetstjanster'
  },
  '/hotellit-ja-majatalot': {
    fi: '/hotellit-ja-majatalot',
    en: '/en/hotels-and-inns',
    sv: '/sv/hotell-och-vardshus'
  },
  '/tapahtumat-ja-sesonkityo': {
    fi: '/tapahtumat-ja-sesonkityo',
    en: '/en/events-and-seasonal-work',
    sv: '/sv/evenemang-och-sasongsarbete'
  }
};

/**
 * Get localized path for a given path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'fi') {
    return path;
  }
  
  // Check if we have a mapping for this path
  if (pathMappings[path]) {
    return pathMappings[path][locale];
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Don't add locale prefix if path already has one
  if (cleanPath.startsWith('en/') || cleanPath.startsWith('sv/')) {
    return `/${cleanPath}`;
  }
  
  return `/${locale}/${cleanPath}`;
}

/**
 * Get path without locale prefix
 */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'sv') {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
}

/**
 * Reverse path mappings - convert English/Swedish paths back to Finnish
 */
const reversePathMappings: Record<string, string> = {
  // English paths -> Finnish
  '/contact': '/yhteystiedot',
  '/pricing': '/hinnoittelu',
  '/terms': '/kayttoehdot',
  '/restaurants-and-cafes': '/ravintolat-ja-kahvilat',
  '/taxi-and-transport': '/taksiyritykset-ja-kuljetus',
  '/cleaning-and-property-services': '/siivous-ja-kiinteistopalvelut',
  '/hotels-and-inns': '/hotellit-ja-majatalot',
  '/events-and-seasonal-work': '/tapahtumat-ja-sesonkityo',
  // Swedish paths -> Finnish
  '/kontakt': '/yhteystiedot',
  '/prissattning': '/hinnoittelu',
  '/villkor': '/kayttoehdot',
  '/restauranger-och-kafeer': '/ravintolat-ja-kahvilat',
  '/taxi-och-transport': '/taksiyritykset-ja-kuljetus',
  '/stadning-och-fastighetstjanster': '/siivous-ja-kiinteistopalvelut',
  '/hotell-och-vardshus': '/hotellit-ja-majatalot',
  '/evenemang-och-sasongsarbete': '/tapahtumat-ja-sesonkityo',
};

/**
 * Convert a path from any locale to Finnish path
 */
export function convertToFinnishPath(path: string): string {
  // Remove leading slash for lookup
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  
  // Check reverse mappings first
  if (reversePathMappings[cleanPath]) {
    return reversePathMappings[cleanPath];
  }
  
  // If path already starts with Finnish path, return as is
  if (pathMappings[cleanPath]) {
    return cleanPath;
  }
  
  // Remove locale prefix if present
  const segments = cleanPath.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'sv') {
    const pathWithoutLocale = '/' + segments.slice(1).join('/');
    // Check if this path maps to Finnish
    if (reversePathMappings[pathWithoutLocale]) {
      return reversePathMappings[pathWithoutLocale];
    }
    return pathWithoutLocale;
  }
  
  return cleanPath;
}

