const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');
const testEntries = require('./testData/testEntries.js');

module.exports = {
  addAllActivities: async () => {
    const { Activity } = sequelize.models;
    await sequelize.connect();
    try {
      const test = await Activity.bulkCreate(testEntries, {
        fields: ['id', 'name', 'type', 'start_date', 'distance', 'moving_time', 'elapsed_time', 'average_speed', 'max_speed', 'elev_high', 'elev_low', 'total_elevation_gain', 'average_heartrate', 'max_heartrate', 'location_city', 'location_state', 'location_country', 'achievement_count', 'kudos_count', 'comment_count', 'pr_count'],
        ignoreDuplicates: true,
        updateOnDuplicate: ['name', 'type', 'start_date', 'distance', 'moving_time', 'elapsed_time', 'average_speed', 'max_speed', 'elev_high', 'elev_low', 'total_elevation_gain', 'average_heartrate', 'max_heartrate', 'location_city', 'location_state', 'location_country', 'achievement_count', 'kudos_count', 'comment_count', 'pr_count']
      });
      return test;
    } catch (err) {
      console.log(err.message);
      return err;
    }
  }
}