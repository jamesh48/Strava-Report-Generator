const { performance } = require("perf_hooks");
const axios = require("axios");
const express = require("express");
const dataRouter = express.Router();
const path = require("path");
const {
  addActivity,
  addAllActivities,
  getAllUserActivities,
  updateOneActivity,
  deleteTokens,
  deleteEntries
} = require(path.resolve("database/controllers"));
const {
  getAthleteAuthConfig,
  getAllEntriesConfig,
  getStatsConfig,
  getIndEntryConfig,
  getRefreshedAccessTokenConfig
} = require("./apiConfigs.js");
const {
  getStravaResults,
  recurseResults,
  refreshAccessToken
} = require("./serverUtils.js");
const { getCurrCredentials } = require("./serverUtils");
const { send400, send500 } = require("./sendErrorCodes");

dataRouter.use(async (req, res, next) => {
  console.log(performance.now());
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
    var athlete = await axios(athleteAuthConfig);
  } catch (err) {
    return send500(res, err.message);
  }
  try {
    const statsConfig = getStatsConfig(currentAccessToken, athlete.data.id);
    var stats = await axios(statsConfig);
  } catch (err) {
    return send500(res, err.message);
  }

  const fullAthlete = Object.assign(athlete.data, stats.data);
  res.status(200).send(fullAthlete);
});

dataRouter.get("/allEntries", async ({ currentAccessToken }, res) => {
  res.send(
    (await getAllUserActivities(currentAccessToken)).sort(
      (a, b) => b.distance / b.moving_time - a.distance / a.moving_time
    )
  );
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

dataRouter.post("/addAllActivities", async ({ currentAccessToken }, res) => {
  const callback = async (finalEntriesArr) => {
    const totalEntries = finalEntriesArr
      .sort((a, b) => b.distance / b.moving_time - a.distance / a.moving_time)
      .filter(
        (x) =>
          x.type === "Walk" ||
          x.type === "Swim" ||
          x.type === "Run" ||
          x.type === "Ride"
      );
    console.log(`Done: ${totalEntries.length} Results Fetched`.red);
    console.log(`Uploading ${totalEntries.length} Entries to Database`);
    const allActivities = await addAllActivities(totalEntries);
    console.log(`Done- Uploaded ${allActivities.length} Entries to Database`);
    res.json(allActivities);
  };

  recurseResults(getAllEntriesConfig(currentAccessToken), [], callback);
});

dataRouter.put("/putActivityUpdate", async (req, res) => {
  const putActivityUpdateConfig = {
    method: "PUT",
    url: encodeURI(
      `https://www.strava.com/api/v3/activities/${req.query.activityId}?name=${req.query.name}&description=${req.query.description}`
    ),
    headers: {
      Authorization: req.currentAccessToken
    }
  };

  try {
    const { data: updatedActivity } = await axios(putActivityUpdateConfig);

    const { name, id } = updatedActivity;
    await updateOneActivity(id, name);

    res.send("updatedActivity");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

dataRouter.delete("/destroy-user", async (req, res) => {
  try {
    await deleteEntries(req.session.athleteId);
    await deleteTokens(req.session.athleteId);
    req.session.destroy();
    res.status(200).send("Deleted!");
  } catch (err) {
    res.status(500).send("Server Error!");
  }
});

module.exports = dataRouter;
