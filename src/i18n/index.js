/* eslint-disable no-unused-vars */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './english';
import vi from './vietnamese';
import { getLocalStorage } from '../utilities/storage';
import { getLanguageDefault } from '../utilities/languageDefault';
import { common } from '../contants/common';

i18n.use(LanguageDetector).init({
    resources: {
        en: en,
        vi: vi,
    },
    lng: getLanguageDefault(),
    fallbackLng: ['en', 'vi'],
    ns: ['translations', 'message',],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});
export default i18n;