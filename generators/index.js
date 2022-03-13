var Generator = require("yeoman-generator");

module.exports = class extends Generator {

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?",
      },
      {
        type: "input",
        name: "username",
        message: "What's your username",
        store: true,
      },
    ]);
  }

  writing() {
    this.log("app name", this.answers.name);
    this.log("cool feature", this.answers.cool);
    this.log("username", this.answers.username);

    this.fs.copyTpl(this.templatePath("spring-batch"), this.destinationPath(), {name: this.answers.name});
  }

  install() {
    this.spawnCommand("mvn", ["clean", "install", "package", "-U", "-DskipTests"]);
  }
};
