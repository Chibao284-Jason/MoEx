import i18n from 'i18next';
import { initReactI18next, } from "react-i18next";
import language from './language';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: language,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    compatibilityJSON: 'v3',
  });

export default i18n;
