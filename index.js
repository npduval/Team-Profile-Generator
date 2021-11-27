const inquirer = require('inquirer');
const fs = require('fs'); 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { createInflate } = require('zlib');

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
    createHTML(colleages);
    
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
          let engineer = new Engineer(name, id, email, gitHub);
          colleages.push(engineer);
      } else if (role === "Intern") {
          let intern = new Intern(name, id, email, school); 
          colleages.push(intern);     
      } 
       
      if (addTeam === "Engineer" || addTeam ==="Intern") {
        CreateColleague(addTeam);
      } else {
        console.log(colleages);
        createHTML(colleages);
      }
    })

    
  };


    const createHTML = (team) => {

      let file = [`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link href="../src/style.css" rel="stylesheet">
          <title>Template</title>
      </head>
      <body>
          <nav class="navbar navbar-expand-xlg navbar-light bg-info">
              <div class="container-md">
                <span class="navbar-brand" id="navbar">Team Profile</span>
              </div>
          </nav>
          <main>
              <div class="container-fluid">
                  <div class="row justify-content-center" id="cards">`];

      for ( i = 0; i < team.length; i++) {
      
        if (team[i] instanceof Manager) {
         
          const data = `<div class="col-4 mt-5">
          <div class="card  h-100" style="width: 18rem;">
              <div class="card-header text-dark bg-info mb-3">
              Manager
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${team[i].name}</li>
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">Office: ${team[i].officeNumber}</li>
              </ul>
          </div>
      </div>`;
          file.push(data);
        } else if (team[i] instanceof Engineer) {
          
          const data = `<div class="col-4 mt-5">
          <div class="card  h-100" style="width: 18rem;">
              <div class="card-header text-dark bg-info mb-3">
              Engineer
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${team[i].name}</li>
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">GitHub: ${team[i].gitHub}</li>
              </ul>
          </div>
      </div>`;
          file.push(data);
        } else if (team[i] instanceof Intern) {
         
         const data = `<div class="col-4 mt-5">
          <div class="card  h-100" style="width: 18rem;">
              <div class="card-header text-dark bg-info mb-3">
              Intern
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${team[i].name}</li>
              <li class="list-group-item">ID: ${team[i].id}</li>
              <li class="list-group-item">Email: ${team[i].email}</li>
              <li class="list-group-item">School: ${team[i].school}</li>
              </ul>
          </div>
      </div>`;
        file.push(data);
        }

      }

      let footer = `  </div></div></main></body></html>`
      file.push(footer);
      let full = file.join();

      createFile(full);


    }

  const createFile = (html) => {
  
  fs.writeFile('./dist/index.html', html, (err) =>
  err ? console.error(err) : console.log('Successfully created team profile')
  ) 
};

  

  CreateManager();