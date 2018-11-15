import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './english';
import vi from './vietnamese';

i18n.use(LanguageDetector).init({
    resources: {
        // en: en,
        vi: vi,
    },
    fallbackLng: 'vi',
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