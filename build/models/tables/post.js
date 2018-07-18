"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
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
            min: 0,
        },
        defaultValue: 0,
        allowNull: false
    },
    amount_of_comment: {
        type: base_1.Sequelize.INTEGER,
        validate: {
            min: 0,
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
//# sourceMappingURL=post.js.map