"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.GlobalPromotion = base_1.sequelize.define('tbl_global_promotion', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    title: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    short_description: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: base_1.Sequelize.TEXT,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['AMOUNT', 'PERCENT'],
        allowNull: false
    },
    thumb: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: base_1.Sequelize.INTEGER,
        allowNull: false
    },
    start_date: {
        type: 'TIMESTAMP',
        allowNull: false
    },
    end_date: {
        type: 'TIMESTAMP',
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
//# sourceMappingURL=global_promotion.js.map