import {Reducer} from 'redux'
import { UserActionTypes, IUserState, ILoginResponse } from './types'

const initialState: IUserState = {
    user: undefined,
    loginErrors: undefined,
    registerErrors: undefined,
    loggingIn: false,
    registering: false,
    initiatePasswordResetError: '',
    initiatingPasswordReset: false,
    initiatingPasswordResetSuccessMsg: '',
    completePasswordResetError: '',
    completePasswordResetSuccessMsg: '',
    completingPasswordReset: false,
};

const reducer: Reducer<IUserState> = (state : IUserState = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_REQUEST: {
            return { ...state, loggingIn: true, loginErrors: undefined }
        }

        case UserActionTypes.LOGIN_SUCCESS: {
            let response: ILoginResponse = action.payload;

            let newState: IUserState = { 
                ...state, 
                loggingIn: false, 
                user: response.user, 
                token: response.token,
                loginErrors: undefined 
            }
            return newState;
        }

        case UserActionTypes.LOGIN_ERROR: {
            return { ...state, loggingIn: false, loginErrors: action.payload  }
        }

        case UserActionTypes.LOGOUT_SUCCESS: {
            return { ...state, user: undefined, token: undefined }
        }

        case UserActionTypes.INITIATE_PASSWORD_RESET_REQUEST: {
            return { ...state, initiatingPasswordReset: true, initiatePasswordResetError: undefined }
        }

        case UserActionTypes.INITIATE_PASSWORD_RESET_ERROR: {
            return { ...state, initiatingPasswordReset: false, initiatePasswordResetError: action.payload }
        }

        case UserActionTypes.INITIATE_PASSWORD_RESET_SUCCESS: {
            return { ...state, initiatingPasswordReset : false, initiatingPasswordResetSuccessMsg: action.payload }
        }

        case UserActionTypes.COMPLETE_PASSWORD_RESET_REQUEST: {
            return { ...state, completingPasswordReset: true, completePasswordResetError: undefined }
        }

        case UserActionTypes.COMPLETE_PASSWORD_RESET_ERROR: {
            return { ...state, completingPasswordReset: false, completePasswordResetError: action.payload }
        }

        case UserActionTypes.COMPLETE_PASSWORD_RESET_SUCCESS: {
            return { ...state, completingPasswordReset : false, completePasswordResetSuccessMsg: action.payload }
        }

        case UserActionTypes.PASSWORD_CHANGE_SUCCESS: {
            let user = state.user;
            return { ...state, user }
        }

        case UserActionTypes.RESET_STATE: {
            return { ...initialState, user: state.user }
        }

        default: {
            return state
        }
    }
};

export { reducer as userReducer };
