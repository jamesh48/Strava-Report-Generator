const path = require("path");
const rootPath = path.resolve(__dirname, "../../");

module.exports = function (grunt) {
  require("time-grunt")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON(path.join(rootPath, "package.json")),
    webpack: {
      myConfig: require(path.join(
        rootPath,
        "configs/webpack/webpack.config.js"
      ))
    },
    gitadd: {
      task: {
        options: {
          all: true
        }
      }
    },
    gitcommit: {
      task: {
        options: {
          message: "One shot deploy script"
        }
      }
    },
    gitpush: { your_target: {} },
    cssmin: {
      options: {
        level: {
          1: {
            specialComments: 0
          }
        }
      },
      target: {
        files: [
          {
            expand: true,
            cwd: path.join(rootPath, "build/dist/public"),
            src: ["*.css", "!*.min.css"],
            dest: path.join(rootPath, "build/dist/public"),
            ext: ".css"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks("grunt-git");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("build", "webpack");
  // Deploy To AWS First
  grunt.registerTask("deploy", ["build", /*"uglify",*/ "cssmin"]);
  // Push to Github
  grunt.registerTask("git", ["gitadd", "gitcommit", "gitpush"]);

  // Nuclear Option
  grunt.registerTask("deploy-all", ["deploy", "git"]);
};
