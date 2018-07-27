"use strict";

var cov_2m777lek1i = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/store.js",
        hash = "dffccd50aa90eb3bffdc4dea2cd091e3c88cbda9",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/store.js",
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
                    line: 75,
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

cov_2m777lek1i.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_2m777lek1i.s[1]++, require("../base"));
cov_2m777lek1i.s[2]++;
exports.Store = base_1.sequelize.define('tbl_store', {
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
        },
        allowNull: false
    },
    working_time_from: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    working_time_to: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    phone: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    name: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: base_1.Sequelize.STRING,
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
//# sourceMappingURL=store.js.map
//# sourceMappingURL=store.js.map