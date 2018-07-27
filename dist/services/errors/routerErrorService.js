"use strict";

var cov_5rkk8vvp8 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/routerErrorService.js",
        hash = "fe21adb8fced3582bdc73b4d32042d98d0dfd28b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/routerErrorService.js",
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
                    line: 6,
                    column: 8
                },
                end: {
                    line: 10,
                    column: 11
                }
            },
            "3": {
                start: {
                    line: 15,
                    column: 8
                },
                end: {
                    line: 15,
                    column: 91
                }
            },
            "4": {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 18,
                    column: 71
                }
            },
            "5": {
                start: {
                    line: 21,
                    column: 8
                },
                end: {
                    line: 21,
                    column: 65
                }
            },
            "6": {
                start: {
                    line: 24,
                    column: 0
                },
                end: {
                    line: 24,
                    column: 48
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
                        column: 36
                    },
                    end: {
                        line: 11,
                        column: 5
                    }
                },
                line: 5
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 14,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 14,
                        column: 25
                    },
                    end: {
                        line: 16,
                        column: 5
                    }
                },
                line: 14
            },
            "2": {
                name: "(anonymous_2)",
                decl: {
                    start: {
                        line: 17,
                        column: 4
                    },
                    end: {
                        line: 17,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 17,
                        column: 17
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                },
                line: 17
            },
            "3": {
                name: "(anonymous_3)",
                decl: {
                    start: {
                        line: 20,
                        column: 4
                    },
                    end: {
                        line: 20,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 20,
                        column: 32
                    },
                    end: {
                        line: 22,
                        column: 5
                    }
                },
                line: 20
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 7,
                        column: 18
                    },
                    end: {
                        line: 7,
                        column: 29
                    }
                },
                type: "binary-expr",
                locations: [{
                    start: {
                        line: 7,
                        column: 18
                    },
                    end: {
                        line: 7,
                        column: 22
                    }
                }, {
                    start: {
                        line: 7,
                        column: 26
                    },
                    end: {
                        line: 7,
                        column: 29
                    }
                }],
                line: 7
            }
        },
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
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        },
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

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_5rkk8vvp8.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_5rkk8vvp8.s[1]++, require("./base"));

var RouterException = function (_ref) {
    (0, _inherits3.default)(RouterException, _ref);

    function RouterException(key, message, code) {
        (0, _classCallCheck3.default)(this, RouterException);
        cov_5rkk8vvp8.f[0]++;
        cov_5rkk8vvp8.s[2]++;
        return (0, _possibleConstructorReturn3.default)(this, (RouterException.__proto__ || Object.getPrototypeOf(RouterException)).call(this, {
            code: (cov_5rkk8vvp8.b[0][0]++, code) || (cov_5rkk8vvp8.b[0][1]++, 500),
            type: "router_exception_" + key,
            message: message
        }));
    }

    return RouterException;
}((base_1.BaseError));

var RouterErrorService = function () {
    function RouterErrorService() {
        (0, _classCallCheck3.default)(this, RouterErrorService);
    }

    (0, _createClass3.default)(RouterErrorService, [{
        key: "somethingWentWrong",
        value: function somethingWentWrong() {
            cov_5rkk8vvp8.f[1]++;
            cov_5rkk8vvp8.s[3]++;

            return new RouterException('something_went_wrong', 'Sorry! Something went wrong.');
        }
    }, {
        key: "badRequest",
        value: function badRequest() {
            cov_5rkk8vvp8.f[2]++;
            cov_5rkk8vvp8.s[4]++;

            return new RouterException('bad_request', 'Bad Request.', 400);
        }
    }, {
        key: "requestDataInvalid",
        value: function requestDataInvalid(message) {
            cov_5rkk8vvp8.f[3]++;
            cov_5rkk8vvp8.s[5]++;

            return new RouterException('data_invalid', message, 403);
        }
    }]);
    return RouterErrorService;
}();

cov_5rkk8vvp8.s[6]++;

exports.RouterErrorService = RouterErrorService;
//# sourceMappingURL=routerErrorService.js.map
//# sourceMappingURL=routerErrorService.js.map