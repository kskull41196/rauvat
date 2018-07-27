"use strict";

var cov_uey3308to = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/const.js",
        hash = "f1c978c3e2beedbdc60126e079c83a5605955927",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/const.js",
        statementMap: {
            "0": {
                start: {
                    line: 2,
                    column: 0
                },
                end: {
                    line: 2,
                    column: 62
                }
            },
            "1": {
                start: {
                    line: 3,
                    column: 0
                },
                end: {
                    line: 7,
                    column: 2
                }
            },
            "2": {
                start: {
                    line: 8,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 2
                }
            },
            "3": {
                start: {
                    line: 13,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 2
                }
            },
            "4": {
                start: {
                    line: 17,
                    column: 0
                },
                end: {
                    line: 26,
                    column: 2
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        },
        f: {},
        b: {},
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

cov_uey3308to.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
cov_uey3308to.s[1]++;
exports.default = {
    MILE_TO_KILOMETER: 1.609344,
    KILOMETER_TO_MILE: 1 / 1.609344,
    METER_TO_MILE: 1 / (1.609344 * 1000)
};
cov_uey3308to.s[2]++;
exports.CONST = {
    ORDERED: 'ORDERED',
    SUCCESSED: 'SUCCESSED',
    FAILED: 'FAILED'
};
cov_uey3308to.s[3]++;
exports.USER_ROLES = {
    NORMAL: 'NORMAL',
    PREMIUM: 'PREMIUM'
};
cov_uey3308to.s[4]++;
exports.FCM_ACTIONS = {
    SEND_NOTIFIATION: '0',
    WALLET: '1',
    PRODUCT_VALID: '2',
    PRODUCT_BANNED: '3',
    PRODUCT_EXPIRED: '4',
    PRODUCT_REVIEW: '5',
    BILL: '6',
    EDIT_USER: '7'
};
//# sourceMappingURL=const.js.map
//# sourceMappingURL=const.js.map