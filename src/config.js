class Config {
    constructor() {
        this.country = 'Viet Nam';
        this.i18n = {};
        //URL API
        this.apiService = {
            host: process.env.REACT_APP_URL_BASE_API,
            hostMock: process.env.REACT_APP_URL_BASE_MOCK_API,
            proxy: process.env.REACT_APP_URL_PROXY_API,
            version: process.env.REACT_APP_VERSION_API,
        };
    }
}

export default new Config();
