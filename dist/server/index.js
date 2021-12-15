"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "configs/dotenv/.env" });
const { performance } = require("perf_hooks");
require("colors");
const path = require("path");
const express = require("express");
const redis = require("redis");
const connectRedis = require("connect-redis");
const cors = require("cors");
const session = require("express-session");
const dataRouter = require("./dataRouter.js");
const authRouter = require("./authRouter.js");
const redisStore = connectRedis(session);
const redisClient = redis.createClient();
const app = express();
app.use(cors({
    origin: ["http://localhost:8000", "https://www.stravareportgenerator.app"],
    credentials: true
}));
app.use(express.static(path.resolve("dist/public")));
app.use(session({
    name: process.env.EXPRESS_SESSION_COOKIE_NAME,
    secret: process.env.EXPRESS_SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 1,
        httpOnly: true,
        sameSite: "lax",
        secure: false
    },
    store: new redisStore({
        client: redisClient,
        disableTouch: true
    })
}));
app.use((req, _res, next) => {
    console.log(performance.now());
    console.log(`${req.method} ${req.url}`.blue);
    next();
});
app.use(/(exchange_token|authLink)?/, authRouter);
app.use(/(loggedInUser|allEntries|individualEntry|addAllActivities|putActivityUpdate|destroy-user)?/, dataRouter);
const port = process.env.PORT;
app.listen(port, () => console.log(`Strava Report Generator Listening on port ${port}`));
//# sourceMappingURL=index.js.map