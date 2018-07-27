"use strict";

var cov_wbqe3i56o = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/global_category_and_attribute.js",
        hash = "eefcc478a628e05c8bdab21fa658f015786d2f11",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/global_category_and_attribute.js",
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

cov_wbqe3i56o.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_wbqe3i56o.s[1]++, require("../base"));
cov_wbqe3i56o.s[2]++;
exports.GlobalCategoryAndAttribute = base_1.sequelize.define('tbl_global_category_and_attribute', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    global_category_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_category',
            key: 'id'
        },
        allowNull: false
    },
    global_attribute_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_attribute',
            key: 'id'
        },
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
//# sourceMappingURL=global_category_and_attribute.js.map
//# sourceMappingURL=global_category_and_attribute.js.map