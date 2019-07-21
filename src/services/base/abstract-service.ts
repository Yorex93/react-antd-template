import appConfig from "../../config";
import { AxiosPromise, AxiosError } from "axios";
import { ApiError } from "../../types/error";

export abstract class AbstractService{
    protected apiEndpoint: string;
    protected isMock: boolean;
    protected isDebug: boolean;


    constructor(){
        this.apiEndpoint = appConfig.API_ENDPOINT;
        this.isMock = appConfig.isMock;
        this.isDebug = appConfig.isDebug;
    }

    protected handleResponse = (axiosPromise: AxiosPromise<any>): Promise<any> => {
        return new Promise((resolve, reject) => {
            axiosPromise.then((resp) => {
                resolve(resp.data);
            }).catch(err => {
                this.checkUnauthorized(err);
                reject(new ApiError(err).message);
            });
        });
    }

    private checkUnauthorized = (err: AxiosError) => {
        if(err.response){
            if([401, 403].includes(err.response.status)){
                localStorage.clear();
                window.location.reload();
            }
        }
    }
}