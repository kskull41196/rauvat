import {
  sequelize,
  Sequelize
} from '../base'
import * as geolib from 'geolib'

export const Product = sequelize.define(
  'tbl_product',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
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
    global_area_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_global_area',
        key: 'id'
      },
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    short_description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    thumb: {
      type: Sequelize.STRING,
      allowNull: false
    },
    list_image: {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      validate: {
        isUrl: true
      },
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 5,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM,
      values: ['BUY', 'SELL'],
      allowNull: false
    },
    is_from_store: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    position: {
      type: Sequelize.GEOMETRY('POINT', 4326),
      defaultValue: {
        type: 'Point',
        coordinates: [0, 0],
        crs: { type: 'name', properties: { name: 'EPSG:4326' } }
      }
    },
    longitude: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0
    },
    latitude: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      },
      defaultValue: 0
    },
    duration: {
      type: Sequelize.INTEGER,
      defaultValue: 7,
      allowNull: false
    },
    is_limit_duration: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    attribute: {
      type: Sequelize.JSON,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM,
      values: ['REVIEW', 'VALID', 'BANNED', 'OUTDATED'],
      allowNull: false
    },
    feedback_from_admin: {
      type: Sequelize.STRING,
      allowNull: true
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
    hooks: {
      beforeCreate: (product: any) => {
        product.position = {
          type: 'Point',
          coordinates: [product.longitude, product.latitude],
          crs: { type: 'name', properties: { name: 'EPSG:4326' } }
        }
      },
      beforeUpdate: (product: any) => {
        product.position = {
          type: 'Point',
          coordinates: [product.longitude, product.latitude],
          crs: { type: 'name', properties: { name: 'EPSG:4326' } }
        }
      }
    },
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
