/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  var valueList = new LinkedList(value);
  while (list !== null) {
    if (list.next === null) {
      list.next = valueList;
      return list;
    }
    list = list.next;
  }
}
