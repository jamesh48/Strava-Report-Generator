module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define('accesstoken', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      // This is important for making sure that ignoreDuplicates works correctly
      unique: true
    },
    athleteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    readScope: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    readAllScope: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {})

  return AccessToken;
};