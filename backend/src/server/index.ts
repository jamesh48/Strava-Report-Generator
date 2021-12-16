require("dotenv").config({ path: "configs/dotenv/.env" });
const { performance } = require("perf_hooks");
import "colors";
import path = require("path");
import express = require("express");
import redis = require("redis");
import connectRedis = require("connect-redis");
import cors = require("cors");
import session = require("express-session");
import dataRouter from "./dataRouter";
import authRouter from "./authRouter";

// Redis ->
const redisStore = connectRedis(session);
const redisClient = redis.createClient();

const app = express();

app.use(
  cors({
    origin: "https://www.stravareportgenerator.app",
    credentials: true
  })
);

app.use(express.static(path.resolve("dist/public")));

app.use(
  session({
    name: process.env.EXPRESS_SESSION_COOKIE_NAME,
    // @ts-ignore
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
  })
);

app.use((req, _res, next) => {
  console.log(performance.now());
  console.log(
    //@ts-ignore
    `${req.method} ${req.url} ${req.session.athleteId || "No Athlete Id"}`.blue
  );
  next();
});

app.use(/(exchange_token|authLink)?/, authRouter);
app.use(
  /(loggedInUser|allEntries|individualEntry|addAllActivities|putActivityUpdate|destroy-user)?/,
  dataRouter
);

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Strava Report Generator Listening on port ${port}`)
);
