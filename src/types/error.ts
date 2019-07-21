import {AxiosError} from  "axios";

export class ApiError extends Error{
    private httpStatusCode: number;

    constructor(err: AxiosError) {
        super();
        if(err.response && err.response.data.errors && err.response.data.errors.length > 0){
            this.httpStatusCode = err.response.status;
            this.message = err.response.data.errors[0].message;
        } else {
            this.httpStatusCode = 500;
            this.message = "Unknown error occurred";
        }
    }
}