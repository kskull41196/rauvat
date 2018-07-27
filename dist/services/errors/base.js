"use strict";

var cov_ovi15k9bt = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/base.js",
        hash = "d0b2e88f6cd7f17152ca454a5593a12e7506ed87",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/base.js",
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
                    line: 5,
                    column: 8
                },
                end: {
                    line: 5,
                    column: 16
                }
            },
            "2": {
                start: {
                    line: 6,
                    column: 8
                },
                end: {
                    line: 6,
                    column: 31
                }
            },
            "3": {
                start: {
                    line: 9,
                    column: 8
                },
                end: {
                    line: 9,
                    column: 28
                }
            },
            "4": {
                start: {
                    line: 12,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 30
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 4,
                        column: 4
                    },
                    end: {
                        line: 4,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 4,
                        column: 25
                    },
                    end: {
                        line: 7,
                        column: 5
                    }
                },
                line: 4
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 8,
                        column: 4
                    },
                    end: {
                        line: 8,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 8,
                        column: 13
                    },
                    end: {
                        line: 10,
                        column: 5
                    }
                },
                line: 8
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
            "0": 0,
            "1": 0
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

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_ovi15k9bt.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });

var BaseError = function (_ref) {
    (0, _inherits3.default)(BaseError, _ref);

    function BaseError(options) {
        (0, _classCallCheck3.default)(this, BaseError);
        cov_ovi15k9bt.f[0]++;
        cov_ovi15k9bt.s[1]++;

        var _this = (0, _possibleConstructorReturn3.default)(this, (BaseError.__proto__ || Object.getPrototypeOf(BaseError)).call(this));

        cov_ovi15k9bt.s[2]++;

        _this.options = options;
        return _this;
    }

    (0, _createClass3.default)(BaseError, [{
        key: "toJSON",
        value: function toJSON() {
            cov_ovi15k9bt.f[1]++;
            cov_ovi15k9bt.s[3]++;

            return this.options;
        }
    }]);
    return BaseError;
}((Error));

cov_ovi15k9bt.s[4]++;

exports.BaseError = BaseError;
//# sourceMappingURL=base.js.map
//# sourceMappingURL=base.js.map