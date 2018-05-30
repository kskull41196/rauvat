import {
  sequelize,
  Sequelize
} from '../base'

export const BillActivity = sequelize.define(
  'tbl_bill_activity',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    bill_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_bill',
        key: 'id'
      },
      allowNull: false
    },
    action: {
      type: Sequelize.ENUM,
      values: ['ORDERED', 'SUCCESSED', 'FAILED'],
      defaultValue: 'ORDERED',
      allowNull: false
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
