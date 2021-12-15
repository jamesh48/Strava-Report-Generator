var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var path = require("path");
var axios = require("axios");
var _a = require(path.resolve("database/controllers")), addNewUser = _a.addNewUser, findAccessTokenFromCookie = _a.findAccessTokenFromCookie, findRefreshTokenFromCookie = _a.findRefreshTokenFromCookie, upsertAccessToken = _a.upsertAccessToken, upsertRefreshToken = _a.upsertRefreshToken;
module.exports = {
    getStravaResults: function (config) { return __awaiter(_this, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, axios(config)];
                case 1:
                    response = (_a.sent()).data;
                    return [2, response];
                case 2:
                    err_1 = _a.sent();
                    throw new Error(err_1.message);
                case 3: return [2];
            }
        });
    }); },
    getCurrCredentials: function (athleteId) { return __awaiter(_this, void 0, void 0, function () {
        var currentAccessToken, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, findAccessTokenFromCookie(athleteId)];
                case 1:
                    currentAccessToken = _a.sent();
                    return [2, currentAccessToken];
                case 2:
                    err_2 = _a.sent();
                    throw new Error(err_2.message);
                case 3: return [2];
            }
        });
    }); },
    refreshAccessToken: function (getRefreshedAccessTokenConfig, athleteId) { return __awaiter(_this, void 0, void 0, function () {
        var refreshToken, _a, access_token, expires_at, refresh_token, token_type, authBearer;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, findRefreshTokenFromCookie(athleteId)];
                case 1:
                    refreshToken = (_b.sent()).refreshToken;
                    return [4, axios(getRefreshedAccessTokenConfig(refreshToken))];
                case 2:
                    _a = (_b.sent()).data, access_token = _a.access_token, expires_at = _a.expires_at, refresh_token = _a.refresh_token, token_type = _a.token_type;
                    authBearer = "".concat(token_type, " ").concat(access_token);
                    return [4, upsertAccessToken({
                            athleteId: athleteId,
                            expiresAt: expires_at * 1000,
                            accessToken: authBearer
                        })];
                case 3:
                    _b.sent();
                    return [4, upsertRefreshToken({
                            athleteId: athleteId,
                            refreshToken: refresh_token,
                        })];
                case 4:
                    _b.sent();
                    return [2, authBearer];
            }
        });
    }); },
    recurseResults: function (config, resultArr, callback) { return __awaiter(_this, void 0, void 0, function () {
        var currentPageResults, nextArr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, module.exports.getStravaResults(config)];
                case 1:
                    currentPageResults = _a.sent();
                    console.log("Current Page: ".concat(config.params.page, ", Results Length: ").concat(currentPageResults.length).yellow);
                    nextArr = resultArr.concat(currentPageResults);
                    if (currentPageResults.length < 200) {
                        return [2, callback(nextArr)];
                    }
                    else {
                        config.params.page = config.params.page + 1;
                        module.exports.recurseResults(config, nextArr, callback);
                    }
                    return [2];
            }
        });
    }); },
};
//# sourceMappingURL=serverUtils.js.map