const read = require('./read');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const operation = process.argv[2];
const argOne = process.argv[3];
const argTwo = process.argv[4];

switch (operation) {
  case 'read':
    read();
    break;
  case 'create':
    create(argOne);
    break;
  case 'remove':
    remove(argOne);
    break;
  case 'update':
    update(argOne, argTwo);
}
