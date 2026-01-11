import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import pl from './locales/pl.json';
import en from './locales/en.json';
import de from './locales/de.json';

// Detect language from URL parameter or localStorage
const getInitialLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && ['pl', 'en', 'de'].includes(langParam)) {
    return langParam;
  }
  return localStorage.getItem('language') || 'pl';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
      de: { translation: de },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
