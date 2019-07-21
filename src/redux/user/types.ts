export interface IUser{
    firstName: string,
    lastName: string,
    email: string,
    username: string,
}

export interface ILoginRequest{
    email: string,
    password: string
}

export interface ILoginResponse{
    user: IUser,
    token: string,
}

export interface CompletePasswordResetRequest{
    resetCode: string;
    newPassword: string,
    comfirmPassword: string
}

export interface PasswordResetResponse{
    successful: boolean,
    message: string       
}

export interface InitiatePasswordResetRequest{
    email: string,
}

export enum UserActionTypes {
    LOGIN_REQUEST = '@@user/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
    LOGIN_ERROR = '@@user/LOGIN_ERROR',
    LOGOUT = '@@user/LOGOUT',
    LOGOUT_SUCCESS = '@@user/LOGOUT_SUCCESS',
    INITIATE_PASSWORD_RESET_REQUEST = '@@user/INITIATE_PASSWORD_RESET_REQUEST',
    INITIATE_PASSWORD_RESET_SUCCESS = '@@user/INITIATE_PASSWORD_RESET_SUCCESS',
    INITIATE_PASSWORD_RESET_ERROR = '@@user/INITIATE_PASSWORD_RESET_ERROR',
    COMPLETE_PASSWORD_RESET_REQUEST = '@@user/COMPLETE_PASSWORD_RESET_REQUEST',
    COMPLETE_PASSWORD_RESET_SUCCESS = '@@user/COMPLETE_PASSWORD_RESET_SUCCESS',
    COMPLETE_PASSWORD_RESET_ERROR = '@@user/COMPLETE_PASSWORD_RESET_ERROR',
    RESET_STATE = "@@user/RESET_STATE",
    PASSWORD_CHANGE_SUCCESS = "@@user/PASSWORD_CHANGE_SUCCESS"
}

export interface IUserState {
    readonly user?: IUser,
    readonly token?: string,
    readonly loginErrors?: string,
    readonly registerErrors?: string,
    readonly loggingIn: boolean,
    readonly registering: boolean,
    readonly initiatePasswordResetError?: string,
    readonly initiatingPasswordReset: boolean,
    readonly initiatingPasswordResetSuccessMsg: string,
    readonly completePasswordResetError?: string,
    readonly completePasswordResetSuccessMsg?: string,
    readonly completingPasswordReset?: boolean,
}