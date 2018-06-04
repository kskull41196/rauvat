import { latitude } from "geolib";

export interface IFilterProduct {
    name?: string,
    global_category_id?: string,
    area_id?: string,
    is_quick_post?: boolean,
    trade_type?: string,
    point?: {
        longitude: string,
        latitude: string
    },
    radius?: number
}

export interface IPostProduct {
    name: string,
    price: string,
    short_description?: string,
    description: string,
    global_category_id: string,
    thumb: string,
    list_image?: string[],
    is_from_store: boolean,
    address?: string,
    longitude?: number,
    latitude?: number,
    duration?: number,
    is_limit_duration?: boolean,
    is_buy: boolean,
    attribute: object,
    type: 'BUY' | 'SELL',
    state: 'REVIEW' | 'VALID' | 'BANNED' | 'OUTDATED'
}

export interface IPostQuickProduct {
    name: string,
    price: string,
    short_description?: string,
    description: string,
    global_category_id: string,
    thumb: string,
    list_image?: string[],
    is_from_store: boolean,
    address?: string,
    longitude?: number,
    latitude?: number,
    duration?: number,
    is_limit_duration?: boolean,
    is_buy: boolean,
    attribute: object,
    type: 'BUY' | 'SELL',
    state: 'REVIEW' | 'VALID' | 'BANNED' | 'OUTDATED'
}