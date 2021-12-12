const path = require("path");
const rootPath = path.resolve(__dirname, "../../");

module.exports = {
  apps: [
    {
      name: "minesweeper",
      script: path.join(rootPath, "src/server/index.js")
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      // host: " ec2-3-140-90-28.us-east-2.compute.amazonaws.com",
      key: path.join(rootPath, "configs/aws/strava-report-gen.pem"),
      // ref: "origin/master",
      // repo: "git@github.com:jamesh48/Mini-Games.git",
      // path: "/home/ubuntu/minesweeper",
      // "post-deploy":
        // "cd /home/ubuntu/minesweeper/source/beatminesweeper && npm install && npm run build && pm2 startOrRestart ./configs/pm2/ecosystem.config.js && pm2 save"
    }
  }
};
