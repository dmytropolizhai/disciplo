import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import EN from './languages/en.json';
import UK from './languages/uk.json';

const resources = {
  en: { common: EN },
  uk: { common: UK },
} as const;

const getDeviceLanguage = (): string => {
  const locales = Localization.getLocales();
  const primaryLocale = locales[0];
  
  if (!primaryLocale?.languageCode) return 'en';
  
  // Check if we support the full locale (e.g., 'en-US')
  if (primaryLocale.languageTag && resources[primaryLocale.languageTag as keyof typeof resources]) {
    return primaryLocale.languageTag;
  }
  
  // Fall back to just the language code (e.g., 'en')
  return resources[primaryLocale.languageCode as keyof typeof resources] 
    ? primaryLocale.languageCode 
    : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;