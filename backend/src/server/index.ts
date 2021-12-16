require("dotenv").config({ path: "configs/dotenv/.env" });
const { performance } = require("perf_hooks");
import "colors";
import path from "path";
import express from "express";
import redis from "redis";
import connectRedis from "connect-redis";
import cors from "cors";
import session from "express-session";
import dataRouter from "./dataRouter";
import authRouter from "./authRouter";
import { dbConfig } from "../database/config";

// Redis ->
const redisStore = connectRedis(session);
const redisClient = redis.createClient();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:8000", "https://www.stravareportgenerator.app"],
    credentials: true
  })
);

app.use(async (_req, _res, next) => {
  await dbConfig.authenticate();
  console.log("connected to db");
  next();
});

app.use(express.static(path.resolve("dist/public")));

app.use(
  session({
    name: process.env.EXPRESS_SESSION_COOKIE_NAME,
    // @ts-ignore
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
  })
);

app.use((req, _res, next) => {
  console.log(performance.now());
  console.log(`${req.method} ${req.url}`.blue);
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

// main().catch((err) => console.log(err.message));
