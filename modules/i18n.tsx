import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../public/locales/en/translationEN.json";
import translationCS from "../public/locales/cs/translationCS.json";

const resources = {
  cs: {
    translation: translationCS,
  },
  en: {
    translation: translationEN,
  },
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["cs", "en"],
    fallbackLng: "cs",
    keySeparator: false,
    interpolation: { escapeValue: false },
    detection: DETECTION_OPTIONS,
  });

export default i18n;
