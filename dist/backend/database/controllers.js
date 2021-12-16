"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTokens = exports.deleteEntries = exports.findRefreshTokenFromCookie = exports.findAccessTokenFromCookie = exports.upsertRefreshToken = exports.upsertAccessToken = exports.updateOneActivity = exports.addAllActivities = exports.getAllUserActivities = void 0;
const config_1 = __importDefault(require("./config"));
const utils_1 = require("./utils");
const getAllUserActivities = async (accessToken) => {
    const { AccessToken, Activity } = config_1.default.models;
    try {
        const currentAccessToken = await AccessToken.findOne({
            where: { accessToken: accessToken }
        });
        const userActivities = await Activity.findAll({
            where: { athleteId: currentAccessToken === null || currentAccessToken === void 0 ? void 0 : currentAccessToken.athleteId }
        });
        return userActivities;
    }
    catch (err) {
        console.log(err.message);
        return err.message;
    }
};
exports.getAllUserActivities = getAllUserActivities;
const addAllActivities = async (totalEntries) => {
    const { Activity } = config_1.default.models;
    totalEntries = totalEntries.map((entry) => {
        return Object.assign(Object.assign({}, entry), { athleteId: entry.athlete.id, activityId: entry.id });
    });
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
    }
    catch (err) {
        console.log(err.message);
        return err;
    }
};
exports.addAllActivities = addAllActivities;
const updateOneActivity = async (activityId, newName) => {
    const { Activity } = config_1.default.models;
    try {
        await Activity.update({
            name: newName
        }, { where: { activityId: activityId } });
        return "ok";
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.updateOneActivity = updateOneActivity;
const upsertAccessToken = async (newAccessTokenObj) => {
    const { AccessToken } = config_1.default.models;
    try {
        await (0, utils_1.upsertAccess)(AccessToken, newAccessTokenObj, {
            athleteId: newAccessTokenObj.athleteId
        });
        return "ok";
    }
    catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    }
};
exports.upsertAccessToken = upsertAccessToken;
const upsertRefreshToken = async (newRefreshTokenObj) => {
    const { RefreshToken } = config_1.default.models;
    try {
        await (0, utils_1.upsertRefresh)(RefreshToken, newRefreshTokenObj, {
            athleteId: newRefreshTokenObj.athleteId
        });
        return "ok";
    }
    catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    }
};
exports.upsertRefreshToken = upsertRefreshToken;
const findAccessTokenFromCookie = async (cookiedAthleteId) => {
    const { AccessToken } = config_1.default.models;
    try {
        const accessToken = await AccessToken.findOne({
            where: { athleteId: cookiedAthleteId }
        });
        return accessToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.findAccessTokenFromCookie = findAccessTokenFromCookie;
const findRefreshTokenFromCookie = async (cookiedAthleteId) => {
    const { RefreshToken } = config_1.default.models;
    try {
        const refreshToken = await RefreshToken.findOne({
            where: { athleteId: cookiedAthleteId }
        });
        return refreshToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.findRefreshTokenFromCookie = findRefreshTokenFromCookie;
const deleteEntries = async (cookiedAthleteId) => {
    const { Activity } = config_1.default.models;
    try {
        await Activity.destroy({
            where: {
                athleteId: cookiedAthleteId
            }
        });
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.deleteEntries = deleteEntries;
const deleteTokens = async (cookiedAthleteId) => {
    const { AccessToken, RefreshToken } = config_1.default.models;
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
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.deleteTokens = deleteTokens;
//# sourceMappingURL=controllers.js.map