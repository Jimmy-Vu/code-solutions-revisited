/* exported getLength */

function getLength(list) {
  let length = 1;
  while (list.next !== null) {
    list = list.next;
    length++;
  }
  return length;
}
