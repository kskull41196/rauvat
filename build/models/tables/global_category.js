"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.GlobalCategory = base_1.sequelize.define('tbl_global_category', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    icon_url: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    short_description: {
        type: base_1.Sequelize.TEXT,
        allowNull: true
    },
    description: {
        type: base_1.Sequelize.TEXT,
        allowNull: true
    },
    amount_of_product: {
        type: base_1.Sequelize.INTEGER,
        validate: {
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
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
//# sourceMappingURL=global_category.js.map