import {
  sequelize,
  Sequelize
} from '../base'

export const GlobalCategoryAndAttribute = sequelize.define(
  'tbl_global_category_and_attribute',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    global_category_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_category',
        key: 'id'
      },
      allowNull: false
    },
    global_attribute_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_attribute',
        key: 'id'
      },
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
