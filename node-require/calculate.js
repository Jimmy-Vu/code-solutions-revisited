const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let firstValue = parseInt(process.argv[2], 10);
let operation = process.argv[3];
let secondValue = parseInt(process.argv[4], 10);


switch (operation) {
  case 'plus':
  case 'add':
    console.log('Result:', add(firstValue, secondValue));
    break;
  case 'minus':
  case 'subtract':
    console.log('Result:', subtract(firstValue, secondValue))
    break;
  case 'multiplies':
  case 'times':
    console.log('Result:', multiply(firstValue, secondValue))
    break;
  case 'over':
    console.log('Result:', divide(firstValue, secondValue))
}
