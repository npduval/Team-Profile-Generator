const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is your Manager\'s name?',
    },
    {
      type: 'number',
      message: 'What is your Manger\'s Employee ID?',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'What is your Manger\'s Email Adress?',
      name: 'managerEmail',
    },
    {
    type: 'number',
    message: 'What is your Manger\'s Office Number?',
    name: 'managerOffice',
    },
    {
        type: 'number',
        message: 'What is your Manger\'s Office Number?',
        name: 'managerOffice',
    },
    {
        type: 'list',
        message: 'Would you like to add an additional team member?',
        name: 'addTeam',
        choices: ['Intern', 'Engineer', "No, my team is complete"]
    },
]).then(awnsers => {
    console.log(awnsers);

})