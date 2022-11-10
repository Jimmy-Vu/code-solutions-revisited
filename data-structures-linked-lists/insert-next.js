/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const insertList = new LinkedList(value);
  const restOfList = list.next;
  list.next = insertList;
  list.next.next = restOfList;
  return list;
}
