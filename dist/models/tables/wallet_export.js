"use strict";

var cov_1jitonavkj = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/wallet_export.js",
        hash = "117f5799d4c3535b666284d3cfc05e353662e89f",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/wallet_export.js",
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
                    line: 83,
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

cov_1jitonavkj.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1jitonavkj.s[1]++, require("../base"));
cov_1jitonavkj.s[2]++;
exports.WalletExport = base_1.sequelize.define('tbl_wallet_export', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    wallet_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_wallet',
            key: 'id'
        },
        allowNull: false
    },
    employee_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_employee',
            key: 'id'
        },
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    amount: {
        type: base_1.Sequelize.BIGINT,
        validate: {
            min: 0
        },
        defaultValue: 0,
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
//# sourceMappingURL=wallet_export.js.map
//# sourceMappingURL=wallet_export.js.map