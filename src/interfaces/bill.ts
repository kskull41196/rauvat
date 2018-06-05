import { StringUrlWithLength } from "aws-sdk/clients/lexruntime";

export interface ICreateOrder {
    seller_id: string,
    address: string,
    longitude: number,
    lattitude: number,
    items: {
        product_id: string,
        amount: number
    }[],
    note: string,
    buyer_id: string,
    user_id: string
}