require('dotenv').config({path: require('path').resolve('.env')})
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASS, {
  host: process.env.PG_HOST,
  dialect: 'postgres',
  logging: false
});

const connect = async () => {
  try {
    // This Line enables emojis in the name field. (activity name)- why isn't it working?
    // await sequelize.query("ALTER TABLE activities MODIFY name TEXT CHARSET utf8mb4");
    await sequelize.authenticate();
    await sequelize.sync();
    // console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

const model = name => database.models[name];

const Activity = require('./models/activity_model.js')(sequelize, Sequelize.DataTypes);
const AccessToken = require('./models/access_token_model.js')(sequelize, Sequelize.DataTypes);
const RefreshToken = require('./models/refresh_token_model.js')(sequelize, Sequelize.DataTypes);

module.exports = (database) = {
  sequelize: sequelize,
  models: { Activity, AccessToken, RefreshToken },
  connect,
  model,
};