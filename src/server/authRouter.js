require("dotenv").config({ path: "configs/dotenv/.env" });
const path = require("path");
const express = require("express");
const authRouter = express();
const axios = require("axios");
const { upsertAccessToken, upsertRefreshToken } = require(path.resolve(
  "database/controllers"
));

authRouter.get("/authLink", (req, res) => {
  res.send(process.env.AUTH_LINK);
});

authRouter.get(
  "/exchange_token",
  async (
    { session, query: { error, scope, code: authCodeFromStrava } },
    res
  ) => {
    if (error === "access_denied") return res.send(error);

    // return;
    const {
      data: {
        token_type,
        expires_at,
        expires_in,
        refresh_token,
        access_token,
        athlete: { id: athleteId, username }
      }
    } = await axios.post(`https://www.strava.com/oauth/token`, {
      client_id: process.env.USER_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: authCodeFromStrava,
      grant_type: "authorization_code"
    });

    const authBearer = `${token_type} ${access_token}`;
    const scopes = scope.split(",");
    const readAllScope = !!scopes.indexOf("activity:read_all");
    await upsertAccessToken({
      athleteId: athleteId,
      username: username,
      accessToken: authBearer,
      // Read Scope is currently required.
      readScope: true,
      readAllScope: readAllScope,
      // expires at is in seconds, sequelize requires ms
      expiresAt: expires_at * 1000
    });

    await upsertRefreshToken({
      athleteId: athleteId,
      refreshToken: refresh_token,
      readScope: true,
      readAllScope: readAllScope
    });


    // Save in Express Session
    session.athleteId = athleteId;
    session.save(() => {
      res.redirect('/');
    });

  }
);

module.exports = authRouter;
