/**
 * After taking input from user parse the data and validate
 * save input to configstore
 */

const Configstore = require("configstore");
const jira = require("./Authentication");
const print = require("./api/Console");
const chalk = require("chalk");
const question = require("./api/Questions");
const configStore = new Configstore("jiraconfig");

/**
 * Verify the user and save the object
 * @config object
 */
module.exports = {
  signUpUser: function() {
    let isLoggedIn = configStore.get("encodedString");
    if (!isLoggedIn) {
      question.askCredential().then(answers => {
        module.exports.verifyAndSave(answers);
      });
    } else {
      print.printInfo("You are already logged in");
    }
  },

  verifyAndSave: function(config) {
    // authenticate and save the inputs in config store
    jira.authenticate(config, function(data) {
      if (data.error) {
        print.printError("Unauthorized - Please re-enter your credentials");
      } else {
        module.exports.storeInfo(data);
      }
    });
  },
  /**
   * Store user data after authentication
   * @param {*} data
   */
  storeInfo: function(data) {
    let message = data.success.displayName.split(" ")[0];
    print.printFigletYellow(`Hi ${message}`);
    // saving the data
    let hostname = data.hostname;
    let encodedString = data.encodedString;
    let configStore = new Configstore("jiraconfig");
    configStore.set({ hostname: hostname });
    configStore.set({ encodedString: encodedString });

    console.log(chalk.green.bold("You have Logged in Successfully"));
  }
};
