import {
  sequelize,
  Sequelize
} from '../base'

export const Comment = sequelize.define(
  'tbl_comment',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    user_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id'
      },
      allowNull: false
    },
    entity_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    entity_type: {
      type: Sequelize.ENUM,
      values: ['POST', 'CMT'],
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    deleted_at: { type: 'TIMESTAMP' }
  },
  {
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
  }
)
