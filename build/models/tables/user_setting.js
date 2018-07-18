"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
exports.UserSetting = base_1.sequelize.define('tbl_user_setting', {
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
    support_toi_payment: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    support_cod_payment: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    allow_being_followed: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    show_seen_when_chat: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    allow_being_commented: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    allow_being_made_friend: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
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
//# sourceMappingURL=user_setting.js.map