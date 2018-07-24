export default {
    MILE_TO_KILOMETER: 1.609344,
    KILOMETER_TO_MILE: 1 / 1.609344,
    METER_TO_MILE: 1 / (1.609344 * 1000)
}

export const CONST = {
    ORDERED: 'ORDERED',
    SUCCESSED: 'SUCCESSED',
    FAILED: 'FAILED'
}

export const USER_ROLES = {
    NORMAL: 'NORMAL',
    PREMIUM: 'PREMIUM'
}

export const FCM_ACTIONS = {
    SEND_NOTIFIATION: '0',
    WALLET: '1',
    PRODUCT_VALID: '2',
    PRODUCT_BANNED: '3',
    PRODUCT_EXPIRED: '4',
    PRODUCT_REVIEW: '5',
    BILL: '6',
    EDIT_USER: '7'
}