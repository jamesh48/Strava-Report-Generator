const Sequelize = require("sequelize");
const path = require("path");
const sequelize = require("./config.js");
// const testEntries = require("./testData/testEntries.js");
const upsert = require("./utils.js");

module.exports = {
  getAllUserActivities: async (accessToken) => {
    const { AccessToken, Activity } = sequelize.models;
    await sequelize.connect();

    try {
      const {
        dataValues: { athleteId }
      } = await AccessToken.findOne({
        where: { accessToken: accessToken }
      });

      const userActivities = await Activity.findAll({
        where: { athleteId: athleteId }
      });

      return userActivities;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  },

  addAllActivities: async (totalEntries) => {
    const { Activity, AccessToken } = sequelize.models;

    totalEntries = totalEntries.map((entry) => {
      return { ...entry, athleteId: entry.athlete.id, activityId: entry.id };
    });

    await sequelize.connect();
    try {
      const newActivities = await Activity.bulkCreate(totalEntries, {
        fields: [
          "id",
          "athleteId",
          "activityId",
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
          "pr_count"
        ],
        ignoreDuplicates: false,
        updateOnDuplicate: [
          "name",
          "type",
          "start_date",
          "activityId",
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
          "pr_count"
        ]
      });
      return newActivities;
    } catch (err) {
      console.log(err.message);
      return err;
    }
  },

  updateOneActivity: async (activityId, newName) => {
    const { Activity } = sequelize.models;
    await sequelize.connect();
    try {
      const updatedActivity = await Activity.update(
        {
          name: newName
        },
        { where: { activityId: activityId }, returning: true, plain: true }
      );

      return "ok";
    } catch (err) {
      throw new Error(err.message);
    }
  },

  upsertAccessToken: async (newAccessTokenObj) => {
    const { AccessToken } = sequelize.models;
    await sequelize.connect();
    try {
      await upsert(AccessToken, newAccessTokenObj, {
        athleteId: newAccessTokenObj.athleteId
      });
      return "ok";
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },

  upsertRefreshToken: async (newRefreshTokenObj) => {
    const { RefreshToken } = sequelize.models;
    await sequelize.connect();
    try {
      await upsert(RefreshToken, newRefreshTokenObj, {
        athleteId: newRefreshTokenObj.athleteId
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
        where: { athleteId: cookiedAthleteId }
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
        where: { athleteId: cookiedAthleteId }
      });
      return refreshToken;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  deleteEntries: async (cookiedAthleteId) => {
    const { Activity } = sequelize.models;
    await sequelize.connect();
    try {
      // Delete All Entries for the given user
      await Activity.destroy({
        where: {
          athleteId: cookiedAthleteId
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  deleteTokens: async (cookiedAthleteId) => {
    const { AccessToken, RefreshToken } = sequelize.models;
    await sequelize.connect();
    try {
      await AccessToken.destroy({
        where: {
          athleteId: cookiedAthleteId
        }
      });

      await RefreshToken.destroy({
        where: {
          athleteId: cookiedAthleteId
        }
      });
      return "ok";
    } catch (err) {
      throw new Error(err.message);
    }
  }
};
