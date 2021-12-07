import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  defaultNS: 'translation',
  resources: resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
