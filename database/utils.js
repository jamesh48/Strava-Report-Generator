const sequelize = require("./config.js");

module.exports = async (Model, values, condition) => {

  const obj = await Model.findOne({where: condition});

  if (obj) {
    console.log('updating')
    await obj.update(values);
    return;
  }
  console.log('creating')
  await Model.create(values);
  return;
}