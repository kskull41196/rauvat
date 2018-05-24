import {
  sequelize,
  Sequelize
} from '../base'

export const Global_promotion = sequelize.define(
  'tbl_global_promotion',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    title: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    short_description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM,
      values: ['AMOUNT', 'PERCENT'],
      allowNull: false
    },
    thumb: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    start_date: {
      type: 'TIMESTAMP',
      allowNull: false
    },
    end_date: {
      type: 'TIMESTAMP',
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
