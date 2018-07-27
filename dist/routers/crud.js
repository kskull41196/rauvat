"use strict";

var cov_1gbv1jkpmu = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/routers/crud.js",
        hash = "910362ba7a6976ebb0582c2ec6b6213d869275ce",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/routers/crud.js",
        statementMap: {
            "0": {
                start: {
                    line: 3,
                    column: 4
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "1": {
                start: {
                    line: 3,
                    column: 21
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "2": {
                start: {
                    line: 3,
                    column: 53
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 62
                }
            },
            "4": {
                start: {
                    line: 7,
                    column: 0
                },
                end: {
                    line: 7,
                    column: 31
                }
            }
        },
        fnMap: {
            "0": {
                name: "__export",
                decl: {
                    start: {
                        line: 2,
                        column: 9
                    },
                    end: {
                        line: 2,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 2,
                        column: 21
                    },
                    end: {
                        line: 4,
                        column: 1
                    }
                },
                line: 2
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                }, {
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                }],
                line: 3
            }
        },
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

function __export(m) {
    cov_1gbv1jkpmu.f[0]++;
    cov_1gbv1jkpmu.s[0]++;

    for (var p in m) {
        cov_1gbv1jkpmu.s[1]++;
        if (!exports.hasOwnProperty(p)) {
                cov_1gbv1jkpmu.b[0][0]++;
                cov_1gbv1jkpmu.s[2]++;
                exports[p] = m[p];
            } else {
            cov_1gbv1jkpmu.b[0][1]++;
        }
    }
}
cov_1gbv1jkpmu.s[3]++;
Object.defineProperty(exports, "__esModule", { value: true });
// export * from './crud.mongo'
cov_1gbv1jkpmu.s[4]++;
__export(require("./crud.pg"));
//# sourceMappingURL=crud.js.map
//# sourceMappingURL=crud.js.map