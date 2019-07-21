import { ServiceResponse, PageRequest, PageResult } from "../../types/api";
import { getRandomInt, getRandomArbitrary } from "../../utils/random";
import appConfig from "../../config";

interface PromisifyRequest{
    response: any, 
    percentFail?: number,
    delay?: any,
    errorMsg?: string,
    condition?: boolean 
}

export abstract class MockService{

    protected delay = appConfig.mockApiResponseDelay;

    protected mockSuccessResponse (response: any) : ServiceResponse<any> {
        return {
            success: true,
            result: response,
            errors: []
        }
    }

    protected mockPageItems<T>(pageRequest: PageRequest, creator: (i: number) => T, comparator?: (a: T, b: T) => number): PageResult<T> {
        let content :T[] = [];
        for(let i = 0; i < pageRequest.pageSize; i++){
            content.push(creator(i));
        }

        if(comparator){
            content.sort(comparator);
        }
        return {
            totalElements: getRandomArbitrary(pageRequest.pageSize, (pageRequest.pageSize * 5)),
            number: pageRequest.page,
            size: pageRequest.pageSize,
            content
        }
    }

    protected promisifyMockResponse(value: PromisifyRequest): Promise<ServiceResponse<any>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.randomSuccess(value.percentFail || 0)){
                    resolve(this.mockSuccessResponse(value.response));
                } else {
                    reject(value.errorMsg || "Error occurred");
                }
            }, (value.delay || this.delay));
        });
    }

    protected randomInt(max: number): number {
        return getRandomInt(max);
    }

    protected randomIntBetween(min: number, max: number): number {
        return getRandomArbitrary(min, max);
    }

    protected randomSuccess(percentFail: number = 0): boolean {
        if(percentFail === 0) return true;
        return getRandomInt(100) > percentFail;
    }
}