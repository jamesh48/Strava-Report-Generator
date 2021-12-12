require("dotenv").config({ path: "configs/dotenv/.env" });
const { performance } = require("perf_hooks");
const colors = require("colors");
const path = require("path");
const express = require("express");
const redis = require("redis");
const connectRedis = require("connect-redis");
const cors = require("cors");
const session = require("express-session");
const dataRouter = require("./dataRouter.js");
const authRouter = require("./authRouter.js");

// Redis ->
const redisStore = connectRedis(session);
const redisClient = redis.createClient();

// ->
const app = express();

// Methods ->
const { getStravaResults, getCurrCredentials } = require("./serverUtils");

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true
  })
);

app.use(express.static(path.resolve("public")));

app.use(
  session({
    name: process.env.EXPRESS_SESSION_COOKIE_NAME,
    store: new redisStore({
      client: redisClient,
      disableTouch: true
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 1,
      httpOnly: true,
      sameSite: "lax",
      secure: !process.env.NODE_ENV
    },
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false
  })
);

app.use((req, res, next) => {
  console.log(performance.now());
  console.log(`${req.method} ${req.url}`.blue);
  next();
});

app.use(/(exchange_token|authLink)?/, authRouter);
app.use(
  /(loggedInUser|allEntries|individualEntry|addAllActivities)?/,
  dataRouter
);

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Strava Report Generator Listening on port ${port}`)
);
