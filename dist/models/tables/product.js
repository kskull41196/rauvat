"use strict";

var cov_aujr6fg2f = function () {
    var path = "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/product.js",
        hash = "a7e38aef551a00cbcbd1fe653bbe62608722999f",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/macbook/Documents/Workspace/raovat-server/build/models/tables/product.js",
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
                    line: 174,
                    column: 3
                }
            },
            "3": {
                start: {
                    line: 147,
                    column: 12
                },
                end: {
                    line: 151,
                    column: 14
                }
            },
            "4": {
                start: {
                    line: 154,
                    column: 12
                },
                end: {
                    line: 158,
                    column: 14
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 146,
                        column: 22
                    },
                    end: {
                        line: 146,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 146,
                        column: 35
                    },
                    end: {
                        line: 152,
                        column: 9
                    }
                },
                line: 146
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 153,
                        column: 22
                    },
                    end: {
                        line: 153,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 153,
                        column: 35
                    },
                    end: {
                        line: 159,
                        column: 9
                    }
                },
                line: 153
            }
        },
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        },
        f: {
            "0": 0,
            "1": 0
        },
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

cov_aujr6fg2f.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_aujr6fg2f.s[1]++, require("../base"));
cov_aujr6fg2f.s[2]++;
exports.Product = base_1.sequelize.define('tbl_product', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
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
    global_area_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_global_area',
            key: 'id'
        },
        allowNull: false
    },
    price: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    short_description: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    thumb: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    list_image: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.STRING }),
        validate: {
            isUrl: true
        },
        allowNull: false
    },
    rating: {
        type: base_1.Sequelize.INTEGER,
        defaultValue: 5,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['BUY', 'SELL'],
        allowNull: false
    },
    is_from_store: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    position: {
        type: base_1.Sequelize.GEOMETRY('POINT', 4326),
        defaultValue: {
            type: 'Point',
            coordinates: [0, 0],
            crs: { type: 'name', properties: { name: 'EPSG:4326' } }
        }
    },
    longitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        },
        defaultValue: 0
    },
    duration: {
        type: base_1.Sequelize.INTEGER,
        defaultValue: 7,
        allowNull: false
    },
    is_limit_duration: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    attribute: {
        type: base_1.Sequelize.JSON,
        allowNull: false
    },
    state: {
        type: base_1.Sequelize.ENUM,
        values: ['REVIEW', 'VALID', 'BANNED', 'OUTDATED'],
        allowNull: false
    },
    feedback_from_admin: {
        type: base_1.Sequelize.STRING,
        allowNull: true
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
    hooks: {
        beforeCreate: function beforeCreate(product) {
            cov_aujr6fg2f.f[0]++;
            cov_aujr6fg2f.s[3]++;

            product.position = {
                type: 'Point',
                coordinates: [product.longitude, product.latitude],
                crs: { type: 'name', properties: { name: 'EPSG:4326' } }
            };
        },
        beforeUpdate: function beforeUpdate(product) {
            cov_aujr6fg2f.f[1]++;
            cov_aujr6fg2f.s[4]++;

            product.position = {
                type: 'Point',
                coordinates: [product.longitude, product.latitude],
                crs: { type: 'name', properties: { name: 'EPSG:4326' } }
            };
        }
    },
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
//# sourceMappingURL=product.js.map
//# sourceMappingURL=product.js.map