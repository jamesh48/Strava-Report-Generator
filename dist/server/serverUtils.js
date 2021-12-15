"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const path = require("path");
const { findAccessTokenFromCookie, findRefreshTokenFromCookie, upsertAccessToken, upsertRefreshToken } = require(path.resolve("database/controllers"));
module.exports = {
    getStravaResults: async (config) => {
        try {
            const { data: response } = await (0, axios_1.default)(config);
            return response;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getCurrCredentials: async (athleteId) => {
        try {
            const currentAccessToken = await findAccessTokenFromCookie(athleteId);
            return currentAccessToken;
            if (!currentAccessToken) {
                throw new Error("No Cookied User");
            }
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    refreshAccessToken: async (getRefreshedAccessTokenConfig, athleteId) => {
        const { refreshToken } = await findRefreshTokenFromCookie(athleteId);
        const { data: { access_token, expires_at, refresh_token, token_type } } = await (0, axios_1.default)(getRefreshedAccessTokenConfig(refreshToken));
        const authBearer = `${token_type} ${access_token}`;
        await upsertAccessToken({
            athleteId: athleteId,
            expiresAt: expires_at * 1000,
            accessToken: authBearer
        });
        await upsertRefreshToken({
            athleteId: athleteId,
            refreshToken: refresh_token
        });
        return authBearer;
    },
    recurseResults: async (config, resultArr, callback) => {
        const currentPageResults = await module.exports.getStravaResults(config);
        console.log(`Current Page: ${config.params.page}, Results Length: ${currentPageResults.length}`
            .yellow);
        const nextArr = resultArr.concat(currentPageResults);
        if (currentPageResults.length < 200) {
            return callback(nextArr);
        }
        else {
            config.params.page = config.params.page + 1;
            module.exports.recurseResults(config, nextArr, callback);
        }
    }
};
//# sourceMappingURL=serverUtils.js.map