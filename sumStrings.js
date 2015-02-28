/* CHALLENGE: 
* Take two strings which contain numbers and add them together
* Numbers can be extremely big (answer cannot have e10, e11 ... en)
*/

function sumStrings(a,b) {
var result = '';
  var len = Math.max(a.length, b.length);
  while (a.length > b.length) {
    b = '0' + b;
  }
  while (b.length > a.length) {
    a = '0' + a;
  }
  var scanner = false;
  for (var i = len - 1; i >= 0; i--) {
    var number = parseInt(a[i]) + parseInt(b[i]);
    if (scanner) {
      number++;
      scanner = false;
    }
    if (number >= 10) {
      result = number.toString()[1] + result;
      scanner = true;
      if (i === 0) {
        result = '1' + result;
      }
    } else {
      result = number.toString() + result;
    }
  }
  while (result[0] === '0') {
    result = result.slice(1);
  }
  return result;
}