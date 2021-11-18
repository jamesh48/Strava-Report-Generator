const axios = require("axios");
const express = require("express");
const dataRouter = express.Router();
const path = require("path");
const { addActivity } = require(path.resolve("database/controllers"));
const {
  getAthleteAuthConfig,
  getAllEntriesConfig,
  getStatsConfig,
  getIndEntryConfig,
  getRefreshedAccessTokenConfig,
} = require("./apiConfigs.js");
const {
  getStravaResults,
  recurseResults,
  refreshAccessToken,
} = require("./serverUtils.js");
const { getCurrCredentials } = require("./serverUtils");
const { send400, send500 } = require("./sendErrorCodes");

dataRouter.use(async (req, res, next) => {
  if (!req.session.athleteId) return send500(res, "No Cookied User");
  try {
    const { accessToken, expiresAt } = await getCurrCredentials(
      req.session.athleteId
    );
    // Compare expiration date with now, and refresh the token if it has expired.
    const now = new Date();
    if (now > expiresAt) {
      const newAccessToken = await refreshAccessToken(
        getRefreshedAccessTokenConfig,
        req.session.athleteId
      );
      req.currentAccessToken = newAccessToken;
    } else {
      req.currentAccessToken = accessToken;
    }
  } catch (err) {
    return send500(res, err.message);
  }
  next();
});

dataRouter.get("/loggedInUser", async ({ currentAccessToken }, res, next) => {
  try {
    const athleteAuthConfig = getAthleteAuthConfig(currentAccessToken);
    athlete = await axios(athleteAuthConfig);
  } catch (err) {
    return send500(res, err.message);
  }

  const statsConfig = getStatsConfig(currentAccessToken, athlete.data.id);
  const stats = await axios(statsConfig);

  const fullAthlete = Object.assign(athlete.data, stats.data);
  res.status(200).send(fullAthlete);
});

dataRouter.get("/allEntries", async ({ currentAccessToken }, res) => {
  let first200Results, second200Results;

  const callback = (finalEntriesArr) => {
    const totalEntries = finalEntriesArr.sort(
      (a, b) => b.distance / b.moving_time - a.distance / a.moving_time
    );
    res.status(200).send(totalEntries);
  };

  recurseResults(getAllEntriesConfig(currentAccessToken), [], callback);
});

dataRouter.get(
  "/individualEntry",
  async ({ currentAccessToken, query: { entryid } }, res) => {
    try {
      const indEntryConfig = getIndEntryConfig(currentAccessToken, entryid);
      let entry = await getStravaResults(indEntryConfig);
      res.status(200).send(entry);
    } catch (err) {
      return res.send(err.message);
    }
  }
);

dataRouter.post("/addAllActivities", async (req, res) => {
  const allActivities = await addAllActivities();
  res.send("ok");
});

module.exports = dataRouter;
