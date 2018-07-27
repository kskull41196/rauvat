"use strict";

var cov_1s1lg9jf9e = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/bill.js",
        hash = "4794ec902bd59dad05c586277216e1e78f56d88e",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/bill.js",
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
                    line: 144,
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

cov_1s1lg9jf9e.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1s1lg9jf9e.s[1]++, require("../base"));
cov_1s1lg9jf9e.s[2]++;
exports.Bill = base_1.sequelize.define('tbl_bill', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    promotion_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_promotion',
            key: 'id'
        }
    },
    buyer_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        },
        allowNull: false
    },
    seller_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        },
        allowNull: false
    },
    current_paid_history_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_paid_history',
            key: 'id'
        }
    },
    current_bill_activity_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_bill_activity',
            key: 'id'
        }
    },
    rating: {
        type: base_1.Sequelize.INTEGER,
        defaultValue: 0
    },
    feedback_from_buyer: {
        type: base_1.Sequelize.TEXT
    },
    feedback_from_seller: {
        type: base_1.Sequelize.TEXT
    },
    total_price: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    sub_fee: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    received_time: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    note: {
        type: base_1.Sequelize.TEXT
    },
    updated_id: {
        type: base_1.Sequelize.UUID,
        allowNull: true
    },
    editor_type: {
        type: base_1.Sequelize.ENUM,
        values: ['USER', 'EMPLOYEE'],
        allowNull: true
    },
    editor: {
        type: base_1.Sequelize.UUID,
        allowNull: true
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
//# sourceMappingURL=bill.js.map
//# sourceMappingURL=bill.js.map