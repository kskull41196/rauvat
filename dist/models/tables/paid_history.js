"use strict";

var cov_2wmzulfc8 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/paid_history.js",
        hash = "95eb2f9a763f564b4222006b54d5ae0667ce4ae1",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/paid_history.js",
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
                    line: 86,
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

cov_2wmzulfc8.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_2wmzulfc8.s[1]++, require("../base"));
cov_2wmzulfc8.s[2]++;
exports.PaidHistory = base_1.sequelize.define('tbl_paid_history', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    bill_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_bill',
            key: 'id'
        },
        allowNull: false
    },
    vnpay_history_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_vnpay_history',
            key: 'id'
        },
        allowNull: true
    },
    pay_amount: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['PARTIAL', 'FULL'],
        defaultValue: 'PARTIAL',
        allowNull: false
    },
    remain_amount: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    payment_method: {
        type: base_1.Sequelize.ENUM,
        values: ['COD', 'ONLINE', 'WALLET'],
        defaultValue: 'COD',
        allowNull: false
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
//# sourceMappingURL=paid_history.js.map
//# sourceMappingURL=paid_history.js.map