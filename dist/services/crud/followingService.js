"use strict";

var cov_ajn82oz3y = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/services/crud/followingService.js",
        hash = "410af36a9ce4d5579e0779dbea28f0fd588d7036",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/services/crud/followingService.js",
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
                    column: 25
                },
                end: {
                    line: 3,
                    column: 53
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 17
                },
                end: {
                    line: 4,
                    column: 43
                }
            },
            "3": {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 34
                }
            },
            "4": {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 44
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

cov_ajn82oz3y.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var crudService_pg_1 = (cov_ajn82oz3y.s[1]++, require("../crudService.pg"));
var tables_1 = (cov_ajn82oz3y.s[2]++, require("../../models/tables"));

var FollowingService = function (_ref) {
    (0, _inherits3.default)(FollowingService, _ref);

    function FollowingService() {
        (0, _classCallCheck3.default)(this, FollowingService);
        cov_ajn82oz3y.f[0]++;
        cov_ajn82oz3y.s[3]++;
        return (0, _possibleConstructorReturn3.default)(this, (FollowingService.__proto__ || Object.getPrototypeOf(FollowingService)).call(this, tables_1.Following));
    }

    return FollowingService;
}((crudService_pg_1.CrudService));

cov_ajn82oz3y.s[4]++;

exports.FollowingService = FollowingService;
//# sourceMappingURL=followingService.js.map
//# sourceMappingURL=followingService.js.map