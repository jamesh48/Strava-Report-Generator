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
var performance = require("perf_hooks").performance;
var axios = require("axios");
var express = require("express");
var dataRouter = express.Router();
var path = require("path");
var _a = require(path.resolve("database/controllers")), addActivity = _a.addActivity, addAllActivities = _a.addAllActivities, getAllUserActivities = _a.getAllUserActivities, updateOneActivity = _a.updateOneActivity, deleteTokens = _a.deleteTokens, deleteEntries = _a.deleteEntries;
var _b = require("./apiConfigs.js"), getAthleteAuthConfig = _b.getAthleteAuthConfig, getAllEntriesConfig = _b.getAllEntriesConfig, getStatsConfig = _b.getStatsConfig, getIndEntryConfig = _b.getIndEntryConfig, getRefreshedAccessTokenConfig = _b.getRefreshedAccessTokenConfig;
var _c = require("./serverUtils.js"), getStravaResults = _c.getStravaResults, recurseResults = _c.recurseResults, refreshAccessToken = _c.refreshAccessToken;
var getCurrCredentials = require("./serverUtils").getCurrCredentials;
var _d = require("./sendErrorCodes"), send400 = _d.send400, send500 = _d.send500;
dataRouter.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var _a, accessToken, expiresAt, now, newAccessToken, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(performance.now());
                if (!req.session.athleteId)
                    return [2, send500(res, "No Cookied User")];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4, getCurrCredentials(req.session.athleteId)];
            case 2:
                _a = _b.sent(), accessToken = _a.accessToken, expiresAt = _a.expiresAt;
                now = new Date();
                if (!(now > expiresAt)) return [3, 4];
                return [4, refreshAccessToken(getRefreshedAccessTokenConfig, req.session.athleteId)];
            case 3:
                newAccessToken = _b.sent();
                req.currentAccessToken = newAccessToken;
                return [3, 5];
            case 4:
                req.currentAccessToken = accessToken;
                _b.label = 5;
            case 5: return [3, 7];
            case 6:
                err_1 = _b.sent();
                return [2, send500(res, err_1.message)];
            case 7:
                next();
                return [2];
        }
    });
}); });
dataRouter.get("/loggedInUser", function (_a, res, next) {
    var currentAccessToken = _a.currentAccessToken;
    return __awaiter(_this, void 0, void 0, function () {
        var athleteAuthConfig, athlete, err_2, statsConfig, stats, err_3, fullAthlete;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    athleteAuthConfig = getAthleteAuthConfig(currentAccessToken);
                    return [4, axios(athleteAuthConfig)];
                case 1:
                    athlete = _b.sent();
                    return [3, 3];
                case 2:
                    err_2 = _b.sent();
                    return [2, send500(res, err_2.message)];
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    statsConfig = getStatsConfig(currentAccessToken, athlete.data.id);
                    return [4, axios(statsConfig)];
                case 4:
                    stats = _b.sent();
                    return [3, 6];
                case 5:
                    err_3 = _b.sent();
                    return [2, send500(res, err_3.message)];
                case 6:
                    fullAthlete = Object.assign(athlete.data, stats.data);
                    res.status(200).send(fullAthlete);
                    return [2];
            }
        });
    });
});
dataRouter.get("/allEntries", function (_a, res) {
    var currentAccessToken = _a.currentAccessToken;
    return __awaiter(_this, void 0, void 0, function () {
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _c = (_b = res).send;
                    return [4, getAllUserActivities(currentAccessToken)];
                case 1:
                    _c.apply(_b, [(_d.sent()).sort(function (a, b) { return b.distance / b.moving_time - a.distance / a.moving_time; })]);
                    return [2];
            }
        });
    });
});
dataRouter.get("/individualEntry", function (_a, res) {
    var currentAccessToken = _a.currentAccessToken, entryid = _a.query.entryid;
    return __awaiter(_this, void 0, void 0, function () {
        var indEntryConfig, entry, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    indEntryConfig = getIndEntryConfig(currentAccessToken, entryid);
                    return [4, getStravaResults(indEntryConfig)];
                case 1:
                    entry = _b.sent();
                    res.status(200).send(entry);
                    return [3, 3];
                case 2:
                    err_4 = _b.sent();
                    return [2, res.send(err_4.message)];
                case 3: return [2];
            }
        });
    });
});
dataRouter.post("/addAllActivities", function (_a, res) {
    var currentAccessToken = _a.currentAccessToken;
    return __awaiter(_this, void 0, void 0, function () {
        var callback;
        var _this = this;
        return __generator(this, function (_b) {
            callback = function (finalEntriesArr) { return __awaiter(_this, void 0, void 0, function () {
                var totalEntries, allActivities;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            totalEntries = finalEntriesArr
                                .sort(function (a, b) { return b.distance / b.moving_time - a.distance / a.moving_time; })
                                .filter(function (x) {
                                return x.type === "Walk" ||
                                    x.type === "Swim" ||
                                    x.type === "Run" ||
                                    x.type === "Ride";
                            });
                            console.log("Done: ".concat(totalEntries.length, " Results Fetched").red);
                            console.log("Uploading ".concat(totalEntries.length, " Entries to Database"));
                            return [4, addAllActivities(totalEntries)];
                        case 1:
                            allActivities = _a.sent();
                            console.log("Done- Uploaded ".concat(allActivities.length, " Entries to Database"));
                            res.json(allActivities);
                            return [2];
                    }
                });
            }); };
            recurseResults(getAllEntriesConfig(currentAccessToken), [], callback);
            return [2];
        });
    });
});
dataRouter.put("/putActivityUpdate", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var putActivityUpdateConfig, updatedActivity, name_1, id, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                putActivityUpdateConfig = {
                    method: "PUT",
                    url: encodeURI("https://www.strava.com/api/v3/activities/".concat(req.query.activityId, "?name=").concat(req.query.name, "&description=").concat(req.query.description)),
                    headers: {
                        Authorization: req.currentAccessToken
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4, axios(putActivityUpdateConfig)];
            case 2:
                updatedActivity = (_a.sent()).data;
                name_1 = updatedActivity.name, id = updatedActivity.id;
                return [4, updateOneActivity(id, name_1)];
            case 3:
                _a.sent();
                res.send("updatedActivity");
                return [3, 5];
            case 4:
                err_5 = _a.sent();
                console.log(err_5.message);
                res.send(err_5.message);
                return [3, 5];
            case 5: return [2];
        }
    });
}); });
dataRouter.delete("/destroy-user", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, deleteEntries(req.session.athleteId)];
            case 1:
                _a.sent();
                return [4, deleteTokens(req.session.athleteId)];
            case 2:
                _a.sent();
                req.session.destroy();
                res.status(200).send("Deleted!");
                return [3, 4];
            case 3:
                err_6 = _a.sent();
                res.status(500).send("Server Error!");
                return [3, 4];
            case 4: return [2];
        }
    });
}); });
module.exports = dataRouter;
//# sourceMappingURL=dataRouter.js.map