/* CHALLENGE:
* Translate roman numerals into number
*/

var romanNumeralDecorder = function(romanNumeral) {
  if (typeof romanNumeral !== "string") {
    return null;
  }
  var numArray = romanNumeral.split('');
  var total = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (DIGIT_VALUES[numArray[i]] < DIGIT_VALUES[numArray[i + 1]]) {
      var temp = DIGIT_VALUES[numArray[i + 1]] - DIGIT_VALUES[numArray[i]];
      total += temp;
      i++;
    } else {
      total += DIGIT_VALUES[numArray[i]];
    }
  }
  return total;
};

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};