import {action} from "typesafe-actions";
import { AppActions, AppNotification } from "./types";
import { EmptyAction, PayloadAction } from "typesafe-actions/dist/type-helpers";
import { AppAdvertisement } from "../../types/adverts";
import { IUser } from "../user/types";

export const setAppLoading = (isLoading: boolean) : PayloadAction<AppActions, boolean> => action(AppActions.SET_LOADING, isLoading);
export const setMobile = (isMobile: boolean) : PayloadAction<AppActions, boolean> => action(AppActions.SET_MOBILE, isMobile);
export const addNotification = (notification: AppNotification):  PayloadAction<AppActions, AppNotification> => action(AppActions.ADD_NOTIFICATION, notification);
export const removeNotification = (uuid: string):  PayloadAction<AppActions, string> => action(AppActions.REMOVE_NOTIFICATION, uuid);
export const fetchAds = ():  EmptyAction<AppActions> => action(AppActions.FETCH_ADVERTS);
export const setAds = (ads: AppAdvertisement):  PayloadAction<AppActions, AppAdvertisement> => action(AppActions.FETCH_ADVERTS, ads);
export const clearNotifications = ():  EmptyAction<AppActions> => action(AppActions.CLEAR_NOTIFICATIONS);
export const subscribeNotifications = (user: IUser): PayloadAction<AppActions, IUser> => action(AppActions.SUBSCRIBE_NOTIFICATIONS, user);
