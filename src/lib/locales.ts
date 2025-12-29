import type { Language } from './translations';

export const LOCALES: Array<{
  locale: Language;
  label: string; // BG / GB / PL / GR
  country: string; // ISO 3166-1 alpha-2
  name: string; // Full country name
}> = [
  { locale: 'bg', label: 'BG', country: 'BG', name: 'Bulgaria' },
  { locale: 'en-GB', label: 'GB', country: 'GB', name: 'United Kingdom' },
  { locale: 'pl', label: 'PL', country: 'PL', name: 'Poland' },
  { locale: 'el', label: 'GR', country: 'GR', name: 'Greece' },
];

export function getLocaleInfo(locale: Language) {
  return LOCALES.find((l) => l.locale === locale) || LOCALES[0];
}
