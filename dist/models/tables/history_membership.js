"use strict";

var cov_1ymh9fknsp = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/history_membership.js",
        hash = "11223462971437d3c57a3ae26e2608c1a1336e7f",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/history_membership.js",
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
                    column: 0
                },
                end: {
                    line: 55,
                    column: 3
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0
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

cov_1ymh9fknsp.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1ymh9fknsp.s[1]++, require("../base"));
cov_1ymh9fknsp.s[2]++;
exports.HistoryMembership = base_1.sequelize.define('tbl_history_membership', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    user_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        }
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['UPGRADE', 'DOWNGRADE'],
        defaultValue: 'UPGRADE'
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    deleted_at: { type: 'TIMESTAMP' }
}, {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    paranoid: true,
    defaultScope: {
        attributes: { exclude: ['deleted_at'] }
    },
    scopes: {
        deleted: {
            where: { deleted_at: { $ne: null } },
            paranoid: false
        }
    }
});
//# sourceMappingURL=history_membership.js.map
//# sourceMappingURL=history_membership.js.map