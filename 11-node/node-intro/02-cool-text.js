const chalk = require('chalk');
const readline = require('readline');
const figlet = require('figlet');

// It really is this much trouble:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Make some user provided text look cool:
rl.question('Enter some text: ', function (response) {
    console.log(
        chalk.yellow(
            figlet.textSync(response, {
                font: 'Crawford',
                verticalLayout: 'default',
                horizontalLayout: 'default'
            })
        )
    );
    rl.close();
});
