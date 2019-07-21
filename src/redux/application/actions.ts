import {action} from "typesafe-actions";
import { AppActions } from "./types";
import { EmptyAction, PayloadAction } from "typesafe-actions/dist/type-helpers";
import { AppAdvertisement } from "../../types/adverts";

export const setAppLoading = (isLoading: boolean) : PayloadAction<AppActions, boolean> => action(AppActions.SET_LOADING, isLoading);
export const setMobile = (isMobile: boolean) : PayloadAction<AppActions, boolean> => action(AppActions.SET_MOBILE, isMobile);
export const addNotification = (notification: Notification):  PayloadAction<AppActions, Notification> => action(AppActions.ADD_NOTIFICATION, notification);
export const removeNotification = (uuid: string):  PayloadAction<AppActions, string> => action(AppActions.REMOVE_NOTIFICATION, uuid);
export const fetchAds = ():  EmptyAction<AppActions> => action(AppActions.FETCH_ADVERTS);
export const setAds = (ads: AppAdvertisement):  PayloadAction<AppActions, AppAdvertisement> => action(AppActions.FETCH_ADVERTS, ads);
export const clearNotifications = ():  EmptyAction<AppActions> => action(AppActions.CLEAR_NOTIFICATIONS);
