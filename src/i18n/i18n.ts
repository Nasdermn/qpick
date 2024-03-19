import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/russian.json';
import translationEN from './locales/english.json';
import translationKAZ from './locales/kazakh.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  kaz: {
    translation: translationKAZ,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'en', // Язык по умолчанию, если не найден поддерживаемый язык
  interpolation: {
    escapeValue: false, // Избежание экранирования HTML-символов
  },
});

export default i18n;
