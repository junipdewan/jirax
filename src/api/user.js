/**
 * User Related APIs
 *
 */
const auth = require("../authentication");
module.exports = {
  /**
   * Returns a list of users that match the search string.
   * Please note that this resource should be called with an issue key
   * when a list of assignable users is retrieved for editing
   *
   * @param {Object} opts The request options sent to the Jira API
   * @param {*} cb
   * @param {string} opts.username The username
   * @param {string} opts.issueKey The issue key for the issue being edited we need to find assignable users
   */
  searchAssignableUser: function(options, cb) {
    auth.currentUser().user.searchAssignable(options, function(err, res) {
      let users = [];
      if (err) {
        // if err then return the empty users array
        return cb(users);
      }
      if (res) {
        res.map(user => {
          users.push({ accountId: user.accountId, name: user.displayName });
        });
        return cb(users);
      }
    });
  }
};