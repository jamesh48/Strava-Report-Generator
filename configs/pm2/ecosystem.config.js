const path = require("path");
const rootPath = path.resolve(__dirname, "../../");

module.exports = {
  apps: [
    {
      name: "strava-report-generator",
      script: path.join(rootPath, "src/server/index.js")
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-135-119-109.us-east-2.compute.amazonaws.com",
      key: path.join(rootPath, "configs/aws/strava-report-gen.pem"),
      ref: "origin/main",
      repo: "git@github.com:jamesh48/Strava-Report-Generator.git",
      path: "/home/ubuntu/strava-report-generator",
      "post-deploy":
        "cd /home/ubuntu/strava-report-generator/source && npm install && npm run build && pm2 startOrRestart ./configs/pm2/ecosystem.config.js && pm2 save"
    }
  }
};
