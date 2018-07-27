"use strict";

var cov_2fkc8rouwg = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/databaseErrorService.js",
        hash = "5019e49878367f54aa24c11d3fc4b157d000e7e0",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/services/errors/databaseErrorService.js",
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
                    column: 66
                }
            },
            "4": {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 18,
                    column: 60
                }
            },
            "5": {
                start: {
                    line: 21,
                    column: 8
                },
                end: {
                    line: 21,
                    column: 63
                }
            },
            "6": {
                start: {
                    line: 24,
                    column: 0
                },
                end: {
                    line: 24,
                    column: 52
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
                        column: 49
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
                        column: 38
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
                        column: 44
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
            },
            "1": {
                loc: {
                    start: {
                        line: 14,
                        column: 19
                    },
                    end: {
                        line: 14,
                        column: 47
                    }
                },
                type: "default-arg",
                locations: [{
                    start: {
                        line: 14,
                        column: 29
                    },
                    end: {
                        line: 14,
                        column: 47
                    }
                }],
                line: 14
            },
            "2": {
                loc: {
                    start: {
                        line: 17,
                        column: 14
                    },
                    end: {
                        line: 17,
                        column: 36
                    }
                },
                type: "default-arg",
                locations: [{
                    start: {
                        line: 17,
                        column: 24
                    },
                    end: {
                        line: 17,
                        column: 36
                    }
                }],
                line: 17
            },
            "3": {
                loc: {
                    start: {
                        line: 20,
                        column: 17
                    },
                    end: {
                        line: 20,
                        column: 42
                    }
                },
                type: "default-arg",
                locations: [{
                    start: {
                        line: 20,
                        column: 27
                    },
                    end: {
                        line: 20,
                        column: 42
                    }
                }],
                line: 20
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
            "0": [0, 0],
            "1": [0],
            "2": [0],
            "3": [0]
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

cov_2fkc8rouwg.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_2fkc8rouwg.s[1]++, require("./base"));

var DatabaseException = function (_ref) {
    (0, _inherits3.default)(DatabaseException, _ref);

    function DatabaseException(key, message, code) {
        (0, _classCallCheck3.default)(this, DatabaseException);
        cov_2fkc8rouwg.f[0]++;
        cov_2fkc8rouwg.s[2]++;
        return (0, _possibleConstructorReturn3.default)(this, (DatabaseException.__proto__ || Object.getPrototypeOf(DatabaseException)).call(this, {
            code: (cov_2fkc8rouwg.b[0][0]++, code) || (cov_2fkc8rouwg.b[0][1]++, 500),
            type: "database_exception_" + key,
            message: message
        }));
    }

    return DatabaseException;
}((base_1.BaseError));

var DatabaseErrorService = function () {
    function DatabaseErrorService() {
        (0, _classCallCheck3.default)(this, DatabaseErrorService);
    }

    (0, _createClass3.default)(DatabaseErrorService, [{
        key: "recordNotFound",
        value: function recordNotFound() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2fkc8rouwg.b[1][0]++, 'Record Not Found');
            cov_2fkc8rouwg.f[1]++;
            cov_2fkc8rouwg.s[3]++;

            return new DatabaseException('record_not_found', message);
        }
    }, {
        key: "queryFail",
        value: function queryFail() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2fkc8rouwg.b[2][0]++, "Query Fail");
            cov_2fkc8rouwg.f[2]++;
            cov_2fkc8rouwg.s[4]++;

            return new DatabaseException('query_fail', message);
        }
    }, {
        key: "invalidScope",
        value: function invalidScope() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2fkc8rouwg.b[3][0]++, "Invalid scope");
            cov_2fkc8rouwg.f[3]++;
            cov_2fkc8rouwg.s[5]++;

            return new DatabaseException('invalid_scope', message);
        }
    }]);
    return DatabaseErrorService;
}();

cov_2fkc8rouwg.s[6]++;

exports.DatabaseErrorService = DatabaseErrorService;
//# sourceMappingURL=databaseErrorService.js.map
//# sourceMappingURL=databaseErrorService.js.map