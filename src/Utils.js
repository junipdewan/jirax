/**
 * Utils for the common funcional Usages
 */
const Configstore = require("configstore");
const jiraconfig = new Configstore("jiraconfig");
const datetimeformat = require("dateformat");
const consoleApi = require("./api/console");

module.exports = {
  getBaseUrl: function() {
    let hostname = jiraconfig.get("hostname");
    let url = `https://${hostname}`;
    return url;
  },

  getHostName: function() {
    let hostname = jiraconfig.get("hostname");
    return hostname;
  },

  getEncodedString: function() {
    let encodedString64 = jiraconfig.get("encodedString");
    return encodedString64;
  },
  /**
   * @returns Date & Time
   * @format 10/May/19 12:11 PM
   * @param {*} datetime
   */
  formatDate: function(datetime) {
    return datetimeformat(datetime, "dd/mmmm/yy, h:MM TT");
  },
  /**
   * Retruns the bgcolor for text on basis of issueType
   * @param {} key issueType
   */
  setIssueColor: function(key) {
    switch (key) {
      case "Bug":
        return consoleApi.bgRedBright(key);
      case "Improvement":
        return consoleApi.printBgGreenBright(key);
      case "New Feature":
        return consoleApi.printBgGreenBright(key);
      case "Epic":
        return consoleApi.bgMagentaBright(key);
      case "Story":
        return consoleApi.printBgGreenBright(key);
      case "Sub-task":
        return consoleApi.printbgBlueBright(key);
      case "Task":
        return consoleApi.printbgBlueBright(key);
      default:
        return consoleApi.printbgBlueBright(key);
    }
  }
};
