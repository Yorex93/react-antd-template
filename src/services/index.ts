import { AbstractService } from "./base/abstract-service";
import { ServiceResponse } from "../types/api";
import HTTPClient from "../utils/http-client";

// API CALLS

export class ApiService extends AbstractService {
    constructor(){
        super();
    }

    makeApiCall () : Promise<ServiceResponse<String>> {
        let url = "http://google.com";
        let apiCall = HTTPClient.get(url);
        return this.handleResponse(apiCall);
    }
}
