"use strict";

var cov_qf7ogacv0 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/global_promotion.js",
        hash = "ad02552770ab504113b554317b2a1a1609a21bbb",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/global_promotion.js",
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
                    line: 72,
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

cov_qf7ogacv0.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_qf7ogacv0.s[1]++, require("../base"));
cov_qf7ogacv0.s[2]++;
exports.GlobalPromotion = base_1.sequelize.define('tbl_global_promotion', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    title: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    short_description: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['AMOUNT', 'PERCENT'],
        allowNull: false
    },
    thumb: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    start_date: {
        type: 'TIMESTAMP',
        allowNull: false
    },
    end_date: {
        type: 'TIMESTAMP',
        allowNull: false
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true
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
//# sourceMappingURL=global_promotion.js.map
//# sourceMappingURL=global_promotion.js.map