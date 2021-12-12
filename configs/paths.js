const path = require("path");

module.exports = {
  rootPath: (target) => path.join(__dirname, "../", target),
  relativePath: (route) => path.resolve(__dirname, route)
};
