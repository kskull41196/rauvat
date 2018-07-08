import { BaseController } from './baseController'
import {
    tokenService,
    firebaseService,
    employeeService,
    errorService,
    billService,
    utilService
} from '@/services';
import { config } from '@/config'
import * as guid from 'guid';
import * as dateFormat from 'dateformat'
import * as querystring from 'qs'
export class VnpayController extends BaseController {
    constructor() {
        super()
    }

    async  createPaymentBillUrl(params: any) {
        let {
            bill_id
        } = params;

        let bill = await billService.getItem({
            filter: {
                id: bill_id
            }
        });
        if (!bill) throw errorService.database.recordNotFound("Bill not found");

        params.amount = bill.total_price;

        let tmnCode = config.vnpay.tmnCode;
        let secretKey = config.vnpay.hashSecret;
        let vnpUrl = config.vnpay.url
        let payReturnUrl = config.vnpay.payReturnUrl;

        let vnp_Params: any = {

        };

        let session_id = guid.raw();

        vnp_Params['vnp_Version'] = '2';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Locale'] = 'vn';
        vnp_Params['vnp_CurrCode'] = 'VND';
        vnp_Params['vnp_TxnRef'] = session_id
        vnp_Params['vnp_OrderInfo'] = JSON.stringify({
            type: 'bill',
            bill_id
        });
        vnp_Params['vnp_OrderType'] = 'topup';
        vnp_Params['vnp_BankCode'] = "NCB";
        vnp_Params['vnp_Amount'] = params.amount * 100;
        vnp_Params['vnp_ReturnUrl'] = payReturnUrl;
        vnp_Params['vnp_IpAddr'] = params.ipAddr;
        vnp_Params['vnp_CreateDate'] = dateFormat(new Date(), 'yyyymmddHHmmss')
       
        vnp_Params = utilService.sortObject(vnp_Params);
       
        let secureHash: string = utilService.secureHash(vnp_Params, secretKey);
       
       
        vnp_Params['vnp_SecureHash'] = secureHash;
        vnp_Params['vnp_SecureHashType'] = 'MD5';
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });
        return {
            url: vnpUrl
        }


    }

}