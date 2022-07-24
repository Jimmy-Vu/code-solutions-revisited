function reduce(array, reducer, initialValue) {
  let initialIndex = 0;
  if (initialValue === undefined) {
    initialValue = array[0];
    initialIndex = 1;
  }

  for (let i = initialIndex; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = reduce(numbers, (preVal, nextVal) => preVal + nextVal);
console.log('sumRJ:', sum);

const product = reduce(numbers, (preVal, nextVal) => preVal * nextVal);
console.log('productRJ:', product);

const balance = reduce(account, (preVal, nextVal) => {
  if (nextVal.type === 'deposit') {
    preVal += nextVal.amount;
  } else {
    preVal -= nextVal.amount;
  }
  return preVal;
}, 0);
console.log('balanceRJ:', balance);

const composite = reduce(traits, (preVal, nextVal) => Object.assign(preVal, nextVal));
console.log('compositeRJ:', composite);
