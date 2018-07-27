"use strict";

var cov_17dpp4ruue = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/config/production.js",
        hash = "a591256acfbefdff2b6d721afff90a40a282603a",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/config/production.js",
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
                    column: 11
                },
                end: {
                    line: 4,
                    column: 24
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 12
                },
                end: {
                    line: 5,
                    column: 33
                }
            },
            "4": {
                start: {
                    line: 6,
                    column: 0
                },
                end: {
                    line: 6,
                    column: 32
                }
            },
            "5": {
                start: {
                    line: 7,
                    column: 0
                },
                end: {
                    line: 43,
                    column: 2
                }
            }
        },
        fnMap: {},
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 13,
                        column: 14
                    },
                    end: {
                        line: 13,
                        column: 38
                    }
                },
                type: "binary-expr",
                locations: [{
                    start: {
                        line: 13,
                        column: 14
                    },
                    end: {
                        line: 13,
                        column: 30
                    }
                }, {
                    start: {
                        line: 13,
                        column: 34
                    },
                    end: {
                        line: 13,
                        column: 38
                    }
                }],
                line: 13
            }
        },
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0
        },
        f: {},
        b: {
            "0": [0, 0]
        },
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

cov_17dpp4ruue.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = (cov_17dpp4ruue.s[1]++, require("dotenv"));
var os = (cov_17dpp4ruue.s[2]++, require('os'));
var sql = (cov_17dpp4ruue.s[3]++, require('./database'));
cov_17dpp4ruue.s[4]++;
dotenv.config({ silent: true });
cov_17dpp4ruue.s[5]++;
exports.default = {
    server: {
        host: process.env.HOST_NAME,
        protocol: 'http',
        debug: true,
        name: 'SERVER NAME',
        port: (cov_17dpp4ruue.b[0][0]++, process.env.PORT) || (cov_17dpp4ruue.b[0][1]++, 5000),
        secret: process.env.SERVER_SECRET
    },
    database: {
        mongo: process.env.MONGOLAB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.production
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
        refundReturnUrl: "http://localhost:5000/api/v1/vnpay/refund_return",
        domain: 'http://localhost:5000'
    }
};
//# sourceMappingURL=production.js.map
//# sourceMappingURL=production.js.map