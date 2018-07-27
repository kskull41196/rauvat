"use strict";

var cov_1ca2tjcly2 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/base.pg.js",
        hash = "ed9b4dbd6fdb33aec79b6b86934c5f6492583621",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/base.pg.js",
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
                    column: 17
                },
                end: {
                    line: 3,
                    column: 36
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 18
                },
                end: {
                    line: 4,
                    column: 38
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 30
                }
            },
            "4": {
                start: {
                    line: 6,
                    column: 13
                },
                end: {
                    line: 6,
                    column: 22
                }
            },
            "5": {
                start: {
                    line: 7,
                    column: 0
                },
                end: {
                    line: 32,
                    column: 1
                }
            },
            "6": {
                start: {
                    line: 8,
                    column: 4
                },
                end: {
                    line: 18,
                    column: 6
                }
            },
            "7": {
                start: {
                    line: 21,
                    column: 4
                },
                end: {
                    line: 31,
                    column: 6
                }
            },
            "8": {
                start: {
                    line: 33,
                    column: 18
                },
                end: {
                    line: 33,
                    column: 165
                }
            },
            "9": {
                start: {
                    line: 34,
                    column: 0
                },
                end: {
                    line: 34,
                    column: 30
                }
            }
        },
        fnMap: {},
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 7,
                        column: 0
                    },
                    end: {
                        line: 32,
                        column: 1
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 7,
                        column: 0
                    },
                    end: {
                        line: 32,
                        column: 1
                    }
                }, {
                    start: {
                        line: 7,
                        column: 0
                    },
                    end: {
                        line: 32,
                        column: 1
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
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0
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

cov_1ca2tjcly2.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = (cov_1ca2tjcly2.s[1]++, require("../config"));
var Sequelize = (cov_1ca2tjcly2.s[2]++, require("sequelize"));
cov_1ca2tjcly2.s[3]++;
exports.Sequelize = Sequelize;
var option = (cov_1ca2tjcly2.s[4]++, undefined);
cov_1ca2tjcly2.s[5]++;
if (process.env.NODE_ENV === "production") {
    cov_1ca2tjcly2.b[0][0]++;
    cov_1ca2tjcly2.s[6]++;

    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00"
    };
} else {
    cov_1ca2tjcly2.b[0][1]++;
    cov_1ca2tjcly2.s[7]++;

    option = {
        host: config_1.config.database.sql['host'],
        dialect: config_1.config.database.sql['dialect'],
        // default setting
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        timezone: "+07:00"
    };
}
var sequelize = (cov_1ca2tjcly2.s[8]++, new Sequelize(config_1.config.database.sql['database'], config_1.config.database.sql['username'], config_1.config.database.sql['password'], option));
cov_1ca2tjcly2.s[9]++;
exports.sequelize = sequelize;
//# sourceMappingURL=base.pg.js.map
//# sourceMappingURL=base.pg.js.map