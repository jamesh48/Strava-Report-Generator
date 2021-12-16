"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const axios = require("axios");
const controllers_1 = require("../database/controllers");
const apiConfigs_js_1 = require("./apiConfigs.js");
const serverUtils_1 = require("./serverUtils");
const serverUtils_2 = require("./serverUtils");
const sendErrorCodes_1 = require("./sendErrorCodes");
const dataRouter = express.Router();
dataRouter.use(async (req, res, next) => {
    if (!req.session.athleteId)
        return (0, sendErrorCodes_1.send400)(res, "No Cookied User");
    try {
        const { accessToken, expiresAt } = await (0, serverUtils_2.getCurrCredentials)(req.session.athleteId);
        const now = new Date();
        const later = new Date(expiresAt);
        if (now > later) {
            console.log("refreshing access token!");
            const newAccessToken = await (0, serverUtils_1.refreshAccessToken)(apiConfigs_js_1.getRefreshedAccessTokenConfig, req.session.athleteId);
            req.currentAccessToken = newAccessToken;
        }
        else {
            req.currentAccessToken = accessToken;
        }
    }
    catch (err) {
        return (0, sendErrorCodes_1.send500)(res, err.message);
    }
    next();
});
dataRouter.get("/loggedInUser", async ({ currentAccessToken }, res) => {
    try {
        const athleteAuthConfig = (0, apiConfigs_js_1.getAthleteAuthConfig)(currentAccessToken);
        var athlete = await axios(athleteAuthConfig);
    }
    catch (err) {
        return (0, sendErrorCodes_1.send500)(res, err.message);
    }
    try {
        const statsConfig = (0, apiConfigs_js_1.getStatsConfig)(currentAccessToken, athlete.data.id);
        var stats = await axios(statsConfig);
    }
    catch (err) {
        return (0, sendErrorCodes_1.send500)(res, err.message);
    }
    const fullAthlete = Object.assign(athlete.data, stats.data);
    res.status(200).send(fullAthlete);
});
dataRouter.get("/allEntries", async ({ currentAccessToken }, res) => {
    res.send((await (0, controllers_1.getAllUserActivities)(currentAccessToken)).sort((a, b) => b.distance / b.moving_time - a.distance / a.moving_time));
});
dataRouter.get("/individualEntry", async ({ currentAccessToken, query: { entryid } }, res) => {
    try {
        const indEntryConfig = (0, apiConfigs_js_1.getIndEntryConfig)(currentAccessToken, entryid);
        let entry = await (0, serverUtils_1.getStravaResults)(indEntryConfig);
        res.status(200).send(entry);
    }
    catch (err) {
        return res.send(err.message);
    }
});
dataRouter.post("/addAllActivities", async ({ currentAccessToken }, res) => {
    const callback = async (finalEntriesArr) => {
        const totalEntries = finalEntriesArr
            .sort((a, b) => b.distance / b.moving_time - a.distance / a.moving_time)
            .filter((x) => x.type === "Walk" ||
            x.type === "Swim" ||
            x.type === "Run" ||
            x.type === "Ride");
        console.log(`Done: ${totalEntries.length} Results Fetched`.red);
        console.log(`Uploading ${totalEntries.length} Entries to Database`);
        const allActivities = await (0, controllers_1.addAllActivities)(totalEntries);
        console.log(`Done- Uploaded ${allActivities.length} Entries to Database`);
        res.json(allActivities);
    };
    (0, serverUtils_1.recurseResults)((0, apiConfigs_js_1.getAllEntriesConfig)(currentAccessToken), [], callback);
});
dataRouter.put("/putActivityUpdate", async (req, res) => {
    const putActivityUpdateConfig = {
        method: "PUT",
        url: encodeURI(`https://www.strava.com/api/v3/activities/${req.query.activityId}?name=${req.query.name}&description=${req.query.description}`),
        headers: {
            Authorization: req.currentAccessToken
        }
    };
    try {
        const { data: updatedActivity } = await axios(putActivityUpdateConfig);
        const { name, id } = updatedActivity;
        await (0, controllers_1.updateOneActivity)(id, name);
        res.send("updatedActivity");
    }
    catch (err) {
        console.log(err.message);
        res.send(err.message);
    }
});
dataRouter.delete("/destroy-user", async (req, res) => {
    try {
        await (0, controllers_1.deleteEntries)(req.session.athleteId);
        await (0, controllers_1.deleteTokens)(req.session.athleteId);
        req.session.destroy();
        res.status(200).send("Deleted!");
    }
    catch (err) {
        res.status(500).send("Server Error!");
    }
});
exports.default = dataRouter;
//# sourceMappingURL=dataRouter.js.map