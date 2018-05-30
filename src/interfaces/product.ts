import { latitude } from "geolib";

export interface IFilterProduct {
    name?: string,
    global_category_id?: string,
    area_id ?: string,
    is_quick_post?: boolean,
    trade_type?: string,
    point?: {
        longitude: string,
        latitude: string
    },
    radius?: number
}