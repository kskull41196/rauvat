"use strict";

var cov_1f63mqcq6q = function () {
  var path = "/Users/macbook/Documents/Workspace/raovat-server/build/middlewares/index.js",
      hash = "3c7c63355bb3a0df7a5595272be6d361128f0f57",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/macbook/Documents/Workspace/raovat-server/build/middlewares/index.js",
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
          column: 52
        }
      },
      "2": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 4,
          column: 62
        }
      },
      "3": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 54
        }
      },
      "4": {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 6,
          column: 54
        }
      },
      "5": {
        start: {
          line: 7,
          column: 33
        },
        end: {
          line: 7,
          column: 68
        }
      },
      "6": {
        start: {
          line: 8,
          column: 29
        },
        end: {
          line: 8,
          column: 60
        }
      },
      "7": {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 9,
          column: 60
        }
      },
      "8": {
        start: {
          line: 10,
          column: 27
        },
        end: {
          line: 10,
          column: 68
        }
      },
      "9": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 48
        }
      },
      "10": {
        start: {
          line: 12,
          column: 32
        },
        end: {
          line: 12,
          column: 83
        }
      },
      "11": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 58
        }
      },
      "12": {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 14,
          column: 63
        }
      },
      "13": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "14": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 16,
          column: 63
        }
      },
      "15": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 42
        }
      },
      "16": {
        start: {
          line: 18,
          column: 31
        },
        end: {
          line: 18,
          column: 88
        }
      },
      "17": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 56
        }
      },
      "18": {
        start: {
          line: 20,
          column: 27
        },
        end: {
          line: 20,
          column: 72
        }
      },
      "19": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 21,
          column: 48
        }
      },
      "20": {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 22,
          column: 72
        }
      },
      "21": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 48
        }
      }
    },
    fnMap: {},
    branchMap: {},
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
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {},
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

cov_1f63mqcq6q.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var authMiddleware_1 = (cov_1f63mqcq6q.s[1]++, require("./authMiddleware"));
var adminAuthMiddleware_1 = (cov_1f63mqcq6q.s[2]++, require("./adminAuthMiddleware"));
var blockMiddleware_1 = (cov_1f63mqcq6q.s[3]++, require("./blockMiddleware"));
var queryMiddleware_1 = (cov_1f63mqcq6q.s[4]++, require("./queryMiddleware"));
var firebaseAuthMiddleware_1 = (cov_1f63mqcq6q.s[5]++, require("./firebaseAuthMiddleware"));
var userRoleMiddleware_1 = (cov_1f63mqcq6q.s[6]++, require("./userRoleMiddleware"));
var pageInfoMiddleware_1 = (cov_1f63mqcq6q.s[7]++, require("./pageInfoMiddleware"));
var authInfoMiddleware = (cov_1f63mqcq6q.s[8]++, new authMiddleware_1.AuthInfoMiddleware());
cov_1f63mqcq6q.s[9]++;
exports.authInfoMiddleware = authInfoMiddleware;
var adminAuthInfoMiddleware = (cov_1f63mqcq6q.s[10]++, new adminAuthMiddleware_1.AdminAuthInfoMiddleware());
cov_1f63mqcq6q.s[11]++;
exports.adminAuthInfoMiddleware = adminAuthInfoMiddleware;
var blockMiddleware = (cov_1f63mqcq6q.s[12]++, new blockMiddleware_1.BlockMiddleware());
cov_1f63mqcq6q.s[13]++;
exports.blockMiddleware = blockMiddleware;
var queryMiddleware = (cov_1f63mqcq6q.s[14]++, new queryMiddleware_1.QueryMiddleware());
cov_1f63mqcq6q.s[15]++;
exports.queryMiddleware = queryMiddleware;
var firebaseAuthMiddleware = (cov_1f63mqcq6q.s[16]++, new firebaseAuthMiddleware_1.FirebaseAuthInfoMiddleware());
cov_1f63mqcq6q.s[17]++;
exports.firebaseAuthMiddleware = firebaseAuthMiddleware;
var userRoleMiddleware = (cov_1f63mqcq6q.s[18]++, new userRoleMiddleware_1.UserRoleMiddleware());
cov_1f63mqcq6q.s[19]++;
exports.userRoleMiddleware = userRoleMiddleware;
var pageInfoMiddleware = (cov_1f63mqcq6q.s[20]++, new pageInfoMiddleware_1.PageInfoMiddleware());
cov_1f63mqcq6q.s[21]++;
exports.pageInfoMiddleware = pageInfoMiddleware;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map