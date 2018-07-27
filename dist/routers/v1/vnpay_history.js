"use strict";

var cov_13hxy79b6c = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/routers/v1/vnpay_history.js",
        hash = "e8be16c2785208131451d1f6e730a31896869ff5",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/routers/v1/vnpay_history.js",
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
                    column: 33
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 22
                },
                end: {
                    line: 4,
                    column: 46
                }
            },
            "3": {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 52
                }
            },
            "4": {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 31
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 6,
                        column: 4
                    },
                    end: {
                        line: 6,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 6,
                        column: 18
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                line: 6
            }
        },
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
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

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_13hxy79b6c.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = (cov_13hxy79b6c.s[1]++, require("../crud"));
var controllers_1 = (cov_13hxy79b6c.s[2]++, require("../../controllers"));

var VnpayHistory = function (_ref) {
    (0, _inherits3.default)(VnpayHistory, _ref);

    function VnpayHistory() {
        (0, _classCallCheck3.default)(this, VnpayHistory);
        cov_13hxy79b6c.f[0]++;
        cov_13hxy79b6c.s[3]++;
        return (0, _possibleConstructorReturn3.default)(this, (VnpayHistory.__proto__ || Object.getPrototypeOf(VnpayHistory)).call(this, controllers_1.vnpayHistoryController));
    }

    return VnpayHistory;
}((crud_1.CrudRouter));

cov_13hxy79b6c.s[4]++;

exports.default = VnpayHistory;
//# sourceMappingURL=vnpay_history.js.map
//# sourceMappingURL=vnpay_history.js.map