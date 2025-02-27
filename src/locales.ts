import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { USER_SITE } from "./consts";

export function initI18n() {
  if (i18next.isInitialized) {
    return;
  }
  i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "fr"],
      detection: {
        order: ["navigator", "querystring", "cookie", "localStorage"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: `${USER_SITE}/locales/{{lng}}/translation.json`,
      },
    });
}
