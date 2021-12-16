"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "configs/dotenv/.env" });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const controllers_1 = require("../database/controllers");
const authRouter = express_1.default.Router();
authRouter.get("/authLink", (_req, res) => {
    res.send(process.env.AUTH_LINK);
});
authRouter.get("/exchange_token", async ({ session, query: { error, scope, code: authCodeFromStrava } }, res) => {
    if (error === "access_denied")
        return res.send(error);
    const { data: { token_type, expires_at, refresh_token, access_token, athlete: { id: athleteId, username } } } = await axios_1.default.post(`https://www.strava.com/oauth/token`, {
        client_id: process.env.USER_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: authCodeFromStrava,
        grant_type: "authorization_code"
    });
    const authBearer = `${token_type} ${access_token}`;
    const scopes = scope.split(",");
    const readAllScope = !!scopes.indexOf("activity:read_all");
    await (0, controllers_1.upsertAccessToken)({
        athleteId: athleteId,
        username: username,
        accessToken: authBearer,
        readScope: true,
        readAllScope: readAllScope,
        expiresAt: expires_at * 1000
    });
    await (0, controllers_1.upsertRefreshToken)({
        athleteId: athleteId,
        refreshToken: refresh_token,
        readScope: true,
        readAllScope: readAllScope
    });
    session.athleteId = athleteId;
    session.save(() => {
        res.redirect("/test");
    });
});
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map