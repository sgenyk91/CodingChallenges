/* CHALLENGE:
* 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should return 14
*/

function calc(expr) {
  var storage = [];
  if (expr.length === 0) {
    return 0;
  }
  expr = expr.split(' ');
  for (var i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i])) {
      storage.push(parseFloat(expr[i]));
    }
    var len = storage.length;
    switch(expr[i]) {
      case '+':
        storage[len - 2] = storage[len - 2] + storage[len - 1];
        storage.pop();
        break;
      case '-':
        storage[len - 2] = storage[len - 2] - storage[len - 1];
        storage.pop();
        break;
      case '*':
        storage[len - 2] = storage[len - 2] * storage[len - 1];
        storage.pop();
        break;
      case '/':
        storage[len - 2] = storage[len - 2] / storage[len - 1];
        storage.pop();
        break;
      default:
    }
  }
  if (storage.length > 1) {
    return storage[storage.length - 1];
  }
  return storage[0];
}