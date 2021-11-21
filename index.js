const inquirer = require('inquirer');
const fs = require('fs'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let colleages = [];


const CreateManager = () => {
  inquirer.prompt(
  [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Manager\'s name?',
      validate: input => {
          if (input) {
              return true;
          } else {
              console.log ("Please enter your manager\'s name");
              return false; 
          }
      },
    },
    {
        type: 'number',
        message: 'What is your Manger\'s Employee ID?',
        name: 'id',
        validate: input => {
          if  (input) {
              return true; 
          } else {
              console.log ('Please enter your manager\'s ID')
              return false;
          }
      },
    },
    {
        type: 'input',
        message: 'What is your Manger\'s Email Adress?',
        name: 'email',
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
              return true;
          } else {
              console.log ('Please enter your manager\'s email address')
              return false; 
          }
    }
    },
    {
          type: 'number',
          message: 'What is your Manger\'s Office Number?',
          name: 'officeNumber',
          validate: input => {
            if  (input) {
               return true;
            } else {
              console.log ('Please enter a valid office number')
              return false; 
            }
        }
    },
    {
      type: 'list',
      message: 'Would you like to add an additional team member?',
      name: 'addTeam',
      choices: ['Intern', 'Engineer', 'No, my team is complete']
    },


])


 .then(MgrData => {
   const {name , id, email, officeNumber, addTeam} = MgrData;
   const manager = new Manager(name, id , email, officeNumber);
   colleages.push(manager);
   if (addTeam === "Engineer" || addTeam ==="Intern") {
    CreateColleague(addTeam);
  } else {
    console.log(colleages);
    createFile(colleages);
  }
})

};

const CreateColleague = (role) => {
  inquirer.prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'What is the Employee\'s name?',
          validate: input => {
              if (input) {
                  return true;
              } else {
                  console.log ('Please enter the employee\'s name');
                  return false; 
              }
          },
        },
        {
            type: 'number',
            message: 'What is the employee\'s Employee ID?',
            name: 'id',
            validate: input => {
              if  (input) {
                  return true; 
              } else {
                console.log ('Please enter the employee\'s ID number')
                  return false;
              }
          },
        },
        {
            type: 'input',
            message: 'What is the employee\'s Email Adress?',
            name: 'email',
            validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log ('Please enter a valid email address')
                  return false; 
              }
          }
        },
        {
              type: 'input',
              message: 'What is the employees\'s GitHub username?',
              name: 'gitHub',
              when: (role === 'Engineer'),
              validate: input => {
                if  (input) { 
                    return true; 
                } else {
                  console.log ('Please enter a valid GitHub username')
                    return false;
                }
            }
        },
        {
              type: 'input',
              message: 'What is the name of employees\'s school?',
              name: 'school',
              when: (role === 'Intern'),
              validate: input => {
                if  (input) {
                    return true; 
                } else {
                  console.log ('Please enter a valid office number')
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Would you like to add an additional team member?',
            name: 'addTeam',
            choices: ['Intern', 'Engineer', 'No, my team is complete']
        },
    ])

    .then(empData => {
      const {name , id, email, gitHub, school, addTeam} = empData;
        
      if (role === 'Engineer') {
          let employee = new Engineer(name, id, email, gitHub);
          colleages.push(employee);
      } else if (role === "Intern") {
          let employee = new Intern(name, id, email, school); 
          colleages.push(employee);     
      } 
       
      if (addTeam === "Engineer" || addTeam ==="Intern") {
        CreateColleague(addTeam);
      } else {
        console.log(colleages);
        createFile(colleages);
      }
    })

    
  };

    // const createHTML = () => {


    // }

  const createFile = (team) => {
  const data = JSON.stringify(team);
  fs.writeFile('./dist/index.html', data, (err) =>
  err ? console.error(err) : console.log('Successfully created team profile')
  ) 
};

  

  CreateManager();