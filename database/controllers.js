const Sequelize = require("sequelize");
const path = require("path");
const sequelize = require("./config.js");
const testEntries = require("./testData/testEntries.js");
const upsert = require("./utils.js");

module.exports = {
  addAllActivities: async () => {
    const { Activity } = sequelize.models;
    await sequelize.connect();
    try {
      const newActivities = await Activity.bulkCreate(testEntries, {
        fields: [
          "id",
          "name",
          "type",
          "start_date",
          "distance",
          "moving_time",
          "elapsed_time",
          "average_speed",
          "max_speed",
          "elev_high",
          "elev_low",
          "total_elevation_gain",
          "average_heartrate",
          "max_heartrate",
          "location_city",
          "location_state",
          "location_country",
          "achievement_count",
          "kudos_count",
          "comment_count",
          "pr_count",
        ],
        ignoreDuplicates: true,
        updateOnDuplicate: [
          "name",
          "type",
          "start_date",
          "distance",
          "moving_time",
          "elapsed_time",
          "average_speed",
          "max_speed",
          "elev_high",
          "elev_low",
          "total_elevation_gain",
          "average_heartrate",
          "max_heartrate",
          "location_city",
          "location_state",
          "location_country",
          "achievement_count",
          "kudos_count",
          "comment_count",
          "pr_count",
        ],
      });
      return newActivities;
    } catch (err) {
      console.log(err.message);
      return err;
    }
  },

  upsertAccessToken: async (newAccessTokenObj) => {
    const { AccessToken } = sequelize.models;
    await sequelize.connect();
    try {
      await upsert(AccessToken, newAccessTokenObj, {
        athleteId: newAccessTokenObj.athleteId,
      });
      return "ok";
    } catch (err) {
      console.log(err.message)
      throw new Error(err.message);
    }
  },

  upsertRefreshToken: async (newRefreshTokenObj) => {
    const { RefreshToken } = sequelize.models;
    await sequelize.connect();
    try {
      await upsert(RefreshToken, newRefreshTokenObj, {
        athleteId: newRefreshTokenObj.athleteId,
      });
      return "ok";
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  findAccessTokenFromCookie: async (cookiedAthleteId) => {
    const { AccessToken } = sequelize.models;
    await sequelize.connect();
    try {
      const accessToken = await AccessToken.findOne({
        where: { athleteId: cookiedAthleteId },
      });
      return accessToken;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  findRefreshTokenFromCookie: async (cookiedAthleteId) => {
    const { RefreshToken } = sequelize.models;
    await sequelize.connect();
    try {
      const refreshToken = await RefreshToken.findOne({
        where: {athleteId: cookiedAthleteId}
      });
      return refreshToken;
    } catch(err) {
      throw new Error(err.message);
    }
  },
};
