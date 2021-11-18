module.exports = (sequelize, DataTypes) => {
  const RefreshToken = sequelize.define("refreshtoken", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      // This is important for making sure that ignoreDuplicates works correctly
      unique: true,
    },
    athleteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refreshToken: {
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
    }
  });
  return RefreshToken;
};
