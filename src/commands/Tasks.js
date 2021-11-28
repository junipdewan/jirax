/** Issues Related commands */
const program = require('commander');
/**
 * 1. Fetch all the issue transitions.
 * 2. jirax task change KEY - Change the status of the task (transition to another status)
 * 3. jirax task detail KEY - get detail of the task. ( show the details of the task)
 * 4. jirax task assign KEY - Assign issue to another user in the same task
 */
const task = require('../api/task');
const aa = require('../services/AuthServices');
const assignTask = require('../operations/AssignIssue');

exports.loadTasksCommands = () => {
    const openTasksCommands = program
        .command('task')
        .description('jira task actions')
        .action(() => {
            // show the available issues commands
            openTasksCommands.help();
        });

    // change status of the issue
    openTasksCommands
        .command('change')
        .argument('<KEY>', 'Task KEY that you want to change')
        .description('Change the status of the issue')
        .action(key => {
            task.changeIssueStatus(key);
        });

    // show details
    openTasksCommands
        .command('deails')
        .argument('<KEY>', 'Task KEY that you want to view')
        .description('Details of the Task KEY')
        .action(key => {
            // ISSUE KEY
        });

    // assign issue
    openTasksCommands
        .command('assign')
        .argument('<KEY>', 'Issue key that you want to assign')
        .description('Assign issue to another user')
        .action(key => {
            // ISSUE KEY -
            assignTask.searchUser(key);
        });
};