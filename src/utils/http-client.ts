import axios, { AxiosPromise, AxiosInstance } from 'axios';
import appConfig from '../config';

/**
 * API Client for making api calls
 */
export default class HTTPClient {
    
    public getClient(): AxiosInstance {
        return axios.create({
                responseType: 'json',
                baseURL: appConfig.API_ENDPOINT,
                timeout: appConfig.API_TIMEOUT_MILLI,
                headers: {
                    Accept: 'application/json',
                    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : undefined
                }
            });
    }

    public static get(url: string): AxiosPromise {
        return new HTTPClient().getClient().get(url);
    }

    public static getBlob(url: string): AxiosPromise {
        return new HTTPClient().getClient().get(url, { responseType: 'blob' });
    }

    public static post(url: string, data?: any): AxiosPromise {
        return new HTTPClient().getClient().post(url, data);
    }

    static postMultipart(url: string, data?: any): AxiosPromise {
        return axios.create({
            responseType: 'json',
            baseURL: appConfig.API_ENDPOINT,
            timeout: appConfig.API_TIMEOUT_MILLI,
            headers: {
                Accept: 'application/json',
                Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : undefined,
                'Content-type': 'multipart/form-data'
            }
        }).post(url, data);
    }

    public static put(url: string, data?: any): AxiosPromise {
        return new HTTPClient().getClient().put(url, data);
    }

    public static delete(url: string): AxiosPromise {
        return new HTTPClient().getClient().delete(url);
    }

    public static patch(url: string, data?: any): AxiosPromise {
        return new HTTPClient().getClient().patch(url, data);
    }
}
