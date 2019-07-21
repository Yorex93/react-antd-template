import {Reducer} from 'redux';
import {  AppActions, IApplicationState, AppNotification } from './types';
import { IAction } from '../../types/redux/action';
import { AppAdvertisement } from '../../types/adverts';

const initialState: IApplicationState = {
    loading: false,
    isMobile: false,
    notifications: [],
    adverts: {
        feature1: []
    }
};

const reducer: Reducer<IApplicationState> = (state = initialState, action: IAction) => {
    switch (action.type) {
        case AppActions.SET_LOADING: {
            return { ...state, loading: action.payload }
        }

        case AppActions.SET_MOBILE: {
            return { ...state, isMobile: !!action.payload }
        }
        
        case AppActions.SET_ADVERTS: {
            const adverts : AppAdvertisement = action.payload || state.adverts;
            return { ...state, adverts }
        }

        case AppActions.ADD_NOTIFICATION: {
            let notification: AppNotification = action.payload as any;
            return { ...state, notifications: [...state.notifications, notification] }
        }


        case AppActions.REMOVE_NOTIFICATION: {
            let uuid: string = action.payload as any;
            return { ...state, notifications: state.notifications.filter(n => n.uuid !== uuid) }
        }

        case AppActions.CLEAR_NOTIFICATIONS: {
            return { ...state, notifications: [] }
        }

        default: {
            return state;
        }
    }
};

export { reducer as appReducer };
