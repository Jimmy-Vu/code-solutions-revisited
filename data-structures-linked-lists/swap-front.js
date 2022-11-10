/* exported swapFront */

function swapFront(list) {
 if (list.next !== null) {
  const oldSecond = list.next.data;
  list.next.data = list.data;
  list.data = oldSecond;
  return list;
 }
 return list;
}
