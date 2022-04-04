"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
require("dotenv").config({ path: require("path").resolve(".env") });
const sequelize = __importStar(require("sequelize"));
const activity_model_1 = require("./models/activity_model");
const access_token_model_1 = require("./models/access_token_model");
const refresh_token_model_1 = require("./models/refresh_token_model");
exports.dbConfig = new sequelize.Sequelize(process.env.PG_DATABASE || "", process.env.PG_USER || "", process.env.PG_PASS, {
    host: process.env.PG_HOST,
    dialect: "postgres",
    logging: false,
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});
const Activity = (0, activity_model_1.ActivityFactory)(exports.dbConfig);
const AccessToken = (0, access_token_model_1.AccessTokenFactory)(exports.dbConfig);
const RefreshToken = (0, refresh_token_model_1.RefreshTokenFactory)(exports.dbConfig);
const database = {
    sequelize: sequelize,
    models: { Activity, AccessToken, RefreshToken }
};
exports.default = database;
//# sourceMappingURL=config.js.map