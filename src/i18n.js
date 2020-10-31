import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as translationFile from './i18n/translation';

i18n.on('languageChanged', (lng) => {
  // if the language we switched to is the default language we need to remove the /en from URL
  // if (lng === i18n.options.fallbackLng[0]) {
  //   if (window.location.pathname.includes(`/${i18n.options.fallbackLng[0]}`)) {
  //     const newUrl = window.location.pathname.replace(`/${i18n.options.fallbackLng[0]}`, '');
  //     window.location.replace(newUrl);
  //   }
  // }
});
const resources = {
  en: {
    translation: translationFile.en,
  },
  ar: {
    translation: translationFile.ar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
      formatSeparator: '.',
    },
    whitelist: ['en', 'ar'],
    fallbackLng: ['en'],
    detection: {
      order: ['querystring', 'path', 'navigator'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lng',
      checkWhitelist: true,
    },
  });

export default i18n;
