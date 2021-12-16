"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenFactory = exports.RefreshToken = void 0;
const sequelize_1 = require("sequelize");
class RefreshToken extends sequelize_1.Model {
}
exports.RefreshToken = RefreshToken;
function RefreshTokenFactory(sequelize) {
    return sequelize.define("refreshtoken", {
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
        refreshToken: {
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
        }
    });
}
exports.RefreshTokenFactory = RefreshTokenFactory;
;
//# sourceMappingURL=refresh_token_model.js.map