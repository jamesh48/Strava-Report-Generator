require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: 'mysql',
  logging: false
});

const connect = async () => {
  try {
    // This Line enables emojis in the name field. (activity name)
    await sequelize.query("ALTER TABLE activities MODIFY name TEXT CHARSET utf8mb4");
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection to the database has been established successfully.');
  }
  catch (error) {
    console.error(error.message);
    process.exit(-1);
  }
};

const model = name => database.models[name];

const Activity = require('./models/activity_model.js')(sequelize, Sequelize.DataTypes);


module.exports = (database) = {
  sequelize: sequelize,
  models: { Activity },
  connect,
  model,
};

