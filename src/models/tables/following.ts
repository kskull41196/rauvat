import {
  sequelize,
  Sequelize
} from '../base'

export const Following = sequelize.define(
  'tbl_following',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id'
      },
      allowNull: false
    },
    follower_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_user',
        key: 'id'
      },
      allowNull: false
    },
    action: {
      type: Sequelize.STRING,
      defaultValue: 'DEFAULT',
      validate: {
        isIn: [
          [
            'DEFAULT',
            'VIEWFIRST'
          ]
        ]
      }
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
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
