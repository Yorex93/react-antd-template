import { AppSections } from "./app-sections";

export enum AdvertPosition {
    SIDEBAR_LEFT="SIDEBAR_LEFT",
    SIDEBAR_RIGHT="SIDEBAR_RIGHT",
    TOPBAR="TOPBAR"
}

export interface AdvertPlacement {
    position: AdvertPosition,
    ads : AppAdvert[],
    height?: number
}

export interface AppAdvert {
    url: string,
    imageUrl?: string,
    text?: string
}

export type Advertisement<T> = {
    [K in keyof T]: AdvertPlacement[]
}

export type AppAdvertisement = Advertisement<AppSections>;