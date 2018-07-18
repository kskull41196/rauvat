"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.VnpayHistory = base_1.sequelize.define('tbl_vnpay_history', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    session_id: {
        type: base_1.Sequelize.UUID,
        allowNull: false
    },
    amount: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        allowNull: false,
        validate: {
            min: 0
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
//# sourceMappingURL=vnpay_history.js.map