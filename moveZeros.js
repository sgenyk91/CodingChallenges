/* CHALLENGE:
* Given an array of numbers, move all the zeros to the end of the array
*/

var moveZeros = function (arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      --i;
      --len;
    }
  }
  return arr;
}