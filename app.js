'use strict'
const getNames = require('./mymodule')

const  chalk = require('chalk')
//require always up and it's better to separate


const students = [{
  name: 'Anna',
  age:28
}, {
  name:'paolo',
  age:44
}];
// for(let i = 0; i<students.length; i++){
//   console.log(students[i].name)
// }

//node doesn't have acceses per default 

console.log(chalk.blue(getNames(students)));

