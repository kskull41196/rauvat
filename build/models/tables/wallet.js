"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.Wallet = base_1.sequelize.define('tbl_wallet', {
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
    amount_of_purchase: {
        type: base_1.Sequelize.BIGINT,
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
//# sourceMappingURL=wallet.js.map