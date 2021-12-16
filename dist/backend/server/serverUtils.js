"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recurseResults = exports.refreshAccessToken = exports.getCurrCredentials = exports.getStravaResults = void 0;
const axios_1 = __importDefault(require("axios"));
const controllers_1 = require("../database/controllers");
const getStravaResults = async (config) => {
    try {
        const { data: response } = await (0, axios_1.default)(config);
        return response;
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.getStravaResults = getStravaResults;
const getCurrCredentials = async (athleteId) => {
    try {
        const currentAccessToken = await (0, controllers_1.findAccessTokenFromCookie)(athleteId);
        if (!currentAccessToken) {
            throw new Error("No Cookied User");
        }
        return currentAccessToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.getCurrCredentials = getCurrCredentials;
const refreshAccessToken = async (getRefreshedAccessTokenConfig, athleteId) => {
    const refreshToken = await (0, controllers_1.findRefreshTokenFromCookie)(athleteId);
    if (!(refreshToken === null || refreshToken === void 0 ? void 0 : refreshToken.refreshToken)) {
        throw new Error("no refresh token");
    }
    const { data: { access_token, expires_at, refresh_token, token_type } } = await (0, axios_1.default)(getRefreshedAccessTokenConfig(refreshToken.refreshToken));
    const authBearer = `${token_type} ${access_token}`;
    await (0, controllers_1.upsertAccessToken)({
        athleteId: athleteId,
        expiresAt: expires_at * 1000,
        accessToken: authBearer
    });
    await (0, controllers_1.upsertRefreshToken)({
        athleteId: athleteId,
        refreshToken: refresh_token
    });
    return authBearer;
};
exports.refreshAccessToken = refreshAccessToken;
const recurseResults = async (config, resultArr, callback) => {
    const currentPageResults = await (0, exports.getStravaResults)(config);
    console.log(`Current Page: ${config.params.page}, Results Length: ${currentPageResults.length}`
        .yellow);
    const nextArr = resultArr.concat(currentPageResults);
    if (currentPageResults.length < 200) {
        return callback(nextArr);
    }
    else {
        config.params.page = config.params.page + 1;
        (0, exports.recurseResults)(config, nextArr, callback);
    }
};
exports.recurseResults = recurseResults;
//# sourceMappingURL=serverUtils.js.map