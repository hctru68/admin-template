import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n'; // initialized i18next instance
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
), document.getElementById('root'));

serviceWorker.unregister();
