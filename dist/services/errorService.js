"use strict";

var cov_1704b1h6ax = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/services/errorService.js",
        hash = "663826c4b6a336d68a371c16db383a1c00958479",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/services/errorService.js",
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
                    column: 34
                }
            },
            "2": {
                start: {
                    line: 6,
                    column: 8
                },
                end: {
                    line: 6,
                    column: 54
                }
            },
            "3": {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 50
                }
            },
            "4": {
                start: {
                    line: 8,
                    column: 8
                },
                end: {
                    line: 8,
                    column: 58
                }
            },
            "5": {
                start: {
                    line: 9,
                    column: 8
                },
                end: {
                    line: 9,
                    column: 58
                }
            },
            "6": {
                start: {
                    line: 12,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 36
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 5,
                        column: 4
                    },
                    end: {
                        line: 5,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 18
                    },
                    end: {
                        line: 10,
                        column: 5
                    }
                },
                line: 5
            }
        },
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0
        },
        f: {
            "0": 0
        },
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

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1704b1h6ax.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var errors = (cov_1704b1h6ax.s[1]++, require("./errors"));

var ErrorService = function ErrorService() {
    (0, _classCallCheck3.default)(this, ErrorService);
    cov_1704b1h6ax.f[0]++;
    cov_1704b1h6ax.s[2]++;

    this.router = new errors.RouterErrorService();
    cov_1704b1h6ax.s[3]++;
    this.auth = new errors.AuthErrorService();
    cov_1704b1h6ax.s[4]++;
    this.database = new errors.DatabaseErrorService();
    cov_1704b1h6ax.s[5]++;
    this.firebase = new errors.FirebaseErrorService();
};

cov_1704b1h6ax.s[6]++;

exports.ErrorService = ErrorService;
//# sourceMappingURL=errorService.js.map
//# sourceMappingURL=errorService.js.map