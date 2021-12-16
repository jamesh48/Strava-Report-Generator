"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const dataRouter_1 = __importDefault(require("./dataRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const cookieParser = require("cookie-parser");
const redisStore = connectRedis(session);
const redisClient = redis.createClient();
const app = express();
app.use(cors({
    origin: "https://www.stravareportgenerator.app",
    credentials: true
}));
app.use(express.static(path.resolve("dist/public")));
app.use(cookieParser());
app.use(session({
    name: process.env.EXPRESS_SESSION_COOKIE_NAME,
    secret: process.env.EXPRESS_SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
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
    console.log(`${req.method} ${req.url} ${req.session.athleteId || "No Athlete Id"}`.blue);
    next();
});
app.use(/(exchange_token|authLink)?/, authRouter_1.default);
app.use(/(loggedInUser|allEntries|individualEntry|addAllActivities|putActivityUpdate|destroy-user)?/, dataRouter_1.default);
const port = process.env.PORT;
app.listen(port, () => console.log(`Strava Report Generator Listening on port ${port}`));
//# sourceMappingURL=index.js.map