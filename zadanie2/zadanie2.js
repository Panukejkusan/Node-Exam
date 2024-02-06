const colors = require("colors");
const yargs = require("yargs");

const word = yargs.argv.word;
// console.log(yargs);
// console.log(word);
// console.log(word.rainbow);


if (word !== undefined 
  && word !== null 
  && word !==''
  && typeof word !== 'number'){
  console.log(word.rainbow);  
} else {
  console.log(colors.red('Please provide a string parameter to log in rainbow colors.'));
}

// node zadanie2.js --word=nalesnik