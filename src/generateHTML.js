let content = [];

function generateHTML(team){
    for(let i = 0; i < team.length; i++){
        if(team[i].getRole() === 'Manager'){
            genManager(team[i]);
        }
        if(team[i].getRole() === 'Engineer'){
            genEngineer(team[i]);
        }
        if(team[i].getRole() === 'Intern'){
            genIntern(team[i]);
        }
    }
    content = content.join('');
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>STARDUST TEAM</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital@0;1&family=Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="pt-2 pb-1 px-4">
              <h1 id="head-title" class="display-4">stardust <span id="team-ros" class="px-2">team roster.</span></h1>
              <p id="head-descr">meet our team<span id="star">☆</span></p>
        </header>
        <div class="container pt-5 pb-3">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                ${content}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    </body>
    </html>`;
};

// MANAGER CARD - whenever we're generating a manager card, it's going to push this html information into the content array, And the content array is going to be put into the general html body b/w the container.
function genManager(manager){
    // console.log(manager.name);
    // Manager { name: 'pk', id: '32', email: 'prt', office: '89' }
    // console.log(manager.getRole());
    let managerCard =
    `<div class="col-6 col-md-6 col-lg-3 card">
        <div class="card-body">
            <h5 class="card-title">${manager.name}, ${manager.getRole()}</h5>
            <h6 class="card-subtitle text-muted">ID: ${manager.id}</h6>
            <p class="card-text">Office Suite: ${manager.office}</p>
            <p class="card-text">you can reach me at:</p>
                <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
        </div>
    </div>`;
    content.push(managerCard);
};

function genEngineer(engineer){
    // console.log(engineer);
    let engineerCard =
    `<div class="col-6 col-md-6 col-lg-3 card">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}, ${engineer.getRole()}</h5>
            <h6 class="card-subtitle text-muted">ID: ${engineer.id}</h6>
            <p class="card-text">you can reach me at:</p>
                <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
                <a target="_blank" href="https://github.com/${engineer.github}">github/${engineer.github}</a>
        </div>
    </div>`;
    content.push(engineerCard);
};

function genIntern(intern){
    let internCard =
    `<div class="col-6 col-md-6 col-lg-3 card">
        <div class="card-body">
            <h5 class="card-title">${intern.name}, ${intern.getRole()}</h5>
            <h6 class="card-subtitle text-muted">ID: ${intern.id}</h6>
            <p class="card-text">University Attending: ${intern.school}</p>
            <p class="card-text">you can reach me at:</p>
                <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
        </div>
    </div>`;
    content.push(internCard);
};

module.exports = generateHTML;

// <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
// or its getOffice()?