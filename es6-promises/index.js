const takeAChance = require('./take-a-chance');

const promise = takeAChance('Jimmy');

promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(`error: ${error.message}`);
})
