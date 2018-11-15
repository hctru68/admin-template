import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './english';
import vi from './vietnamese';

i18n.use(LanguageDetector).init({
    resources: {
        en: en,       
    },
    lng: 'en',
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

// catch the event and make changes accordingly
i18n.on('languageChanged', function(lng) {
    // E.g. set the moment locale with the current language
    //moment.locale(lng);

    // then re-render your app
    //app.render();
});

export default i18n;