/* CHALLNEGE:
* Find the length of the loop of a linked list that contains a tail and loop
*/

function loop_size(node) {
  var counter = 0;
  node['test'] = node.test ? !node.test : true;
  node['count'] = counter;
  while (node.test !== node.next.test) {
    node.next.test = node.test;
    node = node.next;
    node['count'] = ++counter;
  }
  var loopSize = node.count - node.next.count;
  return loopSize;
}