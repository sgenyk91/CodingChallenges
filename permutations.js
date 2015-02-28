/* COMPLETE:
* Given a string, give all possible permutations of the string without listing any duplicates
*/

function permutations(string) {
  var storage = {};
  (function recursion(leftOverString, result) {
    result = result || '';
    if (leftOverString.length === 0) {
      storage[result] = result;
    } else {
      for (var i = 0; i < leftOverString.length; i++) {
        var tempResult = result + leftOverString[i];
        var tempLeftOver = leftOverString.slice();
        tempLeftOver.splice(i, 1);
        recursion(tempLeftOver, tempResult);
      }
    }
  })(string.split(''));
  return Object.keys(storage);
}