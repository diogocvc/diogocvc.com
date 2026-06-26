import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enCases from './locales/en/cases.json';
import ptCommon from './locales/pt-BR/common.json';
import ptHome from './locales/pt-BR/home.json';
import ptAbout from './locales/pt-BR/about.json';
import ptCases from './locales/pt-BR/cases.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    cases: enCases,
  },
  'pt-BR': {
    common: ptCommon,
    home: ptHome,
    about: ptAbout,
    cases: ptCases,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'cases'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
  });

export default i18n;
