"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
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
            min: 0,
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
            min: 0,
        },
        defaultValue: 0
    },
    latitude: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0,
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
        defaultValue: true,
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
        beforeCreate: (product) => {
            product.position = {
                type: 'Point',
                coordinates: [product.longitude, product.latitude],
                crs: { type: 'name', properties: { name: 'EPSG:4326' } }
            };
        },
        beforeUpdate: (product) => {
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