import Cookies from 'js-cookie';

import { cookieName, fallBackLng, languages, locales } from './settings';

export function getLanguage(): languages {
  return Cookies.get(cookieName) as languages || fallBackLng;
}

export function switchLanguage(lng: languages) {
  Cookies.set(cookieName, lng);
}

export function setLanguage() {
  document.documentElement.lang = getLanguage();
}

export class Translator {
  isClient: boolean;
  language: languages;
  namespace: string;
  constructor(isclient:boolean, language: languages, namespace: string) {
    this.isClient = isclient;
    this.language = language;
    this.namespace = namespace;
  }

  translate(key: string, namespace: string = this.namespace): string {
    const text: string = this.isClient
      ? locales[this.language][namespace][key]
      : locales.en[namespace][key];

    if (!text) {
      console.warn(
        `Translation for ${this.language} ${namespace} ${key} not found`
        );
    }
    return text;
  }
  getNameSpace(): string {
    return this.namespace;
  }
}