require("dotenv").config({ path: "configs/dotenv/.env" });
var performance = require("perf_hooks").performance;
var colors = require("colors");
var path = require("path");
var express = require("express");
var redis = require("redis");
var connectRedis = require("connect-redis");
var cors = require("cors");
var session = require("express-session");
var dataRouter = require("./dataRouter.js");
var authRouter = require("./authRouter.js");
var redisStore = connectRedis(session);
var redisClient = redis.createClient();
var app = express();
var _a = require("./serverUtils"), getStravaResults = _a.getStravaResults, getCurrCredentials = _a.getCurrCredentials;
app.use(cors({
    origin: ["http://localhost:8000", "https://www.stravareportgenerator.app"],
    credentials: true
}));
app.use(express.static(path.resolve("build/dist/public")));
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
    }),
}));
app.use(function (req, res, next) {
    console.log(performance.now());
    console.log("".concat(req.method, " ").concat(req.url).blue);
    next();
});
app.use(/(exchange_token|authLink)?/, authRouter);
app.use(/(loggedInUser|allEntries|individualEntry|addAllActivities|putActivityUpdate)?/, dataRouter);
var port = process.env.PORT;
app.listen(port, function () {
    return console.log("Strava Report Generator Listening on port ".concat(port));
});
//# sourceMappingURL=index.js.map