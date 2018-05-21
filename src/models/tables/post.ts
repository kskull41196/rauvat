import {
  sequelize,
  Sequelize
} from '../base'

export const Post = sequelize.define(
  'tbl_post',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    content: {
      type: Sequelize.STRING,
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
    amount_of_like: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    amount_of_comment: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    is_from_store: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
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
