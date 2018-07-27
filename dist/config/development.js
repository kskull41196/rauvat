"use strict";

var cov_aj15g0klg = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/config/development.js",
        hash = "50a5916b90a1d09ee4f275653b5c40343230333b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/config/development.js",
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
                    column: 15
                },
                end: {
                    line: 3,
                    column: 32
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 12
                },
                end: {
                    line: 4,
                    column: 33
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 32
                }
            },
            "4": {
                start: {
                    line: 6,
                    column: 0
                },
                end: {
                    line: 42,
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

cov_aj15g0klg.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = (cov_aj15g0klg.s[1]++, require("dotenv"));
var sql = (cov_aj15g0klg.s[2]++, require('./database'));
cov_aj15g0klg.s[3]++;
dotenv.config({ silent: true });
cov_aj15g0klg.s[4]++;
exports.default = {
    server: {
        host: 'localhost',
        protocol: 'http',
        debug: true,
        name: 'LOCAL NAME',
        port: 5000,
        secret: process.env.SERVER_SECRET
    },
    database: {
        mongo: process.env.MONGODB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.development
    },
    firebase: {
        "type": process.env.FIREBASE_TYPE,
        "project_id": process.env.FIREBASE_PROJECT_ID,
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_AUTH_URI,
        "token_uri": process.env.FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
    },
    firebaseDbURL: process.env.FIREBASE_DATABASE_URL,
    vnpay: {
        tmnCode: "WWL6JHNV",
        hashSecret: "SPIAUVDJMSLKACAROXJLBGMOLFPZABEP",
        url: "http://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
        payReturnUrl: "https://t-o-i-project.firebaseapp.com/payment",
        refundReturnUrl: "http://localhost:3000/api/v1/vnpay/refund_return",
        domain: 'http://localhost:3000'
    }
};
//# sourceMappingURL=development.js.map
//# sourceMappingURL=development.js.map