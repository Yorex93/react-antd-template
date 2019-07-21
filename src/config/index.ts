class AppConfig {
    API_ENDPOINT: string;
    // Timeouts for API Calls
    API_TIMEOUT_MILLI: number;
    APP_IMAGES: {
        logo: string,
    }
    CONTACT_INFO: {
        telephone: string[],
        email: string[]
    }
    isMock: boolean;
    isDebug: boolean;
    mockApiResponseDelay: number;

    constructor(){
        this.API_ENDPOINT = "";
        this.API_TIMEOUT_MILLI = 30000;
        this.APP_IMAGES = {
            logo: process.env.REACT_APP_LOGO_URL || ""
        }
        this.CONTACT_INFO = {
            telephone: [],
            email: []
        }
        this.isMock = process.env.REACT_APP_MOCK === 'true'
        this.isDebug = process.env.REACT_APP_DEBUG === 'true'
        this.mockApiResponseDelay = 1500;
    }
}

export default new AppConfig();
