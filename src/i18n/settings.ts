// languages
import en from './locales/en';
import nl from './locales/nl';

export type languageJsonObject = {
  [key: string]: { [key: string]: string };
};

const enJson = en as unknown as languageJsonObject;
const nlJson = nl as unknown as languageJsonObject;

export const locales = { en: enJson, nl: nlJson };

// other settings

export const fallBackLng = 'en';
export const cookieName = 'language';
export const debugCookieName = 'debug_language';
export const defaultNS = 'home';
export type languages = 'en' | 'nl';