import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from '@assets/locales/en.json';
import ta from '@assets/locales/ta.json';
i18n
  .use(initReactI18next)
  .init({
    ns: ['common', 'authentication', 'profile', 'errors'],
    defaultNS: 'common',
    debug: false,
    compatibilityJSON: 'v3',
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    resources: {
      en: en,
      ta: ta,
    },
  })
  .then(t => {
    console.log('Language loaded successfly');
  });
export default i18n;
