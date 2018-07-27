"use strict";

var cov_akd35rikx = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/post.js",
        hash = "76b63d6ca76c6c06b8734a3305719fc14007938b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/post.js",
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
                    line: 97,
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

cov_akd35rikx.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_akd35rikx.s[1]++, require("../base"));
cov_akd35rikx.s[2]++;
exports.Post = base_1.sequelize.define('tbl_post', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    content: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_user',
            key: 'id'
        },
        allowNull: false
    },
    amount_of_like: {
        type: base_1.Sequelize.INTEGER,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    amount_of_comment: {
        type: base_1.Sequelize.INTEGER,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    is_from_store: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    privacy: {
        type: base_1.Sequelize.ENUM,
        values: ['PUBLIC', 'FRIEND', 'ONLY_ME'],
        defaultValue: 'PUBLIC',
        allowNull: false
    },
    list_image: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.STRING }),
        validate: {
            isUrl: true
        }
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
//# sourceMappingURL=post.js.map
//# sourceMappingURL=post.js.map