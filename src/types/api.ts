
// SERVICE WRAPPER
// DO ServiceResponse<T> = T if no wrapper
export type ServiceResponse<T> = {
    success: boolean,
    result: T,
    errors: []
}

export interface PageResult<T>{
    totalElements: number,
    number: number,
    size: number,
    content: T[],
}

export interface PageRequest{
    page: number,
    pageSize: number
}

