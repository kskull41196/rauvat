"use strict";

var cov_1f1e7j1rg6 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/routers/v1/global_category_and_attribute.js",
        hash = "f7b155a80272218a8eb2ffc7c5c6bfb11e65295e",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/routers/v1/global_category_and_attribute.js",
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
                    column: 66
                }
            },
            "4": {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 51
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

cov_1f1e7j1rg6.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = (cov_1f1e7j1rg6.s[1]++, require("../crud"));
var controllers_1 = (cov_1f1e7j1rg6.s[2]++, require("../../controllers"));

var GlobalCategoryAndAttributeRouter = function (_ref) {
    (0, _inherits3.default)(GlobalCategoryAndAttributeRouter, _ref);

    function GlobalCategoryAndAttributeRouter() {
        (0, _classCallCheck3.default)(this, GlobalCategoryAndAttributeRouter);
        cov_1f1e7j1rg6.f[0]++;
        cov_1f1e7j1rg6.s[3]++;
        return (0, _possibleConstructorReturn3.default)(this, (GlobalCategoryAndAttributeRouter.__proto__ || Object.getPrototypeOf(GlobalCategoryAndAttributeRouter)).call(this, controllers_1.globalCategoryAndAttributeController));
    }

    return GlobalCategoryAndAttributeRouter;
}((crud_1.CrudRouter));

cov_1f1e7j1rg6.s[4]++;

exports.default = GlobalCategoryAndAttributeRouter;
//# sourceMappingURL=global_category_and_attribute.js.map
//# sourceMappingURL=global_category_and_attribute.js.map