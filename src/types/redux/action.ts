export interface IAction<T = undefined>{
    type: string,
    payload?: T
}