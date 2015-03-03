function parseMolecule(formula) {
  var multiplier = 1;
  var adder = 0;
  var info = '';
  var multiplierArray = [];
  var storage = {};
  var typesOfStartBraces = {'(': true, '[': true, '{': true};
  var typesOfEndBraces = {')': true, ']': true, '}': true};
  for (var i = formula.length - 1; i >= 0; i--) {
    if (formula[i] >= 0 && formula[i] <= 9) {
      info = formula[i] + info;
    } else if (info.length && typesOfEndBraces[formula[i]]) {
      info = parseInt(info);
      multiplier *= info;
      multiplierArray.push(info);
      info = '';
    } else if (typesOfStartBraces[formula[i]]) {
      multiplier /= multiplierArray.pop();
    } else if (formula[i] >= 'A' && formula[i] <= 'Z' || formula[i] >= 'a' && formula[i] <= 'z') {
      var letter = formula[i];
      if (formula[i] >= 'a' && formula[i] <= 'z') {
        letter = formula[--i] + letter;
      }
      var number = 1;
      if (info.length && parseInt(info) !== 1) {
        adder += parseInt(info) - 1;
        info = '';
      }
      if (adder > 0) {
        number += adder;
        adder = 0;
      }
      if (multiplier > 1) {
        number *= multiplier;
      }
      storage[letter] = storage[letter] + number || number;
    }
  }
  return storage;
}