import { AppAdvertisement } from "../../types/adverts";

export interface IApplicationState{
    loading: boolean | undefined,
    isMobile: boolean,
    notifications: AppNotification[],
    adverts: AppAdvertisement
}

export enum AppActions {
    SET_LOADING = '@@app/SET_LOADNG',
    SET_MOBILE = '@@app/SET_MOBILE',
    ADD_NOTIFICATION = "@@app/ADD_NOTIFICATION",
    REMOVE_NOTIFICATION = "@@app/REMOVE_NOTIFICATION",
    CLEAR_NOTIFICATIONS = "@@app/CLEAR_NOTIFICATIONS",
    FETCH_ADVERTS = "@@app/FETCH_ADVERTS",
    SET_ADVERTS = "@@app/SET_ADVERTS",
    SUBSCRIBE_NOTIFICATIONS = "@app/SUBSCRIBE_NOTIFICATIONS",
    SEND_MESSAGE = "@app/SEND_MESSAGE"
}

export interface AppNotification extends SocketMessage{
    uuid: string
}



export enum NotificationType{
    NEW_REGISTRATION = "NEW_REGISTRATION",
}

export interface SocketMessage{
    type: NotificationType,
    payload: any
}