/**
 * Used to connect JIRA issue APIS
 */
const authenticate = require("../authentication");
const open = require("open");
const util = require("../utils")

module.exports = {
  /**
   * @param issueKey = {}
   * Note that this object must contain EITHER an issueId or issueKey
   * issueKey - 'TEST-12' or issueId
   */
  getIssue: function(issueKey, callback) {
    authenticate
      .currentUser()
      .issue.getIssue(issueKey, function(error, success) {
        let data = success ? success : error;
        return callback(data);
      });
  },
  /**
   * Opens the issue in the default browser
   * hostname/browse/issuekey
   * @issueKey
   */
  openIssue: function(issueKey) {
    let hostName = util.getHostName();
    let URL = `https://${hostName}/browse/${issueKey}`;
    open(URL);
  }
};