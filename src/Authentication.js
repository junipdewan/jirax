/**
 * Authentication Module
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * return the jiraAuth BASE object and then we can call the apis
 * on the base of the main object.
 *
 */
// your API Token = WwUjxh5TM2QkGovimPrc2FDB;

const jiraConnector = require("jira-connector");
const encode = require("./Encode");
const Configstore = require("configstore");
const jiraconfig = new Configstore("jiraconfig");

module.exports = {
  /**
   * Config Object contains the username, hostname and API token
   * @param {*} config
   */
  authenticate: function(config, callback) {
    let HOST_NAME = config.host_name
      ? config.host_name
      : "promobi.atlassian.net";
    let encodedString64 = encode.encodeToBase64(config);

    // JIRA BASE OBJECT
    const JIRA_AUTH = new jiraConnector({
      host: HOST_NAME,
      basic_auth: {
        base64: encodedString64
      }
    });

    JIRA_AUTH.myself.getMyself({}, function(error, success) {
      if (success) {
        return callback({
          success: success,
          hostname: HOST_NAME,
          encodedString: encodedString64
        });
      } else {
        return callback({ error: "UnAuthorized" });
      }
    });
  },
  /**
   * After authentication collect the keys from the configstore
   * store contains the { "hostname", "encodedString"} as keys
   */
  currentUser: function() {
    let HOST_NAME = jiraconfig.get("hostname");
    let encodedString64 = jiraconfig.get("encodedString");

    if (!HOST_NAME) {
      console.log("Please Loggin using your API Token");
    } else {
      var JIRA_AUTH = new jiraConnector({
        host: HOST_NAME,
        basic_auth: {
          base64: encodedString64
        }
      });

      return JIRA_AUTH;
    }
  }
};
