"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenFactory = exports.AccessToken = void 0;
const sequelize_1 = require("sequelize");
class AccessToken extends sequelize_1.Model {
}
exports.AccessToken = AccessToken;
function AccessTokenFactory(sequelize) {
    return sequelize.define("accesstoken", {
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        athleteId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        readScope: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        readAllScope: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        accessToken: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        expiresAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    });
}
exports.AccessTokenFactory = AccessTokenFactory;
//# sourceMappingURL=access_token_model.js.map