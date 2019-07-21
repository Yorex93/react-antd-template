import {
    ILoginRequest, UserActionTypes, 
    InitiatePasswordResetRequest, CompletePasswordResetRequest, ILoginResponse 
} from "./types";
import {action} from "typesafe-actions";
import { EmptyAction, PayloadAction } from "typesafe-actions/dist/type-helpers";

/**
 *  Login Action Creators 
 */
export const loginRequest = (loginRequest: ILoginRequest) : PayloadAction<UserActionTypes, ILoginRequest> => action(UserActionTypes.LOGIN_REQUEST, loginRequest);
export const loginSuccess = (data: ILoginResponse) : PayloadAction<UserActionTypes, ILoginResponse> => action(UserActionTypes.LOGIN_SUCCESS, data);
export const loginError = (message: string) : PayloadAction<UserActionTypes, string> => action(UserActionTypes.LOGIN_ERROR, message);

/**
 *  Logout Action Creators
 */
export const logout = () : EmptyAction<UserActionTypes> => action(UserActionTypes.LOGOUT);
export const logoutSuccess = () : EmptyAction<UserActionTypes> => action(UserActionTypes.LOGOUT_SUCCESS);


/**
 *  Initiate Password Reset Action Creators 
 */
export const initiatePasswordResetRequest = (request: InitiatePasswordResetRequest): PayloadAction<UserActionTypes, InitiatePasswordResetRequest> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_REQUEST, request);
export const initiatePasswordResetRequestError = (message: string): PayloadAction<UserActionTypes, string> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_REQUEST, message);
export const initiatePasswordResetRequestSuccess = (message: string): PayloadAction<UserActionTypes, string> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_REQUEST, message);

/**
 *  Complete Password Reset Action Creators 
 */
export const completePasswordResetRequest = (request: CompletePasswordResetRequest) : PayloadAction<UserActionTypes, CompletePasswordResetRequest> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_REQUEST, request);
export const completePasswordResetRequestError = (message: string) : PayloadAction<UserActionTypes, string> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_ERROR, message);
export const completePasswordResetRequestSuccess = (message: string) : PayloadAction<UserActionTypes, string> => action(UserActionTypes.COMPLETE_PASSWORD_RESET_SUCCESS, message);


export const passwordChanged = () : EmptyAction<UserActionTypes> => action(UserActionTypes.PASSWORD_CHANGE_SUCCESS);


