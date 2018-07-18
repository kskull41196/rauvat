"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
const AjvError = require("ajv-errors");
const AjvKeyWords = require("ajv-keywords");
const _ = require("lodash");
const md5 = require("md5");
const querystring = require("qs");
class UtilService {
    validateJSON(schema, json = {}) {
        const ajv = new Ajv({ allErrors: true, jsonPointers: true });
        AjvError(ajv, { singleError: true });
        AjvKeyWords(ajv, ['switch']);
        const valid = ajv.validate(schema, json);
        return {
            isValid: valid,
            message: ajv.errorsText()
        };
    }
    parseMessengeWithInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { message } = params;
            const { info } = params;
            const regex = /({|})/g;
            const regex2 = /({{\w+}})|({{\w+(?:\.\w+)+)}}/g;
            if (regex.test(message)) {
                const replaceText = message.match(regex2);
                for (let item of replaceText) {
                    item = item.replace(regex, '');
                    message = message.replace(item, _.get(info, item));
                }
                message = message.replace(regex, '');
            }
            return message;
        });
    }
    encode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = this.encodeObject(data);
            return arr.join(':');
        });
    }
    encodeObject(data) {
        const arr = [];
        const keys = Object.keys(data);
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
    decode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr1 = [];
            const arr2 = [];
            const arr = data.split(':');
            const arrElement = [];
            for (let item of arr) {
                if (/(\.\d\.)/g.test(item)) {
                    let num = item.match(/(\.\d\.)/g).join();
                    num = num.replace(/\./g, '');
                    item = item.replace(/(\.\d)/g, '[' + num + ']');
                }
                else if (/(\.\d)/g.test(item)) {
                    let num = item.match(/(\.\d)/g).join();
                    num = num.replace(/\./g, '');
                    item = item.replace(/(\.\d)/g, '[' + num + ']');
                }
                const element = item.split('=');
                arr1.push(element[0]);
                arr2.push(element[1]);
            }
            arrElement.push(arr1);
            arrElement.push(arr2);
            return arrElement;
        });
    }
    sortObject(o) {
        var sorted = {}, key, a = [];
        for (key in o) {
            if (o.hasOwnProperty(key)) {
                a.push(key);
            }
        }
        a.sort();
        for (key = 0; key < a.length; key++) {
            sorted[a[key]] = o[a[key]];
        }
        return sorted;
    }
    secureHash(o, secretKey) {
        var signData = secretKey + querystring.stringify(o, { encode: false });
        return md5(signData);
    }
}
exports.UtilService = UtilService;
//# sourceMappingURL=utilService.js.map