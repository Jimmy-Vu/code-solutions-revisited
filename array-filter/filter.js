function filter(array, predicate) {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      returnArray.push(array[i]);
    }
  }

  return returnArray;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbersFJ = filter(numbers, (num) => num % 2 === 0);
console.log('evenNumbersFJ;', evenNumbersFJ);
