const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require ('./lib/intern');
const team = [];
const generateHTML = require('./src/generateHTML');



// initializing function.
function init(){
    // manager questions first.
    managerQs();
}

// MANAGER QUESTIONS function.
function managerQs(){
    console.log('HI! congrats on building your team. Let\'s get started!');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your team manager\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is their employee ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'email address?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'great, thanks! what is their office number?',
            },
        ])
        .then((answers) =>{
            const {name, id, email, office} = answers;
            const manager = new Manager(name, id, email, office);
            team.push(manager);
            addMember();
        });
};

// engineer questions function.
function engineerQs(){
    console.log('you chose... add an engineer! ;D');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'very cool 8) what is their employee ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'hit me with their email address!',
            },
            {
                type: 'input',
                name: 'github',
                message: 'thanks! now, what is their github username?',
            },
        ])
        .then((answers) =>{
            const {name, id, email, github} = answers;
            const engineer = new Engineer(name, id, email, github);
            team.push(engineer);
            addMember();
        });
};

// intern questions function.
function internQs(){
    console.log('you chose... add an intern!!!');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is their name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'employee ID number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'thanks! what is their email address?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'solid. what is the name of the university they are attending?',
            },
        ])
        .then((answers) =>{
            const {name, id, email, school} = answers;
            const intern = new Intern(name, id, email, school);
            team.push(intern);
            addMember();
        });
};

// add engineer, intern, or, ya done? function.
function addMember(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'add_member',
                message: 'would you like to add another team member?',
                choices: ['yeah, engineer', 'yeah, intern', 'no thanks, build my team plz!'],
            },
        ])
        .then((response) =>{
            switch(response.add_member){
                case 'yeah, engineer':
                    engineerQs();
                    break;
                case 'yeah, intern':
                    internQs();
                    break;
                default:
                    finishUp();
            };
        });
};

// FINISH🏁
function finishUp(){
    fs.writeFile('./dist/index.html', generateHTML(team), (err) =>
    err ? console.log(err) : console.log('WOOHOO. your team was created successfully!')
    );
};

init();