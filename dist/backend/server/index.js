"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "configs/dotenv/.env" });
const { performance } = require("perf_hooks");
require("colors");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const dataRouter_1 = __importDefault(require("./dataRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const config_1 = require("../database/config");
const redisStore = (0, connect_redis_1.default)(express_session_1.default);
const redisClient = redis_1.default.createClient();
const main = async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: [
            "http://localhost:8000",
            "https://www.stravareportgenerator.app"
        ],
        credentials: true
    }));
    try {
        await config_1.dbConfig.authenticate();
        console.log("connected to db");
    }
    catch (err) {
        throw new Error(err.message);
    }
    app.use(express_1.default.static(path_1.default.resolve("dist/public")));
    app.use((0, express_session_1.default)({
        name: process.env.EXPRESS_SESSION_COOKIE_NAME,
        secret: process.env.EXPRESS_SESSION_SECRET || "",
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
    app.use(/(exchange_token|authLink)?/, authRouter_1.default);
    app.use(/(loggedInUser|allEntries|individualEntry|addAllActivities|putActivityUpdate|destroy-user)?/, dataRouter_1.default);
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Strava Report Generator Listening on port ${port}`));
};
main().catch((err) => console.log(err.message));
//# sourceMappingURL=index.js.map