"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefreshedAccessTokenConfig = exports.getIndEntryConfig = exports.getStatsConfig = exports.getAllEntriesConfig = exports.getAthleteAuthConfig = void 0;
require("dotenv").config({ path: "configs/dotenv/.env" });
const getAthleteAuthConfig = (currentAccessToken, _currentScopes) => {
    return {
        url: "https://www.strava.com/api/v3/athlete",
        headers: {
            Authorization: currentAccessToken
        },
        scope: "activity:read_all"
    };
};
exports.getAthleteAuthConfig = getAthleteAuthConfig;
const getAllEntriesConfig = (currentAccessToken) => {
    return {
        url: "https://www.strava.com/api/v3/athlete/activities",
        headers: {
            Authorization: currentAccessToken
        },
        params: {
            page: 1,
            per_page: 200
        },
        data: ""
    };
};
exports.getAllEntriesConfig = getAllEntriesConfig;
const getStatsConfig = (currentAccessToken, athleteId) => {
    return {
        url: `https://www.strava.com/api/v3/athletes/${athleteId}/stats/`,
        headers: {
            Authorization: currentAccessToken
        },
        data: ""
    };
};
exports.getStatsConfig = getStatsConfig;
const getIndEntryConfig = (currentAccessToken, entryId) => {
    return {
        url: `https://www.strava.com/api/v3/activities/${entryId}include_all_efforts=true`,
        headers: {
            Authorization: currentAccessToken
        }
    };
};
exports.getIndEntryConfig = getIndEntryConfig;
const getRefreshedAccessTokenConfig = (refreshToken) => {
    return {
        method: "POST",
        url: "https://www.strava.com/api/v3/oauth/token",
        data: {
            client_id: process.env.USER_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: refreshToken
        }
    };
};
exports.getRefreshedAccessTokenConfig = getRefreshedAccessTokenConfig;
//# sourceMappingURL=apiConfigs.js.map