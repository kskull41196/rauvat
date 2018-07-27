"use strict";

var cov_rvj0fbe19 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/user.js",
        hash = "ee2d6df9150cc746ec2ca182917a40dc3195daed",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/user.js",
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
                    line: 124,
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

cov_rvj0fbe19.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_rvj0fbe19.s[1]++, require("../base"));
cov_rvj0fbe19.s[2]++;
exports.User = base_1.sequelize.define('tbl_user', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    fullname: {
        type: base_1.Sequelize.STRING
    },
    avatar: {
        type: base_1.Sequelize.STRING
    },
    sex: {
        type: base_1.Sequelize.STRING,
        defaultValue: 'MALE',
        validate: {
            isIn: [['MALE', 'FEMALE', 'OTHER']]
        }
    },
    birthday: {
        type: base_1.Sequelize.DATE
    },
    phone: {
        type: base_1.Sequelize.STRING
    },
    address: {
        type: base_1.Sequelize.STRING
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE
    },
    user_type: {
        type: base_1.Sequelize.ENUM,
        values: ['NORMAL', 'SILVER', 'GOLD', 'DIAMOND'],
        defaultValue: 'NORMAL'
    },
    email: {
        type: base_1.Sequelize.STRING
    },
    amount_of_like: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_comment: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_order: {
        type: base_1.Sequelize.INTEGER
    },
    amount_of_purchase: {
        type: base_1.Sequelize.INTEGER
    },
    username: {
        type: base_1.Sequelize.STRING
    },
    password: {
        type: base_1.Sequelize.STRING
    },
    registation_id: {
        type: base_1.Sequelize.STRING
    },
    bank_user_name: {
        type: base_1.Sequelize.STRING
    },
    bank_name: {
        type: base_1.Sequelize.STRING
    },
    bank_serial: {
        type: base_1.Sequelize.STRING
    },
    bank_branch: {
        type: base_1.Sequelize.STRING
    },
    bank_province: {
        type: base_1.Sequelize.STRING
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true
    },
    latest_updated_membership: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
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
//# sourceMappingURL=user.js.map
//# sourceMappingURL=user.js.map