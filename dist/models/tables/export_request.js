"use strict";

var cov_2iwi65yy79 = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/export_request.js",
        hash = "3b7bf3f57c20505a1ec470b7b03be0d0847e63d8",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/export_request.js",
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
                    line: 91,
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

cov_2iwi65yy79.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_2iwi65yy79.s[1]++, require("../base"));
cov_2iwi65yy79.s[2]++;
exports.ExportRequest = base_1.sequelize.define('tbl_export_request', {
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
    employee_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_employee',
            key: 'id'
        },
        allowNull: true
    },
    amount: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 50000
        }
    },
    bank_user_name: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    bank_name: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    bank_serial: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    bank_branch: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    bank_province: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    employee_feedback: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: base_1.Sequelize.ENUM,
        values: ['EXPORTED', 'DENIED', 'NONE'],
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
//# sourceMappingURL=export_request.js.map
//# sourceMappingURL=export_request.js.map