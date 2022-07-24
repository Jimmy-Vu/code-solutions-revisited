function map(array, transform) {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    returnArray.push(transform(array[i]));
  }
  return returnArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = map(numbers, num => num * 2);
console.log('doubledMJ:', doubled);

const prices = map(numbers, num => `$${num.toFixed(2)}`);
console.log('pricesMJ:', prices);

const upperCased = map(languages, lang => lang.toUpperCase());
console.log('upperCasedMJ:', upperCased);

const firstLetters = map(languages, lang => lang[0]);
console.log('firstLettersMJ:', firstLetters);
