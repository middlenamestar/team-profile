# Team Profile Generator

Meet the stardust team! This command-line application takes in information about employees on a software engineering team, called stardust✪, and generates an HTML page that displays information about each employee.

## Installation

In order to properly run this application, you will need to clone the repository, run Node, and install Jest and Inquirer.

## Usage

After cloning the repository, install Jest and Inquirer by running ```npm i jest``` and ```npm i inquirer```. Now, you can run some tests! Use ```npm run test``` to see that all tests pass with flying colours! Tests are vital to keeping code maintainable.

Run ```node index.js``` or ```npm start``` to get the questions rolling. You will be prompted for information about the Team Manager and given options to continue building your team or finish up. Team members you can add are Engineer and Intern. Information gathered about each employee includes assets like name, ID #, email address, office number, GitHub username, and name of university. Some information is repeated throughout each employee prompt because each employee needs a standard set of information about them!

After answering all the questions and adding all the team members you'd like, the application will create a file named under 'index.html' for you! Employee information is soundly displayed in individual cards against a blue background.

![stardust Team webpage features employees' cards against a simple layout.](assets/stardust_homepage.png)

P.S. stardust rules!

![VS Code application preview of prompts.](assets/stardust_code.png)

This second image is the majority of what terminal should look like when questions are prompted. Input will be generated onto the HTML page.


View this walkthrough [video](https://drive.google.com/file/d/1Qz7S0mR4EDm4lQN4_fx9eStFh4r9aE34/view) to learn and explore more about the application.

## Credits

Bootstrap, Google Fonts, [Jest](https://jestjs.io/), [Inquirer](https://www.npmjs.com/package/inquirer).

## License

Copyright (c) 2022 stardust productions.

Licensed under the MIT License.