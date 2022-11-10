/* exported removeTail */

function removeTail(list) {
  if (list.next === null) { return list }
  var currentNode = list;
  while (currentNode.next) {
    if (currentNode.next.next === null) {
      currentNode.next = null;
      return currentNode;
    }
    currentNode = currentNode.next;
  }
}
