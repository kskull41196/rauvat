'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'position', {
      type: Sequelize.GEOMETRY('POINT', 4326),
      defaultValue: {
        type: 'Point',
        coordinates: [0, 0],
        crs: { type: 'name', properties: { name: 'EPSG:4326' } }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'position');
  }
};
