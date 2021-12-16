"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityFactory = exports.Activity = void 0;
const sequelize_1 = require("sequelize");
class Activity extends sequelize_1.Model {
}
exports.Activity = Activity;
function ActivityFactory(sequelize) {
    return sequelize.define("activity", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: true,
            primaryKey: true,
            unique: true
        },
        activityId: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false
        },
        athleteId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        start_date: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        distance: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        elapsed_time: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        moving_time: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        average_speed: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        max_speed: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        elev_high: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        elev_low: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        total_elevation_gain: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        average_heartrate: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        max_heartrate: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        location_city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        location_state: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        location_country: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        pr_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        achievement_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        kudos_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        },
        comment_count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            unique: false
        }
    });
}
exports.ActivityFactory = ActivityFactory;
//# sourceMappingURL=activity_model.js.map