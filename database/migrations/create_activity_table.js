// activity_name
// distance
// elasped_time
// moving_time
// total_elevation_gain
// type

// start_date

// location_city
// location_state
// location_country

// acheievement_count

// kudos_count
// comment_count

// avg_speed
// max_speed
// avg_hr
// max_hr
// elev_high
// elev_low

// pr_count

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', {
      xid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        // This is important for making sure that ignoreDuplicates works correctly
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      start_date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      elapsed_time: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      moving_time: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      average_speed: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      max_speed: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      elev_high: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      elev_low: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      total_elevation_gain: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      average_heartrate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      max_heartrate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      location_city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location_state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location_country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pr_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      achievement_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      kudos_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      comment_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_descriptions');
  }
};
