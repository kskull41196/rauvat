"use strict";

var cov_1o2o9unna7 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/product_global_attribute.js",
        hash = "111b8bfd910c7e350521cd5967815cb3de3696ca",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/product_global_attribute.js",
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
                    line: 54,
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

cov_1o2o9unna7.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1o2o9unna7.s[1]++, require("../base"));
cov_1o2o9unna7.s[2]++;
exports.ProductGlobalAttribute = base_1.sequelize.define('tbl_product_global_attribute', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    product_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_product',
            key: 'id'
        }
    },
    global_attribute_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_attribute',
            key: 'id'
        }
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
//# sourceMappingURL=product_global_attribute.js.map
//# sourceMappingURL=product_global_attribute.js.map