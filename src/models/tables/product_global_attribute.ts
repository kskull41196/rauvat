import {
  sequelize,
  Sequelize
} from '../base'

export const ProductGlobalAttribute = sequelize.define(
  'tbl_product_global_attribute',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    product_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_product',
        key: 'id'
      }
    },
    global_attribute_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_attribute',
        key: 'id'
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
