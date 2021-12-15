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
require("dotenv").config({ path: "configs/dotenv/.env" });
var path = require("path");
var express = require("express");
var authRouter = express();
var axios = require("axios");
var _a = require(path.resolve("database/controllers")), upsertAccessToken = _a.upsertAccessToken, upsertRefreshToken = _a.upsertRefreshToken;
authRouter.get("/authLink", function (req, res) {
    res.send(process.env.AUTH_LINK);
});
authRouter.get("/exchange_token", function (_a, res) {
    var session = _a.session, _b = _a.query, error = _b.error, scope = _b.scope, authCodeFromStrava = _b.code;
    return __awaiter(_this, void 0, void 0, function () {
        var _c, token_type, expires_at, expires_in, refresh_token, access_token, _d, athleteId, username, authBearer, scopes, readAllScope;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (error === "access_denied")
                        return [2, res.send(error)];
                    return [4, axios.post("https://www.strava.com/oauth/token", {
                            client_id: process.env.USER_ID,
                            client_secret: process.env.CLIENT_SECRET,
                            code: authCodeFromStrava,
                            grant_type: "authorization_code"
                        })];
                case 1:
                    _c = (_e.sent()).data, token_type = _c.token_type, expires_at = _c.expires_at, expires_in = _c.expires_in, refresh_token = _c.refresh_token, access_token = _c.access_token, _d = _c.athlete, athleteId = _d.id, username = _d.username;
                    authBearer = "".concat(token_type, " ").concat(access_token);
                    scopes = scope.split(",");
                    readAllScope = !!scopes.indexOf("activity:read_all");
                    return [4, upsertAccessToken({
                            athleteId: athleteId,
                            username: username,
                            accessToken: authBearer,
                            readScope: true,
                            readAllScope: readAllScope,
                            expiresAt: expires_at * 1000
                        })];
                case 2:
                    _e.sent();
                    return [4, upsertRefreshToken({
                            athleteId: athleteId,
                            refreshToken: refresh_token,
                            readScope: true,
                            readAllScope: readAllScope
                        })];
                case 3:
                    _e.sent();
                    session.athleteId = athleteId;
                    session.save(function () {
                        res.redirect('/');
                    });
                    return [2];
            }
        });
    });
});
module.exports = authRouter;
//# sourceMappingURL=authRouter.js.map