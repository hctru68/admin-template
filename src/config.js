class Config {
    constructor() {
        this.country = 'Viet Nam';
        this.i18n = {};         

        this.reCaptchaSitekey = process.env.REACT_APP_RECAPTCHA_SITEKEY;
    }
}

export default new Config();
