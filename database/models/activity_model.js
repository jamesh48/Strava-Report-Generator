module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('activity', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      // This is important for making sure that ignoreDuplicates works correctly
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    elapsed_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    moving_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    average_speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    max_speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    elev_high: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    elev_low: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    total_elevation_gain: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    average_heartrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    max_heartrate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    location_country: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    pr_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    achievement_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    kudos_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    comment_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    }
  }, {})

  return Activity;
};