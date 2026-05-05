const sh = require('superheroes');
const chalk = require('chalk');
const moment = require('moment');



console.log(chalk.blue(sh.randomSuperhero()));

const time = new Date();

const parsedTime = moment(time).format('hh:mm:ss');

console.log(chalk.red(parsedTime));