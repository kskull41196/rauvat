import * as Ajv from 'ajv'
import * as AjvError from 'ajv-errors'
import * as AjvKeyWords from 'ajv-keywords'
import * as _ from 'lodash'
export class UtilService {
    validateJSON(schema: any, json: any = {}) {
        const ajv = new Ajv({ allErrors: true, jsonPointers: true });
        AjvError(ajv, { singleError: true })
        AjvKeyWords(ajv, ['switch'])
        const valid = ajv.validate(schema, json);
        return {
            isValid: valid,
            message: ajv.errorsText()
        }
    }
    async parseMessengeWithInfo(params: {
        message: string,
        info: any
    }) {
        let { message } = params
        const { info } = params
        const regex = /({|})/g
        const regex2 = /({{\w+}})|({{\w+(?:\.\w+)+)}}/g
        if (regex.test(message)) {
            const replaceText = message.match(regex2)
            for (let item of replaceText) {
                item = item.replace(regex, '');
                message = message.replace(item, _.get(info, item));
            }
            message = message.replace(regex, '')
        }
        return message
    }
    async encode(data: any) {
        const arr = this.encodeObject(data)
        return arr.join(':')
    }
    encodeObject(data: any): any[] {
        const arr = [];
        const keys = Object.keys(data)
        for (const key of keys) {
            let str;
            let arrobj = [];
            if (typeof (data[key]) == 'object') {
                arrobj = this.encodeObject(data[key]);
                for (const element of arrobj) {
                    str = key + '.' + element;
                    arr.push(str);
                }
            }
            else {
                str = key + '=' + data[key];
                arr.push(str);
            }
        }
        return arr;
    }
    async decode(data: any) {
        const arr1 = [];
        const arr2 = [];
        const arr = data.split(':');
        const arrElement = [];
        for (let item of arr) {
            if (/(\.\d\.)/g.test(item)) {
                let num = item.match(/(\.\d\.)/g).join();
                num = num.replace(/\./g, '');
                item = item.replace(/(\.\d)/g, '[' + num + ']')
            }
            else if (/(\.\d)/g.test(item)) {
                let num = item.match(/(\.\d)/g).join();
                num = num.replace(/\./g, '');
                item = item.replace(/(\.\d)/g, '[' + num + ']')
            }
            const element = item.split('=');
            arr1.push(element[0]);
            arr2.push(element[1]);
        }
        arrElement.push(arr1);
        arrElement.push(arr2);
        return arrElement;
    }
}